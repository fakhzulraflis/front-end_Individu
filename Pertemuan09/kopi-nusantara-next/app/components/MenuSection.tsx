"use client";
import { useState, type AnimationEvent } from "react";
import Image from "next/image";
import {
  KATEGORI_LABEL,
  MENU_FILTERS,
  type Filter,
  type MenuItem,
} from "@/data/menu";

type FaseTampil = "tampil" | "muncul" | "menghilang" | "tersembunyi";

interface StatusSuka {
  disukai: boolean;
  jumlah: number;
}

interface MenuSectionProps {
  menu: MenuItem[];
}

function classFase(fase: FaseTampil): string {
  switch (fase) {
    case "muncul":
      return "is-muncul";
    case "menghilang":
      return "is-menghilang";
    case "tersembunyi":
      return "d-none";
    default:
      return "";
  }
}

export default function MenuSection({ menu }: MenuSectionProps) {
  const [filter, setFilter] = useState<Filter>("semua");

  const [fase, setFase] = useState<Record<string, FaseTampil>>(() =>
    Object.fromEntries(
      menu.map((item): [string, FaseTampil] => [item.id, "tampil"]),
    ),
  );

  const [suka, setSuka] = useState<Record<string, StatusSuka>>(() =>
    Object.fromEntries(
      menu.map((item): [string, StatusSuka] => [
        item.id,
        { disukai: false, jumlah: item.jumlahSuka },
      ]),
    ),
  );

  /* 1. Filter kategori  */
  function pilihFilter(kategori: Filter) {
    setFilter(kategori);

    setFase((sebelumnya) => {
      const berikutnya = { ...sebelumnya };

      for (const item of menu) {
        const cocok = kategori === "semua" || item.kategori === kategori;
        const faseSaatIni = sebelumnya[item.id];
        const sedangTampil = faseSaatIni === "tampil" || faseSaatIni === "muncul";

        if (cocok && !sedangTampil) {
          berikutnya[item.id] = "muncul"; // fadeIn()
        } else if (!cocok && sedangTampil) {
          berikutnya[item.id] = "menghilang"; // fadeOut()
        }
      }

      return berikutnya;
    });
  }

  function selesaiAnimasi(id: string, e: AnimationEvent<HTMLDivElement>) {
    if (e.target !== e.currentTarget) return;

    setFase((sebelumnya) => {
      const faseSaatIni = sebelumnya[id];
      if (faseSaatIni === "menghilang") {
        return { ...sebelumnya, [id]: "tersembunyi" };
      }
      if (faseSaatIni === "muncul") {
        return { ...sebelumnya, [id]: "tampil" };
      }
      return sebelumnya;
    });
  }

  /* 2. Tombol suka */
  function toggleSuka(id: string) {
    setSuka((sebelumnya) => {
      const statusSaatIni = sebelumnya[id];

      return {
        ...sebelumnya,
        [id]: statusSaatIni.disukai
          ? { disukai: false, jumlah: statusSaatIni.jumlah - 1 }
          : { disukai: true, jumlah: statusSaatIni.jumlah + 1 },
      };
    });
  }

  return (
    <section className="py-5" id="menu">
      <div className="container">
        <h2 className="fw-bold text-center mb-2">Menu Favorit Kami</h2>
        <p className="text-center text-muted mb-4">
          Empat pilihan yang paling sering dipesan pelanggan kami.
        </p>

        {/* Tombol filter kategori. Class .active menandai tombol yang dipilih */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4" id="menuFilter">
          {MENU_FILTERS.map((opsi) => {
            const aktif = filter === opsi.value;

            return (
              <button
                key={opsi.value}
                type="button"
                aria-pressed={aktif}
                className={`btn btn-outline-primary rounded-pill px-4 filter-btn${aktif ? " active" : ""}`}
                onClick={() => pilihFilter(opsi.value)}
              >
                {opsi.label}
              </button>
            );
          })}
        </div>

        { }
        <div className={`row g-4${filter === "panas" ? " justify-content-end" : ""}`} id="menuGrid">
          {menu.map((item) => {
            const status = suka[item.id];

            return (
              <div
                key={item.id}
                className={`col-12 col-md-6 col-lg-3 menu-item ${classFase(fase[item.id])}`}
                data-kategori={item.kategori}
                onAnimationEnd={(e) => selesaiAnimasi(item.id, e)}
              >
                {/* h-100 menyamakan tinggi semua kartu dalam satu baris */}
                <article className="card menu-card h-100 border-0 rounded-4 shadow-sm">
                  <Image
                    src={item.gambar}
                    alt={item.alt}
                    width={400}
                    height={300}
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 25vw"
                    className="card-img-top"
                  />
                  {/* card-body d-flex flex-column agar baris harga selalu di bawah (mt-auto) */}
                  <div className="card-body d-flex flex-column">
                    <span className="badge rounded-pill badge-kopi align-self-start mb-2">
                      {KATEGORI_LABEL[item.kategori]}
                    </span>
                    <h3 className="card-title h5 fw-bold">{item.nama}</h3>
                    <p className="card-text text-muted small">{item.deskripsi}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <span className="price fw-bold">{item.harga}</span>
                      <button
                        type="button"
                        className={`btn btn-sm rounded-pill like-btn${status.disukai ? " liked" : ""}`}
                        aria-label={`Sukai ${item.nama}`}
                        aria-pressed={status.disukai}
                        onClick={() => toggleSuka(item.id)}
                      >
                        <Image
                          className="heart"
                          src={status.disukai ? "/icons/heart-filled.svg" : "/icons/heart.svg"}
                          alt=""
                          width={16}
                          height={16}
                          aria-hidden="true"
                        />
                        <span className="like-count">{status.jumlah}</span>
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
