"use client";

import { useEffect, useRef } from "react";

const GOOGLE_SCRIPT =
  "https://news.google.com/swg/js/v1/publisher.js";

export default function GooglePreferredSource() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // Configura o elemento do Google somente no cliente,
    // depois que o React já terminou a hidratação.
    container.setAttribute(
      "google-add-preferred-source-btn",
      "true"
    );

    container.setAttribute("data-theme", "light");
    container.setAttribute("data-lang", "pt-BR");

    // Evita carregar o script mais de uma vez.
    const existingScript = document.querySelector(
      `script[src="${GOOGLE_SCRIPT}"]`
    );

    if (existingScript) return;

    const script = document.createElement("script");

    script.async = true;
    script.src = GOOGLE_SCRIPT;

    document.head.appendChild(script);

    return () => {
      // Não removemos o script do Google.
      // Isso evita problemas durante navegações do Next.js.
    };
  }, []);

  return (
    <div className="border-t border-[#EEE8E1] bg-[#F7F3EE] px-4 py-1.5">
      <div className="mx-auto flex min-w-0 max-w-7xl justify-center overflow-hidden">
        <div
          ref={containerRef}
          className="max-w-full overflow-hidden"
        />
      </div>
    </div>
  );
}