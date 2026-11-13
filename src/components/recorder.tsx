"use client";

import { useRef, useState } from "react";
import { Mic, Square, Play, Trash2 } from "lucide-react";

export default function Recorder() {
  const [recording, setRecording] = useState(false);
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("Rekaman hanya tersimpan sementara di halaman ini.");
  const recorder = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);

  async function start() {
    try {
      if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
        setMessage("Browser atau perangkat ini belum mendukung perekaman suara.");
        return;
      }
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      chunks.current = [];
      const media = new MediaRecorder(stream);
      recorder.current = media;
      media.ondataavailable = event => { if (event.data.size) chunks.current.push(event.data); };
      media.onstop = () => {
        const blob = new Blob(chunks.current, { type: media.mimeType || "audio/webm" });
        setUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach(track => track.stop());
        setMessage("Rekaman selesai. Dengarkan kembali untuk mengevaluasi pelafalanmu.");
      };
      media.start();
      setRecording(true);
      setMessage("Sedang merekam... silakan berbicara dengan jelas.");
    } catch {
      setMessage("Akses mikrofon ditolak atau tidak tersedia. Periksa izin browser.");
    }
  }

  function stop() {
    recorder.current?.stop();
    setRecording(false);
  }

  function clear() {
    if (url) URL.revokeObjectURL(url);
    setUrl("");
    setMessage("Rekaman dihapus. Kamu bisa mencoba lagi.");
  }

  return (
    <div className="recorder-card">
      <div className="recorder-icon"><Mic size={26}/></div>
      <h3>Ruang latihan suara</h3>
      <p>{message}</p>
      <div className="recorder-actions">
        {!recording ? <button className="button-primary" onClick={start}><Mic size={17}/> Mulai merekam</button> : <button className="button-dark" onClick={stop}><Square size={16}/> Berhenti</button>}
        {url && <><audio controls src={url} className="audio-control"/><button className="icon-button" onClick={clear} aria-label="Hapus rekaman"><Trash2 size={17}/></button></>}
      </div>
      <small>Izinkan akses mikrofon saat browser memintanya. Gunakan HTTPS saat website sudah online.</small>
    </div>
  );
}
