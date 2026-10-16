import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.main}>
        <div className={styles.intro}>
          <h1>
            Nama: FAKHZUL RAFLI S
            <br />NIM: 535250102
          </h1>
          <p>
            This is my first individual project of Kopi Nusantara using <br /> NEXT.JS
          </p>
        </div>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="/beranda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/icons/home.svg"
              alt=""
              width={16}
              height={14}
              aria-hidden="true"
            />
            Go to Project
          </a>
        </div>
      </section>
    </main>
  );
}
