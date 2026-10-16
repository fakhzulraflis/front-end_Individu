"use client";
import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#beranda", label: "Beranda" },
  { href: "#menu", label: "Menu" },
  { href: "#tentang", label: "Tentang Kami" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [menuTerbuka, setMenuTerbuka] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm">
      <div className="container">
        {/* Logo: d-flex + align-items-center + gap-2 sejajarkan ikon & teks */}
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#beranda">
          <span className="logo-icon rounded-circle d-flex align-items-center justify-content-center">
            <Image src="/icons/coffee-mark.svg" alt="" width={24} height={24} aria-hidden="true" />
          </span>
          <span>
            Kopi <span className="logo-accent">Nusantara</span>
          </span>
        </a>

        {/* Tombol hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navMenu"
          aria-expanded={menuTerbuka}
          aria-label="Buka menu navigasi"
          onClick={() => setMenuTerbuka((terbuka) => !terbuka)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Bagian menu yang disembunyikan/ditampilkan */}
        <div className={`collapse navbar-collapse${menuTerbuka ? " show" : ""}`} id="navMenu">
          {/* ms-auto mendorong menu ke kanan; text-center merapikan menu di mode mobile */}
          <ul className="navbar-nav ms-auto gap-lg-3 text-center py-2 py-lg-0">
            {NAV_LINKS.map((link) => (
              <li className="nav-item" key={link.href}>
                {/* Menutup menu mobile setelah link diklik*/}
                <a className="nav-link" href={link.href} onClick={() => setMenuTerbuka(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
