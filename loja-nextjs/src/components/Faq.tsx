"use client";

import { useState } from "react";
import type { FaqItem } from "@/types";

interface FaqProps {
  items: FaqItem[];
  title?: string;
}

/** Acordeão de FAQ acessível (teclado + ARIA). O Schema FAQPage é injetado na página. */
export default function Faq({ items, title = "Perguntas Frequentes" }: FaqProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-4" aria-label={title}>
      <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">{title}</h2>
      <dl className="mt-6 divide-y divide-stone-200 overflow-hidden rounded-2xl border border-stone-200 bg-white">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <dt>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-stone-900"
                >
                  <span className="text-base font-medium text-stone-800">{item.question}</span>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 text-stone-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </dt>
              <dd
                className={`grid overflow-hidden px-5 transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
                }`}
              >
                <p className="min-h-0 text-sm leading-relaxed text-stone-600">{item.answer}</p>
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
