import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import type { Lesson } from "@/data/lessons";

export default function LessonCard({ lesson, completed = false }: { lesson: Lesson; completed?: boolean }) {
  return (
    <article className="lesson-card">
      <div className="lesson-card-top"><span className="tag">{lesson.level}</span><span className="arabic-small" dir="rtl">{lesson.arabic}</span></div>
      <h3>{lesson.title}</h3>
      <p>{lesson.description}</p>
      <div className="lesson-meta"><span><Clock3 size={14}/>{lesson.duration}</span>{completed && <span className="done-label">✓ Selesai</span>}</div>
      <Link href={`/materi/${lesson.id}/`} className="text-link">Pelajari materi <ArrowUpRight size={16}/></Link>
    </article>
  );
}
