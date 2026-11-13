"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpenCheck, Trophy, ChartNoAxesCombined, RotateCcw } from "lucide-react";
import { lessons } from "@/data/lessons";
import { defaultProgress, readProgress, writeProgress, type ProgressState } from "@/lib/progress";

export default function ProgressPage() {
  const [progress,setProgress] = useState<ProgressState>(defaultProgress);
  useEffect(()=>setProgress(readProgress()),[]);
  const percent = Math.round((progress.completedLessons.length/lessons.length)*100);
  function reset() { if(confirm("Hapus seluruh progres belajar di browser ini?")){writeProgress(defaultProgress);setProgress(defaultProgress);} }
  return <>
    <section className="page-hero"><div className="container page-heading"><span className="kicker">Perjalanan belajarmu</span><h1>Progres Belajar <span className="arabic-title">تَقَدُّمُ التَّعَلُّمِ</span></h1><p>Pantau perkembangan belajar yang tersimpan secara lokal di browser ini.</p></div></section>
    <section className="content-section"><div className="container" style={{display:"grid",gap:20}}>
      <div className="progress-grid">
        <div className="progress-stat"><BookOpenCheck color="#26745c"/><strong>{progress.completedLessons.length}/{lessons.length}</strong><span>Materi diselesaikan</span></div>
        <div className="progress-stat"><Trophy color="#c29343"/><strong>{progress.bestQuizScore}</strong><span>Nilai kuis terbaik</span></div>
        <div className="progress-stat"><ChartNoAxesCombined color="#26745c"/><strong>{progress.quizAttempts}</strong><span>Jumlah percobaan kuis</span></div>
      </div>
      <div className="content-panel"><div style={{display:"flex",justifyContent:"space-between",gap:12,alignItems:"center"}}><div><span className="kicker">Penyelesaian materi</span><h2 style={{color:"var(--forest)",margin:"7px 0"}}>{percent}% selesai</h2></div><strong style={{color:"var(--leaf)",fontSize:25}}>{percent}%</strong></div><div className="progress-track"><span style={{width:`${percent}%`}}/></div></div>
      <div className="content-panel"><h3 style={{color:"var(--forest)",marginTop:0}}>Daftar materi</h3>{lessons.map(l=><div className="phrase-row" key={l.id}><div><strong>{l.title}</strong><div className="phrase-meaning">{l.arabic}</div></div><span className={progress.completedLessons.includes(l.id)?"done-label":"phrase-meaning"}>{progress.completedLessons.includes(l.id)?"✓ Selesai":"Belum dipelajari"}</span></div>)}<div className="button-row"><Link href="/materi/" className="button-primary">Lanjut belajar</Link><button className="button-secondary" onClick={reset}><RotateCcw size={15}/> Reset progres</button></div></div>
      <div className="notice">Catatan: progres hanya tersimpan pada browser dan perangkat yang sedang digunakan. Data tidak dapat dipulihkan jika penyimpanan situs dihapus.</div>
    </div></section>
  </>;
}
