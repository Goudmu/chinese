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
        "Lengkapi paragraf perkenalan berikut!",
        [
          "你好！我.......小明。我.......中国人。她叫小红，她是美国人。他.......是老师，他是医生。你是学生.......？我是学生，我不是老师。再见！",
        ],
        [
          { id: 1, answer: "叫", extras: ["是", "吗"] },
          { id: 2, answer: "是", extras: ["不", "叫"] },
          { id: 3, answer: "不", extras: ["是", "吗"] },
          { id: 4, answer: "吗", extras: ["不", "是"] },
        ],
        "Nǐ hǎo! Wǒ ....... Xiǎomíng. Wǒ ....... Zhōngguó rén. Tā jiào Xiǎohóng, tā shì Měiguó rén. Tā ....... shì lǎoshī, tā shì yīshēng. Nǐ shì xuésheng ....... ? Wǒ shì xuésheng, wǒ bú shì lǎoshī. Zàijiàn!",
        "Halo! Nama saya Xiaoming. Saya orang Tiongkok. Dia bernama Xiaohong, dia orang Amerika. Dia bukan guru, dia dokter. Apakah kamu siswa? Saya siswa, saya bukan guru. Sampai jumpa!",
      ),
      paragraph(
        "Lengkapi paragraf perkenalan diri berikut!",
        [
          "你好！我.......王明。我.......学生，我是北京人。他是我的朋友，他.......是中国人，他是美国人。你是老师.......？",
        ],
        [
          { id: 1, answer: "叫", extras: ["吗", "不"] },
          { id: 2, answer: "是", extras: ["吗", "叫"] },
          { id: 3, answer: "不", extras: ["吗", "叫"] },
          { id: 4, answer: "吗", extras: ["叫", "是"] },
        ],
        "Nǐ hǎo! Wǒ ....... Wáng Míng. Wǒ ....... xuésheng, wǒ shì Běijīng rén. Tā shì wǒ de péngyou, tā ....... shì Zhōngguó rén, tā shì Měiguó rén. Nǐ shì lǎoshī ....... ?",
        "Halo! Nama saya Wang Ming. Saya siswa, saya orang Beijing. Dia temanku, dia bukan orang Tiongkok, dia orang Amerika. Apakah kamu guru?",
      ),
      paragraph(
        "Lengkapi percakapan berikut!",
        [
          "你好，小姐！你.......什么名字？我叫马丽，我.......医生。你是老师.......？我.......是老师，我是学生。再见！",
        ],
        [
          { id: 1, answer: "叫", extras: ["吗", "不"] },
          { id: 2, answer: "是", extras: ["吗", "叫"] },
          { id: 3, answer: "吗", extras: ["叫", "是"] },
          { id: 4, answer: "不", extras: ["吗", "叫"] },
        ],
        "Nǐ hǎo, xiǎojie! Nǐ ....... shénme míngzi? Wǒ jiào Mǎ Lì, wǒ ....... yīshēng. Nǐ shì lǎoshī ....... ? Wǒ ....... shì lǎoshī, wǒ shì xuésheng. Zàijiàn!",
        "Halo, nona! Siapa namamu? Namaku Ma Li, saya dokter. Apakah kamu guru? Saya bukan guru, saya siswa. Sampai jumpa!",
      ),
      paragraph(
        "Lengkapi paragraf tentang keluarga berikut!",
        [
          "我家有三个人。我爸爸.......医生，我妈妈是老师。我.......小李，我是学生。我爸爸.......是美国人，他是中国人。你爸爸是中国人.......？",
        ],
        [
          { id: 1, answer: "是", extras: ["吗", "叫"] },
          { id: 2, answer: "叫", extras: ["吗", "不"] },
          { id: 3, answer: "不", extras: ["吗", "叫"] },
          { id: 4, answer: "吗", extras: ["叫", "是"] },
        ],
        "Wǒ jiā yǒu sān ge rén. Wǒ bàba ....... yīshēng, wǒ māma shì lǎoshī. Wǒ ....... Xiǎo Lǐ, wǒ shì xuésheng. Wǒ bàba ....... shì Měiguó rén, tā shì Zhōngguó rén. Nǐ bàba shì Zhōngguó rén ....... ?",
        "Keluargaku ada tiga orang. Ayahku dokter, ibuku guru. Namaku Xiao Li, aku siswa. Ayahku bukan orang Amerika, dia orang Tiongkok. Apakah ayahmu orang Tiongkok?",
      ),
      paragraph(
        "Lengkapi paragraf tentang teman baru berikut!",
        [
          "今天我在学校认识一个朋友。他.......大卫，他.......美国人。他.......是老师，他是我的同学。你认识他.......？",
        ],
        [
          { id: 1, answer: "叫", extras: ["吗", "不"] },
          { id: 2, answer: "是", extras: ["吗", "叫"] },
          { id: 3, answer: "不", extras: ["吗", "叫"] },
          { id: 4, answer: "吗", extras: ["叫", "是"] },
        ],
        "Jīntiān wǒ zài xuéxiào rènshi yí ge péngyou. Tā ....... Dàwèi, tā ....... Měiguó rén. Tā ....... shì lǎoshī, tā shì wǒ de tóngxué. Nǐ rènshi tā ....... ?",
        "Hari ini saya berkenalan dengan seorang teman di sekolah. Dia bernama David, dia orang Amerika. Dia bukan guru, dia teman sekelasku. Apakah kamu mengenalnya?",
      ),
      paragraph(
        "Lengkapi paragraf tentang pekerjaan berikut!",
        [
          "我在医院工作。我.......张明，我.......医生。我的朋友小英.......是医生，她是老师。你喜欢你的工作.......？",
        ],
        [
          { id: 1, answer: "叫", extras: ["吗", "不"] },
          { id: 2, answer: "是", extras: ["吗", "叫"] },
          { id: 3, answer: "不", extras: ["吗", "叫"] },
          { id: 4, answer: "吗", extras: ["叫", "是"] },
        ],
        "Wǒ zài yīyuàn gōngzuò. Wǒ ....... Zhāng Míng, wǒ ....... yīshēng. Wǒ de péngyou Xiǎoyīng ....... shì yīshēng, tā shì lǎoshī. Nǐ xǐhuan nǐ de gōngzuò ....... ?",
        "Saya bekerja di rumah sakit. Nama saya Zhang Ming, saya dokter. Teman saya Xiaoying bukan dokter, dia guru. Apakah kamu suka pekerjaanmu?",
      ),
      paragraph(
        "Lengkapi paragraf tentang belajar bahasa Mandarin berikut!",
        [
          "我.......美国人，我学习汉语。我的老师叫王丽，她是中国人。她.......是学生，她是汉语老师。你的老师.......什么名字？你的老师是中国人.......？",
        ],
        [
          { id: 1, answer: "是", extras: ["吗", "叫"] },
          { id: 2, answer: "不", extras: ["吗", "叫"] },
          { id: 3, answer: "叫", extras: ["吗", "不"] },
          { id: 4, answer: "吗", extras: ["叫", "是"] },
        ],
        "Wǒ ....... Měiguó rén, wǒ xuéxí Hànyǔ. Wǒ de lǎoshī jiào Wáng Lì, tā shì Zhōngguó rén. Tā ....... shì xuésheng, tā shì Hànyǔ lǎoshī. Nǐ de lǎoshī ....... shénme míngzi? Nǐ de lǎoshī shì Zhōngguó rén ....... ?",
        "Saya orang Amerika, saya belajar bahasa Mandarin. Guruku bernama Wang Li, dia orang Tiongkok. Dia bukan siswa, dia guru bahasa Mandarin. Siapa nama gurumu? Apakah gurumu orang Tiongkok?",
      ),
      paragraph(
        "Lengkapi paragraf tentang minuman berikut!",
        [
          "你好，我.......小马。我.......学生，我喜欢喝茶。我的朋友.......喜欢喝茶，他喜欢喝水。他是中国人.......？",
        ],
        [
          { id: 1, answer: "叫", extras: ["吗", "不"] },
          { id: 2, answer: "是", extras: ["吗", "叫"] },
          { id: 3, answer: "不", extras: ["吗", "叫"] },
          { id: 4, answer: "吗", extras: ["叫", "是"] },
        ],
        "Nǐ hǎo, wǒ ....... Xiǎo Mǎ. Wǒ ....... xuésheng, wǒ xǐhuan hē chá. Wǒ de péngyou ....... xǐhuan hē chá, tā xǐhuan hē shuǐ. Tā shì Zhōngguó rén ....... ?",
        "Halo, nama saya Xiao Ma. Saya siswa, saya suka minum teh. Temanku tidak suka minum teh, dia suka minum air. Apakah dia orang Tiongkok?",
      ),
      paragraph(
        "Lengkapi paragraf tentang kegiatan sekolah berikut!",
        [
          "你好！今天我去学校，我.......学生。我的老师.......李明，他是中国人。明天我.......去学校，我在家。你明天去学校.......？再见！",
        ],
        [
          { id: 1, answer: "是", extras: ["吗", "叫"] },
          { id: 2, answer: "叫", extras: ["吗", "不"] },
          { id: 3, answer: "不", extras: ["吗", "叫"] },
          { id: 4, answer: "吗", extras: ["叫", "是"] },
        ],
        "Nǐ hǎo! Jīntiān wǒ qù xuéxiào, wǒ ....... xuésheng. Wǒ de lǎoshī ....... Lǐ Míng, tā shì Zhōngguó rén. Míngtiān wǒ ....... qù xuéxiào, wǒ zài jiā. Nǐ míngtiān qù xuéxiào ....... ? Zàijiàn!",
        "Halo! Hari ini saya pergi ke sekolah, saya siswa. Guruku bernama Li Ming, dia orang Tiongkok. Besok saya tidak pergi ke sekolah, saya di rumah. Apakah kamu besok pergi ke sekolah? Sampai jumpa!",
      ),
      paragraph(
        "Lengkapi percakapan telepon berikut!",
        [
          "喂，你好！我.......小英，我.......医生。你是大明.......？我.......是大明，我是小明。再见！",
        ],
        [
          { id: 1, answer: "叫", extras: ["吗", "不"] },
          { id: 2, answer: "是", extras: ["吗", "叫"] },
          { id: 3, answer: "吗", extras: ["叫", "是"] },
          { id: 4, answer: "不", extras: ["吗", "叫"] },
        ],
        "Wèi, nǐ hǎo! Wǒ ....... Xiǎoyīng, wǒ ....... yīshēng. Nǐ shì Dàmíng ....... ? Wǒ ....... shì Dàmíng, wǒ shì Xiǎomíng. Zàijiàn!",
        "Halo, selamat siang! Nama saya Xiaoying, saya dokter. Apakah kamu Daming? Saya bukan Daming, saya Xiaoming. Sampai jumpa!",
      ),
    ],
  },
];

