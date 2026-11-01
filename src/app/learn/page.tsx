"use client";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import { units } from "@/data/course";
import { useProgress, useHydrated } from "@/store/useProgress";

// Pergeseran horizontal tiap node supaya jalurnya berkelok
const OFFSETS = [0, 44, 64, 44, 0, -44, -64, -44];
const WIDE_COLUMNS = 3;
const UNIT_BACKGROUNDS = [
  "#fff3eb",
  "#edf6ef",
  "#fff5e8",
  "#edf4ff",
  "#f4efff",
  "#fff2e8",
  "#f2efff",
  "#eaf7f7",
  "#edf2fa",
] as const;
const UNIT_ICONS = [
  ["💬", "👋", "✉️"],
  ["👥", "🤝", "🏠"],
  ["🍵", "☕", "🥛"],
  ["📍", "🏙️", "🧭"],
  ["👨‍👩‍👧‍👦", "🐾", "🐈"],
  ["🍜", "🥟", "🧾"],
  ["🎵", "🎨", "⚽"],
  ["🍚", "🍲", "🥢"],
  ["🚆", "✈️", "🧳"],
] as const;

type PathEdge = { id: string; path: string; unlocked: boolean };

function LessonNode({
  lesson,
  state,
  showTitle = false,
  nodeRef,
}: {
  lesson: (typeof units)[number]["lessons"][number];
  state: "done" | "current" | "locked";
  showTitle?: boolean;
  nodeRef: (node: HTMLElement | null) => void;
}) {
  const base =
    "flex h-[76px] w-[76px] items-center justify-center rounded-full border-b-[6px] text-3xl transition-transform";
  const styles = {
    done: "bg-gold border-[#b5811a] text-white active:translate-y-1 active:border-b-2",
    current:
      "bg-seal border-seal-dark text-white ring-4 ring-seal/25 active:translate-y-1 active:border-b-2",
    locked: "bg-line border-[#b9c8c0] text-muted",
  }[state];

  return (
    <div className="relative z-10 flex flex-col items-center gap-2">
      {state === "locked" ? (
        <div
          ref={nodeRef}
          className={`${base} ${styles}`}
          aria-label={`${lesson.title} (terkunci)`}
        >
          🔒
        </div>
      ) : (
        <Link
          ref={nodeRef}
          href={`/lesson/${lesson.id}`}
          className={`${base} ${styles}`}
          aria-label={`${state === "done" ? "Ulangi" : "Mulai"} ${lesson.title}`}
        >
          {state === "done" ? "✓" : "★"}
        </Link>
      )}
      {showTitle && (
        <span className="max-w-full rounded-lg bg-paper px-2 py-0.5 text-center text-sm font-bold">
          {lesson.title}
        </span>
      )}
    </div>
  );
}

