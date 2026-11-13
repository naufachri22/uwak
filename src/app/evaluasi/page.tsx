"use client";

import { useState } from "react";
import { quizzes } from "@/data/quizzes";
import { saveQuizResult } from "@/lib/progress";
import { CheckCircle2, RotateCcw, Trophy } from "lucide-react";

export default function EvaluasiPage() {
  const [index,setIndex] = useState(0);
  const [answers,setAnswers] = useState<number[]>([]);
  const [submitted,setSubmitted] = useState(false);
  const [saved,setSaved] = useState(false);
  const current = quizzes[index];
  const score = Math.round((answers.filter((a,i)=>a===quizzes[i].answer).length/quizzes.length)*100);

  function choose(option:number) { if(submitted)return; setAnswers(prev=>{const next=[...prev];next[index]=option;return next;}); }
  function finish() { setSubmitted(true); if(!saved){saveQuizResult(score);setSaved(true);} }
  function reset() { setIndex(0);setAnswers([]);setSubmitted(false);setSaved(false); }

  return <>
    <section className="page-hero"><div className="container page-heading"><span className="kicker">Uji pemahaman</span><h1>Evaluasi <span className="arabic-title">التَّقْيِيمُ</span></h1><p>Kerjakan kuis singkat untuk mengukur pemahaman kosakata dan ungkapan dasar.</p></div></section>
    <section className="content-section"><div className="container">
      <div className="content-panel quiz-card">
        {!submitted ? <>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><span className="tag">Pertanyaan {index+1} dari {quizzes.length}</span><span style={{fontSize:12,color:"var(--muted)"}}>{Math.round((index/quizzes.length)*100)}%</span></div>
          <div className="quiz-progress"><span style={{width:`${(index/quizzes.length)*100}%`}}/></div>
          <div className="quiz-question">{current.question}</div>
          <div className="quiz-options">{current.options.map((o,i)=><button key={o} onClick={()=>choose(i)} className={answers[index]===i?"quiz-option selected":"quiz-option"}>{String.fromCharCode(65+i)}. {o}</button>)}</div>
          <div className="button-row" style={{justifyContent:"space-between"}}><button className="button-secondary" disabled={index===0} onClick={()=>setIndex(i=>i-1)}>Sebelumnya</button>{index<quizzes.length-1?<button className="button-primary" disabled={answers[index]===undefined} onClick={()=>setIndex(i=>i+1)}>Berikutnya</button>:<button className="button-primary" disabled={answers[index]===undefined} onClick={finish}>Lihat hasil</button>}</div>
        </>:<div style={{textAlign:"center",padding:"20px 5px"}}><div className="recorder-icon"><Trophy size={26}/></div><span className="kicker">Hasil evaluasi</span><h2 style={{fontSize:42,color:"var(--forest)",margin:"8px 0"}}>{score}</h2><p style={{color:"var(--muted)"}}>Nilai kamu dari 100</p><p style={{color:"var(--ink)",fontWeight:700}}>{score>=80?"Bagus sekali! Terus pertahankan.":score>=60?"Cukup baik. Ayo tingkatkan lagi!":"Jangan menyerah. Pelajari kembali materi dan coba lagi."}</p><div style={{textAlign:"left",marginTop:25}}>{quizzes.map((q,i)=><div className="phrase-row" key={q.id}><div><strong style={{fontSize:13}}>{i+1}. {q.question}</strong><div className="phrase-meaning">{q.explanation}</div></div><span style={{color:answers[i]===q.answer?"var(--leaf)":"#a64c42"}}>{answers[i]===q.answer?"Benar":"Belum tepat"}</span></div>)}</div><button className="button-primary" onClick={reset} style={{marginTop:20}}><RotateCcw size={16}/> Ulangi kuis</button></div>}
      </div>
    </div></section>
  </>;
}
