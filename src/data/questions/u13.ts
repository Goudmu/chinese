import type { Lesson } from "@/data/course";
import { paragraph, sentence } from "./helpers";

const u_sentences = [];

export const u_paragraphs = [
  // 1
  paragraph(
    "Lengkapi paragraf tentang hari-hari dalam seminggu berikut!",
    [
      "我是小明，我是大学生。今天是.......一，我有课。明天是星期.......，我也有课。星期六和星期天是.......，我想在家休息。",
    ],
    [
      { id: 1, answer: "星期", extras: ["周末", "时候", "后天"] },
      { id: 2, answer: "二", extras: ["三", "五", "六"] },
      { id: 3, answer: "周末", extras: ["星期", "时候", "早饭"] },
    ],
    "Wǒ shì Xiǎo Míng, wǒ shì dàxuéshēng. Jīntiān shì ....... yī, wǒ yǒu kè. Míngtiān shì xīngqī ......., wǒ yě yǒu kè. Xīngqīliù hé xīngqītiān shì ......., wǒ xiǎng zài jiā xiūxi.",
    "Saya Xiao Ming, saya mahasiswa. Hari ini hari Senin, saya ada kelas. Besok hari Selasa, saya juga ada kelas. Sabtu dan Minggu adalah akhir pekan, saya ingin istirahat di rumah.",
  ),

  // 2
  paragraph(
    "Lengkapi percakapan tentang hari berikut!",
    [
      "小红：今天.......几？ 小李：今天星期三。 小红：明天是星期四，.......是星期五。 小李：星期六和星期天是.......，我们休息。",
    ],
    [
      { id: 1, answer: "星期", extras: ["周末", "后天", "时候"] },
      { id: 2, answer: "后天", extras: ["星期", "周末", "时候"] },
      { id: 3, answer: "周末", extras: ["星期", "时候", "后天"] },
    ],
    "Xiǎohóng: Jīntiān ....... jǐ? Xiǎo Lǐ: Jīntiān xīngqīsān. Xiǎohóng: Míngtiān shì xīngqīsì, ....... shì xīngqīwǔ. Xiǎo Lǐ: Xīngqīliù hé xīngqītiān shì ......., wǒmen xiūxi.",
    "Xiaohong: Hari ini hari apa? Xiao Li: Hari ini Rabu. Xiaohong: Besok Kamis, lusa Jumat. Xiao Li: Sabtu dan Minggu adalah akhir pekan, kita istirahat.",
  ),

  // 3
  paragraph(
    "Lengkapi paragraf tentang waktu makan berikut!",
    ["我早上七点起床，七点二十吃.......。十二点吃.......，晚上六点吃.......。"],
    [
      { id: 1, answer: "早饭", extras: ["健身", "出门", "打车"] },
      { id: 2, answer: "午饭", extras: ["见面", "车站", "路口"] },
      { id: 3, answer: "晚饭", extras: ["健身", "等", "回"] },
    ],
    "Wǒ zǎoshang qī diǎn qǐchuáng, qī diǎn èrshí chī ....... . Shí'èr diǎn chī ......., wǎnshang liù diǎn chī ....... .",
    "Pagi pukul tujuh saya bangun, pukul tujuh lewat dua puluh saya sarapan. Pukul dua belas saya makan siang, pukul enam malam saya makan malam.",
  ),

  // 4
  paragraph(
    "Lengkapi paragraf tentang kebiasaan berolahraga berikut!",
    [
      "我是小刚，我喜欢运动。我星期一、星期.......、星期三晚上去.......。星期天我在家休息，不.......。",
    ],
    [
      { id: 1, answer: "二", extras: ["四", "五", "六"] },
      { id: 2, answer: "健身", extras: ["早饭", "午饭", "晚饭"] },
      { id: 3, answer: "出门", extras: ["时候", "第", "路口"] },
    ],
    "Wǒ shì Xiǎo Gāng, wǒ xǐhuan yùndòng. Wǒ xīngqīyī, xīngqī ......., xīngqīsān wǎnshang qù ....... . Xīngqītiān wǒ zài jiā xiūxi, bù ....... .",
    "Saya Xiao Gang, saya suka olahraga. Saya pergi fitness pada Senin, Selasa, dan Rabu malam. Hari Minggu saya istirahat di rumah, tidak keluar rumah.",
  ),

  // 5
  paragraph(
    "Lengkapi percakapan tentang janji bertemu berikut!",
    [
      "小美：这个.......你有时间吗？ 小王：有。我们什么.......出门？ 小美：星期六下午三点。我们在车站.......吧。 小王：你想去咖啡厅吗？我们.......去吧。",
    ],
    [
      { id: 1, answer: "周末", extras: ["星期", "后天", "时候"] },
      { id: 2, answer: "时候", extras: ["星期", "周末", "后天"] },
      { id: 3, answer: "见面", extras: ["早饭", "午饭", "晚饭"] },
      { id: 4, answer: "一起", extras: ["第", "时候", "二"] },
    ],
    "Xiǎo Měi: Zhège ....... nǐ yǒu shíjiān ma? Xiǎo Wáng: Yǒu. Wǒmen shénme ....... chūmén? Xiǎo Měi: Xīngqīliù xiàwǔ sān diǎn. Wǒmen zài chēzhàn ....... ba. Xiǎo Wáng: Nǐ xiǎng qù kāfēitīng ma? Wǒmen ....... qù ba.",
    "Xiao Mei: Akhir pekan ini kamu ada waktu? Xiao Wang: Ada. Kapan kita keluar rumah? Xiao Mei: Sabtu pukul tiga sore. Kita bertemu di stasiun ya. Xiao Wang: Kamu ingin pergi ke kafe? Ayo kita pergi bersama.",
  ),

  // 6
  paragraph(
    "Lengkapi paragraf tentang pergi ke bioskop berikut!",
    [
      "星期天我和朋友去电影院。我早上九点.......，我在家前边的路口.......。朋友在电影院前边.......我。",
    ],
    [
      { id: 1, answer: "出门", extras: ["早饭", "午饭", "晚饭"] },
      { id: 2, answer: "打车", extras: ["早饭", "午饭", "晚饭"] },
      { id: 3, answer: "等", extras: ["回", "上", "下"] },
    ],
    "Xīngqītiān wǒ hé péngyou qù diànyǐngyuàn. Wǒ zǎoshang jiǔ diǎn ......., wǒ zài jiā qiánbian de lùkǒu ....... . Péngyou zài diànyǐngyuàn qiánbian ....... wǒ.",
    "Hari Minggu saya dan teman pergi ke bioskop. Pukul sembilan pagi saya keluar rumah, di perempatan depan rumah saya naik taksi. Teman menunggu saya di depan bioskop.",
  ),

  // 7
  paragraph(
    "Lengkapi percakapan menanyakan tempat berikut!",
    [
      "小李：请问，.......在哪里？ 小王：它在前边，在.......二个路口。 小李：我在这里.......你，我们.......去吧。",
    ],
    [
      { id: 1, answer: "车站", extras: ["周末", "时候", "星期"] },
      { id: 2, answer: "第", extras: ["上", "下", "等"] },
      { id: 3, answer: "等", extras: ["回", "上", "下"] },
      { id: 4, answer: "一起", extras: ["第", "时候", "星期"] },
    ],
    "Xiǎo Lǐ: Qǐngwèn, ....... zài nǎlǐ? Xiǎo Wáng: Tā zài qiánbian, zài ....... èr ge lùkǒu. Xiǎo Lǐ: Wǒ zài zhèlǐ ....... nǐ, wǒmen ....... qù ba.",
    "Xiao Li: Permisi, di mana stasiun? Xiao Wang: Ada di depan, di perempatan kedua. Xiao Li: Saya menunggumu di sini, ayo kita pergi bersama.",
  ),

  // 8
  paragraph(
    "Lengkapi paragraf tentang naik dan turun kendaraan berikut!",
    [
      "我家前边有一个车站。我上班的时候，在.......一站.......车，在公司前边的车站.......车。",
    ],
    [
      { id: 1, answer: "第", extras: ["在", "回", "时候"] },
      { id: 2, answer: "上", extras: ["第", "在", "时候"] },
      { id: 3, answer: "下", extras: ["第", "在", "时候"] },
    ],
    "Wǒ jiā qiánbian yǒu yí ge chēzhàn. Wǒ shàngbān de shíhou, zài ....... yī zhàn ....... chē, zài gōngsī qiánbian de chēzhàn ....... chē.",
    "Di depan rumah saya ada sebuah halte. Saat berangkat kerja, saya naik di halte pertama dan turun di halte depan kantor.",
  ),

  // 9
  paragraph(
    "Lengkapi paragraf tentang kegiatan sepulang sekolah berikut!",
    [
      "我是中学生。下午四点放学，五点.......家。我.......家，下午六点吃.......，晚上八点看电视。",
    ],
    [
      { id: 1, answer: "回", extras: ["等", "上", "下"] },
      { id: 2, answer: "在", extras: ["等", "上", "下"] },
      { id: 3, answer: "晚饭", extras: ["早饭", "午饭", "健身"] },
    ],
    "Wǒ shì zhōngxuéshēng. Xiàwǔ sì diǎn fàngxué, wǔ diǎn ....... jiā. Wǒ ....... jiā, xiàwǔ liù diǎn chī ......., wǎnshang bā diǎn kàn diànshì.",
    "Saya siswa SMP. Pukul empat sore pulang sekolah, pukul lima pulang ke rumah. Saya di rumah, pukul enam sore makan malam, pukul delapan malam menonton TV.",
  ),

  // 10
  paragraph(
    "Lengkapi paragraf tentang rencana akhir pekan berikut!",
    [
      "这个.......，我和同学们去公园爬山。星期六早上六点我.......，七点我们在车站.......。",
    ],
    [
      { id: 1, answer: "周末", extras: ["星期", "后天", "时候"] },
      { id: 2, answer: "出门", extras: ["早饭", "午饭", "晚饭"] },
      { id: 3, answer: "见面", extras: ["早饭", "午饭", "晚饭"] },
    ],
    "Zhège ......., wǒ hé tóngxuémen qù gōngyuán páshān. Xīngqīliù zǎoshang liù diǎn wǒ ......., qī diǎn wǒmen zài chēzhàn ....... .",
    "Akhir pekan ini, saya dan teman-teman sekelas pergi mendaki di taman. Sabtu pagi pukul enam saya keluar rumah, pukul tujuh kami bertemu di stasiun.",
  ),

  // 11
  paragraph(
    "Lengkapi paragraf tentang urutan hari berikut!",
    [
      "今天是星期.......，明天是星期三，.......是星期四。星期四我想和朋友去超市，我们什么.......见面？",
    ],
    [
      { id: 1, answer: "二", extras: ["一", "四", "五"] },
      { id: 2, answer: "后天", extras: ["今天", "周末", "星期"] },
      { id: 3, answer: "时候", extras: ["星期", "周末", "后天"] },
    ],
    "Jīntiān shì xīngqī ......., míngtiān shì xīngqīsān, ....... shì xīngqīsì. Xīngqīsì wǒ xiǎng hé péngyou qù chāoshì, wǒmen shénme ....... jiànmiàn?",
    "Hari ini hari Selasa, besok hari Rabu, lusa hari Kamis. Hari Kamis saya ingin pergi ke supermarket bersama teman, kapan kita bertemu?",
  ),

  // 12
  paragraph(
    "Lengkapi paragraf tentang ayah yang seorang dokter berikut!",
    [
      "我爸爸是医生，他星期一、星期二、星期三、星期四和星期五都上班。.......是星期六和星期天，他在家休息。星期六晚上，我们.......吃.......。",
    ],
    [
      { id: 1, answer: "周末", extras: ["后天", "时候", "第"] },
      { id: 2, answer: "一起", extras: ["第", "回", "等"] },
      { id: 3, answer: "晚饭", extras: ["早饭", "午饭", "健身"] },
    ],
    "Wǒ bàba shì yīshēng, tā xīngqīyī, xīngqī'èr, xīngqīsān, xīngqīsì hé xīngqīwǔ dōu shàngbān. ....... shì xīngqīliù hé xīngqītiān, tā zài jiā xiūxi. Xīngqīliù wǎnshang, wǒmen ....... chī ....... .",
    "Ayah saya seorang dokter, dia bekerja pada Senin, Selasa, Rabu, Kamis, dan Jumat. Akhir pekan adalah Sabtu dan Minggu, dia istirahat di rumah. Sabtu malam, kami makan malam bersama.",
  ),

  // 13
  paragraph(
    "Lengkapi paragraf tentang akhir pekan seorang siswa berikut!",
    [
      "我是中学生。我们学校星期六和.......都不上课。星期六我.......公园爬山。星期六晚上，我和爸爸妈妈.......吃.......。",
    ],
    [
      { id: 1, answer: "星期日", extras: ["周末", "时候", "第"] },
      { id: 2, answer: "在", extras: ["等", "上", "下"] },
      { id: 3, answer: "一起", extras: ["第", "回", "等"] },
      { id: 4, answer: "晚饭", extras: ["早饭", "午饭", "健身"] },
    ],
    "Wǒ shì zhōngxuéshēng. Wǒmen xuéxiào xīngqīliù hé ....... dōu bú shàngkè. Xīngqīliù wǒ ....... gōngyuán páshān. Xīngqīliù wǎnshang, wǒ hé bàba māma ....... chī ....... .",
    "Saya siswa SMP. Sekolah kami tidak ada pelajaran pada hari Sabtu dan Minggu. Hari Sabtu saya mendaki di taman. Sabtu malam, saya makan malam bersama ayah dan ibu.",
  ),

  // 14
  paragraph(
    "Lengkapi percakapan tentang tempat bertemu berikut!",
    [
      "小王：我们在哪里.......？ 小李：在第一个路口。我早上九点.......。你呢？ 小王：我在家吃早饭，九点二十.......去。",
    ],
    [
      { id: 1, answer: "见面", extras: ["早饭", "午饭", "晚饭"] },
      { id: 2, answer: "出门", extras: ["早饭", "午饭", "晚饭"] },
      { id: 3, answer: "打车", extras: ["等", "第", "时候"] },
    ],
    "Xiǎo Wáng: Wǒmen zài nǎlǐ .......? Xiǎo Lǐ: Zài dì yī ge lùkǒu. Wǒ zǎoshang jiǔ diǎn ....... . Nǐ ne? Xiǎo Wáng: Wǒ zài jiā chī zǎofàn, jiǔ diǎn èrshí ....... qù.",
    "Xiao Wang: Kita bertemu di mana? Xiao Li: Di perempatan pertama. Saya keluar rumah pukul sembilan pagi. Kamu? Xiao Wang: Saya sarapan di rumah, pukul sembilan lewat dua puluh naik taksi.",
  ),

  // 15
  paragraph(
    "Lengkapi paragraf tentang teman yang berkunjung berikut!",
    [
      "小刚星期天来我家。我在车站.......他。他在车站.......车，我们在车站.......。",
    ],
    [
      { id: 1, answer: "等", extras: ["回", "上", "下"] },
      { id: 2, answer: "下", extras: ["上", "回", "在"] },
      { id: 3, answer: "见面", extras: ["早饭", "午饭", "晚饭"] },
    ],
    "Xiǎo Gāng xīngqītiān lái wǒ jiā. Wǒ zài chēzhàn ....... tā. Tā zài chēzhàn ....... chē, wǒmen zài chēzhàn ....... .",
    "Xiao Gang datang ke rumah saya hari Minggu. Saya menunggunya di halte. Dia turun dari bus di halte, kami bertemu di halte.",
  ),

  // 16
  paragraph(
    "Lengkapi percakapan menanyakan waktu berikut!",
    [
      "小红：你什么.......出门？ 小李：早上八点。你呢？ 小红：我也八点出门。我们在车站.......吧。 小李：下午我们什么.......回家？",
    ],
    [
      { id: 1, answer: "时候", extras: ["星期", "周末", "后天"] },
      { id: 2, answer: "见面", extras: ["早饭", "午饭", "晚饭"] },
      { id: 3, answer: "时候", extras: ["星期", "周末", "后天"] },
    ],
    "Xiǎohóng: Nǐ shénme ....... chūmén? Xiǎo Lǐ: Zǎoshang bā diǎn. Nǐ ne? Xiǎohóng: Wǒ yě bā diǎn chūmén. Wǒmen zài chēzhàn ....... ba. Xiǎo Lǐ: Xiàwǔ wǒmen shénme ....... huí jiā?",
    "Xiaohong: Kamu keluar rumah kapan? Xiao Li: Pukul delapan pagi. Kamu? Xiaohong: Saya juga keluar rumah pukul delapan. Kita bertemu di stasiun ya. Xiao Li: Sore nanti kita pulang kapan?",
  ),

  // 17
  paragraph(
    "Lengkapi paragraf tentang letak rumah berikut!",
    [
      "我家在学校后边。我在学校出门，第一个.......是饭馆，第.......个路口是咖啡厅，.......三个路口是我家。",
    ],
    [
      { id: 1, answer: "路口", extras: ["时候", "周末", "早饭"] },
      { id: 2, answer: "二", extras: ["一", "三", "四"] },
      { id: 3, answer: "第", extras: ["上", "下", "在"] },
    ],
    "Wǒ jiā zài xuéxiào hòubian. Wǒ zài xuéxiào chūmén, dì yī ge ....... shì fànguǎn, dì ....... ge lùkǒu shì kāfēitīng, ....... sān ge lùkǒu shì wǒ jiā.",
    "Rumah saya ada di belakang sekolah. Saya keluar dari sekolah, perempatan pertama adalah restoran, perempatan kedua adalah kafe, perempatan ketiga adalah rumah saya.",
  ),

  // 18
  paragraph(
    "Lengkapi paragraf tentang kebiasaan olahraga Xiao Ying berikut!",
    [
      "小英喜欢运动。她星期一、星期.......、星期三晚上六点下班，七点去公园。她.......公园.......，晚上九点.......家。",
    ],
    [
      { id: 1, answer: "二", extras: ["四", "五", "六"] },
      { id: 2, answer: "在", extras: ["等", "上", "下"] },
      { id: 3, answer: "健身", extras: ["早饭", "午饭", "晚饭"] },
      { id: 4, answer: "回", extras: ["等", "上", "下"] },
    ],
    "Xiǎo Yīng xǐhuan yùndòng. Tā xīngqīyī, xīngqī ......., xīngqīsān wǎnshang liù diǎn xiàbān, qī diǎn qù gōngyuán. Tā ....... gōngyuán ......., wǎnshang jiǔ diǎn ....... jiā.",
    "Xiao Ying suka berolahraga. Pada Senin, Selasa, dan Rabu malam pukul enam dia pulang kerja, pukul tujuh pergi ke taman. Dia berolahraga di taman, pukul sembilan malam pulang ke rumah.",
  ),

  // 19
  paragraph(
    "Lengkapi paragraf tentang makan siang bersama keluarga berikut!",
    [
      "星期天十二点，我和爸爸妈妈.......在家吃.......。吃饭的.......，我们看电视。",
    ],
    [
      { id: 1, answer: "一起", extras: ["第", "回", "等"] },
      { id: 2, answer: "午饭", extras: ["早饭", "晚饭", "健身"] },
      { id: 3, answer: "时候", extras: ["星期", "周末", "后天"] },
    ],
    "Xīngqītiān shí'èr diǎn, wǒ hé bàba māma ....... zài jiā chī ....... . Chīfàn de ......., wǒmen kàn diànshì.",
    "Hari Minggu pukul dua belas, saya dan ayah ibu makan siang bersama di rumah. Saat makan, kami menonton TV.",
  ),

  // 20
  paragraph(
    "Lengkapi paragraf tentang pergi bersama rekan kerja berikut!",
    [
      "星期五晚上，我和同事们.......去酒吧。小周在公司前边.......我们，我们六点.......去。",
    ],
    [
      { id: 1, answer: "一起", extras: ["第", "时候", "星期"] },
      { id: 2, answer: "等", extras: ["回", "上", "下"] },
      { id: 3, answer: "打车", extras: ["早饭", "晚饭", "健身"] },
    ],
    "Xīngqīwǔ wǎnshang, wǒ hé tóngshìmen ....... qù jiǔbā. Xiǎo Zhōu zài gōngsī qiánbian ....... wǒmen, wǒmen liù diǎn ....... qù.",
    "Jumat malam, saya dan rekan-rekan kerja pergi ke bar bersama. Xiao Zhou menunggu kami di depan kantor, pukul enam kami naik taksi pergi.",
  ),

  // 21
  paragraph(
    "Lengkapi paragraf tentang rencana pergi ke mal berikut!",
    [
      "这个.......，我想和朋友们去商场逛逛。星期六下午两点，我们在商场前边.......。我们什么.......吃晚饭？晚上七点。",
    ],
    [
      { id: 1, answer: "周末", extras: ["星期", "后天", "时候"] },
      { id: 2, answer: "见面", extras: ["早饭", "午饭", "晚饭"] },
      { id: 3, answer: "时候", extras: ["星期", "周末", "后天"] },
    ],
    "Zhège ......., wǒ xiǎng hé péngyoumen qù shāngchǎng guàng guàng. Xīngqīliù xiàwǔ liǎng diǎn, wǒmen zài shāngchǎng qiánbian ....... . Wǒmen shénme ....... chī wǎnfàn? Wǎnshang qī diǎn.",
    "Akhir pekan ini, saya ingin jalan-jalan ke mal bersama teman-teman. Sabtu pukul dua siang, kami bertemu di depan mal. Kapan kami makan malam? Pukul tujuh malam.",
  ),

  // 22
  paragraph(
    "Lengkapi paragraf tentang perjalanan berangkat kerja berikut!",
    [
      "我早上八点.......，在车站.......车。八点十分我.......车，八点四十分我.......车。我九点上班。",
    ],
    [
      { id: 1, answer: "出门", extras: ["见面", "健身", "午饭"] },
      { id: 2, answer: "等", extras: ["在", "第", "时候"] },
      { id: 3, answer: "上", extras: ["回", "在", "第"] },
      { id: 4, answer: "下", extras: ["回", "在", "第"] },
    ],
    "Wǒ zǎoshang bā diǎn ......., zài chēzhàn ....... chē. Bā diǎn shí fēn wǒ ....... chē, bā diǎn sìshí fēn wǒ ....... chē. Wǒ jiǔ diǎn shàngbān.",
    "Pagi pukul delapan saya keluar rumah, menunggu bus di halte. Pukul delapan lewat sepuluh saya naik bus, pukul delapan empat puluh saya turun. Pukul sembilan saya mulai bekerja.",
  ),

  // 23
  paragraph(
    "Lengkapi percakapan tentang rencana akhir pekan berikut!",
    [
      "小马：今天.......几？ 小红：今天是星期五。 小马：明天是.......，后天是星期天。你想干什么？ 小红：我想.......家休息。",
    ],
    [
      { id: 1, answer: "星期", extras: ["周末", "后天", "时候"] },
      { id: 2, answer: "周末", extras: ["后天", "时候", "星期"] },
      { id: 3, answer: "在", extras: ["等", "上", "下"] },
    ],
    "Xiǎo Mǎ: Jīntiān ....... jǐ? Xiǎohóng: Jīntiān shì xīngqīwǔ. Xiǎo Mǎ: Míngtiān shì ......., hòutiān shì xīngqītiān. Nǐ xiǎng gànshénme? Xiǎohóng: Wǒ xiǎng ....... jiā xiūxi.",
    "Xiao Ma: Hari ini hari apa? Xiaohong: Hari ini Jumat. Xiao Ma: Besok akhir pekan, lusa hari Minggu. Kamu ingin melakukan apa? Xiaohong: Saya ingin istirahat di rumah.",
  ),

  // 24
  paragraph(
    "Lengkapi paragraf tentang jalan pulang kerja berikut!",
    [
      "我家后边有一个.......，我在那里等车。我下班回家，在.......二个.......下车。",
    ],
    [
      { id: 1, answer: "车站", extras: ["周末", "时候", "星期"] },
      { id: 2, answer: "第", extras: ["上", "下", "等"] },
      { id: 3, answer: "路口", extras: ["周末", "时候", "星期"] },
    ],
    "Wǒ jiā hòubian yǒu yí ge ......., wǒ zài nàlǐ děng chē. Wǒ xiàbān huí jiā, zài ....... èr ge ....... xià chē.",
    "Di belakang rumah saya ada sebuah halte, saya menunggu bus di sana. Saat pulang kerja, saya turun di perempatan kedua.",
  ),

  // 25
  paragraph(
    "Lengkapi percakapan tentang mengajak teman ke taman berikut!",
    [
      "小英：这个周末你想去哪里？ 小王：我想去公园。你也想去吗？ 小英：我也想去，我们.......去吧。 小王：你星期六有时间吗？ 小英：星期六我有事，我们.......去吧。 小王：那我们什么.......见面？",
    ],
    [
      { id: 1, answer: "一起", extras: ["第", "时候", "二"] },
      { id: 2, answer: "星期天", extras: ["时候", "第", "二"] },
      { id: 3, answer: "时候", extras: ["星期", "周末", "后天"] },
    ],
    "Xiǎo Yīng: Zhège zhōumò nǐ xiǎng qù nǎlǐ? Xiǎo Wáng: Wǒ xiǎng qù gōngyuán. Nǐ yě xiǎng qù ma? Xiǎo Yīng: Wǒ yě xiǎng qù, wǒmen ....... qù ba. Xiǎo Wáng: Nǐ xīngqīliù yǒu shíjiān ma? Xiǎo Yīng: Xīngqīliù wǒ yǒu shì, wǒmen ....... qù ba. Xiǎo Wáng: Nà wǒmen shénme ....... jiànmiàn?",
    "Xiao Ying: Akhir pekan ini kamu ingin pergi ke mana? Xiao Wang: Saya ingin pergi ke taman. Kamu juga ingin pergi? Xiao Ying: Saya juga ingin pergi, ayo kita pergi bersama. Xiao Wang: Sabtu kamu ada waktu? Xiao Ying: Sabtu saya ada urusan, ayo kita pergi hari Minggu. Xiao Wang: Kalau begitu kapan kita bertemu?",
  ),

  // 26
  paragraph(
    "Lengkapi paragraf tentang makan siang dengan rekan kerja berikut!",
    [
      "我的同事叫小李。.......三十二点，我和他在公司前边的饭馆.......。我们.......吃.......，下午一点回公司。",
    ],
    [
      { id: 1, answer: "星期", extras: ["周末", "后天", "时候"] },
      { id: 2, answer: "见面", extras: ["早饭", "午饭", "晚饭"] },
      { id: 3, answer: "一起", extras: ["第", "回", "时候"] },
      { id: 4, answer: "午饭", extras: ["早饭", "晚饭", "健身"] },
    ],
    "Wǒ de tóngshì jiào Xiǎo Lǐ. ....... sān shí'èr diǎn, wǒ hé tā zài gōngsī qiánbian de fànguǎn ....... . Wǒmen ....... chī ......., xiàwǔ yī diǎn huí gōngsī.",
    "Rekan kerja saya bernama Xiao Li. Hari Rabu pukul dua belas, saya bertemu dengannya di restoran depan kantor. Kami makan siang bersama, pukul satu siang kembali ke kantor.",
  ),

  // 27
  paragraph(
    "Lengkapi paragraf tentang sarapan bersama adik berikut!",
    ["星期天早上，我和妹妹八点起床。我们.......在家吃.......，九点.......。"],
    [
      { id: 1, answer: "一起", extras: ["第", "回", "时候"] },
      { id: 2, answer: "早饭", extras: ["午饭", "晚饭", "健身"] },
      { id: 3, answer: "出门", extras: ["早饭", "午饭", "晚饭"] },
    ],
    "Xīngqītiān zǎoshang, wǒ hé mèimei bā diǎn qǐchuáng. Wǒmen ....... zài jiā chī ......., jiǔ diǎn ....... .",
    "Hari Minggu pagi, saya dan adik perempuan bangun pukul delapan. Kami sarapan bersama di rumah, pukul sembilan keluar rumah.",
  ),

  // 28
  paragraph(
    "Lengkapi paragraf tentang teman-teman sekelas berikut!",
    [
      "我的同学们星期六都有课。.......下午，他们在咖啡厅.......。他们四点.......家。",
    ],
    [
      { id: 1, answer: "星期日", extras: ["时候", "第", "二"] },
      { id: 2, answer: "见面", extras: ["早饭", "午饭", "晚饭"] },
      { id: 3, answer: "回", extras: ["等", "上", "下"] },
    ],
    "Wǒ de tóngxuémen xīngqīliù dōu yǒu kè. ....... xiàwǔ, tāmen zài kāfēitīng ....... . Tāmen sì diǎn ....... jiā.",
    "Teman-teman sekelas saya semuanya ada kelas hari Sabtu. Hari Minggu sore, mereka bertemu di kafe. Pukul empat mereka pulang ke rumah.",
  ),

  // 29
  paragraph(
    "Lengkapi paragraf tentang pergi mendaki bersama berikut!",
    [
      "这个周末，我和朋友们去公园爬山。星期六早上六点，我在家吃.......，七点.......。我们在第一个路口.......，.......打车去公园。",
    ],
    [
      { id: 1, answer: "早饭", extras: ["午饭", "晚饭", "健身"] },
      { id: 2, answer: "出门", extras: ["午饭", "晚饭", "健身"] },
      { id: 3, answer: "见面", extras: ["第", "时候", "星期"] },
      { id: 4, answer: "一起", extras: ["第", "回", "时候"] },
    ],
    "Zhège zhōumò, wǒ hé péngyoumen qù gōngyuán páshān. Xīngqīliù zǎoshang liù diǎn, wǒ zài jiā chī ......., qī diǎn ....... . Wǒmen zài dì yī ge lùkǒu ......., ....... dǎchē qù gōngyuán.",
    "Akhir pekan ini, saya dan teman-teman pergi mendaki di taman. Sabtu pagi pukul enam, saya sarapan di rumah, pukul tujuh keluar rumah. Kami bertemu di perempatan pertama, lalu naik taksi bersama ke taman.",
  ),

  // 30
  paragraph(
    "Lengkapi paragraf tentang hari Minggu berikut!",
    [
      "今天是.......，明天是星期一。我.......家休息，晚上和家人一起吃.......。明天早上八点我.......。",
    ],
    [
      { id: 1, answer: "星期天", extras: ["后天", "时候", "第"] },
      { id: 2, answer: "在", extras: ["等", "上", "下"] },
      { id: 3, answer: "晚饭", extras: ["早饭", "午饭", "健身"] },
      { id: 4, answer: "出门", extras: ["早饭", "午饭", "晚饭"] },
    ],
    "Jīntiān shì ......., míngtiān shì xīngqīyī. Wǒ ....... jiā xiūxi, wǎnshang hé jiārén yìqǐ chī ....... . Míngtiān zǎoshang bā diǎn wǒ ....... .",
    "Hari ini hari Minggu, besok hari Senin. Saya istirahat di rumah, malam makan malam bersama keluarga. Besok pagi pukul delapan saya keluar rumah.",
  ),
];
