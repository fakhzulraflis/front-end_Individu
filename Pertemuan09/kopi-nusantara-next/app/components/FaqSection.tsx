"use client";
import { useState } from "react";
import type { FaqItem } from "@/data/faq";

interface FaqSectionProps {
  faq: FaqItem[];
}

export default function FaqSection({ faq }: FaqSectionProps) {
  const [idTerbuka, setIdTerbuka] = useState<string | null>(null);

  return (
    <section className="py-5" id="faq">
      <div className="container">
        <h2 className="fw-bold text-center mb-2">Pertanyaan yang Sering Diajukan</h2>
        <p className="text-center text-muted mb-4">
          Klik salah satu pertanyaan untuk melihat jawabannya.
        </p>

        {/* mx-auto menengahkan accordion yang lebarnya dibatasi di globals.css */}
        <div className="accordion faq-accordion mx-auto shadow-sm" id="faqAccordion">
          {faq.map((item) => {
            const terbuka = idTerbuka === item.id;

            return (
              <div className="accordion-item" key={item.id}>
                <h3 className="accordion-header">
                  <button
                    className={`accordion-button${terbuka ? "" : " collapsed"}`}
                    type="button"
                    aria-expanded={terbuka}
                    aria-controls={item.id}
                    onClick={() => setIdTerbuka(terbuka ? null : item.id)}
                  >
                    {item.pertanyaan}
                  </button>
                </h3>
                <div
                  id={item.id}
                  className={`accordion-collapse collapse${terbuka ? " show" : ""}`}
                >
                  <div className="accordion-body">{item.jawaban}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
