export type Vocabulary = { id: number; arabic: string; latin: string; meaning: string; category: string };

export const vocabulary: Vocabulary[] = [
  { id: 1, arabic: "كِتَابٌ", latin: "Kitābun", meaning: "Buku", category: "Kampus" },
  { id: 2, arabic: "قَلَمٌ", latin: "Qalamun", meaning: "Pulpen", category: "Kampus" },
  { id: 3, arabic: "جَامِعَةٌ", latin: "Jāmi'atun", meaning: "Universitas", category: "Kampus" },
  { id: 4, arabic: "مُعَلِّمٌ", latin: "Mu'allimun", meaning: "Guru laki-laki", category: "Profesi" },
  { id: 5, arabic: "طَالِبٌ", latin: "Ṭālibun", meaning: "Siswa/mahasiswa laki-laki", category: "Profesi" },
  { id: 6, arabic: "أُسْرَةٌ", latin: "Usratun", meaning: "Keluarga", category: "Keluarga" },
  { id: 7, arabic: "أَبٌ", latin: "Abun", meaning: "Ayah", category: "Keluarga" },
  { id: 8, arabic: "أُمٌّ", latin: "Ummun", meaning: "Ibu", category: "Keluarga" },
  { id: 9, arabic: "مَاءٌ", latin: "Mā'un", meaning: "Air", category: "Sehari-hari" },
  { id: 10, arabic: "طَعَامٌ", latin: "Ṭa'āmun", meaning: "Makanan", category: "Sehari-hari" },
  { id: 11, arabic: "سُوقٌ", latin: "Sūqun", meaning: "Pasar", category: "Tempat" },
  { id: 12, arabic: "مَطْعَمٌ", latin: "Maṭ'amun", meaning: "Restoran", category: "Tempat" }
];
