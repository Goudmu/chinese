"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Exercise, Lesson, Pair } from "@/data/course";
import { useProgress, useHydrated } from "@/store/useProgress";

type Item = { ex: Exercise; retry: boolean };
type Status = "idle" | "correct" | "wrong";
const QUESTION_LIMIT = 10;

function getParagraphAnswer(
  exercise: Extract<Exercise, { type: "paragraph" }>,
) {
  let blankIndex = 0;
  return exercise.passage
    .map((line) =>
      line.replace(
        /\.{3,}|…+/g,
        () => exercise.blanks[blankIndex++]?.answer ?? "",
      ),
    )
    .join(" ");
}

const shuffle = <T,>(a: T[]): T[] => {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
};

const prepare = (ex: Exercise): Exercise => {
  if (ex.type === "matching") return ex;
  if (ex.type === "paragraph") {
    return {
      ...ex,
      blanks: ex.blanks.map((blank) => ({
        ...blank,
        options: shuffle([blank.answer, ...blank.extras]),
      })),
    };
  }
  return { ...ex, options: shuffle(ex.options) };
};

const makeQueue = (lesson: Lesson): Item[] =>
  shuffle(lesson.exercises)
    .slice(0, QUESTION_LIMIT)
    .map((ex) => ({ ex: prepare(ex), retry: false }));

const btn =
  "w-full rounded-2xl border-b-4 px-6 py-3.5 text-base font-extrabold transition-transform active:translate-y-0.5 active:border-b-2 disabled:cursor-not-allowed";
const primary = `${btn} bg-jade border-jade-dark text-white disabled:bg-line disabled:border-[#b9c8c0] disabled:text-muted`;

