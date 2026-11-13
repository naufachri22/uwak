# Maharah Kalam

Website pembelajaran Maharah Kalam (مهارة الكلام) berbasis Next.js. Versi awal ini tidak menggunakan database, backend API, autentikasi, atau akun siswa. Progres latihan disimpan secara lokal di browser menggunakan `localStorage`.

## Teknologi
- Next.js 15 + React 19
- TypeScript
- Tailwind CSS
- Lucide React
- Browser LocalStorage dan Web Speech Synthesis

## Persyaratan
- Node.js 20.9 atau lebih baru
- npm

## Menjalankan secara lokal
```bash
npm install
npm run dev
```
Buka http://localhost:3000.

## Build static export
```bash
npm run build
```
Hasil website statis berada di folder `out/`. Konfigurasi `output: "export"` sudah diaktifkan pada `next.config.ts`.

## Deploy ke Vercel
1. Buat repository baru di GitHub dan push seluruh isi proyek ini.
2. Masuk ke Vercel, pilih **Add New → Project**.
3. Import repository GitHub.
4. Framework Preset: Next.js.
5. Build Command: `npm run build`.
6. Output Directory: `out`.
7. Tidak perlu Environment Variables untuk versi ini.
8. Klik Deploy.

Setiap push ke branch utama akan memicu deployment baru.

## Penyimpanan progres
Progres kuis, materi yang selesai, dan preferensi disimpan di browser masing-masing melalui `localStorage`. Data tidak tersinkronisasi antarperangkat dan dapat hilang jika data situs/browser dihapus. Jangan gunakan localStorage untuk menyimpan password atau data sensitif.

## Catatan fitur audio
Tombol dengarkan menggunakan Web Speech Synthesis jika suara Bahasa Arab tersedia pada perangkat/browser. Ketersediaan suara Arab berbeda-beda antarperangkat. Fitur rekam suara menggunakan MediaRecorder dan hanya berjalan pada browser yang mendukung API tersebut; rekaman contoh tidak dikirim ke server.

## Pengembangan konten
Data materi dan kosakata berada di:
- `src/data/lessons.ts`
- `src/data/vocabulary.ts`
- `src/data/dialogues.ts`
- `src/data/quizzes.ts`

Ubah atau tambah konten di file tersebut. Untuk menambah halaman, buat folder baru di `src/app/`.
