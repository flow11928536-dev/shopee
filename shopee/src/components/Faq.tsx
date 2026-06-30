"use client";

import { useState } from "react";
import type { FaqItem } from "@/types";

interface FaqProps {
  items: FaqItem[];
  title?: string;
  defaultOpen?: number | null; // índice do item aberto por padrão (null = todos fechados)
}

/**
 * Acordeão de FAQ acessível (teclado + ARIA).
 * O Schema FAQPage deve ser injetado na página pai (ex: /guias, /categoria).
 */
export default function Faq({
  items,
  title = "Perguntas Frequentes",
  defaultOpen = 0,
}: FaqProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  if (items.length === 0) return null;

  return (
    <section
      className="py-4"
      aria-labelledby="faq-title"
    >
      <h2
        id="faq-title"
        className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl"
      >
        {title}
      </h2>

      <dl className="mt-6 divide-y divide-stone-200 overflow-hidden rounded-2xl border border-stone-200 bg-white">
        {items.map((item, index) => {
          const isOpen = open === index;
          const buttonId = `faq-button-${index}`;
          const panelId = `faq-panel-${index}`;

          return (
            <div key={index}>
              <dt>
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-stone-900"
                >
                  <span className="text-base font-medium text-stone-800">
                    {item.question}
                  </span>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 text-stone-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      d="M5 8l5 5 5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </dt>

              <dd
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid overflow-hidden transition-all duration-300 ease-out will-change-[grid-template-rows] ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0 px-5 pb-4">
                  <p className="text-sm leading-relaxed text-stone-600">
                    {item.answer}
                  </p>
                </div>
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}