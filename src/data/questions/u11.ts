import type { Lesson } from "@/data/course";
import { paragraph, sentence } from "./helpers";

const u11_paragraphs = [
  // 1
  paragraph(
    "Lengkapi paragraf tentang kegiatan sehari-hari seorang pelajar berikut!",
    [
      "我叫小明，我是学生。我.......六点起床，七点吃饭。我八点.......，下午四点.......。你是学生吗？",
    ],
    [
      { id: 1, answer: "早上", extras: ["晚上", "下午", "现在"] },
      { id: 2, answer: "上学", extras: ["上班", "睡觉", "下班"] },
      { id: 3, answer: "放学", extras: ["下班", "起床", "睡觉"] },
    ],
    "Wǒ jiào Xiǎo Míng, wǒ shì xuésheng. Wǒ ....... liù diǎn qǐchuáng, qī diǎn chīfàn. Wǒ bā diǎn ......., xiàwǔ sì diǎn ....... . Nǐ shì xuésheng ma?",
    "Nama saya Xiao Ming, saya seorang pelajar. Pagi hari pukul enam saya bangun tidur, pukul tujuh makan. Pukul delapan saya berangkat sekolah, pukul empat sore pulang sekolah. Apakah kamu seorang pelajar?",
  ),

  // 2
  paragraph(
    "Lengkapi paragraf tentang kegiatan sehari-hari ayah berikut!",
    [
      "我爸爸是医生，他在医院。他早上八点.......，下午六点.......。晚上七.......吃饭，十点.......。",
    ],
    [
      { id: 1, answer: "上班", extras: ["上学", "上课", "起床"] },
      { id: 2, answer: "下班", extras: ["放学", "下课", "睡觉"] },
      { id: 3, answer: "点", extras: ["分", "岁", "个"] },
      { id: 4, answer: "睡觉", extras: ["起床", "上班", "放学"] },
    ],
    "Wǒ bàba shì yīshēng, tā zài yīyuàn. Tā zǎoshang bā diǎn ......., xiàwǔ liù diǎn ....... . Wǎnshang qī ....... chīfàn, shí diǎn ....... .",
    "Ayah saya seorang dokter, dia ada di rumah sakit. Pukul delapan pagi dia mulai bekerja, pukul enam sore dia pulang kerja. Pukul tujuh malam dia makan, pukul sepuluh dia tidur.",
  ),

  // 3
  paragraph(
    "Lengkapi paragraf tentang ibu yang seorang guru berikut!",
    [
      "我妈妈是老师。她.......六点起床，上午八点.......，下午四点.......。她晚上十点.......。",
    ],
    [
      { id: 1, answer: "早上", extras: ["晚上", "下午", "现在"] },
      { id: 2, answer: "上课", extras: ["上学", "放学", "下班"] },
      { id: 3, answer: "下课", extras: ["起床", "睡觉", "上学"] },
      { id: 4, answer: "睡觉", extras: ["上课", "上班", "放学"] },
    ],
    "Wǒ māma shì lǎoshī. Tā ....... liù diǎn qǐchuáng, shàngwǔ bā diǎn ......., xiàwǔ sì diǎn ....... . Tā wǎnshang shí diǎn ....... .",
    "Ibu saya seorang guru. Pagi hari pukul enam dia bangun tidur, pukul delapan pagi mulai mengajar, pukul empat sore pelajaran selesai. Pukul sepuluh malam dia tidur.",
  ),

  // 4
  paragraph(
    "Lengkapi percakapan tentang menanyakan waktu berikut!",
    [
      "小明：.......几点？ 小红：现在八点十.......。 小明：你几点.......？ 小红：我九点上课。",
    ],
    [
      { id: 1, answer: "现在", extras: ["起床", "吃饭", "睡觉"] },
      { id: 2, answer: "分", extras: ["点", "岁", "块"] },
      { id: 3, answer: "上课", extras: ["放学", "下班", "睡觉"] },
    ],
    "Xiǎo Míng: ....... jǐ diǎn? Xiǎohóng: Xiànzài bā diǎn shí ....... . Xiǎo Míng: Nǐ jǐ diǎn .......? Xiǎohóng: Wǒ jiǔ diǎn shàngkè.",
    "Xiao Ming: Sekarang jam berapa? Xiaohong: Sekarang pukul delapan lewat sepuluh menit. Xiao Ming: Kamu masuk kelas pukul berapa? Xiaohong: Saya masuk kelas pukul sembilan.",
  ),

  // 5
  paragraph(
    "Lengkapi paragraf tentang adik laki-laki berikut!",
    [
      "我有一个弟弟，他是小学生。他早上七点.......，八点.......。他下午三点.......，晚上九点.......。",
    ],
    [
      { id: 1, answer: "起床", extras: ["上班", "下班", "下课"] },
      { id: 2, answer: "上学", extras: ["起床", "睡觉", "下班"] },
      { id: 3, answer: "放学", extras: ["上班", "起床", "吃饭"] },
      { id: 4, answer: "睡觉", extras: ["上课", "上班", "上学"] },
    ],
    "Wǒ yǒu yí ge dìdi, tā shì xiǎoxuéshēng. Tā zǎoshang qī diǎn ......., bā diǎn ....... . Tā xiàwǔ sān diǎn ......., wǎnshang jiǔ diǎn ....... .",
    "Saya punya seorang adik laki-laki, dia murid SD. Pagi pukul tujuh dia bangun, pukul delapan berangkat sekolah. Pukul tiga sore dia pulang sekolah, pukul sembilan malam tidur.",
  ),

  // 6
  paragraph(
    "Lengkapi paragraf tentang kakak perempuan berikut!",
    [
      "我姐姐在公司。她上午九点.......，下午五点.......。.......是下午四点，她在公司。你的姐姐呢？",
    ],
    [
      { id: 1, answer: "上班", extras: ["上学", "放学", "起床"] },
      { id: 2, answer: "下班", extras: ["放学", "下课", "睡觉"] },
      { id: 3, answer: "现在", extras: ["晚上", "早上", "上午"] },
    ],
    "Wǒ jiějie zài gōngsī. Tā shàngwǔ jiǔ diǎn ......., xiàwǔ wǔ diǎn ....... . ....... shì xiàwǔ sì diǎn, tā zài gōngsī. Nǐ de jiějie ne?",
    "Kakak perempuan saya ada di kantor. Pukul sembilan pagi dia mulai bekerja, pukul lima sore pulang kerja. Sekarang pukul empat sore, dia ada di kantor. Bagaimana dengan kakak perempuanmu?",
  ),

  // 7
  paragraph(
    "Lengkapi paragraf tentang rekan kerja berikut!",
    [
      "我的同事叫小王。他早上八.......起床，九点.......，下午六点.......。他晚上十一点.......。",
    ],
    [
      { id: 1, answer: "点", extras: ["分", "岁", "块"] },
      { id: 2, answer: "上班", extras: ["上学", "上课", "放学"] },
      { id: 3, answer: "下班", extras: ["放学", "下课", "上学"] },
      { id: 4, answer: "睡觉", extras: ["上课", "上学", "放学"] },
    ],
    "Wǒ de tóngshì jiào Xiǎo Wáng. Tā zǎoshang bā ....... qǐchuáng, jiǔ diǎn ......., xiàwǔ liù diǎn ....... . Tā wǎnshang shíyī diǎn ....... .",
    "Rekan kerja saya bernama Xiao Wang. Pagi pukul delapan dia bangun, pukul sembilan mulai bekerja, pukul enam sore pulang kerja. Pukul sebelas malam dia tidur.",
  ),

  // 8
  paragraph(
    "Lengkapi paragraf tentang kegiatan di sekolah berikut!",
    [
      "我和我的同学都在学校。我们上午八点.......，十二点.......，下午四点.......。",
    ],
    [
      { id: 1, answer: "上课", extras: ["起床", "睡觉", "下班"] },
      { id: 2, answer: "吃饭", extras: ["起床", "睡觉", "上班"] },
      { id: 3, answer: "放学", extras: ["起床", "睡觉", "下班"] },
    ],
    "Wǒ hé wǒ de tóngxué dōu zài xuéxiào. Wǒmen shàngwǔ bā diǎn ......., shí'èr diǎn ......., xiàwǔ sì diǎn ....... .",
    "Saya dan teman-teman sekelas saya semuanya ada di sekolah. Pukul delapan pagi kami masuk kelas, pukul dua belas makan, pukul empat sore pulang sekolah.",
  ),

  // 9
  paragraph(
    "Lengkapi paragraf tentang seorang mahasiswi berikut!",
    [
      "你好！我叫小丽，我是大学生。我.......八点起床，九点.......。我下午五点.......，晚上十一点.......。",
    ],
    [
      { id: 1, answer: "早上", extras: ["晚上", "下午", "现在"] },
      { id: 2, answer: "上课", extras: ["上班", "放学", "睡觉"] },
      { id: 3, answer: "下课", extras: ["上班", "起床", "睡觉"] },
      { id: 4, answer: "睡觉", extras: ["上课", "下课", "起床"] },
    ],
    "Nǐ hǎo! Wǒ jiào Xiǎo Lì, wǒ shì dàxuéshēng. Wǒ ....... bā diǎn qǐchuáng, jiǔ diǎn ....... . Wǒ xiàwǔ wǔ diǎn ......., wǎnshang shíyī diǎn ....... .",
    "Halo! Nama saya Xiao Li, saya seorang mahasiswi. Pukul delapan pagi saya bangun, pukul sembilan masuk kuliah. Pukul lima sore kuliah selesai, pukul sebelas malam saya tidur.",
  ),

  // 10
  paragraph(
    "Lengkapi percakapan tentang jam bangun dan jam tidur berikut!",
    [
      "小白：你几.......起床？ 小黄：我六点.......。 小白：你晚上几点.......？ 小黄：我十点睡觉。",
    ],
    [
      { id: 1, answer: "点", extras: ["分", "岁", "块"] },
      { id: 2, answer: "起床", extras: ["上班", "上学", "下班"] },
      { id: 3, answer: "睡觉", extras: ["上班", "上课", "放学"] },
    ],
    "Xiǎo Bái: Nǐ jǐ ....... qǐchuáng? Xiǎo Huáng: Wǒ liù diǎn ....... . Xiǎo Bái: Nǐ wǎnshang jǐ diǎn .......? Xiǎo Huáng: Wǒ shí diǎn shuìjiào.",
    "Xiao Bai: Kamu bangun pukul berapa? Xiao Huang: Saya bangun pukul enam. Xiao Bai: Malam hari kamu tidur pukul berapa? Xiao Huang: Saya tidur pukul sepuluh.",
  ),

  // 11
  paragraph(
    "Lengkapi percakapan antara guru dan murid berikut!",
    [
      "老师：.......几点？ 学生：现在上午十点。 老师：你们几点.......？ 学生：我们十二.......下课。",
    ],
    [
      { id: 1, answer: "现在", extras: ["起床", "吃饭", "睡觉"] },
      { id: 2, answer: "下课", extras: ["上班", "起床", "睡觉"] },
      { id: 3, answer: "点", extras: ["分", "岁", "块"] },
    ],
    "Lǎoshī: ....... jǐ diǎn? Xuésheng: Xiànzài shàngwǔ shí diǎn. Lǎoshī: Nǐmen jǐ diǎn .......? Xuésheng: Wǒmen shí'èr ....... xiàkè.",
    "Guru: Sekarang jam berapa? Murid: Sekarang pukul sepuluh pagi. Guru: Kalian selesai pelajaran pukul berapa? Murid: Kami selesai pelajaran pukul dua belas.",
  ),

  // 12
  paragraph(
    "Lengkapi paragraf tentang seorang teman siswa SMP berikut!",
    [
      "我的朋友叫小李，他是中学生。他早上六点二十.......起床，七点四十分.......。他下午四点.......。",
    ],
    [
      { id: 1, answer: "分", extras: ["点", "块", "岁"] },
      { id: 2, answer: "上学", extras: ["上班", "睡觉", "吃饭"] },
      { id: 3, answer: "放学", extras: ["上班", "睡觉", "下班"] },
    ],
    "Wǒ de péngyou jiào Xiǎo Lǐ, tā shì zhōngxuéshēng. Tā zǎoshang liù diǎn èrshí ....... qǐchuáng, qī diǎn sìshí fēn ....... . Tā xiàwǔ sì diǎn ....... .",
    "Teman saya bernama Xiao Li, dia siswa SMP. Pagi hari pukul enam lewat dua puluh menit dia bangun, pukul tujuh empat puluh dia berangkat sekolah. Pukul empat sore dia pulang sekolah.",
  ),

  // 13
  paragraph(
    "Lengkapi paragraf tentang keluarga berikut!",
    [
      "我有爸爸、妈妈和妹妹。爸爸下午五点五十分.......，我们晚上六点三十.......吃饭。.......是晚上六点，爸爸在家。",
    ],
    [
      { id: 1, answer: "下班", extras: ["放学", "下课", "睡觉"] },
      { id: 2, answer: "分", extras: ["点", "岁", "块"] },
      { id: 3, answer: "现在", extras: ["早上", "上午", "下午"] },
    ],
    "Wǒ yǒu bàba, māma hé mèimei. Bàba xiàwǔ wǔ diǎn wǔshí fēn ......., wǒmen wǎnshang liù diǎn sānshí ....... chīfàn. ....... shì wǎnshang liù diǎn, bàba zài jiā.",
    "Saya punya ayah, ibu, dan adik perempuan. Ayah pulang kerja pukul lima lewat lima puluh menit sore, kami makan malam pukul enam lewat tiga puluh menit. Sekarang pukul enam malam, ayah ada di rumah.",
  ),

  // 14
  paragraph(
    "Lengkapi percakapan tentang jam pulang kerja berikut!",
    [
      "小张：.......几点？ 小美：现在下午三.......。你几点.......？ 小张：我五点下班。你呢？ 小美：我也五点下班。",
    ],
    [
      { id: 1, answer: "现在", extras: ["早上", "上午", "晚上"] },
      { id: 2, answer: "点", extras: ["分", "岁", "块"] },
      { id: 3, answer: "下班", extras: ["上班", "放学", "睡觉"] },
    ],
    "Xiǎo Zhāng: ....... jǐ diǎn? Xiǎo Měi: Xiànzài xiàwǔ sān ....... . Nǐ jǐ diǎn .......? Xiǎo Zhāng: Wǒ wǔ diǎn xiàbān. Nǐ ne? Xiǎo Měi: Wǒ yě wǔ diǎn xiàbān.",
    "Xiao Zhang: Sekarang jam berapa? Xiao Mei: Sekarang pukul tiga sore. Kamu pulang kerja pukul berapa? Xiao Zhang: Saya pulang kerja pukul lima. Kalau kamu? Xiao Mei: Saya juga pulang kerja pukul lima.",
  ),

  // 15
  paragraph(
    "Lengkapi paragraf tentang seorang penyuka kopi berikut!",
    [
      "我是小刚，我喜欢喝咖啡。我.......七点起床，喝一杯咖啡。我.......九点上班，下午六点.......。",
    ],
    [
      { id: 1, answer: "早上", extras: ["晚上", "下午", "现在"] },
      { id: 2, answer: "上午", extras: ["晚上", "下午", "现在"] },
      { id: 3, answer: "下班", extras: ["放学", "下课", "睡觉"] },
    ],
    "Wǒ shì Xiǎo Gāng, wǒ xǐhuan hē kāfēi. Wǒ ....... qī diǎn qǐchuáng, hē yì bēi kāfēi. Wǒ ....... jiǔ diǎn shàngbān, xiàwǔ liù diǎn ....... .",
    "Saya Xiao Gang, saya suka minum kopi. Pagi hari pukul tujuh saya bangun dan minum secangkir kopi. Pukul sembilan pagi saya mulai bekerja, pukul enam sore pulang kerja.",
  ),

  // 16
  paragraph(
    "Lengkapi paragraf tentang sarapan roti berikut!",
    [
      "我是学生，我喜欢吃面包。我.......六点五十分起床，七点吃面包，七点二十.......上学。晚上十点我.......。",
    ],
    [
      { id: 1, answer: "早上", extras: ["晚上", "下午", "现在"] },
      { id: 2, answer: "分", extras: ["点", "岁", "块"] },
      { id: 3, answer: "睡觉", extras: ["上课", "上学", "放学"] },
    ],
    "Wǒ shì xuésheng, wǒ xǐhuan chī miànbāo. Wǒ ....... liù diǎn wǔshí fēn qǐchuáng, qī diǎn chī miànbāo, qī diǎn èrshí ....... shàngxué. Wǎnshang shí diǎn wǒ ....... .",
    "Saya pelajar, saya suka makan roti. Pagi hari pukul enam lewat lima puluh menit saya bangun, pukul tujuh makan roti, pukul tujuh lewat dua puluh menit berangkat sekolah. Pukul sepuluh malam saya tidur.",
  ),

  // 17
  paragraph(
    "Lengkapi percakapan tentang jam sekolah berikut!",
    [
      "小红：你们几.......上课？ 小明：我们上午八点.......。 小红：你们几点放学？ 小明：我们下午四点.......。",
    ],
    [
      { id: 1, answer: "点", extras: ["分", "岁", "块"] },
      { id: 2, answer: "上课", extras: ["放学", "下班", "睡觉"] },
      { id: 3, answer: "放学", extras: ["上课", "上班", "起床"] },
    ],
    "Xiǎohóng: Nǐmen jǐ ....... shàngkè? Xiǎo Míng: Wǒmen shàngwǔ bā diǎn ....... . Xiǎohóng: Nǐmen jǐ diǎn fàngxué? Xiǎo Míng: Wǒmen xiàwǔ sì diǎn ....... .",
    "Xiaohong: Kalian masuk kelas pukul berapa? Xiao Ming: Kami masuk kelas pukul delapan pagi. Xiaohong: Kalian pulang sekolah pukul berapa? Xiao Ming: Kami pulang sekolah pukul empat sore.",
  ),

  // 18
  paragraph(
    "Lengkapi paragraf tentang jam di sekolah berikut!",
    [
      "现在是.......两点，我的同学们在学校。他们下午一点.......，三点五十分.......，四点放学。",
    ],
    [
      { id: 1, answer: "下午", extras: ["早上", "晚上", "上午"] },
      { id: 2, answer: "上课", extras: ["放学", "睡觉", "上班"] },
      { id: 3, answer: "下课", extras: ["起床", "睡觉", "下班"] },
    ],
    "Xiànzài shì ....... liǎng diǎn, wǒ de tóngxuémen zài xuéxiào. Tāmen xiàwǔ yī diǎn ......., sān diǎn wǔshí fēn ......., sì diǎn fàngxué.",
    "Sekarang pukul dua siang, teman-teman sekelas saya ada di sekolah. Mereka masuk kelas pukul satu siang, pelajaran selesai pukul tiga lewat lima puluh menit, pukul empat pulang sekolah.",
  ),

  // 19
  paragraph(
    "Lengkapi paragraf tentang seorang dokter berikut!",
    [
      "我是医生，我在医院。我上午九点上班，晚上八.......下班。.......是晚上十点，我在家。我十一点.......。",
    ],
    [
      { id: 1, answer: "点", extras: ["分", "岁", "块"] },
      { id: 2, answer: "现在", extras: ["早上", "上午", "下午"] },
      { id: 3, answer: "睡觉", extras: ["上班", "下班", "上学"] },
    ],
    "Wǒ shì yīshēng, wǒ zài yīyuàn. Wǒ shàngwǔ jiǔ diǎn shàngbān, wǎnshang bā ....... xiàbān. ....... shì wǎnshang shí diǎn, wǒ zài jiā. Wǒ shíyī diǎn ....... .",
    "Saya seorang dokter, saya ada di rumah sakit. Pukul sembilan pagi saya mulai bekerja, pukul delapan malam pulang kerja. Sekarang pukul sepuluh malam, saya ada di rumah. Pukul sebelas saya tidur.",
  ),

  // 20
  paragraph(
    "Lengkapi paragraf tentang seorang teman dari Tiongkok berikut!",
    [
      "小李是我的同学，他是中国人。他喜欢吃米饭。他十二点.......，下午一点.......。他晚上十点.......。",
    ],
    [
      { id: 1, answer: "吃饭", extras: ["起床", "上班", "放学"] },
      { id: 2, answer: "上课", extras: ["起床", "睡觉", "下班"] },
      { id: 3, answer: "睡觉", extras: ["上课", "上学", "放学"] },
    ],
    "Xiǎo Lǐ shì wǒ de tóngxué, tā shì Zhōngguó rén. Tā xǐhuan chī mǐfàn. Tā shí'èr diǎn ......., xiàwǔ yī diǎn ....... . Tā wǎnshang shí diǎn ....... .",
    "Xiao Li adalah teman sekelas saya, dia orang Tiongkok. Dia suka makan nasi. Pukul dua belas dia makan, pukul satu siang masuk kelas. Pukul sepuluh malam dia tidur.",
  ),

  // 21
  paragraph(
    "Lengkapi paragraf tentang jam tangan berikut!",
    [
      "我有一个手表，很好看。.......是上午十点二十分。我十点五十分.......，十一点.......。",
    ],
    [
      { id: 1, answer: "现在", extras: ["早上", "晚上", "下午"] },
      { id: 2, answer: "下课", extras: ["起床", "睡觉", "下班"] },
      { id: 3, answer: "上课", extras: ["起床", "睡觉", "下班"] },
    ],
    "Wǒ yǒu yí ge shǒubiǎo, hěn hǎokàn. ....... shì shàngwǔ shí diǎn èrshí fēn. Wǒ shí diǎn wǔshí fēn ......., shíyī diǎn ....... .",
    "Saya punya sebuah jam tangan, bagus sekali. Sekarang pukul sepuluh lewat dua puluh menit pagi. Pukul sepuluh lewat lima puluh menit pelajaran selesai, pukul sebelas masuk kelas.",
  ),

  // 22
  paragraph(
    "Lengkapi paragraf tentang kegiatan menonton TV berikut!",
    [
      "我是小周，我喜欢看电视。我下午六点.......，晚上七点吃饭。.......是晚上九点，我在看电视。我十点.......。",
    ],
    [
      { id: 1, answer: "下班", extras: ["上学", "上课", "起床"] },
      { id: 2, answer: "现在", extras: ["早上", "上午", "下午"] },
      { id: 3, answer: "睡觉", extras: ["上班", "上课", "放学"] },
    ],
    "Wǒ shì Xiǎo Zhōu, wǒ xǐhuan kàn diànshì. Wǒ xiàwǔ liù diǎn ......., wǎnshang qī diǎn chīfàn. ....... shì wǎnshang jiǔ diǎn, wǒ zài kàn diànshì. Wǒ shí diǎn ....... .",
    "Saya Xiao Zhou, saya suka menonton TV. Pukul enam sore saya pulang kerja, pukul tujuh malam makan. Sekarang pukul sembilan malam, saya sedang menonton TV. Pukul sepuluh saya tidur.",
  ),

  // 23
  paragraph(
    "Lengkapi paragraf tentang olahraga pagi berikut!",
    [
      "我喜欢运动。我.......六点起床，六点十.......打球，七点.......。晚上十点睡觉。",
    ],
    [
      { id: 1, answer: "早上", extras: ["晚上", "下午", "现在"] },
      { id: 2, answer: "分", extras: ["点", "岁", "块"] },
      { id: 3, answer: "吃饭", extras: ["睡觉", "下班", "放学"] },
    ],
    "Wǒ xǐhuan yùndòng. Wǒ ....... liù diǎn qǐchuáng, liù diǎn shí ....... dǎqiú, qī diǎn ....... . Wǎnshang shí diǎn shuìjiào.",
    "Saya suka berolahraga. Pagi hari pukul enam saya bangun, pukul enam lewat sepuluh menit main bola, pukul tujuh makan. Pukul sepuluh malam tidur.",
  ),

  // 24
  paragraph(
    "Lengkapi paragraf tentang seorang bos berikut!",
    [
      "我的老板是美国人。他早上九点.......，下午六点.......。.......是下午五点五十分，他在公司。我们都喜欢他。",
    ],
    [
      { id: 1, answer: "上班", extras: ["上学", "起床", "放学"] },
      { id: 2, answer: "下班", extras: ["放学", "睡觉", "下课"] },
      { id: 3, answer: "现在", extras: ["早上", "上午", "晚上"] },
    ],
    "Wǒ de lǎobǎn shì Měiguó rén. Tā zǎoshang jiǔ diǎn ......., xiàwǔ liù diǎn ....... . ....... shì xiàwǔ wǔ diǎn wǔshí fēn, tā zài gōngsī. Wǒmen dōu xǐhuan tā.",
    "Bos saya orang Amerika. Pagi pukul sembilan dia mulai bekerja, pukul enam sore pulang kerja. Sekarang pukul lima lewat lima puluh menit sore, dia ada di kantor. Kami semua menyukainya.",
  ),

  // 25
  paragraph(
    "Lengkapi paragraf tentang tetangga berikut!",
    [
      "我的邻居叫小陈，他是大学生。他早上八点.......，上午十点.......，下午五点.......。他晚上十二点.......。",
    ],
    [
      { id: 1, answer: "上课", extras: ["起床", "睡觉", "上班"] },
      { id: 2, answer: "下课", extras: ["起床", "上班", "睡觉"] },
      { id: 3, answer: "吃饭", extras: ["起床", "上班", "睡觉"] },
      { id: 4, answer: "睡觉", extras: ["上课", "吃饭", "下课"] },
    ],
    "Wǒ de línjū jiào Xiǎo Chén, tā shì dàxuéshēng. Tā zǎoshang bā diǎn ......., shàngwǔ shí diǎn ......., xiàwǔ wǔ diǎn ....... . Tā wǎnshang shí'èr diǎn ....... .",
    "Tetangga saya bernama Xiao Chen, dia seorang mahasiswa. Pukul delapan pagi dia masuk kuliah, pukul sepuluh pagi kuliah selesai, pukul lima sore dia makan. Pukul dua belas malam dia tidur.",
  ),

  // 26
  paragraph(
    "Lengkapi paragraf tentang teman internet berikut!",
    [
      "我有一个网友，他是日本人。他在公司。他早上六点.......，上午九点.......，晚上十点.......。你的网友呢？",
    ],
    [
      { id: 1, answer: "起床", extras: ["睡觉", "下班", "放学"] },
      { id: 2, answer: "上班", extras: ["上学", "放学", "起床"] },
      { id: 3, answer: "睡觉", extras: ["上班", "上学", "下班"] },
    ],
    "Wǒ yǒu yí ge wǎngyǒu, tā shì Rìběn rén. Tā zài gōngsī. Tā zǎoshang liù diǎn ......., shàngwǔ jiǔ diǎn ......., wǎnshang shí diǎn ....... . Nǐ de wǎngyǒu ne?",
    "Saya punya seorang teman internet, dia orang Jepang. Dia ada di perusahaan. Pagi pukul enam dia bangun, pukul sembilan pagi mulai bekerja, pukul sepuluh malam tidur. Bagaimana dengan teman internetmu?",
  ),

  // 27
  paragraph(
    "Lengkapi paragraf tentang anak laki-laki berikut!",
    [
      "我有一个儿子，他是小学生。他早上七点.......，七点二十.......吃饭，七点五十分.......。",
    ],
    [
      { id: 1, answer: "起床", extras: ["睡觉", "上班", "下班"] },
      { id: 2, answer: "分", extras: ["点", "岁", "块"] },
      { id: 3, answer: "上学", extras: ["上班", "下班", "睡觉"] },
    ],
    "Wǒ yǒu yí ge érzi, tā shì xiǎoxuéshēng. Tā zǎoshang qī diǎn ......., qī diǎn èrshí ....... chīfàn, qī diǎn wǔshí fēn ....... .",
    "Saya punya seorang anak laki-laki, dia murid SD. Pagi pukul tujuh dia bangun, pukul tujuh lewat dua puluh menit dia makan, pukul tujuh lima puluh dia berangkat sekolah.",
  ),

  // 28
  paragraph(
    "Lengkapi paragraf tentang anak perempuan berikut!",
    [
      "我有一个女儿，她三岁。她.......七点起床，晚上六点三十.......吃饭，八点.......。",
    ],
    [
      { id: 1, answer: "早上", extras: ["晚上", "下午", "现在"] },
      { id: 2, answer: "分", extras: ["点", "岁", "块"] },
      { id: 3, answer: "睡觉", extras: ["上学", "上班", "放学"] },
    ],
    "Wǒ yǒu yí ge nǚ'ér, tā sān suì. Tā ....... qī diǎn qǐchuáng, wǎnshang liù diǎn sānshí ....... chīfàn, bā diǎn ....... .",
    "Saya punya seorang anak perempuan, dia berusia tiga tahun. Pagi pukul tujuh dia bangun, pukul enam lewat tiga puluh menit malam dia makan, pukul delapan tidur.",
  ),

  // 29
  paragraph(
    "Lengkapi paragraf tentang kegiatan Xiao Hua berikut!",
    [
      "我是小华，我是大学生。上午十点我在学校，我在.......。下午五点我在咖啡厅，我在.......。.......九点我在家，我在看电视。",
    ],
    [
      { id: 1, answer: "上课", extras: ["起床", "睡觉", "上班"] },
      { id: 2, answer: "吃饭", extras: ["上班", "睡觉", "起床"] },
      { id: 3, answer: "晚上", extras: ["早上", "上午", "下午"] },
    ],
    "Wǒ shì Xiǎo Huá, wǒ shì dàxuéshēng. Shàngwǔ shí diǎn wǒ zài xuéxiào, wǒ zài ....... . Xiàwǔ wǔ diǎn wǒ zài kāfēitīng, wǒ zài ....... . ....... jiǔ diǎn wǒ zài jiā, wǒ zài kàn diànshì.",
    "Saya Xiao Hua, saya seorang mahasiswa. Pukul sepuluh pagi saya ada di kampus, saya sedang kuliah. Pukul lima sore saya ada di kafe, saya sedang makan. Pukul sembilan malam saya ada di rumah, saya sedang menonton TV.",
  ),

  // 30
  paragraph(
    "Lengkapi paragraf tentang seorang siswa SMP berikut!",
    [
      "你好！我叫小东，我是中学生。.......是晚上十点，我要.......。我早上六点起床，七点五十分.......。你呢？",
    ],
    [
      { id: 1, answer: "现在", extras: ["早上", "上午", "下午"] },
      { id: 2, answer: "睡觉", extras: ["上学", "放学", "上课"] },
      { id: 3, answer: "上学", extras: ["放学", "睡觉", "下班"] },
    ],
    "Nǐ hǎo! Wǒ jiào Xiǎo Dōng, wǒ shì zhōngxuéshēng. ....... shì wǎnshang shí diǎn, wǒ yào ....... . Wǒ zǎoshang liù diǎn qǐchuáng, qī diǎn wǔshí fēn ....... . Nǐ ne?",
    "Halo! Nama saya Xiao Dong, saya siswa SMP. Sekarang pukul sepuluh malam, saya mau tidur. Pagi pukul enam saya bangun, pukul tujuh lima puluh saya berangkat sekolah. Bagaimana denganmu?",
  ),
];

