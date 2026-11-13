"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, GraduationCap, House, Library, Menu, MessageCircle, Mic, Trophy, X, ChartNoAxesColumnIncreasing } from "lucide-react";
import { useState } from "react";

const nav = [
  { href: "/", label: "Beranda", icon: House },
  { href: "/materi/", label: "Materi", icon: BookOpen },
  { href: "/mufradat/", label: "Mufradat", icon: Library },
  { href: "/hiwar/", label: "Hiwar", icon: MessageCircle },
  { href: "/latihan/", label: "Latihan Kalam", icon: Mic },
  { href: "/evaluasi/", label: "Evaluasi", icon: Trophy },
  { href: "/progress/", label: "Progres", icon: ChartNoAxesColumnIncreasing }
];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark">ك</span>
            <span><strong>MAHARAH KALAM</strong><small>Arabic Speaking Platform</small></span>
          </Link>
          <nav className="desktop-nav">
            {nav.slice(0, 5).map(item => (
              <Link key={item.href} href={item.href} className={pathname === item.href ? "nav-link active" : "nav-link"}>{item.label}</Link>
            ))}
          </nav>
          <Link href="/materi/" className="header-cta">Mulai belajar <span>↗</span></Link>
          <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Buka menu">{open ? <X /> : <Menu />}</button>
        </div>
        {open && <div className="mobile-nav container">{nav.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={pathname === item.href ? "mobile-nav-link active" : "mobile-nav-link"}><item.icon size={18}/>{item.label}</Link>)}</div>}
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand footer-brand"><span className="brand-mark">ك</span><span><strong>MAHARAH KALAM</strong><small>Belajar, berlatih, dan percaya diri berbicara.</small></span></div>
          <p>من جدّ وجد · Barang siapa bersungguh-sungguh, ia akan berhasil.</p>
          <small>© {new Date().getFullYear()} Maharah Kalam. Media pembelajaran Bahasa Arab.</small>
        </div>
      </footer>
    </div>
  );
}
