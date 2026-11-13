"use client";

import { Volume2 } from "lucide-react";

export default function SpeakButton({ text }: { text: string }) {
  function speak() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("Fitur suara belum didukung browser ini.");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ar-SA";
    utterance.rate = 0.82;
    window.speechSynthesis.speak(utterance);
  }

  return (
    <button onClick={speak} className="icon-button" aria-label="Dengarkan pelafalan">
      <Volume2 size={17} />
    </button>
  );
}
