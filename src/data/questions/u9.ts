import type { Lesson } from "@/data/course";
import { paragraph, sentence } from "./helpers";

const u9_sentences = [
  sentence("Saya menonton film.", ["我", "看", "电影"], ["听", "音乐", "不"]),
  sentence(
    "Dia (laki-laki) menonton televisi.",
    ["他", "看", "电视"],
    ["她", "听", "电影"],
  ),
  sentence(
    "Dia (perempuan) menonton film.",
    ["她", "看", "电影"],
    ["他", "电视", "听"],
  ),
  sentence(
    "Apakah kamu menonton televisi?",
    ["你", "看", "电视", "吗"],
    ["听", "电影", "不"],
  ),
  sentence(
    "Saya mendengarkan musik.",
    ["我", "听", "音乐"],
    ["看", "电影", "不"],
  ),
  sentence(
    "Dia (laki-laki) mendengarkan musik.",
    ["他", "听", "音乐"],
    ["她", "看", "电视"],
  ),
  sentence(
    "Apakah kamu mendengarkan musik?",
    ["你", "听", "音乐", "吗"],
    ["看", "游戏", "不"],
  ),
  sentence("Saya bermain game.", ["我", "玩儿", "游戏"], ["看", "音乐", "不"]),
  sentence(
    "Dia (perempuan) suka bermain game.",
    ["她", "喜欢", "玩儿", "游戏"],
    ["他", "听", "运动"],
  ),
  sentence(
    "Saya suka olahraga.",
    ["我", "喜欢", "运动"],
    ["游戏", "音乐", "不"],
  ),
  sentence("Saya bermain bola.", ["我", "打球"], ["看", "运动", "不"]),
  sentence(
    "Dia (laki-laki) suka bermain bola.",
    ["他", "喜欢", "打球"],
    ["她", "听", "音乐"],
  ),
  sentence(
    "Apakah kamu suka bermain bola?",
    ["你", "喜欢", "打球", "吗"],
    ["看", "运动", "不"],
  ),
  sentence("Saya membaca.", ["我", "读"], ["看", "听", "不"]),
  sentence(
    "Dia (perempuan) suka membaca.",
    ["她", "喜欢", "读"],
    ["他", "听", "电视"],
  ),
  sentence(
    "Saya sering menonton film.",
    ["我", "经常", "看", "电影"],
    ["听", "电视", "不"],
  ),
  sentence(
    "Dia (laki-laki) sering menonton televisi.",
    ["他", "经常", "看", "电视"],
    ["她", "听", "电影"],
  ),
  sentence(
    "Dia (perempuan) sering mendengarkan musik.",
    ["她", "经常", "听", "音乐"],
    ["他", "看", "游戏"],
  ),
  sentence(
    "Saya sering bermain bola.",
    ["我", "经常", "打球"],
    ["看", "运动", "不"],
  ),
  sentence(
    "Kami sering bermain game.",
    ["我们", "经常", "玩儿", "游戏"],
    ["他们", "听", "不"],
  ),
  sentence(
    "Mereka sering minum kopi.",
    ["他们", "经常", "喝", "咖啡"],
    ["我们", "吃", "不"],
  ),
  sentence(
    "Saya tidak sering menonton televisi.",
    ["我", "不", "经常", "看", "电视"],
    ["听", "电影", "也"],
  ),
  sentence(
    "Dia (laki-laki) tidak sering membaca.",
    ["他", "不", "经常", "读"],
    ["她", "看", "也"],
  ),
  sentence(
    "Apakah kamu sering menonton film?",
    ["你", "经常", "看", "电影", "吗"],
    ["听", "电视", "不"],
  ),
  sentence(
    "Apakah kamu sering minum teh?",
    ["你", "经常", "喝", "茶", "吗"],
    ["吃", "咖啡", "不"],
  ),
  sentence(
    "Kamu mau minum kopi atau teh?",
    ["你", "喝", "咖啡", "还是", "茶"],
    ["吗", "和", "吃"],
  ),
  sentence(
    "Kamu mau makan nasi atau mi?",
    ["你", "吃", "米饭", "还是", "面条儿"],
    ["吗", "和", "喝"],
  ),
  sentence(
    "Apakah ini bakpao atau pangsit?",
    ["这", "是", "包子", "还是", "饺子"],
    ["那", "吗", "和"],
  ),
  sentence(
    "Apakah dia (laki-laki) guru atau dokter?",
    ["他", "是", "老师", "还是", "医生"],
    ["她", "吗", "和"],
  ),
  sentence(
    "Apakah kamu orang Jepang atau orang Korea?",
    ["你", "是", "日本", "人", "还是", "韩国", "人"],
    ["中国", "吗", "和"],
  ),
  sentence(
    "Kamu suka menonton film atau televisi?",
    ["你", "喜欢", "看", "电影", "还是", "电视"],
    ["听", "吗", "和"],
  ),
  sentence(
    "Kamu suka bermain bola atau bermain game?",
    ["你", "喜欢", "打球", "还是", "玩儿", "游戏"],
    ["运动", "吗", "和"],
  ),
  sentence(
    "Kamu mau susu atau jus?",
    ["你", "要", "牛奶", "还是", "果汁"],
    ["吗", "和", "茶"],
  ),
  sentence(
    "Kamu mau satu gelas teh atau satu gelas kopi?",
    ["你", "要", "一", "杯", "茶", "还是", "一", "杯", "咖啡"],
    ["瓶", "吗", "和"],
  ),
  sentence(
    "Saya suka musik, kamu bagaimana?",
    ["我", "喜欢", "音乐", "你", "呢"],
    ["吗", "不", "也"],
  ),
  sentence(
    "Saya makan nasi, kamu bagaimana?",
    ["我", "吃", "米饭", "你", "呢"],
    ["喝", "吗", "不"],
  ),
  sentence(
    "Saya minum teh, bagaimana dengan dia (laki-laki)?",
    ["我", "喝", "茶", "他", "呢"],
    ["吃", "吗", "她"],
  ),
  sentence(
    "Saya orang Tiongkok, kamu bagaimana?",
    ["我", "是", "中国", "人", "你", "呢"],
    ["日本", "吗", "不"],
  ),
  sentence(
    "Saya suka menonton film, bagaimana dengan dia (perempuan)?",
    ["我", "喜欢", "看", "电影", "她", "呢"],
    ["听", "吗", "他"],
  ),
  sentence(
    "Saya sering bermain bola, kamu bagaimana?",
    ["我", "经常", "打球", "你", "呢"],
    ["看", "吗", "不"],
  ),
  sentence(
    "Di mana ayah saya? Dan ibu saya?",
    [
      ["我", "爸爸", "在", "哪里", "我", "妈妈", "呢"],
      ["我", "的", "爸爸", "在", "哪里", "我", "的", "妈妈", "呢"],
    ],
    ["这里", "吗", "不"],
  ),
  sentence(
    "Saya makan nasi, bagaimana dengan teman saya?",
    [
      ["我", "吃", "米饭", "我", "朋友", "呢"],
      ["我", "吃", "米饭", "我", "的", "朋友", "呢"],
    ],
    ["喝", "吗", "不"],
  ),
  sentence(
    "Dia (laki-laki) suka bermain bola, juga suka membaca.",
    ["他", "喜欢", "打球", "也", "喜欢", "读"],
    ["她", "听", "不"],
  ),
  sentence(
    "Dia (perempuan) suka musik, juga suka olahraga.",
    ["她", "喜欢", "音乐", "也", "喜欢", "运动"],
    ["他", "游戏", "不"],
  ),
  sentence(
    "Saya suka menonton film, juga suka mendengarkan musik.",
    ["我", "喜欢", "看", "电影", "也", "喜欢", "听", "音乐"],
    ["电视", "不", "和"],
  ),
  sentence(
    "Ayah saya sering menonton televisi, juga sering membaca.",
    [
      ["我", "爸爸", "经常", "看", "电视", "也", "经常", "读"],
      ["我", "的", "爸爸", "经常", "看", "电视", "也", "经常", "读"],
    ],
    ["听", "妈妈", "不"],
  ),
  sentence(
    "Teman saya sering minum kopi, juga sering minum teh.",
    [
      ["我", "朋友", "经常", "喝", "咖啡", "也", "经常", "喝", "茶"],
      ["我", "的", "朋友", "经常", "喝", "咖啡", "也", "经常", "喝", "茶"],
    ],
    ["吃", "他", "不"],
  ),
  sentence(
    "Kakak perempuan saya sering mendengarkan musik, juga sering membaca.",
    [
      ["我", "姐姐", "经常", "听", "音乐", "也", "经常", "读"],
      ["我", "的", "姐姐", "经常", "听", "音乐", "也", "经常", "读"],
    ],
    ["看", "哥哥", "不"],
  ),
  sentence(
    "Kami semua sering menonton film.",
    ["我们", "都", "经常", "看", "电影"],
    ["他们", "听", "不"],
  ),
];