export default function LearnPage() {
  const hydrated = useHydrated();
  const completedStore = useProgress((s) => s.completed);
  const done = useMemo(
    () => (hydrated ? completedStore : []),
    [hydrated, completedStore],
  );
  const mainRef = useRef<HTMLElement>(null);
  const nodeRefs = useRef(new Map<string, HTMLElement>());
  const [pathEdges, setPathEdges] = useState<PathEdge[]>([]);
  const [pathSize, setPathSize] = useState({ width: 0, height: 0 });
  let n = 0;

  useLayoutEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const updatePaths = () => {
      const mainRect = main.getBoundingClientRect();
      setPathSize({ width: mainRect.width, height: mainRect.height });
      const isWide = window.matchMedia("(min-width: 768px)").matches;
      const edges: PathEdge[] = [];
      let globalIndex = 0;

      units.forEach((unit, unitIndex) => {
        unit.lessons.forEach((lesson, lessonIndex) => {
          const nextLesson =
            lessonIndex + 1 < unit.lessons.length
              ? unit.lessons[lessonIndex + 1]
              : units[unitIndex + 1]?.lessons[0];
          if (!nextLesson) {
            globalIndex += 1;
            return;
          }

          const nextUnitIndex =
            lessonIndex + 1 < unit.lessons.length ? unitIndex : unitIndex + 1;
          const layout = isWide ? "wide" : "mobile";
          const from = nodeRefs.current.get(`${layout}-${globalIndex}`);
          const to = nodeRefs.current.get(
            `${layout}-${globalIndex + 1}`,
          );
          globalIndex += 1;
          if (!from || !to) return;

          const fromRect = from.getBoundingClientRect();
          const toRect = to.getBoundingClientRect();
          const startX = fromRect.left + fromRect.width / 2 - mainRect.left;
          const startY = fromRect.bottom - mainRect.top;
          const endX = toRect.left + toRect.width / 2 - mainRect.left;
          const endY = toRect.top - mainRect.top;
          const controlY = (startY + endY) / 2;
          const path = `M ${startX} ${startY} C ${startX} ${controlY}, ${endX} ${controlY}, ${endX} ${endY}`;

          edges.push({
            id: `${unit.id}-${lesson.id}-${nextUnitIndex}-${nextLesson.id}`,
            path,
            unlocked: true,
          });
        });
      });

      setPathEdges(edges);
    };

    updatePaths();
    const observer = new ResizeObserver(updatePaths);
    observer.observe(main);
    window.addEventListener("resize", updatePaths);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updatePaths);
    };
  }, []);

  return (
    <>
      <TopBar />
      <main
        ref={mainRef}
        className="relative mx-auto max-w-6xl px-4 pb-24"
      >
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
          viewBox={`0 0 ${pathSize.width} ${pathSize.height}`}
          preserveAspectRatio="none"
        >
          {pathEdges.map((edge) => (
            <path
              key={edge.id}
              d={edge.path}
              fill="none"
              stroke={edge.unlocked ? "#159B72" : "#c5d2cc"}
              strokeWidth="10"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              className="md:[stroke-width:3.5]"
            />
          ))}
        </svg>
        {units.map((unit, unitIndex) => (
          <section
            key={unit.id}
            className="relative z-10 px-2 pb-12 pt-8 md:grid md:grid-cols-[minmax(190px,0.8fr)_minmax(0,2fr)] md:items-start md:gap-8 md:px-6"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"
              style={{
                backgroundColor:
                  UNIT_BACKGROUNDS[unitIndex % UNIT_BACKGROUNDS.length],
                backgroundImage: `linear-gradient(to bottom, ${UNIT_BACKGROUNDS[unitIndex % UNIT_BACKGROUNDS.length]} 0%, ${UNIT_BACKGROUNDS[unitIndex % UNIT_BACKGROUNDS.length]} calc(100% - 120px), ${units[unitIndex + 1] ? UNIT_BACKGROUNDS[(unitIndex + 1) % UNIT_BACKGROUNDS.length] : UNIT_BACKGROUNDS[unitIndex % UNIT_BACKGROUNDS.length]} 100%)`,
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-screen -translate-x-1/2 overflow-hidden"
            >
              {UNIT_ICONS[unitIndex % UNIT_ICONS.length].map(
                (icon, iconIndex) => (
                (() => {
                  const seed = unitIndex * 17 + iconIndex * 31 + 1;
                  const side = seed % 2 === 0 ? "left" : "right";
                  const inset = 4 + ((seed * 7) % 8);
                  const top = 18 + ((seed * 13) % 58);

                  return (
                    <span
                      key={icon}
                      className="absolute select-none text-5xl opacity-30 sm:text-6xl md:text-7xl"
                      style={{
                        [side]: `clamp(12px, ${inset}vw, 128px)`,
                        top: `max(160px, ${top}%)`,
                        animation: `unit-float ${4 + iconIndex}s ease-in-out ${iconIndex * -1.2}s infinite`,
                      }}
                    >
                      {icon}
                    </span>
                  );
                })()
                ),
              )}
            </div>
            <div className="relative z-10 overflow-hidden rounded-2xl bg-jade p-5 text-white md:sticky md:top-24">
              <span
                aria-hidden
                className="font-hanzi pointer-events-none absolute -right-2 -top-4 select-none text-[7rem] font-black leading-none text-white/15"
              >
                {unit.hanzi}
              </span>
              <h2 className="text-2xl font-extrabold">{unit.title}</h2>
              <p className="mt-1 text-sm text-white/85">{unit.subtitle}</p>
            </div>

            <ol className="relative z-10 flex flex-col items-center gap-5 py-8 md:hidden">
              {unit.lessons.map((lesson, lessonIndex) => {
                const globalIndex =
                  units
                    .slice(0, unitIndex)
                    .reduce((count, currentUnit) => count + currentUnit.lessons.length, 0) +
                  lessonIndex;
                const offset = OFFSETS[n++ % OFFSETS.length];
                const isDone = done.includes(lesson.id);
                const state = isDone ? "done" : "current";

                return (
                  <li
                    key={lesson.id}
                    style={{ transform: `translateX(${offset}px)` }}
                    className="relative flex flex-col items-center gap-2"
                  >
                    <LessonNode
                      lesson={lesson}
                      state={state}
                      nodeRef={(node) => {
                        const key = `mobile-${globalIndex}`;
                        if (node) nodeRefs.current.set(key, node);
                        else nodeRefs.current.delete(key);
                      }}
                    />
                  </li>
                );
              })}
            </ol>

            <ol
              className="relative z-10 hidden grid-cols-3 auto-rows-[124px] gap-y-10 py-8 md:grid"
              aria-label={`${unit.title}: daftar pelajaran`}
            >
              {unit.lessons.map((lesson, lessonIndex) => {
                const globalIndex =
                  units
                    .slice(0, unitIndex)
                    .reduce((count, currentUnit) => count + currentUnit.lessons.length, 0) +
                  lessonIndex;
                const row = Math.floor(lessonIndex / WIDE_COLUMNS);
                const position = lessonIndex % WIDE_COLUMNS;
                const column =
                  row % 2 === 0
                    ? position
                    : WIDE_COLUMNS - 1 - position;
                const isDone = done.includes(lesson.id);
                const state = isDone ? "done" : "current";

                return (
                  <li
                    key={lesson.id}
                    className="relative flex justify-center"
                    style={{
                      gridColumn: column + 1,
                      gridRow: row + 1,
                    }}
                  >
                    <LessonNode
                      lesson={lesson}
                      state={state}
                      showTitle
                      nodeRef={(node) => {
                        const key = `wide-${globalIndex}`;
                        if (node) nodeRefs.current.set(key, node);
                        else nodeRefs.current.delete(key);
                      }}
                    />
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </main>
    </>
  );
}
