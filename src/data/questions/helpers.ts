import type { Exercise, Pair } from "@/data/course";

type Word = { hanzi: string; pinyin: string; id: string };

export const w = (hanzi: string, pinyin: string, id: string): Word => ({
  hanzi,
  pinyin,
  id,
});

const distractors = <T>(pool: T[], item: T, n = 3): T[] => {
  const rest = pool.filter((x) => x !== item);
  const s = pool.indexOf(item);
  return Array.from({ length: n }, (_, k) => rest[(s + k) % rest.length]);
};

export const meaning = (
  x: Word,
  pool: Word[],
  prompt = "Apa arti kata ini?",
): Exercise => ({
  type: "multiple_choice",
  prompt,
  hanzi: x.hanzi,
  pinyin: x.pinyin,
  options: [x.id, ...distractors(pool, x).map((d) => d.id)],
  answer: x.id,
});

export const hanziQ = (
  x: Word,
  pool: Word[],
  prompt = `Pilih hanzi untuk “${x.id}”`,
): Exercise => ({
  type: "multiple_choice",
  prompt,
  options: [x.hanzi, ...distractors(pool, x).map((d) => d.hanzi)],
  answer: x.hanzi,
});

export const pinyinQ = (x: Word, pool: Word[]): Exercise => ({
  type: "multiple_choice",
  prompt: "Pilih pinyin yang tepat",
  hanzi: x.hanzi,
  options: [x.pinyin, ...distractors(pool, x).map((d) => d.pinyin)],
  answer: x.pinyin,
});

export const match = (words: Word[]): Exercise => ({
  type: "matching",
  prompt: "Pasangkan hanzi dengan artinya",
  pairs: words.map((x): Pair => ({ left: x.hanzi, right: x.id })),
});

export const sentence = (
  text: string,
  answer: string[],
  extras: string[],
): Exercise => ({
  type: "word_bank",
  prompt: `Susun kalimat: “${text}”`,
  options: [...answer, ...extras],
  answer,
});

export const paragraph = (
  prompt: string,
  passage: string[],
  blanks: {
    id: number;
    answer: string;
    extras: string[];
  }[],
  pinyin?: string,
  translation?: string,
): Exercise => ({
  type: "paragraph",
  prompt,
  passage,
  blanks,
  pinyin,
  translation,
});
