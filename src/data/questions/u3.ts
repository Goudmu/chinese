import type { Lesson } from "@/data/course";
import { paragraph, sentence } from "@/data/questions/helpers";

const u3_sentences = [
  sentence(
    "Saya mau satu cangkir kopi.",
    ["我", "要", "一", "杯", "咖啡"],
    ["瓶", "茶", "两"],
  ),
  sentence(
    "Saya mau dua gelas air.",
    ["我", "要", "两", "杯", "水"],
    ["一", "瓶", "不"],
  ),
  sentence(
    "Apakah kamu mau satu botol susu?",
    ["你", "要", "一", "瓶", "牛奶", "吗"],
    ["杯", "三", "他"],
  ),
  sentence(
    "Dia (laki-laki) mau tiga potong kue.",
    ["他", "要", "三", "块", "蛋糕"],
    ["个", "四", "她"],
  ),
  sentence(
    "Dia (perempuan) mau empat roti.",
    ["她", "要", "四", "个", "面包"],
    ["块", "五", "他"],
  ),
  sentence(
    "Kamu mau berapa gelas teh?",
    ["你", "要", "几", "杯", "茶"],
    ["瓶", "吗", "谁"],
  ),
  sentence(
    "Kamu mau berapa potong kue?",
    ["你", "要", "几", "块", "蛋糕"],
    ["个", "两", "吗"],
  ),
  sentence(
    "Kamu mau berapa botol cola?",
    ["你", "要", "几", "瓶", "可乐"],
    ["杯", "不", "我"],
  ),
  sentence(
    "Saya mau lima roti.",
    ["我", "要", "五", "个", "面包"],
    ["块", "四", "和"],
  ),
  sentence(
    "Saya mau kopi dan teh.",
    ["我", "要", "咖啡", "和", "茶"],
    ["水", "不", "杯"],
  ),
  sentence(
    "Apakah kamu mau jus dan air?",
    ["你", "要", "果汁", "和", "水", "吗"],
    ["可乐", "他", "不"],
  ),
  sentence(
    "Dia (laki-laki) mau susu dan roti.",
    ["他", "要", "牛奶", "和", "面包"],
    ["蛋糕", "她", "两"],
  ),
  sentence(
    "Dia (perempuan) mau kue dan kopi.",
    ["她", "要", "蛋糕", "和", "咖啡"],
    ["茶", "他", "块"],
  ),
  sentence(
    "Saya mau satu gelas teh dan satu potong kue.",
    ["我", "要", "一", "杯", "茶", "和", "一", "块", "蛋糕"],
    ["瓶", "个", "两"],
  ),
  sentence(
    "Guru mau dua cangkir kopi.",
    ["老师", "要", "两", "杯", "咖啡"],
    ["瓶", "三", "学生"],
  ),
  sentence(
    "Bos mau satu botol air.",
    ["老板", "要", "一", "瓶", "水"],
    ["杯", "同事", "不"],
  ),
  sentence(
    "Teman saya mau dua botol cola.",
    ["我", "的", "朋友", "要", "两", "瓶", "可乐"],
    ["杯", "你", "三"],
  ),
  sentence(
    "Teman sekelas mau tiga gelas jus.",
    ["同学", "们", "要", "三", "杯", "果汁"],
    ["瓶", "水", "吗"],
  ),
  sentence(
    "Ini kopi saya.",
    ["这", "是", "我", "的", "咖啡"],
    ["那", "茶", "你"],
  ),
  sentence(
    "Itu susu kamu.",
    ["那", "是", "你", "的", "牛奶"],
    ["这", "水", "我"],
  ),
  sentence(
    "Ini kopi siapa?",
    ["这", "是", "谁", "的", "咖啡"],
    ["那", "茶", "吗"],
  ),
  sentence(
    "Itu kue siapa?",
    ["那", "是", "谁", "的", "蛋糕"],
    ["这", "面包", "你"],
  ),
  sentence(
    "Saya tidak mau teh.",
    ["我", "不", "要", "茶"],
    ["咖啡", "他", "和"],
  ),
  sentence(
    "Dia (laki-laki) tidak mau kopi.",
    ["他", "不", "要", "咖啡"],
    ["她", "牛奶", "吗"],
  ),
  sentence(
    "Apakah kamu mau teh?",
    ["你", "要", "茶", "吗"],
    ["不", "咖啡", "和"],
  ),
  sentence(
    "Teman sekelas mau berapa roti?",
    ["同学", "们", "要", "几", "个", "面包"],
    ["块", "吗", "谁"],
  ),
  sentence(
    "Rekan kerja saya mau empat gelas teh.",
    ["我", "的", "同事", "要", "四", "杯", "茶"],
    ["瓶", "五", "你"],
  ),
  sentence(
    "Ini adalah teman saya dan guru saya.",
    ["这", "是", "我", "的", "朋友", "和", "我", "的", "老师"],
    ["那", "咖啡", "吗"],
  ),
  sentence(
    "Pacar saya (laki-laki) mau satu gelas jus.",
    ["我", "的", "男朋友", "要", "一", "杯", "果汁"],
    ["瓶", "女朋友", "两"],
  ),
  sentence(
    "Rekan kerja kamu mau tiga roti.",
    ["你", "的", "同事", "要", "三", "个", "面包"],
    ["块", "四", "不"],
  ),
];

