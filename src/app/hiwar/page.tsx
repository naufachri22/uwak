import { dialogues } from "@/data/dialogues";
import SpeakButton from "@/components/speak-button";

export default function HiwarPage() {
  return <>
    <section className="page-hero"><div className="container page-heading"><span className="kicker">Praktik percakapan</span><h1>Hiwar <span className="arabic-title">الْحِوَارُ</span></h1><p>Amati dialog, pahami maknanya, lalu praktikkan bersama teman atau secara mandiri.</p></div></section>
    <section className="content-section"><div className="container dialogue-grid">{dialogues.map(d=><article className="dialogue-card" key={d.id}><span className="tag">Percakapan</span><h3>{d.title}</h3><p className="dialogue-context">{d.context}</p>{d.lines.map((line,i)=><div className="dialogue-line" key={i}><div className="dialogue-speaker">{line.speaker}</div><div className="dialogue-arabic">{line.arabic}</div><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8}}><span className="dialogue-meaning">{line.meaning}</span><SpeakButton text={line.arabic}/></div></div>)}</article>)}</div></section>
  </>;
}