const u9_paragraphs = [
  paragraph(
    "Lengkapi paragraf tentang akhir pekan berikut!",
    [
      "我叫小明，我是中学生。周末我.......在家看电视。我喜欢看电影，.......喜欢听音乐。你喜欢看电影.......看电视？我喜欢看电影，你.......？",
    ],
    [
      { id: 1, answer: "经常", extras: ["呢", "音乐"] },
      { id: 2, answer: "也", extras: ["呢", "游戏"] },
      { id: 3, answer: "还是", extras: ["呢", "音乐"] },
      { id: 4, answer: "呢", extras: ["还是", "经常"] },
    ],
    "Wǒ jiào Xiǎomíng, wǒ shì zhōngxuéshēng. Zhōumò wǒ ....... zài jiā kàn diànshì. Wǒ xǐhuan kàn diànyǐng, ....... xǐhuan tīng yīnyuè. Nǐ xǐhuan kàn diànyǐng ....... kàn diànshì? Wǒ xǐhuan kàn diànyǐng, nǐ ....... ?",
    "Nama saya Xiaoming, saya siswa SMP. Akhir pekan saya sering menonton TV di rumah. Saya suka menonton film, juga suka mendengarkan musik. Apakah kamu suka menonton film atau menonton TV? Saya suka menonton film, kalau kamu?",
  ),
  paragraph(
    "Lengkapi paragraf tentang orang tua berikut!",
    [
      "我妈妈是老师。她很喜欢.......书，.......听音乐。我爸爸是医生。他喜欢.......，每天都打球。晚上他不看电影，他喜欢看.......。",
    ],
    [
      { id: 1, answer: "读", extras: ["打球", "电影"] },
      { id: 2, answer: "也", extras: ["呢", "音乐"] },
      { id: 3, answer: "运动", extras: ["读", "呢"] },
      { id: 4, answer: "电视", extras: ["音乐", "听"] },
    ],
    "Wǒ māma shì lǎoshī. Tā hěn xǐhuan ....... shū, ....... tīng yīnyuè. Wǒ bàba shì yīshēng. Tā xǐhuan ....... , měi tiān dōu dǎqiú. Wǎnshang tā bú kàn diànyǐng, tā xǐhuan kàn ....... .",
    "Ibuku seorang guru. Dia sangat suka membaca buku, juga mendengarkan musik. Ayahku seorang dokter. Dia suka berolahraga, setiap hari bermain bola. Malam hari dia tidak menonton film, dia suka menonton TV.",
  ),
  paragraph(
    "Lengkapi paragraf tentang adik laki-laki berikut!",
    [
      "我弟弟八岁，他是小学生。他很喜欢玩.......，每天都玩一个小时。他.......看电视，也喜欢听音乐。他不爱.......，我爱。你喜欢玩游戏.......打球？",
    ],
    [
      { id: 1, answer: "游戏", extras: ["听", "读"] },
      { id: 2, answer: "经常", extras: ["呢", "音乐"] },
      { id: 3, answer: "运动", extras: ["呢", "经常"] },
      { id: 4, answer: "还是", extras: ["呢", "音乐"] },
    ],
    "Wǒ dìdi bā suì, tā shì xiǎoxuéshēng. Tā hěn xǐhuan wán ....... , měi tiān dōu wán yí ge xiǎoshí. Tā ....... kàn diànshì, yě xǐhuan tīng yīnyuè. Tā bú ài ....... , wǒ ài. Nǐ xǐhuan wán yóuxì ....... dǎqiú?",
    "Adik laki-lakiku berusia delapan tahun, dia siswa SD. Dia sangat suka bermain game, setiap hari bermain satu jam. Dia sering menonton TV, juga suka mendengarkan musik. Dia tidak suka berolahraga, saya suka. Apakah kamu suka bermain game atau main bola?",
  ),
  paragraph(
    "Lengkapi paragraf tentang bioskop berikut!",
    [
      "周末我和朋友去电影院看.......。我们.......去，一个月去三次。我喜欢看电影，你.......？你喜欢听音乐还是.......电影？我们一起去吧。",
    ],
    [
      { id: 1, answer: "电影", extras: ["音乐", "呢"] },
      { id: 2, answer: "经常", extras: ["呢", "游戏"] },
      { id: 3, answer: "呢", extras: ["还是", "经常"] },
      { id: 4, answer: "看", extras: ["打球", "读"] },
    ],
    "Zhōumò wǒ hé péngyou qù diànyǐngyuàn kàn ....... . Wǒmen ....... qù, yí ge yuè qù sān cì. Wǒ xǐhuan kàn diànyǐng, nǐ ....... ? Nǐ xǐhuan tīng yīnyuè háishi ....... diànyǐng? Wǒmen yìqǐ qù ba.",
    "Akhir pekan saya dan teman pergi ke bioskop untuk menonton film. Kami sering pergi, sebulan tiga kali. Saya suka menonton film, kalau kamu? Apakah kamu suka mendengarkan musik atau menonton film? Mari kita pergi bersama.",
  ),
  paragraph(
    "Lengkapi paragraf tentang musik berikut!",
    [
      "我是大学生。我很爱听.......，每天晚上我都听。我姐姐喜欢.......书，她不爱运动。我喜欢读书，.......喜欢打球。你.......？",
    ],
    [
      { id: 1, answer: "音乐", extras: ["电视", "游戏"] },
      { id: 2, answer: "读", extras: ["打球", "电影"] },
      { id: 3, answer: "也", extras: ["呢", "音乐"] },
      { id: 4, answer: "呢", extras: ["还是", "经常"] },
    ],
    "Wǒ shì dàxuéshēng. Wǒ hěn ài tīng ....... , měi tiān wǎnshang wǒ dōu tīng. Wǒ jiějie xǐhuan ....... shū, tā bú ài yùndòng. Wǒ xǐhuan dúshū, ....... xǐhuan dǎqiú. Nǐ ....... ?",
    "Saya mahasiswa. Saya sangat suka mendengarkan musik, setiap malam saya mendengarkannya. Kakak perempuanku suka membaca buku, dia tidak suka berolahraga. Saya suka membaca buku, juga suka bermain bola. Kalau kamu?",
  ),
  paragraph(
    "Lengkapi paragraf tentang olahraga di sekolah berikut!",
    [
      "我们学校的学生都爱.......。每天下午我都去球场.......。我的同学小李.......去，他是球队的。你喜欢打球.......看电影？我们一起去吧。",
    ],
    [
      { id: 1, answer: "运动", extras: ["呢", "还是"] },
      { id: 2, answer: "打球", extras: ["音乐", "电视"] },
      { id: 3, answer: "经常", extras: ["呢", "游戏"] },
      { id: 4, answer: "还是", extras: ["呢", "音乐"] },
    ],
    "Wǒmen xuéxiào de xuésheng dōu ài ....... . Měi tiān xiàwǔ wǒ dōu qù qiúchǎng ....... . Wǒ de tóngxué Xiǎo Lǐ ....... qù, tā shì qiúduì de. Nǐ xǐhuan dǎqiú ....... kàn diànyǐng? Wǒmen yìqǐ qù ba.",
    "Siswa-siswa di sekolah kami semuanya suka berolahraga. Setiap sore saya pergi ke lapangan untuk bermain bola. Teman sekelasku Xiao Li sering pergi, dia anggota tim bola. Apakah kamu suka bermain bola atau menonton film? Mari kita pergi bersama.",
  ),
  paragraph(
    "Lengkapi paragraf tentang malam hari di rumah berikut!",
    [
      "我家有一个大.......。晚上我们全家人一起.......电视。爸爸喜欢看新闻，妈妈.......喜欢看新闻。你们家晚上看电视.......听音乐？我家晚上很热闹。",
    ],
    [
      { id: 1, answer: "电视", extras: ["音乐", "呢"] },
      { id: 2, answer: "看", extras: ["听", "读"] },
      { id: 3, answer: "也", extras: ["呢", "音乐"] },
      { id: 4, answer: "还是", extras: ["呢", "音乐"] },
    ],
    "Wǒ jiā yǒu yí ge dà ....... . Wǎnshang wǒmen quán jiā rén yìqǐ ....... diànshì. Bàba xǐhuan kàn xīnwén, māma ....... xǐhuan kàn xīnwén. Nǐmen jiā wǎnshang kàn diànshì ....... tīng yīnyuè? Wǒ jiā wǎnshang hěn rènao.",
    "Di rumahku ada sebuah TV besar. Malam hari seluruh keluarga menonton TV bersama. Ayah suka menonton berita, ibu juga suka menonton berita. Apakah keluargamu malam hari menonton TV atau mendengarkan musik? Rumahku ramai pada malam hari.",
  ),
  paragraph(
    "Lengkapi percakapan tentang film berikut!",
    [
      "A：你喜欢看.......吗？B：喜欢，我.......去电影院。你.......？A：我喜欢在家看电视。我也喜欢.......书。",
    ],
    [
      { id: 1, answer: "电影", extras: ["音乐", "呢"] },
      { id: 2, answer: "经常", extras: ["呢", "听"] },
      { id: 3, answer: "呢", extras: ["还是", "经常"] },
      { id: 4, answer: "读", extras: ["打球", "电影"] },
    ],
    "A: Nǐ xǐhuan kàn ....... ma? B: Xǐhuan, wǒ ....... qù diànyǐngyuàn. Nǐ ....... ? A: Wǒ xǐhuan zài jiā kàn diànshì. Wǒ yě xǐhuan ....... shū.",
    "A: Apakah kamu suka menonton film? B: Suka, saya sering pergi ke bioskop. Kalau kamu? A: Saya suka menonton TV di rumah. Saya juga suka membaca buku.",
  ),
  paragraph(
    "Lengkapi percakapan tentang olahraga dan musik berikut!",
    [
      "A：你喜欢.......吗？B：喜欢，我每天都打球。你.......？A：我不喜欢打球，我喜欢.......音乐。B：你喜欢听音乐.......看电影？A：我喜欢听音乐，也喜欢看电影。",
    ],
    [
      { id: 1, answer: "运动", extras: ["呢", "还是"] },
      { id: 2, answer: "呢", extras: ["还是", "经常"] },
      { id: 3, answer: "听", extras: ["看", "读"] },
      { id: 4, answer: "还是", extras: ["呢", "经常"] },
    ],
    "A: Nǐ xǐhuan ....... ma? B: Xǐhuan, wǒ měi tiān dōu dǎqiú. Nǐ ....... ? A: Wǒ bù xǐhuan dǎqiú, wǒ xǐhuan ....... yīnyuè. B: Nǐ xǐhuan tīng yīnyuè ....... kàn diànyǐng? A: Wǒ xǐhuan tīng yīnyuè, yě xǐhuan kàn diànyǐng.",
    "A: Apakah kamu suka berolahraga? B: Suka, setiap hari saya bermain bola. Kalau kamu? A: Saya tidak suka main bola, saya suka mendengarkan musik. B: Apakah kamu suka mendengarkan musik atau menonton film? A: Saya suka mendengarkan musik, juga suka menonton film.",
  ),
  paragraph(
    "Lengkapi paragraf tentang mahasiswi yang suka membaca berikut!",
    [
      "我叫小红，我是大学生。我.......在图书馆读书。我喜欢读书，.......喜欢听音乐。晚上我喜欢看.......，我不玩游戏。你喜欢运动.......读书？",
    ],
    [
      { id: 1, answer: "经常", extras: ["呢", "音乐"] },
      { id: 2, answer: "也", extras: ["呢", "游戏"] },
      { id: 3, answer: "电视", extras: ["音乐", "呢"] },
      { id: 4, answer: "还是", extras: ["呢", "音乐"] },
    ],
    "Wǒ jiào Xiǎohóng, wǒ shì dàxuéshēng. Wǒ ....... zài túshūguǎn dúshū. Wǒ xǐhuan dúshū, ....... xǐhuan tīng yīnyuè. Wǎnshang wǒ xǐhuan kàn ....... , wǒ bù wán yóuxì. Nǐ xǐhuan yùndòng ....... dúshū?",
    "Nama saya Xiaohong, saya mahasiswa. Saya sering membaca buku di perpustakaan. Saya suka membaca buku, juga suka mendengarkan musik. Malam hari saya suka menonton TV, saya tidak bermain game. Apakah kamu suka berolahraga atau membaca buku?",
  ),
  paragraph(
    "Lengkapi paragraf tentang siswa SD berikut!",
    [
      "你好！我叫大卫，我是小学生。我喜欢玩.......，也喜欢看.......。我.......去公园，我妈妈说我要多运动。我哥哥.......喜欢打球。",
    ],
    [
      { id: 1, answer: "游戏", extras: ["听", "读"] },
      { id: 2, answer: "电视", extras: ["音乐", "呢"] },
      { id: 3, answer: "经常", extras: ["呢", "听"] },
      { id: 4, answer: "也", extras: ["呢", "游戏"] },
    ],
    "Nǐ hǎo! Wǒ jiào Dàwèi, wǒ shì xiǎoxuéshēng. Wǒ xǐhuan wán ....... , yě xǐhuan kàn ....... . Wǒ ....... qù gōngyuán, wǒ māma shuō wǒ yào duō yùndòng. Wǒ gēge ....... xǐhuan dǎqiú.",
    "Halo! Nama saya David, saya siswa SD. Saya suka bermain game, juga suka menonton TV. Saya sering pergi ke taman, ibu bilang saya harus lebih banyak berolahraga. Kakak laki-lakiku juga suka bermain bola.",
  ),
  paragraph(
    "Lengkapi paragraf tentang kakek berikut!",
    [
      "我爷爷今年七十岁。他不玩游戏。他喜欢听.......，也喜欢看.......。他.......在公园运动，每天早上都去。你爷爷喜欢听音乐.......看电视？",
    ],
    [
      { id: 1, answer: "音乐", extras: ["电视", "游戏"] },
      { id: 2, answer: "电视", extras: ["音乐", "听"] },
      { id: 3, answer: "经常", extras: ["呢", "音乐"] },
      { id: 4, answer: "还是", extras: ["呢", "经常"] },
    ],
    "Wǒ yéye jīnnián qīshí suì. Tā bù wán yóuxì. Tā xǐhuan tīng ....... , yě xǐhuan kàn ....... . Tā ....... zài gōngyuán yùndòng, měi tiān zǎoshang dōu qù. Nǐ yéye xǐhuan tīng yīnyuè ....... kàn diànshì?",
    "Kakekku tahun ini berusia tujuh puluh tahun. Dia tidak bermain game. Dia suka mendengarkan musik, juga suka menonton TV. Dia sering berolahraga di taman, setiap pagi dia pergi. Apakah kakekmu suka mendengarkan musik atau menonton TV?",
  ),
  paragraph(
    "Lengkapi percakapan perkenalan hobi berikut!",
    [
      "A：你是日本人吗？B：我是，我叫小田。A：你喜欢什么？B：我喜欢看.......，也喜欢.......书。A：你喜欢听音乐.......运动？B：我喜欢听音乐。你.......？A：我喜欢运动。",
    ],
    [
      { id: 1, answer: "电影", extras: ["音乐", "呢"] },
      { id: 2, answer: "读", extras: ["打球", "电影"] },
      { id: 3, answer: "还是", extras: ["呢", "经常"] },
      { id: 4, answer: "呢", extras: ["还是", "经常"] },
    ],
    "A: Nǐ shì Rìběn rén ma? B: Wǒ shì, wǒ jiào Xiǎotián. A: Nǐ xǐhuan shénme? B: Wǒ xǐhuan kàn ....... , yě xǐhuan ....... shū. A: Nǐ xǐhuan tīng yīnyuè ....... yùndòng? B: Wǒ xǐhuan tīng yīnyuè. Nǐ ....... ? A: Wǒ xǐhuan yùndòng.",
    "A: Apakah kamu orang Jepang? B: Ya, nama saya Xiaotian. A: Kamu suka apa? B: Saya suka menonton film, juga suka membaca buku. A: Apakah kamu suka mendengarkan musik atau berolahraga? B: Saya suka mendengarkan musik. Kalau kamu? A: Saya suka berolahraga.",
  ),
  paragraph(
    "Lengkapi paragraf tentang hari Minggu berikut!",
    [
      "星期天我在家休息。早上我.......音乐，中午我看电影。下午我去公园打球。晚上我.......读书，我妈妈.......喜欢读书。你.......？",
    ],
    [
      { id: 1, answer: "听", extras: ["看", "读"] },
      { id: 2, answer: "经常", extras: ["呢", "音乐"] },
      { id: 3, answer: "也", extras: ["呢", "电影"] },
      { id: 4, answer: "呢", extras: ["还是", "经常"] },
    ],
    "Xīngqītiān wǒ zài jiā xiūxi. Zǎoshang wǒ ....... yīnyuè, zhōngwǔ wǒ kàn diànyǐng. Xiàwǔ wǒ qù gōngyuán dǎqiú. Wǎnshang wǒ ....... dúshū, wǒ māma ....... xǐhuan dúshū. Nǐ ....... ?",
    "Hari Minggu saya beristirahat di rumah. Pagi hari saya mendengarkan musik, siang saya menonton film. Sore saya pergi ke taman untuk bermain bola. Malam hari saya sering membaca buku, ibuku juga suka membaca buku. Kalau kamu?",
  ),
  paragraph(
    "Lengkapi paragraf tentang dua bersaudara berikut!",
    [
      "我们家有两个孩子，我和哥哥。我们都爱玩.......，每天晚上都玩。哥哥喜欢看.......，我.......喜欢看。我们的妈妈不爱玩游戏，她喜欢听音乐。你.......？",
    ],
    [
      { id: 1, answer: "游戏", extras: ["听", "读"] },
      { id: 2, answer: "电影", extras: ["音乐", "呢"] },
      { id: 3, answer: "也", extras: ["呢", "音乐"] },
      { id: 4, answer: "呢", extras: ["还是", "经常"] },
    ],
    "Wǒmen jiā yǒu liǎng ge háizi, wǒ hé gēge. Wǒmen dōu ài wán ....... , měi tiān wǎnshang dōu wán. Gēge xǐhuan kàn ....... , wǒ ....... xǐhuan kàn. Wǒmen de māma bú ài wán yóuxì, tā xǐhuan tīng yīnyuè. Nǐ ....... ?",
    "Keluarga kami punya dua anak, saya dan kakak laki-laki. Kami berdua suka bermain game, setiap malam bermain. Kakak suka menonton film, saya juga suka menonton. Ibu kami tidak suka bermain game, dia suka mendengarkan musik. Kalau kamu?",
  ),
  paragraph(
    "Lengkapi percakapan tentang rencana akhir pekan berikut!",
    [
      "A：你周末.......做什么？B：我在家看电影，.......听音乐。你.......？A：我去公园运动。你喜欢打球.......玩游戏？B：我喜欢打球。",
    ],
    [
      { id: 1, answer: "经常", extras: ["呢", "音乐"] },
      { id: 2, answer: "也", extras: ["呢", "游戏"] },
      { id: 3, answer: "呢", extras: ["还是", "经常"] },
      { id: 4, answer: "还是", extras: ["呢", "也"] },
    ],
    "A: Nǐ zhōumò ....... zuò shénme? B: Wǒ zài jiā kàn diànyǐng, ....... tīng yīnyuè. Nǐ ....... ? A: Wǒ qù gōngyuán yùndòng. Nǐ xǐhuan dǎqiú ....... wán yóuxì? B: Wǒ xǐhuan dǎqiú.",
    "A: Apa yang sering kamu lakukan saat akhir pekan? B: Saya menonton film di rumah, juga mendengarkan musik. Kalau kamu? A: Saya pergi ke taman untuk berolahraga. Apakah kamu suka bermain bola atau bermain game? B: Saya suka bermain bola.",
  ),
  paragraph(
    "Lengkapi paragraf tentang perpustakaan berikut!",
    [
      "我是大学生。我喜欢去图书馆.......书。我的朋友.......喜欢读书，他还喜欢打球。他喜欢.......，每天都跑步。你喜欢读书.......打球？",
    ],
    [
      { id: 1, answer: "读", extras: ["打球", "电影"] },
      { id: 2, answer: "也", extras: ["呢", "游戏"] },
      { id: 3, answer: "运动", extras: ["读", "呢"] },
      { id: 4, answer: "还是", extras: ["呢", "音乐"] },
    ],
    "Wǒ shì dàxuéshēng. Wǒ xǐhuan qù túshūguǎn ....... shū. Wǒ de péngyou ....... xǐhuan dúshū, tā hái xǐhuan dǎqiú. Tā xǐhuan ....... , měi tiān dōu pǎobù. Nǐ xǐhuan dúshū ....... dǎqiú?",
    "Saya mahasiswa. Saya suka pergi ke perpustakaan untuk membaca buku. Temanku juga suka membaca buku, dia juga suka bermain bola. Dia suka berolahraga, setiap hari berlari. Apakah kamu suka membaca buku atau bermain bola?",
  ),
  paragraph(
    "Lengkapi paragraf tentang pergi ke bioskop dengan pacar berikut!",
    [
      "我和男朋友周末去电影院。我们.......去，每个月去三次。他喜欢看.......，我也喜欢。回家以后，他喜欢.......音乐，我喜欢读书。你和你的男朋友.......？",
    ],
    [
      { id: 1, answer: "经常", extras: ["呢", "音乐"] },
      { id: 2, answer: "电影", extras: ["音乐", "呢"] },
      { id: 3, answer: "听", extras: ["看", "读"] },
      { id: 4, answer: "呢", extras: ["还是", "经常"] },
    ],
    "Wǒ hé nánpéngyou zhōumò qù diànyǐngyuàn. Wǒmen ....... qù, měi ge yuè qù sān cì. Tā xǐhuan kàn ....... , wǒ yě xǐhuan. Huí jiā yǐhòu, tā xǐhuan ....... yīnyuè, wǒ xǐhuan dúshū. Nǐ hé nǐ de nánpéngyou ....... ?",
    "Saya dan pacar laki-lakiku pergi ke bioskop saat akhir pekan. Kami sering pergi, sebulan tiga kali. Dia suka menonton film, saya juga suka. Setelah pulang, dia suka mendengarkan musik, saya suka membaca buku. Kalau kamu dan pacarmu?",
  ),
  paragraph(
    "Lengkapi percakapan tentang game berikut!",
    [
      "A：你喜欢玩.......吗？B：我很爱玩，每天都玩。你.......？A：我不玩游戏，我喜欢运动。B：你喜欢打球.......读书？A：我喜欢打球。我.......去球场。",
    ],
    [
      { id: 1, answer: "游戏", extras: ["听", "读"] },
      { id: 2, answer: "呢", extras: ["还是", "经常"] },
      { id: 3, answer: "还是", extras: ["呢", "经常"] },
      { id: 4, answer: "经常", extras: ["呢", "听"] },
    ],
    "A: Nǐ xǐhuan wán ....... ma? B: Wǒ hěn ài wán, měi tiān dōu wán. Nǐ ....... ? A: Wǒ bù wán yóuxì, wǒ xǐhuan yùndòng. B: Nǐ xǐhuan dǎqiú ....... dúshū? A: Wǒ xǐhuan dǎqiú. Wǒ ....... qù qiúchǎng.",
    "A: Apakah kamu suka bermain game? B: Saya sangat suka bermain, setiap hari bermain. Kalau kamu? A: Saya tidak bermain game, saya suka berolahraga. B: Apakah kamu suka bermain bola atau membaca buku? A: Saya suka bermain bola. Saya sering pergi ke lapangan.",
  ),
  paragraph(
    "Lengkapi paragraf tentang malam hari di rumah berikut!",
    [
      "我家晚上很热闹。爸爸.......电视。妈妈听.......。哥哥玩游戏，他.......玩到很晚。你们家晚上.......？",
    ],
    [
      { id: 1, answer: "看", extras: ["听", "读"] },
      { id: 2, answer: "音乐", extras: ["电视", "游戏"] },
      { id: 3, answer: "经常", extras: ["呢", "听"] },
      { id: 4, answer: "呢", extras: ["还是", "经常"] },
    ],
    "Wǒ jiā wǎnshang hěn rènao. Bàba ....... diànshì. Māma tīng ....... . Gēge wán yóuxì, tā ....... wán dào hěn wǎn. Nǐmen jiā wǎnshang ....... ?",
    "Rumahku ramai pada malam hari. Ayah menonton TV. Ibu mendengarkan musik. Kakak laki-laki bermain game, dia sering bermain sampai larut malam. Bagaimana dengan keluargamu pada malam hari?",
  ),
  paragraph(
    "Lengkapi percakapan tentang bermain bola berikut!",
    [
      "A：你喜欢运动吗？B：喜欢，我每天下午都去球场.......。A：我不喜欢运动，我喜欢读书，.......喜欢听音乐。你.......？B：我喜欢打球，也喜欢看电视。A：你喜欢看电视.......看电影？B：我喜欢看电视。",
    ],
    [
      { id: 1, answer: "打球", extras: ["音乐", "电视"] },
      { id: 2, answer: "也", extras: ["呢", "游戏"] },
      { id: 3, answer: "呢", extras: ["还是", "经常"] },
      { id: 4, answer: "还是", extras: ["呢", "经常"] },
    ],
    "A: Nǐ xǐhuan yùndòng ma? B: Xǐhuan, wǒ měi tiān xiàwǔ dōu qù qiúchǎng ....... . A: Wǒ bù xǐhuan yùndòng, wǒ xǐhuan dúshū, ....... xǐhuan tīng yīnyuè. Nǐ ....... ? B: Wǒ xǐhuan dǎqiú, yě xǐhuan kàn diànshì. A: Nǐ xǐhuan kàn diànshì ....... kàn diànyǐng? B: Wǒ xǐhuan kàn diànshì.",
    "A: Apakah kamu suka berolahraga? B: Suka, setiap sore saya pergi ke lapangan untuk bermain bola. A: Saya tidak suka berolahraga, saya suka membaca buku, juga suka mendengarkan musik. Kalau kamu? B: Saya suka bermain bola, juga suka menonton TV. A: Apakah kamu suka menonton TV atau menonton film? B: Saya suka menonton TV.",
  ),
  paragraph(
    "Lengkapi paragraf tentang teman perempuan berikut!",
    [
      "我的朋友小英是大学生。她喜欢.......书。她.......去图书馆，也喜欢去电影院看电影。她不喜欢运动，我每天都去球场.......。你.......？",
    ],
    [
      { id: 1, answer: "读", extras: ["打球", "电影"] },
      { id: 2, answer: "经常", extras: ["呢", "游戏"] },
      { id: 3, answer: "打球", extras: ["音乐", "电视"] },
      { id: 4, answer: "呢", extras: ["还是", "经常"] },
    ],
    "Wǒ de péngyou Xiǎoyīng shì dàxuéshēng. Tā xǐhuan ....... shū. Tā ....... qù túshūguǎn, yě xǐhuan qù diànyǐngyuàn kàn diànyǐng. Tā bù xǐhuan yùndòng, wǒ měi tiān dōu qù qiúchǎng ....... . Nǐ ....... ?",
    "Temanku Xiaoying mahasiswa. Dia suka membaca buku. Dia sering pergi ke perpustakaan, juga suka pergi ke bioskop untuk menonton film. Dia tidak suka berolahraga, saya setiap hari pergi ke lapangan untuk bermain bola. Kalau kamu?",
  ),
  paragraph(
    "Lengkapi percakapan tentang musik dan film berikut!",
    [
      "A：你喜欢听音乐.......看电影？B：我喜欢听.......，也喜欢看电影。你.......？A：我喜欢看电影。我.......去电影院。B：我们周末一起去吧。",
    ],
    [
      { id: 1, answer: "还是", extras: ["呢", "经常"] },
      { id: 2, answer: "音乐", extras: ["电视", "游戏"] },
      { id: 3, answer: "呢", extras: ["还是", "经常"] },
      { id: 4, answer: "经常", extras: ["呢", "游戏"] },
    ],
    "A: Nǐ xǐhuan tīng yīnyuè ....... kàn diànyǐng? B: Wǒ xǐhuan tīng ....... , yě xǐhuan kàn diànyǐng. Nǐ ....... ? A: Wǒ xǐhuan kàn diànyǐng. Wǒ ....... qù diànyǐngyuàn. B: Wǒmen zhōumò yìqǐ qù ba.",
    "A: Apakah kamu suka mendengarkan musik atau menonton film? B: Saya suka mendengarkan musik, juga suka menonton film. Kalau kamu? A: Saya suka menonton film. Saya sering pergi ke bioskop. B: Mari kita pergi bersama akhir pekan.",
  ),
  paragraph(
    "Lengkapi paragraf tentang teman sekelas yang suka olahraga berikut!",
    [
      "我的同学小马喜欢运动。他每天都去球场.......，也喜欢跑步。他不喜欢看电视，他喜欢听.......。你的同学喜欢运动.......读书？你.......？",
    ],
    [
      { id: 1, answer: "打球", extras: ["音乐", "电视"] },
      { id: 2, answer: "音乐", extras: ["电视", "游戏"] },
      { id: 3, answer: "还是", extras: ["呢", "经常"] },
      { id: 4, answer: "呢", extras: ["还是", "经常"] },
    ],
    "Wǒ de tóngxué Xiǎo Mǎ xǐhuan yùndòng. Tā měi tiān dōu qù qiúchǎng ....... , yě xǐhuan pǎobù. Tā bù xǐhuan kàn diànshì, tā xǐhuan tīng ....... . Nǐ de tóngxué xǐhuan yùndòng ....... dúshū? Nǐ ....... ?",
    "Teman sekelasku Xiao Ma suka berolahraga. Setiap hari dia pergi ke lapangan untuk bermain bola, juga suka berlari. Dia tidak suka menonton TV, dia suka mendengarkan musik. Apakah temanmu suka berolahraga atau membaca buku? Kalau kamu?",
  ),
  paragraph(
    "Lengkapi paragraf tentang keluarga seorang guru berikut!",
    [
      "我是老师，我每天都很忙。晚上我.......读书，我丈夫看.......。我们的女儿玩游戏，也看电影。我们的儿子喜欢听.......。你们家晚上.......？",
    ],
    [
      { id: 1, answer: "经常", extras: ["呢", "音乐"] },
      { id: 2, answer: "电视", extras: ["音乐", "呢"] },
      { id: 3, answer: "音乐", extras: ["电视", "游戏"] },
      { id: 4, answer: "呢", extras: ["还是", "经常"] },
    ],
    "Wǒ shì lǎoshī, wǒ měi tiān dōu hěn máng. Wǎnshang wǒ ....... dúshū, wǒ zhàngfu kàn ....... . Wǒmen de nǚ'ér wán yóuxì, yě kàn diànyǐng. Wǒmen de érzi xǐhuan tīng ....... . Nǐmen jiā wǎnshang ....... ?",
    "Saya seorang guru, setiap hari saya sangat sibuk. Malam hari saya sering membaca buku, suamiku menonton TV. Putri kami bermain game, juga menonton film. Putra kami suka mendengarkan musik. Bagaimana dengan keluargamu pada malam hari?",
  ),
  paragraph(
    "Lengkapi paragraf tentang teman asal Korea berikut!",
    [
      "我的朋友金明是韩国人。他喜欢看.......，也喜欢听音乐。他.......去电影院，每个周末都去。他不喜欢运动，也不玩游戏。你的朋友喜欢看电影.......听音乐？你.......？",
    ],
    [
      { id: 1, answer: "电影", extras: ["音乐", "呢"] },
      { id: 2, answer: "经常", extras: ["呢", "游戏"] },
      { id: 3, answer: "还是", extras: ["呢", "经常"] },
      { id: 4, answer: "呢", extras: ["还是", "经常"] },
    ],
    "Wǒ de péngyou Jīn Míng shì Hánguó rén. Tā xǐhuan kàn ....... , yě xǐhuan tīng yīnyuè. Tā ....... qù diànyǐngyuàn, měi ge zhōumò dōu qù. Tā bù xǐhuan yùndòng, yě bù wán yóuxì. Nǐ de péngyou xǐhuan kàn diànyǐng ....... tīng yīnyuè? Nǐ ....... ?",
    "Temanku Jin Ming orang Korea. Dia suka menonton film, juga suka mendengarkan musik. Dia sering pergi ke bioskop, setiap akhir pekan pergi. Dia tidak suka berolahraga, juga tidak bermain game. Apakah temanmu suka menonton film atau mendengarkan musik? Kalau kamu?",
  ),
  paragraph(
    "Lengkapi percakapan tentang membaca buku berikut!",
    [
      "A：你在做什么？B：我在.......书。A：你喜欢看书吗？B：喜欢，我.......去图书馆。你.......？A：我喜欢听音乐，也喜欢运动。B：你喜欢听音乐.......看电影？",
    ],
    [
      { id: 1, answer: "读", extras: ["打球", "电影"] },
      { id: 2, answer: "经常", extras: ["呢", "游戏"] },
      { id: 3, answer: "呢", extras: ["还是", "经常"] },
      { id: 4, answer: "还是", extras: ["呢", "经常"] },
    ],
    "A: Nǐ zài zuò shénme? B: Wǒ zài ....... shū. A: Nǐ xǐhuan kàn shū ma? B: Xǐhuan, wǒ ....... qù túshūguǎn. Nǐ ....... ? A: Wǒ xǐhuan tīng yīnyuè, yě xǐhuan yùndòng. B: Nǐ xǐhuan tīng yīnyuè ....... kàn diànyǐng?",
    "A: Kamu sedang apa? B: Saya sedang membaca buku. A: Apakah kamu suka membaca buku? B: Suka, saya sering pergi ke perpustakaan. Kalau kamu? A: Saya suka mendengarkan musik, juga suka berolahraga. B: Apakah kamu suka mendengarkan musik atau menonton film?",
  ),
  paragraph(
    "Lengkapi paragraf tentang dua anak berikut!",
    [
      "我有两个孩子。我儿子五岁，他爱看.......。他每天都看，.......爱听音乐。我女儿十岁，她每天去球场.......。你的孩子喜欢看电视.......玩游戏？",
    ],
    [
      { id: 1, answer: "电视", extras: ["音乐", "呢"] },
      { id: 2, answer: "也", extras: ["呢", "游戏"] },
      { id: 3, answer: "打球", extras: ["音乐", "电视"] },
      { id: 4, answer: "还是", extras: ["呢", "经常"] },
    ],
    "Wǒ yǒu liǎng ge háizi. Wǒ érzi wǔ suì, tā ài kàn ....... . Tā měi tiān dōu kàn, ....... ài tīng yīnyuè. Wǒ nǚ'ér shí suì, tā měi tiān qù qiúchǎng ....... . Nǐ de háizi xǐhuan kàn diànshì ....... wán yóuxì?",
    "Saya punya dua anak. Putraku berusia lima tahun, dia suka menonton TV. Dia menonton setiap hari, juga suka mendengarkan musik. Putriku berusia sepuluh tahun, setiap hari dia pergi ke lapangan untuk bermain bola. Apakah anakmu suka menonton TV atau bermain game?",
  ),
  paragraph(
    "Lengkapi paragraf tentang rencana akhir pekan berikut!",
    [
      "周末我不去学校。早上我读书，下午我和朋友打球。晚上我们.......去电影院，我们喜欢看.......。我朋友.......喜欢听音乐。你喜欢看电影.......玩游戏？",
    ],
    [
      { id: 1, answer: "经常", extras: ["呢", "游戏"] },
      { id: 2, answer: "电影", extras: ["音乐", "呢"] },
      { id: 3, answer: "也", extras: ["呢", "游戏"] },
      { id: 4, answer: "还是", extras: ["呢", "经常"] },
    ],
    "Zhōumò wǒ bú qù xuéxiào. Zǎoshang wǒ dúshū, xiàwǔ wǒ hé péngyou dǎqiú. Wǎnshang wǒmen ....... qù diànyǐngyuàn, wǒmen xǐhuan kàn ....... . Wǒ péngyou ....... xǐhuan tīng yīnyuè. Nǐ xǐhuan kàn diànyǐng ....... wán yóuxì?",
    "Akhir pekan saya tidak pergi ke sekolah. Pagi hari saya membaca buku, sore saya bermain bola dengan teman. Malam hari kami sering pergi ke bioskop, kami suka menonton film. Temanku juga suka mendengarkan musik. Apakah kamu suka menonton film atau bermain game?",
  ),
  paragraph(
    "Lengkapi percakapan perkenalan berikut!",
    [
      "A：你好！我叫大卫，你.......？B：我叫小英。你喜欢什么？A：我喜欢看电影，也喜欢听.......。你喜欢运动.......玩游戏？B：我喜欢运动，我.......打球。",
    ],
    [
      { id: 1, answer: "呢", extras: ["还是", "经常"] },
      { id: 2, answer: "音乐", extras: ["电视", "游戏"] },
      { id: 3, answer: "还是", extras: ["呢", "也"] },
      { id: 4, answer: "经常", extras: ["呢", "听"] },
    ],
    "A: Nǐ hǎo! Wǒ jiào Dàwèi, nǐ ....... ? B: Wǒ jiào Xiǎoyīng. Nǐ xǐhuan shénme? A: Wǒ xǐhuan kàn diànyǐng, yě xǐhuan tīng ....... . Nǐ xǐhuan yùndòng ....... wán yóuxì? B: Wǒ xǐhuan yùndòng, wǒ ....... dǎqiú.",
    "A: Halo! Nama saya David, kalau kamu? B: Nama saya Xiaoying. Kamu suka apa? A: Saya suka menonton film, juga suka mendengarkan musik. Apakah kamu suka berolahraga atau bermain game? B: Saya suka berolahraga, saya sering bermain bola.",
  ),
];

export const u9_lessons: Lesson[] = [
  {
    id: "u9_l1",
    title: "U9 L1",
    exercises: u9_sentences,
  },
  {
    id: "u9_l2",
    title: "U9 L2",
    exercises: u9_paragraphs,
  },
];
