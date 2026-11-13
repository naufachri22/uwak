import type { Metadata } from "next";
import "./globals.css";
import SiteShell from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Maharah Kalam | Arabic Speaking Platform",
  description: "Platform pembelajaran Maharah Kalam untuk berlatih berbicara Bahasa Arab secara mandiri."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><SiteShell>{children}</SiteShell></body></html>;
}
