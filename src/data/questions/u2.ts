import type { Lesson } from "@/data/course";
import { paragraph, sentence } from "@/data/questions/helpers";

const u2_sentences = [
  sentence(
    "Ini teman saya.",
    ["这", "是", "我", "的", "朋友"],
    ["那", "老板", "谁"],
  ),
  sentence(
    "Itu bos saya.",
    ["那", "是", "我", "的", "老板"],
    ["这", "同事", "吗"],
  ),
  sentence(
    "Ini pacar saya.",
    ["这", "是", "我", "的", "男朋友"],
    ["那", "女朋友", "不"],
  ),
  sentence(
    "Itu pacar saya.",
    ["那", "是", "我", "的", "女朋友"],
    ["这", "同学", "谁"],
  ),
  sentence(
    "Ini rekan kerja saya.",
    ["这", "是", "我", "的", "同事"],
    ["那", "室友", "你"],
  ),
  sentence(
    "Itu tetangga saya.",
    ["那", "是", "我", "的", "邻居"],
    ["这", "网友", "她"],
  ),
  sentence(
    "Ini teman sekamar saya.",
    ["这", "是", "我", "的", "室友"],
    ["那", "老师", "他"],
  ),
  sentence(
    "Itu teman online saya.",
    ["那", "是", "我", "的", "网友"],
    ["这", "学生", "们"],
  ),
  sentence(
    "Mereka adalah teman-teman saya.",
    ["他们", "是", "我", "的", "朋友", "们"],
    ["这", "老板", "吗"],
  ),
  sentence(
    "Mereka adalah teman sekelas.",
    ["他们", "是", "同学", "们"],
    ["那", "室友", "不"],
  ),
  sentence(
    "Mereka adalah guru-guru.",
    ["他们", "是", "老师", "们"],
    ["那", "学生", "谁"],
  ),
  sentence(
    "Mereka adalah dokter-dokter.",
    ["他们", "是", "医生", "们"],
    ["这", "同事", "我"],
  ),
  sentence(
    "Mereka adalah siswa-siswa.",
    ["他们", "是", "学生", "们"],
    ["那", "邻居", "吗"],
  ),
  sentence(
    "Mereka adalah orang Amerika.",
    ["他们", "是", "美国", "人"],
    ["这", "中国", "不"],
  ),
  sentence(
    "Mereka adalah orang Tiongkok.",
    ["他们", "是", "中国", "人"],
    ["那", "同学", "谁"],
  ),
  sentence("Siapa itu?", ["那", "是", "谁"], ["这", "我", "吗"]),
  sentence("Siapa ini?", ["这", "是", "谁"], ["那", "你", "不"]),
  sentence("Siapa kamu?", ["你", "是", "谁"], ["这", "他", "吗"]),
  sentence("Siapa dia (laki-laki)?", ["他", "是", "谁"], ["那", "学生", "们"]),
  sentence(
    "Siapa teman kamu?",
    ["你", "的", "朋友", "是", "谁"],
    ["那", "老板", "吗"],
  ),
  sentence(
    "Siapa bos kamu?",
    ["你", "的", "老板", "是", "谁"],
    ["这", "同学", "不"],
  ),
  sentence(
    "Siapa guru kamu?",
    ["你", "的", "老师", "是", "谁"],
    ["那", "室友", "们"],
  ),
  sentence(
    "Siapa tetangga kamu?",
    ["你", "的", "邻居", "是", "谁"],
    ["这", "网友", "吗"],
  ),
  sentence(
    "Ini buku saya.",
    ["这", "是", "我", "的", "书"],
    ["那", "谁", "不"],
  ),
  sentence(
    "Itu nama saya.",
    ["那", "是", "我", "的", "名字"],
    ["这", "们", "吗"],
  ),
  sentence(
    "Ini bukan teman saya.",
    ["这", "不", "是", "我", "的", "朋友"],
    ["那", "老板", "谁"],
  ),
  sentence(
    "Itu bukan bos saya.",
    ["那", "不", "是", "我", "的", "老板"],
    ["这", "同事", "吗"],
  ),
  sentence(
    "Saya adalah teman mereka.",
    ["我", "是", "他们", "的", "朋友"],
    ["那", "谁", "不"],
  ),
  sentence(
    "Siapa nama kamu?",
    ["你", "叫", "什么", "名字"],
    ["谁", "那", "吗"],
  ),
  sentence(
    "Mereka adalah teman sekamar saya.",
    ["他们", "是", "我", "的", "室友", "们"],
    ["这", "老师", "吗"],
  ),
  sentence(
    "Ini adalah rekan kerja kami.",
    ["这", "是", "我们", "的", "同事"],
    ["那", "学生", "谁"],
  ),
  sentence(
    "Itu adalah rekan kerja mereka.",
    ["那", "是", "他们", "的", "同事"],
    ["这", "朋友", "不"],
  ),
];

