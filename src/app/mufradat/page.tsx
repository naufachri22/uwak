"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { vocabulary } from "@/data/vocabulary";
import SpeakButton from "@/components/speak-button";

export default function MufradatPage() {
  const [query,setQuery] = useState("");
  const [category,setCategory] = useState("Semua");
  const categories = ["Semua",...Array.from(new Set(vocabulary.map(v=>v.category)))];
  const filtered = useMemo(()=>vocabulary.filter(v=>(category==="Semua"||v.category===category)&&`${v.arabic} ${v.latin} ${v.meaning}`.toLowerCase().includes(query.toLowerCase())),[query,category]);
  return <>
    <section className="page-hero"><div className="container page-heading"><span className="kicker">Perbendaharaan kata</span><h1>Mufradāt <span className="arabic-title">الْمُفْرَدَاتُ</span></h1><p>Perkaya kosakata Bahasa Arab dan pelajari cara pengucapannya.</p></div></section>
    <section className="content-section"><div className="container">
      <div className="search-box"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Cari kosakata Arab atau artinya..."/></div>
      <div className="button-row" style={{marginBottom:22}}>{categories.map(c=><button key={c} className={category===c?"button-primary":"button-secondary"} onClick={()=>setCategory(c)}>{c}</button>)}</div>
      <div className="vocab-grid">{filtered.map(v=><article className="vocab-card" key={v.id}><span className="tag">{v.category}</span><div className="vocab-arabic" dir="rtl">{v.arabic}</div><div className="vocab-latin">{v.latin}</div><div className="vocab-meaning">{v.meaning}</div><SpeakButton text={v.arabic}/></article>)}</div>
      {filtered.length===0&&<div className="empty-state">Kosakata tidak ditemukan. Coba kata kunci lain.</div>}
    </div></section>
  </>;
}
