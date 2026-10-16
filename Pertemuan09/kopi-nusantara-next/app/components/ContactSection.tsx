"use client";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { validateContactForm, type ContactForm } from "@/lib/validate-contact";

const FORM_KOSONG: ContactForm = { nama: "", email: "", pesan: "" };

interface Feedback {
  teks: string;
  berhasil: boolean;
}

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>(FORM_KOSONG);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((sebelumnya) => ({ ...sebelumnya, [name as keyof ContactForm]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // cegah halaman memuat ulang

    const hasil = validateContactForm(form);
    setFeedback({ teks: hasil.pesan, berhasil: hasil.berhasil });

    // Kosongkan formulir setelah berhasil
    if (hasil.berhasil) {
      setForm(FORM_KOSONG);
    }
  }

  const feedbackClass = feedback
    ? ` is-visible ${feedback.berhasil ? "alert-success" : "alert-danger"}`
    : "";

  return (
    <section className="py-5" id="kontak">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-5">
            <h2 className="fw-bold mb-3">Hubungi &amp; Pesan</h2>
            <p className="text-muted">
              Isi formulir berikut, tim kami akan segera menghubungi Anda kembali.
            </p>
            <p className="mb-2">
              <strong>Alamat:</strong> Jl. Melati No. 12, Bandung
            </p>
            <p className="mb-2">
              <strong>WhatsApp:</strong> 0812-3456-7890
            </p>
            <p className="mb-0">
              <strong>Jam Buka:</strong> Setiap hari, 08.00 - 21.00
            </p>
          </div>

          <div className="col-12 col-lg-7">
            {/* bg-white p-4 rounded-4 shadow-sm = kotak formulir tanpa CSS kustom */}
            <form
              className="bg-white p-4 rounded-4 shadow-sm"
              id="contactForm"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="mb-3">
                <label htmlFor="nama" className="form-label fw-semibold">
                  Nama
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nama"
                  name="nama"
                  placeholder="Nama lengkap Anda"
                  value={form.nama}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="nama@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="pesan" className="form-label fw-semibold">
                  Pesan
                </label>
                <textarea
                  className="form-control"
                  id="pesan"
                  name="pesan"
                  rows={4}
                  placeholder="Tuliskan pesanan atau pertanyaan Anda"
                  value={form.pesan}
                  onChange={handleChange}
                  required
                />
                {/* form-text: teks bantuan kecil; jumlah karakter dihitung dari state */}
                <div className="form-text text-end" id="charCount">
                  {form.pesan.length} karakter
                </div>
              </div>

              {/* w-100: tombol selebar formulir */}
              <button type="submit" className="btn btn-primary w-100 rounded-pill">
                Kirim Pesan
              </button>

              { }
              <div
                className={`alert mt-3 mb-0 form-feedback${feedbackClass}`}
                id="formFeedback"
                role="alert"
                aria-live="polite"
              >
                {feedback?.teks}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
