import type { Metadata } from "next";
import { Suspense } from "react";
import { Bricolage_Grotesque, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const ui = Bricolage_Grotesque({ subsets: ["latin"], variable: "--f-ui" });
const hanzi = Noto_Serif_SC({
  weight: ["600", "900"],
  preload: false,
  variable: "--f-hanzi",
});

export const metadata: Metadata = {
  title: "Belajar Mandarin",
  description: "Belajar bahasa Mandarin sedikit demi sedikit setiap hari.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${ui.variable} ${hanzi.variable} font-sans antialiased`}
      >
        <Suspense
          fallback={
            <main
              className="mx-auto max-w-xl px-4 py-8 text-muted"
              role="status"
            >
              Memuat pelajaran...
            </main>
          }
        >
          {children}
        </Suspense>
      </body>
    </html>
  );
}
