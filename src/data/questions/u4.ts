import type { Lesson } from "@/data/course";
import { paragraph, sentence } from "@/data/questions/helpers";

const u4_sentences = [
  sentence("Saya di rumah.", ["我", "在", "家"], ["学校", "不", "你"]),
  sentence(
    "Rumah saya ada di sini.",
    [
      ["我", "家", "在", "这里"],
      ["我", "的", "家", "在", "这里"],
    ],
    ["那里", "学校", "不"],
  ),
  sentence(
    "Sekolah saya ada di sana.",
    ["我", "的", "学校", "在", "那里"],
    ["这里", "家", "不"],
  ),
  sentence(
    "Teman saya ada di rumah.",
    [
      ["我", "朋友", "在", "家"],
      ["我", "的", "朋友", "在", "家"],
    ],
    ["学校", "你", "不"],
  ),
  sentence(
    "Teman sekamar saya ada di luar.",
    [
      ["我", "室友", "在", "外边"],
      ["我", "的", "室友", "在", "外边"],
    ],
    ["里边", "同学", "吗"],
  ),
  sentence(
    "Pacar saya (perempuan) ada di rumah sakit.",
    [
      ["我", "女朋友", "在", "医院"],
      ["我", "的", "女朋友", "在", "医院"],
    ],
    ["男朋友", "学校", "不"],
  ),
  sentence(
    "Bos saya ada di dalam.",
    [
      ["我", "老板", "在", "里边"],
      ["我", "的", "老板", "在", "里边"],
    ],
    ["外边", "同事", "吗"],
  ),
  sentence(
    "Toilet ada di mana?",
    ["洗手间", "在", "哪里"],
    ["这里", "吗", "谁"],
  ),
  sentence("Mal ada di mana?", ["商场", "在", "哪里"], ["那里", "吗", "不"]),
  sentence(
    "Bioskop ada di depan.",
    ["电影院", "在", "前边"],
    ["后边", "商场", "吗"],
  ),
  sentence(
    "Restoran ada di belakang mal.",
    ["饭馆", "在", "商场", "后边"],
    ["前边", "咖啡厅", "不"],
  ),
  sentence(
    "Kafe ada di luar sekolah.",
    ["咖啡厅", "在", "学校", "外边"],
    ["里边", "饭馆", "有"],
  ),
  sentence(
    "Di dalam rumah ada teman saya.",
    [
      ["家", "里边", "有", "我", "朋友"],
      ["家", "里边", "有", "我", "的", "朋友"],
    ],
    ["没有", "外边", "吗"],
  ),
  sentence("Saya punya teman.", ["我", "有", "朋友"], ["没有", "你", "们"]),
  sentence(
    "Saya tidak punya pacar (perempuan).",
    ["我", "没有", "女朋友"],
    ["有", "男朋友", "不"],
  ),
  sentence(
    "Apakah kamu punya teman sekamar?",
    ["你", "有", "室友", "吗"],
    ["没有", "同事", "他"],
  ),
  sentence(
    "Di sini ada toilet.",
    ["这里", "有", "洗手间"],
    ["那里", "没有", "吗"],
  ),
  sentence(
    "Di sana tidak ada restoran.",
    ["那里", "没有", "饭馆"],
    ["这里", "有", "咖啡厅"],
  ),
  sentence(
    "Di dalam mal ada bioskop.",
    ["商场", "里边", "有", "电影院"],
    ["外边", "没有", "饭馆"],
  ),
  sentence(
    "Di rumah sakit ada dokter.",
    ["医院", "有", "医生"],
    ["学校", "没有", "老师"],
  ),
  sentence(
    "Ini rumah saya.",
    [
      ["这", "是", "我", "家"],
      ["这", "是", "我", "的", "家"],
    ],
    ["那", "学校", "不"],
  ),
  sentence(
    "Orang ini adalah teman saya.",
    [
      ["这", "个", "人", "是", "我", "朋友"],
      ["这", "个", "人", "是", "我", "的", "朋友"],
    ],
    ["那", "老板", "不"],
  ),
  sentence(
    "Siswa itu adalah teman sekamar saya.",
    [
      ["那", "个", "学生", "是", "我", "室友"],
      ["那", "个", "学生", "是", "我", "的", "室友"],
    ],
    ["这", "同学", "不"],
  ),
  sentence(
    "Guru itu adalah teman saya.",
    [
      ["那", "个", "老师", "是", "我", "朋友"],
      ["那", "个", "老师", "是", "我", "的", "朋友"],
    ],
    ["这", "医生", "吗"],
  ),
  sentence("Saya suka kopi.", ["我", "喜欢", "咖啡"], ["茶", "不", "你"]),
  sentence(
    "Dia (perempuan) tidak suka teh.",
    ["她", "不", "喜欢", "茶"],
    ["他", "咖啡", "没有"],
  ),
  sentence(
    "Apakah kamu suka kue itu?",
    ["你", "喜欢", "那", "个", "蛋糕", "吗"],
    ["这", "面包", "不"],
  ),
  sentence(
    "Saya ingin berada di rumah.",
    ["我", "想", "在", "家"],
    ["喜欢", "学校", "不"],
  ),
  sentence(
    "Apakah teman kamu ada di sini?",
    [
      ["你", "朋友", "在", "这里", "吗"],
      ["你", "的", "朋友", "在", "这里", "吗"],
    ],
    ["那里", "有", "不"],
  ),
];