const u1_sentences = [
  sentence("Halo.", ["你好"], ["再见", "我", "不"]),
  sentence("Sampai jumpa.", ["再见"], ["你好", "他", "是"]),
  sentence("Saya bernama Mary.", ["我", "叫", "玛丽"], ["是", "不", "你"]),
  sentence("Kamu bernama David.", ["你", "叫", "大卫"], ["他", "不", "人"]),
  sentence(
    "Dia (laki-laki) bernama David.",
    ["他", "叫", "大卫"],
    ["她", "医生", "再见"],
  ),
  sentence(
    "Dia (perempuan) bernama Mary.",
    ["她", "叫", "玛丽"],
    ["他", "学生", "中国"],
  ),
  sentence("Saya seorang siswa.", ["我", "是", "学生"], ["老师", "不", "医生"]),
  sentence(
    "Dia (perempuan) adalah dokter.",
    ["她", "是", "医生"],
    ["中国", "再见", "你"],
  ),
  sentence(
    "Dia orang Amerika.",
    ["他", "是", "美国", "人"],
    ["中国", "老师", "不"],
  ),
  sentence(
    "Saya orang Tiongkok.",
    ["我", "是", "中国", "人"],
    ["美国", "学生", "她"],
  ),
  sentence("Kamu adalah guru.", ["你", "是", "老师"], ["他", "不", "学生"]),
  sentence(
    "Dia (laki-laki) adalah guru.",
    ["他", "是", "老师"],
    ["她", "医生", "再见"],
  ),
  sentence("Kamu adalah siswa.", ["你", "是", "学生"], ["我", "人", "美国"]),
  sentence(
    "Dia (perempuan) adalah siswa.",
    ["她", "是", "学生"],
    ["你", "中国", "不"],
  ),
  sentence(
    "Saya orang Amerika.",
    ["我", "是", "美国", "人"],
    ["中国", "医生", "他"],
  ),
  sentence(
    "Kamu orang Tiongkok.",
    ["你", "是", "中国", "人"],
    ["她", "老师", "不"],
  ),
  sentence(
    "Apakah kamu guru?",
    ["你", "是", "老师", "吗"],
    ["不", "医生", "他"],
  ),
  sentence(
    "Apakah dia (laki-laki) siswa?",
    ["他", "是", "学生", "吗"],
    ["不", "她", "再见"],
  ),
  sentence(
    "Apakah kamu orang Tiongkok?",
    ["你", "是", "中国", "人", "吗"],
    ["美国", "不", "医生"],
  ),
  sentence(
    "Apakah kamu dokter?",
    ["你", "是", "医生", "吗"],
    ["不", "我", "学生"],
  ),
  sentence(
    "Apakah dia (perempuan) dokter?",
    ["她", "是", "医生", "吗"],
    ["他", "人", "再见"],
  ),
  sentence(
    "Apakah kamu orang Amerika?",
    ["你", "是", "美国", "人", "吗"],
    ["中国", "老师", "她"],
  ),
  sentence(
    "Apakah dia (perempuan) orang Tiongkok?",
    ["她", "是", "中国", "人", "吗"],
    ["不", "学生", "你"],
  ),
  sentence(
    "Apakah kamu siswa?",
    ["你", "是", "学生", "吗"],
    ["他", "不", "中国"],
  ),
  sentence(
    "Saya bukan dokter.",
    ["我", "不", "是", "医生"],
    ["老师", "她", "人"],
  ),
  sentence(
    "Dia (perempuan) bukan guru.",
    ["她", "不", "是", "老师"],
    ["学生", "你", "中国"],
  ),
  sentence(
    "Dia (laki-laki) bukan orang Amerika.",
    ["他", "不", "是", "美国", "人"],
    ["中国", "再见", "你"],
  ),
  sentence(
    "Kamu bukan siswa.",
    ["你", "不", "是", "学生"],
    ["我", "医生", "中国"],
  ),
  sentence(
    "Saya bukan orang Tiongkok.",
    ["我", "不", "是", "中国", "人"],
    ["美国", "老师", "他"],
  ),
  sentence(
    "Dia (laki-laki) bukan dokter.",
    ["他", "不", "是", "医生"],
    ["她", "学生", "再见"],
  ),
];
