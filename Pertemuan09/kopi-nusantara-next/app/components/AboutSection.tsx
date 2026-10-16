import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="about-section py-5" id="tentang">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-5 col-lg-4 text-center">
            <Image
              src="/images/biji-kopi.svg"
              alt="Ilustrasi biji kopi Nusantara"
              width={520}
              height={520}
              sizes="260px"
              className="img-fluid rounded-4 shadow-sm about-img"
            />
          </div>

          <div className="col-12 col-md-7 col-lg-8">
            <h2 className="fw-bold mb-3">Tentang Kopi Nusantara</h2>
            <p className="text-muted mb-4">
              Berawal dari dapur rumahan di tahun 2019, Kopi Nusantara tumbuh dari
              kecintaan terhadap biji kopi lokal Indonesia - dari Gayo, Toraja, hingga
              Kintamani. Kami percaya secangkir kopi terbaik lahir dari proses yang
              jujur dan bahan yang berkualitas.
            </p>
            {/* list-unstyled menghapus bullet bawaan; d-flex + gap-2 menyejajarkan ikon & teks */}
            <ul className="list-unstyled mb-0">
              <li className="d-flex align-items-center gap-2 mb-2">
                <Image src="/icons/leaf.svg" alt="" width={22} height={22} aria-hidden="true" />
                Biji kopi pilihan langsung dari petani lokal
              </li>
              <li className="d-flex align-items-center gap-2 mb-2">
                <Image src="/icons/home.svg" alt="" width={22} height={22} aria-hidden="true" />
                Diseduh segar setiap hari di dapur rumahan kami
              </li>
              <li className="d-flex align-items-center gap-2">
                <Image src="/icons/mobile.svg" alt="" width={22} height={22} aria-hidden="true" />
                Bisa dipesan kapan saja lewat WhatsApp
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
