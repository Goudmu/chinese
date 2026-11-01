import { u1_lessons } from "@/data/questions/u1";
import {
  hanziQ,
  match,
  meaning,
  pinyinQ,
  sentence,
  w,
} from "@/data/questions/helpers";
import { u2_lessons } from "./questions/u2";
import { u3_lessons } from "./questions/u3";
import { u4_lessons } from "./questions/u4";
import { u5_lessons } from "./questions/u5";
import { u6_lessons } from "./questions/u6";

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
  | {
      type: "word_bank";
      prompt: string;
      options: string[];
      answer: string[][];
    }
  | { type: "matching"; prompt: string; pairs: Pair[] }
  | {
      type: "paragraph";
      prompt: string;
      passage: string[];
      blanks: {
        id: number;
        answer: string;
        extras: string[];
        options?: string[];
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
    title: "Salam & Perkenalan",
    subtitle: "Menyapa, menyebut nama, dan memperkenalkan diri",
    hanzi: "问候与介绍",
    lessons: u1_lessons,
  },
  {
    id: "u2",
    title: "Orang di Sekitarku",
    subtitle: "Membicarakan teman, tetangga, dan rekan kerja",
    hanzi: "身边的人",
    lessons: u2_lessons,
  },
  {
    id: "u3",
    title: "Makanan & Minuman",
    subtitle: "Menyebut makanan, minuman, dan jumlahnya",
    hanzi: "饮食",
    lessons: u3_lessons,
  },
  {
    id: "u4",
    title: "Tempat & Lokasi",
    subtitle: "Menanyakan lokasi dan menjelaskan letak tempat",
    hanzi: "地点与方位",
    lessons: u4_lessons,
  },
  {
    id: "u5",
    title: "Keluarga & Hewan",
    subtitle: "Membicarakan keluarga, hewan peliharaan, dan kesukaan",
    hanzi: "家庭与宠物",
    lessons: u5_lessons,
  },
  {
    id: "u6",
    title: "Memesan Makanan",
    subtitle: "Memesan hidangan dan menanyakan harga",
    hanzi: "点餐与价格",
    lessons: u6_lessons,
  },
];

export const allLessons = units.flatMap((u) => u.lessons);
export const findLesson = (id: string) => allLessons.find((l) => l.id === id);
