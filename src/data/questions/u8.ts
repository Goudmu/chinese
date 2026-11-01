import type { Lesson } from "@/data/course";
import { paragraph, sentence } from "./helpers";

const u8_sentences = [
  sentence("Saya makan daging.", ["我", "吃", "肉"], ["喝", "酒", "不"]),
  sentence(
    "Dia (laki-laki) makan telur.",
    ["他", "吃", "鸡蛋"],
    ["她", "喝", "肉"],
  ),
  sentence(
    "Dia (perempuan) makan kacang tanah.",
    ["她", "吃", "花生"],
    ["他", "豆腐", "喝"],
  ),
  sentence(
    "Apakah kamu makan makanan laut?",
    ["你", "吃", "海鲜", "吗"],
    ["喝", "肉", "不"],
  ),
  sentence("Saya makan tahu.", ["我", "吃", "豆腐"], ["喝", "海鲜", "也"]),
  sentence("Saya makan pisang.", ["我", "吃", "香蕉"], ["苹果", "喝", "不"]),
  sentence(
    "Dia (laki-laki) makan apel.",
    ["他", "吃", "苹果"],
    ["香蕉", "她", "喝"],
  ),
  sentence(
    "Saya makan wortel dan kentang.",
    ["我", "吃", "胡萝卜", "和", "土豆"],
    ["喝", "肉", "不"],
  ),
  sentence("Saya makan biskuit.", ["我", "吃", "饼干"], ["巧克力", "喝", "不"]),
  sentence(
    "Dia (perempuan) makan cokelat.",
    ["她", "吃", "巧克力"],
    ["饼干", "他", "喝"],
  ),
  sentence("Saya minum alkohol.", ["我", "喝", "酒"], ["吃", "茶", "不"]),
  sentence("Saya minum yogurt.", ["我", "喝", "酸奶"], ["吃", "牛奶", "不"]),
  sentence(
    "Dia (laki-laki) minum kopi.",
    ["他", "喝", "咖啡"],
    ["吃", "茶", "她"],
  ),
  sentence(
    "Dia (perempuan) minum susu kedelai.",
    ["她", "喝", "豆浆"],
    ["吃", "牛奶", "他"],
  ),
  sentence(
    "Apakah kamu minum teh?",
    ["你", "喝", "茶", "吗"],
    ["吃", "咖啡", "不"],
  ),
  sentence(
    "Saya tidak makan daging.",
    ["我", "不", "吃", "肉"],
    ["喝", "鸡蛋", "也"],
  ),
  sentence(
    "Dia (laki-laki) tidak minum alkohol.",
    ["他", "不", "喝", "酒"],
    ["吃", "她", "也"],
  ),
  sentence(
    "Dia (perempuan) tidak makan makanan laut.",
    ["她", "不", "吃", "海鲜"],
    ["喝", "他", "肉"],
  ),
  sentence(
    "Saya juga makan telur.",
    ["我", "也", "吃", "鸡蛋"],
    ["喝", "不", "肉"],
  ),
  sentence(
    "Dia (laki-laki) juga minum teh.",
    ["他", "也", "喝", "茶"],
    ["吃", "她", "不"],
  ),
  sentence(
    "Dia (perempuan) juga makan apel.",
    ["她", "也", "吃", "苹果"],
    ["喝", "他", "香蕉"],
  ),
  sentence(
    "Saya juga bukan orang Jepang.",
    ["我", "也", "不", "是", "日本", "人"],
    ["韩国", "都", "吗"],
  ),
  sentence(
    "Dia (laki-laki) juga seorang dokter.",
    ["他", "也", "是", "医生"],
    ["她", "老师", "不"],
  ),
  sentence(
    "Saya juga suka kucing.",
    ["我", "也", "喜欢", "猫"],
    ["讨厌", "不", "你"],
  ),
  sentence(
    "Dia (perempuan) juga tidak punya kucing.",
    ["她", "也", "没有", "猫"],
    ["有", "他", "不"],
  ),
  sentence(
    "Saya juga ada di rumah.",
    ["我", "也", "在", "家"],
    ["学校", "不", "都"],
  ),
  sentence(
    "Saya suka makan cokelat.",
    ["我", "喜欢", "吃", "巧克力"],
    ["喝", "讨厌", "不"],
  ),
  sentence(
    "Dia (laki-laki) suka minum kopi.",
    ["他", "喜欢", "喝", "咖啡"],
    ["吃", "茶", "她"],
  ),
  sentence(
    "Dia (perempuan) suka makan buah apel.",
    ["她", "喜欢", "吃", "苹果"],
    ["香蕉", "喝", "他"],
  ),
  sentence(
    "Saya tidak suka makan wortel.",
    ["我", "不", "喜欢", "吃", "胡萝卜"],
    ["土豆", "喝", "讨厌"],
  ),
  sentence(
    "Saya benci makan kacang tanah.",
    ["我", "讨厌", "吃", "花生"],
    ["喝", "喜欢", "爱"],
  ),
  sentence(
    "Dia (laki-laki) suka minum yogurt.",
    ["他", "喜欢", "喝", "酸奶"],
    ["吃", "牛奶", "她"],
  ),
  sentence(
    "Apakah kamu suka makan makanan laut?",
    ["你", "喜欢", "吃", "海鲜", "吗"],
    ["喝", "讨厌", "不"],
  ),
  sentence(
    "Apakah kamu suka minum alkohol?",
    ["你", "喜欢", "喝", "酒", "吗"],
    ["吃", "不", "茶"],
  ),
  sentence(
    "Apakah kamu makan nasi?",
    ["你", "吃", "不", "吃", "米饭"],
    ["喝", "吗", "也"],
  ),
  sentence(
    "Apakah kamu minum kopi?",
    ["你", "喝", "不", "喝", "咖啡"],
    ["吃", "吗", "也"],
  ),
  sentence(
    "Apakah kamu suka biskuit?",
    ["你", "喜欢", "不", "喜欢", "饼干"],
    ["吗", "吃", "也"],
  ),
  sentence(
    "Apakah dia (laki-laki) makan daging?",
    ["他", "吃", "不", "吃", "肉"],
    ["她", "吗", "喝"],
  ),
  sentence(
    "Apakah dia (perempuan) punya kucing?",
    ["她", "有", "没有", "猫"],
    ["他", "吗", "不"],
  ),
  sentence(
    "Apakah ini bakpao?",
    ["这", "是", "不", "是", "包子"],
    ["那", "吗", "饺子"],
  ),
  sentence(
    "Kami semua makan nasi.",
    ["我们", "都", "吃", "米饭"],
    ["他们", "喝", "不"],
  ),
  sentence(
    "Mereka semua minum teh.",
    ["他们", "都", "喝", "茶"],
    ["我们", "吃", "不"],
  ),
  sentence(
    "Kami semua suka makan pisang.",
    ["我们", "都", "喜欢", "吃", "香蕉"],
    ["他们", "喝", "讨厌"],
  ),
  sentence(
    "Mereka semua tidak makan makanan laut.",
    ["他们", "都", "不", "吃", "海鲜"],
    ["我们", "喝", "也"],
  ),
  sentence(
    "Ayah saya suka minum alkohol.",
    [
      ["我", "爸爸", "喜欢", "喝", "酒"],
      ["我", "的", "爸爸", "喜欢", "喝", "酒"],
    ],
    ["吃", "妈妈", "不"],
  ),
  sentence(
    "Ibu saya suka makan buah apel.",
    [
      ["我", "妈妈", "喜欢", "吃", "苹果"],
      ["我", "的", "妈妈", "喜欢", "吃", "苹果"],
    ],
    ["喝", "爸爸", "香蕉"],
  ),
  sentence(
    "Kakak laki-laki saya juga makan cokelat.",
    [
      ["我", "哥哥", "也", "吃", "巧克力"],
      ["我", "的", "哥哥", "也", "吃", "巧克力"],
    ],
    ["姐姐", "喝", "不"],
  ),
  sentence(
    "Adik perempuan saya juga suka minum susu.",
    [
      ["我", "妹妹", "也", "喜欢", "喝", "牛奶"],
      ["我", "的", "妹妹", "也", "喜欢", "喝", "牛奶"],
    ],
    ["弟弟", "吃", "不"],
  ),
  sentence(
    "Teman saya tidak makan daging.",
    [
      ["我", "朋友", "不", "吃", "肉"],
      ["我", "的", "朋友", "不", "吃", "肉"],
    ],
    ["喝", "也", "海鲜"],
  ),
  sentence(
    "Anak saya juga tidak suka makan tahu.",
    [
      ["我", "孩子", "也", "不", "喜欢", "吃", "豆腐"],
      ["我", "的", "孩子", "也", "不", "喜欢", "吃", "豆腐"],
    ],
    ["喝", "都", "肉"],
  ),
  sentence(
    "Di sini ada kafe, saya mau minum kopi.",
    ["这里", "有", "咖啡厅", "我", "想", "喝", "咖啡"],
    ["吃", "没有", "茶"],
  ),
];

