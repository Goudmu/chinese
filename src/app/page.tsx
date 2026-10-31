"use client";
import Link from "next/link";

function speak(text: string) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "zh-CN";
  u.rate = 0.8;
  speechSynthesis.speak(u);
}

const features = [
  {
    hanzi: "听",
    title: "Dengar",
    desc: "Latihan audio agar telinga terbiasa dengan nada dan pelafalan.",
  },
  {
    hanzi: "读",
    title: "Baca",
    desc: "Setiap hanzi tampil bersama pinyin dan artinya dalam bahasa Indonesia.",
  },
  {
    hanzi: "写",
    title: "Tulis",
    desc: "Ikuti urutan goresan, mulai dari karakter yang paling sederhana.",
  },
];

const cta =
  "inline-block rounded-2xl border-b-4 px-8 py-3.5 text-center text-base font-extrabold text-white transition-transform active:translate-y-0.5 active:border-b-2";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-5">
      <header className="flex items-center justify-between py-5">
        <div className="flex items-center gap-2">
          <span
            className="font-hanzi text-3xl font-black text-seal"
            aria-hidden
          >
            学
          </span>
          <span className="text-lg font-extrabold">Belajar Mandarin</span>
        </div>
        <Link
          href="/learn"
          className="text-sm font-bold text-jade-dark hover:underline"
        >
          Masuk
        </Link>
      </header>

      <main>
        {/* Hero */}
        <section className="grid items-center gap-12 py-12 md:grid-cols-2 md:py-20">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Belajar Mandarin, lima menit sehari.
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted">
              Pelajaran singkat berbentuk latihan. Kumpulkan XP dan kuasai hanzi
              sedikit demi sedikit.
            </p>
            <div className="mt-8">
              <Link href="/learn" className={`${cta} border-seal-dark bg-seal`}>
                Mulai belajar
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-xs -rotate-3 rounded-3xl border-b-8 border-seal-dark bg-seal p-8 text-center text-white">
              <p
                className="font-hanzi text-8xl font-black leading-none"
                lang="zh"
              >
                你好
              </p>
              <p className="mt-4 text-2xl">nǐ hǎo</p>
              <p className="mt-1 text-white/80">Halo</p>
              <button
                onClick={() => speak("你好")}
                className="mt-6 rounded-2xl bg-white px-5 py-2.5 font-extrabold text-seal-dark transition-transform active:translate-y-0.5"
              >
                🔊 Dengarkan
              </button>
            </div>
          </div>
        </section>

        {/* Fitur */}
        <section aria-labelledby="fitur" className="py-10">
          <h2 id="fitur" className="text-2xl font-extrabold">
            Tiga kebiasaan yang kita latih
          </h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {features.map((f) => (
              <li key={f.title} className="flex items-center gap-6 py-6">
                <span
                  className="font-hanzi w-20 text-center text-6xl font-black text-seal"
                  lang="zh"
                  aria-hidden
                >
                  {f.hanzi}
                </span>
                <div>
                  <h3 className="text-xl font-extrabold">{f.title}</h3>
                  <p className="mt-1 max-w-md text-muted">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Ajakan akhir */}
        <section className="my-16 rounded-3xl bg-jade px-8 py-12 text-center text-white">
          <h2 className="text-3xl font-extrabold">
            Pelajaran pertama hanya butuh beberapa menit.
          </h2>
          <p className="mt-3 text-white/85">Tanpa akun, langsung coba.</p>
          <Link
            href="/learn"
            className={`${cta} mt-8 border-jade-soft bg-white !text-jade-dark`}
          >
            Coba sekarang
          </Link>
        </section>
      </main>

      <footer className="pb-10 text-sm text-muted">
        © 2026 Belajar Mandarin
      </footer>
    </div>
  );
}
