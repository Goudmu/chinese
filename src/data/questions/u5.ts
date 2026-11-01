import type { Lesson } from "@/data/course";
import { paragraph, sentence } from "./helpers";

const u5_sentences = [
  sentence(
    "Ini ayah saya.",
    [
      ["这", "是", "我", "爸爸"],
      ["这", "是", "我", "的", "爸爸"],
    ],
    ["那", "妈妈", "不"],
  ),
  sentence(
    "Itu ibu saya.",
    [
      ["那", "是", "我", "妈妈"],
      ["那", "是", "我", "的", "妈妈"],
    ],
    ["这", "爸爸", "吗"],
  ),
  sentence(
    "Kakak laki-laki saya adalah dokter.",
    [
      ["我", "哥哥", "是", "医生"],
      ["我", "的", "哥哥", "是", "医生"],
    ],
    ["姐姐", "老师", "不"],
  ),
  sentence(
    "Kakak perempuan saya adalah guru.",
    [
      ["我", "姐姐", "是", "老师"],
      ["我", "的", "姐姐", "是", "老师"],
    ],
    ["哥哥", "学生", "吗"],
  ),
  sentence(
    "Adik laki-laki saya adalah siswa.",
    [
      ["我", "弟弟", "是", "学生"],
      ["我", "的", "弟弟", "是", "学生"],
    ],
    ["妹妹", "医生", "不"],
  ),
  sentence(
    "Adik perempuan saya adalah siswa.",
    [
      ["我", "妹妹", "是", "学生"],
      ["我", "的", "妹妹", "是", "学生"],
    ],
    ["弟弟", "老师", "吗"],
  ),
  sentence(
    "Saya punya kakak laki-laki.",
    ["我", "有", "哥哥"],
    ["没有", "姐姐", "不"],
  ),
  sentence(
    "Saya tidak punya adik perempuan.",
    ["我", "没有", "妹妹"],
    ["有", "弟弟", "不"],
  ),
  sentence(
    "Apakah kamu punya kakak perempuan?",
    ["你", "有", "姐姐", "吗"],
    ["没有", "哥哥", "他"],
  ),
  sentence(
    "Dia (laki-laki) tidak punya adik laki-laki.",
    ["他", "没有", "弟弟"],
    ["有", "妹妹", "不"],
  ),
  sentence("Saya punya kucing.", ["我", "有", "猫"], ["没有", "孩子", "你"]),
  sentence(
    "Apakah kamu punya kucing?",
    ["你", "有", "猫", "吗"],
    ["没有", "儿子", "不"],
  ),
  sentence(
    "Dia (perempuan) tidak punya kucing.",
    ["她", "没有", "猫"],
    ["有", "女儿", "他"],
  ),
  sentence(
    "Saya punya anak laki-laki.",
    ["我", "有", "儿子"],
    ["没有", "女儿", "不"],
  ),
  sentence(
    "Saya punya anak perempuan.",
    ["我", "有", "女儿"],
    ["没有", "儿子", "不"],
  ),
  sentence(
    "Apakah kamu punya anak?",
    ["你", "有", "孩子", "吗"],
    ["没有", "猫", "他"],
  ),
  sentence(
    "Dia (laki-laki) tidak punya anak.",
    ["他", "没有", "孩子"],
    ["有", "儿子", "不"],
  ),
  sentence(
    "Saya cinta ibu saya.",
    [
      ["我", "爱", "我", "妈妈"],
      ["我", "爱", "我", "的", "妈妈"],
    ],
    ["爸爸", "讨厌", "不"],
  ),
  sentence(
    "Saya cinta ayah saya.",
    [
      ["我", "爱", "我", "爸爸"],
      ["我", "爱", "我", "的", "爸爸"],
    ],
    ["妈妈", "讨厌", "不"],
  ),
  sentence("Saya benci kucing.", ["我", "讨厌", "猫"], ["爱", "喜欢", "不"]),
  sentence(
    "Dia (perempuan) tidak benci kucing.",
    ["她", "不", "讨厌", "猫"],
    ["爱", "他", "没有"],
  ),
  sentence(
    "Apakah kamu suka kucing?",
    ["你", "喜欢", "猫", "吗"],
    ["讨厌", "爱", "不"],
  ),
  sentence(
    "Anak laki-laki itu suka kucing.",
    ["那", "个", "男孩儿", "喜欢", "猫"],
    ["这", "女孩儿", "讨厌"],
  ),
  sentence(
    "Anak perempuan itu adalah adik perempuan saya.",
    [
      ["那", "个", "女孩儿", "是", "我", "妹妹"],
      ["那", "个", "女孩儿", "是", "我", "的", "妹妹"],
    ],
    ["这", "男孩儿", "不"],
  ),
  sentence(
    "Laki-laki itu adalah ayah saya.",
    [
      ["那", "个", "男人", "是", "我", "爸爸"],
      ["那", "个", "男人", "是", "我", "的", "爸爸"],
    ],
    ["这", "女人", "吗"],
  ),
  sentence(
    "Perempuan itu adalah ibu saya.",
    [
      ["那", "个", "女人", "是", "我", "妈妈"],
      ["那", "个", "女人", "是", "我", "的", "妈妈"],
    ],
    ["这", "男人", "吗"],
  ),
  sentence(
    "Ibu memeluk anak perempuan.",
    ["妈妈", "抱", "女儿"],
    ["爸爸", "儿子", "不"],
  ),
  sentence("Ayah memeluk kucing.", ["爸爸", "抱", "猫"], ["妈妈", "爱", "不"]),
  sentence(
    "Di rumah saya ada ayah, ibu, dan kakak.",
    [
      ["我", "家", "有", "爸爸", "妈妈", "和", "哥哥"],
      ["我", "的", "家", "有", "爸爸", "妈妈", "和", "哥哥"],
    ],
    ["没有", "姐姐", "在"],
  ),
  sentence(
    "Apakah ayah kamu ada di rumah?",
    [
      ["你", "爸爸", "在", "家", "吗"],
      ["你", "的", "爸爸", "在", "家", "吗"],
    ],
    ["妈妈", "学校", "不"],
  ),
];

