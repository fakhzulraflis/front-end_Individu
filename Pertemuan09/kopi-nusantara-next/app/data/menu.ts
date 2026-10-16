export type Kategori = "dingin" | "panas";

/* "semua" adalah opsi filter tambahan yang tidak disimpan di data menu */
export type Filter = "semua" | Kategori;

export interface MenuItem {
  id: string;
  nama: string;
  kategori: Kategori;
  gambar: string; // path di folder public/
  alt: string;
  deskripsi: string;
  harga: string;
  jumlahSuka: number; // jumlah suka awal
}

export const KATEGORI_LABEL: Record<Kategori, string> = {
  dingin: "Dingin",
  panas: "Panas",
};

export const MENU_FILTERS: { value: Filter; label: string }[] = [
  { value: "semua", label: "Semua" },
  { value: "dingin", label: "Dingin" },
  { value: "panas", label: "Panas" },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "es-kopi-kelapa",
    nama: "Es Kopi Kelapa",
    kategori: "dingin",
    gambar: "/images/es-kopi-kelapa.svg",
    alt: "Ilustrasi Es Kopi Kelapa",
    deskripsi:
      "Espresso segar berpadu dengan air kelapa muda asli dan sedikit gula aren.",
    harga: "Rp 22.000",
    jumlahSuka: 12,
  },
  {
    id: "kopi-susu-gula-aren",
    nama: "Kopi Susu Gula Aren",
    kategori: "dingin",
    gambar: "/images/kopi-susu-gula-aren.svg",
    alt: "Ilustrasi Kopi Susu Gula Aren",
    deskripsi:
      "Perpaduan klasik kopi robusta lokal, susu segar, dan gula aren asli.",
    harga: "Rp 20.000",
    jumlahSuka: 27,
  },
  {
    id: "americano",
    nama: "Americano",
    kategori: "panas",
    gambar: "/images/americano.svg",
    alt: "Ilustrasi Americano",
    deskripsi:
      "Espresso murni dengan air panas, cocok untuk penikmat kopi hitam.",
    harga: "Rp 18.000",
    jumlahSuka: 9,
  },
  {
    id: "cappuccino",
    nama: "Cappuccino",
    kategori: "panas",
    gambar: "/images/cappuccino.svg",
    alt: "Ilustrasi Cappuccino",
    deskripsi:
      "Espresso dengan foam susu lembut dan taburan bubuk cokelat.",
    harga: "Rp 24.000",
    jumlahSuka: 18,
  },
];
