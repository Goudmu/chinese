import type { Lesson } from "@/data/course";
import { paragraph, sentence } from "./helpers";

const u_sentences = [];

const u_paragraphs = [
  // 1
  paragraph(
    "Lengkapi paragraf tentang rencana besok berikut!",
    [
      "我叫小明，我是大学生。今天我有课，.......我没有课。我.......去公园爬山，你也.......吗？",
    ],
    [
      { id: 1, answer: "明天", extras: ["今天", "时间", "事"] },
      { id: 2, answer: "想", extras: ["吧", "来", "课"] },
      { id: 3, answer: "来", extras: ["吧", "课", "事"] },
    ],
    "Wǒ jiào Xiǎo Míng, wǒ shì dàxuéshēng. Jīntiān wǒ yǒu kè, ....... wǒ méiyǒu kè. Wǒ ....... qù gōngyuán páshān, nǐ yě ....... ma?",
    "Nama saya Xiao Ming, saya mahasiswa. Hari ini saya ada kelas, besok saya tidak ada kelas. Saya ingin pergi ke taman untuk mendaki, apakah kamu juga mau datang?",
  ),

  // 2
  paragraph(
    "Lengkapi percakapan tentang rencana besok berikut!",
    [
      "小红：你明天有.......吗？ 小李：有，我没有课。你想.......？ 小红：我想去超市。你也.......吧？",
    ],
    [
      { id: 1, answer: "时间", extras: ["今天", "公园", "书店"] },
      { id: 2, answer: "干什么", extras: ["公园", "书店", "超市"] },
      { id: 3, answer: "来", extras: ["公园", "事", "课"] },
    ],
    "Xiǎohóng: Nǐ míngtiān yǒu ....... ma? Xiǎo Lǐ: Yǒu, wǒ méiyǒu kè. Nǐ xiǎng .......? Xiǎohóng: Wǒ xiǎng qù chāoshì. Nǐ yě ....... ba?",
    "Xiaohong: Besok kamu ada waktu? Xiao Li: Ada, saya tidak ada kelas. Kamu ingin melakukan apa? Xiaohong: Saya ingin pergi ke supermarket. Kamu juga datanglah.",
  ),

  // 3
  paragraph(
    "Lengkapi paragraf tentang rencana hari libur berikut!",
    [
      "我是小美，我在公司上班。明天我不上班，我想在家.......。下午我想去商场.......。你明天想.......？",
    ],
    [
      { id: 1, answer: "休息", extras: ["爬山", "音乐会", "超市"] },
      { id: 2, answer: "逛", extras: ["吧", "课", "事"] },
      { id: 3, answer: "干什么", extras: ["公园", "书店", "今天"] },
    ],
    "Wǒ shì Xiǎo Měi, wǒ zài gōngsī shàngbān. Míngtiān wǒ bù shàngbān, wǒ xiǎng zài jiā ....... . Xiàwǔ wǒ xiǎng qù shāngchǎng ....... . Nǐ míngtiān xiǎng .......?",
    "Saya Xiao Mei, saya bekerja di perusahaan. Besok saya tidak bekerja, saya ingin istirahat di rumah. Siang nanti saya ingin jalan-jalan di mal. Besok kamu ingin melakukan apa?",
  ),

  // 4
  paragraph(
    "Lengkapi paragraf tentang ayah yang suka olahraga berikut!",
    [
      "我爸爸喜欢运动。明天他没有.......，他想去公园.......。我和妈妈也.......。",
    ],
    [
      { id: 1, answer: "事", extras: ["今天", "明天", "吧"] },
      { id: 2, answer: "爬山", extras: ["休息", "事", "课"] },
      { id: 3, answer: "去", extras: ["吧", "课", "事"] },
    ],
    "Wǒ bàba xǐhuan yùndòng. Míngtiān tā méiyǒu ......., tā xiǎng qù gōngyuán ....... . Wǒ hé māma yě ....... .",
    "Ayah saya suka olahraga. Besok dia tidak ada urusan, dia ingin pergi ke taman untuk mendaki. Saya dan ibu juga pergi.",
  ),

  // 5
  paragraph(
    "Lengkapi percakapan tentang konser berikut!",
    [
      "小王：你今天晚上有.......吗？ 小林：有。我喜欢音乐，我想去听.......。你也.......吧？ 小王：我也想去。",
    ],
    [
      { id: 1, answer: "时间", extras: ["公园", "超市", "书店"] },
      { id: 2, answer: "音乐会", extras: ["话剧", "超市", "公园"] },
      { id: 3, answer: "来", extras: ["事", "课", "时间"] },
    ],
    "Xiǎo Wáng: Nǐ jīntiān wǎnshang yǒu ....... ma? Xiǎo Lín: Yǒu. Wǒ xǐhuan yīnyuè, wǒ xiǎng qù tīng ....... . Nǐ yě ....... ba? Xiǎo Wáng: Wǒ yě xiǎng qù.",
    "Xiao Wang: Malam ini kamu ada waktu? Xiao Lin: Ada. Saya suka musik, saya ingin pergi mendengarkan konser. Kamu juga datang ya? Xiao Wang: Saya juga ingin pergi.",
  ),

  // 6
  paragraph(
    "Lengkapi paragraf tentang jadwal besok berikut!",
    [
      "小丽是我的朋友，她是大学生。明天上午她有.......，下午她有.......。晚上她和同学们去看.......。",
    ],
    [
      { id: 1, answer: "课", extras: ["去", "想", "吧"] },
      { id: 2, answer: "时间", extras: ["来", "去", "吧"] },
      { id: 3, answer: "话剧", extras: ["吧", "想", "干什么"] },
    ],
    "Xiǎo Lì shì wǒ de péngyou, tā shì dàxuéshēng. Míngtiān shàngwǔ tā yǒu ......., xiàwǔ tā yǒu ....... . Wǎnshang tā hé tóngxuémen qù kàn ....... .",
    "Xiao Li adalah teman saya, dia mahasiswa. Besok pagi dia ada kelas, sore dia ada waktu. Malam dia dan teman-teman sekelasnya pergi menonton drama panggung.",
  ),

  // 7
  paragraph(
    "Lengkapi paragraf tentang rekan kerja berikut!",
    [
      "我的同事们今天晚上六点下班。他们.......去.......喝酒，我不喝酒。我想去咖啡厅，你也.......吧？",
    ],
    [
      { id: 1, answer: "想", extras: ["吧", "课", "事"] },
      { id: 2, answer: "酒吧", extras: ["课", "事", "时间"] },
      { id: 3, answer: "来", extras: ["课", "事", "时间"] },
    ],
    "Wǒ de tóngshìmen jīntiān wǎnshang liù diǎn xiàbān. Tāmen ....... qù ....... hē jiǔ, wǒ bù hē jiǔ. Wǒ xiǎng qù kāfēitīng, nǐ yě ....... ba?",
    "Rekan-rekan kerja saya pulang kerja pukul enam malam ini. Mereka ingin pergi minum di bar, saya tidak minum. Saya ingin pergi ke kafe, kamu juga datang ya?",
  ),

  // 8
  paragraph(
    "Lengkapi percakapan tentang kegiatan besok berikut!",
    [
      "小张：你明天去公园.......？ 小美：我去.......。你呢？ 小张：我去书店.......。",
    ],
    [
      { id: 1, answer: "干什么", extras: ["事", "课", "吧"] },
      { id: 2, answer: "爬山", extras: ["事", "课", "吧"] },
      { id: 3, answer: "逛", extras: ["事", "课", "吧"] },
    ],
    "Xiǎo Zhāng: Nǐ míngtiān qù gōngyuán .......? Xiǎo Měi: Wǒ qù ....... . Nǐ ne? Xiǎo Zhāng: Wǒ qù shūdiàn ....... .",
    "Xiao Zhang: Besok kamu pergi ke taman untuk apa? Xiao Mei: Saya pergi mendaki. Kalau kamu? Xiao Zhang: Saya pergi jalan-jalan di toko buku.",
  ),

  // 9
  paragraph(
    "Lengkapi paragraf tentang seorang dokter berikut!",
    [
      "我是医生，我在医院上班。今天我没有.......，明天也没有。我想.......，你.......我家吧。",
    ],
    [
      { id: 1, answer: "时间", extras: ["吧", "想", "去"] },
      { id: 2, answer: "休息", extras: ["吧", "课", "今天"] },
      { id: 3, answer: "来", extras: ["课", "事", "时间"] },
    ],
    "Wǒ shì yīshēng, wǒ zài yīyuàn shàngbān. Jīntiān wǒ méiyǒu ......., míngtiān yě méiyǒu. Wǒ xiǎng ......., nǐ ....... wǒ jiā ba.",
    "Saya seorang dokter, saya bekerja di rumah sakit. Hari ini saya tidak punya waktu, besok juga tidak. Saya ingin istirahat, datanglah ke rumah saya.",
  ),

  // 10
  paragraph(
    "Lengkapi paragraf tentang rencana seorang siswa SMP berikut!",
    [
      "我叫小红，我是中学生。今天我有.......，下午四点放学。放学我想去.......，我想吃面包，喝牛奶。.......没有课，我想在家.......。",
    ],
    [
      { id: 1, answer: "课", extras: ["吧", "去", "想"] },
      { id: 2, answer: "超市", extras: ["课", "事", "吧"] },
      { id: 3, answer: "明天", extras: ["课", "事", "吧"] },
      { id: 4, answer: "休息", extras: ["吧", "今天", "课"] },
    ],
    "Wǒ jiào Xiǎohóng, wǒ shì zhōngxuéshēng. Jīntiān wǒ yǒu ......., xiàwǔ sì diǎn fàngxué. Fàngxué wǒ xiǎng qù ......., wǒ xiǎng chī miànbāo, hē niúnǎi. ....... méiyǒu kè, wǒ xiǎng zài jiā ....... .",
    "Nama saya Xiaohong, saya siswa SMP. Hari ini saya ada pelajaran, pukul empat sore pulang sekolah. Setelah pulang sekolah saya ingin pergi ke supermarket, saya ingin makan roti dan minum susu. Besok tidak ada pelajaran, saya ingin istirahat di rumah.",
  ),

  // 11
  paragraph(
    "Lengkapi paragraf tentang adik laki-laki berikut!",
    [
      "我弟弟是小学生。.......他没有课，他想去.......。我和妈妈也想去。你也.......吧？",
    ],
    [
      { id: 1, answer: "明天", extras: ["课", "事", "吧"] },
      { id: 2, answer: "公园", extras: ["课", "事", "吧"] },
      { id: 3, answer: "来", extras: ["课", "事", "时间"] },
    ],
    "Wǒ dìdi shì xiǎoxuéshēng. ....... tā méiyǒu kè, tā xiǎng qù ....... . Wǒ hé māma yě xiǎng qù. Nǐ yě ....... ba?",
    "Adik laki-laki saya murid SD. Besok dia tidak ada pelajaran, dia ingin pergi ke taman. Saya dan ibu juga ingin pergi. Kamu juga datang ya?",
  ),

  // 12
  paragraph(
    "Lengkapi paragraf tentang kegiatan Xiao Gang berikut!",
    [
      "小刚喜欢运动。.......他没有课，也没有事。上午他想去公园.......，下午想在家.......。",
    ],
    [
      { id: 1, answer: "明天", extras: ["课", "吧", "想"] },
      { id: 2, answer: "爬山", extras: ["吧", "事", "课"] },
      { id: 3, answer: "休息", extras: ["吧", "事", "课"] },
    ],
    "Xiǎo Gāng xǐhuan yùndòng. ....... tā méiyǒu kè, yě méiyǒu shì. Shàngwǔ tā xiǎng qù gōngyuán ......., xiàwǔ xiǎng zài jiā ....... .",
    "Xiao Gang suka olahraga. Besok dia tidak ada kelas dan tidak ada urusan. Pagi dia ingin pergi mendaki di taman, sore ingin istirahat di rumah.",
  ),

  // 13
  paragraph(
    "Lengkapi paragraf tentang mengajak teman ke konser berikut!",
    [
      "我有一个女朋友，她叫小英。我们都喜欢音乐。明天晚上八点，我们去听.......。你有.......吗？你也.......吧？",
    ],
    [
      { id: 1, answer: "音乐会", extras: ["超市", "公园", "书店"] },
      { id: 2, answer: "时间", extras: ["吧", "想", "去"] },
      { id: 3, answer: "来", extras: ["课", "事", "时间"] },
    ],
    "Wǒ yǒu yí ge nǚpéngyou, tā jiào Xiǎo Yīng. Wǒmen dōu xǐhuan yīnyuè. Míngtiān wǎnshang bā diǎn, wǒmen qù tīng ....... . Nǐ yǒu ....... ma? Nǐ yě ....... ba?",
    "Saya punya seorang pacar perempuan, namanya Xiao Ying. Kami sama-sama suka musik. Besok malam pukul delapan kami pergi mendengarkan konser. Kamu ada waktu? Kamu juga datang ya?",
  ),

  // 14
  paragraph(
    "Lengkapi paragraf tentang ibu yang suka ke mal berikut!",
    [
      "我妈妈喜欢.......商场。今天下午她没有.......，她.......去商场。我爸爸想在家.......。",
    ],
    [
      { id: 1, answer: "逛", extras: ["课", "事", "吧"] },
      { id: 2, answer: "事", extras: ["吧", "想", "去"] },
      { id: 3, answer: "想", extras: ["吧", "课", "事"] },
      { id: 4, answer: "休息", extras: ["吧", "课", "事"] },
    ],
    "Wǒ māma xǐhuan ....... shāngchǎng. Jīntiān xiàwǔ tā méiyǒu ......., tā ....... qù shāngchǎng. Wǒ bàba xiǎng zài jiā ....... .",
    "Ibu saya suka jalan-jalan di mal. Hari ini sore dia tidak ada urusan, dia ingin pergi ke mal. Ayah saya ingin istirahat di rumah.",
  ),

  // 15
  paragraph(
    "Lengkapi percakapan tentang mengajak teman berikut!",
    [
      "小明：明天我们去公园爬山.......？ 小红：我明天有.......，没有时间。 小明：今天呢？ 小红：今天我没有课，我们去.......吧。",
    ],
    [
      { id: 1, answer: "吧", extras: ["课", "事", "想"] },
      { id: 2, answer: "课", extras: ["吧", "想", "去"] },
      { id: 3, answer: "书店", extras: ["课", "事", "时间"] },
    ],
    "Xiǎo Míng: Míngtiān wǒmen qù gōngyuán páshān .......? Xiǎohóng: Wǒ míngtiān yǒu ......., méiyǒu shíjiān. Xiǎo Míng: Jīntiān ne? Xiǎohóng: Jīntiān wǒ méiyǒu kè, wǒmen qù ....... ba.",
    "Xiao Ming: Besok kita pergi mendaki di taman, ya? Xiaohong: Besok saya ada kelas, tidak ada waktu. Xiao Ming: Bagaimana kalau hari ini? Xiaohong: Hari ini saya tidak ada kelas, ayo kita pergi ke toko buku.",
  ),

  // 16
  paragraph(
    "Lengkapi percakapan antara guru dan murid berikut!",
    [
      "老师：明天你们没有课，你们想.......？ 学生：我们想去.......爬山，也想去.......逛逛。",
    ],
    [
      { id: 1, answer: "干什么", extras: ["课", "事", "吧"] },
      { id: 2, answer: "公园", extras: ["课", "事", "吧"] },
      { id: 3, answer: "超市", extras: ["课", "事", "吧"] },
    ],
    "Lǎoshī: Míngtiān nǐmen méiyǒu kè, nǐmen xiǎng .......? Xuésheng: Wǒmen xiǎng qù ....... páshān, yě xiǎng qù ....... guàng guàng.",
    "Guru: Besok kalian tidak ada pelajaran, kalian ingin melakukan apa? Murid: Kami ingin pergi mendaki di taman, dan juga ingin jalan-jalan ke supermarket.",
  ),

  // 17
  paragraph(
    "Lengkapi paragraf tentang tetangga berikut!",
    [
      "小王是我的邻居。明天他不上班，他想在家.......。下午他想去书店.......，晚上去听.......。",
    ],
    [
      { id: 1, answer: "休息", extras: ["吧", "课", "事"] },
      { id: 2, answer: "逛", extras: ["吧", "课", "事"] },
      { id: 3, answer: "音乐会", extras: ["超市", "公园", "书店"] },
    ],
    "Xiǎo Wáng shì wǒ de línjū. Míngtiān tā bù shàngbān, tā xiǎng zài jiā ....... . Xiàwǔ tā xiǎng qù shūdiàn ......., wǎnshang qù tīng ....... .",
    "Xiao Wang adalah tetangga saya. Besok dia tidak bekerja, dia ingin istirahat di rumah. Sore dia ingin jalan-jalan di toko buku, malam pergi mendengarkan konser.",
  ),

  // 18
  paragraph(
    "Lengkapi percakapan tentang waktu luang berikut!",
    [
      "小美：今天晚上你有.......吗？ 小李：没有，我有.......。 小美：明天你想.......？ 小李：我想去超市。",
    ],
    [
      { id: 1, answer: "时间", extras: ["去", "想", "吧"] },
      { id: 2, answer: "事", extras: ["去", "想", "吧"] },
      { id: 3, answer: "干什么", extras: ["课", "事", "吧"] },
    ],
    "Xiǎo Měi: Jīntiān wǎnshang nǐ yǒu ....... ma? Xiǎo Lǐ: Méiyǒu, wǒ yǒu ....... . Xiǎo Měi: Míngtiān nǐ xiǎng .......? Xiǎo Lǐ: Wǒ xiǎng qù chāoshì.",
    "Xiao Mei: Malam ini kamu ada waktu? Xiao Li: Tidak, saya ada urusan. Xiao Mei: Besok kamu ingin melakukan apa? Xiao Li: Saya ingin pergi ke supermarket.",
  ),

  // 19
  paragraph(
    "Lengkapi paragraf tentang pergi ke supermarket berikut!",
    [
      "我和妈妈今天下午去.......。我们要面包、鸡蛋和牛奶。明天我们.......在家.......。你也来吧？",
    ],
    [
      { id: 1, answer: "超市", extras: ["课", "事", "吧"] },
      { id: 2, answer: "想", extras: ["吧", "课", "事"] },
      { id: 3, answer: "休息", extras: ["吧", "课", "事"] },
    ],
    "Wǒ hé māma jīntiān xiàwǔ qù ....... . Wǒmen yào miànbāo, jīdàn hé niúnǎi. Míngtiān wǒmen ....... zài jiā ....... . Nǐ yě lái ba?",
    "Saya dan ibu hari ini sore pergi ke supermarket. Kami butuh roti, telur, dan susu. Besok kami ingin istirahat di rumah. Kamu juga datang ya?",
  ),

  // 20
  paragraph(
    "Lengkapi paragraf tentang tempat di sekitar rumah berikut!",
    [
      "我家前边有一个.......，我喜欢去那里逛。我家后边有一个.......，爸爸喜欢去那里爬山。.......他想去，我也想去。",
    ],
    [
      { id: 1, answer: "书店", extras: ["课", "事", "吧"] },
      { id: 2, answer: "公园", extras: ["课", "事", "吧"] },
      { id: 3, answer: "明天", extras: ["课", "事", "吧"] },
    ],
    "Wǒ jiā qiánbian yǒu yí ge ......., wǒ xǐhuan qù nàlǐ guàng. Wǒ jiā hòubian yǒu yí ge ......., bàba xǐhuan qù nàlǐ páshān. ....... tā xiǎng qù, wǒ yě xiǎng qù.",
    "Di depan rumah saya ada sebuah toko buku, saya suka pergi ke sana untuk jalan-jalan. Di belakang rumah saya ada sebuah taman, ayah suka pergi ke sana untuk mendaki. Besok dia ingin pergi, saya juga ingin pergi.",
  ),

  // 21
  paragraph(
    "Lengkapi percakapan tentang rencana malam hari berikut!",
    [
      "小马：现在是晚上七点，你在家.......？ 小红：我在看电视。 小马：我们去.......吧，我想喝酒。 小红：我不想喝酒，我想.......。",
    ],
    [
      { id: 1, answer: "干什么", extras: ["课", "事", "吧"] },
      { id: 2, answer: "酒吧", extras: ["课", "事", "时间"] },
      { id: 3, answer: "休息", extras: ["吧", "课", "事"] },
    ],
    "Xiǎo Mǎ: Xiànzài shì wǎnshang qī diǎn, nǐ zài jiā .......? Xiǎohóng: Wǒ zài kàn diànshì. Xiǎo Mǎ: Wǒmen qù ....... ba, wǒ xiǎng hē jiǔ. Xiǎohóng: Wǒ bù xiǎng hē jiǔ, wǒ xiǎng ....... .",
    "Xiao Ma: Sekarang pukul tujuh malam, kamu di rumah sedang apa? Xiaohong: Saya sedang menonton TV. Xiao Ma: Ayo kita pergi ke bar, saya ingin minum alkohol. Xiaohong: Saya tidak ingin minum alkohol, saya ingin istirahat.",
  ),

  // 22
  paragraph(
    "Lengkapi paragraf tentang keinginan Xiao Ying berikut!",
    [
      "我叫小英，我是美国人。我.......去中国，也想去日本。明天我有.......，没有.......。",
    ],
    [
      { id: 1, answer: "想", extras: ["吧", "课", "事"] },
      { id: 2, answer: "课", extras: ["吧", "想", "去"] },
      { id: 3, answer: "时间", extras: ["吧", "想", "去"] },
    ],
    "Wǒ jiào Xiǎo Yīng, wǒ shì Měiguó rén. Wǒ ....... qù Zhōngguó, yě xiǎng qù Rìběn. Míngtiān wǒ yǒu ......., méiyǒu ....... .",
    "Nama saya Xiao Ying, saya orang Amerika. Saya ingin pergi ke Tiongkok, juga ingin pergi ke Jepang. Besok saya ada kelas, tidak ada waktu.",
  ),

  // 23
  paragraph(
    "Lengkapi percakapan tentang saling mengajak berikut!",
    [
      "小李：我们去超市.......。 小红：我不想去超市，我想去.......逛逛。 小李：那我们去咖啡厅.......。",
    ],
    [
      { id: 1, answer: "吧", extras: ["课", "事", "时间"] },
      { id: 2, answer: "书店", extras: ["课", "事", "吧"] },
      { id: 3, answer: "吧", extras: ["课", "事", "时间"] },
    ],
    "Xiǎo Lǐ: Wǒmen qù chāoshì ....... . Xiǎohóng: Wǒ bù xiǎng qù chāoshì, wǒ xiǎng qù ....... guàng guàng. Xiǎo Lǐ: Nà wǒmen qù kāfēitīng ....... .",
    "Xiao Li: Ayo kita pergi ke supermarket. Xiaohong: Saya tidak ingin ke supermarket, saya ingin jalan-jalan ke toko buku. Xiao Li: Kalau begitu ayo kita pergi ke kafe.",
  ),

  // 24
  paragraph(
    "Lengkapi paragraf tentang teman-teman sekelas berikut!",
    [
      "我的同学们明天都去公园爬山。小东明天有.......，他不去。我没有.......，我.......去。",
    ],
    [
      { id: 1, answer: "课", extras: ["吧", "想", "去"] },
      { id: 2, answer: "事", extras: ["吧", "想", "来"] },
      { id: 3, answer: "想", extras: ["吧", "课", "事"] },
    ],
    "Wǒ de tóngxuémen míngtiān dōu qù gōngyuán páshān. Xiǎo Dōng míngtiān yǒu ......., tā bú qù. Wǒ méiyǒu ......., wǒ ....... qù.",
    "Teman-teman sekelas saya besok semua pergi mendaki di taman. Xiao Dong besok ada kelas, dia tidak pergi. Saya tidak ada urusan, saya ingin pergi.",
  ),

  // 25
  paragraph(
    "Lengkapi paragraf tentang musik dan drama berikut!",
    [
      "我喜欢听音乐，我想去听.......。我的同学喜欢看.......，他想去看。我们晚上都有.......，你也.......吧？",
    ],
    [
      { id: 1, answer: "音乐会", extras: ["课", "事", "吧"] },
      { id: 2, answer: "话剧", extras: ["课", "事", "吧"] },
      { id: 3, answer: "时间", extras: ["吧", "想", "去"] },
      { id: 4, answer: "来", extras: ["课", "事", "时间"] },
    ],
    "Wǒ xǐhuan tīng yīnyuè, wǒ xiǎng qù tīng ....... . Wǒ de tóngxué xǐhuan kàn ......., tā xiǎng qù kàn. Wǒmen wǎnshang dōu yǒu ......., nǐ yě ....... ba?",
    "Saya suka mendengarkan musik, saya ingin pergi mendengarkan konser. Teman sekelas saya suka menonton drama panggung, dia ingin pergi menonton. Malam hari kami semua ada waktu, kamu juga datang ya?",
  ),

  // 26
  paragraph(
    "Lengkapi percakapan tentang rencana sore ini berikut!",
    [
      "小红：你今天下午想.......？ 小明：我想去咖啡厅。你呢？ 小红：我想去.......逛逛。你也.......吧？",
    ],
    [
      { id: 1, answer: "干什么", extras: ["课", "事", "吧"] },
      { id: 2, answer: "书店", extras: ["课", "事", "吧"] },
      { id: 3, answer: "来", extras: ["课", "事", "时间"] },
    ],
    "Xiǎohóng: Nǐ jīntiān xiàwǔ xiǎng .......? Xiǎo Míng: Wǒ xiǎng qù kāfēitīng. Nǐ ne? Xiǎohóng: Wǒ xiǎng qù ....... guàng guàng. Nǐ yě ....... ba?",
    "Xiaohong: Sore ini kamu ingin melakukan apa? Xiao Ming: Saya ingin pergi ke kafe. Kalau kamu? Xiaohong: Saya ingin jalan-jalan ke toko buku. Kamu juga datang ya?",
  ),

  // 27
  paragraph(
    "Lengkapi paragraf tentang rencana Xiao Zhou berikut!",
    [
      "我是小周，我在公司上班。今天下午我没有.......，我想去.......逛逛。明天我想在家.......。",
    ],
    [
      { id: 1, answer: "事", extras: ["吧", "想", "去"] },
      { id: 2, answer: "书店", extras: ["课", "事", "吧"] },
      { id: 3, answer: "休息", extras: ["吧", "课", "事"] },
    ],
    "Wǒ shì Xiǎo Zhōu, wǒ zài gōngsī shàngbān. Jīntiān xiàwǔ wǒ méiyǒu ......., wǒ xiǎng qù ....... guàng guàng. Míngtiān wǒ xiǎng zài jiā ....... .",
    "Saya Xiao Zhou, saya bekerja di perusahaan. Sore ini saya tidak ada urusan, saya ingin jalan-jalan ke toko buku. Besok saya ingin istirahat di rumah.",
  ),

  // 28
  paragraph(
    "Lengkapi paragraf tentang rencana ayah dan ibu berikut!",
    [
      "我爸爸今天在家.......。明天晚上他想和妈妈去看.......。我明天有.......，我不去。",
    ],
    [
      { id: 1, answer: "休息", extras: ["吧", "课", "事"] },
      { id: 2, answer: "话剧", extras: ["课", "事", "吧"] },
      { id: 3, answer: "课", extras: ["吧", "想", "去"] },
    ],
    "Wǒ bàba jīntiān zài jiā ....... . Míngtiān wǎnshang tā xiǎng hé māma qù kàn ....... . Wǒ míngtiān yǒu ......., wǒ bú qù.",
    "Ayah saya hari ini istirahat di rumah. Besok malam dia ingin pergi menonton drama panggung bersama ibu. Besok saya ada kelas, saya tidak pergi.",
  ),

  // 29
  paragraph(
    "Lengkapi paragraf tentang teman yang suka minum berikut!",
    [
      "我的朋友小周喜欢喝酒。今天晚上他有.......，他想去.......。你也.......吧？",
    ],
    [
      { id: 1, answer: "时间", extras: ["吧", "想", "去"] },
      { id: 2, answer: "酒吧", extras: ["课", "事", "吧"] },
      { id: 3, answer: "来", extras: ["课", "事", "时间"] },
    ],
    "Wǒ de péngyou Xiǎo Zhōu xǐhuan hē jiǔ. Jīntiān wǎnshang tā yǒu ......., tā xiǎng qù ....... . Nǐ yě ....... ba?",
    "Teman saya Xiao Zhou suka minum alkohol. Malam ini dia ada waktu, dia ingin pergi ke bar. Kamu juga datang ya?",
  ),

  // 30
  paragraph(
    "Lengkapi percakapan tentang rencana besok berikut!",
    [
      "小明：明天你想.......？ 小红：我想去.......爬山。你呢？ 小明：我想在家.......。你也来我家.......！",
    ],
    [
      { id: 1, answer: "干什么", extras: ["课", "事", "吧"] },
      { id: 2, answer: "公园", extras: ["课", "事", "吧"] },
      { id: 3, answer: "休息", extras: ["课", "事", "吧"] },
      { id: 4, answer: "吧", extras: ["课", "事", "想"] },
    ],
    "Xiǎo Míng: Míngtiān nǐ xiǎng .......? Xiǎohóng: Wǒ xiǎng qù ....... páshān. Nǐ ne? Xiǎo Míng: Wǒ xiǎng zài jiā ....... . Nǐ yě lái wǒ jiā .......!",
    "Xiao Ming: Besok kamu ingin melakukan apa? Xiaohong: Saya ingin pergi mendaki di taman. Kalau kamu? Xiao Ming: Saya ingin istirahat di rumah. Kamu juga datanglah ke rumahku!",
  ),
];
