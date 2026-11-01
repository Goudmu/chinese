import type { Lesson } from "@/data/course";
import { paragraph, sentence } from "./helpers";

const u6_sentences = [
  sentence(
    "Saya mau satu mangkuk nasi.",
    ["我", "要", "一", "碗", "米饭"],
    ["杯", "两", "不"],
  ),
  sentence(
    "Dia (laki-laki) mau dua mangkuk mi.",
    ["他", "要", "两", "碗", "面条儿"],
    ["瓶", "三", "她"],
  ),
  sentence(
    "Dia (perempuan) mau satu mangkuk bubur.",
    ["她", "要", "一", "碗", "粥"],
    ["汤", "杯", "他"],
  ),
  sentence(
    "Apakah kamu mau sup?",
    ["你", "要", "汤", "吗"],
    ["粥", "不", "我"],
  ),
  sentence(
    "Saya mau enam bakpao.",
    ["我", "要", "六", "个", "包子"],
    ["块", "七", "和"],
  ),
  sentence(
    "Kamu mau tujuh pangsit.",
    ["你", "要", "七", "个", "饺子"],
    ["八", "碗", "不"],
  ),
  sentence(
    "Saya mau delapan pangsit dan satu mangkuk sup.",
    ["我", "要", "八", "个", "饺子", "和", "一", "碗", "汤"],
    ["九", "杯", "两"],
  ),
  sentence(
    "Saya mau sembilan youtiao.",
    ["我", "要", "九", "根", "油条"],
    ["十", "个", "块"],
  ),
  sentence(
    "Saya mau satu gelas susu kedelai dan satu youtiao.",
    ["我", "要", "一", "杯", "豆浆", "和", "一", "根", "油条"],
    ["碗", "两", "茶"],
  ),
  sentence("Kamu mau makan apa?", ["你", "要", "什么"], ["吗", "几", "谁"]),
  sentence(
    "Apakah kamu mau sesuatu?",
    ["你", "要", "什么", "吗"],
    ["不", "谁", "几"],
  ),
  sentence("Ini apa?", ["这", "是", "什么"], ["那", "谁", "吗"]),
  sentence("Itu apa?", ["那", "是", "什么"], ["这", "谁", "不"]),
  sentence("Ini adalah bakpao.", ["这", "是", "包子"], ["那", "饺子", "吗"]),
  sentence(
    "Itu bukan pangsit.",
    ["那", "不", "是", "饺子"],
    ["这", "包子", "吗"],
  ),
  sentence(
    "Permisi, berapa harga nasi?",
    ["请问", "米饭", "多少", "钱"],
    ["面条儿", "几", "吗"],
  ),
  sentence(
    "Permisi, berapa harga mi?",
    ["请问", "面条儿", "多少", "钱"],
    ["粥", "什么", "吗"],
  ),
  sentence(
    "Berapa harga sup ini?",
    ["这", "个", "汤", "多少", "钱"],
    ["那", "粥", "什么"],
  ),
  sentence(
    "Berapa harga bakpao itu?",
    ["那", "个", "包子", "多少", "钱"],
    ["这", "饺子", "几"],
  ),
  sentence(
    "Berapa harga bubur satu mangkuk?",
    ["一", "碗", "粥", "多少", "钱"],
    ["杯", "两", "吗"],
  ),
  sentence(
    "Berapa harga satu gelas susu kedelai?",
    ["一", "杯", "豆浆", "多少", "钱"],
    ["碗", "什么", "吗"],
  ),
  sentence(
    "Nasi satu mangkuk sepuluh yuan.",
    ["一", "碗", "米饭", "十", "块", "钱"],
    ["九", "杯", "多少"],
  ),
  sentence(
    "Mi satu mangkuk delapan yuan.",
    ["一", "碗", "面条儿", "八", "块", "钱"],
    ["七", "个", "多少"],
  ),
  sentence(
    "Bakpao satu buah enam yuan.",
    ["一", "个", "包子", "六", "块", "钱"],
    ["碗", "五", "吗"],
  ),
  sentence(
    "Sup satu mangkuk dua belas yuan.",
    ["一", "碗", "汤", "十", "二", "块", "钱"],
    ["杯", "三", "多少"],
  ),
  sentence(
    "Pangsit satu porsi lima belas yuan.",
    ["一", "份", "饺子", "十", "五", "块", "钱"],
    ["个", "四", "吗"],
  ),
  sentence(
    "Susu kedelai satu gelas tiga yuan.",
    ["一", "杯", "豆浆", "三", "块", "钱"],
    ["碗", "八", "多少"],
  ),
  sentence(
    "Saya mau dua puluh bakpao.",
    ["我", "要", "二", "十", "个", "包子"],
    ["三", "碗", "吗"],
  ),
  sentence(
    "Apakah ayah saya suka youtiao?",
    [
      ["我", "爸爸", "喜欢", "油条", "吗"],
      ["我", "的", "爸爸", "喜欢", "油条", "吗"],
    ],
    ["讨厌", "豆浆", "不"],
  ),
  sentence(
    "Ibu saya tidak suka nasi, dia suka mi.",
    [
      ["我", "妈妈", "不", "喜欢", "米饭", "她", "喜欢", "面条儿"],
      ["我", "的", "妈妈", "不", "喜欢", "米饭", "她", "喜欢", "面条儿"],
    ],
    ["粥", "爱", "没有"],
  ),
];