const u11_sentences = [
  sentence("Sekarang jam satu.", ["现在", "一", "点"], ["分", "两", "不"]),
  sentence("Sekarang jam dua.", ["现在", "两", "点"], ["一", "分", "是"]),
  sentence(
    "Sekarang jam tiga lewat lima menit.",
    ["现在", "三", "点", "五", "分"],
    ["四", "几", "吗"],
  ),
  sentence("Sekarang jam sepuluh.", ["现在", "十", "点"], ["九", "分", "不"]),
  sentence("Sekarang jam berapa?", ["现在", "几", "点"], ["分", "吗", "什么"]),
  sentence(
    "Apakah sekarang jam lima?",
    ["现在", "是", "五", "点", "吗"],
    ["六", "分", "不"],
  ),
  sentence(
    "Sekarang bukan jam delapan.",
    ["现在", "不", "是", "八", "点"],
    ["七", "分", "吗"],
  ),
  sentence(
    "Sekarang jam enam lewat sepuluh menit.",
    ["现在", "六", "点", "十", "分"],
    ["七", "几", "吗"],
  ),
  sentence(
    "Saya bangun tidur jam enam.",
    ["我", "六", "点", "起床"],
    ["睡觉", "七", "不"],
  ),
  sentence(
    "Dia (laki-laki) bangun tidur jam tujuh.",
    ["他", "七", "点", "起床"],
    ["她", "睡觉", "八"],
  ),
  sentence(
    "Dia (perempuan) tidur jam sepuluh.",
    ["她", "十", "点", "睡觉"],
    ["他", "起床", "九"],
  ),
  sentence(
    "Kamu bangun tidur jam berapa?",
    ["你", "几", "点", "起床"],
    ["睡觉", "吗", "什么"],
  ),
  sentence(
    "Kamu tidur jam berapa?",
    ["你", "几", "点", "睡觉"],
    ["起床", "吗", "多少"],
  ),
  sentence(
    "Saya berangkat kerja jam delapan.",
    ["我", "八", "点", "上班"],
    ["下班", "九", "不"],
  ),
  sentence(
    "Ayah saya pulang kerja jam enam.",
    [
      ["我", "爸爸", "六", "点", "下班"],
      ["我", "的", "爸爸", "六", "点", "下班"],
    ],
    ["上班", "五", "不"],
  ),
  sentence(
    "Ibu saya berangkat kerja jam tujuh.",
    [
      ["我", "妈妈", "七", "点", "上班"],
      ["我", "的", "妈妈", "七", "点", "上班"],
    ],
    ["下班", "八", "不"],
  ),
  sentence(
    "Kamu pulang kerja jam berapa?",
    ["你", "几", "点", "下班"],
    ["上班", "吗", "什么"],
  ),
  sentence(
    "Saya berangkat sekolah jam tujuh.",
    ["我", "七", "点", "上学"],
    ["放学", "八", "不"],
  ),
  sentence(
    "Adik laki-laki saya pulang sekolah jam empat.",
    [
      ["我", "弟弟", "四", "点", "放学"],
      ["我", "的", "弟弟", "四", "点", "放学"],
    ],
    ["上学", "三", "不"],
  ),
  sentence(
    "Adik perempuan saya berangkat sekolah jam tujuh.",
    [
      ["我", "妹妹", "七", "点", "上学"],
      ["我", "的", "妹妹", "七", "点", "上学"],
    ],
    ["放学", "六", "不"],
  ),
  sentence(
    "Kamu pulang sekolah jam berapa?",
    ["你", "几", "点", "放学"],
    ["上学", "吗", "什么"],
  ),
  sentence(
    "Saya makan jam dua belas.",
    ["我", "十", "二", "点", "吃饭"],
    ["睡觉", "一", "不"],
  ),
  sentence(
    "Dia (laki-laki) makan jam berapa?",
    ["他", "几", "点", "吃饭"],
    ["她", "起床", "吗"],
  ),
  sentence(
    "Kami makan jam enam.",
    ["我们", "六", "点", "吃饭"],
    ["他们", "七", "不"],
  ),
  sentence(
    "Saya sarapan pagi jam tujuh.",
    ["我", "早上", "七", "点", "吃饭"],
    ["晚上", "八", "不"],
  ),
  sentence(
    "Saya tidur malam jam sepuluh.",
    ["我", "晚上", "十", "点", "睡觉"],
    ["早上", "九", "不"],
  ),
  sentence(
    "Dia (perempuan) pagi hari bangun jam enam.",
    ["她", "早上", "六", "点", "起床"],
    ["他", "晚上", "睡觉"],
  ),
  sentence(
    "Saya makan jam tujuh malam.",
    ["我", "晚上", "七", "点", "吃饭"],
    ["早上", "八", "不"],
  ),
  sentence(
    "Kami pagi hari berangkat sekolah.",
    ["我们", "早上", "上学"],
    ["他们", "放学", "晚上"],
  ),
  sentence(
    "Saya menonton televisi pada malam hari.",
    ["我", "晚上", "看", "电视"],
    ["早上", "听", "不"],
  ),
  sentence(
    "Dia (laki-laki) mendengarkan musik pada pagi hari.",
    ["他", "早上", "听", "音乐"],
    ["她", "晚上", "看"],
  ),
  sentence(
    "Saya menonton film pada malam hari.",
    ["我", "晚上", "看", "电影"],
    ["早上", "电视", "不"],
  ),
  sentence(
    "Saya minum kopi pada pagi hari.",
    ["我", "早上", "喝", "咖啡"],
    ["晚上", "茶", "不"],
  ),
  sentence(
    "Dia (perempuan) bermain bola pada sore hari.",
    ["她", "下午", "打球"],
    ["上午", "他", "不"],
  ),
  sentence(
    "Saya membaca pada pagi hari.",
    ["我", "上午", "读"],
    ["下午", "看", "不"],
  ),
  sentence(
    "Saya ada kelas pada pagi hari.",
    ["我", "上午", "上课"],
    ["下午", "下课", "不"],
  ),
  sentence(
    "Kami ada kelas pada sore hari.",
    ["我们", "下午", "上课"],
    ["上午", "下课", "不"],
  ),
  sentence(
    "Kelas dimulai jam delapan.",
    ["八", "点", "上课"],
    ["下课", "九", "不"],
  ),
  sentence(
    "Kelas selesai jam sepuluh.",
    ["十", "点", "下课"],
    ["上课", "九", "不"],
  ),
  sentence(
    "Kelas dimulai jam berapa?",
    ["几", "点", "上课"],
    ["下课", "吗", "什么"],
  ),
  sentence(
    "Kelas selesai jam berapa?",
    ["几", "点", "下课"],
    ["上课", "吗", "多少"],
  ),
  sentence(
    "Kami ada kelas jam delapan pagi.",
    ["我们", "上午", "八", "点", "上课"],
    ["下午", "下课", "不"],
  ),
  sentence(
    "Kelas siswa selesai jam empat sore.",
    [
      ["学生", "下午", "四", "点", "下课"],
      ["学生", "们", "下午", "四", "点", "下课"],
    ],
    ["上午", "上课", "不"],
  ),
  sentence(
    "Guru berangkat kerja jam tujuh pagi.",
    ["老师", "早上", "七", "点", "上班"],
    ["晚上", "下班", "不"],
  ),
  sentence(
    "Dokter pulang kerja jam enam sore.",
    ["医生", "下午", "六", "点", "下班"],
    ["上午", "上班", "不"],
  ),
  sentence(
    "Rekan kerja saya pulang kerja jam lima.",
    [
      ["我", "同事", "五", "点", "下班"],
      ["我", "的", "同事", "五", "点", "下班"],
    ],
    ["上班", "四", "不"],
  ),
  sentence(
    "Bos saya tidak pulang kerja jam enam.",
    [
      ["我", "老板", "六", "点", "不", "下班"],
      ["我", "的", "老板", "六", "点", "不", "下班"],
    ],
    ["上班", "五", "是"],
  ),
  sentence(
    "Apakah kamu makan jam dua belas?",
    ["你", "十", "二", "点", "吃饭", "吗"],
    ["一", "睡觉", "不"],
  ),
  sentence(
    "Apakah dia (perempuan) pulang sekolah jam lima?",
    ["她", "五", "点", "放学", "吗"],
    ["他", "上学", "不"],
  ),
  sentence(
    "Apakah kamu sering bangun tidur jam enam?",
    ["你", "经常", "六", "点", "起床", "吗"],
    ["睡觉", "七", "不"],
  ),
];

export const u11_lessons: Lesson[] = [
  {
    id: "u11_l1",
    title: "U11 L1",
    exercises: u11_sentences,
  },
  {
    id: "u11_l2",
    title: "U11 L2",
    exercises: u11_paragraphs,
  },
];
