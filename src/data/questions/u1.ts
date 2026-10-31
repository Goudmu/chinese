import type { Lesson } from "@/data/course";
import {
  hanziQ,
  match,
  meaning,
  paragraph,
  pinyinQ,
  sentence,
  w,
} from "@/data/questions/helpers";

const g = [
  w("你好", "nǐ hǎo", "Halo"),
  w("谢谢", "xièxie", "Terima kasih"),
  w("再见", "zàijiàn", "Selamat tinggal"),
  w("对不起", "duìbuqǐ", "Maaf"),
  w("不客气", "bú kèqi", "Sama-sama"),
  w("请", "qǐng", "Silakan"),
  w("早上好", "zǎoshang hǎo", "Selamat pagi"),
  w("晚安", "wǎn'ān", "Selamat malam"),
];
const [nihao, xiexie, zaijian, duibuqi, bukeqi, qing, zaoshang, wanan] = g;

const p = [
  w("我", "wǒ", "Saya"),
  w("你", "nǐ", "Kamu"),
  w("他", "tā", "Dia"),
  w("老师", "lǎoshī", "Guru"),
  w("学生", "xuésheng", "Murid"),
  w("朋友", "péngyou", "Teman"),
  w("是", "shì", "Adalah"),
  w("名字", "míngzi", "Nama"),
];
const [wo, ni, ta, laoshi, xuesheng, pengyou, shi, mingzi] = p;

