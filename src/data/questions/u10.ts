import type { Lesson } from "@/data/course";
import { sentence, paragraph } from "./helpers";

const u10_sentences = [
  sentence(
    "Ponsel saya mahal.",
    [
      ["我", "手机", "很", "贵"],
      ["我", "的", "手机", "很", "贵"],
    ],
    ["便宜", "电脑", "不"],
  ),
  sentence(
    "Komputer ini murah.",
    ["这", "个", "电脑", "很", "便宜"],
    ["那", "贵", "不"],
  ),
  sentence(
    "Tas itu berat.",
    ["那", "个", "包", "很", "重"],
    ["这", "轻", "不"],
  ),
  sentence(
    "Tas ini ringan.",
    ["这", "个", "包", "很", "轻"],
    ["那", "重", "不"],
  ),
  sentence(
    "Baju ini bagus (enak dilihat).",
    ["这", "件", "衣服", "很", "好看"],
    ["那", "贵", "不"],
  ),
  sentence(
    "Mobil saya besar.",
    [
      ["我", "车", "很", "大"],
      ["我", "的", "车", "很", "大"],
    ],
    ["小", "手机", "不"],
  ),
  sentence(
    "Mobil dia (laki-laki) kecil.",
    [
      ["他", "车", "很", "小"],
      ["他", "的", "车", "很", "小"],
    ],
    ["大", "她", "不"],
  ),
  sentence(
    "Jam tangan ini keren.",
    ["这", "个", "手表", "很", "酷"],
    ["那", "耳机", "不"],
  ),
  sentence(
    "Headphone itu mahal.",
    ["那", "个", "耳机", "很", "贵"],
    ["这", "便宜", "不"],
  ),
  sentence(
    "Ponsel itu murah.",
    ["那", "个", "手机", "很", "便宜"],
    ["这", "贵", "不"],
  ),
  sentence(
    "Ponsel saya tidak mahal.",
    [
      ["我", "手机", "不", "贵"],
      ["我", "的", "手机", "不", "贵"],
    ],
    ["很", "便宜", "是"],
  ),
  sentence(
    "Komputer ini tidak murah.",
    ["这", "个", "电脑", "不", "便宜"],
    ["很", "贵", "是"],
  ),
  sentence(
    "Tas saya tidak berat.",
    [
      ["我", "包", "不", "重"],
      ["我", "的", "包", "不", "重"],
    ],
    ["很", "轻", "是"],
  ),
  sentence(
    "Mobil itu tidak kecil.",
    ["那", "个", "车", "不", "小"],
    ["很", "大", "是"],
  ),
  sentence(
    "Baju ini tidak bagus.",
    ["这", "件", "衣服", "不", "好看"],
    ["很", "贵", "是"],
  ),
  sentence(
    "Jam tangan saya tidak keren.",
    [
      ["我", "手表", "不", "酷"],
      ["我", "的", "手表", "不", "酷"],
    ],
    ["很", "贵", "是"],
  ),
  sentence(
    "Apakah ponsel kamu mahal?",
    [
      ["你", "手机", "贵", "吗"],
      ["你", "的", "手机", "贵", "吗"],
    ],
    ["很", "便宜", "不"],
  ),
  sentence(
    "Apakah komputer ini murah?",
    ["这", "个", "电脑", "便宜", "吗"],
    ["很", "贵", "不"],
  ),
  sentence(
    "Apakah tas itu berat?",
    ["那", "个", "包", "重", "吗"],
    ["很", "轻", "不"],
  ),
  sentence(
    "Apakah mobil kamu besar?",
    [
      ["你", "车", "大", "吗"],
      ["你", "的", "车", "大", "吗"],
    ],
    ["很", "小", "不"],
  ),
  sentence(
    "Apakah baju ini bagus?",
    ["这", "件", "衣服", "好看", "吗"],
    ["很", "贵", "不"],
  ),
  sentence(
    "Apakah ponsel ini mahal atau murah?",
    ["这", "个", "手机", "贵", "还是", "便宜"],
    ["很", "吗", "不"],
  ),
  sentence(
    "Apakah tas ini berat atau ringan?",
    ["这", "个", "包", "重", "还是", "轻"],
    ["很", "吗", "不"],
  ),
  sentence(
    "Apakah mobil kamu besar atau kecil?",
    [
      ["你", "车", "大", "还是", "小"],
      ["你", "的", "车", "大", "还是", "小"],
    ],
    ["很", "吗", "不"],
  ),
  sentence(
    "Apakah ponsel ini mahal?",
    ["这", "个", "手机", "贵", "不", "贵"],
    ["很", "吗", "便宜"],
  ),
  sentence(
    "Apakah tas itu berat?",
    ["那", "个", "包", "重", "不", "重"],
    ["很", "吗", "轻"],
  ),
  sentence(
    "Apakah baju itu bagus?",
    ["那", "件", "衣服", "好看", "不", "好看"],
    ["很", "吗", "贵"],
  ),
  sentence(
    "Ponsel ini terlalu mahal.",
    ["这", "个", "手机", "太", "贵", "了"],
    ["很", "便宜", "不"],
  ),
  sentence(
    "Komputer itu terlalu mahal.",
    ["那", "个", "电脑", "太", "贵", "了"],
    ["很", "便宜", "不"],
  ),
  sentence(
    "Tas ini terlalu berat.",
    ["这", "个", "包", "太", "重", "了"],
    ["很", "轻", "不"],
  ),
  sentence(
    "Mobil ini terlalu besar.",
    ["这", "个", "车", "太", "大", "了"],
    ["很", "小", "不"],
  ),
  sentence(
    "Baju itu bagus sekali.",
    ["那", "件", "衣服", "太", "好看", "了"],
    ["很", "贵", "不"],
  ),
  sentence(
    "Jam tangan ini keren sekali.",
    ["这", "个", "手表", "太", "酷", "了"],
    ["很", "耳机", "不"],
  ),
  sentence(
    "Headphone ini murah sekali.",
    ["这", "个", "耳机", "太", "便宜", "了"],
    ["很", "贵", "不"],
  ),
  sentence(
    "Bagaimana ponsel kamu?",
    [
      ["你", "手机", "怎么样"],
      ["你", "的", "手机", "怎么样"],
    ],
    ["很", "吗", "什么"],
  ),
  sentence(
    "Bagaimana komputer itu?",
    ["那", "个", "电脑", "怎么样"],
    ["很", "吗", "什么"],
  ),
  sentence(
    "Bagaimana mobil dia (laki-laki)?",
    [
      ["他", "车", "怎么样"],
      ["他", "的", "车", "怎么样"],
    ],
    ["很", "吗", "她"],
  ),
  sentence(
    "Bagaimana baju ini?",
    ["这", "件", "衣服", "怎么样"],
    ["很", "吗", "什么"],
  ),
  sentence(
    "Bagaimana jam tangan itu?",
    ["那", "个", "手表", "怎么样"],
    ["很", "吗", "什么"],
  ),
  sentence(
    "Saya punya ponsel, ponselnya murah.",
    ["我", "有", "手机", "手机", "很", "便宜"],
    ["贵", "没有", "不"],
  ),
  sentence(
    "Saya punya komputer, komputernya tidak mahal.",
    ["我", "有", "电脑", "电脑", "不", "贵"],
    ["很", "没有", "便宜"],
  ),
  sentence(
    "Saya punya mobil, mobilnya besar.",
    ["我", "有", "车", "车", "很", "大"],
    ["小", "没有", "不"],
  ),
  sentence(
    "Saya tidak punya jam tangan.",
    ["我", "没有", "手表"],
    ["有", "耳机", "不"],
  ),
  sentence(
    "Apakah kamu punya headphone?",
    ["你", "有", "耳机", "吗"],
    ["没有", "手机", "不"],
  ),
  sentence(
    "Saya mau satu ponsel.",
    ["我", "要", "一", "个", "手机"],
    ["电脑", "杯", "不"],
  ),
  sentence(
    "Berapa harga ponsel ini?",
    ["这", "个", "手机", "多少", "钱"],
    ["那", "贵", "吗"],
  ),
  sentence(
    "Berapa harga baju itu?",
    ["那", "件", "衣服", "多少", "钱"],
    ["这", "贵", "吗"],
  ),
  sentence(
    "Ponsel saya dan komputer saya semuanya mahal.",
    [
      ["我", "手机", "和", "电脑", "都", "很", "贵"],
      ["我", "的", "手机", "和", "我", "的", "电脑", "都", "很", "贵"],
    ],
    ["便宜", "也", "不"],
  ),
  sentence(
    "Ponsel saya mahal, komputer saya juga mahal.",
    [
      ["我", "手机", "很", "贵", "电脑", "也", "很", "贵"],
      ["我", "的", "手机", "很", "贵", "我", "的", "电脑", "也", "很", "贵"],
    ],
    ["便宜", "都", "不"],
  ),
];

