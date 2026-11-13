export type Lesson = {
  id: string;
  title: string;
  arabic: string;
  level: string;
  duration: string;
  description: string;
  objectives: string[];
  phrases: { arabic: string; latin: string; meaning: string }[];
};

export const lessons: Lesson[] = [
  {
    id: "taaruf",
    title: "Perkenalan Diri",
    arabic: "التَّعَارُفُ",
    level: "Pemula",
    duration: "15 menit",
    description: "Belajar memperkenalkan nama, asal, tempat tinggal, dan status sebagai pelajar.",
    objectives: ["Memperkenalkan identitas diri", "Menanyakan nama dan asal lawan bicara", "Menggunakan ungkapan salam dan sapaan"],
    phrases: [
      { arabic: "السَّلَامُ عَلَيْكُمْ", latin: "As-salāmu 'alaikum", meaning: "Semoga keselamatan tercurah kepadamu." },
      { arabic: "مَا اسْمُكَ؟", latin: "Mā ismuka?", meaning: "Siapa namamu? (laki-laki)" },
      { arabic: "اِسْمِي نَوْفَلٌ", latin: "Ismī Naufal", meaning: "Nama saya Naufal." },
      { arabic: "مِنْ أَيْنَ أَنْتَ؟", latin: "Min aina anta?", meaning: "Dari mana asalmu? (laki-laki)" },
      { arabic: "أَنَا مِنْ إِنْدُونِيسِيَا", latin: "Anā min Indūnīsiyā", meaning: "Saya dari Indonesia." }
    ]
  },
  {
    id: "usrah",
    title: "Keluarga",
    arabic: "الأُسْرَةُ",
    level: "Pemula",
    duration: "20 menit",
    description: "Menceritakan anggota keluarga dan hubungan kekerabatan.",
    objectives: ["Menyebutkan anggota keluarga", "Menjelaskan jumlah saudara", "Menceritakan keluarga secara sederhana"],
    phrases: [
      { arabic: "هَذِهِ أُسْرَتِي", latin: "Hādzihi usratī", meaning: "Ini keluarga saya." },
      { arabic: "لِي أَخٌ وَاحِدٌ", latin: "Lī akhun wāḥid", meaning: "Saya memiliki satu saudara laki-laki." },
      { arabic: "أُمِّي مُعَلِّمَةٌ", latin: "Ummī mu'allimah", meaning: "Ibu saya seorang guru." }
    ]
  },
  {
    id: "jamiah",
    title: "Kampus dan Pendidikan",
    arabic: "الجَامِعَةُ وَالتَّعْلِيمُ",
    level: "Menengah",
    duration: "20 menit",
    description: "Berbicara tentang kegiatan perkuliahan, mata kuliah, dosen, dan lingkungan kampus.",
    objectives: ["Menyebutkan fasilitas kampus", "Menceritakan jadwal kuliah", "Bertanya tentang mata kuliah"],
    phrases: [
      { arabic: "أَدْرُسُ اللُّغَةَ الْعَرَبِيَّةَ", latin: "Adrusu al-lughata al-'arabiyyah", meaning: "Saya belajar Bahasa Arab." },
      { arabic: "مَتَى يَبْدَأُ الدَّرْسُ؟", latin: "Matā yabda'u ad-darsu?", meaning: "Kapan pelajaran dimulai?" },
      { arabic: "أَيْنَ الْمَكْتَبَةُ؟", latin: "Aina al-maktabah?", meaning: "Di mana perpustakaan?" }
    ]
  },
  {
    id: "yaumiyyah",
    title: "Aktivitas Sehari-hari",
    arabic: "الأَنْشِطَةُ الْيَوْمِيَّةُ",
    level: "Menengah",
    duration: "20 menit",
    description: "Mendeskripsikan rutinitas dari pagi hingga malam.",
    objectives: ["Menyebutkan kegiatan harian", "Menggunakan keterangan waktu", "Menyusun cerita rutinitas sederhana"],
    phrases: [
      { arabic: "أَسْتَيْقِظُ فِي السَّاعَةِ الْخَامِسَةِ", latin: "Astaiqiẓu fis-sā'ati al-khāmisah", meaning: "Saya bangun pukul lima." },
      { arabic: "أَذْهَبُ إِلَى الْجَامِعَةِ", latin: "Adzhabu ilā al-jāmi'ah", meaning: "Saya pergi ke kampus." },
      { arabic: "أَقْرَأُ كِتَابًا فِي الْمَسَاءِ", latin: "Aqra'u kitāban fil-masā'", meaning: "Saya membaca buku pada sore/malam hari." }
    ]
  }
];
