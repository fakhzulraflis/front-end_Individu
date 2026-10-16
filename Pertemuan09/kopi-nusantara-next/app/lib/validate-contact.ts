
export interface ContactForm {
  nama: string;
  email: string;
  pesan: string;
}

export interface HasilValidasi {
  berhasil: boolean;
  pesan: string;
}

const POLA_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm({ nama, email, pesan }: ContactForm): HasilValidasi {
  const namaBersih = nama.trim();
  const emailBersih = email.trim();
  const pesanBersih = pesan.trim();

  if (!namaBersih || !emailBersih || !pesanBersih) {
    return {
      berhasil: false,
      pesan: "Mohon lengkapi semua kolom terlebih dahulu.",
    };
  }

  if (!POLA_EMAIL.test(emailBersih)) {
    return {
      berhasil: false,
      pesan: "Format email belum benar, contoh: nama@email.com",
    };
  }

  return {
    berhasil: true,
    pesan: `Terima kasih, ${namaBersih}! Pesan Anda sudah kami terima.`,
  };
}
