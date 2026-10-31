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
    <Suspense fallback={null}>
      <LessonPlayer lesson={lesson} />
    </Suspense>
  );
}
