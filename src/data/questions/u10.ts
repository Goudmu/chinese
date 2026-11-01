import type { Lesson } from "@/data/course";
import { paragraph, sentence } from "./helpers";

const u10_sentences = [
  sentence(
    "Ponsel saya mahal.",
    [
      ["我", "手机", "很", "贵"],
      ["我", "的", "手机", "很", "贵"],
    ],
    ["便宜", "电脑", "不"],
  ),
  sentence(
    "Komputer ini murah.",
    ["这", "个", "电脑", "很", "便宜"],
    ["那", "贵", "不"],
  ),
  sentence(
    "Tas itu berat.",
    ["那", "个", "包", "很", "重"],
    ["这", "轻", "不"],
  ),
  sentence(
    "Tas ini ringan.",
    ["这", "个", "包", "很", "轻"],
    ["那", "重", "不"],
  ),
  sentence(
    "Baju ini bagus (enak dilihat).",
    ["这", "件", "衣服", "很", "好看"],
    ["那", "贵", "不"],
  ),
  sentence(
    "Mobil saya besar.",
    [
      ["我", "车", "很", "大"],
      ["我", "的", "车", "很", "大"],
    ],
    ["小", "手机", "不"],
  ),
  sentence(
    "Mobil dia (laki-laki) kecil.",
    [
      ["他", "车", "很", "小"],
      ["他", "的", "车", "很", "小"],
    ],
    ["大", "她", "不"],
  ),
  sentence(
    "Jam tangan ini keren.",
    ["这", "个", "手表", "很", "酷"],
    ["那", "耳机", "不"],
  ),
  sentence(
    "Headphone itu mahal.",
    ["那", "个", "耳机", "很", "贵"],
    ["这", "便宜", "不"],
  ),
  sentence(
    "Ponsel itu murah.",
    ["那", "个", "手机", "很", "便宜"],
    ["这", "贵", "不"],
  ),
  sentence(
    "Ponsel saya tidak mahal.",
    [
      ["我", "手机", "不", "贵"],
      ["我", "的", "手机", "不", "贵"],
    ],
    ["很", "便宜", "是"],
  ),
  sentence(
    "Komputer ini tidak murah.",
    ["这", "个", "电脑", "不", "便宜"],
    ["很", "贵", "是"],
  ),
  sentence(
    "Tas saya tidak berat.",
    [
      ["我", "包", "不", "重"],
      ["我", "的", "包", "不", "重"],
    ],
    ["很", "轻", "是"],
  ),
  sentence(
    "Mobil itu tidak kecil.",
    ["那", "个", "车", "不", "小"],
    ["很", "大", "是"],
  ),
  sentence(
    "Baju ini tidak bagus.",
    ["这", "件", "衣服", "不", "好看"],
    ["很", "贵", "是"],
  ),
  sentence(
    "Jam tangan saya tidak keren.",
    [
      ["我", "手表", "不", "酷"],
      ["我", "的", "手表", "不", "酷"],
    ],
    ["很", "贵", "是"],
  ),
  sentence(
    "Apakah ponsel kamu mahal?",
    [
      ["你", "手机", "贵", "吗"],
      ["你", "的", "手机", "贵", "吗"],
    ],
    ["很", "便宜", "不"],
  ),
  sentence(
    "Apakah komputer ini murah?",
    ["这", "个", "电脑", "便宜", "吗"],
    ["很", "贵", "不"],
  ),
  sentence(
    "Apakah tas itu berat?",
    ["那", "个", "包", "重", "吗"],
    ["很", "轻", "不"],
  ),
  sentence(
    "Apakah mobil kamu besar?",
    [
      ["你", "车", "大", "吗"],
      ["你", "的", "车", "大", "吗"],
    ],
    ["很", "小", "不"],
  ),
  sentence(
    "Apakah baju ini bagus?",
    ["这", "件", "衣服", "好看", "吗"],
    ["很", "贵", "不"],
  ),
  sentence(
    "Apakah ponsel ini mahal atau murah?",
    ["这", "个", "手机", "贵", "还是", "便宜"],
    ["很", "吗", "不"],
  ),
  sentence(
    "Apakah tas ini berat atau ringan?",
    ["这", "个", "包", "重", "还是", "轻"],
    ["很", "吗", "不"],
  ),
  sentence(
    "Apakah mobil kamu besar atau kecil?",
    [
      ["你", "车", "大", "还是", "小"],
      ["你", "的", "车", "大", "还是", "小"],
    ],
    ["很", "吗", "不"],
  ),
  sentence(
    "Apakah ponsel ini mahal?",
    ["这", "个", "手机", "贵", "不", "贵"],
    ["很", "吗", "便宜"],
  ),
  sentence(
    "Apakah tas itu berat?",
    ["那", "个", "包", "重", "不", "重"],
    ["很", "吗", "轻"],
  ),
  sentence(
    "Apakah baju itu bagus?",
    ["那", "件", "衣服", "好看", "不", "好看"],
    ["很", "吗", "贵"],
  ),
  sentence(
    "Ponsel ini terlalu mahal.",
    ["这", "个", "手机", "太", "贵", "了"],
    ["很", "便宜", "不"],
  ),
  sentence(
    "Komputer itu terlalu mahal.",
    ["那", "个", "电脑", "太", "贵", "了"],
    ["很", "便宜", "不"],
  ),
  sentence(
    "Tas ini terlalu berat.",
    ["这", "个", "包", "太", "重", "了"],
    ["很", "轻", "不"],
  ),
  sentence(
    "Mobil ini terlalu besar.",
    ["这", "个", "车", "太", "大", "了"],
    ["很", "小", "不"],
  ),
  sentence(
    "Baju itu bagus sekali.",
    ["那", "件", "衣服", "太", "好看", "了"],
    ["很", "贵", "不"],
  ),
  sentence(
    "Jam tangan ini keren sekali.",
    ["这", "个", "手表", "太", "酷", "了"],
    ["很", "耳机", "不"],
  ),
  sentence(
    "Headphone ini murah sekali.",
    ["这", "个", "耳机", "太", "便宜", "了"],
    ["很", "贵", "不"],
  ),
  sentence(
    "Bagaimana ponsel kamu?",
    [
      ["你", "手机", "怎么样"],
      ["你", "的", "手机", "怎么样"],
    ],
    ["很", "吗", "什么"],
  ),
  sentence(
    "Bagaimana komputer itu?",
    ["那", "个", "电脑", "怎么样"],
    ["很", "吗", "什么"],
  ),
  sentence(
    "Bagaimana mobil dia (laki-laki)?",
    [
      ["他", "车", "怎么样"],
      ["他", "的", "车", "怎么样"],
    ],
    ["很", "吗", "她"],
  ),
  sentence(
    "Bagaimana baju ini?",
    ["这", "件", "衣服", "怎么样"],
    ["很", "吗", "什么"],
  ),
  sentence(
    "Bagaimana jam tangan itu?",
    ["那", "个", "手表", "怎么样"],
    ["很", "吗", "什么"],
  ),
  sentence(
    "Saya punya ponsel, ponselnya murah.",
    ["我", "有", "手机", "手机", "很", "便宜"],
    ["贵", "没有", "不"],
  ),
  sentence(
    "Saya punya komputer, komputernya tidak mahal.",
    ["我", "有", "电脑", "电脑", "不", "贵"],
    ["很", "没有", "便宜"],
  ),
  sentence(
    "Saya punya mobil, mobilnya besar.",
    ["我", "有", "车", "车", "很", "大"],
    ["小", "没有", "不"],
  ),
  sentence(
    "Saya tidak punya jam tangan.",
    ["我", "没有", "手表"],
    ["有", "耳机", "不"],
  ),
  sentence(
    "Apakah kamu punya headphone?",
    ["你", "有", "耳机", "吗"],
    ["没有", "手机", "不"],
  ),
  sentence(
    "Saya mau satu ponsel.",
    ["我", "要", "一", "个", "手机"],
    ["电脑", "杯", "不"],
  ),
  sentence(
    "Berapa harga ponsel ini?",
    ["这", "个", "手机", "多少", "钱"],
    ["那", "贵", "吗"],
  ),
  sentence(
    "Berapa harga baju itu?",
    ["那", "件", "衣服", "多少", "钱"],
    ["这", "贵", "吗"],
  ),
  sentence(
    "Ponsel saya dan komputer saya semuanya mahal.",
    [
      ["我", "手机", "和", "电脑", "都", "很", "贵"],
      ["我", "的", "手机", "和", "我", "的", "电脑", "都", "很", "贵"],
    ],
    ["便宜", "也", "不"],
  ),
  sentence(
    "Ponsel saya mahal, komputer saya juga mahal.",
    [
      ["我", "手机", "很", "贵", "电脑", "也", "很", "贵"],
      ["我", "的", "手机", "很", "贵", "我", "的", "电脑", "也", "很", "贵"],
    ],
    ["便宜", "都", "不"],
  ),
];

const u10_paragraphs = [];
