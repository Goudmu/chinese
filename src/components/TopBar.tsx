"use client";
import Link from "next/link";
import { useProgress, useHydrated } from "@/store/useProgress";

export default function TopBar() {
  const hydrated = useHydrated();
  const xp = useProgress((s) => s.xp);
  const v = (n: number) => (hydrated ? n : "–");

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="font-hanzi text-2xl font-black text-seal"
          aria-label="Beranda"
        >
          学
        </Link>
        <dl className="flex items-center gap-4 text-sm font-bold">
          <div className="flex items-center gap-1" title="XP">
            <dt className="sr-only">XP</dt>
            <span aria-hidden>⚡</span>
            <dd>{v(xp)}</dd>
          </div>
        </dl>
      </div>
    </header>
  );
}
