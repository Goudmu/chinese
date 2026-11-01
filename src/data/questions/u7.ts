import type { Lesson } from "@/data/course";
import { paragraph, sentence } from "./helpers";

const u7_sentences = [
  sentence(
    "Suami saya orang Jepang.",
    [
      ["我", "丈夫", "是", "日本", "人"],
      ["我", "的", "丈夫", "是", "日本", "人"],
    ],
    ["韩国", "妻子", "不"],
  ),
  sentence(
    "Istri saya orang Korea.",
    [
      ["我", "妻子", "是", "韩国", "人"],
      ["我", "的", "妻子", "是", "韩国", "人"],
    ],
    ["日本", "丈夫", "吗"],
  ),
  sentence("Kamu umur berapa?", ["你", "多大"], ["几", "岁", "吗"]),
  sentence(
    "Saya dua puluh tahun.",
    ["我", "二", "十", "岁"],
    ["三", "多大", "是"],
  ),
  sentence(
    "Dia (laki-laki) delapan belas tahun.",
    ["他", "十", "八", "岁"],
    ["她", "九", "多大"],
  ),
  sentence(
    "Dia (perempuan) dua puluh lima tahun.",
    ["她", "二", "十", "五", "岁"],
    ["他", "六", "吗"],
  ),
  sentence(
    "Berapa umur suami kamu?",
    [
      ["你", "丈夫", "多大"],
      ["你", "的", "丈夫", "多大"],
    ],
    ["妻子", "几", "吗"],
  ),
  sentence(
    "Berapa umur istri kamu?",
    [
      ["你", "妻子", "多大"],
      ["你", "的", "妻子", "多大"],
    ],
    ["丈夫", "什么", "吗"],
  ),
  sentence(
    "Kamu orang negara mana?",
    ["你", "是", "哪", "国", "人"],
    ["什么", "谁", "吗"],
  ),
  sentence(
    "Dia (laki-laki) orang negara mana?",
    ["他", "是", "哪", "国", "人"],
    ["她", "多大", "吗"],
  ),
  sentence(
    "Saya orang Jepang.",
    ["我", "是", "日本", "人"],
    ["韩国", "中国", "不"],
  ),
  sentence(
    "Saya bukan orang Korea.",
    ["我", "不", "是", "韩国", "人"],
    ["日本", "美国", "吗"],
  ),
  sentence(
    "Apakah kamu orang Jepang?",
    ["你", "是", "日本", "人", "吗"],
    ["韩国", "不", "哪"],
  ),
  sentence(
    "Kami semua adalah siswa.",
    ["我们", "都", "是", "学生"],
    ["他们", "老师", "不"],
  ),
  sentence(
    "Mereka semua orang Tiongkok.",
    ["他们", "都", "是", "中国", "人"],
    ["我们", "日本", "不"],
  ),
  sentence(
    "Kami semua bukan dokter.",
    ["我们", "都", "不", "是", "医生"],
    ["他们", "工人", "吗"],
  ),
  sentence(
    "Mereka semua adalah mahasiswa.",
    ["他们", "都", "是", "大学生"],
    ["我们", "中学生", "不"],
  ),
  sentence(
    "Saya adalah siswa SMP.",
    ["我", "是", "中学生"],
    ["小学生", "大学生", "不"],
  ),
  sentence(
    "Adik laki-laki saya adalah siswa SD.",
    [
      ["我", "弟弟", "是", "小学生"],
      ["我", "的", "弟弟", "是", "小学生"],
    ],
    ["中学生", "妹妹", "吗"],
  ),
  sentence(
    "Kakak perempuan saya adalah mahasiswa.",
    [
      ["我", "姐姐", "是", "大学生"],
      ["我", "的", "姐姐", "是", "大学生"],
    ],
    ["哥哥", "中学生", "不"],
  ),
  sentence(
    "Ayah saya adalah pekerja.",
    [
      ["我", "爸爸", "是", "工人"],
      ["我", "的", "爸爸", "是", "工人"],
    ],
    ["妈妈", "老板", "不"],
  ),
  sentence(
    "Apakah ibu kamu seorang pekerja?",
    [
      ["你", "妈妈", "是", "工人", "吗"],
      ["你", "的", "妈妈", "是", "工人", "吗"],
    ],
    ["爸爸", "医生", "不"],
  ),
  sentence(
    "Rekan kerja saya ada di perusahaan.",
    [
      ["我", "同事", "在", "公司"],
      ["我", "的", "同事", "在", "公司"],
    ],
    ["学院", "家", "不"],
  ),
  sentence(
    "Perusahaan saya ada di sana.",
    [
      ["我", "公司", "在", "那里"],
      ["我", "的", "公司", "在", "那里"],
    ],
    ["这里", "学院", "吗"],
  ),
  sentence(
    "Teman sekelas kami semua orang Tiongkok.",
    [
      ["我们", "班", "的", "同学", "都", "是", "中国", "人"],
      ["我们", "班", "同学", "都", "是", "中国", "人"],
    ],
    ["日本", "他们", "不"],
  ),
  sentence(
    "Dia (perempuan) adalah mahasiswa institut ini.",
    ["她", "是", "这", "个", "学院", "的", "学生"],
    ["那", "公司", "他"],
  ),
  sentence(
    "Saya adalah mahasiswa institut itu.",
    ["我", "是", "那", "个", "学院", "的", "学生"],
    ["这", "班", "不"],
  ),
  sentence(
    "Anak-anak saya semua ada di rumah.",
    [
      ["我", "孩子", "都", "在", "家"],
      ["我", "的", "孩子", "都", "在", "家"],
    ],
    ["们", "学校", "不"],
  ),
  sentence(
    "Ayah dan ibu saya sama-sama berumur lima puluh tahun.",
    [
      ["我", "爸爸", "和", "妈妈", "都", "五", "十", "岁"],
      ["我", "的", "爸爸", "和", "妈妈", "都", "五", "十", "岁"],
    ],
    ["多大", "六", "不"],
  ),
  sentence(
    "Suami saya berumur tiga puluh tahun.",
    [
      ["我", "丈夫", "三", "十", "岁"],
      ["我", "的", "丈夫", "三", "十", "岁"],
    ],
    ["妻子", "四", "多大"],
  ),
];

