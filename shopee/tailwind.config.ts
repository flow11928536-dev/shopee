import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "Rajdhani", "ui-sans-serif", "sans-serif"], // NOVA FONTE GAMER
      },
      colors: {
        // Paleta premium extraída do seu código (estilo Kappesberg)
        ink: "#0F0E0D",        // Preto quente para botões e textos escuros
        charcoal: "#1E1B18",   // Preto suave para textos principais
        gold: "#A9701F",       // Dourado/Bronze para destaques e hovers
        champagne: "#C5A880",  // Dourado claro para detalhes finos
        cream: "#FAF8F5",     // Fundo creme do site
        sand: "#F4F1EC",       // Fundo de seções alternadas
      },
      boxShadow: {
        // Sombras suaves para os cards de produto
        card: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)",
        cardHover: "0 12px 40px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)",
      },
      keyframes: {
        // Animação usada no seu page.tsx
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(15px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        // Classe para usar no HTML: animate-fade-up
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
