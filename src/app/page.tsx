import Link from "next/link";
import { ArrowRight, BookOpen, Headphones, Mic2, Trophy, Sparkles, MessageCircle, ChartNoAxesCombined } from "lucide-react";
import { lessons } from "@/data/lessons";
import LessonCard from "@/components/lesson-card";

const features = [
  { icon: BookOpen, title: "Kosakata kontekstual", desc: "Pelajari mufradat berdasarkan tema kehidupan sehari-hari." },
  { icon: Headphones, title: "Dengarkan pelafalan", desc: "Kenali bunyi dan intonasi melalui fitur audio." },
  { icon: MessageCircle, title: "Dialog komunikatif", desc: "Latih ungkapan Bahasa Arab melalui percakapan." },
  { icon: Mic2, title: "Praktik berbicara", desc: "Rekam suara dan dengarkan kembali latihanmu." },
  { icon: Trophy, title: "Evaluasi mandiri", desc: "Uji pemahaman dan lihat hasil latihan." },
  { icon: ChartNoAxesCombined, title: "Pantau progres", desc: "Lihat materi yang telah diselesaikan di perangkatmu." }
];

export default function Home() {
  return <>
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow"><Sparkles size={14}/> Ruang belajar Bahasa Arab</span>
          <h1>Berani bicara,<br/><span>fasih berbahasa.</span></h1>
          <p>Asah keterampilan berbicara Bahasa Arab melalui kosakata, percakapan, latihan pelafalan, dan evaluasi mandiri dalam satu ruang belajar.</p>
          <div className="hero-actions">
            <Link href="/materi/" className="button-primary">Mulai belajar <ArrowRight size={17}/></Link>
            <Link href="/hiwar/" className="button-secondary">Jelajahi hiwar</Link>
          </div>
          <div className="stats-strip">
            <div className="stat"><strong>4+</strong><span>Materi awal</span></div>
            <div className="stat"><strong>12+</strong><span>Kosakata</span></div>
            <div className="stat"><strong>100%</strong><span>Belajar mandiri</span></div>
          </div>
        </div>
        <div className="hero-art">
          <div className="floating-note note-one">تَكَلَّمْ بِثِقَةٍ</div>
          <div className="hero-circle"><span className="hero-arabic" dir="rtl">مَهَارَةُ<br/>الْكَلَامِ</span><span className="hero-caption">SPEAK WITH CONFIDENCE</span></div>
          <div className="floating-note note-two">Belajar • Berlatih • Berkembang</div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="section-heading"><div><span className="kicker">Fasilitas belajar</span><h2>Belajar lebih aktif dan terarah</h2><p>Bangun kebiasaan berbicara Bahasa Arab melalui pengalaman belajar yang sederhana dan menyenangkan.</p></div></div>
        <div className="feature-grid">{features.map(f => <article className="feature-card" key={f.title}><div className="feature-icon"><f.icon size={21}/></div><h3>{f.title}</h3><p>{f.desc}</p></article>)}</div>
      </div>
    </section>
    <section className="section section-soft">
      <div className="container">
        <div className="section-heading"><div><span className="kicker">Mulai dari dasar</span><h2>Materi pilihan</h2><p>Pilih topik yang dekat dengan kehidupan sehari-hari dan praktikkan ungkapannya.</p></div><Link href="/materi/" className="text-link">Semua materi <ArrowRight size={16}/></Link></div>
        <div className="lesson-grid">{lessons.slice(0,3).map(lesson => <LessonCard key={lesson.id} lesson={lesson}/>)}</div>
      </div>
    </section>
    <section className="section"><div className="container"><div className="content-panel" style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:20,flexWrap:"wrap",background:"#123c32",color:"white",padding:30}}><div><span className="kicker" style={{color:"#e4c88f"}}>Mulai sekarang</span><h2 style={{fontSize:27,margin:"8px 0"}}>Satu ungkapan hari ini, lebih percaya diri esok hari.</h2><p style={{color:"#d4e0d8",fontSize:13,margin:0}}>Tidak perlu menunggu sempurna untuk mulai berbicara.</p></div><Link href="/latihan/" className="button-secondary">Mulai latihan <ArrowRight size={16}/></Link></div></div></section>
  </>;
}