const u7_paragraphs = [
  paragraph(
    "Lengkapi paragraf perkenalan keluarga berikut!",
    [
      "你好！我叫王明，我今年三十.......。我的妻子叫李红，她今年二十八岁。我们.......是中国人。我在一家.......工作，我的同事问我：“你是哪.......人？”我说：“我是中国人。”",
    ],
    [
      { id: 1, answer: "岁", extras: ["班", "国"] },
      { id: 2, answer: "都", extras: ["岁", "国"] },
      { id: 3, answer: "公司", extras: ["岁", "都"] },
      { id: 4, answer: "国", extras: ["班", "岁"] },
    ],
    "Nǐ hǎo! Wǒ jiào Wáng Míng, wǒ jīnnián sānshí ....... . Wǒ de qīzi jiào Lǐ Hóng, tā jīnnián èrshíbā suì. Wǒmen ....... shì Zhōngguó rén. Wǒ zài yì jiā ....... gōngzuò, wǒ de tóngshì wèn wǒ: “Nǐ shì nǎ ....... rén?” Wǒ shuō: “Wǒ shì Zhōngguó rén.”",
    "Halo! Nama saya Wang Ming, tahun ini saya berusia tiga puluh tahun. Istriku bernama Li Hong, tahun ini dia berusia dua puluh delapan tahun. Kami berdua orang Tiongkok. Saya bekerja di sebuah perusahaan, rekan kerjaku bertanya padaku: “Kamu orang negara mana?” Saya berkata: “Saya orang Tiongkok.”",
  ),
  paragraph(
    "Lengkapi percakapan tentang umur berikut!",
    [
      "A：你好！你今年.......？B：我今年十五岁，是中学生。你呢？A：我十一.......，我是.......，我在三.......。",
    ],
    [
      { id: 1, answer: "多大", extras: ["岁", "都"] },
      { id: 2, answer: "岁", extras: ["国", "班"] },
      { id: 3, answer: "小学生", extras: ["工人", "丈夫"] },
      { id: 4, answer: "班", extras: ["岁", "国"] },
    ],
    "A: Nǐ hǎo! Nǐ jīnnián ....... ? B: Wǒ jīnnián shíwǔ suì, shì zhōngxuéshēng. Nǐ ne? A: Wǒ shíyī ....... , wǒ shì ....... , wǒ zài sān ....... .",
    "A: Halo! Tahun ini kamu berusia berapa? B: Tahun ini saya lima belas tahun, saya siswa SMP. Kamu? A: Saya sebelas tahun, saya siswa SD, saya di kelas tiga.",
  ),
  paragraph(
    "Lengkapi paragraf tentang teman sekamar berikut!",
    [
      "我叫小英，我是中国人。我的室友是日本人，我的男朋友不是日本人，他是.......人。我们三个人.......在北京学习。我和室友是.......，我男朋友在外语.......学习。",
    ],
    [
      { id: 1, answer: "韩国", extras: ["日本", "国"] },
      { id: 2, answer: "都", extras: ["岁", "班"] },
      { id: 3, answer: "大学生", extras: ["工人", "丈夫"] },
      { id: 4, answer: "学院", extras: ["岁", "国"] },
    ],
    "Wǒ jiào Xiǎoyīng, wǒ shì Zhōngguó rén. Wǒ de shìyǒu shì Rìběn rén, wǒ de nánpéngyou bú shì Rìběn rén, tā shì ....... rén. Wǒmen sān ge rén ....... zài Běijīng xuéxí. Wǒ hé shìyǒu shì ....... , wǒ nánpéngyou zài wàiyǔ ....... xuéxí.",
    "Nama saya Xiaoying, saya orang Tiongkok. Teman sekamarku orang Jepang, pacar laki-lakiku bukan orang Jepang, dia orang Korea. Kami bertiga sama-sama belajar di Beijing. Saya dan teman sekamarku adalah mahasiswa, pacarku belajar di fakultas bahasa asing.",
  ),
  paragraph(
    "Lengkapi percakapan tentang kewarganegaraan berikut!",
    [
      "A：你好！你是哪.......人？B：我是日本人。你呢？A：我是韩国人，我的妻子也是.......人。B：你们.......是韩国人，真好！你今年.......？",
    ],
    [
      { id: 1, answer: "国", extras: ["班", "岁"] },
      { id: 2, answer: "韩国", extras: ["日本", "国"] },
      { id: 3, answer: "都", extras: ["岁", "班"] },
      { id: 4, answer: "多大", extras: ["岁", "国"] },
    ],
    "A: Nǐ hǎo! Nǐ shì nǎ ....... rén? B: Wǒ shì Rìběn rén. Nǐ ne? A: Wǒ shì Hánguó rén, wǒ de qīzi yě shì ....... rén. B: Nǐmen ....... shì Hánguó rén, zhēn hǎo! Nǐ jīnnián ....... ?",
    "A: Halo! Kamu orang negara mana? B: Saya orang Jepang. Kamu? A: Saya orang Korea, istriku juga orang Korea. B: Kalian berdua orang Korea, bagus sekali! Tahun ini kamu berusia berapa?",
  ),
  paragraph(
    "Lengkapi paragraf tentang keluarga berikut!",
    [
      "我爸爸是.......，他在一家公司工作。我哥哥二十.......，他是大学生。我姐姐十五岁，她在二班学习，是.......。我们家的人.......是中国人。",
    ],
    [
      { id: 1, answer: "工人", extras: ["小学生", "妻子"] },
      { id: 2, answer: "岁", extras: ["国", "班"] },
      { id: 3, answer: "中学生", extras: ["工人", "丈夫"] },
      { id: 4, answer: "都", extras: ["岁", "国"] },
    ],
    "Wǒ bàba shì ....... , tā zài yì jiā gōngsī gōngzuò. Wǒ gēge èrshí ....... , tā shì dàxuéshēng. Wǒ jiějie shíwǔ suì, tā zài èr bān xuéxí, shì ....... . Wǒmen jiā de rén ....... shì Zhōngguó rén.",
    "Ayahku adalah pekerja, dia bekerja di sebuah perusahaan. Kakak laki-lakiku berusia dua puluh tahun, dia mahasiswa. Kakak perempuanku berusia lima belas tahun, dia belajar di kelas dua, dia siswa SMP. Semua orang di keluargaku adalah orang Tiongkok.",
  ),
  paragraph(
    "Lengkapi paragraf tentang suami dan istri berikut!",
    [
      "我叫小红。大明是我的.......，他今年三十五.......。我是他的.......，我今年三十三岁。我们.......是老师。",
    ],
    [
      { id: 1, answer: "丈夫", extras: ["妻子", "班"] },
      { id: 2, answer: "岁", extras: ["国", "班"] },
      { id: 3, answer: "妻子", extras: ["丈夫", "公司"] },
      { id: 4, answer: "都", extras: ["岁", "国"] },
    ],
    "Wǒ jiào Xiǎohóng. Dàmíng shì wǒ de ....... , tā jīnnián sānshíwǔ ....... . Wǒ shì tā de ....... , wǒ jīnnián sānshísān suì. Wǒmen ....... shì lǎoshī.",
    "Nama saya Xiaohong. Daming adalah suamiku, tahun ini dia berusia tiga puluh lima tahun. Saya adalah istrinya, tahun ini saya berusia tiga puluh tiga tahun. Kami berdua guru.",
  ),
  paragraph(
    "Lengkapi percakapan tentang kelas berikut!",
    [
      "A：你好！你是哪个班的学生？B：我是三.......的学生。A：你们班有多少人？B：我们班有三十个人，我们.......是中学生。A：你们的老师今年.......？B：他今年四十.......。",
    ],
    [
      { id: 1, answer: "班", extras: ["公司", "国"] },
      { id: 2, answer: "都", extras: ["岁", "班"] },
      { id: 3, answer: "多大", extras: ["都", "国"] },
      { id: 4, answer: "岁", extras: ["班", "国"] },
    ],
    "A: Nǐ hǎo! Nǐ shì nǎ ge bān de xuésheng? B: Wǒ shì sān ....... de xuésheng. A: Nǐmen bān yǒu duōshao rén? B: Wǒmen bān yǒu sānshí ge rén, wǒmen ....... shì zhōngxuéshēng. A: Nǐmen de lǎoshī jīnnián ....... ? B: Tā jīnnián sìshí ....... .",
    "A: Halo! Kamu siswa kelas berapa? B: Saya siswa kelas tiga. A: Berapa orang di kelas kalian? B: Di kelas kami ada tiga puluh orang, kami semua siswa SMP. A: Guru kalian tahun ini berusia berapa? B: Tahun ini dia berusia empat puluh tahun.",
  ),
  paragraph(
    "Lengkapi paragraf tentang kuliah berikut!",
    [
      "我是大学生，今年二十.......。我在北京大学的中文.......学习。我的同学都是.......，我们班有二十个人。我们的老师不是韩国人，他是.......人。",
    ],
    [
      { id: 1, answer: "岁", extras: ["国", "班"] },
      { id: 2, answer: "学院", extras: ["岁", "都"] },
      { id: 3, answer: "大学生", extras: ["工人", "丈夫"] },
      { id: 4, answer: "日本", extras: ["韩国", "国"] },
    ],
    "Wǒ shì dàxuéshēng, jīnnián èrshí ....... . Wǒ zài Běijīng Dàxué de Zhōngwén ....... xuéxí. Wǒ de tóngxué dōu shì ....... , wǒmen bān yǒu èrshí ge rén. Wǒmen de lǎoshī bú shì Hánguó rén, tā shì ....... rén.",
    "Saya mahasiswa, tahun ini berusia dua puluh tahun. Saya belajar di fakultas sastra Tiongkok Universitas Beijing. Teman-teman sekelasku semuanya mahasiswa, di kelas kami ada dua puluh orang. Guru kami bukan orang Korea, dia orang Jepang.",
  ),
  paragraph(
    "Lengkapi paragraf tentang tempat kerja berikut!",
    [
      "我在一家.......工作，我是工人。我的同事小王今年四十.......，他的妻子是老师。我们公司有五十个人，大家.......是中国人。小王问我：“你今年.......？”",
    ],
    [
      { id: 1, answer: "公司", extras: ["班", "岁"] },
      { id: 2, answer: "岁", extras: ["国", "班"] },
      { id: 3, answer: "都", extras: ["岁", "国"] },
      { id: 4, answer: "多大", extras: ["都", "岁"] },
    ],
    "Wǒ zài yì jiā ....... gōngzuò, wǒ shì gōngrén. Wǒ de tóngshì Xiǎo Wáng jīnnián sìshí ....... , tā de qīzi shì lǎoshī. Wǒmen gōngsī yǒu wǔshí ge rén, dàjiā ....... shì Zhōngguó rén. Xiǎo Wáng wèn wǒ: “Nǐ jīnnián ....... ?”",
    "Saya bekerja di sebuah perusahaan, saya seorang pekerja. Rekan kerjaku Xiao Wang tahun ini berusia empat puluh tahun, istrinya guru. Perusahaan kami ada lima puluh orang, semuanya orang Tiongkok. Xiao Wang bertanya padaku: “Tahun ini kamu berusia berapa?”",
  ),
  paragraph(
    "Lengkapi paragraf tentang anak-anak berikut!",
    [
      "我儿子是.......，他今年九岁。我女儿是中学生，她十四.......。他们在同一个学校学习，他们.......很喜欢学校。我是他们的妈妈，我的.......是他们的爸爸。",
    ],
    [
      { id: 1, answer: "小学生", extras: ["工人", "妻子"] },
      { id: 2, answer: "岁", extras: ["国", "班"] },
      { id: 3, answer: "都", extras: ["岁", "国"] },
      { id: 4, answer: "丈夫", extras: ["妻子", "班"] },
    ],
    "Wǒ érzi shì ....... , tā jīnnián jiǔ suì. Wǒ nǚ'ér shì zhōngxuéshēng, tā shísì ....... . Tāmen zài tóng yí ge xuéxiào xuéxí, tāmen ....... hěn xǐhuan xuéxiào. Wǒ shì tāmen de māma, wǒ de ....... shì tāmen de bàba.",
    "Putraku adalah siswa SD, tahun ini dia berusia sembilan tahun. Putriku siswa SMP, dia berusia empat belas tahun. Mereka belajar di sekolah yang sama, keduanya sangat suka sekolah. Saya adalah ibu mereka, suamiku adalah ayah mereka.",
  ),
  paragraph(
    "Lengkapi percakapan perkenalan berikut!",
    [
      "A：你是日本人吗？B：我不是日本人，我是.......人。我的妻子是日本人。A：你们是大学生吗？B：对，我们.......是大学生，在同一个.......学习。A：你今年.......？",
    ],
    [
      { id: 1, answer: "韩国", extras: ["日本", "国"] },
      { id: 2, answer: "都", extras: ["岁", "班"] },
      { id: 3, answer: "学院", extras: ["岁", "国"] },
      { id: 4, answer: "多大", extras: ["都", "国"] },
    ],
    "A: Nǐ shì Rìběn rén ma? B: Wǒ bú shì Rìběn rén, wǒ shì ....... rén. Wǒ de qīzi shì Rìběn rén. A: Nǐmen shì dàxuéshēng ma? B: Duì, wǒmen ....... shì dàxuéshēng, zài tóng yí ge ....... xuéxí. A: Nǐ jīnnián ....... ?",
    "A: Apakah kamu orang Jepang? B: Saya bukan orang Jepang, saya orang Korea. Istriku orang Jepang. A: Apakah kalian mahasiswa? B: Ya, kami berdua mahasiswa, belajar di fakultas yang sama. A: Tahun ini kamu berusia berapa?",
  ),
  paragraph(
    "Lengkapi paragraf tentang murid baru berikut!",
    [
      "我是新同学，我叫小马。我今年十六.......，我在五.......学习。我们班有三十个同学，大家.......是.......。我们的老师是日本人。",
    ],
    [
      { id: 1, answer: "岁", extras: ["国", "班"] },
      { id: 2, answer: "班", extras: ["岁", "国"] },
      { id: 3, answer: "都", extras: ["岁", "国"] },
      { id: 4, answer: "中学生", extras: ["工人", "丈夫"] },
    ],
    "Wǒ shì xīn tóngxué, wǒ jiào Xiǎo Mǎ. Wǒ jīnnián shíliù ....... , wǒ zài wǔ ....... xuéxí. Wǒmen bān yǒu sānshí ge tóngxué, dàjiā ....... shì ....... . Wǒmen de lǎoshī shì Rìběn rén.",
    "Saya murid baru, nama saya Xiao Ma. Tahun ini saya berusia enam belas tahun, saya belajar di kelas lima. Di kelas kami ada tiga puluh siswa, semuanya siswa SMP. Guru kami orang Jepang.",
  ),
  paragraph(
    "Lengkapi percakapan tentang pekerjaan berikut!",
    [
      "A：你好，请问你在哪个.......工作？B：我在一家日本公司工作，我是工人。A：你的妻子也在公司工作吗？B：不是，她是.......，她在北京大学学习。A：她今年.......？B：她今年二十三.......。",
    ],
    [
      { id: 1, answer: "公司", extras: ["班", "岁"] },
      { id: 2, answer: "大学生", extras: ["工人", "丈夫"] },
      { id: 3, answer: "多大", extras: ["岁", "都"] },
      { id: 4, answer: "岁", extras: ["国", "班"] },
    ],
    "A: Nǐ hǎo, qǐngwèn nǐ zài nǎ ge ....... gōngzuò? B: Wǒ zài yì jiā Rìběn gōngsī gōngzuò, wǒ shì gōngrén. A: Nǐ de qīzi yě zài gōngsī gōngzuò ma? B: Bú shì, tā shì ....... , tā zài Běijīng Dàxué xuéxí. A: Tā jīnnián ....... ? B: Tā jīnnián èrshísān ....... .",
    "A: Halo, permisi, kamu bekerja di perusahaan mana? B: Saya bekerja di sebuah perusahaan Jepang, saya seorang pekerja. A: Apakah istrimu juga bekerja di perusahaan? B: Bukan, dia mahasiswa, dia belajar di Universitas Beijing. A: Tahun ini dia berusia berapa? B: Tahun ini dia berusia dua puluh tiga tahun.",
  ),
  paragraph(
    "Lengkapi paragraf perkenalan Jin Mei berikut!",
    [
      "我叫金美，我不是日本人，我是.......人。我的丈夫是日本人，我们.......在北京的公司工作。我今年二十五.......，我不知道他今年.......。",
    ],
    [
      { id: 1, answer: "韩国", extras: ["日本", "国"] },
      { id: 2, answer: "都", extras: ["岁", "班"] },
      { id: 3, answer: "岁", extras: ["国", "班"] },
      { id: 4, answer: "多大", extras: ["都", "国"] },
    ],
    "Wǒ jiào Jīn Měi, wǒ bú shì Rìběn rén, wǒ shì ....... rén. Wǒ de zhàngfu shì Rìběn rén, wǒmen ....... zài Běijīng de gōngsī gōngzuò. Wǒ jīnnián èrshíwǔ ....... , wǒ bù zhīdào tā jīnnián ....... .",
    "Nama saya Jin Mei, saya bukan orang Jepang, saya orang Korea. Suamiku orang Jepang, kami berdua bekerja di perusahaan di Beijing. Tahun ini saya berusia dua puluh lima tahun, saya tidak tahu tahun ini dia berusia berapa.",
  ),
  paragraph(
    "Lengkapi paragraf tentang teman dan keluarganya berikut!",
    [
      "今天我去看我的朋友。他是.......，在一家公司工作，他今年四十.......。他的妻子是医生，她在医院工作。他们有一个儿子，儿子是.......，今年七岁，他在二.......。",
    ],
    [
      { id: 1, answer: "工人", extras: ["小学生", "妻子"] },
      { id: 2, answer: "岁", extras: ["国", "班"] },
      { id: 3, answer: "小学生", extras: ["工人", "丈夫"] },
      { id: 4, answer: "班", extras: ["国", "岁"] },
    ],
    "Jīntiān wǒ qù kàn wǒ de péngyou. Tā shì ....... , zài yì jiā gōngsī gōngzuò, tā jīnnián sìshí ....... . Tā de qīzi shì yīshēng, tā zài yīyuàn gōngzuò. Tāmen yǒu yí ge érzi, érzi shì ....... , jīnnián qī suì, tā zài èr ....... .",
    "Hari ini saya pergi menengok temanku. Dia seorang pekerja, bekerja di sebuah perusahaan, tahun ini dia berusia empat puluh tahun. Istrinya dokter, dia bekerja di rumah sakit. Mereka punya seorang putra, putranya siswa SD, tahun ini berusia tujuh tahun, dia di kelas dua.",
  ),
  paragraph(
    "Lengkapi percakapan tentang istri berikut!",
    [
      "A：这是你的.......吗？B：对，她是我的妻子。A：她今年.......？B：她今年三十.......。A：你们.......是日本人吗？B：我是日本人，她是韩国人。",
    ],
    [
      { id: 1, answer: "妻子", extras: ["丈夫", "班"] },
      { id: 2, answer: "多大", extras: ["岁", "都"] },
      { id: 3, answer: "岁", extras: ["国", "班"] },
      { id: 4, answer: "都", extras: ["岁", "班"] },
    ],
    "A: Zhè shì nǐ de ....... ma? B: Duì, tā shì wǒ de qīzi. A: Tā jīnnián ....... ? B: Tā jīnnián sānshí ....... . A: Nǐmen ....... shì Rìběn rén ma? B: Wǒ shì Rìběn rén, tā shì Hánguó rén.",
    "A: Apakah ini istrimu? B: Ya, dia istriku. A: Tahun ini dia berusia berapa? B: Tahun ini dia berusia tiga puluh tahun. A: Apakah kalian berdua orang Jepang? B: Saya orang Jepang, dia orang Korea.",
  ),
  paragraph(
    "Lengkapi paragraf tentang fakultas berikut!",
    [
      "我是大学生，我在北京大学的外国语.......学习。我们学校有很多学生，他们.......是大学生。我的同学小李是日本人，他今年二十.......，他不是韩国人。我的老师问他：“你是哪.......人？”",
    ],
    [
      { id: 1, answer: "学院", extras: ["岁", "都"] },
      { id: 2, answer: "都", extras: ["岁", "班"] },
      { id: 3, answer: "岁", extras: ["国", "班"] },
      { id: 4, answer: "国", extras: ["班", "岁"] },
    ],
    "Wǒ shì dàxuéshēng, wǒ zài Běijīng Dàxué de wàiguóyǔ ....... xuéxí. Wǒmen xuéxiào yǒu hěn duō xuésheng, tāmen ....... shì dàxuéshēng. Wǒ de tóngxué Xiǎo Lǐ shì Rìběn rén, tā jīnnián èrshí ....... , tā bú shì Hánguó rén. Wǒ de lǎoshī wèn tā: “Nǐ shì nǎ ....... rén?”",
    "Saya mahasiswa, saya belajar di fakultas bahasa asing Universitas Beijing. Di universitas kami ada banyak mahasiswa, mereka semua mahasiswa. Teman sekelasku Xiao Li orang Jepang, tahun ini dia berusia dua puluh tahun, dia bukan orang Korea. Guruku bertanya padanya: “Kamu orang negara mana?”",
  ),
  paragraph(
    "Lengkapi paragraf tentang istri guru berikut!",
    [
      "我的丈夫在公司工作，他是工人。我是他的.......，我在学校工作，我是老师。我们有两个孩子，一个十三.......，是中学生，一个八岁，是.......。我们家四个人，大家.......是中国人。",
    ],
    [
      { id: 1, answer: "妻子", extras: ["丈夫", "公司"] },
      { id: 2, answer: "岁", extras: ["国", "班"] },
      { id: 3, answer: "小学生", extras: ["工人", "丈夫"] },
      { id: 4, answer: "都", extras: ["岁", "国"] },
    ],
    "Wǒ de zhàngfu zài gōngsī gōngzuò, tā shì gōngrén. Wǒ shì tā de ....... , wǒ zài xuéxiào gōngzuò, wǒ shì lǎoshī. Wǒmen yǒu liǎng ge háizi, yí ge shísān ....... , shì zhōngxuéshēng, yí ge bā suì, shì ....... . Wǒmen jiā sì ge rén, dàjiā ....... shì Zhōngguó rén.",
    "Suamiku bekerja di perusahaan, dia seorang pekerja. Saya istrinya, saya bekerja di sekolah, saya guru. Kami punya dua anak, satu berusia tiga belas tahun, siswa SMP, satu berusia delapan tahun, siswa SD. Keluarga kami ada empat orang, semuanya orang Tiongkok.",
  ),
  paragraph(
    "Lengkapi percakapan tentang kakak laki-laki berikut!",
    [
      "A：你是学生吗？B：我是.......，在北京大学学习。A：你的哥哥呢？B：他是.......，他在一家公司工作。A：他今年.......？B：他今年二十八.......。",
    ],
    [
      { id: 1, answer: "大学生", extras: ["工人", "丈夫"] },
      { id: 2, answer: "工人", extras: ["小学生", "妻子"] },
      { id: 3, answer: "多大", extras: ["岁", "国"] },
      { id: 4, answer: "岁", extras: ["都", "班"] },
    ],
    "A: Nǐ shì xuésheng ma? B: Wǒ shì ....... , zài Běijīng Dàxué xuéxí. A: Nǐ de gēge ne? B: Tā shì ....... , tā zài yì jiā gōngsī gōngzuò. A: Tā jīnnián ....... ? B: Tā jīnnián èrshíbā ....... .",
    "A: Apakah kamu pelajar? B: Saya mahasiswa, saya belajar di Universitas Beijing. A: Bagaimana dengan kakak laki-lakimu? B: Dia seorang pekerja, dia bekerja di sebuah perusahaan. A: Tahun ini dia berusia berapa? B: Tahun ini dia berusia dua puluh delapan tahun.",
  ),
  paragraph(
    "Lengkapi paragraf tentang teman asal Jepang berikut!",
    [
      "我叫大卫，我是美国人。我的朋友小田是.......人，他不是中国人，也不是韩国人。他今年二十.......，是大学生。我们.......在北京大学学习，我们在同一个.......。",
    ],
    [
      { id: 1, answer: "日本", extras: ["韩国", "国"] },
      { id: 2, answer: "岁", extras: ["国", "班"] },
      { id: 3, answer: "都", extras: ["岁", "国"] },
      { id: 4, answer: "班", extras: ["岁", "国"] },
    ],
    "Wǒ jiào Dàwèi, wǒ shì Měiguó rén. Wǒ de péngyou Xiǎotián shì ....... rén, tā bú shì Zhōngguó rén, yě bú shì Hánguó rén. Tā jīnnián èrshí ....... , shì dàxuéshēng. Wǒmen ....... zài Běijīng Dàxué xuéxí, wǒmen zài tóng yí ge ....... .",
    "Nama saya David, saya orang Amerika. Temanku Xiaotian orang Jepang, dia bukan orang Tiongkok, juga bukan orang Korea. Tahun ini dia berusia dua puluh tahun, dia mahasiswa. Kami berdua belajar di Universitas Beijing, kami di kelas yang sama.",
  ),
  paragraph(
    "Lengkapi percakapan perkenalan dengan orang Korea berikut!",
    [
      "A：你好！我叫小英，你是哪.......人？B：我是韩国人，我叫金明。A：你是大学生吗？B：不是，我是.......，我在一家公司工作。A：你今年.......？B：我今年二十五.......。",
    ],
    [
      { id: 1, answer: "国", extras: ["班", "岁"] },
      { id: 2, answer: "工人", extras: ["大学生", "丈夫"] },
      { id: 3, answer: "多大", extras: ["都", "国"] },
      { id: 4, answer: "岁", extras: ["国", "班"] },
    ],
    "A: Nǐ hǎo! Wǒ jiào Xiǎoyīng, nǐ shì nǎ ....... rén? B: Wǒ shì Hánguó rén, wǒ jiào Jīn Míng. A: Nǐ shì dàxuéshēng ma? B: Bú shì, wǒ shì ....... , wǒ zài yì jiā gōngsī gōngzuò. A: Nǐ jīnnián ....... ? B: Wǒ jīnnián èrshíwǔ ....... .",
    "A: Halo! Nama saya Xiaoying, kamu orang negara mana? B: Saya orang Korea, nama saya Jin Ming. A: Apakah kamu mahasiswa? B: Bukan, saya seorang pekerja, saya bekerja di sebuah perusahaan. A: Tahun ini kamu berusia berapa? B: Tahun ini saya berusia dua puluh lima tahun.",
  ),
  paragraph(
    "Lengkapi paragraf tentang usia anggota keluarga berikut!",
    [
      "我家有五口人。爸爸今年五十五岁，妈妈今年五十三.......。我哥哥在公司工作，他是.......。我弟弟今年九岁，他是.......。我们家的人.......是中国人。",
    ],
    [
      { id: 1, answer: "岁", extras: ["国", "班"] },
      { id: 2, answer: "工人", extras: ["小学生", "妻子"] },
      { id: 3, answer: "小学生", extras: ["工人", "丈夫"] },
      { id: 4, answer: "都", extras: ["岁", "国"] },
    ],
    "Wǒ jiā yǒu wǔ kǒu rén. Bàba jīnnián wǔshíwǔ suì, māma jīnnián wǔshísān ....... . Wǒ gēge zài gōngsī gōngzuò, tā shì ....... . Wǒ dìdi jīnnián jiǔ suì, tā shì ....... . Wǒmen jiā de rén ....... shì Zhōngguó rén.",
    "Keluargaku ada lima orang. Ayah tahun ini berusia lima puluh lima tahun, ibu tahun ini berusia lima puluh tiga tahun. Kakak laki-lakiku bekerja di perusahaan, dia seorang pekerja. Adik laki-lakiku tahun ini berusia sembilan tahun, dia siswa SD. Semua orang di keluarga kami adalah orang Tiongkok.",
  ),
  paragraph(
    "Lengkapi paragraf tentang suami dan istri yang kuliah berikut!",
    [
      "我叫王明，我在北京大学学习，我是.......。我的.......叫小红，她也是大学生。我们.......在外语.......学习。",
    ],
    [
      { id: 1, answer: "大学生", extras: ["工人", "丈夫"] },
      { id: 2, answer: "妻子", extras: ["丈夫", "班"] },
      { id: 3, answer: "都", extras: ["岁", "国"] },
      { id: 4, answer: "学院", extras: ["岁", "国"] },
    ],
    "Wǒ jiào Wáng Míng, wǒ zài Běijīng Dàxué xuéxí, wǒ shì ....... . Wǒ de ....... jiào Xiǎohóng, tā yě shì dàxuéshēng. Wǒmen ....... zài wàiyǔ ....... xuéxí.",
    "Nama saya Wang Ming, saya belajar di Universitas Beijing, saya mahasiswa. Istriku bernama Xiaohong, dia juga mahasiswa. Kami berdua belajar di fakultas bahasa asing.",
  ),
  paragraph(
    "Lengkapi percakapan tentang kelas berikut!",
    [
      "A：你们班有多少个学生？B：我们三.......有三十个学生，大家.......是小学生。A：你们的老师是哪.......人？B：他是日本人。A：他今年.......？B：他今年四十岁。",
    ],
    [
      { id: 1, answer: "班", extras: ["岁", "国"] },
      { id: 2, answer: "都", extras: ["岁", "国"] },
      { id: 3, answer: "国", extras: ["班", "岁"] },
      { id: 4, answer: "多大", extras: ["都", "国"] },
    ],
    "A: Nǐmen bān yǒu duōshao ge xuésheng? B: Wǒmen sān ....... yǒu sānshí ge xuésheng, dàjiā ....... shì xiǎoxuéshēng. A: Nǐmen de lǎoshī shì nǎ ....... rén? B: Tā shì Rìběn rén. A: Tā jīnnián ....... ? B: Tā jīnnián sìshí suì.",
    "A: Berapa siswa di kelas kalian? B: Di kelas tiga kami ada tiga puluh siswa, semuanya siswa SD. A: Guru kalian orang negara mana? B: Dia orang Jepang. A: Tahun ini dia berusia berapa? B: Tahun ini dia berusia empat puluh tahun.",
  ),
  paragraph(
    "Lengkapi paragraf tentang sekolah menengah berikut!",
    [
      "我在北京第一中学学习，我是.......。我今年十五.......，我在三.......。我们班的同学.......很喜欢踢球。",
    ],
    [
      { id: 1, answer: "中学生", extras: ["工人", "丈夫"] },
      { id: 2, answer: "岁", extras: ["国", "班"] },
      { id: 3, answer: "班", extras: ["岁", "国"] },
      { id: 4, answer: "都", extras: ["岁", "国"] },
    ],
    "Wǒ zài Běijīng dì yī zhōngxué xuéxí, wǒ shì ....... . Wǒ jīnnián shíwǔ ....... , wǒ zài sān ....... . Wǒmen bān de tóngxué ....... hěn xǐhuan tī qiú.",
    "Saya belajar di SMP Pertama Beijing, saya siswa SMP. Tahun ini saya berusia lima belas tahun, saya di kelas tiga. Teman-teman sekelas kami semuanya suka bermain sepak bola.",
  ),
  paragraph(
    "Lengkapi paragraf tentang keluarga Korea berikut!",
    [
      "我是.......人，我的丈夫也是韩国人。我们有一个女儿，她在小学学习，是.......。我丈夫在公司工作，他是.......。我是他的.......，我是老师。",
    ],
    [
      { id: 1, answer: "韩国", extras: ["日本", "国"] },
      { id: 2, answer: "小学生", extras: ["工人", "丈夫"] },
      { id: 3, answer: "工人", extras: ["小学生", "妻子"] },
      { id: 4, answer: "妻子", extras: ["丈夫", "班"] },
    ],
    "Wǒ shì ....... rén, wǒ de zhàngfu yě shì Hánguó rén. Wǒmen yǒu yí ge nǚ'ér, tā zài xiǎoxué xuéxí, shì ....... . Wǒ zhàngfu zài gōngsī gōngzuò, tā shì ....... . Wǒ shì tā de ....... , wǒ shì lǎoshī.",
    "Saya orang Korea, suamiku juga orang Korea. Kami punya seorang putri, dia belajar di sekolah dasar, dia siswa SD. Suamiku bekerja di perusahaan, dia seorang pekerja. Saya istrinya, saya seorang guru.",
  ),
  paragraph(
    "Lengkapi percakapan di hotel berikut!",
    [
      "A：请问你是哪.......人？B：我是日本人。A：你们.......是日本人吗？B：对，我和我的妻子都是。A：你今年.......？B：我今年三十.......。",
    ],
    [
      { id: 1, answer: "国", extras: ["班", "岁"] },
      { id: 2, answer: "都", extras: ["岁", "国"] },
      { id: 3, answer: "多大", extras: ["都", "国"] },
      { id: 4, answer: "岁", extras: ["国", "班"] },
    ],
    "A: Qǐngwèn nǐ shì nǎ ....... rén? B: Wǒ shì Rìběn rén. A: Nǐmen ....... shì Rìběn rén ma? B: Duì, wǒ hé wǒ de qīzi dōu shì. A: Nǐ jīnnián ....... ? B: Wǒ jīnnián sānshí ....... .",
    "A: Permisi, Anda orang negara mana? B: Saya orang Jepang. A: Apakah kalian berdua orang Jepang? B: Ya, saya dan istriku keduanya orang Jepang. A: Tahun ini Anda berusia berapa? B: Tahun ini saya berusia tiga puluh tahun.",
  ),
  paragraph(
    "Lengkapi paragraf tentang universitas bahasa berikut!",
    [
      "我在北京语言大学学习，我是.......。我在国际.......，我在二.......。我们班有二十个同学，他们.......是外国人。",
    ],
    [
      { id: 1, answer: "大学生", extras: ["工人", "丈夫"] },
      { id: 2, answer: "学院", extras: ["岁", "都"] },
      { id: 3, answer: "班", extras: ["岁", "国"] },
      { id: 4, answer: "都", extras: ["岁", "国"] },
    ],
    "Wǒ zài Běijīng Yǔyán Dàxué xuéxí, wǒ shì ....... . Wǒ zài guójì ....... , wǒ zài èr ....... . Wǒmen bān yǒu èrshí ge tóngxué, tāmen ....... shì wàiguó rén.",
    "Saya belajar di Universitas Bahasa Beijing, saya mahasiswa. Saya di fakultas internasional, saya di kelas dua. Di kelas kami ada dua puluh teman, mereka semuanya orang asing.",
  ),
  paragraph(
    "Lengkapi percakapan tentang pekerjaan dan suami berikut!",
    [
      "A：你好！你在哪里工作？B：我在一家.......工作，我是.......。A：你的丈夫呢？B：我的.......是大学生，他今年二十.......。",
    ],
    [
      { id: 1, answer: "公司", extras: ["班", "岁"] },
      { id: 2, answer: "工人", extras: ["小学生", "班"] },
      { id: 3, answer: "丈夫", extras: ["妻子", "国"] },
      { id: 4, answer: "岁", extras: ["国", "班"] },
    ],
    "A: Nǐ hǎo! Nǐ zài nǎlǐ gōngzuò? B: Wǒ zài yì jiā ....... gōngzuò, wǒ shì ....... . A: Nǐ de zhàngfu ne? B: Wǒ de ....... shì dàxuéshēng, tā jīnnián èrshí ....... .",
    "A: Halo! Kamu bekerja di mana? B: Saya bekerja di sebuah perusahaan, saya seorang pekerja. A: Bagaimana dengan suamimu? B: Suamiku adalah mahasiswa, tahun ini dia berusia dua puluh tahun.",
  ),
  paragraph(
    "Lengkapi percakapan perkenalan dua orang Jepang berikut!",
    [
      "A：你们好！你们是哪.......人？B：我们.......是日本人。A：你们今年.......？B：我今年十八岁，他今年十七.......。",
    ],
    [
      { id: 1, answer: "国", extras: ["班", "岁"] },
      { id: 2, answer: "都", extras: ["岁", "国"] },
      { id: 3, answer: "多大", extras: ["都", "国"] },
      { id: 4, answer: "岁", extras: ["国", "班"] },
    ],
    "A: Nǐmen hǎo! Nǐmen shì nǎ ....... rén? B: Wǒmen ....... shì Rìběn rén. A: Nǐmen jīnnián ....... ? B: Wǒ jīnnián shíbā suì, tā jīnnián shíqī ....... .",
    "A: Halo semuanya! Kalian orang negara mana? B: Kami berdua orang Jepang. A: Tahun ini kalian berusia berapa? B: Tahun ini saya berusia delapan belas tahun, dia tujuh belas tahun.",
  ),
];

export const u7_lessons: Lesson[] = [
  {
    id: "u7_l1",
    title: "U7 L1",
    exercises: u7_sentences,
  },
  {
    id: "u7_l2",
    title: "U7 L2",
    exercises: u7_paragraphs,
  },
];
