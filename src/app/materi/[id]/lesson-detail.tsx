"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, CheckCircle2, Target } from "lucide-react";
import { lessons } from "@/data/lessons";
import SpeakButton from "@/components/speak-button";
import { markLessonComplete, readProgress } from "@/lib/progress";

export default function LessonDetail() {
  const params = useParams<{id:string}>();
  const lesson = lessons.find(item => item.id === params.id);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lesson) setDone(readProgress().completedLessons.includes(lesson.id));
  }, [lesson]);

  if (!lesson) return <div className="container content-section"><div className="empty-state">Materi tidak ditemukan.</div></div>;

  function complete() {
    markLessonComplete(lesson!.id);
    setDone(true);
  }

  return <>
    <section className="page-hero">
      <div className="container page-heading">
        <Link href="/materi/" className="text-link"><ArrowLeft size={15}/> Kembali ke materi</Link>
        <h1>{lesson.title} <span className="arabic-title">{lesson.arabic}</span></h1>
        <p>{lesson.description}</p>
      </div>
    </section>
    <section className="content-section">
      <div className="container lesson-detail">
        <div className="content-panel">
          <span className="kicker">Ungkapan penting</span>
          <h2 style={{color:"var(--forest)",marginTop:8}}>Dengarkan dan ucapkan</h2>
          {lesson.phrases.map((phrase,i)=><div className="phrase-row" key={i}>
            <div><div className="phrase-arabic">{phrase.arabic}</div><div className="phrase-latin">{phrase.latin}</div><div className="phrase-meaning">{phrase.meaning}</div></div>
            <SpeakButton text={phrase.arabic}/>
          </div>)}
          <div className="button-row"><button className="button-primary" onClick={complete}>{done ? <><CheckCircle2 size={17}/> Materi selesai</> : "Tandai selesai"}</button></div>
        </div>
        <aside className="content-panel">
          <div className="feature-icon"><Target size={20}/></div>
          <h3 style={{color:"var(--forest)"}}>Tujuan pembelajaran</h3>
          <ul style={{paddingLeft:18,color:"var(--muted)",fontSize:13,lineHeight:2}}>{lesson.objectives.map(x=><li key={x}>{x}</li>)}</ul>
          <div className="notice">Tips: ucapkan setiap kalimat dengan suara lantang. Ulangi beberapa kali hingga lebih lancar.</div>
          <div style={{marginTop:18}}><Link href="/latihan/" className="text-link">Lanjut ke latihan kalam →</Link></div>
        </aside>
      </div>
    </section>
  </>;
}