export const u1_lessons: Lesson[] = [
  {
    id: "l1",
    title: "Menyapa",
    exercises: [
      meaning(nihao, g),
      meaning(xiexie, g),
      hanziQ(zaijian, g),
      meaning(duibuqi, g),
      match([nihao, xiexie, zaijian, duibuqi, bukeqi]),
      pinyinQ(nihao, g),
      meaning(bukeqi, g),
      hanziQ(qing, g),
      sentence("Selamat pagi", ["早", "上", "好"], ["晚", "安"]),
      meaning(zaoshang, g),
      hanziQ(xiexie, g),
      pinyinQ(zaijian, g),
      sentence("Maaf", ["对", "不", "起"], ["请", "好"]),
      meaning(wanan, g),
      sentence("Sampai jumpa", ["再", "见"], ["你", "好"]),
      match([duibuqi, bukeqi, qing, zaoshang, wanan]),
    ],
  },
  {
    id: "l2",
    title: "Kalimat",
    exercises: [
      paragraph(
        "Lengkapi perkenalan berikut!",
        [
          "你好！我.......王明。",
          "我.......中国人。",
          "我是.......。",
          "我的老师很好。",
        ],
        [
          { id: 1, answer: "叫", extras: ["是", "不"] },
          { id: 2, answer: "是", extras: ["叫", "不"] },
          { id: 3, answer: "学生", extras: ["老师", "医生"] },
        ],
        "Nǐ hǎo! Wǒ ....... Wáng Míng.\nWǒ ....... Zhōngguó rén.\nWǒ shì .......\nWǒ de lǎoshī hěn hǎo.",
        "Halo! Nama saya .......\nSaya ....... orang Tiongkok.\nSaya adalah .......\nGuru saya sangat baik.",
      ),

      paragraph(
        "Lengkapi percakapan berikut!",
        [
          "A: 你好！你.......学生吗？",
          "B: 是，我是学生。",
          "A: 他.......老师吗？",
          "B: 不，他不是老师，他是医生。",
        ],
        [
          { id: 1, answer: "是", extras: ["叫", "不"] },
          { id: 2, answer: "是", extras: ["叫", "不"] },
        ],
        "A: Nǐ hǎo! Nǐ ....... xuésheng ma?\nB: Shì, wǒ shì xuésheng.\nA: Tā ....... lǎoshī ma?\nB: Bù, tā bú shì lǎoshī, tā shì yīshēng.",
        "A: Halo! Apakah kamu ....... murid?\nB: Ya, saya murid.\nA: Apakah dia ....... guru?\nB: Bukan, dia bukan guru, dia dokter.",
      ),

      paragraph(
        "Lengkapi paragraf berikut!",
        [
          "我有一个朋友。",
          "他.......美国人。",
          "他.......大卫。",
          "他不是医生，他是.......。",
        ],
        [
          { id: 1, answer: "是", extras: ["叫", "不"] },
          { id: 2, answer: "叫", extras: ["是", "不"] },
          { id: 3, answer: "学生", extras: ["老师", "医生"] },
        ],
        "Wǒ yǒu yí ge péngyou.\nTā ....... Měiguó rén.\nTā ....... Dàwèi.\nTā bú shì yīshēng, tā shì .......",
        "Saya punya seorang teman.\nDia ....... orang Amerika.\nNamanya .......\nDia bukan dokter, dia adalah .......",
      ),

      paragraph(
        "Lengkapi percakapan berikut!",
        [
          "A: 你好！你是中国人吗？",
          "B: 不，我.......是中国人。",
          "A: 你是美国人吗？",
          "B: 是，我是美国人。",
          "A: 你.......什么名字？",
          "B: 我叫安娜。",
        ],
        [
          { id: 1, answer: "不", extras: ["是", "叫"] },
          { id: 2, answer: "叫", extras: ["是", "不"] },
        ],
        "A: Nǐ hǎo! Nǐ shì Zhōngguó rén ma?\nB: Bù, wǒ ....... shì Zhōngguó rén.\nA: Nǐ shì Měiguó rén ma?\nB: Shì, wǒ shì Měiguó rén.\nA: Nǐ ....... shénme míngzi?\nB: Wǒ jiào Ānnà.",
        "A: Halo! Apakah kamu orang Tiongkok?\nB: Bukan, saya ....... orang Tiongkok.\nA: Apakah kamu orang Amerika?\nB: Ya, saya orang Amerika.\nA: Siapa nama kamu?\nB: Nama saya Anna.",
      ),

      paragraph(
        "Lengkapi paragraf berikut!",
        [
          "她叫小美。",
          "她是中国人。",
          "她是.......。",
          "她的老师很好。",
          "她不是.......。",
        ],
        [
          { id: 1, answer: "学生", extras: ["老师", "医生"] },
          { id: 2, answer: "医生", extras: ["学生", "美国人"] },
        ],
        "Tā jiào Xiǎoměi.\nTā shì Zhōngguó rén.\nTā shì .......\nTā de lǎoshī hěn hǎo.\nTā bú shì .......",
        "Namanya Xiaomei.\nDia orang Tiongkok.\nDia adalah .......\nGurunya sangat baik.\nDia bukan .......",
      ),

      paragraph(
        "Lengkapi percakapan berikut!",
        [
          "A: 他是你的老师吗？",
          "B: 是，他.......我的老师。",
          "A: 他是美国人吗？",
          "B: 不，他.......是美国人。",
          "A: 他是中国人吗？",
          "B: 是。",
        ],
        [
          { id: 1, answer: "是", extras: ["叫", "不"] },
          { id: 2, answer: "不", extras: ["是", "叫"] },
        ],
        "A: Tā shì nǐ de lǎoshī ma?\nB: Shì, tā ....... wǒ de lǎoshī.\nA: Tā shì Měiguó rén ma?\nB: Bù, tā ....... shì Měiguó rén.\nA: Tā shì Zhōngguó rén ma?\nB: Shì.",
        "A: Apakah dia gurumu?\nB: Ya, dia ....... guruku.\nA: Apakah dia orang Amerika?\nB: Bukan, dia ....... orang Amerika.\nA: Apakah dia orang Tiongkok?\nB: Ya.",
      ),

      paragraph(
        "Lengkapi paragraf berikut!",
        [
          "我叫李月。",
          "我是.......人。",
          "我有一个朋友，他叫大卫。",
          "他是.......人。",
          "我们都是学生。",
        ],
        [
          { id: 1, answer: "中国", extras: ["美国", "老师"] },
          { id: 2, answer: "美国", extras: ["中国", "医生"] },
        ],
        "Wǒ jiào Lǐ Yuè.\nWǒ shì ....... rén.\nWǒ yǒu yí ge péngyou, tā jiào Dàwèi.\nTā shì ....... rén.\nWǒmen dōu shì xuésheng.",
        "Nama saya Li Yue.\nSaya orang .......\nSaya punya seorang teman bernama David.\nDia orang .......\nKami semua murid.",
      ),

      paragraph(
        "Lengkapi percakapan berikut!",
        [
          "A: 你好！你叫什么名字？",
          "B: 我.......小明。",
          "A: 你是学生吗？",
          "B: 不，我.......是学生。",
          "A: 你是老师吗？",
          "B: 是。",
        ],
        [
          { id: 1, answer: "叫", extras: ["是", "不"] },
          { id: 2, answer: "不", extras: ["叫", "是"] },
        ],
        "A: Nǐ hǎo! Nǐ jiào shénme míngzi?\nB: Wǒ ....... Xiǎomíng.\nA: Nǐ shì xuésheng ma?\nB: Bù, wǒ ....... shì xuésheng.\nA: Nǐ shì lǎoshī ma?\nB: Shì.",
        "A: Halo! Siapa namamu?\nB: Nama saya ....... Xiaoming.\nA: Apakah kamu murid?\nB: Bukan, saya ....... murid.\nA: Apakah kamu guru?\nB: Ya.",
      ),

      paragraph(
        "Lengkapi paragraf berikut!",
        [
          "他叫大卫。",
          "他是美国人。",
          "他是医生。",
          "她叫小红。",
          "她是中国人。",
          "她.......老师，不是学生。",
        ],
        [{ id: 1, answer: "是", extras: ["叫", "不"] }],
        "Tā jiào Dàwèi.\nTā shì Měiguó rén.\nTā shì yīshēng.\nTā jiào Xiǎohóng.\nTā shì Zhōngguó rén.\nTā ....... lǎoshī, bú shì xuésheng.",
        "Namanya David.\nDia orang Amerika.\nDia seorang dokter.\nNamanya Xiaohong.\nDia orang Tiongkok.\nDia ....... guru, bukan murid.",
      ),

      paragraph(
        "Lengkapi percakapan berikut!",
        [
          "A: 你好！她是你的老师吗？",
          "B: 不，她.......是我的老师。",
          "A: 她是医生吗？",
          "B: 是，她是医生。",
          "A: 你是学生吗？",
          "B: 是，我是.......。",
          "A: 再见！",
          "B: 再见！",
        ],
        [
          { id: 1, answer: "不", extras: ["是", "叫"] },
          { id: 2, answer: "学生", extras: ["老师", "医生"] },
        ],
        "A: Nǐ hǎo! Tā shì nǐ de lǎoshī ma?\nB: Bù, tā ....... shì wǒ de lǎoshī.\nA: Tā shì yīshēng ma?\nB: Shì, tā shì yīshēng.\nA: Nǐ shì xuésheng ma?\nB: Shì, wǒ shì .......\nA: Zàijiàn!\nB: Zàijiàn!",
        "A: Halo! Apakah dia gurumu?\nB: Bukan, dia ....... guruku.\nA: Apakah dia seorang dokter?\nB: Ya, dia seorang dokter.\nA: Apakah kamu murid?\nB: Ya, saya .......\nA: Sampai jumpa!\nB: Sampai jumpa!",
      ),
    ],
  },
  {
    id: "l3",
    title: "Kalimat",
    exercises: [
      sentence("Halo", ["你好"], ["再见", "老师"]),
      sentence("Saya adalah siswa", ["我", "是", "学生"], ["老师", "不"]),
      sentence("Saya bernama Wang", ["我", "叫", "王"], ["你", "是"]),
      sentence(
        "Kamu adalah orang Amerika",
        ["你", "是", "美国人"],
        ["中国", "学生"],
      ),
      sentence("Dia adalah guru", ["他", "是", "老师"], ["学生", "医生"]),
      sentence("Dia adalah dokter", ["她", "是", "医生"], ["老师", "学生"]),
      sentence(
        "Saya adalah orang Tiongkok",
        ["我", "是", "中国人"],
        ["美国人", "老师"],
      ),
      sentence("Saya bukan guru", ["我", "不", "是", "老师"], ["学生", "医生"]),
      sentence("Dia bukan siswa", ["他", "不", "是", "学生"], ["老师", "医生"]),
      sentence(
        "Apakah kamu seorang guru?",
        ["你", "是", "老师", "吗"],
        ["学生", "不"],
      ),
      sentence(
        "Apakah dia seorang dokter?",
        ["他", "是", "医生", "吗"],
        ["老师", "学生"],
      ),
      sentence(
        "Apakah kamu orang Tiongkok?",
        ["你", "是", "中国人", "吗"],
        ["美国人", "老师"],
      ),
      sentence(
        "Saya bukan orang Amerika",
        ["我", "不", "是", "美国人"],
        ["中国人", "学生"],
      ),
      sentence(
        "Dia adalah orang Amerika",
        ["她", "是", "美国人"],
        ["中国人", "医生"],
      ),
      sentence(
        "Apakah dia seorang siswa?",
        ["她", "是", "学生", "吗"],
        ["老师", "医生"],
      ),
      sentence(
        "Kamu bukan dokter",
        ["你", "不", "是", "医生"],
        ["老师", "学生"],
      ),
      sentence("Saya bernama Li", ["我", "叫", "李"], ["你", "是"]),
      sentence(
        "Apakah kamu seorang siswa?",
        ["你", "是", "学生", "吗"],
        ["老师", "医生"],
      ),
      sentence(
        "Halo, saya adalah guru",
        ["你好", "我", "是", "老师"],
        ["学生", "再见"],
      ),
      sentence("Sampai jumpa", ["再见"], ["你好", "老师"]),
    ],
  },
];