const u5_paragraphs = [
  paragraph(
    "Lengkapi paragraf tentang anggota keluarga berikut!",
    [
      "我家有五口人。我今年十岁。有一个人十五岁，他比我大，他是我.......。有一个人五岁，她比我小，她是我.......。爸爸和妈妈很.......我们。我家没有猫，因为妈妈.......猫。",
    ],
    [
      { id: 1, answer: "哥哥", extras: ["爱", "没有"] },
      { id: 2, answer: "妹妹", extras: ["讨厌", "有"] },
      { id: 3, answer: "爱", extras: ["哥哥", "儿子"] },
      { id: 4, answer: "讨厌", extras: ["妹妹", "孩子"] },
    ],
    "Wǒ jiā yǒu wǔ kǒu rén. Wǒ jīnnián shí suì. Yǒu yí ge rén shíwǔ suì, tā bǐ wǒ dà, tā shì wǒ ....... . Yǒu yí ge rén wǔ suì, tā bǐ wǒ xiǎo, tā shì wǒ ....... . Bàba hé māma hěn ....... wǒmen. Wǒ jiā méiyǒu māo, yīnwèi māma ....... māo.",
    "Keluargaku ada lima orang. Tahun ini saya berusia sepuluh tahun. Ada seseorang yang berusia lima belas tahun, dia lebih tua dariku, dia kakak laki-lakiku. Ada seseorang yang berusia lima tahun, dia lebih muda dariku, dia adik perempuanku. Ayah dan ibu sangat menyayangi kami. Keluargaku tidak punya kucing, karena ibu benci kucing.",
  ),
  paragraph(
    "Lengkapi paragraf tentang kucing berikut!",
    [
      "我喜欢猫，猫很可爱。我.......它们，每天都.......它们。我哥哥.......猫，他说猫太吵。我家.......两只猫，一只是我的，一只是妹妹的。",
    ],
    [
      { id: 1, answer: "爱", extras: ["哥哥", "孩子"] },
      { id: 2, answer: "抱", extras: ["女人", "弟弟"] },
      { id: 3, answer: "讨厌", extras: ["爸爸", "儿子"] },
      { id: 4, answer: "有", extras: ["女儿", "妹妹"] },
    ],
    "Wǒ xǐhuan māo, māo hěn kě'ài. Wǒ ....... tāmen, měi tiān dōu ....... tāmen. Wǒ gēge ....... māo, tā shuō māo tài chǎo. Wǒ jiā ....... liǎng zhī māo, yì zhī shì wǒ de, yì zhī shì mèimei de.",
    "Saya suka kucing, kucing sangat lucu. Saya mencintai mereka, setiap hari saya menggendong mereka. Kakakku benci kucing, dia bilang kucing terlalu berisik. Rumahku punya dua kucing, satu milikku, satu milik adik perempuanku.",
  ),
  paragraph(
    "Lengkapi percakapan tentang adik berikut!",
    [
      "A：这是谁？B：.......是我妹妹。她五岁。A：那个男孩儿呢？B：他是我.......，他三岁，比妹妹小。A：你们家有哥哥吗？B：我们家.......哥哥，我是最大的孩子。A：你喜欢弟弟妹妹吗？B：我很.......他们！",
    ],
    [
      { id: 1, answer: "这", extras: ["有", "爱"] },
      { id: 2, answer: "弟弟", extras: ["爱", "没有"] },
      { id: 3, answer: "没有", extras: ["有", "哥哥"] },
      { id: 4, answer: "爱", extras: ["哥哥", "孩子"] },
    ],
    "A: Zhè shì shéi? B: ....... shì wǒ mèimei. Tā wǔ suì. A: Nà ge nánháir ne? B: Tā shì wǒ ....... , tā sān suì, bǐ mèimei xiǎo. A: Nǐmen jiā yǒu gēge ma? B: Wǒmen jiā ....... gēge, wǒ shì zuì dà de háizi. A: Nǐ xǐhuan dìdi mèimei ma? B: Wǒ hěn ....... tāmen!",
    "A: Ini siapa? B: Ini adik perempuanku. Dia berusia lima tahun. A: Kalau anak laki-laki itu? B: Dia adik laki-lakiku, usianya tiga tahun, lebih kecil dari adik perempuan. A: Apakah kalian punya kakak laki-laki? B: Kami tidak punya kakak laki-laki, aku anak tertua. A: Apakah kamu suka adik-adikmu? B: Aku sangat menyayangi mereka!",
  ),
  paragraph(
    "Lengkapi paragraf tentang keluarga di taman berikut!",
    [
      "公园里有一家人。一个.......在看书，他很高，他是爸爸。一个.......在喝茶，她很漂亮，她是妈妈。他们的男孩儿五岁，他是他们的.......。他们的女孩儿三岁，她是他们的.......。",
    ],
    [
      { id: 1, answer: "男人", extras: ["女人", "爱"] },
      { id: 2, answer: "女人", extras: ["男人", "抱"] },
      { id: 3, answer: "儿子", extras: ["女儿", "没有"] },
      { id: 4, answer: "女儿", extras: ["儿子", "有"] },
    ],
    "Gōngyuán lǐ yǒu yì jiā rén. Yí ge ....... zài kàn shū, tā hěn gāo, tā shì bàba. Yí ge ....... zài hē chá, tā hěn piàoliang, tā shì māma. Tāmen de nánháir wǔ suì, tā shì tāmen de ....... . Tāmen de nǚháir sān suì, tā shì tāmen de ....... .",
    "Di taman ada satu keluarga. Seorang pria sedang membaca buku, dia tinggi, dia ayah. Seorang wanita sedang minum teh, dia cantik, dia ibu. Anak laki-laki mereka berusia lima tahun, dia putra mereka. Anak perempuan mereka berusia tiga tahun, dia putri mereka.",
  ),
  paragraph(
    "Lengkapi paragraf tentang hari Minggu di rumah berikut!",
    [
      "今天是星期天，大家都在家。妈妈在家里.......孩子。这个男孩儿是爸爸妈妈的.......，他才一岁。爸爸妈妈都很.......他。他们家.......女儿，只有这个孩子。",
    ],
    [
      { id: 1, answer: "抱", extras: ["猫", "弟弟"] },
      { id: 2, answer: "儿子", extras: ["抱", "爱"] },
      { id: 3, answer: "爱", extras: ["妹妹", "女人"] },
      { id: 4, answer: "没有", extras: ["爱", "抱"] },
    ],
    "Jīntiān shì xīngqītiān, dàjiā dōu zài jiā. Māma zài jiālǐ ....... háizi. Zhège nánháir shì bàba māma de ....... , tā cái yí suì. Bàba māma dōu hěn ....... tā. Tāmen jiā ....... nǚ'ér, zhǐyǒu zhège háizi.",
    "Hari ini hari Minggu, semua orang ada di rumah. Ibu sedang menggendong anaknya di rumah. Anak laki-laki ini adalah putra ayah dan ibu, usianya baru satu tahun. Ayah dan ibu sangat menyayanginya. Keluarga mereka tidak punya putri, hanya ada anak ini.",
  ),
  paragraph(
    "Lengkapi paragraf tentang rumah yang kecil berikut!",
    [
      "我家的房子很小。我弟弟很.......猫，他每天都.......猫。我妈妈不喜欢猫，她很.......猫。我也不喜欢猫。所以我家.......有猫。",
    ],
    [
      { id: 1, answer: "爱", extras: ["妹妹", "儿子"] },
      { id: 2, answer: "抱", extras: ["猫", "女儿"] },
      { id: 3, answer: "讨厌", extras: ["姐姐", "孩子"] },
      { id: 4, answer: "没", extras: ["猫", "爱"] },
    ],
    "Wǒ jiā de fángzi hěn xiǎo. Wǒ dìdi hěn ....... māo, tā měi tiān dōu ....... māo. Wǒ māma bù xǐhuan māo, tā hěn ....... māo. Wǒ yě bù xǐhuan māo. Suǒyǐ wǒ jiā ....... yǒu māo.",
    "Rumahku kecil. Adikku sangat mencintai kucing, setiap hari dia menggendong kucing. Ibuku tidak suka kucing, dia sangat benci kucing. Saya juga tidak suka kucing. Jadi rumahku tidak punya kucing.",
  ),
  paragraph(
    "Lengkapi paragraf tentang adik perempuan dan adik laki-laki berikut!",
    [
      "这个女孩儿在我身边，是我妹妹，她四岁。.......个男孩儿是我弟弟，他六岁。我们家没有哥哥，也.......姐姐。我是家里最大的.......。我很.......妹妹和弟弟。",
    ],
    [
      { id: 1, answer: "那", extras: ["有", "爱"] },
      { id: 2, answer: "没有", extras: ["爱", "儿子"] },
      { id: 3, answer: "孩子", extras: ["爱", "没有"] },
      { id: 4, answer: "爱", extras: ["姐姐", "孩子"] },
    ],
    "Zhège nǚháir zài wǒ shēnbiān, shì wǒ mèimei, tā sì suì. ....... ge nánháir shì wǒ dìdi, tā liù suì. Wǒmen jiā méiyǒu gēge, yě ....... jiějie. Wǒ shì jiā lǐ zuì dà de ....... . Wǒ hěn ....... mèimei hé dìdi.",
    "Anak perempuan ini ada di sampingku, dia adik perempuanku, usianya empat tahun. Anak laki-laki itu adik laki-lakiku, usianya enam tahun. Kami tidak punya kakak laki-laki, juga tidak punya kakak perempuan. Saya anak tertua di rumah. Saya sangat menyayangi adik perempuan dan adik laki-lakiku.",
  ),
  paragraph(
    "Lengkapi percakapan tentang kakak perempuan berikut!",
    [
      "A：你有哥哥吗？B：我.......哥哥，但是我有一个姐姐。A：她多大？B：她十二岁。她是个.......，她很喜欢我。A：你们家有猫吗？B：有，我很.......猫，但是我爸爸.......猫。",
    ],
    [
      { id: 1, answer: "没有", extras: ["有", "爱"] },
      { id: 2, answer: "女孩儿", extras: ["男孩儿", "没有"] },
      { id: 3, answer: "爱", extras: ["哥哥", "孩子"] },
      { id: 4, answer: "讨厌", extras: ["姐姐", "女人"] },
    ],
    "A: Nǐ yǒu gēge ma? B: Wǒ ....... gēge, dànshì wǒ yǒu yí ge jiějie. A: Tā duō dà? B: Tā shí'èr suì. Tā shì ge ....... , tā hěn xǐhuan wǒ. A: Nǐmen jiā yǒu māo ma? B: Yǒu, wǒ hěn ....... māo, dànshì wǒ bàba ....... māo.",
    "A: Apakah kamu punya kakak laki-laki? B: Saya tidak punya kakak laki-laki, tetapi saya punya seorang kakak perempuan. A: Berapa usianya? B: Dia berusia dua belas tahun. Dia seorang anak perempuan, dia sangat menyukaiku. A: Apakah keluargamu punya kucing? B: Punya, saya sangat mencintai kucing, tetapi ayahku benci kucing.",
  ),
  paragraph(
    "Lengkapi paragraf tentang teman sekelas berikut!",
    [
      "我们班很热闹。我们班有十个孩子，六个是男孩儿，四个是.......。我叫大明，我是个.......。我很.......我的姐姐，我姐姐也爱我。我朋友的妹妹很.......猫，因为猫咬过她。",
    ],
    [
      { id: 1, answer: "女孩儿", extras: ["男孩儿", "爱"] },
      { id: 2, answer: "男孩儿", extras: ["女孩儿", "没有"] },
      { id: 3, answer: "爱", extras: ["哥哥", "孩子"] },
      { id: 4, answer: "讨厌", extras: ["弟弟", "抱"] },
    ],
    "Wǒmen bān hěn rènao. Wǒmen bān yǒu shí ge háizi, liù ge shì nánháir, sì ge shì ....... . Wǒ jiào Dàmíng, wǒ shì ge ....... . Wǒ hěn ....... wǒ de jiějie, wǒ jiějie yě ài wǒ. Wǒ péngyou de mèimei hěn ....... māo, yīnwèi māo yǎo guo tā.",
    "Kelasku sangat ramai. Di kelas kami ada sepuluh anak, enam anak laki-laki dan empat anak perempuan. Nama saya Daming, saya anak laki-laki. Saya sangat menyayangi kakak perempuanku, kakakku juga menyayangiku. Adik perempuan temanku sangat benci kucing, karena kucing pernah menggigitnya.",
  ),
  paragraph(
    "Lengkapi paragraf tentang kakak beradik berikut!",
    [
      "小红家有四口人。哥哥是个男孩儿，他叫大明，他是爸爸妈妈的.......。小红是个女孩儿，她是爸爸妈妈的.......。爸爸妈妈很.......他们的孩子。他们家没有.......，所以小红很想要一只。",
    ],
    [
      { id: 1, answer: "儿子", extras: ["女儿", "爱"] },
      { id: 2, answer: "女儿", extras: ["儿子", "没有"] },
      { id: 3, answer: "爱", extras: ["猫", "男人"] },
      { id: 4, answer: "猫", extras: ["抱", "讨厌"] },
    ],
    "Xiǎohóng jiā yǒu sì kǒu rén. Gēge shì ge nánháir, tā jiào Dàmíng, tā shì bàba māma de ....... . Xiǎohóng shì ge nǚháir, tā shì bàba māma de ....... . Bàba māma hěn ....... tāmen de háizi. Tāmen jiā méiyǒu ....... , suǒyǐ Xiǎohóng hěn xiǎng yào yì zhī.",
    "Keluarga Xiaohong ada empat orang. Kakaknya seorang anak laki-laki, namanya Daming, dia putra ayah dan ibu. Xiaohong seorang anak perempuan, dia putri ayah dan ibu. Ayah dan ibu sangat menyayangi anak-anak mereka. Keluarga mereka tidak punya kucing, jadi Xiaohong sangat ingin punya satu.",
  ),
  paragraph(
    "Lengkapi paragraf tentang adik kecil berikut!",
    [
      "我叫大明，我爸爸是医生，我妈妈是老师。他们都很.......我。我是他们的.......，我今年八岁。我有一个弟弟，他还很小，妈妈每天都.......他。我们家没有.......，因为弟弟怕猫。",
    ],
    [
      { id: 1, answer: "爱", extras: ["弟弟", "女儿"] },
      { id: 2, answer: "儿子", extras: ["女儿", "爱"] },
      { id: 3, answer: "抱", extras: ["猫", "妈妈"] },
      { id: 4, answer: "猫", extras: ["抱", "有"] },
    ],
    "Wǒ jiào Dàmíng, wǒ bàba shì yīshēng, wǒ māma shì lǎoshī. Tāmen dōu hěn ....... wǒ. Wǒ shì tāmen de ....... , wǒ jīnnián bā suì. Wǒ yǒu yí ge dìdi, tā hái hěn xiǎo, māma měi tiān dōu ....... tā. Wǒmen jiā méiyǒu ....... , yīnwèi dìdi pà māo.",
    "Nama saya Daming, ayahku dokter, ibuku guru. Mereka sangat menyayangiku. Saya putra mereka, tahun ini saya berusia delapan tahun. Saya punya seorang adik laki-laki, dia masih sangat kecil, ibu menggendongnya setiap hari. Keluarga kami tidak punya kucing, karena adik takut kucing.",
  ),
  paragraph(
    "Lengkapi paragraf tentang orang tua dan anak-anaknya berikut!",
    [
      "今天我们一起在公园玩。站在远处的.......个男人是我爸爸，他是医生。站在我身边的这个.......是我妈妈，她是老师。他们有两个孩子，一个是我，一个是我的.......，他比我大。我们都很.......爸爸妈妈。",
    ],
    [
      { id: 1, answer: "那", extras: ["有", "爱"] },
      { id: 2, answer: "女人", extras: ["男人", "讨厌"] },
      { id: 3, answer: "哥哥", extras: ["弟弟", "抱"] },
      { id: 4, answer: "爱", extras: ["儿子", "孩子"] },
    ],
    "Jīntiān wǒmen yìqǐ zài gōngyuán wán. Zhàn zài yuǎnchù de ....... ge nánrén shì wǒ bàba, tā shì yīshēng. Zhàn zài wǒ shēnbiān de zhège ....... shì wǒ māma, tā shì lǎoshī. Tāmen yǒu liǎng ge háizi, yí ge shì wǒ, yí ge shì wǒ de ....... , tā bǐ wǒ dà. Wǒmen dōu hěn ....... bàba māma.",
    "Hari ini kami bermain bersama di taman. Pria yang berdiri di kejauhan itu ayahku, dia dokter. Wanita yang berdiri di sampingku ini ibuku, dia guru. Mereka punya dua anak, satu adalah saya, satu lagi kakak laki-lakiku, dia lebih tua dariku. Kami semua sangat menyayangi ayah dan ibu.",
  ),
  paragraph(
    "Lengkapi paragraf tentang hari ulang tahun berikut!",
    [
      "今天是我的生日。我很想要一只猫，但是我家.......猫。妈妈说：“我们.......钱买猫。”我弟弟有一只猫，我很.......他的猫。我想.......它一下，但是它不喜欢我。",
    ],
    [
      { id: 1, answer: "没有", extras: ["爱", "女儿"] },
      { id: 2, answer: "没", extras: ["爱", "姐姐"] },
      { id: 3, answer: "爱", extras: ["哥哥", "没"] },
      { id: 4, answer: "抱", extras: ["女儿", "爱"] },
    ],
    "Jīntiān shì wǒ de shēngrì. Wǒ hěn xiǎng yào yì zhī māo, dànshì wǒ jiā ....... māo. Māma shuō: “Wǒmen ....... qián mǎi māo.” Wǒ dìdi yǒu yì zhī māo, wǒ hěn ....... tā de māo. Wǒ xiǎng ....... tā yíxià, dànshì tā bù xǐhuan wǒ.",
    "Hari ini ulang tahunku. Saya sangat ingin punya seekor kucing, tetapi rumahku tidak punya kucing. Ibu berkata: “Kita tidak punya uang untuk membeli kucing.” Adikku punya seekor kucing, saya sangat mencintai kucingnya. Saya ingin menggendongnya sebentar, tetapi kucing itu tidak menyukaiku.",
  ),
  paragraph(
    "Lengkapi percakapan tentang anak-anak berikut!",
    [
      "A：这个孩子是谁？B：他是我.......，他五岁。A：那个孩子呢？B：她是我.......，她三岁。A：你们家有猫吗？B：我们家.......猫，因为孩子们很.......抱猫。",
    ],
    [
      { id: 1, answer: "儿子", extras: ["女儿", "爱"] },
      { id: 2, answer: "女儿", extras: ["儿子", "有"] },
      { id: 3, answer: "有", extras: ["没有", "孩子"] },
      { id: 4, answer: "爱", extras: ["哥哥", "女人"] },
    ],
    "A: Zhège háizi shì shéi? B: Tā shì wǒ ....... , tā wǔ suì. A: Nà ge háizi ne? B: Tā shì wǒ ....... , tā sān suì. A: Nǐmen jiā yǒu māo ma? B: Wǒmen jiā ....... māo, yīnwèi háizimen hěn ....... bào māo.",
    "A: Anak ini siapa? B: Dia putraku, usianya lima tahun. A: Kalau anak yang itu? B: Dia putriku, usianya tiga tahun. A: Apakah keluargamu punya kucing? B: Keluarga kami punya kucing, karena anak-anak sangat suka menggendong kucing.",
  ),
  paragraph(
    "Lengkapi paragraf tentang adik laki-laki yang takut kucing berikut!",
    [
      "我叫小英，我是个.......。我家有爸爸、妈妈和一个弟弟。弟弟是个.......，他今年三岁。我很.......我弟弟，我常常抱他。但是我弟弟.......我们家的猫，他一看到猫就哭。",
    ],
    [
      { id: 1, answer: "女孩儿", extras: ["男孩儿", "抱"] },
      { id: 2, answer: "男孩儿", extras: ["女孩儿", "有"] },
      { id: 3, answer: "爱", extras: ["哥哥", "女人"] },
      { id: 4, answer: "讨厌", extras: ["妈妈", "没有"] },
    ],
    "Wǒ jiào Xiǎoyīng, wǒ shì ge ....... . Wǒ jiā yǒu bàba, māma hé yí ge dìdi. Dìdi shì ge ....... , tā jīnnián sān suì. Wǒ hěn ....... wǒ dìdi, wǒ chángcháng bào tā. Dànshì wǒ dìdi ....... wǒmen jiā de māo, tā yí kàndào māo jiù kū.",
    "Nama saya Xiaoying, saya seorang anak perempuan. Keluargaku ada ayah, ibu, dan seorang adik laki-laki. Adikku seorang anak laki-laki, usianya tiga tahun. Saya sangat menyayangi adikku, saya sering menggendongnya. Tetapi adikku benci kucing di rumah kami, begitu melihat kucing dia langsung menangis.",
  ),
  paragraph(
    "Lengkapi paragraf tentang pasangan suami istri berikut!",
    [
      "他们是一家人。王明是个.......，他很高。李红是个.......，她很漂亮。他们有一个女儿，没有.......。女儿很爱猫，但是她爸爸.......猫，所以他们家没有猫。",
    ],
    [
      { id: 1, answer: "男人", extras: ["女人", "爱"] },
      { id: 2, answer: "女人", extras: ["男人", "抱"] },
      { id: 3, answer: "儿子", extras: ["女儿", "爱"] },
      { id: 4, answer: "讨厌", extras: ["妹妹", "孩子"] },
    ],
    "Tāmen shì yì jiā rén. Wáng Míng shì ge ....... , tā hěn gāo. Lǐ Hóng shì ge ....... , tā hěn piàoliang. Tāmen yǒu yí ge nǚ'ér, méiyǒu ....... . Nǚ'ér hěn ài māo, dànshì tā bàba ....... māo, suǒyǐ tāmen jiā méiyǒu māo.",
    "Mereka satu keluarga. Wang Ming seorang pria, dia tinggi. Li Hong seorang wanita, dia cantik. Mereka punya seorang putri, tidak punya putra. Putri mereka sangat suka kucing, tetapi ayahnya benci kucing, jadi keluarga mereka tidak punya kucing.",
  ),
  paragraph(
    "Lengkapi paragraf tentang dua kucing berikut!",
    [
      "这只猫是我的，.......只猫是我哥哥的。我的猫很小，哥哥的猫很大。它们都很可爱。我很.......我的猫，每天都.......它。我哥哥的猫不喜欢我，它很.......我。",
    ],
    [
      { id: 1, answer: "那", extras: ["有", "爱"] },
      { id: 2, answer: "爱", extras: ["哥哥", "孩子"] },
      { id: 3, answer: "抱", extras: ["女儿", "弟弟"] },
      { id: 4, answer: "讨厌", extras: ["弟弟", "没有"] },
    ],
    "Zhè zhī māo shì wǒ de, ....... zhī māo shì wǒ gēge de. Wǒ de māo hěn xiǎo, gēge de māo hěn dà. Tāmen dōu hěn kě'ài. Wǒ hěn ....... wǒ de māo, měi tiān dōu ....... tā. Wǒ gēge de māo bù xǐhuan wǒ, tā hěn ....... wǒ.",
    "Kucing ini milikku, kucing itu milik kakak laki-lakiku. Kucingku kecil, kucing kakakku besar. Keduanya sangat lucu. Saya sangat mencintai kucingku, setiap hari saya menggendongnya. Kucing kakakku tidak suka padaku, dia sangat benci aku.",
  ),
  paragraph(
    "Lengkapi paragraf tentang anak-anak di taman berikut!",
    [
      "今天天气很好。这里的人很多。公园里有很多.......，他们在玩。一个女人在.......一个很小的孩子，她是孩子的妈妈，她很.......孩子。孩子的哥哥.......猫，所以他不想去看猫。",
    ],
    [
      { id: 1, answer: "孩子", extras: ["爱", "没有"] },
      { id: 2, answer: "抱", extras: ["猫", "男人"] },
      { id: 3, answer: "爱", extras: ["哥哥", "女人"] },
      { id: 4, answer: "讨厌", extras: ["妹妹", "孩子"] },
    ],
    "Jīntiān tiānqì hěn hǎo. Zhèlǐ de rén hěn duō. Gōngyuán lǐ yǒu hěn duō ....... , tāmen zài wán. Yí ge nǚrén zài ....... yí ge hěn xiǎo de háizi, tā shì háizi de māma, tā hěn ....... háizi. Háizi de gēge ....... māo, suǒyǐ tā bù xiǎng qù kàn māo.",
    "Hari ini cuacanya bagus. Di sini banyak orang. Di taman ada banyak anak, mereka sedang bermain. Seorang wanita sedang menggendong anak yang sangat kecil, dia ibu anak itu, dia sangat menyayangi anaknya. Kakak anak itu benci kucing, jadi dia tidak mau pergi melihat kucing.",
  ),
  paragraph(
    "Lengkapi paragraf tentang kakak perempuan dan kucing berikut!",
    [
      "我家有爸爸、妈妈、姐姐和我。我们家.......猫，因为妈妈很.......猫。我姐姐很想有一只猫。昨天她在朋友家.......了一只猫，她很高兴。她说：“我很.......这只猫！”",
    ],
    [
      { id: 1, answer: "没有", extras: ["爱", "女儿"] },
      { id: 2, answer: "讨厌", extras: ["姐姐", "弟弟"] },
      { id: 3, answer: "抱", extras: ["猫", "女儿"] },
      { id: 4, answer: "爱", extras: ["妹妹", "孩子"] },
    ],
    "Wǒ jiā yǒu bàba, māma, jiějie hé wǒ. Wǒmen jiā ....... māo, yīnwèi māma hěn ....... māo. Wǒ jiějie hěn xiǎng yǒu yì zhī māo. Zuótiān tā zài péngyou jiā ....... le yì zhī māo, tā hěn gāoxìng. Tā shuō: “Wǒ hěn ....... zhè zhī māo!”",
    "Keluargaku ada ayah, ibu, kakak perempuan, dan saya. Keluarga kami tidak punya kucing, karena ibu sangat benci kucing. Kakak perempuanku sangat ingin punya seekor kucing. Kemarin dia menggendong seekor kucing di rumah temannya, dia sangat senang. Dia berkata: “Aku sangat mencintai kucing ini!”",
  ),
  paragraph(
    "Lengkapi paragraf tentang dua orang anak berikut!",
    [
      "我是一个妈妈。我有两个孩子，一个男孩儿，一个女孩儿。男孩儿是我的.......，女孩儿是我的.......。我很.......他们，他们的爸爸也很爱他们。我们家没有猫，因为他们很.......猫。",
    ],
    [
      { id: 1, answer: "儿子", extras: ["女儿", "爱"] },
      { id: 2, answer: "女儿", extras: ["儿子", "没有"] },
      { id: 3, answer: "爱", extras: ["哥哥", "孩子"] },
      { id: 4, answer: "讨厌", extras: ["弟弟", "妹妹"] },
    ],
    "Wǒ shì yí ge māma. Wǒ yǒu liǎng ge háizi, yí ge nánháir, yí ge nǚháir. Nánháir shì wǒ de ....... , nǚháir shì wǒ de ....... . Wǒ hěn ....... tāmen, tāmen de bàba yě hěn ài tāmen. Wǒmen jiā méiyǒu māo, yīnwèi tāmen hěn ....... māo.",
    "Saya seorang ibu. Saya punya dua anak, satu laki-laki, satu perempuan. Anak laki-laki itu putraku, anak perempuan itu putriku. Saya sangat menyayangi mereka, ayah mereka juga sangat menyayangi mereka. Keluarga kami tidak punya kucing, karena mereka sangat benci kucing.",
  ),
  paragraph(
    "Lengkapi percakapan tentang keponakan berikut!",
    [
      "A：你身边的.......个女人是你妈妈吗？B：不是，她是我姐姐。A：你姐姐有孩子吗？B：她有一个.......，他今年三岁。他很.......猫，一看到猫就哭。A：那你们家有猫吗？B：我们家.......猫。",
    ],
    [
      { id: 1, answer: "这", extras: ["有", "爱"] },
      { id: 2, answer: "儿子", extras: ["女儿", "没有"] },
      { id: 3, answer: "讨厌", extras: ["姐姐", "孩子"] },
      { id: 4, answer: "没有", extras: ["爱", "抱"] },
    ],
    "A: Nǐ shēnbiān de ....... ge nǚrén shì nǐ māma ma? B: Bú shì, tā shì wǒ jiějie. A: Nǐ jiějie yǒu háizi ma? B: Tā yǒu yí ge ....... , tā jīnnián sān suì. Tā hěn ....... māo, yí kàndào māo jiù kū. A: Nà nǐmen jiā yǒu māo ma? B: Wǒmen jiā ....... māo.",
    "A: Wanita di sampingmu ini ibumu? B: Bukan, dia kakak perempuanku. A: Apakah kakakmu punya anak? B: Dia punya seorang putra, usianya tiga tahun. Dia benci kucing, begitu melihat kucing langsung menangis. A: Lalu apakah keluargamu punya kucing? B: Keluarga kami tidak punya kucing.",
  ),
  paragraph(
    "Lengkapi paragraf tentang kakak tertua berikut!",
    [
      "我叫小红，我今年十二岁。我的弟弟十岁，我的妹妹八岁。他们都比我小，所以我是他们的.......。我弟弟很.......猫，他每天都抱猫。我妹妹很.......猫，她说猫很吵。我们都是爸爸妈妈的好.......。",
    ],
    [
      { id: 1, answer: "姐姐", extras: ["哥哥", "爱"] },
      { id: 2, answer: "爱", extras: ["妹妹", "孩子"] },
      { id: 3, answer: "讨厌", extras: ["弟弟", "女儿"] },
      { id: 4, answer: "孩子", extras: ["抱", "没有"] },
    ],
    "Wǒ jiào Xiǎohóng, wǒ jīnnián shí'èr suì. Wǒ de dìdi shí suì, wǒ de mèimei bā suì. Tāmen dōu bǐ wǒ xiǎo, suǒyǐ wǒ shì tāmen de ....... . Wǒ dìdi hěn ....... māo, tā měi tiān dōu bào māo. Wǒ mèimei hěn ....... māo, tā shuō māo hěn chǎo. Wǒmen dōu shì bàba māma de hǎo ....... .",
    "Nama saya Xiaohong, tahun ini saya berusia dua belas tahun. Adik laki-lakiku sepuluh tahun, adik perempuanku delapan tahun. Mereka berdua lebih kecil dariku, jadi saya kakak perempuan mereka. Adik laki-lakiku sangat mencintai kucing, setiap hari dia menggendong kucing. Adik perempuanku sangat benci kucing, dia bilang kucing berisik. Kami semua anak yang baik bagi ayah dan ibu.",
  ),
  paragraph(
    "Lengkapi paragraf tentang anak bungsu berikut!",
    [
      "我叫大卫，我有一个哥哥和一个姐姐。哥哥二十岁，是个.......。姐姐十八岁，是个.......。我十五岁，是家里最小的.......。我们都很.......爸爸妈妈。",
    ],
    [
      { id: 1, answer: "男人", extras: ["女人", "爱"] },
      { id: 2, answer: "女孩儿", extras: ["男孩儿", "有"] },
      { id: 3, answer: "儿子", extras: ["女儿", "没有"] },
      { id: 4, answer: "爱", extras: ["哥哥", "孩子"] },
    ],
    "Wǒ jiào Dàwèi, wǒ yǒu yí ge gēge hé yí ge jiějie. Gēge èrshí suì, shì ge ....... . Jiějie shíbā suì, shì ge ....... . Wǒ shíwǔ suì, shì jiā lǐ zuì xiǎo de ....... . Wǒmen dōu hěn ....... bàba māma.",
    "Nama saya David, saya punya seorang kakak laki-laki dan seorang kakak perempuan. Kakak laki-lakiku berusia dua puluh tahun, dia seorang pria. Kakak perempuanku berusia delapan belas tahun, dia seorang gadis. Saya berusia lima belas tahun, putra paling bungsu di rumah. Kami semua sangat menyayangi ayah dan ibu.",
  ),
  paragraph(
    "Lengkapi paragraf tentang ibu baru berikut!",
    [
      "今天孩子在家里睡觉。我是一个新妈妈，我有一个.......，她才三个月。我每天都.......她。我很.......她，孩子的爸爸也很爱她。我们家没有猫，因为爸爸.......猫。",
    ],
    [
      { id: 1, answer: "女儿", extras: ["儿子", "爱"] },
      { id: 2, answer: "抱", extras: ["猫", "哥哥"] },
      { id: 3, answer: "爱", extras: ["弟弟", "孩子"] },
      { id: 4, answer: "讨厌", extras: ["妹妹", "儿子"] },
    ],
    "Jīntiān háizi zài jiālǐ shuìjiào. Wǒ shì yí ge xīn māma, wǒ yǒu yí ge ....... , tā cái sān ge yuè. Wǒ měi tiān dōu ....... tā. Wǒ hěn ....... tā, háizi de bàba yě hěn ài tā. Wǒmen jiā méiyǒu māo, yīnwèi bàba ....... māo.",
    "Hari ini anak tidur di rumah. Saya seorang ibu baru, saya punya seorang putri, usianya baru tiga bulan. Setiap hari saya menggendongnya. Saya sangat menyayanginya, ayahnya juga sangat menyayanginya. Keluarga kami tidak punya kucing, karena ayahnya benci kucing.",
  ),
  paragraph(
    "Lengkapi paragraf tentang kamar tidur berikut!",
    [
      "我们家有三个房间。这个房间是我的，.......个房间是我弟弟的。我的房间.......猫，弟弟的房间有两只猫。我很.......猫，所以不想去弟弟的房间。弟弟问我：“你为什么不.......一下我的猫？”",
    ],
    [
      { id: 1, answer: "那", extras: ["有", "爱"] },
      { id: 2, answer: "没有", extras: ["爱", "抱"] },
      { id: 3, answer: "讨厌", extras: ["妹妹", "儿子"] },
      { id: 4, answer: "抱", extras: ["猫", "哥哥"] },
    ],
    "Wǒmen jiā yǒu sān ge fángjiān. Zhège fángjiān shì wǒ de, ....... ge fángjiān shì wǒ dìdi de. Wǒ de fángjiān ....... māo, dìdi de fángjiān yǒu liǎng zhī māo. Wǒ hěn ....... māo, suǒyǐ bù xiǎng qù dìdi de fángjiān. Dìdi wèn wǒ: “Nǐ wèishénme bù ....... yíxià wǒ de māo?”",
    "Rumah kami punya tiga kamar. Kamar ini milikku, kamar itu milik adik laki-lakiku. Kamarku tidak ada kucing, kamar adikku ada dua kucing. Saya sangat benci kucing, jadi tidak mau pergi ke kamar adikku. Adik bertanya padaku: “Kenapa kamu tidak mau menggendong kucingku sebentar?”",
  ),
  paragraph(
    "Lengkapi paragraf tentang keluarga di restoran berikut!",
    [
      "饭馆里有一家人。一个.......在看菜单，他是爸爸。一个女人在.......她的女儿，她是妈妈。他们的儿子比女儿大，他是个.......，今年五岁。他很.......妹妹和妈妈。",
    ],
    [
      { id: 1, answer: "男人", extras: ["女人", "爱"] },
      { id: 2, answer: "抱", extras: ["猫", "哥哥"] },
      { id: 3, answer: "男孩儿", extras: ["女孩儿", "有"] },
      { id: 4, answer: "爱", extras: ["弟弟", "孩子"] },
    ],
    "Fànguǎn lǐ yǒu yì jiā rén. Yí ge ....... zài kàn càidān, tā shì bàba. Yí ge nǚrén zài ....... tā de nǚ'ér, tā shì māma. Tāmen de érzi bǐ nǚ'ér dà, tā shì ge ....... , jīnnián wǔ suì. Tā hěn ....... mèimei hé māma.",
    "Di restoran ada satu keluarga. Seorang pria sedang melihat menu, dia ayah. Seorang wanita sedang menggendong putrinya, dia ibu. Putra mereka lebih tua dari putrinya, dia seorang anak laki-laki, usianya lima tahun. Dia sangat menyayangi adik perempuan dan ibunya.",
  ),
  paragraph(
    "Lengkapi paragraf tentang Xiaoming dan adiknya berikut!",
    [
      "小明家有四口人。小明是个男孩儿，他今年六岁。他.......哥哥，也没有姐姐。他有一个.......，她才一岁。小明很.......妹妹，他想.......她，但是妹妹太小了。",
    ],
    [
      { id: 1, answer: "没有", extras: ["爱", "儿子"] },
      { id: 2, answer: "妹妹", extras: ["弟弟", "没有"] },
      { id: 3, answer: "爱", extras: ["哥哥", "孩子"] },
      { id: 4, answer: "抱", extras: ["猫", "姐姐"] },
    ],
    "Xiǎomíng jiā yǒu sì kǒu rén. Xiǎomíng shì ge nánháir, tā jīnnián liù suì. Tā ....... gēge, yě méiyǒu jiějie. Tā yǒu yí ge ....... , tā cái yí suì. Xiǎomíng hěn ....... mèimei, tā xiǎng ....... tā, dànshì mèimei tài xiǎo le.",
    "Keluarga Xiaoming ada empat orang. Xiaoming seorang anak laki-laki, tahun ini dia berusia enam tahun. Dia tidak punya kakak laki-laki, juga tidak punya kakak perempuan. Dia punya seorang adik perempuan, baru berusia satu tahun. Xiaoming sangat menyayangi adiknya, dia ingin menggendongnya, tetapi adiknya terlalu kecil.",
  ),
  paragraph(
    "Lengkapi percakapan antara dua orang tua berikut!",
    [
      "A：你是做什么工作的？B：我是医生。我有两个.......，一个儿子和一个女儿。A：你们家有猫吗？B：我们家.......猫，因为我女儿和儿子都很.......猫。我们每天都.......它们。",
    ],
    [
      { id: 1, answer: "孩子", extras: ["爱", "没有"] },
      { id: 2, answer: "有", extras: ["没有", "孩子"] },
      { id: 3, answer: "爱", extras: ["哥哥", "女人"] },
      { id: 4, answer: "抱", extras: ["猫", "弟弟"] },
    ],
    "A: Nǐ shì zuò shénme gōngzuò de? B: Wǒ shì yīshēng. Wǒ yǒu liǎng ge ....... , yí ge érzi hé yí ge nǚ'ér. A: Nǐmen jiā yǒu māo ma? B: Wǒmen jiā ....... māo, yīnwèi wǒ nǚ'ér hé érzi dōu hěn ....... māo. Wǒmen měi tiān dōu ....... tāmen.",
    "A: Kamu bekerja sebagai apa? B: Saya dokter. Saya punya dua anak, satu putra dan satu putri. A: Apakah keluargamu punya kucing? B: Keluarga kami punya kucing, karena putri dan putraku sangat mencintai kucing. Setiap hari kami menggendong mereka.",
  ),
  paragraph(
    "Lengkapi paragraf tentang kakak dan adik Xiao Ma berikut!",
    [
      "我叫小马，我是个男孩儿。我哥哥很.......猫，他不让我抱猫。我妹妹很.......猫，她每天都抱猫。我们家.......猫，因为爸爸妈妈说猫很可爱。我们都是爸爸妈妈的.......。",
    ],
    [
      { id: 1, answer: "讨厌", extras: ["弟弟", "女人"] },
      { id: 2, answer: "爱", extras: ["姐姐", "儿子"] },
      { id: 3, answer: "有", extras: ["没有", "孩子"] },
      { id: 4, answer: "孩子", extras: ["爱", "没有"] },
    ],
    "Wǒ jiào Xiǎo Mǎ, wǒ shì ge nánháir. Wǒ gēge hěn ....... māo, tā bú ràng wǒ bào māo. Wǒ mèimei hěn ....... māo, tā měi tiān dōu bào māo. Wǒmen jiā ....... māo, yīnwèi bàba māma shuō māo hěn kě'ài. Wǒmen dōu shì bàba māma de ....... .",
    "Nama saya Xiao Ma, saya anak laki-laki. Kakak laki-lakiku sangat benci kucing, dia tidak membolehkan saya menggendong kucing. Adik perempuanku sangat mencintai kucing, setiap hari dia menggendong kucing. Keluarga kami punya kucing, karena ayah dan ibu bilang kucing sangat lucu. Kami semua anak ayah dan ibu.",
  ),
  paragraph(
    "Lengkapi paragraf tentang foto keluarga berikut!",
    [
      "这是我们一家人的照片。我叫小英。我爸爸是个.......，我妈妈是个.......。他们有三个孩子，我是他们的.......，我哥哥是他们的儿子。我们都很.......我们家的猫。",
    ],
    [
      { id: 1, answer: "男人", extras: ["女人", "爱"] },
      { id: 2, answer: "女人", extras: ["男人", "抱"] },
      { id: 3, answer: "女儿", extras: ["儿子", "没有"] },
      { id: 4, answer: "爱", extras: ["妹妹", "孩子"] },
    ],
    "Zhè shì wǒmen yì jiā rén de zhàopiàn. Wǒ jiào Xiǎoyīng. Wǒ bàba shì ge ....... , wǒ māma shì ge ....... . Tāmen yǒu sān ge háizi, wǒ shì tāmen de ....... , wǒ gēge shì tāmen de érzi. Wǒmen dōu hěn ....... wǒmen jiā de māo.",
    "Ini foto keluarga kami. Nama saya Xiaoying. Ayahku seorang pria, ibuku seorang wanita. Mereka punya tiga anak, saya putri mereka, kakak laki-lakiku putra mereka. Kami semua sangat mencintai kucing di rumah kami.",
  ),
];

export const u5_lessons: Lesson[] = [
  {
    id: "u5_l1",
    title: "U5 L1",
    exercises: u5_sentences,
  },
];
