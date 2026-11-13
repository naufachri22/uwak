import Recorder from "@/components/recorder";
import SpeakButton from "@/components/speak-button";

const prompts = [
  { arabic:"عَرِّفْ بِنَفْسِكَ!", meaning:"Perkenalkan dirimu!", hint:"Sebutkan nama, asal daerah, dan kegiatanmu." },
  { arabic:"تَحَدَّثْ عَنْ أُسْرَتِكَ!", meaning:"Ceritakan keluargamu!", hint:"Ceritakan anggota keluarga dan pekerjaan mereka." },
  { arabic:"مَاذَا تَفْعَلُ فِي يَوْمِكَ؟", meaning:"Apa yang kamu lakukan dalam keseharianmu?", hint:"Ceritakan rutinitas dari pagi hingga malam." }
];

export default function LatihanPage() {
  return <>
    <section className="page-hero"><div className="container page-heading"><span className="kicker">Saatnya praktik</span><h1>Latihan Kalām <span className="arabic-title">تَطْبِيقُ الْكَلَامِ</span></h1><p>Latih keberanian berbicara. Pilih satu topik, susun jawaban, lalu rekam suaramu.</p></div></section>
    <section className="content-section"><div className="container" style={{display:"grid",gap:18}}>
      <div className="lesson-grid">{prompts.map((p,i)=><article className="lesson-card" key={p.arabic}><span className="tag">Topik {i+1}</span><div className="phrase-arabic" style={{marginTop:15}}>{p.arabic}</div><h3>{p.meaning}</h3><p>{p.hint}</p><div style={{marginTop:14}}><SpeakButton text={p.arabic}/></div></article>)}</div>
      <Recorder/>
      <div className="notice">Penilaian mandiri: perhatikan ketepatan kosakata, susunan kalimat, kelancaran, pelafalan, dan keberanian berbicara. Rekaman tidak diunggah ke server.</div>
    </div></section>
  </>;
}