const u2_paragraphs = [
  paragraph(
    "Lengkapi paragraf tentang teman sekamar berikut!",
    [
      "你好！我叫小马。.......是我的室友小红，她是中国人。小红.......男朋友是美国人。我的同学.......都认识他。你的室友是.......？",
    ],
    [
      { id: 1, answer: "这", extras: ["们", "的"] },
      { id: 2, answer: "的", extras: ["们", "谁"] },
      { id: 3, answer: "们", extras: ["的", "这"] },
      { id: 4, answer: "谁", extras: ["们", "的"] },
    ],
    "Nǐ hǎo! Wǒ jiào Xiǎo Mǎ. ....... shì wǒ de shìyǒu Xiǎohóng, tā shì Zhōngguó rén. Xiǎohóng ....... nánpéngyou shì Měiguó rén. Wǒ de tóngxué ....... dōu rènshi tā. Nǐ de shìyǒu shì ....... ?",
    "Halo! Nama saya Xiao Ma. Ini teman sekamarku, Xiaohong, dia orang Tiongkok. Pacar laki-laki Xiaohong adalah orang Amerika. Teman-teman sekelasku semua mengenalnya. Siapa teman sekamarmu?",
  ),
  paragraph(
    "Lengkapi paragraf tentang tempat kerja berikut!",
    [
      "我在公司工作。.......是我的老板，他叫王明。小李是我的同事，他是美国人。我的同事.......都很好，我们.......老板也很好。你的老板是.......？",
    ],
    [
      { id: 1, answer: "那", extras: ["们", "的"] },
      { id: 2, answer: "们", extras: ["的", "这"] },
      { id: 3, answer: "的", extras: ["们", "谁"] },
      { id: 4, answer: "谁", extras: ["们", "的"] },
    ],
    "Wǒ zài gōngsī gōngzuò. ....... shì wǒ de lǎobǎn, tā jiào Wáng Míng. Xiǎo Lǐ shì wǒ de tóngshì, tā shì Měiguó rén. Wǒ de tóngshì ....... dōu hěn hǎo, wǒmen ....... lǎobǎn yě hěn hǎo. Nǐ de lǎobǎn shì ....... ?",
    "Saya bekerja di perusahaan. Itu bosku, namanya Wang Ming. Xiao Li adalah rekan kerjaku, dia orang Amerika. Rekan-rekan kerjaku semuanya baik, bos kami juga baik. Siapa bosmu?",
  ),
  paragraph(
    "Lengkapi paragraf tentang tetangga berikut!",
    [
      "你好！我住在北京。我的邻居叫大卫，他是美国人。.......是他的女朋友，她叫小英。我们是好朋友，朋友.......都喜欢喝茶。小英.......同学也是我的朋友。你的邻居是.......？",
    ],
    [
      { id: 1, answer: "这", extras: ["们", "的"] },
      { id: 2, answer: "们", extras: ["的", "这"] },
      { id: 3, answer: "的", extras: ["谁", "们"] },
      { id: 4, answer: "谁", extras: ["们", "的"] },
    ],
    "Nǐ hǎo! Wǒ zhù zài Běijīng. Wǒ de línjū jiào Dàwèi, tā shì Měiguó rén. ....... shì tā de nǚpéngyou, tā jiào Xiǎoyīng. Wǒmen shì hǎo péngyou, péngyou ....... dōu xǐhuan hē chá. Xiǎoyīng ....... tóngxué yě shì wǒ de péngyou. Nǐ de línjū shì ....... ?",
    "Halo! Saya tinggal di Beijing. Tetanggaku bernama David, dia orang Amerika. Ini pacar perempuannya, namanya Xiaoying. Kami teman baik, teman-teman semua suka minum teh. Teman sekelas Xiaoying juga temanku. Siapa tetanggamu?",
  ),
  paragraph(
    "Lengkapi paragraf tentang teman online berikut!",
    [
      "我有一个网友，他叫小海。小海是中国人，他是老师。我的同学.......都认识他。.......是他的学校，学校很大。小海.......学生都喜欢他。你的网友是.......？",
    ],
    [
      { id: 1, answer: "们", extras: ["的", "那"] },
      { id: 2, answer: "那", extras: ["们", "的"] },
      { id: 3, answer: "的", extras: ["们", "谁"] },
      { id: 4, answer: "谁", extras: ["们", "的"] },
    ],
    "Wǒ yǒu yí ge wǎngyǒu, tā jiào Xiǎohǎi. Xiǎohǎi shì Zhōngguó rén, tā shì lǎoshī. Wǒ de tóngxué ....... dōu rènshi tā. ....... shì tā de xuéxiào, xuéxiào hěn dà. Xiǎohǎi ....... xuésheng dōu xǐhuan tā. Nǐ de wǎngyǒu shì ....... ?",
    "Saya punya seorang teman online, namanya Xiaohai. Xiaohai orang Tiongkok, dia guru. Teman-teman sekelasku semua mengenalnya. Itu sekolahnya, sekolahnya sangat besar. Murid-murid Xiaohai semua menyukainya. Siapa teman onlinemu?",
  ),
  paragraph(
    "Lengkapi paragraf tentang pacar dan rekan kerja berikut!",
    [
      "我叫小红。我的男朋友叫大明，他是医生。.......是小李，他是大明的同事。大明的同事.......都很好。我.......朋友也都喜欢大明。你的男朋友是.......？",
    ],
    [
      { id: 1, answer: "那", extras: ["们", "的"] },
      { id: 2, answer: "们", extras: ["的", "这"] },
      { id: 3, answer: "的", extras: ["谁", "吗"] },
      { id: 4, answer: "谁", extras: ["们", "的"] },
    ],
    "Wǒ jiào Xiǎohóng. Wǒ de nánpéngyou jiào Dàmíng, tā shì yīshēng. ....... shì Xiǎo Lǐ, tā shì Dàmíng de tóngshì. Dàmíng de tóngshì ....... dōu hěn hǎo. Wǒ ....... péngyou yě dōu xǐhuan Dàmíng. Nǐ de nánpéngyou shì ....... ?",
    "Nama saya Xiaohong. Pacar priaku bernama Daming, dia dokter. Itu Xiao Li, dia rekan kerja Daming. Rekan-rekan kerja Daming semuanya baik. Teman-temanku juga semua menyukai Daming. Siapa pacarmu?",
  ),
  paragraph(
    "Lengkapi paragraf tentang kelas bahasa Mandarin berikut!",
    [
      "你好！我在学校学习汉语。我的老师叫王丽，她是中国人。我的同学.......都是美国人。.......是我的同学小明，他是我的室友。小明.......女朋友也是我们的同学。你的室友是.......？",
    ],
    [
      { id: 1, answer: "们", extras: ["的", "这"] },
      { id: 2, answer: "那", extras: ["们", "的"] },
      { id: 3, answer: "的", extras: ["们", "谁"] },
      { id: 4, answer: "谁", extras: ["们", "的"] },
    ],
    "Nǐ hǎo! Wǒ zài xuéxiào xuéxí Hànyǔ. Wǒ de lǎoshī jiào Wáng Lì, tā shì Zhōngguó rén. Wǒ de tóngxué ....... dōu shì Měiguó rén. ....... shì wǒ de tóngxué Xiǎomíng, tā shì wǒ de shìyǒu. Xiǎomíng ....... nǚpéngyou yě shì wǒmen de tóngxué. Nǐ de shìyǒu shì ....... ?",
    "Halo! Saya belajar bahasa Mandarin di sekolah. Guruku bernama Wang Li, dia orang Tiongkok. Teman-teman sekelasku semuanya orang Amerika. Itu teman sekelasku Xiaoming, dia teman sekamarku. Pacar perempuan Xiaoming juga teman sekelas kami. Siapa teman sekamarmu?",
  ),
  paragraph(
    "Lengkapi paragraf tentang kunjungan teman berikut!",
    [
      "今天我在家，我的朋友来我家。.......是我的邻居小马，他是老师。小英是小马.......女朋友。我的朋友.......都喜欢她。.......是你的室友？",
    ],
    [
      { id: 1, answer: "这", extras: ["们", "的"] },
      { id: 2, answer: "的", extras: ["们", "这"] },
      { id: 3, answer: "们", extras: ["的", "这"] },
      { id: 4, answer: "谁", extras: ["们", "的"] },
    ],
    "Jīntiān wǒ zài jiā, wǒ de péngyou lái wǒ jiā. ....... shì wǒ de línjū Xiǎo Mǎ, tā shì lǎoshī. Xiǎoyīng shì Xiǎo Mǎ ....... nǚpéngyou. Wǒ de péngyou ....... dōu xǐhuan tā. ....... shì nǐ de shìyǒu?",
    "Hari ini saya di rumah, temanku datang ke rumahku. Ini tetanggaku Xiao Ma, dia guru. Xiaoying adalah pacar perempuan Xiao Ma. Teman-temanku semua menyukainya. Siapa teman sekamarmu?",
  ),
  paragraph(
    "Lengkapi paragraf tentang makan di restoran berikut!",
    [
      "我和朋友在饭馆吃饭。你.......好！这是我的室友小李，.......是我的同事小王。小王.......老板也在这儿。你的同事是.......？",
    ],
    [
      { id: 1, answer: "们", extras: ["吗", "谁"] },
      { id: 2, answer: "那", extras: ["们", "的"] },
      { id: 3, answer: "的", extras: ["们", "谁"] },
      { id: 4, answer: "谁", extras: ["们", "这"] },
    ],
    "Wǒ hé péngyou zài fànguǎn chī fàn. Nǐ ....... hǎo! Zhè shì wǒ de shìyǒu Xiǎo Lǐ, ....... shì wǒ de tóngshì Xiǎo Wáng. Xiǎo Wáng ....... lǎobǎn yě zài zhèr. Nǐ de tóngshì shì ....... ?",
    "Saya dan teman makan di restoran. Halo, kalian semua! Ini teman sekamarku Xiao Li, itu rekan kerjaku Xiao Wang. Bos Xiao Wang juga ada di sini. Siapa rekan kerjamu?",
  ),
  paragraph(
    "Lengkapi paragraf perkenalan murid baru berikut!",
    [
      "你好！我是学生，我叫马丽。我是美国人，我的朋友.......都是中国人。.......是我.......汉语老师，他叫王明。那是我的室友小红。你们的老师是.......？",
    ],
    [
      { id: 1, answer: "们", extras: ["的", "这"] },
      { id: 2, answer: "这", extras: ["们", "的"] },
      { id: 3, answer: "的", extras: ["谁", "吗"] },
      { id: 4, answer: "谁", extras: ["们", "的"] },
    ],
    "Nǐ hǎo! Wǒ shì xuésheng, wǒ jiào Mǎ Lì. Wǒ shì Měiguó rén, wǒ de péngyou ....... dōu shì Zhōngguó rén. ....... shì wǒ ....... Hànyǔ lǎoshī, tā jiào Wáng Míng. Nà shì wǒ de shìyǒu Xiǎohóng. Nǐmen de lǎoshī shì ....... ?",
    "Halo! Saya siswa, nama saya Ma Li. Saya orang Amerika, teman-temanku semuanya orang Tiongkok. Ini guru bahasa Mandarinku, namanya Wang Ming. Itu teman sekamarku, Xiaohong. Siapa guru kalian?",
  ),
  paragraph(
    "Lengkapi paragraf tentang teman serumah dan tetangga berikut!",
    [
      "你好！我有两个室友，他们都是学生。我的室友.......都喜欢喝茶。那是我.......邻居，他是老师。.......是我的同学，他叫小明。你的邻居是.......？",
    ],
    [
      { id: 1, answer: "们", extras: ["的", "这"] },
      { id: 2, answer: "的", extras: ["谁", "吗"] },
      { id: 3, answer: "这", extras: ["们", "的"] },
      { id: 4, answer: "谁", extras: ["们", "的"] },
    ],
    "Nǐ hǎo! Wǒ yǒu liǎng ge shìyǒu, tāmen dōu shì xuésheng. Wǒ de shìyǒu ....... dōu xǐhuan hē chá. Nà shì wǒ ....... línjū, tā shì lǎoshī. ....... shì wǒ de tóngxué, tā jiào Xiǎomíng. Nǐ de línjū shì ....... ?",
    "Halo! Saya punya dua teman sekamar, mereka semua siswa. Teman-teman sekamarku semua suka minum teh. Itu tetanggaku, dia guru. Ini teman sekelasku, namanya Xiaoming. Siapa tetanggamu?",
  ),
  paragraph(
    "Lengkapi paragraf tentang teman sekamar berikut!",
    [
      "我叫小海，我在北京学习汉语。我和我的.......住在一起，他是美国人。我爱小红，她是我的.......。.......是我们的学校，学校很大。你的同学是.......？",
    ],
    [
      { id: 1, answer: "室友", extras: ["们", "这"] },
      { id: 2, answer: "女朋友", extras: ["们", "谁"] },
      { id: 3, answer: "这", extras: ["们", "谁"] },
      { id: 4, answer: "谁", extras: ["们", "这"] },
    ],
    "Wǒ jiào Xiǎohǎi, wǒ zài Běijīng xuéxí Hànyǔ. Wǒ hé wǒ de ....... zhù zài yìqǐ, tā shì Měiguó rén. Wǒ ài Xiǎohóng, tā shì wǒ de ....... . ....... shì wǒmen de xuéxiào, xuéxiào hěn dà. Nǐ de tóngxué shì ....... ?",
    "Nama saya Xiaohai, saya belajar bahasa Mandarin di Beijing. Saya tinggal bersama teman sekamarku, dia orang Amerika. Saya mencintai Xiaohong, dia pacar perempuanku. Ini sekolah kami, sekolahnya besar. Siapa teman sekelasmu?",
  ),
  paragraph(
    "Lengkapi paragraf tentang tempat kerja berikut!",
    [
      "我在公司工作。我的.......叫小李，我们每天一起工作。我们的.......叫王明，他很好。.......是我们的公司，公司很大。我的朋友.......都喜欢喝茶。",
    ],
    [
      { id: 1, answer: "同事", extras: ["们", "谁"] },
      { id: 2, answer: "老板", extras: ["们", "这"] },
      { id: 3, answer: "那", extras: ["们", "谁"] },
      { id: 4, answer: "们", extras: ["这", "那"] },
    ],
    "Wǒ zài gōngsī gōngzuò. Wǒ de ....... jiào Xiǎo Lǐ, wǒmen měi tiān yìqǐ gōngzuò. Wǒmen de ....... jiào Wáng Míng, tā hěn hǎo. ....... shì wǒmen de gōngsī, gōngsī hěn dà. Wǒ de péngyou ....... dōu xǐhuan hē chá.",
    "Saya bekerja di perusahaan. Rekan kerjaku bernama Xiao Li, kami bekerja bersama setiap hari. Bos kami bernama Wang Ming, dia sangat baik. Itu perusahaan kami, perusahaannya besar. Teman-temanku semua suka minum teh.",
  ),
  paragraph(
    "Lengkapi paragraf tentang teman online berikut!",
    [
      "我有一个.......，他住在美国，我们在网上认识。我的.......小明也认识他。小明的朋友.......都很喜欢他。你的朋友是.......？今天我们一起吃饭。",
    ],
    [
      { id: 1, answer: "网友", extras: ["们", "这"] },
      { id: 2, answer: "同学", extras: ["们", "谁"] },
      { id: 3, answer: "们", extras: ["这", "那"] },
      { id: 4, answer: "谁", extras: ["们", "这"] },
    ],
    "Wǒ yǒu yí ge ....... , tā zhù zài Měiguó, wǒmen zài wǎngshàng rènshi. Wǒ de ....... Xiǎomíng yě rènshi tā. Xiǎomíng de péngyou ....... dōu hěn xǐhuan tā. Nǐ de péngyou shì ....... ? Jīntiān wǒmen yìqǐ chī fàn.",
    "Saya punya seorang teman online, dia tinggal di Amerika, kami berkenalan lewat internet. Teman sekelasku Xiaoming juga mengenalnya. Teman-teman Xiaoming semuanya sangat menyukainya. Siapa temanmu? Hari ini kami makan bersama.",
  ),
  paragraph(
    "Lengkapi paragraf tentang tetangga dan pacar berikut!",
    [
      "我的.......住在我家旁边，她叫小英。小英的.......是医生，他叫大明。.......是大明的医院，医院很大。小英的朋友.......都很好。",
    ],
    [
      { id: 1, answer: "邻居", extras: ["们", "谁"] },
      { id: 2, answer: "男朋友", extras: ["们", "这"] },
      { id: 3, answer: "那", extras: ["们", "谁"] },
      { id: 4, answer: "们", extras: ["这", "那"] },
    ],
    "Wǒ de ....... zhù zài wǒ jiā pángbiān, tā jiào Xiǎoyīng. Xiǎoyīng de ....... shì yīshēng, tā jiào Dàmíng. ....... shì Dàmíng de yīyuàn, yīyuàn hěn dà. Xiǎoyīng de péngyou ....... dōu hěn hǎo.",
    "Tetanggaku tinggal di sebelah rumahku, namanya Xiaoying. Pacar laki-laki Xiaoying adalah dokter, namanya Daming. Itu rumah sakit Daming, rumah sakitnya besar. Teman-teman Xiaoying semuanya baik.",
  ),
  paragraph(
    "Lengkapi paragraf tentang pacar dan bos berikut!",
    [
      "我叫大明，我是医生。我爱小红，她是我的.......，她是老师。我的.......也是小红的朋友，他很好。.......是我们的医院，医院很大。你的同事是.......？",
    ],
    [
      { id: 1, answer: "女朋友", extras: ["们", "谁"] },
      { id: 2, answer: "老板", extras: ["们", "这"] },
      { id: 3, answer: "那", extras: ["们", "谁"] },
      { id: 4, answer: "谁", extras: ["们", "这"] },
    ],
    "Wǒ jiào Dàmíng, wǒ shì yīshēng. Wǒ ài Xiǎohóng, tā shì wǒ de ....... , tā shì lǎoshī. Wǒ de ....... yě shì Xiǎohóng de péngyou, tā hěn hǎo. ....... shì wǒmen de yīyuàn, yīyuàn hěn dà. Nǐ de tóngshì shì ....... ?",
    "Nama saya Daming, saya dokter. Saya mencintai Xiaohong, dia pacar perempuanku, dia guru. Bosku juga teman Xiaohong, dia sangat baik. Itu rumah sakit kami, rumah sakitnya besar. Siapa rekan kerjamu?",
  ),
  paragraph(
    "Lengkapi paragraf tentang kelas bahasa Mandarin berikut!",
    [
      "我是学生，我叫小马。我的.......叫小英，我们在一个班学习汉语。.......是我们的学校，学校很大。我们的老师是中国人，我的朋友.......都喜欢他。小红在饭馆工作，她的.......也是中国人。",
    ],
    [
      { id: 1, answer: "同学", extras: ["们", "谁"] },
      { id: 2, answer: "这", extras: ["们", "谁"] },
      { id: 3, answer: "们", extras: ["这", "那"] },
      { id: 4, answer: "老板", extras: ["们", "那"] },
    ],
    "Wǒ shì xuésheng, wǒ jiào Xiǎo Mǎ. Wǒ de ....... jiào Xiǎoyīng, wǒmen zài yí ge bān xuéxí Hànyǔ. ....... shì wǒmen de xuéxiào, xuéxiào hěn dà. Wǒmen de lǎoshī shì Zhōngguó rén, wǒ de péngyou ....... dōu xǐhuan tā. Xiǎohóng zài fànguǎn gōngzuò, tā de ....... yě shì Zhōngguó rén.",
    "Saya siswa, nama saya Xiao Ma. Teman sekelasku bernama Xiaoying, kami belajar bahasa Mandarin di kelas yang sama. Ini sekolah kami, sekolahnya besar. Guru kami orang Tiongkok, teman-temanku semua menyukainya. Xiaohong bekerja di restoran, bosnya juga orang Tiongkok.",
  ),
  paragraph(
    "Lengkapi paragraf tentang teman online dan tetangga berikut!",
    [
      "我有一个.......，她住在中国，我们在网上认识。我的.......住在我家旁边，他是医生。.......是我的家，我家不大。你的朋友是.......？",
    ],
    [
      { id: 1, answer: "网友", extras: ["们", "这"] },
      { id: 2, answer: "邻居", extras: ["们", "谁"] },
      { id: 3, answer: "那", extras: ["们", "谁"] },
      { id: 4, answer: "谁", extras: ["们", "这"] },
    ],
    "Wǒ yǒu yí ge ....... , tā zhù zài Zhōngguó, wǒmen zài wǎngshàng rènshi. Wǒ de ....... zhù zài wǒ jiā pángbiān, tā shì yīshēng. ....... shì wǒ de jiā, wǒ jiā bú dà. Nǐ de péngyou shì ....... ?",
    "Saya punya seorang teman online, dia tinggal di Tiongkok, kami berkenalan lewat internet. Tetanggaku tinggal di sebelah rumahku, dia dokter. Itu rumahku, rumahku tidak besar. Siapa temanmu?",
  ),
  paragraph(
    "Lengkapi paragraf tentang guru dan rekan kerja berikut!",
    [
      "我叫小英，我是老师。我的.......叫大卫，他是美国人，我爱他。我的.......也是老师，她叫小王。我们的朋友.......都在学校工作。.......是我们的学校。",
    ],
    [
      { id: 1, answer: "男朋友", extras: ["们", "这"] },
      { id: 2, answer: "同事", extras: ["们", "谁"] },
      { id: 3, answer: "们", extras: ["这", "那"] },
      { id: 4, answer: "这", extras: ["们", "谁"] },
    ],
    "Wǒ jiào Xiǎoyīng, wǒ shì lǎoshī. Wǒ de ....... jiào Dàwèi, tā shì Měiguó rén, wǒ ài tā. Wǒ de ....... yě shì lǎoshī, tā jiào Xiǎo Wáng. Wǒmen de péngyou ....... dōu zài xuéxiào gōngzuò. ....... shì wǒmen de xuéxiào.",
    "Nama saya Xiaoying, saya guru. Pacar laki-lakiku bernama David, dia orang Amerika, saya mencintainya. Rekan kerjaku juga guru, dia bernama Xiao Wang. Teman-teman kami semua bekerja di sekolah. Ini sekolah kami.",
  ),
  paragraph(
    "Lengkapi paragraf tentang restoran berikut!",
    [
      "我有两个.......，他们都是学生。我们住在一起，我们是好朋友。我的朋友小李在饭馆工作，他的.......是美国人。.......是小李的饭馆，饭馆不大。你的朋友是.......？",
    ],
    [
      { id: 1, answer: "室友", extras: ["们", "这"] },
      { id: 2, answer: "老板", extras: ["们", "谁"] },
      { id: 3, answer: "那", extras: ["们", "谁"] },
      { id: 4, answer: "谁", extras: ["们", "这"] },
    ],
    "Wǒ yǒu liǎng ge ....... , tāmen dōu shì xuésheng. Wǒmen zhù zài yìqǐ, wǒmen shì hǎo péngyou. Wǒ de péngyou Xiǎo Lǐ zài fànguǎn gōngzuò, tā de ....... shì Měiguó rén. ....... shì Xiǎo Lǐ de fànguǎn, fànguǎn bú dà. Nǐ de péngyou shì ....... ?",
    "Saya punya dua teman sekamar, mereka semua siswa. Kami tinggal bersama, kami teman baik. Temanku Xiao Li bekerja di restoran, bosnya orang Amerika. Itu restoran Xiao Li, restorannya tidak besar. Siapa temanmu?",
  ),
  paragraph(
    "Lengkapi paragraf tentang teman baik berikut!",
    [
      "你好！我叫马丽，我是学生。我有很多好.......，他们都喜欢学习汉语。我的.......小王是中国人，我们在一个学校学习。.......是我们的学校，学校很大。我的老师.......都很好。",
    ],
    [
      { id: 1, answer: "朋友", extras: ["们", "这"] },
      { id: 2, answer: "同学", extras: ["们", "谁"] },
      { id: 3, answer: "这", extras: ["们", "谁"] },
      { id: 4, answer: "们", extras: ["这", "那"] },
    ],
    "Nǐ hǎo! Wǒ jiào Mǎ Lì, wǒ shì xuésheng. Wǒ yǒu hěn duō hǎo ....... , tāmen dōu xǐhuan xuéxí Hànyǔ. Wǒ de ....... Xiǎo Wáng shì Zhōngguó rén, wǒmen zài yí ge xuéxiào xuéxí. ....... shì wǒmen de xuéxiào, xuéxiào hěn dà. Wǒ de lǎoshī ....... dōu hěn hǎo.",
    "Halo! Nama saya Ma Li, saya siswa. Saya punya banyak teman baik, mereka semua suka belajar bahasa Mandarin. Teman sekelasku Xiao Wang orang Tiongkok, kami belajar di sekolah yang sama. Ini sekolah kami, sekolahnya besar. Guru-guruku semuanya baik.",
  ),
  paragraph(
    "Lengkapi paragraf tentang bos dan tetangga berikut!",
    [
      "我在饭馆工作。我的.......很好，他是美国人。我的.......住在饭馆旁边，他是中国人。他的朋友.......都来饭馆吃饭。你的同事是.......？",
    ],
    [
      { id: 1, answer: "老板", extras: ["们", "谁"] },
      { id: 2, answer: "邻居", extras: ["们", "这"] },
      { id: 3, answer: "们", extras: ["这", "那"] },
      { id: 4, answer: "谁", extras: ["们", "这"] },
    ],
    "Wǒ zài fànguǎn gōngzuò. Wǒ de ....... hěn hǎo, tā shì Měiguó rén. Wǒ de ....... zhù zài fànguǎn pángbiān, tā shì Zhōngguó rén. Tā de péngyou ....... dōu lái fànguǎn chī fàn. Nǐ de tóngshì shì ....... ?",
    "Saya bekerja di restoran. Bosku sangat baik, dia orang Amerika. Tetanggaku tinggal di sebelah restoran, dia orang Tiongkok. Teman-temannya semua datang makan ke restoran. Siapa rekan kerjamu?",
  ),
  paragraph(
    "Lengkapi paragraf tentang pekerjaan di rumah sakit berikut!",
    [
      "我叫大卫，我在北京工作。我的.......叫小红，她是中国人，我很爱她。我的.......叫王明，我们在一个医院工作。.......是我的医院，医院很大。你的老板是.......？",
    ],
    [
      { id: 1, answer: "女朋友", extras: ["们", "谁"] },
      { id: 2, answer: "同事", extras: ["们", "这"] },
      { id: 3, answer: "这", extras: ["们", "谁"] },
      { id: 4, answer: "谁", extras: ["们", "这"] },
    ],
    "Wǒ jiào Dàwèi, wǒ zài Běijīng gōngzuò. Wǒ de ....... jiào Xiǎohóng, tā shì Zhōngguó rén, wǒ hěn ài tā. Wǒ de ....... jiào Wáng Míng, wǒmen zài yí ge yīyuàn gōngzuò. ....... shì wǒ de yīyuàn, yīyuàn hěn dà. Nǐ de lǎobǎn shì ....... ?",
    "Nama saya David, saya bekerja di Beijing. Pacar perempuanku bernama Xiaohong, dia orang Tiongkok, saya sangat mencintainya. Rekan kerjaku bernama Wang Ming, kami bekerja di rumah sakit yang sama. Ini rumah sakitku, rumah sakitnya besar. Siapa bosmu?",
  ),
  paragraph(
    "Lengkapi paragraf tentang pacar dan teman online berikut!",
    [
      "我叫小红。我的.......叫大明，我爱他。我有一个.......，他住在美国，我们在网上认识。我的朋友.......都认识大明。.......是大明的学校，学校很大。",
    ],
    [
      { id: 1, answer: "男朋友", extras: ["们", "这"] },
      { id: 2, answer: "网友", extras: ["们", "谁"] },
      { id: 3, answer: "们", extras: ["这", "那"] },
      { id: 4, answer: "那", extras: ["们", "谁"] },
    ],
    "Wǒ jiào Xiǎohóng. Wǒ de ....... jiào Dàmíng, wǒ ài tā. Wǒ yǒu yí ge ....... , tā zhù zài Měiguó, wǒmen zài wǎngshàng rènshi. Wǒ de péngyou ....... dōu rènshi Dàmíng. ....... shì Dàmíng de xuéxiào, xuéxiào hěn dà.",
    "Nama saya Xiaohong. Pacar laki-lakiku bernama Daming, saya mencintainya. Saya punya seorang teman online, dia tinggal di Amerika, kami berkenalan lewat internet. Teman-temanku semua mengenal Daming. Itu sekolah Daming, sekolahnya besar.",
  ),
  paragraph(
    "Lengkapi paragraf tentang teman sekelas berikut!",
    [
      "我的.......叫小明，他是学生，我们在一个学校学习。小明的朋友在公司工作，他的.......是美国人。.......是小明的学校，学校很大。你的朋友是.......？今天我们一起吃饭。",
    ],
    [
      { id: 1, answer: "同学", extras: ["们", "这"] },
      { id: 2, answer: "老板", extras: ["们", "谁"] },
      { id: 3, answer: "这", extras: ["们", "谁"] },
      { id: 4, answer: "谁", extras: ["们", "这"] },
    ],
    "Wǒ de ....... jiào Xiǎomíng, tā shì xuésheng, wǒmen zài yí ge xuéxiào xuéxí. Xiǎomíng de péngyou zài gōngsī gōngzuò, tā de ....... shì Měiguó rén. ....... shì Xiǎomíng de xuéxiào, xuéxiào hěn dà. Nǐ de péngyou shì ....... ? Jīntiān wǒmen yìqǐ chī fàn.",
    "Teman sekelasku bernama Xiaoming, dia siswa, kami belajar di sekolah yang sama. Teman Xiaoming bekerja di perusahaan, bosnya orang Amerika. Ini sekolah Xiaoming, sekolahnya besar. Siapa temanmu? Hari ini kami makan bersama.",
  ),
  paragraph(
    "Lengkapi paragraf tentang perkenalan diri berikut!",
    [
      "你好！我叫王丽。我的.......是老师，她住在我家旁边。我的.......是医生，我们在医院工作。你的老师是.......？我的朋友.......都很好。",
    ],
    [
      { id: 1, answer: "邻居", extras: ["们", "谁"] },
      { id: 2, answer: "同事", extras: ["们", "这"] },
      { id: 3, answer: "谁", extras: ["们", "这"] },
      { id: 4, answer: "们", extras: ["这", "那"] },
    ],
    "Nǐ hǎo! Wǒ jiào Wáng Lì. Wǒ de ....... shì lǎoshī, tā zhù zài wǒ jiā pángbiān. Wǒ de ....... shì yīshēng, wǒmen zài yīyuàn gōngzuò. Nǐ de lǎoshī shì ....... ? Wǒ de péngyou ....... dōu hěn hǎo.",
    "Halo! Nama saya Wang Li. Tetanggaku adalah guru, dia tinggal di sebelah rumahku. Rekan kerjaku adalah dokter, kami bekerja di rumah sakit. Siapa gurumu? Teman-temanku semuanya baik.",
  ),
  paragraph(
    "Lengkapi paragraf tentang teman satu kamar berikut!",
    [
      "我叫小英，我住在学校。我的.......叫小红，我们住在一起，她是美国人。小红的.......叫大卫，他是医生，她很爱他。.......是小红的学校，学校很大。我的朋友.......都喜欢小红。",
    ],
    [
      { id: 1, answer: "室友", extras: ["们", "这"] },
      { id: 2, answer: "男朋友", extras: ["们", "谁"] },
      { id: 3, answer: "那", extras: ["们", "谁"] },
      { id: 4, answer: "们", extras: ["这", "那"] },
    ],
    "Wǒ jiào Xiǎoyīng, wǒ zhù zài xuéxiào. Wǒ de ....... jiào Xiǎohóng, wǒmen zhù zài yìqǐ, tā shì Měiguó rén. Xiǎohóng de ....... jiào Dàwèi, tā shì yīshēng, tā hěn ài tā. ....... shì Xiǎohóng de xuéxiào, xuéxiào hěn dà. Wǒ de péngyou ....... dōu xǐhuan Xiǎohóng.",
    "Nama saya Xiaoying, saya tinggal di sekolah. Teman sekamarku bernama Xiaohong, kami tinggal bersama, dia orang Amerika. Pacar laki-laki Xiaohong bernama David, dia dokter, Xiaohong sangat mencintainya. Itu sekolah Xiaohong, sekolahnya besar. Teman-temanku semua menyukai Xiaohong.",
  ),
  paragraph(
    "Lengkapi paragraf tentang teman internet dan teman sekelas berikut!",
    [
      "我有一个.......，他是中国人，我们在网上认识。我的.......也认识他，他叫小马。.......是小马的学校，学校很大。你的老师是.......？",
    ],
    [
      { id: 1, answer: "网友", extras: ["们", "这"] },
      { id: 2, answer: "同学", extras: ["们", "谁"] },
      { id: 3, answer: "这", extras: ["们", "谁"] },
      { id: 4, answer: "谁", extras: ["们", "这"] },
    ],
    "Wǒ yǒu yí ge ....... , tā shì Zhōngguó rén, wǒmen zài wǎngshàng rènshi. Wǒ de ....... yě rènshi tā, tā jiào Xiǎo Mǎ. ....... shì Xiǎo Mǎ de xuéxiào, xuéxiào hěn dà. Nǐ de lǎoshī shì ....... ?",
    "Saya punya seorang teman online, dia orang Tiongkok, kami berkenalan lewat internet. Teman sekelasku juga mengenalnya, dia bernama Xiao Ma. Ini sekolah Xiao Ma, sekolahnya besar. Siapa gurumu?",
  ),
  paragraph(
    "Lengkapi paragraf tentang makan di restoran berikut!",
    [
      "今天我和我的.......在饭馆吃饭。饭馆的.......是中国人，他很好。.......是我朋友的学校，学校很大。我们的同事.......也在这儿。",
    ],
    [
      { id: 1, answer: "朋友", extras: ["们", "这"] },
      { id: 2, answer: "老板", extras: ["们", "谁"] },
      { id: 3, answer: "那", extras: ["们", "谁"] },
      { id: 4, answer: "们", extras: ["这", "那"] },
    ],
    "Jīntiān wǒ hé wǒ de ....... zài fànguǎn chī fàn. Fànguǎn de ....... shì Zhōngguó rén, tā hěn hǎo. ....... shì wǒ péngyou de xuéxiào, xuéxiào hěn dà. Wǒmen de tóngshì ....... yě zài zhèr.",
    "Hari ini saya dan temanku makan di restoran. Bos restoran itu orang Tiongkok, dia sangat baik. Itu sekolah temanku, sekolahnya besar. Rekan-rekan kerja kami juga ada di sini.",
  ),
  paragraph(
    "Lengkapi paragraf tentang pacar dan tetangga berikut!",
    [
      "我叫大明，我是医生。我爱小红，她是我的.......。我的.......是美国人，他住在我家旁边。.......是我的医院，医院很大。你的朋友是.......？",
    ],
    [
      { id: 1, answer: "女朋友", extras: ["们", "谁"] },
      { id: 2, answer: "邻居", extras: ["们", "这"] },
      { id: 3, answer: "这", extras: ["们", "谁"] },
      { id: 4, answer: "谁", extras: ["们", "这"] },
    ],
    "Wǒ jiào Dàmíng, wǒ shì yīshēng. Wǒ ài Xiǎohóng, tā shì wǒ de ....... . Wǒ de ....... shì Měiguó rén, tā zhù zài wǒ jiā pángbiān. ....... shì wǒ de yīyuàn, yīyuàn hěn dà. Nǐ de péngyou shì ....... ?",
    "Nama saya Daming, saya dokter. Saya mencintai Xiaohong, dia pacar perempuanku. Tetanggaku orang Amerika, dia tinggal di sebelah rumahku. Ini rumah sakitku, rumah sakitnya besar. Siapa temanmu?",
  ),
  paragraph(
    "Lengkapi paragraf tentang sekolah dan teman serumah berikut!",
    [
      "我叫小王，我是老师。我的.......叫小李，我们在一个学校工作。我的.......叫小马，我们住在一起。.......是我的学校，学校不大。我的朋友.......都很好。",
    ],
    [
      { id: 1, answer: "同事", extras: ["们", "谁"] },
      { id: 2, answer: "室友", extras: ["们", "这"] },
      { id: 3, answer: "那", extras: ["们", "谁"] },
      { id: 4, answer: "们", extras: ["这", "那"] },
    ],
    "Wǒ jiào Xiǎo Wáng, wǒ shì lǎoshī. Wǒ de ....... jiào Xiǎo Lǐ, wǒmen zài yí ge xuéxiào gōngzuò. Wǒ de ....... jiào Xiǎo Mǎ, wǒmen zhù zài yìqǐ. ....... shì wǒ de xuéxiào, xuéxiào bú dà. Wǒ de péngyou ....... dōu hěn hǎo.",
    "Nama saya Xiao Wang, saya guru. Rekan kerjaku bernama Xiao Li, kami bekerja di sekolah yang sama. Teman sekamarku bernama Xiao Ma, kami tinggal bersama. Itu sekolahku, sekolahnya tidak besar. Teman-temanku semuanya baik.",
  ),
];

export const u2_lessons: Lesson[] = [
  {
    id: "u2_l1",
    title: "Kaliamat",
    exercises: u2_sentences,
  },
  {
    id: "u2_l2",
    title: "Paragraf",
    exercises: u2_paragraphs,
  },
];
