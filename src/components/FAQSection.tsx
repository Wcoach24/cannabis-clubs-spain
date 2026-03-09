"use client";

import { useState } from "react";
import { FAQSchema } from "./SchemaMarkup";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQ[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16">
      <FAQSchema items={faqs} />
      <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-bold mb-8 text-center">
        {title}
      </h2>
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-[var(--color-border)] rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-[var(--color-bg-secondary)] transition-colors"
            >
              <span className="font-semibold text-[var(--color-text-primary)]">
                {faq.question}
              </span>
              <span className="text-[var(--color-text-muted)] flex-shrink-0 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-[var(--color-text-secondary)] leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