const u8_paragraphs = [
  paragraph(
    "Lengkapi paragraf tentang sarapan berikut!",
    [
      "我每天早上吃早饭。我爱.......鸡蛋，我弟弟.......爱吃鸡蛋。妈妈不吃鸡蛋，她喝一杯很酸的.......。你吃不.......鸡蛋？",
    ],
    [
      { id: 1, answer: "吃", extras: ["喝", "酸奶"] },
      { id: 2, answer: "也", extras: ["吃", "喝"] },
      { id: 3, answer: "酸奶", extras: ["肉", "饼干"] },
      { id: 4, answer: "吃", extras: ["喝", "也"] },
    ],
    "Wǒ měi tiān zǎoshang chī zǎofàn. Wǒ ài ....... jīdàn, wǒ dìdi ....... ài chī jīdàn. Māma bù chī jīdàn, tā hē yì bēi hěn suān de ....... . Nǐ chī bu ....... jīdàn?",
    "Setiap pagi saya sarapan. Saya suka makan telur, adik laki-lakiku juga suka makan telur. Ibu tidak makan telur, dia minum segelas yogurt yang sangat asam. Apakah kamu makan telur?",
  ),
  paragraph(
    "Lengkapi paragraf tentang camilan setelah sekolah berikut!",
    [
      "下课以后我喜欢.......饼干。我妹妹不喜欢饼干，她喜欢吃苹果，.......喜欢吃香蕉。我最爱吃黑色的、很甜的.......。你喜欢不.......吃饼干？",
    ],
    [
      { id: 1, answer: "吃", extras: ["喝", "酸奶"] },
      { id: 2, answer: "也", extras: ["吃", "喝"] },
      { id: 3, answer: "巧克力", extras: ["喝", "也"] },
      { id: 4, answer: "喜欢", extras: ["吃", "也"] },
    ],
    "Xiàkè yǐhòu wǒ xǐhuan ....... bǐnggān. Wǒ mèimei bù xǐhuan bǐnggān, tā xǐhuan chī píngguǒ, ....... xǐhuan chī xiāngjiāo. Wǒ zuì ài chī hēisè de, hěn tián de ....... . Nǐ xǐhuan bu ....... chī bǐnggān?",
    "Setelah pulang sekolah saya suka makan biskuit. Adik perempuanku tidak suka biskuit, dia suka makan apel, juga suka makan pisang. Saya paling suka makan yang berwarna hitam dan sangat manis, yaitu cokelat. Apakah kamu suka makan biskuit?",
  ),
  paragraph(
    "Lengkapi paragraf tentang buah-buahan berikut!",
    [
      "我喜欢吃水果。我每天吃一个红色的.......，它很甜。我哥哥喜欢吃黄色的.......，他.......喜欢吃巧克力。你喜欢不.......吃水果？",
    ],
    [
      { id: 1, answer: "苹果", extras: ["酒", "酸奶"] },
      { id: 2, answer: "香蕉", extras: ["也", "喝"] },
      { id: 3, answer: "也", extras: ["吃", "喝"] },
      { id: 4, answer: "喜欢", extras: ["吃", "也"] },
    ],
    "Wǒ xǐhuan chī shuǐguǒ. Wǒ měi tiān chī yí ge hóngsè de ....... , tā hěn tián. Wǒ gēge xǐhuan chī huángsè de ....... , tā ....... xǐhuan chī qiǎokèlì. Nǐ xǐhuan bu ....... chī shuǐguǒ?",
    "Saya suka makan buah. Setiap hari saya makan sebuah apel merah, rasanya sangat manis. Kakak laki-lakiku suka makan pisang yang berwarna kuning, dia juga suka makan cokelat. Apakah kamu suka makan buah?",
  ),
  paragraph(
    "Lengkapi paragraf tentang makanan keluarga berikut!",
    [
      "我爸爸不爱吃菜，他每天中午都吃.......，一块一块的。我妈妈爱吃土豆，我.......爱吃土豆。晚上爸爸喜欢喝一杯.......，妈妈不喝，妈妈喝酸奶。你们家的人喜欢不.......吃土豆？",
    ],
    [
      { id: 1, answer: "肉", extras: ["酒", "喝"] },
      { id: 2, answer: "也", extras: ["吃", "喝"] },
      { id: 3, answer: "酒", extras: ["肉", "饼干"] },
      { id: 4, answer: "喜欢", extras: ["吃", "也"] },
    ],
    "Wǒ bàba bú ài chī cài, tā měi tiān zhōngwǔ dōu chī ....... , yí kuài yí kuài de. Wǒ māma ài chī tǔdòu, wǒ ....... ài chī tǔdòu. Wǎnshang bàba xǐhuan hē yì bēi ....... , māma bù hē, māma hē suānnǎi. Nǐmen jiā de rén xǐhuan bu ....... chī tǔdòu?",
    "Ayahku tidak suka makan sayur, setiap siang dia makan daging, potong demi potong. Ibuku suka makan kentang, saya juga suka makan kentang. Malam hari ayah suka minum segelas minuman keras, ibu tidak minum, ibu minum yogurt. Apakah orang-orang di keluargamu suka makan kentang?",
  ),
  paragraph(
    "Lengkapi paragraf tentang restoran seafood berikut!",
    [
      "周末我们去海边的饭馆。饭馆有很多.......，鱼和虾都是从海里来的。我爸爸爱.......酒，每天晚上喝一杯。我妈妈不喝酒，她.......不吃肉。你喜欢不.......吃鱼？",
    ],
    [
      { id: 1, answer: "海鲜", extras: ["也", "喝"] },
      { id: 2, answer: "喝", extras: ["吃", "也"] },
      { id: 3, answer: "也", extras: ["吃", "酒"] },
      { id: 4, answer: "喜欢", extras: ["吃", "也"] },
    ],
    "Zhōumò wǒmen qù hǎibiān de fànguǎn. Fànguǎn yǒu hěn duō ....... , yú hé xiā dōu shì cóng hǎi lǐ lái de. Wǒ bàba ài ....... jiǔ, měi tiān wǎnshang hē yì bēi. Wǒ māma bù hē jiǔ, tā ....... bù chī ròu. Nǐ xǐhuan bu ....... chī yú?",
    "Akhir pekan kami pergi ke restoran di tepi laut. Restoran itu punya banyak makanan laut, ikan dan udang semuanya berasal dari laut. Ayahku suka minum minuman keras, setiap malam minum segelas. Ibuku tidak minum minuman keras, dia juga tidak makan daging. Apakah kamu suka makan ikan?",
  ),
  paragraph(
    "Lengkapi paragraf tentang kakak yang tidak makan daging berikut!",
    [
      "我姐姐不吃肉，她吃.......。它是用豆浆做的，白白的，很便宜。我也喜欢吃它，我们.......爱吃胡萝卜。姐姐每天早上都喝一杯很酸的.......。你喜欢不.......吃胡萝卜？",
    ],
    [
      { id: 1, answer: "豆腐", extras: ["喝", "也"] },
      { id: 2, answer: "也", extras: ["吃", "喝"] },
      { id: 3, answer: "酸奶", extras: ["肉", "饼干"] },
      { id: 4, answer: "喜欢", extras: ["吃", "也"] },
    ],
    "Wǒ jiějie bù chī ròu, tā chī ....... . Tā shì yòng dòujiāng zuò de, báibái de, hěn piányi. Wǒ yě xǐhuan chī tā, wǒmen ....... ài chī húluóbo. Jiějie měi tiān zǎoshang dōu hē yì bēi hěn suān de ....... . Nǐ xǐhuan bu ....... chī húluóbo?",
    "Kakak perempuanku tidak makan daging, dia makan tahu. Tahu dibuat dari susu kedelai, putih, dan sangat murah. Saya juga suka memakannya, kami sama-sama suka makan wortel. Kakak setiap pagi minum segelas yogurt yang sangat asam. Apakah kamu suka makan wortel?",
  ),
  paragraph(
    "Lengkapi paragraf tentang teman yang alergi berikut!",
    [
      "我的朋友小红不能吃.......，因为吃了会不舒服。它是小小的，在土里长。她也不喝.......，她说大人才喝它。她喜欢吃苹果，我.......喜欢吃苹果。你喜欢不.......吃饼干？",
    ],
    [
      { id: 1, answer: "花生", extras: ["喝", "也"] },
      { id: 2, answer: "酒", extras: ["肉", "饼干"] },
      { id: 3, answer: "也", extras: ["吃", "喝"] },
      { id: 4, answer: "喜欢", extras: ["吃", "也"] },
    ],
    "Wǒ de péngyou Xiǎohóng bù néng chī ....... , yīnwèi chī le huì bù shūfu. Tā shì xiǎoxiǎo de, zài tǔ lǐ zhǎng. Tā yě bù hē ....... , tā shuō dàrén cái hē tā. Tā xǐhuan chī píngguǒ, wǒ ....... xǐhuan chī píngguǒ. Nǐ xǐhuan bu ....... chī bǐnggān?",
    "Temanku Xiaohong tidak boleh makan kacang tanah, karena kalau memakannya dia jadi tidak enak badan. Kacang itu kecil-kecil dan tumbuh di dalam tanah. Dia juga tidak minum minuman keras, katanya hanya orang dewasa yang meminumnya. Dia suka makan apel, saya juga suka makan apel. Apakah kamu suka makan biskuit?",
  ),
  paragraph(
    "Lengkapi paragraf tentang masakan ibu berikut!",
    [
      "我妈妈每天做饭。她喜欢做橙色的.......，我们都爱吃它。她.......做土豆，土豆是在土里长的。我弟弟不爱.......它们，他只吃肉。你喜欢不.......吃土豆？",
    ],
    [
      { id: 1, answer: "胡萝卜", extras: ["也", "吃"] },
      { id: 2, answer: "也", extras: ["吃", "喝"] },
      { id: 3, answer: "吃", extras: ["喝", "也"] },
      { id: 4, answer: "喜欢", extras: ["吃", "也"] },
    ],
    "Wǒ māma měi tiān zuò fàn. Tā xǐhuan zuò chéngsè de ....... , wǒmen dōu ài chī tā. Tā ....... zuò tǔdòu, tǔdòu shì zài tǔ lǐ zhǎng de. Wǒ dìdi bú ài ....... tāmen, tā zhǐ chī ròu. Nǐ xǐhuan bu ....... chī tǔdòu?",
    "Ibuku memasak setiap hari. Dia suka memasak wortel yang berwarna oranye, kami semua suka memakannya. Dia juga memasak kentang, kentang tumbuh di dalam tanah. Adik laki-lakiku tidak suka memakan keduanya, dia hanya makan daging. Apakah kamu suka makan kentang?",
  ),
  paragraph(
    "Lengkapi paragraf tentang sayur favorit berikut!",
    [
      "我最喜欢的菜是.......，它在土里长，圆圆的。我每天都吃，我妈妈.......爱吃。我爸爸爱吃肉，晚上还爱.......酒。你吃不.......胡萝卜？",
    ],
    [
      { id: 1, answer: "土豆", extras: ["也", "喝"] },
      { id: 2, answer: "也", extras: ["吃", "喝"] },
      { id: 3, answer: "喝", extras: ["吃", "也"] },
      { id: 4, answer: "吃", extras: ["喝", "也"] },
    ],
    "Wǒ zuì xǐhuan de cài shì ....... , tā zài tǔ lǐ zhǎng, yuányuán de. Wǒ měi tiān dōu chī, wǒ māma ....... ài chī. Wǒ bàba ài chī ròu, wǎnshang hái ài ....... jiǔ. Nǐ chī bu ....... húluóbo?",
    "Sayur favoritku adalah kentang, tumbuh di dalam tanah dan bulat. Saya memakannya setiap hari, ibuku juga suka memakannya. Ayahku suka makan daging, malam hari dia juga suka minum minuman keras. Apakah kamu makan wortel?",
  ),
  paragraph(
    "Lengkapi paragraf tentang belanja di supermarket berikut!",
    [
      "今天我和妈妈去超市买东西。我要买.......，它是黄色的，长长的。妈妈要买一瓶很酸的.......，她每天早上都喝。我弟弟喜欢巧克力，我.......喜欢巧克力。你喜欢不.......吃饼干？",
    ],
    [
      { id: 1, answer: "香蕉", extras: ["吃", "喝"] },
      { id: 2, answer: "酸奶", extras: ["肉", "饼干"] },
      { id: 3, answer: "也", extras: ["吃", "喝"] },
      { id: 4, answer: "喜欢", extras: ["吃", "也"] },
    ],
    "Jīntiān wǒ hé māma qù chāoshì mǎi dōngxi. Wǒ yào mǎi ....... , tā shì huángsè de, chángcháng de. Māma yào mǎi yì píng hěn suān de ....... , tā měi tiān zǎoshang dōu hē. Wǒ dìdi xǐhuan qiǎokèlì, wǒ ....... xǐhuan qiǎokèlì. Nǐ xǐhuan bu ....... chī bǐnggān?",
    "Hari ini saya dan ibu pergi berbelanja ke supermarket. Saya mau membeli pisang, warnanya kuning dan panjang. Ibu mau membeli sebotol yogurt yang sangat asam, dia meminumnya setiap pagi. Adik laki-lakiku suka cokelat, saya juga suka cokelat. Apakah kamu suka makan biskuit?",
  ),
  paragraph(
    "Lengkapi paragraf tentang pesta di rumah berikut!",
    [
      "周六我们家有聚会。朋友们爱.......肉和海鲜，吃了很多。大人喝.......，小孩儿喝酸奶。大卫不吃肉，他.......不吃海鲜，他只吃豆腐。你们喜欢不.......吃豆腐？",
    ],
    [
      { id: 1, answer: "吃", extras: ["喝", "也"] },
      { id: 2, answer: "酒", extras: ["肉", "饼干"] },
      { id: 3, answer: "也", extras: ["吃", "喝"] },
      { id: 4, answer: "喜欢", extras: ["吃", "也"] },
    ],
    "Zhōuliù wǒmen jiā yǒu jùhuì. Péngyoumen ài ....... ròu hé hǎixiān, chī le hěn duō. Dàrén hē ....... , xiǎoháir hē suānnǎi. Dàwèi bù chī ròu, tā ....... bù chī hǎixiān, tā zhǐ chī dòufu. Nǐmen xǐhuan bu ....... chī dòufu?",
    "Hari Sabtu ada pesta di rumah kami. Teman-teman suka makan daging dan makanan laut, mereka makan banyak. Orang dewasa minum minuman keras, anak-anak minum yogurt. David tidak makan daging, dia juga tidak makan makanan laut, dia hanya makan tahu. Apakah kalian suka makan tahu?",
  ),
  paragraph(
    "Lengkapi percakapan tentang makanan laut berikut!",
    [
      "A：你.......不喜欢吃海鲜？B：我喜欢，我.......爱吃鱼和虾。A：你妹妹吃不.......海鲜？B：她不吃，她只爱喝.......。",
    ],
    [
      { id: 1, answer: "喜欢", extras: ["吃", "喝"] },
      { id: 2, answer: "也", extras: ["吃", "喝"] },
      { id: 3, answer: "吃", extras: ["喝", "也"] },
      { id: 4, answer: "酸奶", extras: ["肉", "饼干"] },
    ],
    "A: Nǐ ....... bu xǐhuan chī hǎixiān? B: Wǒ xǐhuan, wǒ ....... ài chī yú hé xiā. A: Nǐ mèimei chī bu ....... hǎixiān? B: Tā bù chī, tā zhǐ ài hē ....... .",
    "A: Apakah kamu suka makan makanan laut? B: Suka, saya juga suka makan ikan dan udang. A: Apakah adik perempuanmu makan makanan laut? B: Dia tidak makan, dia hanya suka minum yogurt.",
  ),
  paragraph(
    "Lengkapi percakapan tentang minuman berikut!",
    [
      "A：你爸爸每天喝不.......酒？B：喝，他每天晚上喝一杯。我妈妈不喝酒，她.......不吃肉。A：那她喜欢喝什么？B：她爱喝.......，也爱.......饼干。",
    ],
    [
      { id: 1, answer: "喝", extras: ["吃", "也"] },
      { id: 2, answer: "也", extras: ["吃", "酒"] },
      { id: 3, answer: "酸奶", extras: ["肉", "豆腐"] },
      { id: 4, answer: "吃", extras: ["喝", "也"] },
    ],
    "A: Nǐ bàba měi tiān hē bu ....... jiǔ? B: Hē, tā měi tiān wǎnshang hē yì bēi. Wǒ māma bù hē jiǔ, tā ....... bù chī ròu. A: Nà tā xǐhuan hē shénme? B: Tā ài hē ....... , yě ài ....... bǐnggān.",
    "A: Apakah ayahmu minum minuman keras setiap hari? B: Minum, setiap malam dia minum segelas. Ibuku tidak minum minuman keras, dia juga tidak makan daging. A: Lalu dia suka minum apa? B: Dia suka minum yogurt, juga suka makan biskuit.",
  ),
  paragraph(
    "Lengkapi percakapan tentang buah dan cokelat berikut!",
    [
      "A：你.......不喜欢吃香蕉？B：我不喜欢，我喜欢.......苹果。A：我.......喜欢吃苹果。我弟弟爱吃黑色的、很甜的.......。",
    ],
    [
      { id: 1, answer: "喜欢", extras: ["吃", "喝"] },
      { id: 2, answer: "吃", extras: ["喝", "也"] },
      { id: 3, answer: "也", extras: ["吃", "喝"] },
      { id: 4, answer: "巧克力", extras: ["喝", "也"] },
    ],
    "A: Nǐ ....... bu xǐhuan chī xiāngjiāo? B: Wǒ bù xǐhuan, wǒ xǐhuan ....... píngguǒ. A: Wǒ ....... xǐhuan chī píngguǒ. Wǒ dìdi ài chī hēisè de, hěn tián de ....... .",
    "A: Apakah kamu suka makan pisang? B: Saya tidak suka, saya suka makan apel. A: Saya juga suka makan apel. Adik laki-lakiku suka makan yang berwarna hitam dan sangat manis, yaitu cokelat.",
  ),
  paragraph(
    "Lengkapi paragraf tentang kebiasaan makan pagi keluarga berikut!",
    [
      "我们家每天早上吃得不一样。爸爸.......两个鸡蛋，他还喝酸奶。妈妈吃一块不太甜的.......，她不吃鸡蛋。我弟弟爱吃苹果，我.......爱吃苹果。你们家早上吃不.......鸡蛋？",
    ],
    [
      { id: 1, answer: "吃", extras: ["喝", "也"] },
      { id: 2, answer: "饼干", extras: ["酒", "也"] },
      { id: 3, answer: "也", extras: ["吃", "喝"] },
      { id: 4, answer: "吃", extras: ["喝", "也"] },
    ],
    "Wǒmen jiā měi tiān zǎoshang chī de bù yíyàng. Bàba ....... liǎng ge jīdàn, tā hái hē suānnǎi. Māma chī yí kuài bú tài tián de ....... , tā bù chī jīdàn. Wǒ dìdi ài chī píngguǒ, wǒ ....... ài chī píngguǒ. Nǐmen jiā zǎoshang chī bu ....... jīdàn?",
    "Sarapan keluarga kami setiap pagi berbeda-beda. Ayah makan dua telur, dia juga minum yogurt. Ibu makan sepotong biskuit yang tidak terlalu manis, dia tidak makan telur. Adik laki-lakiku suka makan apel, saya juga suka makan apel. Apakah keluargamu makan telur saat sarapan?",
  ),
  paragraph(
    "Lengkapi paragraf tentang kantin sekolah berikut!",
    [
      "今天学校的饭馆有很多菜。我.......吃肉，所以我要一块肉。我同学不爱吃肉，她爱.......豆腐和土豆。我们.......要一杯酸奶。你喝不.......酸奶？",
    ],
    [
      { id: 1, answer: "喜欢", extras: ["吃", "喝"] },
      { id: 2, answer: "吃", extras: ["喝", "也"] },
      { id: 3, answer: "也", extras: ["吃", "喝"] },
      { id: 4, answer: "喝", extras: ["吃", "也"] },
    ],
    "Jīntiān xuéxiào de fànguǎn yǒu hěn duō cài. Wǒ ....... chī ròu, suǒyǐ wǒ yào yí kuài ròu. Wǒ tóngxué bú ài chī ròu, tā ài ....... dòufu hé tǔdòu. Wǒmen ....... yào yì bēi suānnǎi. Nǐ hē bu ....... suānnǎi?",
    "Hari ini restoran sekolah punya banyak masakan. Saya suka makan daging, jadi saya mau sepotong daging. Teman sekelasku tidak suka daging, dia suka makan tahu dan kentang. Kami berdua juga mau segelas yogurt. Apakah kamu minum yogurt?",
  ),
  paragraph(
    "Lengkapi paragraf tentang teman asal Jepang berikut!",
    [
      "我的朋友小田是日本人。他爱吃从海里来的.......，也爱吃豆腐。他不喝酒，.......不喝可乐。他早上喝一杯很酸的.......。你喜欢不.......吃鱼？",
    ],
    [
      { id: 1, answer: "海鲜", extras: ["喝", "也"] },
      { id: 2, answer: "也", extras: ["吃", "酒"] },
      { id: 3, answer: "酸奶", extras: ["肉", "饼干"] },
      { id: 4, answer: "喜欢", extras: ["吃", "也"] },
    ],
    "Wǒ de péngyou Xiǎotián shì Rìběn rén. Tā ài chī cóng hǎi lǐ lái de ....... , yě ài chī dòufu. Tā bù hē jiǔ, ....... bù hē kělè. Tā zǎoshang hē yì bēi hěn suān de ....... . Nǐ xǐhuan bu ....... chī yú?",
    "Temanku Xiaotian orang Jepang. Dia suka makan makanan dari laut, juga suka makan tahu. Dia tidak minum minuman keras, juga tidak minum cola. Pagi hari dia minum segelas yogurt yang sangat asam. Apakah kamu suka makan ikan?",
  ),
  paragraph(
    "Lengkapi paragraf tentang teman asal Korea berikut!",
    [
      "我的朋友金美是韩国人。她爱吃肉，.......爱吃海鲜。晚上她爱喝一杯.......，喝了就想睡觉。她不吃黑色的、很甜的.......。你吃不.......豆腐？",
    ],
    [
      { id: 1, answer: "也", extras: ["吃", "喝"] },
      { id: 2, answer: "酒", extras: ["肉", "饼干"] },
      { id: 3, answer: "巧克力", extras: ["喝", "也"] },
      { id: 4, answer: "吃", extras: ["喝", "也"] },
    ],
    "Wǒ de péngyou Jīn Měi shì Hánguó rén. Tā ài chī ròu, ....... ài chī hǎixiān. Wǎnshang tā ài hē yì bēi ....... , hē le jiù xiǎng shuìjiào. Tā bù chī hēisè de, hěn tián de ....... . Nǐ chī bu ....... dòufu?",
    "Temanku Jin Mei orang Korea. Dia suka makan daging, juga suka makan makanan laut. Malam hari dia suka minum segelas minuman keras, setelah minum dia ingin tidur. Dia tidak makan cokelat yang berwarna hitam dan sangat manis. Apakah kamu makan tahu?",
  ),
  paragraph(
    "Lengkapi paragraf tentang adik yang suka cokelat berikut!",
    [
      "我妹妹很爱吃.......，她每天吃一块，因为它很甜，是黑色的。她不爱吃肉，.......不爱吃胡萝卜。我和她不一样，我喜欢吃肉。妈妈问我：“你喜欢不.......吃土豆？”我说：“我喜欢，我每天都.......。”",
    ],
    [
      { id: 1, answer: "巧克力", extras: ["酒", "也"] },
      { id: 2, answer: "也", extras: ["吃", "喝"] },
      { id: 3, answer: "喜欢", extras: ["吃", "也"] },
      { id: 4, answer: "吃", extras: ["喝", "也"] },
    ],
    "Wǒ mèimei hěn ài chī ....... , tā měi tiān chī yí kuài, yīnwèi tā hěn tián, shì hēisè de. Tā bú ài chī ròu, ....... bú ài chī húluóbo. Wǒ hé tā bù yíyàng, wǒ xǐhuan chī ròu. Māma wèn wǒ: “Nǐ xǐhuan bu ....... chī tǔdòu?” Wǒ shuō: “Wǒ xǐhuan, wǒ měi tiān dōu ....... .”",
    "Adik perempuanku sangat suka makan cokelat, setiap hari dia makan sepotong, karena rasanya manis dan berwarna hitam. Dia tidak suka makan daging, juga tidak suka makan wortel. Saya berbeda dengannya, saya suka makan daging. Ibu bertanya padaku: “Apakah kamu suka makan kentang?” Saya berkata: “Suka, saya makan setiap hari.”",
  ),
  paragraph(
    "Lengkapi percakapan tentang isi kulkas berikut!",
    [
      "A：冰箱里有什么？B：有两个红色的.......，还有鸡蛋和酸奶。A：我.......喜欢吃鸡蛋。你喝不.......酸奶？B：我喝，我每天早上都喝。A：你.......不喜欢吃饼干？",
    ],
    [
      { id: 1, answer: "苹果", extras: ["酒", "也"] },
      { id: 2, answer: "也", extras: ["吃", "喝"] },
      { id: 3, answer: "喝", extras: ["吃", "也"] },
      { id: 4, answer: "喜欢", extras: ["吃", "喝"] },
    ],
    "A: Bīngxiāng lǐ yǒu shénme? B: Yǒu liǎng ge hóngsè de ....... , hái yǒu jīdàn hé suānnǎi. A: Wǒ ....... xǐhuan chī jīdàn. Nǐ hē bu ....... suānnǎi? B: Wǒ hē, wǒ měi tiān zǎoshang dōu hē. A: Nǐ ....... bu xǐhuan chī bǐnggān?",
    "A: Di kulkas ada apa? B: Ada dua apel merah, juga ada telur dan yogurt. A: Saya juga suka makan telur. Apakah kamu minum yogurt? B: Minum, saya minum setiap pagi. A: Apakah kamu suka makan biskuit?",
  ),
  paragraph(
    "Lengkapi paragraf tentang piknik di taman berikut!",
    [
      "今天我们去公园玩。我带了.......，它是黄色的，很好吃。朋友带了一瓶酸奶和巧克力。小红喜欢吃苹果，我.......喜欢吃苹果。大家在公园里.......东西，很高兴。你们喜欢不.......吃饼干？",
    ],
    [
      { id: 1, answer: "香蕉", extras: ["酒", "喝"] },
      { id: 2, answer: "也", extras: ["吃", "喝"] },
      { id: 3, answer: "吃", extras: ["也", "巧克力"] },
      { id: 4, answer: "喜欢", extras: ["吃", "也"] },
    ],
    "Jīntiān wǒmen qù gōngyuán wán. Wǒ dài le ....... , tā shì huángsè de, hěn hǎochī. Péngyou dài le yì píng suānnǎi hé qiǎokèlì. Xiǎohóng xǐhuan chī píngguǒ, wǒ ....... xǐhuan chī píngguǒ. Dàjiā zài gōngyuán lǐ ....... dōngxi, hěn gāoxìng. Nǐmen xǐhuan bu ....... chī bǐnggān?",
    "Hari ini kami pergi bermain ke taman. Saya membawa pisang, berwarna kuning dan enak sekali. Teman membawa sebotol yogurt dan cokelat. Xiaohong suka makan apel, saya juga suka makan apel. Semua orang makan di taman dan sangat senang. Apakah kalian suka makan biskuit?",
  ),
  paragraph(
    "Lengkapi paragraf tentang nasihat dokter berikut!",
    [
      "医生说我爸爸不能喝.......，喝多了不好。他不能吃太多.......，要多吃豆腐和胡萝卜。他.......不能吃巧克力，因为很甜。爸爸问医生：“我吃不.......海鲜？”医生说：“可以。”",
    ],
    [
      { id: 1, answer: "酒", extras: ["肉", "饼干"] },
      { id: 2, answer: "肉", extras: ["酒", "喝"] },
      { id: 3, answer: "也", extras: ["吃", "喝"] },
      { id: 4, answer: "吃", extras: ["喝", "也"] },
    ],
    "Yīshēng shuō wǒ bàba bù néng hē ....... , hē duō le bù hǎo. Tā bù néng chī tài duō ....... , yào duō chī dòufu hé húluóbo. Tā ....... bù néng chī qiǎokèlì, yīnwèi hěn tián. Bàba wèn yīshēng: “Wǒ chī bu ....... hǎixiān?” Yīshēng shuō: “Kěyǐ.”",
    "Dokter berkata ayahku tidak boleh minum minuman keras, kalau banyak minum tidak baik. Dia tidak boleh makan terlalu banyak daging, harus lebih banyak makan tahu dan wortel. Dia juga tidak boleh makan cokelat karena sangat manis. Ayah bertanya kepada dokter: “Apakah saya boleh makan makanan laut?” Dokter berkata: “Boleh.”",
  ),
  paragraph(
    "Lengkapi paragraf tentang nenek berikut!",
    [
      "奶奶不能吃太硬的东西，所以她爱吃.......，它软软的，是用豆浆做的。她也喜欢喝很酸的.......。奶奶不喝酒，也不.......肉。我爱我奶奶，我.......喜欢和她一起吃饭。",
    ],
    [
      { id: 1, answer: "豆腐", extras: ["喝", "酒"] },
      { id: 2, answer: "酸奶", extras: ["肉", "饼干"] },
      { id: 3, answer: "吃", extras: ["喝", "也"] },
      { id: 4, answer: "也", extras: ["吃", "喝"] },
    ],
    "Nǎinai bù néng chī tài yìng de dōngxi, suǒyǐ tā ài chī ....... , tā ruǎnruan de, shì yòng dòujiāng zuò de. Tā yě xǐhuan hē hěn suān de ....... . Nǎinai bù hē jiǔ, yě bù ....... ròu. Wǒ ài wǒ nǎinai, wǒ ....... xǐhuan hé tā yìqǐ chī fàn.",
    "Nenek tidak boleh makan makanan yang terlalu keras, jadi dia suka makan tahu, yang lembut dan dibuat dari susu kedelai. Dia juga suka minum yogurt yang sangat asam. Nenek tidak minum minuman keras, juga tidak makan daging. Saya menyayangi nenekku, saya juga suka makan bersamanya.",
  ),
  paragraph(
    "Lengkapi paragraf tentang pesta ulang tahun berikut!",
    [
      "今天是我的生日。妈妈做了很多好吃的，有肉、鸡蛋和豆腐。我.......吃很甜的巧克力。爸爸喝一杯.......，我们小孩儿喝可乐。哥哥.......喜欢吃巧克力。你吃不.......海鲜？",
    ],
    [
      { id: 1, answer: "喜欢", extras: ["吃", "喝"] },
      { id: 2, answer: "酒", extras: ["肉", "饼干"] },
      { id: 3, answer: "也", extras: ["吃", "喝"] },
      { id: 4, answer: "吃", extras: ["喝", "也"] },
    ],
    "Jīntiān shì wǒ de shēngrì. Māma zuò le hěn duō hǎochī de, yǒu ròu, jīdàn hé dòufu. Wǒ ....... chī hěn tián de qiǎokèlì. Bàba hē yì bēi ....... , wǒmen xiǎoháir hē kělè. Gēge ....... xǐhuan chī qiǎokèlì. Nǐ chī bu ....... hǎixiān?",
    "Hari ini ulang tahunku. Ibu memasak banyak makanan enak, ada daging, telur, dan tahu. Saya suka makan cokelat yang sangat manis. Ayah minum segelas minuman keras, kami anak-anak minum cola. Kakak laki-laki juga suka makan cokelat. Apakah kamu makan makanan laut?",
  ),
  paragraph(
    "Lengkapi paragraf tentang paman yang bekerja di restoran berikut!",
    [
      "我叔叔在饭馆工作，他每天做很多菜。他做的牛.......很好吃，客人都爱吃。客人也爱喝.......，叔叔自己不喝，他喝酸奶。他.......不吃海鲜，他说海鲜太贵。你喜欢不.......吃土豆？",
    ],
    [
      { id: 1, answer: "肉", extras: ["酒", "也"] },
      { id: 2, answer: "酒", extras: ["肉", "饼干"] },
      { id: 3, answer: "也", extras: ["吃", "喝"] },
      { id: 4, answer: "喜欢", extras: ["吃", "也"] },
    ],
    "Wǒ shūshu zài fànguǎn gōngzuò, tā měi tiān zuò hěn duō cài. Tā zuò de niú ....... hěn hǎochī, kèrén dōu ài chī. Kèrén yě ài hē ....... , shūshu zìjǐ bù hē, tā hē suānnǎi. Tā ....... bù chī hǎixiān, tā shuō hǎixiān tài guì. Nǐ xǐhuan bu ....... chī tǔdòu?",
    "Pamanku bekerja di restoran, setiap hari dia memasak banyak hidangan. Daging sapi yang dia masak enak sekali, para tamu semuanya suka. Para tamu juga suka minum minuman keras, paman sendiri tidak minum, dia minum yogurt. Dia juga tidak makan makanan laut, katanya makanan laut terlalu mahal. Apakah kamu suka makan kentang?",
  ),
  paragraph(
    "Lengkapi percakapan di restoran berikut!",
    [
      "A：请问，你们有什么吃的？B：有肉、鸡蛋和豆腐。你吃不.......肉？A：我不吃肉，我.......吃豆腐。B：我.......喜欢吃豆腐。A：我还要一杯很酸的.......。",
    ],
    [
      { id: 1, answer: "吃", extras: ["喝", "也"] },
      { id: 2, answer: "喜欢", extras: ["喝", "酒"] },
      { id: 3, answer: "也", extras: ["吃", "喝"] },
      { id: 4, answer: "酸奶", extras: ["肉", "饼干"] },
    ],
    "A: Qǐngwèn, nǐmen yǒu shénme chī de? B: Yǒu ròu, jīdàn hé dòufu. Nǐ chī bu ....... ròu? A: Wǒ bù chī ròu, wǒ ....... chī dòufu. B: Wǒ ....... xǐhuan chī dòufu. A: Wǒ hái yào yì bēi hěn suān de ....... .",
    "A: Permisi, kalian punya makanan apa? B: Ada daging, telur, dan tahu. Apakah kamu makan daging? A: Saya tidak makan daging, saya suka makan tahu. B: Saya juga suka makan tahu. A: Saya juga mau segelas yogurt yang sangat asam.",
  ),
  paragraph(
    "Lengkapi paragraf tentang barbeku di taman berikut!",
    [
      "周末我们在公园烤.......，爸爸吃了很多块。妈妈喜欢吃海鲜，我.......喜欢吃海鲜。小弟弟不能喝酒，他喜欢喝很酸的.......。你吃不.......海鲜？",
    ],
    [
      { id: 1, answer: "肉", extras: ["酒", "也"] },
      { id: 2, answer: "也", extras: ["吃", "喝"] },
      { id: 3, answer: "酸奶", extras: ["肉", "饼干"] },
      { id: 4, answer: "吃", extras: ["喝", "也"] },
    ],
    "Zhōumò wǒmen zài gōngyuán kǎo ....... , bàba chī le hěn duō kuài. Māma xǐhuan chī hǎixiān, wǒ ....... xǐhuan chī hǎixiān. Xiǎo dìdi bù néng hē jiǔ, tā xǐhuan hē hěn suān de ....... . Nǐ chī bu ....... hǎixiān?",
    "Akhir pekan kami memanggang daging di taman, ayah makan banyak potong. Ibu suka makan makanan laut, saya juga suka makan makanan laut. Adik kecil tidak boleh minum minuman keras, dia suka minum yogurt yang sangat asam. Apakah kamu makan makanan laut?",
  ),
  paragraph(
    "Lengkapi paragraf tentang makanan mahasiswa berikut!",
    [
      "我是大学生，每天吃得很简单。早上我吃一个.......，白色的，是鸡生的，还喝一杯酸奶。中午我吃米饭和.......，它是用豆浆做的。晚上我.......喝可乐，不喝酒。我的室友.......喜欢喝可乐。",
    ],
    [
      { id: 1, answer: "鸡蛋", extras: ["酒", "喝"] },
      { id: 2, answer: "豆腐", extras: ["喝", "也"] },
      { id: 3, answer: "喜欢", extras: ["吃", "酒"] },
      { id: 4, answer: "也", extras: ["吃", "喝"] },
    ],
    "Wǒ shì dàxuéshēng, měi tiān chī de hěn jiǎndān. Zǎoshang wǒ chī yí ge ....... , báisè de, shì jī shēng de, hái hē yì bēi suānnǎi. Zhōngwǔ wǒ chī mǐfàn hé ....... , tā shì yòng dòujiāng zuò de. Wǎnshang wǒ ....... hē kělè, bù hē jiǔ. Wǒ de shìyǒu ....... xǐhuan hē kělè.",
    "Saya mahasiswa, makanan saya setiap hari sederhana. Pagi hari saya makan sebuah telur yang berwarna putih dan berasal dari ayam, juga minum segelas yogurt. Siang hari saya makan nasi dan tahu, yang dibuat dari susu kedelai. Malam hari saya suka minum cola, tidak minum minuman keras. Teman sekamarku juga suka minum cola.",
  ),
  paragraph(
    "Lengkapi paragraf tentang hadiah ulang tahun guru berikut!",
    [
      "老师今天过生日，同学们都给她送东西。小红送了一块黑色的、很甜的.......，大卫送了两个红色的.......。老师说：“我喜欢吃甜的，我.......喜欢吃水果。”她又问大家：“你们吃不.......饼干？”",
    ],
    [
      { id: 1, answer: "巧克力", extras: ["酒", "喝"] },
      { id: 2, answer: "苹果", extras: ["喝", "也"] },
      { id: 3, answer: "也", extras: ["吃", "喝"] },
      { id: 4, answer: "吃", extras: ["喝", "也"] },
    ],
    "Lǎoshī jīntiān guò shēngrì, tóngxuémen dōu gěi tā sòng dōngxi. Xiǎohóng sòng le yí kuài hēisè de, hěn tián de ....... , Dàwèi sòng le liǎng ge hóngsè de ....... . Lǎoshī shuō: “Wǒ xǐhuan chī tián de, wǒ ....... xǐhuan chī shuǐguǒ.” Tā yòu wèn dàjiā: “Nǐmen chī bu ....... bǐnggān?”",
    "Hari ini guru berulang tahun, para siswa semuanya memberinya hadiah. Xiaohong memberi sepotong cokelat yang berwarna hitam dan sangat manis, David memberi dua apel merah. Guru berkata: “Saya suka makanan manis, saya juga suka makan buah.” Beliau lalu bertanya kepada semua: “Apakah kalian makan biskuit?”",
  ),
  paragraph(
    "Lengkapi percakapan tentang makanan favorit berikut!",
    [
      "A：你喝不.......酸奶？B：我喝，我.......爱喝可乐。A：我不爱喝可乐，我爱吃在土里长的.......。B：我爱吃橙色的.......。A：我们都爱吃菜！",
    ],
    [
      { id: 1, answer: "喝", extras: ["吃", "也"] },
      { id: 2, answer: "也", extras: ["吃", "喝"] },
      { id: 3, answer: "土豆", extras: ["喝", "也"] },
      { id: 4, answer: "胡萝卜", extras: ["酒", "喝"] },
    ],
    "A: Nǐ hē bu ....... suānnǎi? B: Wǒ hē, wǒ ....... ài hē kělè. A: Wǒ bú ài hē kělè, wǒ ài chī zài tǔ lǐ zhǎng de ....... . B: Wǒ ài chī chéngsè de ....... . A: Wǒmen dōu ài chī cài!",
    "A: Apakah kamu minum yogurt? B: Minum, saya juga suka minum cola. A: Saya tidak suka minum cola, saya suka makan kentang yang tumbuh di dalam tanah. B: Saya suka makan wortel yang berwarna oranye. A: Kita semua suka makan sayur!",
  ),
];

export const u8_lessons: Lesson[] = [
  {
    id: "u8_l1",
    title: "U8 L1",
    exercises: u8_sentences,
  },
  {
    id: "u8_l2",
    title: "U8 L2",
    exercises: u8_paragraphs,
  },
];