export const u3_lessons: Lesson[] = [
  {
    id: "u3_l1",
    title: "Menyapa",
    exercises: [
      paragraph(
        "Lengkapi paragraf tentang di restoran berikut!",
        [
          "今天我和朋友去饭馆。朋友喝茶，我不喝茶，我要一杯.......。我要一块蛋糕，朋友也要一块蛋糕，所以一共要.......块蛋糕。朋友说：“我要一杯茶.......一块蛋糕。”服务员问：“你们还要.......杯水？”我们说：“不要，谢谢！”",
        ],
        [
          { id: 1, answer: "咖啡", extras: ["蛋糕", "面包"] },
          { id: 2, answer: "两", extras: ["三", "四"] },
          { id: 3, answer: "和", extras: ["要", "几"] },
          { id: 4, answer: "几", extras: ["和", "要"] },
        ],
        "Jīntiān wǒ hé péngyou qù fànguǎn. Péngyou hē chá, wǒ bù hē chá, wǒ yào yì bēi ....... . Wǒ yào yí kuài dàngāo, péngyou yě yào yí kuài dàngāo, suǒyǐ yígòng yào ....... kuài dàngāo. Péngyou shuō: “Wǒ yào yì bēi chá ....... yí kuài dàngāo.” Fúwùyuán wèn: “Nǐmen hái yào ....... bēi shuǐ?” Wǒmen shuō: “Bú yào, xièxie!”",
        "Hari ini saya dan teman pergi ke restoran. Teman minum teh, saya tidak minum teh, saya mau secangkir kopi. Saya mau sepotong kue, teman juga mau sepotong kue, jadi totalnya mau dua potong kue. Teman berkata: “Saya mau secangkir teh dan sepotong kue.” Pelayan bertanya: “Kalian masih mau berapa gelas air?” Kami berkata: “Tidak mau, terima kasih!”",
      ),
      paragraph(
        "Lengkapi paragraf tentang sarapan berikut!",
        [
          "早上我很饿。我要一个.......，还要牛奶。妈妈要一杯咖啡.......一块蛋糕。爸爸问我：“你要.......杯牛奶？”我说：“我要一杯。”弟弟说：“我也要一杯，所以我们一共要.......杯牛奶。”",
        ],
        [
          { id: 1, answer: "面包", extras: ["咖啡", "茶"] },
          { id: 2, answer: "和", extras: ["要", "几"] },
          { id: 3, answer: "几", extras: ["和", "要"] },
          { id: 4, answer: "两", extras: ["三", "四"] },
        ],
        "Zǎoshang wǒ hěn è. Wǒ yào yí ge ....... , hái yào niúnǎi. Māma yào yì bēi kāfēi ....... yí kuài dàngāo. Bàba wèn wǒ: “Nǐ yào ....... bēi niúnǎi?” Wǒ shuō: “Wǒ yào yì bēi.” Dìdi shuō: “Wǒ yě yào yì bēi, suǒyǐ wǒmen yígòng yào ....... bēi niúnǎi.”",
        "Pagi hari saya sangat lapar. Saya mau sebuah roti, juga mau susu. Ibu mau secangkir kopi dan sepotong kue. Ayah bertanya padaku: “Kamu mau berapa gelas susu?” Saya berkata: “Saya mau segelas.” Adik berkata: “Saya juga mau segelas, jadi kami totalnya mau dua gelas susu.”",
      ),
      paragraph(
        "Lengkapi paragraf tentang pesta ulang tahun berikut!",
        [
          "今天是小明的生日。我们买了一个大.......。我们有小明、小红、大卫、小英和我，每个人吃一块，所以要切.......块。大卫喜欢可乐，他要一.......可乐。小红要一杯果汁.......一块蛋糕。祝小明生日快乐！",
        ],
        [
          { id: 1, answer: "蛋糕", extras: ["咖啡", "牛奶"] },
          { id: 2, answer: "五", extras: ["三", "四"] },
          { id: 3, answer: "瓶", extras: ["块", "个"] },
          { id: 4, answer: "和", extras: ["要", "几"] },
        ],
        "Jīntiān shì Xiǎomíng de shēngrì. Wǒmen mǎi le yí ge dà ....... . Wǒmen yǒu Xiǎomíng, Xiǎohóng, Dàwèi, Xiǎoyīng hé wǒ, měi ge rén chī yí kuài, suǒyǐ yào qiē ....... kuài. Dàwèi xǐhuan kělè, tā yào yì ....... kělè. Xiǎohóng yào yì bēi guǒzhī ....... yí kuài dàngāo. Zhù Xiǎomíng shēngrì kuàilè!",
        "Hari ini ulang tahun Xiaoming. Kami membeli sebuah kue besar. Kami ada Xiaoming, Xiaohong, David, Xiaoying, dan saya, setiap orang makan sepotong, jadi harus dipotong lima potong. David suka cola, dia mau sebotol cola. Xiaohong mau segelas jus dan sepotong kue. Selamat ulang tahun Xiaoming!",
      ),
      paragraph(
        "Lengkapi paragraf tentang belanja di supermarket berikut!",
        [
          "我和姐姐在超市买东西。我很渴，我要一.......水。姐姐喜欢喝可乐，她.......两瓶可乐。我们还要面包，我要一块，姐姐要两块，所以一共要.......块面包。老板问：“你们还要.......瓶牛奶？”姐姐说：“不要，谢谢。”",
        ],
        [
          { id: 1, answer: "瓶", extras: ["块", "个"] },
          { id: 2, answer: "要", extras: ["和", "几"] },
          { id: 3, answer: "三", extras: ["两", "四"] },
          { id: 4, answer: "几", extras: ["和", "要"] },
        ],
        "Wǒ hé jiějie zài chāoshì mǎi dōngxi. Wǒ hěn kě, wǒ yào yì ....... shuǐ. Jiějie xǐhuan hē kělè, tā ....... liǎng píng kělè. Wǒmen hái yào miànbāo, wǒ yào yí kuài, jiějie yào liǎng kuài, suǒyǐ yígòng yào ....... kuài miànbāo. Lǎobǎn wèn: “Nǐmen hái yào ....... píng niúnǎi?” Jiějie shuō: “Bú yào, xièxie.”",
        "Saya dan kakak perempuan berbelanja di supermarket. Saya sangat haus, saya mau sebotol air. Kakak suka minum cola, dia mau dua botol cola. Kami juga mau roti, saya mau sepotong, kakak mau dua potong, jadi totalnya mau tiga potong roti. Pemilik toko bertanya: “Kalian masih mau berapa botol susu?” Kakak berkata: “Tidak mau, terima kasih.”",
      ),
      paragraph(
        "Lengkapi paragraf tentang makan siang di sekolah berikut!",
        [
          "中午我和同学在学校吃饭。我要两个面包，同学要一个面包，所以我们一共要.......个面包。我不喝茶，我要一杯.......。同学要一杯茶.......一块.......。我们吃得很高兴。",
        ],
        [
          { id: 1, answer: "三", extras: ["两", "四"] },
          { id: 2, answer: "果汁", extras: ["蛋糕", "面包"] },
          { id: 3, answer: "和", extras: ["要", "几"] },
          { id: 4, answer: "蛋糕", extras: ["果汁", "咖啡"] },
        ],
        "Zhōngwǔ wǒ hé tóngxué zài xuéxiào chī fàn. Wǒ yào liǎng ge miànbāo, tóngxué yào yí ge miànbāo, suǒyǐ wǒmen yígòng yào ....... ge miànbāo. Wǒ bù hē chá, wǒ yào yì bēi ....... . Tóngxué yào yì bēi chá ....... yí kuài ....... . Wǒmen chī de hěn gāoxìng.",
        "Siang hari saya dan teman sekelas makan di sekolah. Saya mau dua roti, teman mau satu roti, jadi totalnya kami mau tiga roti. Saya tidak minum teh, saya mau segelas jus. Teman sekelas mau secangkir teh dan sepotong kue. Kami makan dengan gembira.",
      ),
      paragraph(
        "Lengkapi percakapan di kafe berikut!",
        [
          "A：你好！你要.......杯咖啡？B：我要咖啡，一杯是我的，一杯是我朋友的。A：你们要蛋糕吗？B：要，我们要一.......蛋糕，我们一起吃。A：好的，一共是.......杯咖啡.......一块蛋糕。",
        ],
        [
          { id: 1, answer: "几", extras: ["和", "要"] },
          { id: 2, answer: "块", extras: ["杯", "瓶"] },
          { id: 3, answer: "两", extras: ["三", "四"] },
          { id: 4, answer: "和", extras: ["要", "几"] },
        ],
        "A: Nǐ hǎo! Nǐ yào ....... bēi kāfēi? B: Wǒ yào kāfēi, yì bēi shì wǒ de, yì bēi shì wǒ péngyou de. A: Nǐmen yào dàngāo ma? B: Yào, wǒmen yào yí ....... dàngāo, wǒmen yìqǐ chī. A: Hǎo de, yígòng shì ....... bēi kāfēi ....... yí kuài dàngāo.",
        "A: Halo! Kamu mau berapa gelas kopi? B: Saya mau kopi, segelas untuk saya, segelas untuk teman saya. A: Apakah kalian mau kue? B: Mau, kami mau sepotong kue, kami makan bersama. A: Baik, totalnya dua gelas kopi dan sepotong kue.",
      ),
      paragraph(
        "Lengkapi paragraf tentang minuman keluarga berikut!",
        [
          "我家的人有妈妈、爸爸、姐姐和我。妈妈喜欢喝茶，爸爸喜欢喝咖啡，姐姐喜欢喝果汁。我和他们不一样，我喜欢白色的.......。每天早上我们每个人都要一杯，所以一共要.......杯饮料。今天爸爸去买一.......水，他还买了面包.......蛋糕。",
        ],
        [
          { id: 1, answer: "牛奶", extras: ["茶", "咖啡"] },
          { id: 2, answer: "四", extras: ["三", "五"] },
          { id: 3, answer: "瓶", extras: ["块", "个"] },
          { id: 4, answer: "和", extras: ["要", "几"] },
        ],
        "Wǒ jiā de rén yǒu māma, bàba, jiějie hé wǒ. Māma xǐhuan hē chá, bàba xǐhuan hē kāfēi, jiějie xǐhuan hē guǒzhī. Wǒ hé tāmen bù yíyàng, wǒ xǐhuan báisè de ....... . Měi tiān zǎoshang wǒmen měi ge rén dōu yào yì bēi, suǒyǐ yígòng yào ....... bēi yǐnliào. Jīntiān bàba qù mǎi yì ....... shuǐ, tā hái mǎi le miànbāo ....... dàngāo.",
        "Anggota keluargaku adalah ibu, ayah, kakak perempuan, dan saya. Ibu suka minum teh, ayah suka minum kopi, kakak suka minum jus. Saya tidak sama dengan mereka, saya suka susu yang berwarna putih. Setiap pagi kami masing-masing mau satu gelas, jadi totalnya mau empat gelas minuman. Hari ini ayah pergi membeli sebotol air, dia juga membeli roti dan kue.",
      ),
      paragraph(
        "Lengkapi paragraf tentang makan di restoran bersama keluarga berikut!",
        [
          "我们一家人去饭馆，有爸爸、妈妈、哥哥、姐姐和我。每个人要一杯果汁，所以服务员拿来.......杯果汁。爸爸.......妈妈还要一块蛋糕。哥哥饿了，他要一.......面包。服务员问：“你们还要.......瓶可乐？”我们说：“不要了。”",
        ],
        [
          { id: 1, answer: "五", extras: ["三", "四"] },
          { id: 2, answer: "和", extras: ["要", "几"] },
          { id: 3, answer: "个", extras: ["杯", "瓶"] },
          { id: 4, answer: "几", extras: ["和", "要"] },
        ],
        "Wǒmen yì jiā rén qù fànguǎn, yǒu bàba, māma, gēge, jiějie hé wǒ. Měi ge rén yào yì bēi guǒzhī, suǒyǐ fúwùyuán nálái ....... bēi guǒzhī. Bàba ....... māma hái yào yí kuài dàngāo. Gēge è le, tā yào yí ....... miànbāo. Fúwùyuán wèn: “Nǐmen hái yào ....... píng kělè?” Wǒmen shuō: “Bú yào le.”",
        "Kami sekeluarga pergi ke restoran, ada ayah, ibu, kakak laki-laki, kakak perempuan, dan saya. Setiap orang mau segelas jus, jadi pelayan membawa lima gelas jus. Ayah dan ibu juga mau sepotong kue. Kakak laki-laki lapar, dia mau sebuah roti. Pelayan bertanya: “Kalian masih mau berapa botol cola?” Kami berkata: “Tidak usah lagi.”",
      ),
      paragraph(
        "Lengkapi paragraf tentang sarapan di akhir pekan berikut!",
        [
          "周末早上，我去商店买早饭。我要两瓶牛奶，妈妈也.......两瓶牛奶，所以我一共买.......瓶牛奶。我还要一.......面包，爸爸要一块蛋糕。我把面包.......蛋糕放在桌子上。",
        ],
        [
          { id: 1, answer: "要", extras: ["和", "几"] },
          { id: 2, answer: "四", extras: ["三", "五"] },
          { id: 3, answer: "个", extras: ["杯", "瓶"] },
          { id: 4, answer: "和", extras: ["要", "几"] },
        ],
        "Zhōumò zǎoshang, wǒ qù shāngdiàn mǎi zǎofàn. Wǒ yào liǎng píng niúnǎi, māma yě ....... liǎng píng niúnǎi, suǒyǐ wǒ yígòng mǎi ....... píng niúnǎi. Wǒ hái yào yí ....... miànbāo, bàba yào yí kuài dàngāo. Wǒ bǎ miànbāo ....... dàngāo fàng zài zhuōzi shàng.",
        "Pagi akhir pekan, saya pergi ke toko membeli sarapan. Saya mau dua botol susu, ibu juga mau dua botol susu, jadi totalnya saya membeli empat botol susu. Saya juga mau sebuah roti, ayah mau sepotong kue. Saya meletakkan roti dan kue di atas meja.",
      ),
      paragraph(
        "Lengkapi paragraf tentang teman yang datang ke rumah berikut!",
        [
          "朋友来我家玩，我问他：“你要.......杯茶？”朋友说：“我要一杯，谢谢。”我又问：“你要蛋糕.......面包吗？”朋友说：“都要，我要一块蛋糕，也要一.......面包。”我也要一杯茶，所以我们一共要.......杯茶。",
        ],
        [
          { id: 1, answer: "几", extras: ["和", "要"] },
          { id: 2, answer: "和", extras: ["要", "几"] },
          { id: 3, answer: "块", extras: ["杯", "瓶"] },
          { id: 4, answer: "两", extras: ["三", "四"] },
        ],
        "Péngyou lái wǒ jiā wán, wǒ wèn tā: “Nǐ yào ....... bēi chá?” Péngyou shuō: “Wǒ yào yì bēi, xièxie.” Wǒ yòu wèn: “Nǐ yào dàngāo ....... miànbāo ma?” Péngyou shuō: “Dōu yào, wǒ yào yí kuài dàngāo, yě yào yí ....... miànbāo.” Wǒ yě yào yì bēi chá, suǒyǐ wǒmen yígòng yào ....... bēi chá.",
        "Teman datang bermain ke rumahku, saya bertanya padanya: “Kamu mau berapa cangkir teh?” Teman berkata: “Saya mau secangkir, terima kasih.” Saya bertanya lagi: “Apakah kamu mau kue dan roti?” Teman berkata: “Dua-duanya mau, saya mau sepotong kue, juga mau sepotong roti.” Saya juga mau secangkir teh, jadi totalnya kami mau dua cangkir teh.",
      ),
      paragraph(
        "Lengkapi paragraf tentang setelah berolahraga berikut!",
        [
          "今天我和同学打篮球，我们很渴。我.......两瓶水，同学要一.......可乐。老师也来了，他要一杯茶.......一块面包。我们三.......人都很高兴。",
        ],
        [
          { id: 1, answer: "要", extras: ["和", "几"] },
          { id: 2, answer: "瓶", extras: ["块", "个"] },
          { id: 3, answer: "和", extras: ["要", "几"] },
          { id: 4, answer: "个", extras: ["杯", "瓶"] },
        ],
        "Jīntiān wǒ hé tóngxué dǎ lánqiú, wǒmen hěn kě. Wǒ ....... liǎng píng shuǐ, tóngxué yào yì ....... kělè. Lǎoshī yě lái le, tā yào yì bēi chá ....... yí kuài miànbāo. Wǒmen sān ....... rén dōu hěn gāoxìng.",
        "Hari ini saya dan teman sekelas bermain basket, kami sangat haus. Saya mau dua botol air, teman mau sebotol cola. Guru juga datang, dia mau secangkir teh dan sepotong roti. Kami bertiga sangat senang.",
      ),
      paragraph(
        "Lengkapi paragraf tentang musim dingin berikut!",
        [
          "冬天很冷，我喜欢喝热茶。今天我要一杯茶，还要一.......面包。朋友不喝茶，他要一杯.......。他的女朋友也来了，她要两.......蛋糕。我.......朋友都喜欢这家店。",
        ],
        [
          { id: 1, answer: "个", extras: ["杯", "瓶"] },
          { id: 2, answer: "咖啡", extras: ["蛋糕", "面包"] },
          { id: 3, answer: "块", extras: ["杯", "瓶"] },
          { id: 4, answer: "和", extras: ["要", "几"] },
        ],
        "Dōngtiān hěn lěng, wǒ xǐhuan hē rè chá. Jīntiān wǒ yào yì bēi chá, hái yào yí ....... miànbāo. Péngyou bù hē chá, tā yào yì bēi ....... . Tā de nǚpéngyou yě lái le, tā yào liǎng ....... dàngāo. Wǒ ....... péngyou dōu xǐhuan zhè jiā diàn.",
        "Musim dingin sangat dingin, saya suka minum teh panas. Hari ini saya mau secangkir teh, juga mau sebuah roti. Teman tidak minum teh, dia mau secangkir kopi. Pacar perempuannya juga datang, dia mau dua potong kue. Saya dan teman sama-sama suka toko ini.",
      ),
      paragraph(
        "Lengkapi paragraf tentang rapat di kantor berikut!",
        [
          "今天公司有会，老板问同事们：“你们要.......杯咖啡？”我说：“我要一杯，老板也要一杯。”小李说：“我不喝咖啡，我要一.......水。”小王说：“我.......小李一样，也要一瓶水。”老板说：“好，一共是两杯咖啡和.......瓶水。”",
        ],
        [
          { id: 1, answer: "几", extras: ["和", "要"] },
          { id: 2, answer: "瓶", extras: ["块", "个"] },
          { id: 3, answer: "和", extras: ["要", "几"] },
          { id: 4, answer: "两", extras: ["三", "四"] },
        ],
        "Jīntiān gōngsī yǒu huì, lǎobǎn wèn tóngshìmen: “Nǐmen yào ....... bēi kāfēi?” Wǒ shuō: “Wǒ yào yì bēi, lǎobǎn yě yào yì bēi.” Xiǎo Lǐ shuō: “Wǒ bù hē kāfēi, wǒ yào yì ....... shuǐ.” Xiǎo Wáng shuō: “Wǒ ....... Xiǎo Lǐ yíyàng, yě yào yì píng shuǐ.” Lǎobǎn shuō: “Hǎo, yígòng shì liǎng bēi kāfēi hé ....... píng shuǐ.”",
        "Hari ini ada rapat di perusahaan, bos bertanya kepada rekan-rekan kerja: “Kalian mau berapa gelas kopi?” Saya berkata: “Saya mau segelas, bos juga mau segelas.” Xiao Li berkata: “Saya tidak minum kopi, saya mau sebotol air.” Xiao Wang berkata: “Saya sama seperti Xiao Li, juga mau sebotol air.” Bos berkata: “Baik, totalnya dua gelas kopi dan dua botol air.”",
      ),
      paragraph(
        "Lengkapi paragraf tentang makan malam di rumah berikut!",
        [
          "晚上我们在家吃晚饭。爸爸很渴，他要一.......可乐。我喜欢甜的，我要一杯.......。弟弟也喜欢甜的，他要一块.......。妈妈不喝可乐，她.......一杯茶。大家都很高兴。",
        ],
        [
          { id: 1, answer: "瓶", extras: ["块", "个"] },
          { id: 2, answer: "果汁", extras: ["蛋糕", "面包"] },
          { id: 3, answer: "蛋糕", extras: ["果汁", "可乐"] },
          { id: 4, answer: "要", extras: ["和", "几"] },
        ],
        "Wǎnshang wǒmen zài jiā chī wǎnfàn. Bàba hěn kě, tā yào yì ....... kělè. Wǒ xǐhuan tián de, wǒ yào yì bēi ....... . Dìdi yě xǐhuan tián de, tā yào yí kuài ....... . Māma bù hē kělè, tā ....... yì bēi chá. Dàjiā dōu hěn gāoxìng.",
        "Malam hari kami makan malam di rumah. Ayah sangat haus, dia mau sebotol cola. Saya suka yang manis, saya mau segelas jus. Adik juga suka yang manis, dia mau sepotong kue. Ibu tidak minum cola, dia mau secangkir teh. Semua orang sangat senang.",
      ),
      paragraph(
        "Lengkapi paragraf tentang toko sekolah berikut!",
        [
          "下课了，同学们去学校的商店。商店里的东西很多。小明要一.......面包.......一瓶水。小红要三块蛋糕，大卫要两块蛋糕，他们一共要.......块蛋糕。老师问同学们：“你们还要.......瓶可乐？”",
        ],
        [
          { id: 1, answer: "个", extras: ["杯", "瓶"] },
          { id: 2, answer: "和", extras: ["要", "几"] },
          { id: 3, answer: "五", extras: ["三", "四"] },
          { id: 4, answer: "几", extras: ["和", "要"] },
        ],
        "Xiàkè le, tóngxuémen qù xuéxiào de shāngdiàn. Shāngdiàn lǐ de dōngxi hěn duō. Xiǎomíng yào yí ....... miànbāo ....... yì píng shuǐ. Xiǎohóng yào sān kuài dàngāo, Dàwèi yào liǎng kuài dàngāo, tāmen yígòng yào ....... kuài dàngāo. Lǎoshī wèn tóngxuémen: “Nǐmen hái yào ....... píng kělè?”",
        "Pelajaran selesai, teman-teman sekelas pergi ke toko sekolah. Barang di toko itu banyak sekali. Xiaoming mau sebuah roti dan sebotol air. Xiaohong mau tiga potong kue, David mau dua potong kue, jadi totalnya mereka mau lima potong kue. Guru bertanya kepada para siswa: “Kalian masih mau berapa botol cola?”",
      ),
      paragraph(
        "Lengkapi paragraf tentang memesan lewat internet berikut!",
        [
          "我在网上点东西。我要一.......咖啡，我的朋友要一杯茶，所以一共要.......杯饮料。我还要一块蛋糕.......一个面包。朋友说：“我.......一块蛋糕。”我们都很喜欢在网上点东西。",
        ],
        [
          { id: 1, answer: "杯", extras: ["块", "个"] },
          { id: 2, answer: "两", extras: ["三", "四"] },
          { id: 3, answer: "和", extras: ["要", "几"] },
          { id: 4, answer: "要", extras: ["和", "几"] },
        ],
        "Wǒ zài wǎngshàng diǎn dōngxi. Wǒ yào yì ....... kāfēi, wǒ de péngyou yào yì bēi chá, suǒyǐ yígòng yào ....... bēi yǐnliào. Wǒ hái yào yí kuài dàngāo ....... yí ge miànbāo. Péngyou shuō: “Wǒ ....... yí kuài dàngāo.” Wǒmen dōu hěn xǐhuan zài wǎngshàng diǎn dōngxi.",
        "Saya memesan barang lewat internet. Saya mau secangkir kopi, temanku mau secangkir teh, jadi totalnya mau dua gelas minuman. Saya juga mau sepotong kue dan sebuah roti. Teman berkata: “Saya mau sepotong kue.” Kami berdua sangat suka memesan lewat internet.",
      ),
      paragraph(
        "Lengkapi percakapan dengan dokter berikut!",
        [
          "医生问我：“你每天喝.......杯水？”我说：“我每天喝一杯。”医生说：“太少了。早上一杯，中午一杯，晚上一杯，所以你每天要喝.......杯水。”我不喜欢喝水，我喜欢喝可乐。医生说：“可乐不好，你可以喝一.......牛奶.......一杯水。”",
        ],
        [
          { id: 1, answer: "几", extras: ["和", "要"] },
          { id: 2, answer: "三", extras: ["两", "四"] },
          { id: 3, answer: "瓶", extras: ["块", "个"] },
          { id: 4, answer: "和", extras: ["要", "几"] },
        ],
        "Yīshēng wèn wǒ: “Nǐ měi tiān hē ....... bēi shuǐ?” Wǒ shuō: “Wǒ měi tiān hē yì bēi.” Yīshēng shuō: “Tài shǎo le. Zǎoshang yì bēi, zhōngwǔ yì bēi, wǎnshang yì bēi, suǒyǐ nǐ měi tiān yào hē ....... bēi shuǐ.” Wǒ bù xǐhuan hē shuǐ, wǒ xǐhuan hē kělè. Yīshēng shuō: “Kělè bù hǎo, nǐ kěyǐ hē yì ....... niúnǎi ....... yì bēi shuǐ.”",
        "Dokter bertanya padaku: “Kamu minum berapa gelas air setiap hari?” Saya berkata: “Saya minum segelas setiap hari.” Dokter berkata: “Terlalu sedikit. Pagi segelas, siang segelas, malam segelas, jadi kamu harus minum tiga gelas air setiap hari.” Saya tidak suka minum air, saya suka minum cola. Dokter berkata: “Cola tidak baik, kamu boleh minum sebotol susu dan segelas air.”",
      ),
      paragraph(
        "Lengkapi paragraf tentang daftar belanja berikut!",
        [
          "妈妈写了一个购物清单，我去超市买东西。清单上写着：一.......牛奶，两.......面包，三.......蛋糕。妈妈还说：“你要买可乐.......果汁，爸爸喜欢可乐，我喜欢果汁。”我都买了。",
        ],
        [
          { id: 1, answer: "瓶", extras: ["块", "个"] },
          { id: 2, answer: "个", extras: ["杯", "瓶"] },
          { id: 3, answer: "块", extras: ["杯", "瓶"] },
          { id: 4, answer: "和", extras: ["要", "几"] },
        ],
        "Māma xiě le yí ge gòuwù qīngdān, wǒ qù chāoshì mǎi dōngxi. Qīngdān shàng xiě zhe: yì ....... niúnǎi, liǎng ....... miànbāo, sān ....... dàngāo. Māma hái shuō: “Nǐ yào mǎi kělè ....... guǒzhī, bàba xǐhuan kělè, wǒ xǐhuan guǒzhī.” Wǒ dōu mǎi le.",
        "Ibu menulis daftar belanja, saya pergi ke supermarket membeli barang. Di daftar tertulis: sebotol susu, dua roti, tiga potong kue. Ibu juga berkata: “Kamu harus membeli cola dan jus, ayah suka cola, ibu suka jus.” Saya membeli semuanya.",
      ),
      paragraph(
        "Lengkapi paragraf tentang pesta di rumah berikut!",
        [
          "周末我家有聚会。我问大卫：“你要.......杯茶？”大卫说：“我要两杯。”小英说：“我要一杯。”所以我一共要拿.......杯茶。我还拿了一.......面包，朋友们喜欢面包.......蛋糕。",
        ],
        [
          { id: 1, answer: "几", extras: ["和", "要"] },
          { id: 2, answer: "三", extras: ["两", "四"] },
          { id: 3, answer: "个", extras: ["杯", "瓶"] },
          { id: 4, answer: "和", extras: ["要", "几"] },
        ],
        "Zhōumò wǒ jiā yǒu jùhuì. Wǒ wèn Dàwèi: “Nǐ yào ....... bēi chá?” Dàwèi shuō: “Wǒ yào liǎng bēi.” Xiǎoyīng shuō: “Wǒ yào yì bēi.” Suǒyǐ wǒ yígòng yào ná ....... bēi chá. Wǒ hái ná le yí ....... miànbāo, péngyoumen xǐhuan miànbāo ....... dàngāo.",
        "Akhir pekan ada pesta di rumahku. Saya bertanya pada David: “Kamu mau berapa cangkir teh?” David berkata: “Saya mau dua cangkir.” Xiaoying berkata: “Saya mau secangkir.” Jadi totalnya saya harus mengambil tiga cangkir teh. Saya juga mengambil sebuah roti, teman-teman suka roti dan kue.",
      ),
      paragraph(
        "Lengkapi paragraf tentang minuman favorit berikut!",
        [
          "今天我们在一起喝东西。我每天早上都喝一杯.......，它有一点苦，但是我很喜欢。朋友喜欢甜的，他喝一杯.......，里面有很多水果。他的女朋友喜欢白色的饮料，她喝一杯.......。我、朋友和他的女朋友每人一杯，一共喝了.......杯。",
        ],
        [
          { id: 1, answer: "咖啡", extras: ["牛奶", "果汁"] },
          { id: 2, answer: "果汁", extras: ["咖啡", "茶"] },
          { id: 3, answer: "牛奶", extras: ["可乐", "茶"] },
          { id: 4, answer: "三", extras: ["两", "四"] },
        ],
        "Jīntiān wǒmen zài yìqǐ hē dōngxi. Wǒ měi tiān zǎoshang dōu hē yì bēi ....... , tā yǒu yìdiǎn kǔ, dànshì wǒ hěn xǐhuan. Péngyou xǐhuan tián de, tā hē yì bēi ....... , lǐmiàn yǒu hěn duō shuǐguǒ. Tā de nǚpéngyou xǐhuan báisè de yǐnliào, tā hē yì bēi ....... . Wǒ, péngyou hé tā de nǚpéngyou měi rén yì bēi, yígòng hē le ....... bēi.",
        "Hari ini kami minum bersama. Setiap pagi saya minum secangkir kopi, rasanya agak pahit, tetapi saya sangat suka. Teman suka yang manis, dia minum segelas jus, di dalamnya ada banyak buah. Pacar perempuannya suka minuman berwarna putih, dia minum segelas susu. Saya, teman, dan pacar perempuannya masing-masing satu gelas, totalnya kami minum tiga gelas.",
      ),
      paragraph(
        "Lengkapi percakapan memesan di kafe berikut!",
        [
          "A：欢迎光临！你要什么？B：我要一.......咖啡.......一杯果汁。A：你们要.......块蛋糕？B：我们有大卫、小英和我，每人一块。A：好的，一共是两杯饮料和.......块蛋糕。",
        ],
        [
          { id: 1, answer: "杯", extras: ["块", "个"] },
          { id: 2, answer: "和", extras: ["要", "几"] },
          { id: 3, answer: "几", extras: ["和", "要"] },
          { id: 4, answer: "三", extras: ["两", "四"] },
        ],
        "A: Huānyíng guānglín! Nǐ yào shénme? B: Wǒ yào yì ....... kāfēi ....... yì bēi guǒzhī. A: Nǐmen yào ....... kuài dàngāo? B: Wǒmen yǒu Dàwèi, Xiǎoyīng hé wǒ, měi rén yí kuài. A: Hǎo de, yígòng shì liǎng bēi yǐnliào hé ....... kuài dàngāo.",
        "A: Selamat datang! Kamu mau apa? B: Saya mau secangkir kopi dan segelas jus. A: Kalian mau berapa potong kue? B: Kami ada David, Xiaoying, dan saya, masing-masing satu potong. A: Baik, totalnya dua minuman dan tiga potong kue.",
      ),
      paragraph(
        "Lengkapi paragraf tentang malam hari di rumah berikut!",
        [
          "晚上我在家看电视，我很渴也很饿。我要一杯热.......。我还要一.......面包。我的朋友打电话来，他问：“你有咖啡.......茶吗？”我说：“我有，你要.......杯？”他说：“我要一杯，谢谢。”",
        ],
        [
          { id: 1, answer: "茶", extras: ["蛋糕", "面包"] },
          { id: 2, answer: "个", extras: ["杯", "瓶"] },
          { id: 3, answer: "和", extras: ["要", "几"] },
          { id: 4, answer: "几", extras: ["和", "要"] },
        ],
        "Wǎnshang wǒ zài jiā kàn diànshì, wǒ hěn kě yě hěn è. Wǒ yào yì bēi rè ....... . Wǒ hái yào yí ....... miànbāo. Wǒ de péngyou dǎ diànhuà lái, tā wèn: “Nǐ yǒu kāfēi ....... chá ma?” Wǒ shuō: “Wǒ yǒu, nǐ yào ....... bēi?” Tā shuō: “Wǒ yào yì bēi, xièxie.”",
        "Malam hari saya menonton TV di rumah, saya haus dan juga lapar. Saya mau secangkir teh panas. Saya juga mau sebuah roti. Temanku menelepon, dia bertanya: “Apakah kamu punya kopi dan teh?” Saya berkata: “Punya, kamu mau berapa cangkir?” Dia berkata: “Saya mau secangkir, terima kasih.”",
      ),
      paragraph(
        "Lengkapi paragraf tentang ulang tahun guru berikut!",
        [
          "今天是老师的生日，同学们给老师买了一.......大蛋糕。老师说：“谢谢！我.......大家一起吃。”我们买了三瓶果汁，小明又买了两瓶，所以一共有.......瓶果汁。老师问：“你们每个人要.......块蛋糕？”大家说：“一块！”",
        ],
        [
          { id: 1, answer: "个", extras: ["杯", "瓶"] },
          { id: 2, answer: "和", extras: ["要", "几"] },
          { id: 3, answer: "五", extras: ["三", "四"] },
          { id: 4, answer: "几", extras: ["和", "要"] },
        ],
        "Jīntiān shì lǎoshī de shēngrì, tóngxuémen gěi lǎoshī mǎi le yí ....... dà dàngāo. Lǎoshī shuō: “Xièxie! Wǒ ....... dàjiā yìqǐ chī.” Wǒmen mǎi le sān píng guǒzhī, Xiǎomíng yòu mǎi le liǎng píng, suǒyǐ yígòng yǒu ....... píng guǒzhī. Lǎoshī wèn: “Nǐmen měi ge rén yào ....... kuài dàngāo?” Dàjiā shuō: “Yí kuài!”",
        "Hari ini ulang tahun guru, para siswa membelikan guru sebuah kue besar. Guru berkata: “Terima kasih! Saya akan makan bersama kalian semua.” Kami membeli tiga botol jus, Xiaoming membeli dua botol lagi, jadi totalnya ada lima botol jus. Guru bertanya: “Kalian masing-masing mau berapa potong kue?” Semua berkata: “Satu potong!”",
      ),
      paragraph(
        "Lengkapi paragraf tentang kopi dan teh berikut!",
        [
          "我喜欢喝咖啡，我的朋友小红喜欢喝茶。今天我们去店里，我要一杯.......，小红要一杯.......。我们的老师也来了，他.......一杯水。我、小红和老师每人一杯饮料，所以一共是.......杯饮料。我们都很高兴。",
        ],
        [
          { id: 1, answer: "咖啡", extras: ["茶", "牛奶"] },
          { id: 2, answer: "茶", extras: ["咖啡", "果汁"] },
          { id: 3, answer: "要", extras: ["和", "几"] },
          { id: 4, answer: "三", extras: ["两", "四"] },
        ],
        "Wǒ xǐhuan hē kāfēi, wǒ de péngyou Xiǎohóng xǐhuan hē chá. Jīntiān wǒmen qù diàn lǐ, wǒ yào yì bēi ....... , Xiǎohóng yào yì bēi ....... . Wǒmen de lǎoshī yě lái le, tā ....... yì bēi shuǐ. Wǒ, Xiǎohóng hé lǎoshī měi rén yì bēi yǐnliào, suǒyǐ yígòng shì ....... bēi yǐnliào. Wǒmen dōu hěn gāoxìng.",
        "Saya suka minum kopi, temanku Xiaohong suka minum teh. Hari ini kami pergi ke toko, saya mau secangkir kopi, Xiaohong mau secangkir teh. Guru kami juga datang, dia mau segelas air. Saya, Xiaohong, dan guru masing-masing satu gelas minuman, jadi totalnya tiga gelas minuman. Kami semua senang.",
      ),
      paragraph(
        "Lengkapi percakapan memesan makanan berikut!",
        [
          "A：你好，你.......什么？B：我要一.......面包，还要一瓶牛奶。A：你的朋友呢？他要.......杯咖啡？B：他不要咖啡，他要两瓶可乐，一瓶是他的，一瓶是他女朋友的。A：好的，一共是一个面包、一瓶牛奶.......两瓶可乐。",
        ],
        [
          { id: 1, answer: "要", extras: ["和", "几"] },
          { id: 2, answer: "个", extras: ["杯", "瓶"] },
          { id: 3, answer: "几", extras: ["和", "要"] },
          { id: 4, answer: "和", extras: ["要", "几"] },
        ],
        "A: Nǐ hǎo, nǐ ....... shénme? B: Wǒ yào yí ....... miànbāo, hái yào yì píng niúnǎi. A: Nǐ de péngyou ne? Tā yào ....... bēi kāfēi? B: Tā bú yào kāfēi, tā yào liǎng píng kělè, yì píng shì tā de, yì píng shì tā nǚpéngyou de. A: Hǎo de, yígòng shì yí ge miànbāo, yì píng niúnǎi ....... liǎng píng kělè.",
        "A: Halo, kamu mau apa? B: Saya mau sebuah roti, juga sebotol susu. A: Bagaimana dengan temanmu? Dia mau berapa gelas kopi? B: Dia tidak mau kopi, dia mau dua botol cola, sebotol untuknya, sebotol untuk pacar perempuannya. A: Baik, totalnya sebuah roti, sebotol susu, dan dua botol cola.",
      ),
      paragraph(
        "Lengkapi paragraf tentang belajar di perpustakaan berikut!",
        [
          "我在图书馆看书，我很累。我要一.......咖啡，咖啡可以让我不想睡觉。朋友喜欢甜的，他喝一杯.......，因为里面有水果。他的女朋友.......我一样，也喝咖啡。我们还很饿，我要两个.......，朋友要一块蛋糕。",
        ],
        [
          { id: 1, answer: "杯", extras: ["块", "个"] },
          { id: 2, answer: "果汁", extras: ["咖啡", "面包"] },
          { id: 3, answer: "和", extras: ["要", "几"] },
          { id: 4, answer: "面包", extras: ["果汁", "茶"] },
        ],
        "Wǒ zài túshūguǎn kàn shū, wǒ hěn lèi. Wǒ yào yì ....... kāfēi, kāfēi kěyǐ ràng wǒ bù xiǎng shuìjiào. Péngyou xǐhuan tián de, tā hē yì bēi ....... , yīnwèi lǐmiàn yǒu shuǐguǒ. Tā de nǚpéngyou ....... wǒ yíyàng, yě hē kāfēi. Wǒmen hái hěn è, wǒ yào liǎng ge ....... , péngyou yào yí kuài dàngāo.",
        "Saya membaca buku di perpustakaan, saya sangat lelah. Saya mau secangkir kopi, kopi bisa membuat saya tidak mengantuk. Teman suka yang manis, dia minum segelas jus, karena di dalamnya ada buah. Pacar perempuannya sama seperti saya, juga minum kopi. Kami juga sangat lapar, saya mau dua roti, teman mau sepotong kue.",
      ),
      paragraph(
        "Lengkapi paragraf tentang mahasiswa di Beijing berikut!",
        [
          "我是美国人，我在北京学习汉语。我的室友是中国人，我们每天早上一起吃早饭。我要一.......牛奶和一块面包，他要一.......茶和一个蛋糕。他问我：“明天你要.......瓶牛奶？”我说：“我要两瓶，我.......你一起喝。”",
        ],
        [
          { id: 1, answer: "瓶", extras: ["块", "个"] },
          { id: 2, answer: "杯", extras: ["块", "个"] },
          { id: 3, answer: "几", extras: ["和", "要"] },
          { id: 4, answer: "和", extras: ["要", "几"] },
        ],
        "Wǒ shì Měiguó rén, wǒ zài Běijīng xuéxí Hànyǔ. Wǒ de shìyǒu shì Zhōngguó rén, wǒmen měi tiān zǎoshang yìqǐ chī zǎofàn. Wǒ yào yì ....... niúnǎi hé yí kuài miànbāo, tā yào yì ....... chá hé yí ge dàngāo. Tā wèn wǒ: “Míngtiān nǐ yào ....... píng niúnǎi?” Wǒ shuō: “Wǒ yào liǎng píng, wǒ ....... nǐ yìqǐ hē.”",
        "Saya orang Amerika, saya belajar bahasa Mandarin di Beijing. Teman sekamarku orang Tiongkok, kami sarapan bersama setiap pagi. Saya mau sebotol susu dan sepotong roti, dia mau secangkir teh dan sebuah kue. Dia bertanya padaku: “Besok kamu mau berapa botol susu?” Saya berkata: “Saya mau dua botol, saya minum bersamamu.”",
      ),
      paragraph(
        "Lengkapi paragraf tentang bos kedai kopi berikut!",
        [
          "我是店里的老板。今天早上，小明要两杯咖啡，小红要.......杯咖啡，我一共做了三杯咖啡。大卫喜欢甜的，他要一.......蛋糕。小英.......一瓶牛奶，她还要面包.......蛋糕。我今天很忙，但是很高兴。",
        ],
        [
          { id: 1, answer: "一", extras: ["两", "四"] },
          { id: 2, answer: "块", extras: ["杯", "瓶"] },
          { id: 3, answer: "要", extras: ["和", "几"] },
          { id: 4, answer: "和", extras: ["要", "几"] },
        ],
        "Wǒ shì diàn lǐ de lǎobǎn. Jīntiān zǎoshang, Xiǎomíng yào liǎng bēi kāfēi, Xiǎohóng yào ....... bēi kāfēi, wǒ yígòng zuò le sān bēi kāfēi. Dàwèi xǐhuan tián de, tā yào yí ....... dàngāo. Xiǎoyīng ....... yì píng niúnǎi, tā hái yào miànbāo ....... dàngāo. Wǒ jīntiān hěn máng, dànshì hěn gāoxìng.",
        "Saya pemilik toko ini. Pagi ini, Xiaoming mau dua gelas kopi, Xiaohong mau satu gelas kopi, jadi saya membuat total tiga gelas kopi. David suka yang manis, dia mau sepotong kue. Xiaoying mau sebotol susu, dia juga mau roti dan kue. Hari ini saya sangat sibuk, tetapi sangat senang.",
      ),
      paragraph(
        "Lengkapi paragraf tentang menonton pertandingan berikut!",
        [
          "今晚我们在家看球赛。爸爸买了一瓶可乐，我买了两瓶可乐，我们一共有.......瓶可乐。妈妈做了一.......蛋糕，她切了.......块，因为我们有爸爸、妈妈、哥哥和我，每人一块。大家喝可乐.......果汁，吃蛋糕，都很高兴。",
        ],
        [
          { id: 1, answer: "三", extras: ["两", "四"] },
          { id: 2, answer: "个", extras: ["杯", "瓶"] },
          { id: 3, answer: "四", extras: ["三", "五"] },
          { id: 4, answer: "和", extras: ["要", "几"] },
        ],
        "Jīn wǎn wǒmen zài jiā kàn qiúsài. Bàba mǎi le yì píng kělè, wǒ mǎi le liǎng píng kělè, wǒmen yígòng yǒu ....... píng kělè. Māma zuò le yí ....... dàngāo, tā qiē le ....... kuài, yīnwèi wǒmen yǒu bàba, māma, gēge hé wǒ, měi rén yí kuài. Dàjiā hē kělè ....... guǒzhī, chī dàngāo, dōu hěn gāoxìng.",
        "Malam ini kami menonton pertandingan bola di rumah. Ayah membeli sebotol cola, saya membeli dua botol cola, jadi totalnya kami punya tiga botol cola. Ibu membuat sebuah kue, dia memotongnya menjadi empat potong, karena kami ada ayah, ibu, kakak laki-laki, dan saya, masing-masing satu potong. Semua minum cola dan jus, makan kue, dan sangat senang.",
      ),
      paragraph(
        "Lengkapi percakapan di toko kopi berikut!",
        [
          "店员问小红：“你要.......杯咖啡？”小红说：“我要咖啡，一杯给我，一杯给我的男朋友。”店员问：“你们要蛋糕吗？”小红说：“要，我们要一.......蛋糕，也要一瓶水.......一杯果汁。”店员说：“好的，一共是.......杯咖啡、一块蛋糕、一瓶水和一杯果汁。”",
        ],
        [
          { id: 1, answer: "几", extras: ["和", "要"] },
          { id: 2, answer: "块", extras: ["杯", "瓶"] },
          { id: 3, answer: "和", extras: ["要", "几"] },
          { id: 4, answer: "两", extras: ["三", "四"] },
        ],
        "Diànyuán wèn Xiǎohóng: “Nǐ yào ....... bēi kāfēi?” Xiǎohóng shuō: “Wǒ yào kāfēi, yì bēi gěi wǒ, yì bēi gěi wǒ de nánpéngyou.” Diànyuán wèn: “Nǐmen yào dàngāo ma?” Xiǎohóng shuō: “Yào, wǒmen yào yí ....... dàngāo, yě yào yì píng shuǐ ....... yì bēi guǒzhī.” Diànyuán shuō: “Hǎo de, yígòng shì ....... bēi kāfēi, yí kuài dàngāo, yì píng shuǐ hé yì bēi guǒzhī.”",
        "Pelayan bertanya pada Xiaohong: “Kamu mau berapa gelas kopi?” Xiaohong berkata: “Saya mau kopi, segelas untuk saya, segelas untuk pacar laki-laki saya.” Pelayan bertanya: “Apakah kalian mau kue?” Xiaohong berkata: “Mau, kami mau sepotong kue, juga sebotol air dan segelas jus.” Pelayan berkata: “Baik, totalnya dua gelas kopi, sepotong kue, sebotol air, dan segelas jus.”",
      ),
    ],
  },
];
