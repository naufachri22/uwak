import LessonDetail from "./lesson-detail";
import { lessons } from "@/data/lessons";

export function generateStaticParams() {
  return lessons.map((lesson) => ({ id: lesson.id }));
}

export default function LessonPage() {
  return <LessonDetail />;
}
