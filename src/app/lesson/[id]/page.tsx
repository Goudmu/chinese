import { Suspense } from "react";
import { notFound } from "next/navigation";
import LessonPlayer from "@/components/LessonPlayer";
import { allLessons, findLesson } from "@/data/course";
export const instant = false;
export function generateStaticParams() {
  return allLessons.map(({ id }) => ({ id }));
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lesson = findLesson(id);
  if (!lesson) notFound();
  return (
    <Suspense
      fallback={
        <main className="mx-auto max-w-xl px-4 py-8 text-muted" role="status">
          Memuat pelajaran...
        </main>
      }
    >
      <LessonPlayer lesson={lesson} />
    </Suspense>
  );
}