export const u4_lessons: Lesson[] = [
  {
    id: "u4_l1",
    title: "Menyapa",
    exercises: [
      paragraph(
        "Lengkapi paragraf tentang rumah dan sekolah berikut!",
        [
          "我叫小明，我的.......在学校后边。我很.......这个学校，因为学校里边.......咖啡厅，我爱喝咖啡。我妈妈不在学校，她在.......工作。",
        ],
        [
          { id: 1, answer: "家", extras: ["在", "有"] },
          { id: 2, answer: "喜欢", extras: ["在", "哪里"] },
          { id: 3, answer: "有", extras: ["在", "没有"] },
          { id: 4, answer: "医院", extras: ["喜欢", "在"] },
        ],
        "Wǒ jiào Xiǎomíng, wǒ de ....... zài xuéxiào hòubian. Wǒ hěn ....... zhège xuéxiào, yīnwèi xuéxiào lǐbian ....... kāfēitīng, wǒ ài hē kāfēi. Wǒ māma bú zài xuéxiào, tā zài ....... gōngzuò.",
        "Nama saya Xiaoming, rumahku ada di belakang sekolah. Saya sangat suka sekolah ini, karena di dalam sekolah ada kafe, saya gemar minum kopi. Ibuku tidak di sekolah, dia bekerja di rumah sakit.",
      ),
      paragraph(
        "Lengkapi paragraf tentang pergi ke mal berikut!",
        [
          "今天我和我朋友去商场。我们.......喝咖啡，所以去.......。它.......商场里边，不在外边。它里边.......洗手间，所以我们要去商场的洗手间。",
        ],
        [
          { id: 1, answer: "想", extras: ["在", "哪里"] },
          { id: 2, answer: "咖啡厅", extras: ["医院", "洗手间"] },
          { id: 3, answer: "在", extras: ["有", "喜欢"] },
          { id: 4, answer: "没有", extras: ["有", "在"] },
        ],
        "Jīntiān wǒ hé wǒ péngyou qù shāngchǎng. Wǒmen ....... hē kāfēi, suǒyǐ qù ....... . Tā ....... shāngchǎng lǐbian, bú zài wàibian. Tā lǐbian ....... xǐshǒujiān, suǒyǐ wǒmen yào qù shāngchǎng de xǐshǒujiān.",
        "Hari ini saya dan temanku pergi ke mal. Kami ingin minum kopi, jadi pergi ke kafe. Kafe itu ada di dalam mal, tidak di luar. Di dalam kafe itu tidak ada toilet, jadi kami harus pergi ke toilet mal.",
      ),
      paragraph(
        "Lengkapi percakapan menanyakan toilet berikut!",
        [
          "请问，洗手间在.......？我在商场里边，我找不到。服务员说：“商场后边是饭馆，饭馆里边.......洗手间，外边没有。洗手间在饭馆的.......。”我说：“谢谢！我.......去饭馆。”",
        ],
        [
          { id: 1, answer: "哪里", extras: ["有", "没有"] },
          { id: 2, answer: "有", extras: ["没有", "在"] },
          { id: 3, answer: "里边", extras: ["外边", "在"] },
          { id: 4, answer: "想", extras: ["有", "没有"] },
        ],
        "Qǐngwèn, xǐshǒujiān zài ....... ? Wǒ zài shāngchǎng lǐbian, wǒ zhǎo bú dào. Fúwùyuán shuō: “Shāngchǎng hòubian shì fànguǎn, fànguǎn lǐbian ....... xǐshǒujiān, wàibian méiyǒu. Xǐshǒujiān zài fànguǎn de ....... .” Wǒ shuō: “Xièxie! Wǒ ....... qù fànguǎn.”",
        "Permisi, di mana toiletnya? Saya di dalam mal, saya tidak bisa menemukannya. Pelayan berkata: “Di belakang mal ada restoran, di dalam restoran ada toilet, di luar tidak ada. Toilet ada di dalam restoran.” Saya berkata: “Terima kasih! Saya mau pergi ke restoran.”",
      ),
      paragraph(
        "Lengkapi paragraf tentang menonton film berikut!",
        [
          "周末我和我同学去商场看电影。商场里边有.......，它很大。我同学很.......看电影，我也喜欢。电影院里边.......咖啡厅，我们可以喝咖啡。看完电影，我们去.......吃饭。",
        ],
        [
          { id: 1, answer: "电影院", extras: ["医院", "洗手间"] },
          { id: 2, answer: "爱", extras: ["在", "有"] },
          { id: 3, answer: "有", extras: ["没有", "在"] },
          { id: 4, answer: "饭馆", extras: ["医院", "学校"] },
        ],
        "Zhōumò wǒ hé wǒ tóngxué qù shāngchǎng kàn diànyǐng. Shāngchǎng lǐbian yǒu ......., tā hěn dà. Wǒ tóngxué hěn ....... kàn diànyǐng, wǒ yě xǐhuan. Diànyǐngyuàn lǐbian ....... kāfēitīng, wǒmen kěyǐ hē kāfēi. Kàn wán diànyǐng, wǒmen qù ....... chī fàn.",
        "Akhir pekan saya dan teman sekelas pergi ke mal untuk menonton film. Di dalam mal ada bioskop, bioskopnya besar. Teman sekelasku sangat gemar menonton film, saya juga suka. Di dalam bioskop ada kafe, kami bisa minum kopi. Setelah selesai menonton film, kami pergi makan di restoran.",
      ),
      paragraph(
        "Lengkapi paragraf tentang letak tempat berikut!",
        [
          "我家前边是学校，学校前边是商场。所以商场在学校的.......，我家在学校的.......。学校里边.......咖啡厅，我很喜欢。但是学校里边.......电影院，我想去商场看电影。",
        ],
        [
          { id: 1, answer: "前边", extras: ["后边", "里边"] },
          { id: 2, answer: "后边", extras: ["前边", "外边"] },
          { id: 3, answer: "有", extras: ["没有", "在"] },
          { id: 4, answer: "没有", extras: ["有", "在"] },
        ],
        "Wǒ jiā qiánbian shì xuéxiào, xuéxiào qiánbian shì shāngchǎng. Suǒyǐ shāngchǎng zài xuéxiào de ......., wǒ jiā zài xuéxiào de ....... . Xuéxiào lǐbian ....... kāfēitīng, wǒ hěn xǐhuan. Dànshì xuéxiào lǐbian ....... diànyǐngyuàn, wǒ xiǎng qù shāngchǎng kàn diànyǐng.",
        "Di depan rumahku ada sekolah, di depan sekolah ada mal. Jadi mal ada di depan sekolah, rumahku ada di belakang sekolah. Di dalam sekolah ada kafe, saya sangat suka. Tetapi di dalam sekolah tidak ada bioskop, saya ingin pergi ke mal untuk menonton film.",
      ),
      paragraph(
        "Lengkapi paragraf tentang ibu yang bekerja di rumah sakit berikut!",
        [
          "我妈妈是医生，她在.......工作。我家.......医院前边，不在后边。我妈妈.......我爸爸，我爸爸也爱她。学校前边是医院，所以学校在医院的.......，我爸爸在那里工作。",
        ],
        [
          { id: 1, answer: "医院", extras: ["洗手间", "电影院"] },
          { id: 2, answer: "在", extras: ["有", "没有"] },
          { id: 3, answer: "爱", extras: ["在", "有"] },
          { id: 4, answer: "后边", extras: ["前边", "里边"] },
        ],
        "Wǒ māma shì yīshēng, tā zài ....... gōngzuò. Wǒ jiā ....... yīyuàn qiánbian, bú zài hòubian. Wǒ māma ....... wǒ bàba, wǒ bàba yě ài tā. Xuéxiào qiánbian shì yīyuàn, suǒyǐ xuéxiào zài yīyuàn de ......., wǒ bàba zài nàlǐ gōngzuò.",
        "Ibuku dokter, dia bekerja di rumah sakit. Rumahku ada di depan rumah sakit, tidak di belakang. Ibuku mencintai ayahku, ayahku juga mencintainya. Di depan sekolah ada rumah sakit, jadi sekolah ada di belakang rumah sakit, ayahku bekerja di sana.",
      ),
      paragraph(
        "Lengkapi paragraf tentang keluarga berikut!",
        [
          "我家有四个人。我爸爸在医院工作，我妈妈在学校工作。我弟弟不.......学校，他不去外边，在.......学习。他很.......在家，我家里边.......咖啡，他爱喝咖啡。",
        ],
        [
          { id: 1, answer: "在", extras: ["有", "喜欢"] },
          { id: 2, answer: "家", extras: ["饭馆", "商场"] },
          { id: 3, answer: "喜欢", extras: ["在", "哪里"] },
          { id: 4, answer: "有", extras: ["没有", "在"] },
        ],
        "Wǒ jiā yǒu sì ge rén. Wǒ bàba zài yīyuàn gōngzuò, wǒ māma zài xuéxiào gōngzuò. Wǒ dìdi bú ....... xuéxiào, tā bú qù wàibian, zài ....... xuéxí. Tā hěn ....... zài jiā, wǒ jiā lǐbian ....... kāfēi, tā ài hē kāfēi.",
        "Keluargaku ada empat orang. Ayahku bekerja di rumah sakit, ibuku bekerja di sekolah. Adikku tidak di sekolah, dia tidak pergi ke luar, dia belajar di rumah. Dia sangat suka berada di rumah, di dalam rumahku ada kopi, dia gemar minum kopi.",
      ),
      paragraph(
        "Lengkapi paragraf tentang dua mal berikut!",
        [
          "我和我同学在商场外边。这个商场很大，.......个商场很小。大商场里边有电影院，小商场里边.......电影院。大商场在前边，小商场在.......。我们.......去大商场看电影。",
        ],
        [
          { id: 1, answer: "那", extras: ["这", "在"] },
          { id: 2, answer: "没有", extras: ["有", "在"] },
          { id: 3, answer: "后边", extras: ["前边", "里边"] },
          { id: 4, answer: "想", extras: ["有", "没有"] },
        ],
        "Wǒ hé wǒ tóngxué zài shāngchǎng wàibian. Zhège shāngchǎng hěn dà, ....... ge shāngchǎng hěn xiǎo. Dà shāngchǎng lǐbian yǒu diànyǐngyuàn, xiǎo shāngchǎng lǐbian ....... diànyǐngyuàn. Dà shāngchǎng zài qiánbian, xiǎo shāngchǎng zài ....... . Wǒmen ....... qù dà shāngchǎng kàn diànyǐng.",
        "Saya dan teman sekelas berada di luar mal. Mal ini besar, mal itu kecil. Di dalam mal besar ada bioskop, di dalam mal kecil tidak ada bioskop. Mal besar ada di depan, mal kecil ada di belakang. Kami ingin pergi ke mal besar untuk menonton film.",
      ),
      paragraph(
        "Lengkapi paragraf tentang hari pertama di sekolah berikut!",
        [
          "今天是我在学校的第一天。我同学小红问我：“你家在.......？”我说：“我家在医院后边。”小红说：“我家也在医院后边！”我们.......做朋友。学校里边.......咖啡厅，我们.......一起去喝咖啡。",
        ],
        [
          { id: 1, answer: "哪里", extras: ["有", "喜欢"] },
          { id: 2, answer: "想", extras: ["有", "没有"] },
          { id: 3, answer: "有", extras: ["没有", "在"] },
          { id: 4, answer: "喜欢", extras: ["在", "有"] },
        ],
        "Jīntiān shì wǒ zài xuéxiào de dì yī tiān. Wǒ tóngxué Xiǎohóng wèn wǒ: “Nǐ jiā zài ....... ?” Wǒ shuō: “Wǒ jiā zài yīyuàn hòubian.” Xiǎohóng shuō: “Wǒ jiā yě zài yīyuàn hòubian!” Wǒmen ....... zuò péngyou. Xuéxiào lǐbian ....... kāfēitīng, wǒmen ....... yìqǐ qù hē kāfēi.",
        "Hari ini adalah hari pertamaku di sekolah. Teman sekelasku Xiaohong bertanya padaku: “Rumahmu di mana?” Saya berkata: “Rumahku di belakang rumah sakit.” Xiaohong berkata: “Rumahku juga di belakang rumah sakit!” Kami ingin berteman. Di dalam sekolah ada kafe, kami suka pergi minum kopi bersama.",
      ),
      paragraph(
        "Lengkapi paragraf tentang bertemu di kafe berikut!",
        [
          "今天我和我朋友在咖啡厅见面。咖啡厅里边人很多，我不喜欢，所以我在咖啡厅的.......等他。我朋友的家.......咖啡厅后边，他很快就到。我.......喝咖啡，他也爱喝。门口.......椅子，我们可以坐在那里。",
        ],
        [
          { id: 1, answer: "外边", extras: ["里边", "这里"] },
          { id: 2, answer: "在", extras: ["有", "没有"] },
          { id: 3, answer: "爱", extras: ["在", "哪里"] },
          { id: 4, answer: "有", extras: ["没有", "在"] },
        ],
        "Jīntiān wǒ hé wǒ péngyou zài kāfēitīng jiànmiàn. Kāfēitīng lǐbian rén hěn duō, wǒ bù xǐhuan, suǒyǐ wǒ zài kāfēitīng de ....... děng tā. Wǒ péngyou de jiā ....... kāfēitīng hòubian, tā hěn kuài jiù dào. Wǒ ....... hē kāfēi, tā yě ài hē. Ménkǒu ....... yǐzi, wǒmen kěyǐ zuò zài nàlǐ.",
        "Hari ini saya dan temanku bertemu di kafe. Di dalam kafe banyak orang, saya tidak suka, jadi saya menunggunya di luar kafe. Rumah temanku ada di belakang kafe, dia akan segera tiba. Saya gemar minum kopi, dia juga gemar. Di depan pintu ada kursi, kami bisa duduk di sana.",
      ),
      paragraph(
        "Lengkapi paragraf tentang akhir pekan di rumah berikut!",
        [
          "周末我不去学校，我在.......休息。我家附近.......电影院，所以我想去商场看电影。商场在.......，很远，我要坐车去。我很.......热，所以我不想走路。",
        ],
        [
          { id: 1, answer: "家", extras: ["饭馆", "学校"] },
          { id: 2, answer: "没有", extras: ["有", "在"] },
          { id: 3, answer: "那里", extras: ["这里", "里边"] },
          { id: 4, answer: "怕", extras: ["在", "有"] },
        ],
        "Zhōumò wǒ bú qù xuéxiào, wǒ zài ....... xiūxi. Wǒ jiā fùjìn ....... diànyǐngyuàn, suǒyǐ wǒ xiǎng qù shāngchǎng kàn diànyǐng. Shāngchǎng zài ......., hěn yuǎn, wǒ yào zuò chē qù. Wǒ hěn ....... rè, suǒyǐ wǒ bù xiǎng zǒulù.",
        "Akhir pekan saya tidak pergi ke sekolah, saya beristirahat di rumah. Di dekat rumahku tidak ada bioskop, jadi saya ingin pergi ke mal untuk menonton film. Mal ada di sana, jauh, saya harus naik kendaraan. Saya sangat takut panas, jadi saya tidak mau berjalan kaki.",
      ),
      paragraph(
        "Lengkapi paragraf tentang jalan menuju sekolah berikut!",
        [
          "我每天走路去学校。我家前边是医院，医院前边是饭馆，饭馆前边是学校。所以学校在饭馆的.......，医院在饭馆的后边。我很.......我的学校，学校里边.......咖啡厅，但是.......电影院，所以周末我去商场。",
        ],
        [
          { id: 1, answer: "前边", extras: ["后边", "里边"] },
          { id: 2, answer: "喜欢", extras: ["在", "哪里"] },
          { id: 3, answer: "有", extras: ["没有", "在"] },
          { id: 4, answer: "没有", extras: ["有", "在"] },
        ],
        "Wǒ měi tiān zǒulù qù xuéxiào. Wǒ jiā qiánbian shì yīyuàn, yīyuàn qiánbian shì fànguǎn, fànguǎn qiánbian shì xuéxiào. Suǒyǐ xuéxiào zài fànguǎn de ......., yīyuàn zài fànguǎn de hòubian. Wǒ hěn ....... wǒ de xuéxiào, xuéxiào lǐbian ....... kāfēitīng, dànshì ....... diànyǐngyuàn, suǒyǐ zhōumò wǒ qù shāngchǎng.",
        "Setiap hari saya berjalan kaki ke sekolah. Di depan rumahku ada rumah sakit, di depan rumah sakit ada restoran, di depan restoran ada sekolah. Jadi sekolah ada di depan restoran, rumah sakit ada di belakang restoran. Saya sangat suka sekolahku, di dalam sekolah ada kafe, tetapi tidak ada bioskop, jadi saat akhir pekan saya pergi ke mal.",
      ),
      paragraph(
        "Lengkapi paragraf tentang mal yang besar berikut!",
        [
          "这个商场很大。商场里边.......饭馆、咖啡厅和电影院，东西很多。我想去.......，它在咖啡厅后边。我朋友很.......来这里买东西。我家.......商场前边，所以我常来这里。",
        ],
        [
          { id: 1, answer: "有", extras: ["没有", "在"] },
          { id: 2, answer: "洗手间", extras: ["医院", "学校"] },
          { id: 3, answer: "爱", extras: ["在", "哪里"] },
          { id: 4, answer: "在", extras: ["有", "没有"] },
        ],
        "Zhège shāngchǎng hěn dà. Shāngchǎng lǐbian ....... fànguǎn, kāfēitīng hé diànyǐngyuàn, dōngxi hěn duō. Wǒ xiǎng qù ......., tā zài kāfēitīng hòubian. Wǒ péngyou hěn ....... lái zhèlǐ mǎi dōngxi. Wǒ jiā ....... shāngchǎng qiánbian, suǒyǐ wǒ cháng lái zhèlǐ.",
        "Mal ini sangat besar. Di dalam mal ada restoran, kafe, dan bioskop, barangnya banyak. Saya ingin pergi ke toilet, letaknya di belakang kafe. Temanku sangat gemar berbelanja di sini. Rumahku ada di depan mal, jadi saya sering datang ke sini.",
      ),
      paragraph(
        "Lengkapi paragraf tentang takut ke rumah sakit berikut!",
        [
          "我很.......医院，因为医院里边有很多医生。但是我妈妈是医生，她在.......工作，所以我很放心。我家.......医院前边，我每天去看她。医院里边.......咖啡厅，我可以在那里喝咖啡。",
        ],
        [
          { id: 1, answer: "怕", extras: ["在", "有"] },
          { id: 2, answer: "医院", extras: ["饭馆", "电影院"] },
          { id: 3, answer: "在", extras: ["有", "没有"] },
          { id: 4, answer: "有", extras: ["没有", "在"] },
        ],
        "Wǒ hěn ....... yīyuàn, yīnwèi yīyuàn lǐbian yǒu hěn duō yīshēng. Dànshì wǒ māma shì yīshēng, tā zài ....... gōngzuò, suǒyǐ wǒ hěn fàngxīn. Wǒ jiā ....... yīyuàn qiánbian, wǒ měi tiān qù kàn tā. Yīyuàn lǐbian ....... kāfēitīng, wǒ kěyǐ zài nàlǐ hē kāfēi.",
        "Saya sangat takut rumah sakit, karena di dalam rumah sakit ada banyak dokter. Tetapi ibuku dokter, dia bekerja di rumah sakit, jadi saya tenang. Rumahku ada di depan rumah sakit, setiap hari saya pergi menemuinya. Di dalam rumah sakit ada kafe, saya bisa minum kopi di sana.",
      ),
      paragraph(
        "Lengkapi paragraf tentang makan di restoran berikut!",
        [
          "今天我和我同学想去.......吃饭。它.......商场后边，不太远。我同学很.......吃面条，我也爱吃。门口.......椅子，我们可以坐着等。",
        ],
        [
          { id: 1, answer: "饭馆", extras: ["医院", "洗手间"] },
          { id: 2, answer: "在", extras: ["有", "喜欢"] },
          { id: 3, answer: "喜欢", extras: ["在", "哪里"] },
          { id: 4, answer: "有", extras: ["没有", "在"] },
        ],
        "Jīntiān wǒ hé wǒ tóngxué xiǎng qù ....... chī fàn. Tā ....... shāngchǎng hòubian, bú tài yuǎn. Wǒ tóngxué hěn ....... chī miàntiáo, wǒ yě ài chī. Ménkǒu ....... yǐzi, wǒmen kěyǐ zuòzhe děng.",
        "Hari ini saya dan teman sekelas ingin makan di restoran. Letaknya di belakang mal, tidak terlalu jauh. Teman sekelasku sangat suka makan mi, saya juga gemar. Di depan pintu ada kursi, kami bisa duduk menunggu.",
      ),
      paragraph(
        "Lengkapi percakapan menanyakan arah berikut!",
        [
          "A：请问，电影院在.......？B：电影院在商场的.......，不在商场外边。A：商场远吗？B：不远，商场.......学校前边，学校在医院后边。A：谢谢！我.......去看电影。",
        ],
        [
          { id: 1, answer: "哪里", extras: ["有", "没有"] },
          { id: 2, answer: "里边", extras: ["外边", "这里"] },
          { id: 3, answer: "在", extras: ["有", "没有"] },
          { id: 4, answer: "想", extras: ["有", "没有"] },
        ],
        "A: Qǐngwèn, diànyǐngyuàn zài ....... ? B: Diànyǐngyuàn zài shāngchǎng de ......., bú zài shāngchǎng wàibian. A: Shāngchǎng yuǎn ma? B: Bù yuǎn, shāngchǎng ....... xuéxiào qiánbian, xuéxiào zài yīyuàn hòubian. A: Xièxie! Wǒ ....... qù kàn diànyǐng.",
        "A: Permisi, di mana bioskopnya? B: Bioskop ada di dalam mal, tidak di luar mal. A: Apakah malnya jauh? B: Tidak jauh, mal ada di depan sekolah, sekolah ada di belakang rumah sakit. A: Terima kasih! Saya ingin pergi menonton film.",
      ),
      paragraph(
        "Lengkapi paragraf tentang nenek berikut!",
        [
          "我奶奶身体不好，她现在在.......。我妈妈和我爸爸也在那里。我很.......我奶奶，我每天都想去看她。我.......学校学习，所以我每天从学校去看她。医院在学校后边，所以学校在医院的.......。",
        ],
        [
          { id: 1, answer: "医院", extras: ["咖啡厅", "电影院"] },
          { id: 2, answer: "爱", extras: ["在", "有"] },
          { id: 3, answer: "在", extras: ["有", "没有"] },
          { id: 4, answer: "前边", extras: ["后边", "里边"] },
        ],
        "Wǒ nǎinai shēntǐ bù hǎo, tā xiànzài zài ....... . Wǒ māma hé wǒ bàba yě zài nàlǐ. Wǒ hěn ....... wǒ nǎinai, wǒ měi tiān dōu xiǎng qù kàn tā. Wǒ ....... xuéxiào xuéxí, suǒyǐ wǒ měi tiān cóng xuéxiào qù kàn tā. Yīyuàn zài xuéxiào hòubian, suǒyǐ xuéxiào zài yīyuàn de ....... .",
        "Nenekku sedang tidak sehat, sekarang dia ada di rumah sakit. Ibu dan ayahku juga ada di sana. Saya sangat menyayangi nenekku, setiap hari saya ingin menjenguknya. Saya belajar di sekolah, jadi setiap hari saya pergi dari sekolah untuk menjenguknya. Rumah sakit ada di belakang sekolah, jadi sekolah ada di depan rumah sakit.",
      ),
      paragraph(
        "Lengkapi paragraf tentang pergi ke bioskop dengan pacar berikut!",
        [
          "星期六我和我男朋友想去.......看电影。它在商场里边，商场前边是饭馆。我男朋友很.......看电影，我也喜欢。它里边.......咖啡厅，我们可以喝咖啡。但是它里边.......洗手间，所以我们要去商场的洗手间。",
        ],
        [
          { id: 1, answer: "电影院", extras: ["医院", "学校"] },
          { id: 2, answer: "爱", extras: ["在", "有"] },
          { id: 3, answer: "有", extras: ["没有", "在"] },
          { id: 4, answer: "没有", extras: ["有", "在"] },
        ],
        "Xīngqīliù wǒ hé wǒ nánpéngyou xiǎng qù ....... kàn diànyǐng. Tā zài shāngchǎng lǐbian, shāngchǎng qiánbian shì fànguǎn. Wǒ nánpéngyou hěn ....... kàn diànyǐng, wǒ yě xǐhuan. Tā lǐbian ....... kāfēitīng, wǒmen kěyǐ hē kāfēi. Dànshì tā lǐbian ....... xǐshǒujiān, suǒyǐ wǒmen yào qù shāngchǎng de xǐshǒujiān.",
        "Hari Sabtu saya dan pacar laki-lakiku ingin pergi ke bioskop untuk menonton film. Bioskop itu ada di dalam mal, di depan mal ada restoran. Pacar laki-lakiku sangat gemar menonton film, saya juga suka. Di dalamnya ada kafe, kami bisa minum kopi. Tetapi di dalamnya tidak ada toilet, jadi kami harus pergi ke toilet mal.",
      ),
      paragraph(
        "Lengkapi paragraf tentang mencintai rumah berikut!",
        [
          "我很爱我的.......，因为我爸爸、我妈妈和我都住在那里。它的前边是商场，后边是学校。所以商场在它的.......，学校在它的.......。它里边.......很多书，我喜欢在那里看书。",
        ],
        [
          { id: 1, answer: "家", extras: ["医院", "饭馆"] },
          { id: 2, answer: "前边", extras: ["后边", "里边"] },
          { id: 3, answer: "后边", extras: ["前边", "外边"] },
          { id: 4, answer: "有", extras: ["没有", "在"] },
        ],
        "Wǒ hěn ài wǒ de ......., yīnwèi wǒ bàba, wǒ māma hé wǒ dōu zhù zài nàlǐ. Tā de qiánbian shì shāngchǎng, hòubian shì xuéxiào. Suǒyǐ shāngchǎng zài tā de ......., xuéxiào zài tā de ....... . Tā lǐbian ....... hěn duō shū, wǒ xǐhuan zài nàlǐ kàn shū.",
        "Saya sangat mencintai rumahku, karena ayah, ibu, dan saya tinggal di sana. Di depannya ada mal, di belakangnya ada sekolah. Jadi mal ada di depannya, sekolah ada di belakangnya. Di dalamnya ada banyak buku, saya suka membaca di sana.",
      ),
      paragraph(
        "Lengkapi paragraf tentang teman yang bekerja di restoran berikut!",
        [
          "我同学小马在.......工作。它.......学校前边，我常去那里吃饭。它里边.......洗手间，外边没有，所以客人都在里边。小马很.......他老板，因为老板很好。",
        ],
        [
          { id: 1, answer: "饭馆", extras: ["医院", "洗手间"] },
          { id: 2, answer: "在", extras: ["有", "没有"] },
          { id: 3, answer: "有", extras: ["没有", "在"] },
          { id: 4, answer: "喜欢", extras: ["在", "有"] },
        ],
        "Wǒ tóngxué Xiǎo Mǎ zài ....... gōngzuò. Tā ....... xuéxiào qiánbian, wǒ cháng qù nàlǐ chī fàn. Tā lǐbian ....... xǐshǒujiān, wàibian méiyǒu, suǒyǐ kèrén dōu zài lǐbian. Xiǎo Mǎ hěn ....... tā lǎobǎn, yīnwèi lǎobǎn hěn hǎo.",
        "Teman sekelasku Xiao Ma bekerja di restoran. Restoran itu ada di depan sekolah, saya sering makan di sana. Di dalamnya ada toilet, di luar tidak ada, jadi para tamu semua di dalam. Xiao Ma sangat suka bosnya, karena bosnya sangat baik.",
      ),
      paragraph(
        "Lengkapi paragraf tentang menunggu di bioskop berikut!",
        [
          "我和我朋友想去看电影。电影院里边人很多，所以我们在电影院的.......等。门口.......椅子，我们可以坐在那里。我朋友很.......冷，所以他想去咖啡厅。咖啡厅前边是电影院，所以咖啡厅在电影院的.......。",
        ],
        [
          { id: 1, answer: "外边", extras: ["里边", "这里"] },
          { id: 2, answer: "有", extras: ["没有", "在"] },
          { id: 3, answer: "怕", extras: ["在", "有"] },
          { id: 4, answer: "后边", extras: ["前边", "里边"] },
        ],
        "Wǒ hé wǒ péngyou xiǎng qù kàn diànyǐng. Diànyǐngyuàn lǐbian rén hěn duō, suǒyǐ wǒmen zài diànyǐngyuàn de ....... děng. Ménkǒu ....... yǐzi, wǒmen kěyǐ zuò zài nàlǐ. Wǒ péngyou hěn ....... lěng, suǒyǐ tā xiǎng qù kāfēitīng. Kāfēitīng qiánbian shì diànyǐngyuàn, suǒyǐ kāfēitīng zài diànyǐngyuàn de ....... .",
        "Saya dan temanku ingin menonton film. Di dalam bioskop banyak orang, jadi kami menunggu di luar bioskop. Di depan pintu ada kursi, kami bisa duduk di sana. Temanku sangat takut dingin, jadi dia ingin pergi ke kafe. Di depan kafe ada bioskop, jadi kafe ada di belakang bioskop.",
      ),
      paragraph(
        "Lengkapi paragraf tentang dua kafe berikut!",
        [
          "我很.......喝咖啡，我常去咖啡厅。这个咖啡厅很小，.......个咖啡厅很大。大咖啡厅不在学校前边，在学校的.......。小咖啡厅里边.......洗手间，所以我朋友喜欢大咖啡厅。",
        ],
        [
          { id: 1, answer: "爱", extras: ["在", "有"] },
          { id: 2, answer: "那", extras: ["这", "在"] },
          { id: 3, answer: "后边", extras: ["前边", "哪里"] },
          { id: 4, answer: "没有", extras: ["有", "在"] },
        ],
        "Wǒ hěn ....... hē kāfēi, wǒ cháng qù kāfēitīng. Zhège kāfēitīng hěn xiǎo, ....... ge kāfēitīng hěn dà. Dà kāfēitīng bú zài xuéxiào qiánbian, zài xuéxiào de ....... . Xiǎo kāfēitīng lǐbian ....... xǐshǒujiān, suǒyǐ wǒ péngyou xǐhuan dà kāfēitīng.",
        "Saya sangat gemar minum kopi, saya sering pergi ke kafe. Kafe ini kecil, kafe itu besar. Kafe besar tidak ada di depan sekolah, tetapi di belakang sekolah. Di dalam kafe kecil tidak ada toilet, jadi temanku menyukai kafe besar.",
      ),
      paragraph(
        "Lengkapi paragraf tentang kota tempat tinggal berikut!",
        [
          "这是我住的城市。我的家在.......，学校在那里，学校离我家很远。我爸爸.......医院工作，医院在学校的前边，所以学校在医院的.......。我妈妈很.......我爸爸，我爸爸也爱她。",
        ],
        [
          { id: 1, answer: "这里", extras: ["那里", "里边"] },
          { id: 2, answer: "在", extras: ["有", "喜欢"] },
          { id: 3, answer: "后边", extras: ["前边", "里边"] },
          { id: 4, answer: "爱", extras: ["在", "有"] },
        ],
        "Zhè shì wǒ zhù de chéngshì. Wǒ de jiā zài ......., xuéxiào zài nàlǐ, xuéxiào lí wǒ jiā hěn yuǎn. Wǒ bàba ....... yīyuàn gōngzuò, yīyuàn zài xuéxiào de qiánbian, suǒyǐ xuéxiào zài yīyuàn de ....... . Wǒ māma hěn ....... wǒ bàba, wǒ bàba yě ài tā.",
        "Ini kota tempat tinggalku. Rumahku ada di sini, sekolah ada di sana, sekolah jauh dari rumahku. Ayahku bekerja di rumah sakit, rumah sakit ada di depan sekolah, jadi sekolah ada di belakang rumah sakit. Ibuku sangat mencintai ayahku, ayahku juga mencintainya.",
      ),
      paragraph(
        "Lengkapi percakapan tentang sekolah berikut!",
        [
          "A：你好！请问，你家在.......？B：我家在学校后边。你呢？A：我家在医院前边。B：你.......学校吗？A：我很.......学校，我朋友都在那里。B：学校里边.......咖啡厅，你想去吗？A：想！",
        ],
        [
          { id: 1, answer: "哪里", extras: ["有", "没有"] },
          { id: 2, answer: "喜欢", extras: ["在", "有"] },
          { id: 3, answer: "爱", extras: ["在", "哪里"] },
          { id: 4, answer: "有", extras: ["没有", "在"] },
        ],
        "A: Nǐ hǎo! Qǐngwèn, nǐ jiā zài ....... ? B: Wǒ jiā zài xuéxiào hòubian. Nǐ ne? A: Wǒ jiā zài yīyuàn qiánbian. B: Nǐ ....... xuéxiào ma? A: Wǒ hěn ....... xuéxiào, wǒ péngyou dōu zài nàlǐ. B: Xuéxiào lǐbian ....... kāfēitīng, nǐ xiǎng qù ma? A: Xiǎng!",
        "A: Halo! Permisi, rumahmu di mana? B: Rumahku di belakang sekolah. Kamu? A: Rumahku di depan rumah sakit. B: Apakah kamu suka sekolah? A: Saya sangat mencintai sekolah, teman-temanku semua ada di sana. B: Di dalam sekolah ada kafe, kamu mau pergi? A: Mau!",
      ),
      paragraph(
        "Lengkapi paragraf tentang berobat berikut!",
        [
          "今天我生病了，我去.......看医生。它很大，里边也有咖啡厅、饭馆和洗手间。我.......去洗手间，但是我不知道洗手间在.......。服务员说：“洗手间.......咖啡厅后边，很近。”",
        ],
        [
          { id: 1, answer: "医院", extras: ["饭馆", "电影院"] },
          { id: 2, answer: "想", extras: ["有", "没有"] },
          { id: 3, answer: "哪里", extras: ["有", "没有"] },
          { id: 4, answer: "在", extras: ["有", "没有"] },
        ],
        "Jīntiān wǒ shēngbìng le, wǒ qù ....... kàn yīshēng. Tā hěn dà, lǐbian yě yǒu kāfēitīng, fànguǎn hé xǐshǒujiān. Wǒ ....... qù xǐshǒujiān, dànshì wǒ bù zhīdào xǐshǒujiān zài ....... . Fúwùyuán shuō: “Xǐshǒujiān ....... kāfēitīng hòubian, hěn jìn.”",
        "Hari ini saya sakit, saya pergi ke rumah sakit untuk berobat. Rumah sakitnya besar, di dalamnya juga ada kafe, restoran, dan toilet. Saya ingin pergi ke toilet, tetapi saya tidak tahu toilet ada di mana. Pelayan berkata: “Toilet ada di belakang kafe, dekat.”",
      ),
      paragraph(
        "Lengkapi paragraf tentang jalan-jalan ke mal bersama keluarga berikut!",
        [
          "周末我们一家人去.......买东西。我妈妈很.......买东西，我爸爸不太喜欢。它里边.......饭馆，我们可以在那里吃饭。电影院前边是饭馆，所以电影院在饭馆的.......。",
        ],
        [
          { id: 1, answer: "商场", extras: ["医院", "洗手间"] },
          { id: 2, answer: "爱", extras: ["在", "有"] },
          { id: 3, answer: "有", extras: ["没有", "在"] },
          { id: 4, answer: "后边", extras: ["前边", "里边"] },
        ],
        "Zhōumò wǒmen yì jiā rén qù ....... mǎi dōngxi. Wǒ māma hěn ....... mǎi dōngxi, wǒ bàba bú tài xǐhuan. Tā lǐbian ....... fànguǎn, wǒmen kěyǐ zài nàlǐ chī fàn. Diànyǐngyuàn qiánbian shì fànguǎn, suǒyǐ diànyǐngyuàn zài fànguǎn de ....... .",
        "Akhir pekan kami sekeluarga pergi berbelanja ke mal. Ibuku sangat gemar berbelanja, ayahku kurang suka. Di dalamnya ada restoran, kami bisa makan di sana. Di depan bioskop ada restoran, jadi bioskop ada di belakang restoran.",
      ),
      paragraph(
        "Lengkapi paragraf tentang kafe di sekolah berikut!",
        [
          "我和我同学小红在一个学校。我们.......一起去咖啡厅，因为我们都爱喝咖啡。咖啡厅在学校.......，不在外边。咖啡厅里边.......洗手间，所以我们要去商场的洗手间。商场前边是学校，所以商场在学校的.......。",
        ],
        [
          { id: 1, answer: "想", extras: ["有", "没有"] },
          { id: 2, answer: "里边", extras: ["外边", "哪里"] },
          { id: 3, answer: "没有", extras: ["有", "在"] },
          { id: 4, answer: "后边", extras: ["前边", "里边"] },
        ],
        "Wǒ hé wǒ tóngxué Xiǎohóng zài yí ge xuéxiào. Wǒmen ....... yìqǐ qù kāfēitīng, yīnwèi wǒmen dōu ài hē kāfēi. Kāfēitīng zài xuéxiào ......., bú zài wàibian. Kāfēitīng lǐbian ....... xǐshǒujiān, suǒyǐ wǒmen yào qù shāngchǎng de xǐshǒujiān. Shāngchǎng qiánbian shì xuéxiào, suǒyǐ shāngchǎng zài xuéxiào de ....... .",
        "Saya dan teman sekelasku Xiaohong ada di sekolah yang sama. Kami ingin pergi ke kafe bersama, karena kami sama-sama gemar minum kopi. Kafe ada di dalam sekolah, tidak di luar. Di dalam kafe tidak ada toilet, jadi kami harus pergi ke toilet mal. Di depan mal ada sekolah, jadi mal ada di belakang sekolah.",
      ),
      paragraph(
        "Lengkapi paragraf tentang takut keluar rumah berikut!",
        [
          "我很.......外边，因为外边有很多狗。所以我常常在.......，里边很安全。我同学小红的家在学校后边，所以学校在小红家的.......。小红想来我家，但是我家里边.......咖啡，她爱喝咖啡。",
        ],
        [
          { id: 1, answer: "怕", extras: ["在", "有"] },
          { id: 2, answer: "家", extras: ["饭馆", "商场"] },
          { id: 3, answer: "前边", extras: ["后边", "里边"] },
          { id: 4, answer: "没有", extras: ["有", "在"] },
        ],
        "Wǒ hěn ....... wàibian, yīnwèi wàibian yǒu hěn duō gǒu. Suǒyǐ wǒ chángcháng zài ......., lǐbian hěn ānquán. Wǒ tóngxué Xiǎohóng de jiā zài xuéxiào hòubian, suǒyǐ xuéxiào zài Xiǎohóng jiā de ....... . Xiǎohóng xiǎng lái wǒ jiā, dànshì wǒ jiā lǐbian ....... kāfēi, tā ài hē kāfēi.",
        "Saya sangat takut ke luar, karena di luar ada banyak anjing. Jadi saya sering berada di rumah, di dalam sangat aman. Rumah teman sekelasku Xiaohong ada di belakang sekolah, jadi sekolah ada di depan rumah Xiaohong. Xiaohong ingin datang ke rumahku, tetapi di rumahku tidak ada kopi, padahal dia gemar minum kopi.",
      ),
      paragraph(
        "Lengkapi paragraf tentang mengenalkan sekolah berikut!",
        [
          "欢迎来到我们的学校！.......是我们的学校，学校很大。医院在那里，很近。学校里边有咖啡厅，还.......饭馆，东西很多。你想去.......？我想去.......，它在咖啡厅后边。",
        ],
        [
          { id: 1, answer: "这里", extras: ["那里", "后边"] },
          { id: 2, answer: "有", extras: ["没有", "在"] },
          { id: 3, answer: "哪里", extras: ["有", "没有"] },
          { id: 4, answer: "洗手间", extras: ["医院", "商场"] },
        ],
        "Huānyíng láidào wǒmen de xuéxiào! ....... shì wǒmen de xuéxiào, xuéxiào hěn dà. Yīyuàn zài nàlǐ, hěn jìn. Xuéxiào lǐbian yǒu kāfēitīng, hái ....... fànguǎn, dōngxi hěn duō. Nǐ xiǎng qù ....... ? Wǒ xiǎng qù ......., tā zài kāfēitīng hòubian.",
        "Selamat datang di sekolah kami! Di sini adalah sekolah kami, sekolahnya besar. Rumah sakit ada di sana, dekat. Di dalam sekolah ada kafe, juga ada restoran, barangnya banyak. Kamu ingin pergi ke mana? Saya ingin pergi ke toilet, letaknya di belakang kafe.",
      ),
      paragraph(
        "Lengkapi percakapan telepon berikut!",
        [
          "今天是星期天。我的朋友小英在咖啡厅，她给我打电话：“你在.......？你.......来咖啡厅吗？”我说：“我在.......，不想去外边。”小英说：“咖啡厅.......蛋糕，也有咖啡，你来吗？”我说：“好，我去！”",
        ],
        [
          { id: 1, answer: "哪里", extras: ["有", "没有"] },
          { id: 2, answer: "想", extras: ["有", "没有"] },
          { id: 3, answer: "家", extras: ["饭馆", "商场"] },
          { id: 4, answer: "有", extras: ["没有", "在"] },
        ],
        "Jīntiān shì xīngqītiān. Wǒ de péngyou Xiǎoyīng zài kāfēitīng, tā gěi wǒ dǎ diànhuà: “Nǐ zài ....... ? Nǐ ....... lái kāfēitīng ma?” Wǒ shuō: “Wǒ zài ......., bù xiǎng qù wàibian.” Xiǎoyīng shuō: “Kāfēitīng ....... dàngāo, yě yǒu kāfēi, nǐ lái ma?” Wǒ shuō: “Hǎo, wǒ qù!”",
        "Hari ini hari Minggu. Temanku Xiaoying ada di kafe, dia meneleponku: “Kamu di mana? Apakah kamu mau datang ke kafe?” Saya berkata: “Saya di rumah, tidak ingin pergi ke luar.” Xiaoying berkata: “Di kafe ada kue, juga ada kopi, kamu datang?” Saya berkata: “Baik, saya pergi!”",
      ),
    ],
  },
  {
    id: "u4_l2",
    title: "U4 L2",
    exercises: u4_sentences,
  },
];