export default function LessonPlayer({ lesson }: { lesson: Lesson }) {
  const hydrated = useHydrated();
  const completeLesson = useProgress((s) => s.completeLesson);

  const [queue, setQueue] = useState<Item[]>(() => makeQueue(lesson));
  useEffect(() => {
    setQueue(makeQueue(lesson));
  }, [lesson]);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [built, setBuilt] = useState<number[]>([]); // indeks kata yang dipilih (menyusun kalimat)
  const [typedAnswer, setTypedAnswer] = useState("");
  const [paragraphAnswers, setParagraphAnswers] = useState<
    Record<number, string>
  >({});
  const [showParagraphPinyin, setShowParagraphPinyin] = useState(false);
  const [showParagraphTranslation, setShowParagraphTranslation] =
    useState(false);
  const [answerMode, setAnswerMode] = useState<"word_bank" | "typing">(
    "word_bank",
  );
  const builtWordRefs = useRef(new Map<number, HTMLButtonElement>());
  const feedbackAudioRef = useRef<{
    correct: HTMLAudioElement;
    incorrect: HTMLAudioElement;
  } | null>(null);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  const speechFadeRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioFadeRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pendingWordFlight = useRef<{
    key: number;
    left: number;
    top: number;
  } | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [firstTry, setFirstTry] = useState(0); // jumlah soal benar pada percobaan pertama
  const [phase, setPhase] = useState<"play" | "done">("play");

  function speakChinese(text: string) {
    if (
      typeof window === "undefined" ||
      !/[\u4e00-\u9fff]/.test(text) ||
      !("speechSynthesis" in window)
    )
      return;

    if (speechFadeRef.current) clearInterval(speechFadeRef.current);
    speechFadeRef.current = null;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN";
    utterance.rate = 0.85;
    utterance.onend = () => {
      if (speechRef.current === utterance) speechRef.current = null;
      if (speechFadeRef.current) clearInterval(speechFadeRef.current);
      speechFadeRef.current = null;
    };
    speechRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }

  function fadeSounds() {
    const utterance = speechRef.current;
    if (utterance && "speechSynthesis" in window) {
      if (speechFadeRef.current) clearInterval(speechFadeRef.current);
      const startVolume = utterance.volume;
      const startedAt = Date.now();
      speechFadeRef.current = setInterval(() => {
        const progress = Math.min((Date.now() - startedAt) / 1000, 1);
        utterance.volume = startVolume * (1 - progress);
        if (progress === 1 || speechRef.current !== utterance) {
          if (speechFadeRef.current) clearInterval(speechFadeRef.current);
          speechFadeRef.current = null;
          if (speechRef.current === utterance) {
            window.speechSynthesis.cancel();
            speechRef.current = null;
          }
        }
      }, 50);
    }

    const audioElements = feedbackAudioRef.current
      ? Object.values(feedbackAudioRef.current)
      : [];
    if (audioElements.some((audio) => !audio.paused && !audio.ended)) {
      if (audioFadeRef.current) clearInterval(audioFadeRef.current);
      const startVolumes = audioElements.map((audio) => audio.volume);
      const startedAt = Date.now();
      audioFadeRef.current = setInterval(() => {
        const progress = Math.min((Date.now() - startedAt) / 1000, 1);
        audioElements.forEach((audio, index) => {
          if (!audio.paused && !audio.ended)
            audio.volume = startVolumes[index] * (1 - progress);
        });
        if (
          progress === 1 ||
          audioElements.every((audio) => audio.paused || audio.ended)
        ) {
          if (audioFadeRef.current) clearInterval(audioFadeRef.current);
          audioFadeRef.current = null;
          audioElements.forEach((audio) => {
            if (!audio.paused && !audio.ended) {
              audio.pause();
              audio.currentTime = 0;
            }
            audio.volume = 1;
          });
        }
      }, 50);
    }
  }

  useEffect(
    () => () => {
      if (speechFadeRef.current) clearInterval(speechFadeRef.current);
      if (audioFadeRef.current) clearInterval(audioFadeRef.current);
      if (typeof window !== "undefined" && "speechSynthesis" in window)
        window.speechSynthesis.cancel();
    },
    [],
  );

  useLayoutEffect(() => {
    const flight = pendingWordFlight.current;
    if (!flight) return;
    pendingWordFlight.current = null;

    const target = builtWordRefs.current.get(flight.key);
    if (
      !target ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const { left, top } = target.getBoundingClientRect();
    target.animate(
      [
        {
          transform: `translate(${flight.left - left}px, ${flight.top - top}px) scale(0.82)`,
        },
        { transform: "translate(0, 0) scale(1.08)", offset: 0.78 },
        { transform: "translate(-3px, 0) rotate(-3deg)", offset: 0.84 },
        { transform: "translate(3px, 0) rotate(3deg)", offset: 0.9 },
        { transform: "translate(-2px, 0) rotate(-2deg)", offset: 0.95 },
        { transform: "translate(0, 0) rotate(0)" },
      ],
      { duration: 520, easing: "cubic-bezier(0.2, 0.8, 0.2, 1)" },
    );
  }, [built]);

  if (!hydrated) return null;

  const total = Math.min(lesson.exercises.length, QUESTION_LIMIT);
  const item = queue[i];
  const ex = item.ex;
  const xpGained = 10 + firstTry;
  const locked = status !== "idle";

  const canCheck =
    ex.type === "word_bank"
      ? answerMode === "typing"
        ? typedAnswer.trim().length > 0
        : built.length > 0
      : ex.type === "multiple_choice"
        ? picked !== null
        : ex.type === "paragraph"
          ? ex.blanks.every((blank) => paragraphAnswers[blank.id] !== undefined)
          : false;
  const correctAnswer =
    ex.type === "word_bank"
      ? ex.answer.join("")
      : ex.type === "multiple_choice"
        ? ex.answer
        : ex.type === "paragraph"
          ? getParagraphAnswer(ex)
          : "";

  function playFeedbackSound(correct: boolean) {
    if (audioFadeRef.current) clearInterval(audioFadeRef.current);
    audioFadeRef.current = null;
    if (!feedbackAudioRef.current) {
      feedbackAudioRef.current = {
        correct: new Audio("/sounds/Correct_Answer.mp3"),
        incorrect: new Audio("/sounds/Incorrect_Answer.mp3"),
      };
    }

    const audio = correct
      ? feedbackAudioRef.current.correct
      : feedbackAudioRef.current.incorrect;
    audio.currentTime = 0;
    void audio.play().catch((error: unknown) => {
      console.error("Tidak dapat memutar efek suara jawaban.", error);
    });
  }

  function check() {
    if (ex.type === "matching") return;
    const ok =
      ex.type === "word_bank"
        ? (answerMode === "typing"
            ? typedAnswer.replace(/\s/g, "")
            : built.map((k) => ex.options[k]).join("")) === ex.answer.join("")
        : ex.type === "multiple_choice"
          ? picked === ex.answer
          : ex.blanks.every(
              (blank) => paragraphAnswers[blank.id] === blank.answer,
            );
    setStatus(ok ? "correct" : "wrong");
    playFeedbackSound(ok);
    speakChinese(correctAnswer);
    if (ok) {
      if (!item.retry) setFirstTry((c) => c + 1);
    } else {
      // soal yang salah diulang di akhir sesi (sekali saja)
      if (!item.retry)
        setQueue((q) => [...q, { ex: prepare(item.ex), retry: true }]);
    }
  }

  function onMatchDone(mistakes: number) {
    if (mistakes === 0 && !item.retry) setFirstTry((c) => c + 1);
    setStatus("correct");
    playFeedbackSound(true);
  }

  function next() {
    if (i + 1 >= queue.length) {
      fadeSounds();
      completeLesson(lesson.id, xpGained);
      return setPhase("done");
    }
    fadeSounds();
    setI(i + 1);
    setPicked(null);
    setBuilt([]);
    setTypedAnswer("");
    setParagraphAnswers({});
    setShowParagraphPinyin(false);
    setShowParagraphTranslation(false);
    setAnswerMode("word_bank");
    setStatus("idle");
  }

  if (phase === "done") {
    const accuracy = Math.round((firstTry / total) * 100);
    return (
      <Screen>
        <p className="font-hanzi text-7xl font-black text-seal" aria-hidden>
          好
        </p>
        <h1 className="mt-4 text-3xl font-extrabold">Pelajaran selesai</h1>
        <div className="mt-6 flex gap-3">
          <Stat label="XP" value={`+${xpGained}`} />
          <Stat label="Akurasi" value={`${accuracy}%`} />
        </div>
        <Link href="/learn" className={`${primary} mt-10 block text-center`}>
          Lanjut
        </Link>
      </Screen>
    );
  }

  return (
    <div className="mx-auto flex min-h-dvh max-w-xl flex-col">
      <header className="flex items-center gap-4 px-4 py-4">
        <Link
          href="/learn"
          aria-label="Keluar dari pelajaran"
          className="text-2xl text-muted"
        >
          ✕
        </Link>
        <div
          className="h-3 flex-1 overflow-hidden rounded-full bg-line"
          role="progressbar"
          aria-valuenow={i}
          aria-valuemax={queue.length}
        >
          <div
            className="h-full rounded-full bg-jade transition-[width] duration-300"
            style={{ width: `${(i / queue.length) * 100}%` }}
          />
        </div>
      </header>

      <main className="flex-1 px-4 pb-6 pt-4">
        {item.retry && (
          <p className="mb-2 text-sm font-bold text-seal-dark">
            Coba lagi soal yang tadi salah
          </p>
        )}
        <h1 className="text-xl font-extrabold">{ex.prompt}</h1>

        {ex.type === "multiple_choice" && ex.hanzi && (
          <div className="mt-6 inline-flex flex-col items-center rounded-2xl border-2 border-line bg-white px-8 py-5">
            <span className="font-hanzi text-6xl font-black" lang="zh">
              {ex.hanzi}
            </span>
            {ex.pinyin && <span className="mt-1 text-muted">{ex.pinyin}</span>}
          </div>
        )}

        {ex.type === "multiple_choice" && (
          <ul className="mt-6 grid gap-3">
            {ex.options.map((opt) => {
              const selected = picked === opt;
              const isAnswer = locked && opt === ex.answer;
              const isWrongPick = locked && selected && opt !== ex.answer;
              const cls = isAnswer
                ? `border-jade bg-jade-soft ${status === "correct" ? "choice-correct" : ""}`
                : isWrongPick
                  ? `border-seal bg-seal-soft ${status === "wrong" ? "choice-wrong" : ""}`
                  : selected
                    ? "border-jade bg-jade-soft choice-selected"
                    : "border-line bg-white hover:bg-white/60";
              const isHanzi = /[\u4e00-\u9fff]/.test(opt);
              return (
                <li key={opt}>
                  <button
                    disabled={locked}
                    onClick={() => {
                      setPicked(opt);
                      speakChinese(opt);
                    }}
                    className={`w-full rounded-2xl border-2 border-b-4 px-5 py-3.5 text-left text-lg font-bold ${isHanzi ? "font-hanzi text-2xl" : ""} ${cls}`}
                  >
                    {opt}
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        {ex.type === "word_bank" && (
          <>
            <button
              type="button"
              disabled={locked}
              aria-pressed={answerMode === "typing"}
              onClick={() => {
                setAnswerMode((mode) =>
                  mode === "word_bank" ? "typing" : "word_bank",
                );
                setBuilt([]);
                setTypedAnswer("");
              }}
              className="mt-5 rounded-xl border-2 border-jade px-4 py-2 text-sm font-bold text-jade-dark transition-colors hover:bg-jade-soft disabled:cursor-not-allowed"
            >
              {answerMode === "typing"
                ? "Kembali ke pilihan kata"
                : "Ketik manual"}
            </button>
            {answerMode === "typing" ? (
              <input
                autoFocus
                type="text"
                lang="zh"
                value={typedAnswer}
                onChange={(event) => setTypedAnswer(event.target.value)}
                disabled={locked}
                placeholder="Ketik jawaban dalam hanzi"
                aria-label="Ketik jawaban dalam hanzi"
                className="font-hanzi mt-4 w-full rounded-2xl border-2 border-line bg-white px-4 py-4 text-2xl font-bold outline-none focus:border-jade"
              />
            ) : (
              <>
                <div
                  className="font-hanzi mt-4 flex min-h-[72px] flex-wrap items-center gap-2 border-b-2 border-line pb-3"
                  aria-label="Jawaban Anda"
                >
                  {built.map((k) => (
                    <button
                      key={k}
                      ref={(node) => {
                        if (node) builtWordRefs.current.set(k, node);
                        else builtWordRefs.current.delete(k);
                      }}
                      disabled={locked}
                      onClick={() => {
                        setBuilt(built.filter((x) => x !== k));
                        speakChinese(ex.options[k]);
                      }}
                      className="rounded-xl border-2 border-b-4 border-line bg-white px-4 py-2 text-2xl font-black"
                    >
                      {ex.options[k]}
                    </button>
                  ))}
                </div>
                <div className="font-hanzi mt-6 flex flex-wrap justify-center gap-2">
                  {ex.options.map((word, k) => (
                    <button
                      key={k}
                      disabled={locked || built.includes(k)}
                      onClick={(event) => {
                        const { left, top } =
                          event.currentTarget.getBoundingClientRect();
                        pendingWordFlight.current = { key: k, left, top };
                        setBuilt([...built, k]);
                        speakChinese(word);
                      }}
                      className="rounded-xl border-2 border-b-4 border-line bg-white px-4 py-2 text-2xl font-black disabled:bg-line disabled:text-transparent"
                    >
                      {word}
                    </button>
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {ex.type === "paragraph" &&
          (() => {
            let blankIndex = 0;
            return (
              <div className="mt-6 space-y-4">
                {(ex.pinyin || ex.translation) && (
                  <div className="flex flex-wrap gap-2">
                    {ex.pinyin && (
                      <button
                        type="button"
                        aria-pressed={showParagraphPinyin}
                        onClick={() =>
                          setShowParagraphPinyin((visible) => !visible)
                        }
                        className="rounded-xl border-2 border-jade px-3 py-2 text-sm font-bold text-jade-dark hover:bg-jade-soft"
                      >
                        {showParagraphPinyin
                          ? "Sembunyikan pinyin"
                          : "Tampilkan pinyin"}
                      </button>
                    )}
                    {ex.translation && (
                      <button
                        type="button"
                        aria-pressed={showParagraphTranslation}
                        onClick={() =>
                          setShowParagraphTranslation((visible) => !visible)
                        }
                        className="rounded-xl border-2 border-jade px-3 py-2 text-sm font-bold text-jade-dark hover:bg-jade-soft"
                      >
                        {showParagraphTranslation
                          ? "Sembunyikan terjemahan"
                          : "Tampilkan terjemahan"}
                      </button>
                    )}
                  </div>
                )}
                <div className="space-y-4 rounded-2xl border-2 border-line bg-white p-5">
                  {ex.passage.map((line, lineIndex) => {
                    const pinyinLine = ex.pinyin?.split(/\r?\n/)[lineIndex];
                    const translationLine =
                      ex.translation?.split(/\r?\n/)[lineIndex];

                    return (
                      <div key={lineIndex} className="space-y-1">
                        {showParagraphPinyin && pinyinLine && (
                          <p className="text-xs font-medium leading-relaxed text-muted">
                            {pinyinLine}
                          </p>
                        )}
                        <p
                          className="font-hanzi text-xl font-bold leading-relaxed"
                          lang="zh"
                        >
                          {line.split(/(\.{3,}|…+)/).map((part, partIndex) => {
                            if (!/^(?:\.{3,}|…+)$/.test(part))
                              return <span key={partIndex}>{part}</span>;

                            const blank = ex.blanks[blankIndex++];
                            if (!blank)
                              return <span key={partIndex}>{part}</span>;

                            const selectedAnswer = paragraphAnswers[blank.id];
                            const isWrong =
                              status === "wrong" &&
                              selectedAnswer !== blank.answer;
                            const answerColor =
                              status === "correct"
                                ? "border-jade bg-jade-soft text-jade-dark"
                                : isWrong
                                  ? "border-seal bg-seal-soft text-seal-dark"
                                  : "border-line bg-paper text-ink";
                            return (
                              <span
                                key={partIndex}
                                aria-label={`Bagian ${blank.id}: ${selectedAnswer ?? "belum dijawab"}`}
                                className={`mx-1 inline-flex items-center gap-1 rounded-lg border-b-2 px-2 py-1 align-baseline text-lg ${answerColor}`}
                              >
                                <span className="text-xs text-muted">
                                  {blank.id}
                                </span>
                                {selectedAnswer ?? "....."}
                              </span>
                            );
                          })}
                        </p>
                        {showParagraphTranslation && translationLine && (
                          <p className="text-xs leading-relaxed text-muted">
                            {translationLine}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="space-y-4">
                  {ex.blanks.map((blank) => (
                    <section
                      key={blank.id}
                      aria-labelledby={`paragraph-blank-${blank.id}`}
                      className="rounded-2xl border-2 border-line bg-white p-4"
                    >
                      <h2
                        id={`paragraph-blank-${blank.id}`}
                        className="mb-3 text-sm font-extrabold"
                      >
                        Bagian {blank.id}
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {(blank.options ?? [blank.answer, ...blank.extras]).map(
                          (choice) => {
                            const selected =
                              paragraphAnswers[blank.id] === choice;
                            const isCorrect = choice === blank.answer;
                            const choiceColor =
                              locked && isCorrect
                                ? "border-jade bg-jade-soft text-jade-dark"
                                : locked && selected
                                  ? "border-seal bg-seal-soft text-seal-dark"
                                  : selected
                                    ? "border-jade bg-jade-soft text-jade-dark"
                                    : "border-line bg-white hover:bg-paper";
                            return (
                              <button
                                key={choice}
                                type="button"
                                disabled={locked}
                                aria-pressed={selected}
                                onClick={() => {
                                  setParagraphAnswers((answers) => ({
                                    ...answers,
                                    [blank.id]: choice,
                                  }));
                                  speakChinese(choice);
                                }}
                                className={`font-hanzi rounded-xl border-2 border-b-4 px-4 py-2 text-xl font-bold ${choiceColor} disabled:cursor-not-allowed`}
                              >
                                {choice}
                              </button>
                            );
                          },
                        )}
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            );
          })()}

        {ex.type === "matching" && (
          <Matching
            key={i}
            pairs={ex.pairs}
            onDone={onMatchDone}
            onFeedbackSound={playFeedbackSound}
            onSpeakChinese={speakChinese}
          />
        )}
      </main>

      <footer
        className={`px-4 pb-6 pt-4 ${status === "correct" ? "bg-jade-soft" : status === "wrong" ? "bg-seal-soft" : "border-t border-line"}`}
        aria-live="polite"
      >
        {status === "correct" && (
          <p className="mb-3 text-lg font-extrabold text-jade-dark">Benar!</p>
        )}
        {status === "wrong" && (
          <div className="mb-3">
            <p className="text-lg font-extrabold text-seal-dark">
              Jawaban yang benar:
            </p>
            <p className="font-hanzi text-xl font-bold text-seal-dark">
              {correctAnswer}
            </p>
          </div>
        )}
        {status === "idle" ? (
          <button className={primary} disabled={!canCheck} onClick={check}>
            Periksa
          </button>
        ) : (
          <button
            className={`${btn} text-white ${status === "correct" ? "border-jade-dark bg-jade" : "border-seal-dark bg-seal"}`}
            onClick={next}
          >
            Lanjut
          </button>
        )}
      </footer>
    </div>
  );
}

/* ---------- Soal mencocokkan pasangan ---------- */
function Matching({
  pairs,
  onDone,
  onFeedbackSound,
  onSpeakChinese,
}: {
  pairs: Pair[];
  onDone: (mistakes: number) => void;
  onFeedbackSound: (correct: boolean) => void;
  onSpeakChinese: (text: string) => void;
}) {
  const [lefts, setLefts] = useState(() => pairs.map((p) => p.left));
  const [rights, setRights] = useState(() => pairs.map((p) => p.right));
  const [ready, setReady] = useState(false);
  const [selL, setSelL] = useState<string | null>(null);
  const [selR, setSelR] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]); // daftar sisi kiri yang sudah cocok
  const [mistakes, setMistakes] = useState(0);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    setLefts(shuffle(pairs.map((p) => p.left)));
    setRights(shuffle(pairs.map((p) => p.right)));
    setReady(true);
  }, [pairs]);

  if (!ready) return null;

  const matchedRights = pairs
    .filter((p) => matched.includes(p.left))
    .map((p) => p.right);

  function tryPair(l: string, r: string) {
    if (pairs.some((p) => p.left === l && p.right === r)) {
      const m = [...matched, l];
      setMatched(m);
      setSelL(null);
      setSelR(null);
      if (m.length === pairs.length) onDone(mistakes);
    } else {
      setMistakes((x) => x + 1);
      setFlash(true);
      onFeedbackSound(false);
      setTimeout(() => {
        setFlash(false);
        setSelL(null);
        setSelR(null);
      }, 500);
    }
  }

  const tile = (state: "matched" | "selected" | "wrong" | "idle") =>
    ({
      matched: "border-jade bg-jade-soft text-transparent match-success",
      selected: "border-jade bg-jade-soft",
      wrong: "border-seal bg-seal-soft",
      idle: "border-line bg-white",
    })[state];

  return (
    <div className="mt-6 grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-3">
      <div className="grid min-w-0 content-start gap-3">
        {lefts.map((l) => {
          const state = matched.includes(l)
            ? "matched"
            : selL === l
              ? flash
                ? "wrong"
                : "selected"
              : "idle";
          return (
            <button
              key={l}
              disabled={state === "matched" || flash}
              onClick={() => {
                setSelL(l);
                onSpeakChinese(l);
                if (selR) tryPair(l, selR);
              }}
              className={`font-hanzi box-border flex h-16 w-full min-w-0 items-center justify-center rounded-2xl border-2 border-b-4 px-3 text-center text-2xl font-black leading-tight ${tile(state)} ${state === "wrong" ? "match-wrong" : ""}`}
            >
              {l}
            </button>
          );
        })}
      </div>
      <div className="grid min-w-0 content-start gap-3">
        {rights.map((r) => {
          const state = matchedRights.includes(r)
            ? "matched"
            : selR === r
              ? flash
                ? "wrong"
                : "selected"
              : "idle";
          return (
            <button
              key={r}
              disabled={state === "matched" || flash}
              onClick={() => {
                setSelR(r);
                onSpeakChinese(r);
                if (selL) tryPair(selL, r);
              }}
              className={`box-border flex h-16 w-full min-w-0 items-center justify-center rounded-2xl border-2 border-b-4 px-3 text-center text-base font-bold leading-tight ${tile(state)} ${state === "wrong" ? "match-wrong" : ""}`}
            >
              {r}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Screen({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-dvh max-w-sm flex-col items-center justify-center px-6 text-center">
      {children}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-28 rounded-2xl border-2 border-line bg-white px-5 py-3">
      <p className="text-2xl font-extrabold">{value}</p>
      <p className="text-sm text-muted">{label}</p>
    </div>
  );
}
