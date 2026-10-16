"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const AMBANG_SCROLL = 300;

export default function BackToTop() {
  const [terlihat, setTerlihat] = useState(false);

  useEffect(() => {
    const perbaruiTampilan = () => {
      setTerlihat(window.scrollY > AMBANG_SCROLL);
    };

    // Cek sekali saat komponen dipasang (jika halaman dibuka dalam kondisi sudah di-scroll)
    perbaruiTampilan();
    window.addEventListener("scroll", perbaruiTampilan, { passive: true });

    return () => {
      window.removeEventListener("scroll", perbaruiTampilan);
    };
  }, []);

  return (
    <button
      id="backToTop"
      type="button"
      className={`btn back-to-top position-fixed bottom-0 end-0 m-3 m-lg-4 rounded-circle shadow${
        terlihat ? " is-visible" : ""
      }`}
      aria-label="Kembali ke atas"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <Image src="/icons/arrow-up.svg" alt="" width={18} height={18} aria-hidden="true" />
    </button>
  );
}