const u10_paragraphs = [
  paragraph(
    "Lengkapi paragraf tentang ponsel baru berikut!",
    [
      "我昨天买了一个新.......。它不重，.......轻，我很喜欢。我的朋友说它.......贵了，我说不贵。你的手机.......？我们周末一起去商场吧。",
    ],
    [
      { id: 1, answer: "手机", extras: ["车", "衣服"] },
      { id: 2, answer: "很", extras: ["怎么样", "了"] },
      { id: 3, answer: "太", extras: ["怎么样", "耳机"] },
      { id: 4, answer: "怎么样", extras: ["很", "太"] },
    ],
    "Wǒ zuótiān mǎi le yí ge xīn ....... . Tā bú zhòng, ....... qīng, wǒ hěn xǐhuan. Wǒ de péngyou shuō tā ....... guì le, wǒ shuō bú guì. Nǐ de shǒujī ....... ? Wǒmen zhōumò yìqǐ qù shāngchǎng ba.",
    "Kemarin saya membeli sebuah ponsel baru. Ponselnya tidak berat, sangat ringan, saya sangat suka. Temanku bilang ponsel itu terlalu mahal, saya bilang tidak mahal. Bagaimana ponselmu? Akhir pekan ini mari kita pergi ke mal bersama.",
  ),
  paragraph(
    "Lengkapi paragraf tentang tas ibu berikut!",
    [
      "这个.......是我妈妈的，它很大，可以放很多书。它.......重，只有一斤，妈妈很喜欢。我的包太.......了，我拿不动。你的包.......？我想买一个和它一样的。",
    ],
    [
      { id: 1, answer: "包", extras: ["手表", "耳机"] },
      { id: 2, answer: "不", extras: ["手机", "怎么样"] },
      { id: 3, answer: "重", extras: ["手机", "怎么样"] },
      { id: 4, answer: "怎么样", extras: ["太", "很"] },
    ],
    "Zhège ....... shì wǒ māma de, tā hěn dà, kěyǐ fàng hěn duō shū. Tā ....... zhòng, zhǐ yǒu yì jīn, māma hěn xǐhuan. Wǒ de bāo tài ....... le, wǒ ná bu dòng. Nǐ de bāo ....... ? Wǒ xiǎng mǎi yí ge hé tā yíyàng de.",
    "Tas ini milik ibuku, tasnya besar, bisa memuat banyak buku. Tasnya tidak berat, hanya setengah kilo, ibu sangat suka. Tasku terlalu berat, saya tidak kuat membawanya. Bagaimana tasmu? Saya ingin membeli satu yang sama dengannya.",
  ),
  paragraph(
    "Lengkapi paragraf tentang laptop kakak berikut!",
    [
      "我哥哥是大学生，他有一台新.......。它是白色的，.......好看，也很轻。他的电脑不.......，所以他每天带它去学校。你的电脑.......？他说他很喜欢它。",
    ],
    [
      { id: 1, answer: "电脑", extras: ["衣服", "包"] },
      { id: 2, answer: "很", extras: ["怎么样", "了"] },
      { id: 3, answer: "重", extras: ["手机", "耳机"] },
      { id: 4, answer: "怎么样", extras: ["很", "太"] },
    ],
    "Wǒ gēge shì dàxuéshēng, tā yǒu yì tái xīn ....... . Tā shì báisè de, ....... hǎokàn, yě hěn qīng. Tā de diànnǎo bú ....... , suǒyǐ tā měi tiān dài tā qù xuéxiào. Nǐ de diànnǎo ....... ? Tā shuō tā hěn xǐhuan tā.",
    "Kakak laki-lakiku mahasiswa, dia punya sebuah laptop baru. Laptopnya berwarna putih, sangat bagus, juga ringan. Laptopnya tidak berat, jadi setiap hari dia membawanya ke sekolah. Bagaimana laptopmu? Dia bilang dia sangat menyukainya.",
  ),
  paragraph(
    "Lengkapi paragraf tentang membeli baju berikut!",
    [
      "今天我去商场买.......，我爱穿红色的。姐姐买了一件，只要五十块，很.......。我的衣服太贵.......，要五百块。你的衣服.......？但是我们都很高兴。",
    ],
    [
      { id: 1, answer: "衣服", extras: ["手机", "耳机"] },
      { id: 2, answer: "便宜", extras: ["手机", "包"] },
      { id: 3, answer: "了", extras: ["很", "不"] },
      { id: 4, answer: "怎么样", extras: ["太", "很"] },
    ],
    "Jīntiān wǒ qù shāngchǎng mǎi ....... , wǒ ài chuān hóngsè de. Jiějie mǎi le yí jiàn, zhǐ yào wǔshí kuài, hěn ....... . Wǒ de yīfu tài guì ....... , yào wǔbǎi kuài. Nǐ de yīfu ....... ? Dànshì wǒmen dōu hěn gāoxìng.",
    "Hari ini saya pergi ke mal untuk membeli baju, saya suka memakai yang berwarna merah. Kakak perempuan membeli satu, hanya lima puluh yuan, sangat murah. Bajuku terlalu mahal, lima ratus yuan. Bagaimana bajumu? Tetapi kami berdua sangat senang.",
  ),
  paragraph(
    "Lengkapi paragraf tentang mobil ayah berikut!",
    [
      "我爸爸有一辆.......，每天开它去公司。它不.......，可以坐五个人。爸爸说这辆车太贵.......，要二十万。我觉得它很酷。你家的车.......？",
    ],
    [
      { id: 1, answer: "车", extras: ["手表", "包"] },
      { id: 2, answer: "小", extras: ["手表", "耳机"] },
      { id: 3, answer: "了", extras: ["很", "不"] },
      { id: 4, answer: "怎么样", extras: ["太", "很"] },
    ],
    "Wǒ bàba yǒu yí liàng ....... , měi tiān kāi tā qù gōngsī. Tā bù ....... , kěyǐ zuò wǔ ge rén. Bàba shuō zhè liàng chē tài guì ....... , yào èrshí wàn. Wǒ juéde tā hěn kù. Nǐ jiā de chē ....... ?",
    "Ayahku punya sebuah mobil, setiap hari dia mengendarainya ke kantor. Mobilnya tidak kecil, bisa memuat lima orang. Ayah bilang mobil ini terlalu mahal, dua ratus ribu yuan. Menurutku mobilnya keren. Bagaimana mobil keluargamu?",
  ),
  paragraph(
    "Lengkapi percakapan tentang jam tangan berikut!",
    [
      "A：你的.......是新的吗？我想看时间，我的手机不在。B：对，它很酷，也很.......。A：贵不贵？B：不.......，只要两百块。A：它戴起来.......？B：很舒服。",
    ],
    [
      { id: 1, answer: "手表", extras: ["衣服", "车"] },
      { id: 2, answer: "好看", extras: ["手机", "耳机"] },
      { id: 3, answer: "贵", extras: ["耳机", "衣服"] },
      { id: 4, answer: "怎么样", extras: ["太", "很"] },
    ],
    "A: Nǐ de ....... shì xīn de ma? Wǒ xiǎng kàn shíjiān, wǒ de shǒujī bú zài. B: Duì, tā hěn kù, yě hěn ....... . A: Guì bu guì? B: Bú ....... , zhǐ yào liǎng bǎi kuài. A: Tā dài qǐlái ....... ? B: Hěn shūfu.",
    "A: Apakah jam tanganmu baru? Saya ingin melihat waktu, ponselku tidak ada. B: Ya, jamnya keren, juga bagus. A: Mahal atau tidak? B: Tidak mahal, hanya dua ratus yuan. A: Bagaimana rasanya saat dipakai? B: Sangat nyaman.",
  ),
  paragraph(
    "Lengkapi paragraf tentang earphone baru berikut!",
    [
      "我很喜欢听音乐，所以我买了一个新.......。它很小，也很.......，只有二十克。朋友的耳机太大.......，也很重。你的耳机.......？我每天都戴它。",
    ],
    [
      { id: 1, answer: "耳机", extras: ["衣服", "车"] },
      { id: 2, answer: "轻", extras: ["手机", "手表"] },
      { id: 3, answer: "了", extras: ["很", "不"] },
      { id: 4, answer: "怎么样", extras: ["太", "很"] },
    ],
    "Wǒ hěn xǐhuan tīng yīnyuè, suǒyǐ wǒ mǎi le yí ge xīn ....... . Tā hěn xiǎo, yě hěn ....... , zhǐ yǒu èrshí kè. Péngyou de ěrjī tài dà ....... , yě hěn zhòng. Nǐ de ěrjī ....... ? Wǒ měi tiān dōu dài tā.",
    "Saya suka mendengarkan musik, jadi saya membeli earphone baru. Ukurannya kecil, juga ringan, hanya dua puluh gram. Earphone temanku terlalu besar, juga berat. Bagaimana earphone-mu? Setiap hari saya memakainya.",
  ),
  paragraph(
    "Lengkapi percakapan tentang tas berikut!",
    [
      "A：这个包大不.......？B：很大，可以放电脑。A：重不重？B：不重，很.......。A：贵不贵？B：太.......了，要五百块。A：那个包.......？B：那个便宜，三百块。",
    ],
    [
      { id: 1, answer: "大", extras: ["手机", "耳机"] },
      { id: 2, answer: "轻", extras: ["手机", "手表"] },
      { id: 3, answer: "贵", extras: ["手机", "怎么样"] },
      { id: 4, answer: "怎么样", extras: ["太", "很"] },
    ],
    "A: Zhège bāo dà bu ....... ? B: Hěn dà, kěyǐ fàng diànnǎo. A: Zhòng bu zhòng? B: Bú zhòng, hěn ....... . A: Guì bu guì? B: Tài ....... le, yào wǔbǎi kuài. A: Nàge bāo ....... ? B: Nàge piányi, sānbǎi kuài.",
    "A: Apakah tas ini besar? B: Besar, bisa memuat laptop. A: Berat atau tidak? B: Tidak berat, sangat ringan. A: Mahal atau tidak? B: Terlalu mahal, lima ratus yuan. A: Bagaimana tas yang itu? B: Yang itu murah, tiga ratus yuan.",
  ),
  paragraph(
    "Lengkapi paragraf tentang dua ponsel berikut!",
    [
      "我有两个手机，一个大，一个小。大的手机.......重了，我不喜欢带它。小的手机很.......，我的朋友都想买。大的手机很便宜，小的手机.......便宜，要三千块。你的手机.......？",
    ],
    [
      { id: 1, answer: "太", extras: ["怎么样", "耳机"] },
      { id: 2, answer: "酷", extras: ["手机", "手表"] },
      { id: 3, answer: "不", extras: ["怎么样", "耳机"] },
      { id: 4, answer: "怎么样", extras: ["太", "很"] },
    ],
    "Wǒ yǒu liǎng ge shǒujī, yí ge dà, yí ge xiǎo. Dà de shǒujī ....... zhòng le, wǒ bù xǐhuan dài tā. Xiǎo de shǒujī hěn ....... , wǒ de péngyou dōu xiǎng mǎi. Dà de shǒujī hěn piányi, xiǎo de shǒujī ....... piányi, yào sānqiān kuài. Nǐ de shǒujī ....... ?",
    "Saya punya dua ponsel, satu besar, satu kecil. Ponsel yang besar terlalu berat, saya tidak suka membawanya. Ponsel yang kecil keren, teman-temanku semua ingin membelinya. Ponsel yang besar murah, ponsel yang kecil tidak murah, tiga ribu yuan. Bagaimana ponselmu?",
  ),
  paragraph(
    "Lengkapi percakapan tentang laptop berikut!",
    [
      "A：你的电脑.......？B：很好，它不.......，很轻。A：它大不.......？B：不大，是小的。A：贵不贵？B：太.......了，要八千块。",
    ],
    [
      { id: 1, answer: "怎么样", extras: ["很", "太"] },
      { id: 2, answer: "重", extras: ["手机", "耳机"] },
      { id: 3, answer: "大", extras: ["手机", "手表"] },
      { id: 4, answer: "贵", extras: ["手机", "怎么样"] },
    ],
    "A: Nǐ de diànnǎo ....... ? B: Hěn hǎo, tā bú ....... , hěn qīng. A: Tā dà bu ....... ? B: Bú dà, shì xiǎo de. A: Guì bu guì? B: Tài ....... le, yào bāqiān kuài.",
    "A: Bagaimana laptopmu? B: Bagus, tidak berat, sangat ringan. A: Apakah besar? B: Tidak besar, yang kecil. A: Mahal atau tidak? B: Terlalu mahal, delapan ribu yuan.",
  ),
  paragraph(
    "Lengkapi paragraf tentang hadiah ulang tahun ibu berikut!",
    [
      "今天是我妈妈的生日，我给她买了一个.......。它是红色的，可以放书和手机。它不.......，只要一百块。妈妈说它.......好看了！你给你妈妈买的礼物.......？",
    ],
    [
      { id: 1, answer: "包", extras: ["车", "衣服"] },
      { id: 2, answer: "贵", extras: ["耳机", "手表"] },
      { id: 3, answer: "太", extras: ["怎么样", "手表"] },
      { id: 4, answer: "怎么样", extras: ["太", "很"] },
    ],
    "Jīntiān shì wǒ māma de shēngrì, wǒ gěi tā mǎi le yí ge ....... . Tā shì hóngsè de, kěyǐ fàng shū hé shǒujī. Tā bú ....... , zhǐ yào yì bǎi kuài. Māma shuō tā ....... hǎokàn le! Nǐ gěi nǐ māma mǎi de lǐwù ....... ?",
    "Hari ini ulang tahun ibuku, saya membelikannya sebuah tas. Tasnya berwarna merah, bisa memuat buku dan ponsel. Tasnya tidak mahal, hanya seratus yuan. Ibu bilang tas itu bagus sekali! Bagaimana hadiah yang kamu belikan untuk ibumu?",
  ),
  paragraph(
    "Lengkapi paragraf tentang earphone teman sekelas berikut!",
    [
      "我的同学小马每天听音乐的时候都戴一个黑色的.......。大家都说它很酷。它不.......，只要一百块。它也.......重，只有二十克。你的耳机.......？",
    ],
    [
      { id: 1, answer: "耳机", extras: ["衣服", "车"] },
      { id: 2, answer: "贵", extras: ["手机", "手表"] },
      { id: 3, answer: "不", extras: ["手机", "怎么样"] },
      { id: 4, answer: "怎么样", extras: ["太", "很"] },
    ],
    "Wǒ de tóngxué Xiǎo Mǎ měi tiān tīng yīnyuè de shíhou dōu dài yí ge hēisè de ....... . Dàjiā dōu shuō tā hěn kù. Tā bú ....... , zhǐ yào yì bǎi kuài. Tā yě ....... zhòng, zhǐ yǒu èrshí kè. Nǐ de ěrjī ....... ?",
    "Teman sekelasku Xiao Ma setiap kali mendengarkan musik memakai sebuah earphone berwarna hitam. Semua orang bilang earphone itu keren. Earphone itu tidak mahal, hanya seratus yuan. Earphone itu juga tidak berat, hanya dua puluh gram. Bagaimana earphone-mu?",
  ),
  paragraph(
    "Lengkapi percakapan membeli jam tangan berikut!",
    [
      "A：你好，我想买一个.......，我要看时间。B：这个.......？它很酷。A：它贵不.......？B：不贵，很.......。只要两百块。",
    ],
    [
      { id: 1, answer: "手表", extras: ["衣服", "耳机"] },
      { id: 2, answer: "怎么样", extras: ["太", "很"] },
      { id: 3, answer: "贵", extras: ["手机", "手表"] },
      { id: 4, answer: "便宜", extras: ["手机", "太"] },
    ],
    "A: Nǐ hǎo, wǒ xiǎng mǎi yí ge ....... , wǒ yào kàn shíjiān. B: Zhège ....... ? Tā hěn kù. A: Tā guì bu ....... ? B: Bú guì, hěn ....... . Zhǐ yào liǎng bǎi kuài.",
    "A: Halo, saya ingin membeli sebuah jam tangan, saya perlu melihat waktu. B: Yang ini bagaimana? Jam ini keren. A: Apakah mahal? B: Tidak mahal, sangat murah. Hanya dua ratus yuan.",
  ),
  paragraph(
    "Lengkapi paragraf tentang tas yang berat berikut!",
    [
      "我的包很.......，里面有电脑和很多书。我朋友的包很轻，里面只有一件.......。我的包太重.......，我拿不动。你的包.......？我觉得我朋友的包不太大，但是很好看。",
    ],
    [
      { id: 1, answer: "重", extras: ["手机", "耳机"] },
      { id: 2, answer: "衣服", extras: ["车", "手表"] },
      { id: 3, answer: "了", extras: ["很", "不"] },
      { id: 4, answer: "怎么样", extras: ["太", "很"] },
    ],
    "Wǒ de bāo hěn ....... , lǐmiàn yǒu diànnǎo hé hěn duō shū. Wǒ péngyou de bāo hěn qīng, lǐmiàn zhǐ yǒu yí jiàn ....... . Wǒ de bāo tài zhòng ....... , wǒ ná bu dòng. Nǐ de bāo ....... ? Wǒ juéde wǒ péngyou de bāo bú tài dà, dànshì hěn hǎokàn.",
    "Tasku berat sekali, di dalamnya ada laptop dan banyak buku. Tas temanku ringan, di dalamnya hanya ada sepotong baju. Tasku terlalu berat, saya tidak kuat membawanya. Bagaimana tasmu? Menurutku tas temanku tidak terlalu besar, tetapi bagus.",
  ),
  paragraph(
    "Lengkapi percakapan tentang mobil berikut!",
    [
      "A：你有.......吗？B：有，我有一辆小车。A：它酷不.......？B：很酷，我很喜欢它。A：它贵不贵？B：太贵.......，要三十万。A：那它.......？B：很好开。",
    ],
    [
      { id: 1, answer: "车", extras: ["手表", "耳机"] },
      { id: 2, answer: "酷", extras: ["手机", "耳机"] },
      { id: 3, answer: "了", extras: ["很", "不"] },
      { id: 4, answer: "怎么样", extras: ["太", "很"] },
    ],
    "A: Nǐ yǒu ....... ma? B: Yǒu, wǒ yǒu yí liàng xiǎo chē. A: Tā kù bu ....... ? B: Hěn kù, wǒ hěn xǐhuan tā. A: Tā guì bu guì? B: Tài guì ....... , yào sānshí wàn. A: Nà tā ....... ? B: Hěn hǎo kāi.",
    "A: Apakah kamu punya mobil? B: Punya, saya punya sebuah mobil kecil. A: Apakah mobilnya keren? B: Sangat keren, saya sangat menyukainya. A: Mahal atau tidak? B: Terlalu mahal, tiga ratus ribu yuan. A: Lalu bagaimana mobilnya? B: Sangat enak dikendarai.",
  ),
  paragraph(
    "Lengkapi paragraf tentang belanja baju lewat internet berikut!",
    [
      "我喜欢在网上买东西。上星期我买了一件蓝色的.......，大家都说它很好看。它不.......，只要三十块。我朋友说这件衣服太酷.......！你觉得在网上买东西.......？",
    ],
    [
      { id: 1, answer: "衣服", extras: ["手机", "耳机"] },
      { id: 2, answer: "贵", extras: ["手机", "手表"] },
      { id: 3, answer: "了", extras: ["很", "不"] },
      { id: 4, answer: "怎么样", extras: ["太", "很"] },
    ],
    "Wǒ xǐhuan zài wǎngshàng mǎi dōngxi. Shàng xīngqī wǒ mǎi le yí jiàn lánsè de ....... , dàjiā dōu shuō tā hěn hǎokàn. Tā bú ....... , zhǐ yào sānshí kuài. Wǒ péngyou shuō zhè jiàn yīfu tài kù ....... ! Nǐ juéde zài wǎngshàng mǎi dōngxi ....... ?",
    "Saya suka berbelanja lewat internet. Minggu lalu saya membeli sebuah baju berwarna biru, semua orang bilang bajunya bagus. Bajunya tidak mahal, hanya tiga puluh yuan. Temanku bilang baju ini keren sekali! Menurutmu berbelanja lewat internet bagaimana?",
  ),
  paragraph(
    "Lengkapi paragraf tentang ponsel kakek berikut!",
    [
      "我爷爷今年七十岁，他说手机太.......了，他看不到。他喜欢大的，大的手机.......贵，但是他喜欢。他.......喜欢小的，因为小的不好看。你爷爷的手机.......？我爱我的爷爷。",
    ],
    [
      { id: 1, answer: "小", extras: ["手机", "耳机"] },
      { id: 2, answer: "很", extras: ["怎么样", "手机"] },
      { id: 3, answer: "不", extras: ["手机", "怎么样"] },
      { id: 4, answer: "怎么样", extras: ["太", "很"] },
    ],
    "Wǒ yéye jīnnián qīshí suì, tā shuō shǒujī tài ....... le, tā kàn bu dào. Tā xǐhuan dà de, dà de shǒujī ....... guì, dànshì tā xǐhuan. Tā ....... xǐhuan xiǎo de, yīnwèi xiǎo de bù hǎokàn. Nǐ yéye de shǒujī ....... ? Wǒ ài wǒ de yéye.",
    "Kakekku tahun ini berusia tujuh puluh tahun, dia bilang ponsel terlalu kecil, dia tidak bisa melihatnya. Dia suka yang besar, ponsel yang besar mahal, tetapi dia menyukainya. Dia tidak suka yang kecil, karena yang kecil tidak bagus. Bagaimana ponsel kakekmu? Saya menyayangi kakekku.",
  ),
  paragraph(
    "Lengkapi percakapan di toko ponsel berikut!",
    [
      "A：你好，我想买一个.......，可以打电话的。B：这个很.......，也很轻。A：它.......贵了，我只有一千块。B：那这个.......？它很便宜。",
    ],
    [
      { id: 1, answer: "手机", extras: ["衣服", "车"] },
      { id: 2, answer: "酷", extras: ["手机", "耳机"] },
      { id: 3, answer: "太", extras: ["怎么样", "耳机"] },
      { id: 4, answer: "怎么样", extras: ["很", "太"] },
    ],
    "A: Nǐ hǎo, wǒ xiǎng mǎi yí ge ....... , kěyǐ dǎ diànhuà de. B: Zhège hěn ....... , yě hěn qīng. A: Tā ....... guì le, wǒ zhǐ yǒu yì qiān kuài. B: Nà zhège ....... ? Tā hěn piányi.",
    "A: Halo, saya ingin membeli ponsel, yang bisa dipakai untuk menelepon. B: Yang ini keren, juga ringan. A: Terlalu mahal, saya hanya punya seribu yuan. B: Kalau yang ini bagaimana? Harganya sangat murah.",
  ),
  paragraph(
    "Lengkapi paragraf tentang jam tangan pacar berikut!",
    [
      "我男朋友有三个.......，他每天用它们看时间。第一个是黑色的，.......酷。第二个很小，也很.......，所以他每天戴它。第三个太大.......，他不戴。你的男朋友有几个？",
    ],
    [
      { id: 1, answer: "手表", extras: ["车", "衣服"] },
      { id: 2, answer: "很", extras: ["怎么样", "了"] },
      { id: 3, answer: "轻", extras: ["手机", "手表"] },
      { id: 4, answer: "了", extras: ["很", "不"] },
    ],
    "Wǒ nánpéngyou yǒu sān ge ....... , tā měi tiān yòng tāmen kàn shíjiān. Dì yī ge shì hēisè de, ....... kù. Dì èr ge hěn xiǎo, yě hěn ....... , suǒyǐ tā měi tiān dài tā. Dì sān ge tài dà ....... , tā bú dài. Nǐ de nánpéngyou yǒu jǐ ge?",
    "Pacar laki-lakiku punya tiga jam tangan, setiap hari dia memakainya untuk melihat waktu. Yang pertama berwarna hitam, keren. Yang kedua kecil, juga ringan, jadi setiap hari dia memakainya. Yang ketiga terlalu besar, dia tidak memakainya. Berapa jam tangan yang dimiliki pacarmu?",
  ),
  paragraph(
    "Lengkapi paragraf tentang kantor berikut!",
    [
      "我在公司工作。我的同事有一台新.......，它很大，但是不.......，只有一公斤。老板的车很酷，我的同事说它太贵.......。你们公司的车.......？我们都爱坐老板的车。",
    ],
    [
      { id: 1, answer: "电脑", extras: ["衣服", "包"] },
      { id: 2, answer: "重", extras: ["手机", "手表"] },
      { id: 3, answer: "了", extras: ["很", "不"] },
      { id: 4, answer: "怎么样", extras: ["太", "很"] },
    ],
    "Wǒ zài gōngsī gōngzuò. Wǒ de tóngshì yǒu yì tái xīn ....... , tā hěn dà, dànshì bú ....... , zhǐ yǒu yì gōngjīn. Lǎobǎn de chē hěn kù, wǒ de tóngshì shuō tā tài guì ....... . Nǐmen gōngsī de chē ....... ? Wǒmen dōu ài zuò lǎobǎn de chē.",
    "Saya bekerja di perusahaan. Rekan kerjaku punya sebuah laptop baru, besar tetapi tidak berat, hanya satu kilogram. Mobil bos sangat keren, rekan kerjaku bilang mobil itu terlalu mahal. Bagaimana mobil perusahaan kalian? Kami semua suka naik mobil bos.",
  ),
  paragraph(
    "Lengkapi paragraf tentang tas mahasiswa berikut!",
    [
      "我是大学生，我有一个黑色的.......，里面有电脑、书和手机。它不.......，很轻。我的朋友说它很.......。你的包.......？我每天都带它。",
    ],
    [
      { id: 1, answer: "包", extras: ["车", "手表"] },
      { id: 2, answer: "重", extras: ["手机", "手表"] },
      { id: 3, answer: "酷", extras: ["手机", "耳机"] },
      { id: 4, answer: "怎么样", extras: ["太", "很"] },
    ],
    "Wǒ shì dàxuéshēng, wǒ yǒu yí ge hēisè de ....... , lǐmiàn yǒu diànnǎo, shū hé shǒujī. Tā bú ....... , hěn qīng. Wǒ de péngyou shuō tā hěn ....... . Nǐ de bāo ....... ? Wǒ měi tiān dōu dài tā.",
    "Saya mahasiswa, saya punya sebuah tas berwarna hitam, di dalamnya ada laptop, buku, dan ponsel. Tasnya tidak berat, sangat ringan. Temanku bilang tasnya keren. Bagaimana tasmu? Setiap hari saya membawanya.",
  ),
  paragraph(
    "Lengkapi percakapan membeli baju berikut!",
    [
      "A：你好，这件衣服.......？B：很好看，也不.......。A：它太.......了，我穿不了。B：那件大的呢？A：大的.......贵，要三百块。",
    ],
    [
      { id: 1, answer: "怎么样", extras: ["很", "太"] },
      { id: 2, answer: "贵", extras: ["手机", "手表"] },
      { id: 3, answer: "小", extras: ["手机", "怎么样"] },
      { id: 4, answer: "很", extras: ["怎么样", "了"] },
    ],
    "A: Nǐ hǎo, zhè jiàn yīfu ....... ? B: Hěn hǎokàn, yě bú ....... . A: Tā tài ....... le, wǒ chuān bu liǎo. B: Nà jiàn dà de ne? A: Dà de ....... guì, yào sānbǎi kuài.",
    "A: Halo, baju ini bagaimana? B: Sangat bagus, juga tidak mahal. A: Terlalu kecil, saya tidak bisa memakainya. B: Bagaimana yang besar? A: Yang besar mahal, tiga ratus yuan.",
  ),
  paragraph(
    "Lengkapi paragraf tentang barang-barang yang berat berikut!",
    [
      "我的手机很轻，我的电脑很.......。我每天带电脑去学校，所以我的包太重.......。我朋友的包很轻，里面只有一个.......，因为他喜欢听音乐。我想买一个新包，你觉得这个包.......？我们周末去商场吧。",
    ],
    [
      { id: 1, answer: "重", extras: ["手机", "手表"] },
      { id: 2, answer: "了", extras: ["很", "不"] },
      { id: 3, answer: "耳机", extras: ["车", "衣服"] },
      { id: 4, answer: "怎么样", extras: ["太", "很"] },
    ],
    "Wǒ de shǒujī hěn qīng, wǒ de diànnǎo hěn ....... . Wǒ měi tiān dài diànnǎo qù xuéxiào, suǒyǐ wǒ de bāo tài zhòng ....... . Wǒ péngyou de bāo hěn qīng, lǐmiàn zhǐ yǒu yí ge ....... , yīnwèi tā xǐhuan tīng yīnyuè. Wǒ xiǎng mǎi yí ge xīn bāo, nǐ juéde zhège bāo ....... ? Wǒmen zhōumò qù shāngchǎng ba.",
    "Ponselku ringan, laptopku berat. Setiap hari saya membawa laptop ke sekolah, jadi tasku terlalu berat. Tas temanku ringan, di dalamnya hanya ada sebuah earphone, karena dia suka mendengarkan musik. Saya ingin membeli tas baru, menurutmu tas ini bagaimana? Akhir pekan ini mari kita pergi ke mal.",
  ),
  paragraph(
    "Lengkapi paragraf tentang memilih ponsel berikut!",
    [
      "我想买一个新手机。这个手机太贵.......，我不买。那个手机不.......，也很好看，只要一千块。我想买那个，你觉得那个.......？我的朋友说那个手机很.......，他也有一个。",
    ],
    [
      { id: 1, answer: "了", extras: ["很", "不"] },
      { id: 2, answer: "贵", extras: ["手机", "手表"] },
      { id: 3, answer: "怎么样", extras: ["太", "很"] },
      { id: 4, answer: "酷", extras: ["手机", "手表"] },
    ],
    "Wǒ xiǎng mǎi yí ge xīn shǒujī. Zhège shǒujī tài guì ....... , wǒ bù mǎi. Nàge shǒujī bú ....... , yě hěn hǎokàn, zhǐ yào yì qiān kuài. Wǒ xiǎng mǎi nàge, nǐ juéde nàge ....... ? Wǒ de péngyou shuō nàge shǒujī hěn ....... , tā yě yǒu yí ge.",
    "Saya ingin membeli ponsel baru. Ponsel ini terlalu mahal, saya tidak membelinya. Ponsel yang itu tidak mahal, juga bagus, hanya seribu yuan. Saya ingin membeli yang itu, menurutmu yang itu bagaimana? Temanku bilang ponsel itu keren, dia juga punya satu.",
  ),
  paragraph(
    "Lengkapi percakapan tentang earphone berikut!",
    [
      "A：你的耳机真好看！B：谢谢，它.......酷，也很轻。A：它贵不贵？B：不.......，只要两百块。A：我的耳机太重.......，我也想买一个。这个耳机.......？B：很好用！",
    ],
    [
      { id: 1, answer: "很", extras: ["怎么样", "手机"] },
      { id: 2, answer: "贵", extras: ["手机", "手表"] },
      { id: 3, answer: "了", extras: ["很", "不"] },
      { id: 4, answer: "怎么样", extras: ["太", "很"] },
    ],
    "A: Nǐ de ěrjī zhēn hǎokàn! B: Xièxie, tā ....... kù, yě hěn qīng. A: Tā guì bu guì? B: Bú ....... , zhǐ yào liǎng bǎi kuài. A: Wǒ de ěrjī tài zhòng ....... , wǒ yě xiǎng mǎi yí ge. Zhège ěrjī ....... ? B: Hěn hǎo yòng!",
    "A: Earphone-mu bagus sekali! B: Terima kasih, earphone ini keren, juga ringan. A: Mahal atau tidak? B: Tidak mahal, hanya dua ratus yuan. A: Earphone-ku terlalu berat, saya juga ingin membeli satu. Earphone ini bagaimana? B: Sangat enak dipakai!",
  ),
  paragraph(
    "Lengkapi paragraf tentang mobil teman berikut!",
    [
      "我朋友很有钱，他有一辆很酷的.......。车是黑色的，.......大，也很好看。他说他的车太.......了，不好停。你的朋友有车吗？你的车.......？",
    ],
    [
      { id: 1, answer: "车", extras: ["手表", "包"] },
      { id: 2, answer: "很", extras: ["怎么样", "了"] },
      { id: 3, answer: "大", extras: ["手机", "耳机"] },
      { id: 4, answer: "怎么样", extras: ["太", "很"] },
    ],
    "Wǒ péngyou hěn yǒu qián, tā yǒu yí liàng hěn kù de ....... . Chē shì hēisè de, ....... dà, yě hěn hǎokàn. Tā shuō tā de chē tài ....... le, bù hǎo tíng. Nǐ de péngyou yǒu chē ma? Nǐ de chē ....... ?",
    "Temanku sangat kaya, dia punya sebuah mobil yang keren. Mobilnya berwarna hitam, besar, juga bagus. Dia bilang mobilnya terlalu besar, sulit diparkir. Apakah temanmu punya mobil? Bagaimana mobilmu?",
  ),
  paragraph(
    "Lengkapi percakapan ibu dan anak tentang ponsel berikut!",
    [
      "A：妈妈，我想买一个新手机。B：你的手机.......？A：它.......小了，我想要大的。B：大的很.......，你不喜欢。A：我喜欢，大的很.......。",
    ],
    [
      { id: 1, answer: "怎么样", extras: ["很", "太"] },
      { id: 2, answer: "太", extras: ["怎么样", "耳机"] },
      { id: 3, answer: "重", extras: ["手机", "手表"] },
      { id: 4, answer: "酷", extras: ["手机", "耳机"] },
    ],
    "A: Māma, wǒ xiǎng mǎi yí ge xīn shǒujī. B: Nǐ de shǒujī ....... ? A: Tā ....... xiǎo le, wǒ xiǎng yào dà de. B: Dà de hěn ....... , nǐ bù xǐhuan. A: Wǒ xǐhuan, dà de hěn ....... .",
    "A: Ibu, saya ingin membeli ponsel baru. B: Bagaimana ponselmu yang sekarang? A: Terlalu kecil, saya ingin yang besar. B: Yang besar berat, kamu tidak suka. A: Saya suka, yang besar itu keren.",
  ),
  paragraph(
    "Lengkapi paragraf tentang belanja di mal berikut!",
    [
      "我今天去商场买东西。我买了一件.......，它很好看，也不贵。我还买了一个.......，听音乐的时候我每天都戴它。朋友说我买的东西都很.......，我很高兴。你觉得这个商场.......？",
    ],
    [
      { id: 1, answer: "衣服", extras: ["手机", "车"] },
      { id: 2, answer: "耳机", extras: ["衣服", "车"] },
      { id: 3, answer: "酷", extras: ["衣服", "耳机"] },
      { id: 4, answer: "怎么样", extras: ["太", "很"] },
    ],
    "Wǒ jīntiān qù shāngchǎng mǎi dōngxi. Wǒ mǎi le yí jiàn ....... , tā hěn hǎokàn, yě bú guì. Wǒ hái mǎi le yí ge ....... , tīng yīnyuè de shíhou wǒ měi tiān dōu dài tā. Péngyou shuō wǒ mǎi de dōngxi dōu hěn ....... , wǒ hěn gāoxìng. Nǐ juéde zhège shāngchǎng ....... ?",
    "Hari ini saya pergi ke mal untuk berbelanja. Saya membeli sepotong baju, bagus dan tidak mahal. Saya juga membeli sebuah earphone, saat mendengarkan musik saya memakainya setiap hari. Temanku bilang barang yang saya beli semuanya keren, saya sangat senang. Menurutmu mal ini bagaimana?",
  ),
  paragraph(
    "Lengkapi percakapan tentang laptop baru berikut!",
    [
      "A：你的电脑是新的吗？B：是的，我昨天买的。A：它大不.......？B：不大，也不.......，很轻。A：它.......？B：很好！A：我的电脑.......大了，我也想买小的。",
    ],
    [
      { id: 1, answer: "大", extras: ["手机", "手表"] },
      { id: 2, answer: "重", extras: ["手机", "手表"] },
      { id: 3, answer: "怎么样", extras: ["太", "很"] },
      { id: 4, answer: "太", extras: ["怎么样", "手机"] },
    ],
    "A: Nǐ de diànnǎo shì xīn de ma? B: Shì de, wǒ zuótiān mǎi de. A: Tā dà bu ....... ? B: Bú dà, yě bú ....... , hěn qīng. A: Tā ....... ? B: Hěn hǎo! A: Wǒ de diànnǎo ....... dà le, wǒ yě xiǎng mǎi xiǎo de.",
    "A: Apakah laptopmu baru? B: Ya, saya membelinya kemarin. A: Apakah besar? B: Tidak besar, juga tidak berat, sangat ringan. A: Bagaimana laptopnya? B: Sangat bagus! A: Laptopku terlalu besar, saya juga ingin membeli yang kecil.",
  ),
  paragraph(
    "Lengkapi paragraf tentang ponsel kakak beradik berikut!",
    [
      "我和姐姐都有手机。我的手机很.......，姐姐的手机很大。我的手机不贵，姐姐的手机太贵.......。我们都喜欢听音乐，所以我们都有.......。你的手机.......？",
    ],
    [
      { id: 1, answer: "小", extras: ["手机", "耳机"] },
      { id: 2, answer: "了", extras: ["很", "不"] },
      { id: 3, answer: "耳机", extras: ["手表", "包"] },
      { id: 4, answer: "怎么样", extras: ["太", "很"] },
    ],
    "Wǒ hé jiějie dōu yǒu shǒujī. Wǒ de shǒujī hěn ....... , jiějie de shǒujī hěn dà. Wǒ de shǒujī bú guì, jiějie de shǒujī tài guì ....... . Wǒmen dōu xǐhuan tīng yīnyuè, suǒyǐ wǒmen dōu yǒu ....... . Nǐ de shǒujī ....... ?",
    "Saya dan kakak perempuan sama-sama punya ponsel. Ponselku kecil, ponsel kakak besar. Ponselku tidak mahal, ponsel kakak terlalu mahal. Kami sama-sama suka mendengarkan musik, jadi kami berdua punya earphone. Bagaimana ponselmu?",
  ),
];

export const u10_lessons: Lesson[] = [
  {
    id: "u10_l1",
    title: "U10 L1",
    exercises: u10_sentences,
  },
  {
    id: "u10_l2",
    title: "U10 L2",
    exercises: u10_paragraphs,
  },
];