const u6_paragraphs = [
  paragraph(
    "Lengkapi paragraf tentang sarapan di restoran berikut!",
    [
      "今天早上我和哥哥去饭馆吃早饭。我问老板：“.......，你们有.......？”老板说：“我们有包子、饺子和豆浆。”哥哥要一杯.......，我要两个包子。一个包子三块钱，两个包子.......块钱。",
    ],
    [
      { id: 1, answer: "请问", extras: ["什么", "多少"] },
      { id: 2, answer: "什么", extras: ["块", "六"] },
      { id: 3, answer: "豆浆", extras: ["饺子", "油条"] },
      { id: 4, answer: "六", extras: ["七", "八"] },
    ],
    "Jīntiān zǎoshang wǒ hé gēge qù fànguǎn chī zǎofàn. Wǒ wèn lǎobǎn: “....... , nǐmen yǒu ....... ?” Lǎobǎn shuō: “Wǒmen yǒu bāozi, jiǎozi hé dòujiāng.” Gēge yào yì bēi ....... , wǒ yào liǎng ge bāozi. Yí ge bāozi sān kuài qián, liǎng ge bāozi ....... kuài qián.",
    "Pagi ini saya dan kakak laki-laki pergi sarapan di restoran. Saya bertanya kepada pemilik: “Permisi, kalian punya apa?” Pemilik berkata: “Kami punya bakpao, pangsit, dan susu kedelai.” Kakak mau segelas susu kedelai, saya mau dua bakpao. Satu bakpao tiga yuan, dua bakpao enam yuan.",
  ),
  paragraph(
    "Lengkapi paragraf tentang makan siang di sekolah berikut!",
    [
      "我在学校的饭馆吃午饭。同学问我：“你要吃.......？”我说：“我要面条儿。这碗面条儿.......钱？”老板说：“八块。”我还要一.......汤，汤五块，所以我一共要.......三块钱。",
    ],
    [
      { id: 1, answer: "什么", extras: ["钱", "碗"] },
      { id: 2, answer: "多少", extras: ["什么", "碗"] },
      { id: 3, answer: "碗", extras: ["钱", "什么"] },
      { id: 4, answer: "十", extras: ["六", "九"] },
    ],
    "Wǒ zài xuéxiào de fànguǎn chī wǔfàn. Tóngxué wèn wǒ: “Nǐ yào chī ....... ?” Wǒ shuō: “Wǒ yào miàntiáor. Zhè wǎn miàntiáor ....... qián?” Lǎobǎn shuō: “Bā kuài.” Wǒ hái yào yì ....... tāng, tāng wǔ kuài, suǒyǐ wǒ yígòng yào ....... sān kuài qián.",
    "Saya makan siang di restoran sekolah. Teman bertanya padaku: “Kamu mau makan apa?” Saya berkata: “Saya mau mi. Semangkuk mi ini berapa uang?” Pemilik berkata: “Delapan yuan.” Saya juga mau semangkuk sup, supnya lima yuan, jadi totalnya saya harus bayar tiga belas yuan.",
  ),
  paragraph(
    "Lengkapi paragraf tentang ayah membeli sarapan berikut!",
    [
      "早上我爸爸喜欢吃油条，也喜欢喝豆浆。今天他去买早饭，他问老板：“一根油条.......钱？”老板说：“两块.......。”爸爸要三根油条，所以他给老板.......块钱。他还要两杯豆浆，一杯四块，两杯.......块钱。",
    ],
    [
      { id: 1, answer: "多少", extras: ["什么", "块"] },
      { id: 2, answer: "钱", extras: ["碗", "什么"] },
      { id: 3, answer: "六", extras: ["七", "九"] },
      { id: 4, answer: "八", extras: ["七", "九"] },
    ],
    "Zǎoshang wǒ bàba xǐhuan chī yóutiáo, yě xǐhuan hē dòujiāng. Jīntiān tā qù mǎi zǎofàn, tā wèn lǎobǎn: “Yì gēn yóutiáo ....... qián?” Lǎobǎn shuō: “Liǎng kuài ....... .” Bàba yào sān gēn yóutiáo, suǒyǐ tā gěi lǎobǎn ....... kuài qián. Tā hái yào liǎng bēi dòujiāng, yì bēi sì kuài, liǎng bēi ....... kuài qián.",
    "Pagi hari ayahku suka makan youtiao dan juga suka minum susu kedelai. Hari ini dia pergi membeli sarapan, dia bertanya kepada pemilik: “Satu youtiao berapa uang?” Pemilik berkata: “Dua yuan.” Ayah mau tiga youtiao, jadi dia membayar enam yuan. Dia juga mau dua gelas susu kedelai, segelas empat yuan, dua gelas delapan yuan.",
  ),
  paragraph(
    "Lengkapi paragraf tentang makan di mal berikut!",
    [
      "我和朋友去商场吃饭。.......，这里有饺子吗？服务员说：“有，十块一.......。”朋友要一碗饺子，我要包子。我问：“一个包子.......钱？”服务员说：“三块。”我要四个包子，一共.......二块钱。",
    ],
    [
      { id: 1, answer: "请问", extras: ["什么", "钱"] },
      { id: 2, answer: "碗", extras: ["钱", "什么"] },
      { id: 3, answer: "多少", extras: ["什么", "碗"] },
      { id: 4, answer: "十", extras: ["六", "九"] },
    ],
    "Wǒ hé péngyou qù shāngchǎng chī fàn. ....... , zhèlǐ yǒu jiǎozi ma? Fúwùyuán shuō: “Yǒu, shí kuài yì ....... .” Péngyou yào yì wǎn jiǎozi, wǒ yào bāozi. Wǒ wèn: “Yí ge bāozi ....... qián?” Fúwùyuán shuō: “Sān kuài.” Wǒ yào sì ge bāozi, yígòng ....... èr kuài qián.",
    "Saya dan teman pergi makan di mal. Permisi, apakah di sini ada pangsit? Pelayan berkata: “Ada, sepuluh yuan semangkuk.” Teman mau semangkuk pangsit, saya mau bakpao. Saya bertanya: “Satu bakpao berapa uang?” Pelayan berkata: “Tiga yuan.” Saya mau empat bakpao, totalnya dua belas yuan.",
  ),
  paragraph(
    "Lengkapi paragraf tentang ibu di rumah sakit berikut!",
    [
      "我妈妈在医院工作。中午她去医院的饭馆，她问老板：“.......，你们有什么？”老板说：“有米饭、粥和汤。”妈妈要一碗米饭和一碗.......，她喜欢喝热的。米饭三块，那碗热的七块，一共.......块钱。妈妈说：“谢谢，这是十块.......。”",
    ],
    [
      { id: 1, answer: "请问", extras: ["什么", "多少"] },
      { id: 2, answer: "汤", extras: ["钱", "块"] },
      { id: 3, answer: "十", extras: ["八", "九"] },
      { id: 4, answer: "钱", extras: ["碗", "什么"] },
    ],
    "Wǒ māma zài yīyuàn gōngzuò. Zhōngwǔ tā qù yīyuàn de fànguǎn, tā wèn lǎobǎn: “....... , nǐmen yǒu shénme?” Lǎobǎn shuō: “Yǒu mǐfàn, zhōu hé tāng.” Māma yào yì wǎn mǐfàn hé yì wǎn ....... , tā xǐhuan hē rè de. Mǐfàn sān kuài, nà wǎn rè de qī kuài, yígòng ....... kuài qián. Māma shuō: “Xièxie, zhè shì shí kuài ....... .”",
    "Ibuku bekerja di rumah sakit. Siang hari dia pergi ke restoran rumah sakit, dia bertanya kepada pemilik: “Permisi, kalian punya apa?” Pemilik berkata: “Ada nasi, bubur, dan sup.” Ibu mau semangkuk nasi dan semangkuk sup, dia suka minum yang panas. Nasi tiga yuan, semangkuk yang panas itu tujuh yuan, totalnya sepuluh yuan. Ibu berkata: “Terima kasih, ini sepuluh yuan.”",
  ),
  paragraph(
    "Lengkapi paragraf tentang makan siang bersama teman berikut!",
    [
      "今天我和同学在学校吃午饭。同学要一.......面条儿，一碗六块。我不喜欢面条儿，我要.......，一碗九块。我问老板：“我们一共.......钱？”老板说：“一共.......五块。”我们给了钱，吃得很高兴。",
    ],
    [
      { id: 1, answer: "碗", extras: ["钱", "什么"] },
      { id: 2, answer: "饺子", extras: ["块", "请问"] },
      { id: 3, answer: "多少", extras: ["什么", "块"] },
      { id: 4, answer: "十", extras: ["六", "八"] },
    ],
    "Jīntiān wǒ hé tóngxué zài xuéxiào chī wǔfàn. Tóngxué yào yì ....... miàntiáor, yì wǎn liù kuài. Wǒ bù xǐhuan miàntiáor, wǒ yào ....... , yì wǎn jiǔ kuài. Wǒ wèn lǎobǎn: “Wǒmen yígòng ....... qián?” Lǎobǎn shuō: “Yígòng ....... wǔ kuài.” Wǒmen gěi le qián, chī de hěn gāoxìng.",
    "Hari ini saya dan teman sekelas makan siang di sekolah. Teman mau semangkuk mi, semangkuk enam yuan. Saya tidak suka mi, saya mau pangsit, semangkuk sembilan yuan. Saya bertanya kepada pemilik: “Totalnya berapa uang?” Pemilik berkata: “Totalnya lima belas yuan.” Kami membayar, makan dengan gembira.",
  ),
  paragraph(
    "Lengkapi paragraf tentang makan pangsit bersama ibu berikut!",
    [
      "我妈妈和妹妹想吃饺子。我们去一家小饭馆，妈妈问服务员：“.......，饺子.......钱？”服务员说：“八块一.......。”妈妈要两碗饺子，所以一共要十.......块钱。妹妹说：“我喜欢这里的饺子！”",
    ],
    [
      { id: 1, answer: "请问", extras: ["什么", "多少"] },
      { id: 2, answer: "多少", extras: ["什么", "块"] },
      { id: 3, answer: "碗", extras: ["钱", "什么"] },
      { id: 4, answer: "六", extras: ["七", "九"] },
    ],
    "Wǒ māma hé mèimei xiǎng chī jiǎozi. Wǒmen qù yì jiā xiǎo fànguǎn, māma wèn fúwùyuán: “....... , jiǎozi ....... qián?” Fúwùyuán shuō: “Bā kuài yì ....... .” Māma yào liǎng wǎn jiǎozi, suǒyǐ yígòng yào shí ....... kuài qián. Mèimei shuō: “Wǒ xǐhuan zhèlǐ de jiǎozi!”",
    "Ibu dan adik perempuanku ingin makan pangsit. Kami pergi ke sebuah restoran kecil, ibu bertanya kepada pelayan: “Permisi, pangsitnya berapa uang?” Pelayan berkata: “Delapan yuan semangkuk.” Ibu mau dua mangkuk pangsit, jadi totalnya enam belas yuan. Adik berkata: “Aku suka pangsit di sini!”",
  ),
  paragraph(
    "Lengkapi paragraf tentang membeli bakpao berikut!",
    [
      "早上我去买包子。我问老板：“.......，一个包子.......钱？”老板说：“三块一个。”我要九个包子，我一共要给老板二十.......块钱。老板说：“谢谢！这些.......很好吃。”",
    ],
    [
      { id: 1, answer: "请问", extras: ["什么", "钱"] },
      { id: 2, answer: "多少", extras: ["什么", "碗"] },
      { id: 3, answer: "七", extras: ["六", "八"] },
      { id: 4, answer: "包子", extras: ["钱", "块"] },
    ],
    "Zǎoshang wǒ qù mǎi bāozi. Wǒ wèn lǎobǎn: “....... , yí ge bāozi ....... qián?” Lǎobǎn shuō: “Sān kuài yí ge.” Wǒ yào jiǔ ge bāozi, wǒ yígòng yào gěi lǎobǎn èrshí ....... kuài qián. Lǎobǎn shuō: “Xièxie! Zhèxiē ....... hěn hǎochī.”",
    "Pagi hari saya pergi membeli bakpao. Saya bertanya kepada pemilik: “Permisi, satu bakpao berapa uang?” Pemilik berkata: “Tiga yuan satu.” Saya mau sembilan bakpao, totalnya saya harus membayar dua puluh tujuh yuan. Pemilik berkata: “Terima kasih! Bakpao-bakpao ini enak sekali.”",
  ),
  paragraph(
    "Lengkapi paragraf tentang susu kedelai dan youtiao berikut!",
    [
      "我爸爸每天早上都喝豆浆。今天他去买早饭，他问老板：“一杯.......多少钱？”老板说：“四块。”爸爸要两杯，所以一共.......块钱。老板问：“你还要.......？”爸爸说：“我要三根油条，一根两块。三根油条.......块钱。”",
    ],
    [
      { id: 1, answer: "豆浆", extras: ["饺子", "油条"] },
      { id: 2, answer: "八", extras: ["七", "九"] },
      { id: 3, answer: "什么", extras: ["块", "六"] },
      { id: 4, answer: "六", extras: ["七", "九"] },
    ],
    "Wǒ bàba měi tiān zǎoshang dōu hē dòujiāng. Jīntiān tā qù mǎi zǎofàn, tā wèn lǎobǎn: “Yì bēi ....... duōshao qián?” Lǎobǎn shuō: “Sì kuài.” Bàba yào liǎng bēi, suǒyǐ yígòng ....... kuài qián. Lǎobǎn wèn: “Nǐ hái yào ....... ?” Bàba shuō: “Wǒ yào sān gēn yóutiáo, yì gēn liǎng kuài. Sān gēn yóutiáo ....... kuài qián.”",
    "Ayahku setiap pagi minum susu kedelai. Hari ini dia pergi membeli sarapan, dia bertanya kepada pemilik: “Segelas susu kedelai berapa uang?” Pemilik berkata: “Empat yuan.” Ayah mau dua gelas, jadi totalnya delapan yuan. Pemilik bertanya: “Anda masih mau apa?” Ayah berkata: “Saya mau tiga youtiao, satu youtiao dua yuan. Tiga youtiao enam yuan.”",
  ),
  paragraph(
    "Lengkapi paragraf tentang makan siang di mal berikut!",
    [
      "我在商场的饭馆，我想吃午饭。.......，这里有粥吗？服务员说：“没有粥，但是有.......，很便宜。”我问：“一碗.......钱？”服务员说：“五块。”我还要一碗汤，汤七块，所以我一共要.......二块钱。",
    ],
    [
      { id: 1, answer: "请问", extras: ["什么", "多少"] },
      { id: 2, answer: "米饭", extras: ["钱", "块"] },
      { id: 3, answer: "多少", extras: ["什么", "块"] },
      { id: 4, answer: "十", extras: ["六", "九"] },
    ],
    "Wǒ zài shāngchǎng de fànguǎn, wǒ xiǎng chī wǔfàn. ....... , zhèlǐ yǒu zhōu ma? Fúwùyuán shuō: “Méiyǒu zhōu, dànshì yǒu ....... , hěn piányi.” Wǒ wèn: “Yì wǎn ....... qián?” Fúwùyuán shuō: “Wǔ kuài.” Wǒ hái yào yì wǎn tāng, tāng qī kuài, suǒyǐ wǒ yígòng yào ....... èr kuài qián.",
    "Saya di restoran dalam mal, saya ingin makan siang. Permisi, apakah di sini ada bubur? Pelayan berkata: “Tidak ada bubur, tetapi ada nasi, murah sekali.” Saya bertanya: “Semangkuk berapa uang?” Pelayan berkata: “Lima yuan.” Saya juga mau semangkuk sup, supnya tujuh yuan, jadi totalnya dua belas yuan.",
  ),
  paragraph(
    "Lengkapi paragraf tentang sarapan keluarga berikut!",
    [
      "我们家早饭不一样。爸爸买了四根油条，一根两块，一共.......块钱。妈妈买了三个包子，一个三块，一共.......块钱。我买了一碗饺子，一碗饺子.......块。我们一共花了二十七块.......。",
    ],
    [
      { id: 1, answer: "八", extras: ["六", "七"] },
      { id: 2, answer: "九", extras: ["六", "七"] },
      { id: 3, answer: "十", extras: ["八", "九"] },
      { id: 4, answer: "钱", extras: ["碗", "什么"] },
    ],
    "Wǒmen jiā zǎofàn bù yíyàng. Bàba mǎi le sì gēn yóutiáo, yì gēn liǎng kuài, yígòng ....... kuài qián. Māma mǎi le sān ge bāozi, yí ge sān kuài, yígòng ....... kuài qián. Wǒ mǎi le yì wǎn jiǎozi, yì wǎn jiǎozi ....... kuài. Wǒmen yígòng huā le èrshíqī kuài ....... .",
    "Sarapan di keluarga kami berbeda-beda. Ayah membeli empat youtiao, satu youtiao dua yuan, totalnya delapan yuan. Ibu membeli tiga bakpao, satu bakpao tiga yuan, totalnya sembilan yuan. Saya membeli semangkuk pangsit, semangkuk pangsit sepuluh yuan. Kami menghabiskan total dua puluh tujuh yuan.",
  ),
  paragraph(
    "Lengkapi paragraf tentang nenek yang sakit berikut!",
    [
      "奶奶今天不舒服，不能吃米饭，她想喝.......。我去买，一.......四块钱。我买了两碗，一共.......块钱。奶奶也想喝汤，汤一碗五块，所以我一共花了.......三块钱。",
    ],
    [
      { id: 1, answer: "粥", extras: ["钱", "块"] },
      { id: 2, answer: "碗", extras: ["钱", "什么"] },
      { id: 3, answer: "八", extras: ["六", "七"] },
      { id: 4, answer: "十", extras: ["六", "九"] },
    ],
    "Nǎinai jīntiān bù shūfu, bù néng chī mǐfàn, tā xiǎng hē ....... . Wǒ qù mǎi, yì ....... sì kuài qián. Wǒ mǎi le liǎng wǎn, yígòng ....... kuài qián. Nǎinai yě xiǎng hē tāng, tāng yì wǎn wǔ kuài, suǒyǐ wǒ yígòng huā le ....... sān kuài qián.",
    "Nenek hari ini kurang enak badan, tidak bisa makan nasi, dia ingin minum bubur. Saya pergi membelinya, semangkuk empat yuan. Saya membeli dua mangkuk, totalnya delapan yuan. Nenek juga ingin minum sup, supnya lima yuan semangkuk, jadi saya menghabiskan total tiga belas yuan.",
  ),
  paragraph(
    "Lengkapi percakapan membeli sup berikut!",
    [
      "A：.......，一碗汤.......钱？B：六块。A：我要两碗，一共多少.......？B：.......二块。A：好，给你二十块。B：谢谢！",
    ],
    [
      { id: 1, answer: "请问", extras: ["什么", "钱"] },
      { id: 2, answer: "多少", extras: ["什么", "块"] },
      { id: 3, answer: "钱", extras: ["什么", "请问"] },
      { id: 4, answer: "十", extras: ["七", "九"] },
    ],
    "A: ....... , yì wǎn tāng ....... qián? B: Liù kuài. A: Wǒ yào liǎng wǎn, yígòng duōshao ....... ? B: ....... èr kuài. A: Hǎo, gěi nǐ èrshí kuài. B: Xièxie!",
    "A: Permisi, semangkuk sup berapa uang? B: Enam yuan. A: Saya mau dua mangkuk, totalnya berapa uang? B: Dua belas yuan. A: Baik, ini dua puluh yuan untukmu. B: Terima kasih!",
  ),
  paragraph(
    "Lengkapi percakapan membeli youtiao dan susu kedelai berikut!",
    [
      "A：你好！我要油条。一根.......钱？B：两块。A：我要五根，五根是.......块。我还要两杯.......，一杯四块。B：好，一共十.......块钱。",
    ],
    [
      { id: 1, answer: "多少", extras: ["什么", "块"] },
      { id: 2, answer: "十", extras: ["六", "九"] },
      { id: 3, answer: "豆浆", extras: ["饺子", "包子"] },
      { id: 4, answer: "八", extras: ["六", "七"] },
    ],
    "A: Nǐ hǎo! Wǒ yào yóutiáo. Yì gēn ....... qián? B: Liǎng kuài. A: Wǒ yào wǔ gēn, wǔ gēn shì ....... kuài. Wǒ hái yào liǎng bēi ....... , yì bēi sì kuài. B: Hǎo, yígòng shí ....... kuài qián.",
    "A: Halo! Saya mau youtiao. Satu youtiao berapa uang? B: Dua yuan. A: Saya mau lima, lima youtiao sepuluh yuan. Saya juga mau dua gelas susu kedelai, segelas empat yuan. B: Baik, totalnya delapan belas yuan.",
  ),
  paragraph(
    "Lengkapi paragraf tentang kedai bubur berikut!",
    [
      "周末我和姐姐去一家粥店。我问老板：“.......，你们有.......粥？”老板说：“有很多，你们看菜单。”姐姐说：“我要两.......粥，一碗七块。”我说：“一共.......四块钱。”",
    ],
    [
      { id: 1, answer: "请问", extras: ["什么", "多少"] },
      { id: 2, answer: "什么", extras: ["块", "六"] },
      { id: 3, answer: "碗", extras: ["钱", "什么"] },
      { id: 4, answer: "十", extras: ["六", "九"] },
    ],
    "Zhōumò wǒ hé jiějie qù yì jiā zhōu diàn. Wǒ wèn lǎobǎn: “....... , nǐmen yǒu ....... zhōu?” Lǎobǎn shuō: “Yǒu hěn duō, nǐmen kàn càidān.” Jiějie shuō: “Wǒ yào liǎng ....... zhōu, yì wǎn qī kuài.” Wǒ shuō: “Yígòng ....... sì kuài qián.”",
    "Akhir pekan saya dan kakak perempuan pergi ke kedai bubur. Saya bertanya kepada pemilik: “Permisi, kalian punya bubur apa saja?” Pemilik berkata: “Banyak, silakan lihat menu.” Kakak berkata: “Saya mau dua mangkuk bubur, semangkuk tujuh yuan.” Saya berkata: “Totalnya empat belas yuan.”",
  ),
  paragraph(
    "Lengkapi paragraf tentang membandingkan harga sup berikut!",
    [
      "我和同学想喝汤。这家饭馆的汤很贵，一碗十.......块钱。那家饭馆的汤一碗七块钱，所以这家比那家贵九块钱。我们去那家饭馆，我问老板：“.......，你们的汤.......钱一碗？”老板说：“七块。你们还要.......？”",
    ],
    [
      { id: 1, answer: "六", extras: ["七", "八"] },
      { id: 2, answer: "请问", extras: ["什么", "钱"] },
      { id: 3, answer: "多少", extras: ["什么", "块"] },
      { id: 4, answer: "什么", extras: ["块", "六"] },
    ],
    "Wǒ hé tóngxué xiǎng hē tāng. Zhè jiā fànguǎn de tāng hěn guì, yì wǎn shí ....... kuài qián. Nà jiā fànguǎn de tāng yì wǎn qī kuài qián, suǒyǐ zhè jiā bǐ nà jiā guì jiǔ kuài qián. Wǒmen qù nà jiā fànguǎn, wǒ wèn lǎobǎn: “....... , nǐmen de tāng ....... qián yì wǎn?” Lǎobǎn shuō: “Qī kuài. Nǐmen hái yào ....... ?”",
    "Saya dan teman sekelas ingin minum sup. Sup di restoran ini mahal, semangkuk enam belas yuan. Sup di restoran itu semangkuk tujuh yuan, jadi restoran ini lebih mahal sembilan yuan daripada restoran itu. Kami pergi ke restoran itu, saya bertanya kepada pemilik: “Permisi, supnya berapa uang semangkuk?” Pemilik berkata: “Tujuh yuan. Kalian masih mau apa?”",
  ),
  paragraph(
    "Lengkapi paragraf tentang makan mi bersama kakak berikut!",
    [
      "我和哥哥想吃面条儿。我问老板：“.......，面条儿多少钱一碗？”老板说：“十块一.......。”我们要两碗，一共二.......块钱。我们吃完面条儿，我还想喝.......，但是哥哥说不喝。",
    ],
    [
      { id: 1, answer: "请问", extras: ["什么", "多少"] },
      { id: 2, answer: "碗", extras: ["钱", "什么"] },
      { id: 3, answer: "十", extras: ["六", "九"] },
      { id: 4, answer: "汤", extras: ["饺子", "油条"] },
    ],
    "Wǒ hé gēge xiǎng chī miàntiáor. Wǒ wèn lǎobǎn: “....... , miàntiáor duōshao qián yì wǎn?” Lǎobǎn shuō: “Shí kuài yì ....... .” Wǒmen yào liǎng wǎn, yígòng èr ....... kuài qián. Wǒmen chī wán miàntiáor, wǒ hái xiǎng hē ....... , dànshì gēge shuō bù hē.",
    "Saya dan kakak laki-laki ingin makan mi. Saya bertanya kepada pemilik: “Permisi, mi berapa uang semangkuk?” Pemilik berkata: “Sepuluh yuan semangkuk.” Kami mau dua mangkuk, totalnya dua puluh yuan. Setelah makan mi, saya masih ingin minum sup, tetapi kakak bilang tidak mau.",
  ),
  paragraph(
    "Lengkapi paragraf tentang teman yang tidak punya uang berikut!",
    [
      "今天我去饭馆，但是我没有.......。朋友问我：“你想吃.......？”我说：“我想吃饺子和面条儿。”我们吃了一.......饺子，一碗九块，还吃了一碗面条儿，一碗七块。我们一共花了十.......块钱。",
    ],
    [
      { id: 1, answer: "钱", extras: ["块", "六"] },
      { id: 2, answer: "什么", extras: ["块", "六"] },
      { id: 3, answer: "碗", extras: ["钱", "什么"] },
      { id: 4, answer: "六", extras: ["七", "八"] },
    ],
    "Jīntiān wǒ qù fànguǎn, dànshì wǒ méiyǒu ....... . Péngyou wèn wǒ: “Nǐ xiǎng chī ....... ?” Wǒ shuō: “Wǒ xiǎng chī jiǎozi hé miàntiáor.” Wǒmen chī le yì ....... jiǎozi, yì wǎn jiǔ kuài, hái chī le yì wǎn miàntiáor, yì wǎn qī kuài. Wǒmen yígòng huā le shí ....... kuài qián.",
    "Hari ini saya pergi ke restoran, tetapi saya tidak punya uang. Teman bertanya padaku: “Kamu mau makan apa?” Saya berkata: “Saya mau makan pangsit dan mi.” Kami makan semangkuk pangsit, semangkuk sembilan yuan, dan juga semangkuk mi, semangkuk tujuh yuan. Kami menghabiskan total enam belas yuan.",
  ),
  paragraph(
    "Lengkapi paragraf tentang adik yang ingin membeli bakpao berikut!",
    [
      "弟弟早上想买.......，但是他没有.......。他问妈妈：“妈妈，你给我买早饭，好吗？”妈妈说：“一个包子三块，你要三个吗？”弟弟说：“要！”妈妈说：“三个包子.......块，我给你.......块吧。”",
    ],
    [
      { id: 1, answer: "包子", extras: ["块", "什么"] },
      { id: 2, answer: "钱", extras: ["块", "九"] },
      { id: 3, answer: "九", extras: ["六", "七"] },
      { id: 4, answer: "十", extras: ["六", "八"] },
    ],
    "Dìdi zǎoshang xiǎng mǎi ....... , dànshì tā méiyǒu ....... . Tā wèn māma: “Māma, nǐ gěi wǒ mǎi zǎofàn, hǎo ma?” Māma shuō: “Yí ge bāozi sān kuài, nǐ yào sān ge ma?” Dìdi shuō: “Yào!” Māma shuō: “Sān ge bāozi ....... kuài, wǒ gěi nǐ ....... kuài ba.”",
    "Pagi hari adik laki-laki ingin membeli bakpao, tetapi dia tidak punya uang. Dia bertanya pada ibu: “Ibu, belikan aku sarapan, ya?” Ibu berkata: “Satu bakpao tiga yuan, kamu mau tiga?” Adik berkata: “Mau!” Ibu berkata: “Tiga bakpao sembilan yuan, Ibu beri kamu sepuluh yuan ya.”",
  ),
  paragraph(
    "Lengkapi paragraf tentang ulang tahun di restoran pangsit berikut!",
    [
      "今天是我的生日。爸爸带我们去饭馆吃饺子。爸爸问服务员：“.......，一碗饺子.......钱？”服务员说：“八块一碗。”我家有四口人，每人一.......，所以一共要三.......二块钱。",
    ],
    [
      { id: 1, answer: "请问", extras: ["什么", "多少"] },
      { id: 2, answer: "多少", extras: ["什么", "块"] },
      { id: 3, answer: "碗", extras: ["钱", "什么"] },
      { id: 4, answer: "十", extras: ["六", "九"] },
    ],
    "Jīntiān shì wǒ de shēngrì. Bàba dài wǒmen qù fànguǎn chī jiǎozi. Bàba wèn fúwùyuán: “....... , yì wǎn jiǎozi ....... qián?” Fúwùyuán shuō: “Bā kuài yì wǎn.” Wǒ jiā yǒu sì kǒu rén, měi rén yì ....... , suǒyǐ yígòng yào sān ....... èr kuài qián.",
    "Hari ini ulang tahunku. Ayah mengajak kami makan pangsit di restoran. Ayah bertanya kepada pelayan: “Permisi, semangkuk pangsit berapa uang?” Pelayan berkata: “Delapan yuan semangkuk.” Keluargaku ada empat orang, masing-masing semangkuk, jadi totalnya tiga puluh dua yuan.",
  ),
  paragraph(
    "Lengkapi percakapan tentang sarapan hari ini berikut!",
    [
      "A：你今天早上吃了.......？B：我吃了两个包子，还喝了一杯.......。A：包子.......钱一个？B：三块。豆浆五块，所以我一共花了.......一块钱。",
    ],
    [
      { id: 1, answer: "什么", extras: ["块", "六"] },
      { id: 2, answer: "豆浆", extras: ["饺子", "油条"] },
      { id: 3, answer: "多少", extras: ["什么", "块"] },
      { id: 4, answer: "十", extras: ["六", "九"] },
    ],
    "A: Nǐ jīntiān zǎoshang chī le ....... ? B: Wǒ chī le liǎng ge bāozi, hái hē le yì bēi ....... . A: Bāozi ....... qián yí ge? B: Sān kuài. Dòujiāng wǔ kuài, suǒyǐ wǒ yígòng huā le ....... yī kuài qián.",
    "A: Tadi pagi kamu makan apa? B: Saya makan dua bakpao, dan minum segelas susu kedelai. A: Bakpao berapa uang satu? B: Tiga yuan. Susu kedelai lima yuan, jadi totalnya saya menghabiskan sebelas yuan.",
  ),
  paragraph(
    "Lengkapi paragraf tentang melihat menu berikut!",
    [
      "我和朋友在饭馆看菜单。菜单上米饭三块，面条儿七块，粥五块，汤六块。我问服务员：“.......，我要一碗米饭和一碗汤，一共.......钱？”服务员说：“一共.......块。”朋友要一碗面条儿和一碗粥，一共.......二块钱。",
    ],
    [
      { id: 1, answer: "请问", extras: ["什么", "钱"] },
      { id: 2, answer: "多少", extras: ["什么", "块"] },
      { id: 3, answer: "九", extras: ["七", "八"] },
      { id: 4, answer: "十", extras: ["六", "八"] },
    ],
    "Wǒ hé péngyou zài fànguǎn kàn càidān. Càidān shàng mǐfàn sān kuài, miàntiáor qī kuài, zhōu wǔ kuài, tāng liù kuài. Wǒ wèn fúwùyuán: “....... , wǒ yào yì wǎn mǐfàn hé yì wǎn tāng, yígòng ....... qián?” Fúwùyuán shuō: “Yígòng ....... kuài.” Péngyou yào yì wǎn miàntiáor hé yì wǎn zhōu, yígòng ....... èr kuài qián.",
    "Saya dan teman melihat menu di restoran. Di menu, nasi tiga yuan, mi tujuh yuan, bubur lima yuan, sup enam yuan. Saya bertanya kepada pelayan: “Permisi, saya mau semangkuk nasi dan semangkuk sup, totalnya berapa uang?” Pelayan berkata: “Totalnya sembilan yuan.” Teman mau semangkuk mi dan semangkuk bubur, totalnya dua belas yuan.",
  ),
  paragraph(
    "Lengkapi paragraf tentang ibu yang bekerja di restoran mal berikut!",
    [
      "我妈妈在商场的饭馆工作。今天有一个男人来吃饭，他问妈妈：“.......，你们有.......？”妈妈说：“有饺子、包子和面条儿。”男人说：“我要两.......面条儿，一碗九块。”妈妈说：“好的，一共十.......块钱。”",
    ],
    [
      { id: 1, answer: "请问", extras: ["什么", "多少"] },
      { id: 2, answer: "什么", extras: ["块", "六"] },
      { id: 3, answer: "碗", extras: ["钱", "什么"] },
      { id: 4, answer: "八", extras: ["六", "七"] },
    ],
    "Wǒ māma zài shāngchǎng de fànguǎn gōngzuò. Jīntiān yǒu yí ge nánrén lái chī fàn, tā wèn māma: “....... , nǐmen yǒu ....... ?” Māma shuō: “Yǒu jiǎozi, bāozi hé miàntiáor.” Nánrén shuō: “Wǒ yào liǎng ....... miàntiáor, yì wǎn jiǔ kuài.” Māma shuō: “Hǎo de, yígòng shí ....... kuài qián.”",
    "Ibuku bekerja di restoran dalam mal. Hari ini ada seorang pria datang makan, dia bertanya kepada ibu: “Permisi, kalian punya apa?” Ibu berkata: “Ada pangsit, bakpao, dan mi.” Pria itu berkata: “Saya mau dua mangkuk mi, semangkuk sembilan yuan.” Ibu berkata: “Baik, totalnya delapan belas yuan.”",
  ),
  paragraph(
    "Lengkapi paragraf tentang adik perempuan yang suka bakpao berikut!",
    [
      "我的妹妹很喜欢吃包子。今天她有二十块钱，她去买包子。一个包子四块，她买了两个，两个包子.......块钱。她给老板二十块，老板找她.......二块钱。她还想喝一杯豆做的饮料，所以她问老板：“.......，这里有.......吗？”",
    ],
    [
      { id: 1, answer: "八", extras: ["六", "七"] },
      { id: 2, answer: "十", extras: ["六", "九"] },
      { id: 3, answer: "请问", extras: ["什么", "钱"] },
      { id: 4, answer: "豆浆", extras: ["块", "六"] },
    ],
    "Wǒ de mèimei hěn xǐhuan chī bāozi. Jīntiān tā yǒu èrshí kuài qián, tā qù mǎi bāozi. Yí ge bāozi sì kuài, tā mǎi le liǎng ge, liǎng ge bāozi ....... kuài qián. Tā gěi lǎobǎn èrshí kuài, lǎobǎn zhǎo tā ....... èr kuài qián. Tā hái xiǎng hē yì bēi dòu zuò de yǐnliào, suǒyǐ tā wèn lǎobǎn: “....... , zhèlǐ yǒu ....... ma?”",
    "Adik perempuanku sangat suka makan bakpao. Hari ini dia punya dua puluh yuan, dia pergi membeli bakpao. Satu bakpao empat yuan, dia membeli dua, dua bakpao delapan yuan. Dia memberi pemilik dua puluh yuan, pemilik memberi kembalian dua belas yuan. Dia juga ingin minum minuman dari kedelai, jadi dia bertanya kepada pemilik: “Permisi, apakah di sini ada susu kedelai?”",
  ),
  paragraph(
    "Lengkapi paragraf tentang Xiao Ming yang makan siang berikut!",
    [
      "小明很饿，他去饭馆吃午饭。他想吃一碗.......，一碗七块。他还想喝一碗热的.......，五块钱。一共要.......二块钱。他有二十块.......，够了。",
    ],
    [
      { id: 1, answer: "面条儿", extras: ["钱", "块"] },
      { id: 2, answer: "汤", extras: ["钱", "块"] },
      { id: 3, answer: "十", extras: ["六", "九"] },
      { id: 4, answer: "钱", extras: ["碗", "什么"] },
    ],
    "Xiǎomíng hěn è, tā qù fànguǎn chī wǔfàn. Tā xiǎng chī yì wǎn ....... , yì wǎn qī kuài. Tā hái xiǎng hē yì wǎn rè de ....... , wǔ kuài qián. Yígòng yào ....... èr kuài qián. Tā yǒu èrshí kuài ....... , gòu le.",
    "Xiaoming sangat lapar, dia pergi makan siang di restoran. Dia ingin makan semangkuk mi, semangkuk tujuh yuan. Dia juga ingin minum semangkuk sup panas, lima yuan. Totalnya dua belas yuan. Dia punya dua puluh yuan, cukup.",
  ),
  paragraph(
    "Lengkapi percakapan membeli bakpao dan susu kedelai berikut!",
    [
      "A：老板，我要两个.......，一个.......钱？B：三块。A：我还要一杯豆浆，豆浆五块。B：好，一共十一块。A：给你二十块.......。B：找你.......块。",
    ],
    [
      { id: 1, answer: "包子", extras: ["钱", "块"] },
      { id: 2, answer: "多少", extras: ["什么", "块"] },
      { id: 3, answer: "钱", extras: ["碗", "什么"] },
      { id: 4, answer: "九", extras: ["六", "七"] },
    ],
    "A: Lǎobǎn, wǒ yào liǎng ge ....... , yí ge ....... qián? B: Sān kuài. A: Wǒ hái yào yì bēi dòujiāng, dòujiāng wǔ kuài. B: Hǎo, yígòng shíyī kuài. A: Gěi nǐ èrshí kuài ....... . B: Zhǎo nǐ ....... kuài.",
    "A: Pak, saya mau dua bakpao, satu berapa uang? B: Tiga yuan. A: Saya juga mau segelas susu kedelai, susu kedelainya lima yuan. B: Baik, totalnya sebelas yuan. A: Ini dua puluh yuan untuk Bapak. B: Kembaliannya sembilan yuan.",
  ),
  paragraph(
    "Lengkapi paragraf tentang makan siang tiga teman sekelas berikut!",
    [
      "今天中午我们班的三个同学去饭馆吃饭。小红要一.......米饭，一碗三块。小明喜欢吃面，他要一碗.......，一碗七块。大卫要一碗汤，一碗五块。三个人一共.......五块钱。我问老板：“.......，你们有粥吗？”",
    ],
    [
      { id: 1, answer: "碗", extras: ["钱", "什么"] },
      { id: 2, answer: "面条儿", extras: ["钱", "块"] },
      { id: 3, answer: "十", extras: ["六", "九"] },
      { id: 4, answer: "请问", extras: ["什么", "多少"] },
    ],
    "Jīntiān zhōngwǔ wǒmen bān de sān ge tóngxué qù fànguǎn chī fàn. Xiǎohóng yào yì ....... mǐfàn, yì wǎn sān kuài. Xiǎomíng xǐhuan chī miàn, tā yào yì wǎn ....... , yì wǎn qī kuài. Dàwèi yào yì wǎn tāng, yì wǎn wǔ kuài. Sān ge rén yígòng ....... wǔ kuài qián. Wǒ wèn lǎobǎn: “....... , nǐmen yǒu zhōu ma?”",
    "Siang ini tiga teman sekelas kami pergi makan di restoran. Xiaohong mau semangkuk nasi, semangkuk tiga yuan. Xiaoming suka makan mi, dia mau semangkuk mi, semangkuk tujuh yuan. David mau semangkuk sup, semangkuk lima yuan. Ketiga orang totalnya lima belas yuan. Saya bertanya kepada pemilik: “Permisi, apakah kalian punya bubur?”",
  ),
  paragraph(
    "Lengkapi paragraf tentang toko pangsit di dekat rumah berikut!",
    [
      "我最喜欢吃饺子。我家前边有一家饺子店，那里的饺子很好吃。一碗饺子.......块，我给老板二十块，老板找我十块。我问老板：“.......，你们的包子.......钱？”老板说：“三块一个。”我说：“我还要两个，两个包子六块.......。”",
    ],
    [
      { id: 1, answer: "十", extras: ["六", "八"] },
      { id: 2, answer: "请问", extras: ["什么", "钱"] },
      { id: 3, answer: "多少", extras: ["什么", "块"] },
      { id: 4, answer: "钱", extras: ["碗", "什么"] },
    ],
    "Wǒ zuì xǐhuan chī jiǎozi. Wǒ jiā qiánbian yǒu yì jiā jiǎozi diàn, nàlǐ de jiǎozi hěn hǎochī. Yì wǎn jiǎozi ....... kuài, wǒ gěi lǎobǎn èrshí kuài, lǎobǎn zhǎo wǒ shí kuài. Wǒ wèn lǎobǎn: “....... , nǐmen de bāozi ....... qián?” Lǎobǎn shuō: “Sān kuài yí ge.” Wǒ shuō: “Wǒ hái yào liǎng ge, liǎng ge bāozi liù kuài ....... .”",
    "Saya paling suka makan pangsit. Di depan rumahku ada toko pangsit, pangsit di sana enak sekali. Semangkuk pangsit sepuluh yuan, saya memberi pemilik dua puluh yuan, pemilik memberi kembalian sepuluh yuan. Saya bertanya kepada pemilik: “Permisi, bakpao kalian berapa uang?” Pemilik berkata: “Tiga yuan satu.” Saya berkata: “Saya mau dua lagi, dua bakpao enam yuan.”",
  ),
  paragraph(
    "Lengkapi paragraf tentang Wang Ming yang bekerja di restoran berikut!",
    [
      "王明在饭馆打工。今天有很多客人。第一个客人要两碗粥，一碗六块，一共.......二块钱。第二个客人要三个包子，一个三块，一共.......块钱。第三个客人问：“.......，洗手间在哪里？”第四个客人说：“我要吃饭。”王明问他：“你要.......？”",
    ],
    [
      { id: 1, answer: "十", extras: ["七", "八"] },
      { id: 2, answer: "九", extras: ["七", "八"] },
      { id: 3, answer: "请问", extras: ["什么", "钱"] },
      { id: 4, answer: "什么", extras: ["块", "六"] },
    ],
    "Wáng Míng zài fànguǎn dǎgōng. Jīntiān yǒu hěn duō kèrén. Dì yī ge kèrén yào liǎng wǎn zhōu, yì wǎn liù kuài, yígòng ....... èr kuài qián. Dì èr ge kèrén yào sān ge bāozi, yí ge sān kuài, yígòng ....... kuài qián. Dì sān ge kèrén wèn: “....... , xǐshǒujiān zài nǎlǐ?” Dì sì ge kèrén shuō: “Wǒ yào chī fàn.” Wáng Míng wèn tā: “Nǐ yào ....... ?”",
    "Wang Ming bekerja paruh waktu di restoran. Hari ini banyak pelanggan. Pelanggan pertama mau dua mangkuk bubur, semangkuk enam yuan, totalnya dua belas yuan. Pelanggan kedua mau tiga bakpao, satu tiga yuan, totalnya sembilan yuan. Pelanggan ketiga bertanya: “Permisi, di mana toiletnya?” Pelanggan keempat berkata: “Saya mau makan.” Wang Ming bertanya padanya: “Anda mau apa?”",
  ),
  paragraph(
    "Lengkapi paragraf tentang teman yang suka susu kedelai berikut!",
    [
      "我的同学小英很喜欢喝.......，每天早上都喝一杯。她说这个很便宜，一杯三块。我也爱喝，我要两杯，一共.......块钱。她问我：“你吃.......？”我说：“我要油条，一根两块.......。”",
    ],
    [
      { id: 1, answer: "豆浆", extras: ["饺子", "油条"] },
      { id: 2, answer: "六", extras: ["七", "九"] },
      { id: 3, answer: "什么", extras: ["块", "六"] },
      { id: 4, answer: "钱", extras: ["碗", "什么"] },
    ],
    "Wǒ de tóngxué Xiǎoyīng hěn xǐhuan hē ....... , měi tiān zǎoshang dōu hē yì bēi. Tā shuō zhège hěn piányi, yì bēi sān kuài. Wǒ yě ài hē, wǒ yào liǎng bēi, yígòng ....... kuài qián. Tā wèn wǒ: “Nǐ chī ....... ?” Wǒ shuō: “Wǒ yào yóutiáo, yì gēn liǎng kuài ....... .”",
    "Teman sekelasku Xiaoying sangat suka minum susu kedelai, setiap pagi dia minum segelas. Dia bilang ini murah, segelas tiga yuan. Saya juga suka, saya mau dua gelas, totalnya enam yuan. Dia bertanya padaku: “Kamu makan apa?” Saya berkata: “Saya mau youtiao, satu youtiao dua yuan.”",
  ),
  paragraph(
    "Lengkapi paragraf tentang David di restoran sekolah berikut!",
    [
      "大卫是美国人，他在中国学习。今天他去学校的饭馆吃午饭，他说：“.......，我想吃米饭。”服务员问：“你要几碗？”大卫说：“我要一.......，还要一碗汤。”米饭四块，汤六块，一共.......块钱。服务员问：“你还想喝.......？”",
    ],
    [
      { id: 1, answer: "请问", extras: ["什么", "钱"] },
      { id: 2, answer: "碗", extras: ["钱", "什么"] },
      { id: 3, answer: "十", extras: ["七", "九"] },
      { id: 4, answer: "什么", extras: ["块", "六"] },
    ],
    "Dàwèi shì Měiguó rén, tā zài Zhōngguó xuéxí. Jīntiān tā qù xuéxiào de fànguǎn chī wǔfàn, tā shuō: “....... , wǒ xiǎng chī mǐfàn.” Fúwùyuán wèn: “Nǐ yào jǐ wǎn?” Dàwèi shuō: “Wǒ yào yì ....... , hái yào yì wǎn tāng.” Mǐfàn sì kuài, tāng liù kuài, yígòng ....... kuài qián. Fúwùyuán wèn: “Nǐ hái xiǎng hē ....... ?”",
    "David orang Amerika, dia belajar di Tiongkok. Hari ini dia makan siang di restoran sekolah, dia berkata: “Permisi, saya ingin makan nasi.” Pelayan bertanya: “Anda mau berapa mangkuk?” David berkata: “Saya mau semangkuk, juga semangkuk sup.” Nasi empat yuan, sup enam yuan, totalnya sepuluh yuan. Pelayan bertanya: “Anda masih ingin minum apa?”",
  ),
  paragraph(
    "Lengkapi paragraf tentang kakak perempuan yang menjadi guru berikut!",
    [
      "我姐姐是老师，她在学校工作。每天中午她去饭馆吃饭。今天她爱吃面，她要一碗.......，一碗八块。她还要两个包子，一个三块，所以她一共要.......四块钱。她问老板：“.......，我给你二十块.......，可以吗？”",
    ],
    [
      { id: 1, answer: "面条儿", extras: ["钱", "块"] },
      { id: 2, answer: "十", extras: ["六", "九"] },
      { id: 3, answer: "请问", extras: ["什么", "多少"] },
      { id: 4, answer: "钱", extras: ["碗", "什么"] },
    ],
    "Wǒ jiějie shì lǎoshī, tā zài xuéxiào gōngzuò. Měi tiān zhōngwǔ tā qù fànguǎn chī fàn. Jīntiān tā ài chī miàn, tā yào yì wǎn ....... , yì wǎn bā kuài. Tā hái yào liǎng ge bāozi, yí ge sān kuài, suǒyǐ tā yígòng yào ....... sì kuài qián. Tā wèn lǎobǎn: “....... , wǒ gěi nǐ èrshí kuài ....... , kěyǐ ma?”",
    "Kakak perempuanku adalah guru, dia bekerja di sekolah. Setiap siang dia makan di restoran. Hari ini dia ingin makan mi, dia mau semangkuk mi, semangkuk delapan yuan. Dia juga mau dua bakpao, satu tiga yuan, jadi totalnya empat belas yuan. Dia bertanya kepada pemilik: “Permisi, saya beri Anda dua puluh yuan, boleh?”",
  ),
  paragraph(
    "Lengkapi percakapan membeli pangsit untuk keluarga berikut!",
    [
      "A：.......，饺子多少钱一碗？B：七块一碗。A：我家有五口人，我要五.......。B：好，一共三.......五块。A：我还想喝一杯，你们有.......吗？B：有，豆浆四块一杯。",
    ],
    [
      { id: 1, answer: "请问", extras: ["什么", "钱"] },
      { id: 2, answer: "碗", extras: ["钱", "什么"] },
      { id: 3, answer: "十", extras: ["六", "九"] },
      { id: 4, answer: "豆浆", extras: ["饺子", "油条"] },
    ],
    "A: ....... , jiǎozi duōshao qián yì wǎn? B: Qī kuài yì wǎn. A: Wǒ jiā yǒu wǔ kǒu rén, wǒ yào wǔ ....... . B: Hǎo, yígòng sān ....... wǔ kuài. A: Wǒ hái xiǎng hē yì bēi, nǐmen yǒu ....... ma? B: Yǒu, dòujiāng sì kuài yì bēi.",
    "A: Permisi, pangsit berapa uang semangkuk? B: Tujuh yuan semangkuk. A: Keluargaku ada lima orang, saya mau lima mangkuk. B: Baik, totalnya tiga puluh lima yuan. A: Saya juga ingin minum segelas, apakah kalian punya susu kedelai? B: Ada, susu kedelai empat yuan segelas.",
  ),
  paragraph(
    "Lengkapi paragraf tentang ayah dokter yang makan siang berikut!",
    [
      "我爸爸是医生，他每天都很忙。今天他在医院的饭馆吃午饭。他想吃.......，因为他爱吃饭，一碗四块。他要两碗，一共.......块钱。他还想喝一碗热的，他问老板：“这里的.......多少.......？”老板说：“六块一碗。”",
    ],
    [
      { id: 1, answer: "米饭", extras: ["钱", "块"] },
      { id: 2, answer: "八", extras: ["六", "七"] },
      { id: 3, answer: "汤", extras: ["钱", "块"] },
      { id: 4, answer: "钱", extras: ["什么", "请问"] },
    ],
    "Wǒ bàba shì yīshēng, tā měi tiān dōu hěn máng. Jīntiān tā zài yīyuàn de fànguǎn chī wǔfàn. Tā xiǎng chī ....... , yīnwèi tā ài chī fàn, yì wǎn sì kuài. Tā yào liǎng wǎn, yígòng ....... kuài qián. Tā hái xiǎng hē yì wǎn rè de, tā wèn lǎobǎn: “Zhèlǐ de ....... duōshao ....... ?” Lǎobǎn shuō: “Liù kuài yì wǎn.”",
    "Ayahku seorang dokter, dia selalu sibuk. Hari ini dia makan siang di restoran rumah sakit. Dia ingin makan nasi, karena dia suka makan nasi, semangkuk empat yuan. Dia mau dua mangkuk, totalnya delapan yuan. Dia juga ingin minum yang panas, dia bertanya kepada pemilik: “Sup di sini berapa uang?” Pemilik berkata: “Enam yuan semangkuk.”",
  ),
  paragraph(
    "Lengkapi paragraf tentang sarapan berdua dengan adik berikut!",
    [
      "今天早上我和弟弟去早饭店。服务员问：“你们要.......？”弟弟说：“我要一杯.......，三块钱。”我说：“我不喝豆浆，我要一碗.......，五块钱。”服务员说：“一共.......块钱。”",
    ],
    [
      { id: 1, answer: "什么", extras: ["块", "六"] },
      { id: 2, answer: "豆浆", extras: ["饺子", "油条"] },
      { id: 3, answer: "粥", extras: ["钱", "块"] },
      { id: 4, answer: "八", extras: ["六", "七"] },
    ],
    "Jīntiān zǎoshang wǒ hé dìdi qù zǎofàn diàn. Fúwùyuán wèn: “Nǐmen yào ....... ?” Dìdi shuō: “Wǒ yào yì bēi ....... , sān kuài qián.” Wǒ shuō: “Wǒ bù hē dòujiāng, wǒ yào yì wǎn ....... , wǔ kuài qián.” Fúwùyuán shuō: “Yígòng ....... kuài qián.”",
    "Pagi ini saya dan adik laki-laki pergi ke kedai sarapan. Pelayan bertanya: “Kalian mau apa?” Adik berkata: “Saya mau segelas susu kedelai, tiga yuan.” Saya berkata: “Saya tidak minum susu kedelai, saya mau semangkuk bubur, lima yuan.” Pelayan berkata: “Totalnya delapan yuan.”",
  ),
  paragraph(
    "Lengkapi paragraf tentang uang dua puluh yuan berikut!",
    [
      "我有二十块钱。我想买一碗米饭、一碗汤和两个包子。米饭三块，汤五块，一个包子两块。我问老板：“.......，一共.......钱？”老板说：“一共.......二块。”我给老板二十块，老板找我.......块。",
    ],
    [
      { id: 1, answer: "请问", extras: ["什么", "钱"] },
      { id: 2, answer: "多少", extras: ["什么", "块"] },
      { id: 3, answer: "十", extras: ["六", "九"] },
      { id: 4, answer: "八", extras: ["六", "七"] },
    ],
    "Wǒ yǒu èrshí kuài qián. Wǒ xiǎng mǎi yì wǎn mǐfàn, yì wǎn tāng hé liǎng ge bāozi. Mǐfàn sān kuài, tāng wǔ kuài, yí ge bāozi liǎng kuài. Wǒ wèn lǎobǎn: “....... , yígòng ....... qián?” Lǎobǎn shuō: “Yígòng ....... èr kuài.” Wǒ gěi lǎobǎn èrshí kuài, lǎobǎn zhǎo wǒ ....... kuài.",
    "Saya punya dua puluh yuan. Saya ingin membeli semangkuk nasi, semangkuk sup, dan dua bakpao. Nasi tiga yuan, sup lima yuan, satu bakpao dua yuan. Saya bertanya kepada pemilik: “Permisi, totalnya berapa uang?” Pemilik berkata: “Totalnya dua belas yuan.” Saya memberi pemilik dua puluh yuan, pemilik memberi kembalian delapan yuan.",
  ),
  paragraph(
    "Lengkapi paragraf tentang makan di mal bersama keluarga berikut!",
    [
      "今天是星期天，我和爸爸妈妈去商场吃饭。爸爸爱吃面，他要一碗.......，一碗六块。妈妈要一碗饺子，一碗八块。我要三个.......，一个两块。妈妈问服务员：“.......，洗手间在哪里？”我们一共二.......块钱。",
    ],
    [
      { id: 1, answer: "面条儿", extras: ["钱", "块"] },
      { id: 2, answer: "包子", extras: ["钱", "块"] },
      { id: 3, answer: "请问", extras: ["什么", "多少"] },
      { id: 4, answer: "十", extras: ["六", "九"] },
    ],
    "Jīntiān shì xīngqītiān, wǒ hé bàba māma qù shāngchǎng chī fàn. Bàba ài chī miàn, tā yào yì wǎn ....... , yì wǎn liù kuài. Māma yào yì wǎn jiǎozi, yì wǎn bā kuài. Wǒ yào sān ge ....... , yí ge liǎng kuài. Māma wèn fúwùyuán: “....... , xǐshǒujiān zài nǎlǐ?” Wǒmen yígòng èr ....... kuài qián.",
    "Hari ini hari Minggu, saya dan ayah ibu makan di mal. Ayah suka mi, dia mau semangkuk mi, semangkuk enam yuan. Ibu mau semangkuk pangsit, semangkuk delapan yuan. Saya mau tiga bakpao, satu dua yuan. Ibu bertanya kepada pelayan: “Permisi, di mana toiletnya?” Kami totalnya dua puluh yuan.",
  ),
  paragraph(
    "Lengkapi percakapan membeli bubur berikut!",
    [
      "A：你好！你要.......？B：我要粥。.......，粥多少钱一碗？A：五块一碗。B：我要三.......，一共.......五块钱。",
    ],
    [
      { id: 1, answer: "什么", extras: ["块", "六"] },
      { id: 2, answer: "请问", extras: ["什么", "多少"] },
      { id: 3, answer: "碗", extras: ["钱", "什么"] },
      { id: 4, answer: "十", extras: ["六", "八"] },
    ],
    "A: Nǐ hǎo! Nǐ yào ....... ? B: Wǒ yào zhōu. ....... , zhōu duōshao qián yì wǎn? A: Wǔ kuài yì wǎn. B: Wǒ yào sān ....... , yígòng ....... wǔ kuài qián.",
    "A: Halo! Anda mau apa? B: Saya mau bubur. Permisi, bubur berapa uang semangkuk? A: Lima yuan semangkuk. B: Saya mau tiga mangkuk, totalnya lima belas yuan.",
  ),
  paragraph(
    "Lengkapi paragraf tentang uang sepuluh yuan berikut!",
    [
      "我有十块钱，我想买早饭。一个包子三块，一杯豆浆.......块，刚好十块钱。我的.......够了。我问老板：“.......，你们还有.......？”老板说：“有油条，两块一根。”",
    ],
    [
      { id: 1, answer: "七", extras: ["六", "八"] },
      { id: 2, answer: "钱", extras: ["碗", "什么"] },
      { id: 3, answer: "请问", extras: ["什么", "多少"] },
      { id: 4, answer: "什么", extras: ["块", "六"] },
    ],
    "Wǒ yǒu shí kuài qián, wǒ xiǎng mǎi zǎofàn. Yí ge bāozi sān kuài, yì bēi dòujiāng ....... kuài, gānghǎo shí kuài qián. Wǒ de ....... gòu le. Wǒ wèn lǎobǎn: “....... , nǐmen hái yǒu ....... ?” Lǎobǎn shuō: “Yǒu yóutiáo, liǎng kuài yì gēn.”",
    "Saya punya sepuluh yuan, saya ingin membeli sarapan. Satu bakpao tiga yuan, segelas susu kedelai tujuh yuan, pas sepuluh yuan. Uangku cukup. Saya bertanya kepada pemilik: “Permisi, apa lagi yang kalian punya?” Pemilik berkata: “Ada youtiao, dua yuan satu.”",
  ),
  paragraph(
    "Lengkapi paragraf tentang tiga orang makan bersama berikut!",
    [
      "我们三个人去饭馆吃饭。我要一碗饺子，朋友要一.......面条儿，另一个朋友要一碗粥。饺子九块，面条儿八块，粥六块。我问老板：“.......，一共.......钱？”老板说：“一共二.......三块。”",
    ],
    [
      { id: 1, answer: "碗", extras: ["钱", "什么"] },
      { id: 2, answer: "请问", extras: ["什么", "钱"] },
      { id: 3, answer: "多少", extras: ["什么", "块"] },
      { id: 4, answer: "十", extras: ["六", "九"] },
    ],
    "Wǒmen sān ge rén qù fànguǎn chī fàn. Wǒ yào yì wǎn jiǎozi, péngyou yào yì ....... miàntiáor, lìng yí ge péngyou yào yì wǎn zhōu. Jiǎozi jiǔ kuài, miàntiáor bā kuài, zhōu liù kuài. Wǒ wèn lǎobǎn: “....... , yígòng ....... qián?” Lǎobǎn shuō: “Yígòng èr ....... sān kuài.”",
    "Kami bertiga pergi makan di restoran. Saya mau semangkuk pangsit, teman mau semangkuk mi, teman yang satu lagi mau semangkuk bubur. Pangsit sembilan yuan, mi delapan yuan, bubur enam yuan. Saya bertanya kepada pemilik: “Permisi, totalnya berapa uang?” Pemilik berkata: “Totalnya dua puluh tiga yuan.”",
  ),
  paragraph(
    "Lengkapi paragraf tentang Xiao Ma yang mentraktir makan berikut!",
    [
      "小马有三十块钱，他请我吃饭。我们去了一家饭馆，小马问老板：“.......，米饭多少钱一碗？”老板说：“三块。”我要了一.......米饭，小马要了一碗面条儿，一碗九块。我们一共花了.......二块钱，小马还有十.......块钱。",
    ],
    [
      { id: 1, answer: "请问", extras: ["什么", "多少"] },
      { id: 2, answer: "碗", extras: ["钱", "什么"] },
      { id: 3, answer: "十", extras: ["六", "八"] },
      { id: 4, answer: "八", extras: ["六", "七"] },
    ],
    "Xiǎo Mǎ yǒu sānshí kuài qián, tā qǐng wǒ chī fàn. Wǒmen qù le yì jiā fànguǎn, Xiǎo Mǎ wèn lǎobǎn: “....... , mǐfàn duōshao qián yì wǎn?” Lǎobǎn shuō: “Sān kuài.” Wǒ yào le yì ....... mǐfàn, Xiǎo Mǎ yào le yì wǎn miàntiáor, yì wǎn jiǔ kuài. Wǒmen yígòng huā le ....... èr kuài qián, Xiǎo Mǎ hái yǒu shí ....... kuài qián.",
    "Xiao Ma punya tiga puluh yuan, dia mentraktir saya makan. Kami pergi ke sebuah restoran, Xiao Ma bertanya kepada pemilik: “Permisi, nasi berapa uang semangkuk?” Pemilik berkata: “Tiga yuan.” Saya memesan semangkuk nasi, Xiao Ma memesan semangkuk mi, semangkuk sembilan yuan. Kami menghabiskan total dua belas yuan, Xiao Ma masih punya delapan belas yuan.",
  ),
  paragraph(
    "Lengkapi paragraf tentang membeli sarapan untuk seluruh keluarga berikut!",
    [
      "今天我想给全家买早饭。我家有五口人：爸爸、妈妈、哥哥、妹妹和我。每个人要两个.......，一个三块，所以每个人要.......块钱。五个人一共要三.......块钱。老板问我：“你们还要一杯.......吗？”",
    ],
    [
      { id: 1, answer: "包子", extras: ["钱", "块"] },
      { id: 2, answer: "六", extras: ["七", "八"] },
      { id: 3, answer: "十", extras: ["六", "九"] },
      { id: 4, answer: "豆浆", extras: ["饺子", "油条"] },
    ],
    "Jīntiān wǒ xiǎng gěi quán jiā mǎi zǎofàn. Wǒ jiā yǒu wǔ kǒu rén: bàba, māma, gēge, mèimei hé wǒ. Měi ge rén yào liǎng ge ....... , yí ge sān kuài, suǒyǐ měi ge rén yào ....... kuài qián. Wǔ ge rén yígòng yào sān ....... kuài qián. Lǎobǎn wèn wǒ: “Nǐmen hái yào yì bēi ....... ma?”",
    "Hari ini saya ingin membelikan sarapan untuk seluruh keluarga. Keluargaku ada lima orang: ayah, ibu, kakak laki-laki, adik perempuan, dan saya. Setiap orang mau dua bakpao, satu bakpao tiga yuan, jadi setiap orang enam yuan. Lima orang totalnya tiga puluh yuan. Pemilik bertanya padaku: “Kalian masih mau segelas susu kedelai?”",
  ),
  paragraph(
    "Lengkapi paragraf tentang menu restoran sekolah berikut!",
    [
      "我是学生，我每天在学校吃午饭。学校的饭馆有米饭、面条儿、粥和汤。米饭三块，面条儿六块，粥五块，汤四块。今天我要一碗.......和一碗汤，一共.......块钱。明天我想吃一碗面条儿和一碗粥，一共.......一块钱。我有三十块.......，够了。",
    ],
    [
      { id: 1, answer: "米饭", extras: ["钱", "块"] },
      { id: 2, answer: "七", extras: ["六", "八"] },
      { id: 3, answer: "十", extras: ["六", "九"] },
      { id: 4, answer: "钱", extras: ["碗", "什么"] },
    ],
    "Wǒ shì xuésheng, wǒ měi tiān zài xuéxiào chī wǔfàn. Xuéxiào de fànguǎn yǒu mǐfàn, miàntiáor, zhōu hé tāng. Mǐfàn sān kuài, miàntiáor liù kuài, zhōu wǔ kuài, tāng sì kuài. Jīntiān wǒ yào yì wǎn ....... hé yì wǎn tāng, yígòng ....... kuài qián. Míngtiān wǒ xiǎng chī yì wǎn miàntiáor hé yì wǎn zhōu, yígòng ....... yī kuài qián. Wǒ yǒu sānshí kuài ....... , gòu le.",
    "Saya seorang siswa, setiap hari saya makan siang di sekolah. Restoran sekolah ada nasi, mi, bubur, dan sup. Nasi tiga yuan, mi enam yuan, bubur lima yuan, sup empat yuan. Hari ini saya mau semangkuk nasi dan semangkuk sup, totalnya tujuh yuan. Besok saya ingin makan semangkuk mi dan semangkuk bubur, totalnya sebelas yuan. Saya punya tiga puluh yuan, cukup.",
  ),
  paragraph(
    "Lengkapi percakapan tentang bakpao dan bubur berikut!",
    [
      "A：.......，你们有包子吗？B：有。A：一个包子.......钱？B：三块一个。A：我要两个，还要一碗.......，一碗五块。B：好，一共十一块。A：给你二十块钱。B：找你.......块。",
    ],
    [
      { id: 1, answer: "请问", extras: ["什么", "钱"] },
      { id: 2, answer: "多少", extras: ["什么", "块"] },
      { id: 3, answer: "粥", extras: ["钱", "块"] },
      { id: 4, answer: "九", extras: ["六", "七"] },
    ],
    "A: ....... , nǐmen yǒu bāozi ma? B: Yǒu. A: Yí ge bāozi ....... qián? B: Sān kuài yí ge. A: Wǒ yào liǎng ge, hái yào yì wǎn ....... , yì wǎn wǔ kuài. B: Hǎo, yígòng shíyī kuài. A: Gěi nǐ èrshí kuài qián. B: Zhǎo nǐ ....... kuài.",
    "A: Permisi, apakah kalian punya bakpao? B: Ada. A: Satu bakpao berapa uang? B: Tiga yuan satu. A: Saya mau dua, dan juga semangkuk bubur, semangkuk lima yuan. B: Baik, totalnya sebelas yuan. A: Ini dua puluh yuan. B: Kembaliannya sembilan yuan.",
  ),
  paragraph(
    "Lengkapi paragraf tentang sarapan favorit berikut!",
    [
      "我最喜欢的早饭是油条和豆浆。我家前边有一家小店，那里的油条一根两块，豆浆一杯五块。我每天吃两根油条，喝一杯豆浆，一共.......块钱。我哥哥爱吃包子，一个四块，他吃两个，一共.......块钱。我们两个人每天一共要花十.......块钱。我问老板：“.......，你们明天还有包子吗？”",
    ],
    [
      { id: 1, answer: "九", extras: ["六", "七"] },
      { id: 2, answer: "八", extras: ["六", "七"] },
      { id: 3, answer: "七", extras: ["六", "八"] },
      { id: 4, answer: "请问", extras: ["什么", "钱"] },
    ],
    "Wǒ zuì xǐhuan de zǎofàn shì yóutiáo hé dòujiāng. Wǒ jiā qiánbian yǒu yì jiā xiǎo diàn, nàlǐ de yóutiáo yì gēn liǎng kuài, dòujiāng yì bēi wǔ kuài. Wǒ měi tiān chī liǎng gēn yóutiáo, hē yì bēi dòujiāng, yígòng ....... kuài qián. Wǒ gēge ài chī bāozi, yí ge sì kuài, tā chī liǎng ge, yígòng ....... kuài qián. Wǒmen liǎng ge rén měi tiān yígòng yào huā shí ....... kuài qián. Wǒ wèn lǎobǎn: “....... , nǐmen míngtiān hái yǒu bāozi ma?”",
    "Sarapan favoritku adalah youtiao dan susu kedelai. Di depan rumahku ada toko kecil, youtiao di sana dua yuan satu, susu kedelai lima yuan segelas. Setiap hari saya makan dua youtiao dan minum segelas susu kedelai, totalnya sembilan yuan. Kakak laki-lakiku suka bakpao, satu empat yuan, dia makan dua, totalnya delapan yuan. Kami berdua setiap hari menghabiskan tujuh belas yuan. Saya bertanya kepada pemilik: “Permisi, apakah besok kalian masih punya bakpao?”",
  ),
  paragraph(
    "Lengkapi paragraf tentang makan bersama Xiaoying berikut!",
    [
      "我和朋友小英去饭馆吃饭。小英爱吃面，她点了一碗.......，一碗六块。我点了一碗热的.......，一碗五块。我们还点了一碗饺子，一碗九块。一共二.......块钱。服务员说：“.......，你们要喝什么？”",
    ],
    [
      { id: 1, answer: "面条儿", extras: ["钱", "块"] },
      { id: 2, answer: "汤", extras: ["钱", "块"] },
      { id: 3, answer: "十", extras: ["六", "九"] },
      { id: 4, answer: "请问", extras: ["什么", "多少"] },
    ],
    "Wǒ hé péngyou Xiǎoyīng qù fànguǎn chī fàn. Xiǎoyīng ài chī miàn, tā diǎn le yì wǎn ....... , yì wǎn liù kuài. Wǒ diǎn le yì wǎn rè de ....... , yì wǎn wǔ kuài. Wǒmen hái diǎn le yì wǎn jiǎozi, yì wǎn jiǔ kuài. Yígòng èr ....... kuài qián. Fúwùyuán shuō: “....... , nǐmen yào hē shénme?”",
    "Saya dan teman saya Xiaoying makan di restoran. Xiaoying suka mi, dia memesan semangkuk mi, semangkuk enam yuan. Saya memesan semangkuk sup panas, semangkuk lima yuan. Kami juga memesan semangkuk pangsit, semangkuk sembilan yuan. Totalnya dua puluh yuan. Pelayan berkata: “Permisi, kalian mau minum apa?”",
  ),
  paragraph(
    "Lengkapi paragraf tentang belanja sarapan dengan adik perempuan berikut!",
    [
      "今天我和妹妹自己买早饭，我们有三十块钱。老板问：“你们要.......？”妹妹要了两个包子，一个三块，一共.......块钱。我要了一碗粥，一碗八块。我们还要了一杯豆浆，.......块钱。老板说：“你们一共花了二.......一块钱。”",
    ],
    [
      { id: 1, answer: "什么", extras: ["块", "六"] },
      { id: 2, answer: "六", extras: ["七", "九"] },
      { id: 3, answer: "七", extras: ["六", "九"] },
      { id: 4, answer: "十", extras: ["六", "九"] },
    ],
    "Jīntiān wǒ hé mèimei zìjǐ mǎi zǎofàn, wǒmen yǒu sānshí kuài qián. Lǎobǎn wèn: “Nǐmen yào ....... ?” Mèimei yào le liǎng ge bāozi, yí ge sān kuài, yígòng ....... kuài qián. Wǒ yào le yì wǎn zhōu, yì wǎn bā kuài. Wǒmen hái yào le yì bēi dòujiāng, ....... kuài qián. Lǎobǎn shuō: “Nǐmen yígòng huā le èr ....... yī kuài qián.”",
    "Hari ini saya dan adik perempuan membeli sarapan sendiri, kami punya tiga puluh yuan. Pemilik bertanya: “Kalian mau apa?” Adik memesan dua bakpao, satu tiga yuan, totalnya enam yuan. Saya memesan semangkuk bubur, semangkuk delapan yuan. Kami juga memesan segelas susu kedelai, tujuh yuan. Pemilik berkata: “Kalian menghabiskan total dua puluh satu yuan.”",
  ),
  paragraph(
    "Lengkapi paragraf tentang membeli pangsit dan susu kedelai berikut!",
    [
      "我是学生，我很喜欢吃饺子。今天我去饭馆，我问老板：“.......，饺子一碗.......钱？”老板说：“九块一碗。”我要两碗，所以我一共要给老板十.......块钱。我吃完饺子，还想喝一杯.......。",
    ],
    [
      { id: 1, answer: "请问", extras: ["什么", "钱"] },
      { id: 2, answer: "多少", extras: ["什么", "块"] },
      { id: 3, answer: "八", extras: ["六", "七"] },
      { id: 4, answer: "豆浆", extras: ["饺子", "油条"] },
    ],
    "Wǒ shì xuésheng, wǒ hěn xǐhuan chī jiǎozi. Jīntiān wǒ qù fànguǎn, wǒ wèn lǎobǎn: “....... , jiǎozi yì wǎn ....... qián?” Lǎobǎn shuō: “Jiǔ kuài yì wǎn.” Wǒ yào liǎng wǎn, suǒyǐ wǒ yígòng yào gěi lǎobǎn shí ....... kuài qián. Wǒ chī wán jiǎozi, hái xiǎng hē yì bēi ....... .",
    "Saya seorang siswa, saya sangat suka makan pangsit. Hari ini saya pergi ke restoran, saya bertanya kepada pemilik: “Permisi, pangsit berapa uang semangkuk?” Pemilik berkata: “Sembilan yuan semangkuk.” Saya mau dua mangkuk, jadi saya harus membayar total delapan belas yuan. Setelah selesai makan pangsit, saya masih ingin minum segelas susu kedelai.",
  ),
  paragraph(
    "Lengkapi paragraf tentang keluarga makan di restoran kecil berikut!",
    [
      "周末我和家人去商场。商场里边有很多饭馆。我们去了一家小饭馆，爸爸喜欢吃软的，他要一碗.......，一碗五块。妈妈要两个.......，一个三块。我要一碗热的.......，一碗七块。爸爸问服务员：“一共.......钱？”服务员说：“一共十八块。”",
    ],
    [
      { id: 1, answer: "粥", extras: ["钱", "块"] },
      { id: 2, answer: "包子", extras: ["钱", "块"] },
      { id: 3, answer: "汤", extras: ["钱", "块"] },
      { id: 4, answer: "多少", extras: ["什么", "块"] },
    ],
    "Zhōumò wǒ hé jiārén qù shāngchǎng. Shāngchǎng lǐbian yǒu hěn duō fànguǎn. Wǒmen qù le yì jiā xiǎo fànguǎn, bàba xǐhuan chī ruǎn de, tā yào yì wǎn ....... , yì wǎn wǔ kuài. Māma yào liǎng ge ....... , yí ge sān kuài. Wǒ yào yì wǎn rè de ....... , yì wǎn qī kuài. Bàba wèn fúwùyuán: “Yígòng ....... qián?” Fúwùyuán shuō: “Yígòng shíbā kuài.”",
    "Akhir pekan saya dan keluarga pergi ke mal. Di dalam mal ada banyak restoran. Kami masuk ke sebuah restoran kecil, ayah suka makanan yang lembut, dia mau semangkuk bubur, semangkuk lima yuan. Ibu mau dua bakpao, satu tiga yuan. Saya mau semangkuk sup panas, semangkuk tujuh yuan. Ayah bertanya kepada pelayan: “Totalnya berapa uang?” Pelayan berkata: “Totalnya delapan belas yuan.”",
  ),
  paragraph(
    "Lengkapi percakapan membeli sarapan berikut!",
    [
      "A：.......，我想买早饭。你们有.......？B：有，我们有包子、饺子、油条和豆浆。A：一个包子.......钱？B：三块一个。A：我要五个包子，一共.......五块钱，对吗？B：对，谢谢！",
    ],
    [
      { id: 1, answer: "请问", extras: ["什么", "多少"] },
      { id: 2, answer: "什么", extras: ["块", "六"] },
      { id: 3, answer: "多少", extras: ["什么", "块"] },
      { id: 4, answer: "十", extras: ["六", "九"] },
    ],
    "A: ....... , wǒ xiǎng mǎi zǎofàn. Nǐmen yǒu ....... ? B: Yǒu, wǒmen yǒu bāozi, jiǎozi, yóutiáo hé dòujiāng. A: Yí ge bāozi ....... qián? B: Sān kuài yí ge. A: Wǒ yào wǔ ge bāozi, yígòng ....... wǔ kuài qián, duì ma? B: Duì, xièxie!",
    "A: Permisi, saya ingin membeli sarapan. Kalian punya apa? B: Kami punya bakpao, pangsit, youtiao, dan susu kedelai. A: Satu bakpao berapa uang? B: Tiga yuan satu. A: Saya mau lima bakpao, totalnya lima belas yuan, benar? B: Benar, terima kasih!",
  ),
];

export const u6_lessons: Lesson[] = [
  {
    id: "u6_l1",
    title: "U6 L1",
    exercises: u6_sentences,
  },
];
