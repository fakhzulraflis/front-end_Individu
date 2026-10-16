export interface FaqItem {
  id: string; // dipakai sebagai id panel jawaban (aria-controls)
  pertanyaan: string;
  jawaban: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq1",
    pertanyaan: "Kopi Nusantara buka jam berapa?",
    jawaban:
      "Kami buka setiap hari pukul 08.00 sampai 21.00 WIB, termasuk pada hari libur nasional.",
  },
  {
    id: "faq2",
    pertanyaan: "Bagaimana cara memesan kopi?",
    jawaban:
      "Pemesanan dapat dilakukan melalui WhatsApp di 0812-3456-7890, atau dengan mengisi formulir pada bagian Hubungi & Pesan di halaman ini.",
  },
  {
    id: "faq3",
    pertanyaan: "Apakah kopi menggunakan biji lokal?",
    jawaban:
      "Ya. Seluruh menu kami diracik dari biji kopi lokal Indonesia seperti Gayo, Toraja, dan Kintamani, yang dibeli langsung dari petani.",
  },
  {
    id: "faq4",
    pertanyaan: "Apakah tersedia layanan antar?",
    jawaban:
      "Tersedia untuk wilayah Bandung dengan radius maksimal 5 km dari kedai. Pesanan di atas Rp 100.000 mendapatkan gratis ongkos kirim.",
  },
  {
    id: "faq5",
    pertanyaan: "Bisakah memesan kopi tanpa gula?",
    jawaban:
      "Bisa. Tingkat kemanisan setiap minuman dapat disesuaikan, mulai dari tanpa gula, sedikit gula, hingga normal. Cukup tuliskan permintaan Anda saat memesan.",
  },
];
