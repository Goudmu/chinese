import { u1_lessons } from "@/data/questions/u1";
import {
  hanziQ,
  match,
  meaning,
  pinyinQ,
  sentence,
  w,
} from "@/data/questions/helpers";

export type Pair = { left: string; right: string };

export type Exercise =
  | {
      type: "multiple_choice";
      prompt: string;
      hanzi?: string;
      pinyin?: string;
      options: string[];
      answer: string;
    }
  | { type: "word_bank"; prompt: string; options: string[]; answer: string[] }
  | { type: "matching"; prompt: string; pairs: Pair[] }
  | {
      type: "paragraph";
      prompt: string;
      passage: string[];
      blanks: {
        id: number;
        answer: string;
        extras: string[];
      }[];
      pinyin?: string;
      translation?: string;
    };

export type Lesson = { id: string; title: string; exercises: Exercise[] };
export type Unit = {
  id: string;
  title: string;
  subtitle: string;
  hanzi: string;
  lessons: Lesson[];
};

const n = [
  w("一", "yī", "1"),
  w("二", "èr", "2"),
  w("三", "sān", "3"),
  w("四", "sì", "4"),
  w("五", "wǔ", "5"),
];
const [yi, er, san, si, wu] = n;
const angka = "Angka berapa ini?";
const hz = (x: (typeof n)[number]) => `Pilih hanzi untuk angka ${x.id}`;

export const units: Unit[] = [
  {
    id: "u1",
    title: "Salam",
    subtitle: "Menyapa dan berkenalan",
    hanzi: "你好",
    lessons: u1_lessons,
  },
  {
    id: "u2",
    title: "Angka",
    subtitle: "Berhitung dari satu sampai lima",
    hanzi: "数字",
    lessons: [
      {
        id: "l3",
        title: "Angka 1–5",
        exercises: [
          meaning(yi, n, angka),
          meaning(er, n, angka),
          meaning(san, n, angka),
          hanziQ(er, n, hz(er)),
          match(n),
          meaning(si, n, angka),
          meaning(wu, n, angka),
          pinyinQ(san, n),
          hanziQ(si, n, hz(si)),
          pinyinQ(wu, n),
          sentence("Satu, dua, tiga", ["一", "二", "三"], ["四", "五"]),
          pinyinQ(yi, n),
          hanziQ(wu, n, hz(wu)),
          sentence("Tiga, empat, lima", ["三", "四", "五"], ["一", "二"]),
          pinyinQ(er, n),
          hanziQ(san, n, hz(san)),
        ],
      },
    ],
  },
];

export const allLessons = units.flatMap((u) => u.lessons);
export const findLesson = (id: string) => allLessons.find((l) => l.id === id);
