"use client";

import { useEffect, useState } from "react";
import { lessons } from "@/data/lessons";
import LessonCard from "@/components/lesson-card";
import { readProgress } from "@/lib/progress";

export default function MateriPage() {
  const [completed, setCompleted] = useState<string[]>([]);
  useEffect(() => setCompleted(readProgress().completedLessons), []);
  return <>
    <section className="page-hero"><div className="container page-heading"><span className="kicker">Pusat pembelajaran</span><h1>Materi Mahārah Kalām <span className="arabic-title">مَوَادُّ التَّعَلُّمِ</span></h1><p>Pelajari ungkapan dan pola percakapan berdasarkan tema. Mulailah dari tingkat pemula, lalu tingkatkan kemampuanmu.</p></div></section>
    <section className="content-section"><div className="container"><div className="lesson-grid">{lessons.map(lesson => <LessonCard key={lesson.id} lesson={lesson} completed={completed.includes(lesson.id)}/>)}</div></div></section>
  </>;
}
