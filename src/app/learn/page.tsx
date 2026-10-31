"use client";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import { units, allLessons } from "@/data/course";
import { useProgress, useHydrated } from "@/store/useProgress";

// Pergeseran horizontal tiap node supaya jalurnya berkelok
const OFFSETS = [0, 44, 64, 44, 0, -44, -64, -44];

export default function LearnPage() {
  const hydrated = useHydrated();
  const completedStore = useProgress((s) => s.completed);
  const done = hydrated ? completedStore : [];
  const currentId = allLessons.find((l) => !done.includes(l.id))?.id;
  let n = 0;

  return (
    <>
      <TopBar />
      <main className="mx-auto max-w-xl px-4 pb-24">
        {units.map((unit) => (
          <section key={unit.id} className="pt-8">
            <div className="relative overflow-hidden rounded-2xl bg-jade p-5 text-white">
              <span
                aria-hidden
                className="font-hanzi pointer-events-none absolute -right-2 -top-4 select-none text-[7rem] font-black leading-none text-white/15"
              >
                {unit.hanzi}
              </span>
              <h2 className="text-2xl font-extrabold">{unit.title}</h2>
              <p className="mt-1 text-sm text-white/85">{unit.subtitle}</p>
            </div>

            <ol className="flex flex-col items-center gap-5 py-8">
              {unit.lessons.map((lesson, lessonIndex) => {
                const offset = OFFSETS[n++ % OFFSETS.length];
                const nextOffset = OFFSETS[n % OFFSETS.length];
                const offsetDelta = nextOffset - offset;
                const pathWidth = Math.max(Math.abs(offsetDelta), 2);
                const startX = offsetDelta < 0 ? pathWidth : 0;
                const endX = offsetDelta < 0 ? 0 : pathWidth;
                const nextLesson = unit.lessons[lessonIndex + 1];
                const nextIsUnlocked =
                  nextLesson &&
                  (done.includes(nextLesson.id) || nextLesson.id === currentId);
                const isDone = done.includes(lesson.id);
                const isCurrent = lesson.id === currentId;
                const state = isDone
                  ? "done"
                  : isCurrent
                    ? "current"
                    : "locked";

                const base =
                  "flex h-[76px] w-[76px] items-center justify-center rounded-full text-3xl border-b-[6px] transition-transform";
                const styles = {
                  done: "bg-gold border-[#b5811a] text-white active:translate-y-1 active:border-b-2",
                  current:
                    "bg-seal border-seal-dark text-white ring-4 ring-seal/25 active:translate-y-1 active:border-b-2",
                  locked: "bg-line border-[#b9c8c0] text-muted",
                }[state];

                return (
                  <li
                    key={lesson.id}
                    style={{ transform: `translateX(${offset}px)` }}
                    className="relative flex flex-col items-center gap-2"
                  >
                    {lessonIndex < unit.lessons.length - 1 && (
                      <svg
                        aria-hidden="true"
                        className="pointer-events-none absolute z-0 overflow-visible"
                        style={{
                          left: `calc(50% + ${Math.min(offsetDelta, 0)}px)`,
                          top: "38px",
                          width: `${pathWidth}px`,
                          height: "124px",
                        }}
                        viewBox={`0 0 ${pathWidth} 124`}
                        preserveAspectRatio="none"
                      >
                        <path
                          d={`M ${startX} 0 C ${startX} 62, ${endX} 62, ${endX} 124`}
                          fill="none"
                          stroke={nextIsUnlocked ? "#159B72" : "#c5d2cc"}
                          strokeWidth="10"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                    {state === "locked" ? (
                      <div
                        className={`relative z-10 ${base} ${styles}`}
                        aria-label={`${lesson.title} (terkunci)`}
                      >
                        🔒
                      </div>
                    ) : (
                      <Link
                        href={`/lesson/${lesson.id}`}
                        className={`relative z-10 ${base} ${styles}`}
                        aria-label={`${state === "done" ? "Ulangi" : "Mulai"} ${lesson.title}`}
                      >
                        {state === "done" ? "✓" : "★"}
                      </Link>
                    )}
                    {/* <span
                      className={`relative z-10 rounded-lg bg-paper px-2 py-0.5 text-sm font-bold ${state === "locked" ? "text-muted" : ""}`}
                    >
                      {lesson.title}
                    </span> */}
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </main>
    </>
  );
}
