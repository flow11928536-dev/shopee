import { isValidElement } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Paleta consistente com o resto do site
const FONT_DISPLAY =
  "Georgia, 'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', serif";
const FONT_MONO =
  "'SFMono-Regular', Menlo, Consolas, 'Liberation Mono', monospace";
const INK = "#221D17";
const BRASS = "#9C7A3C";
const SAGE = "#4B5D4C";
const SURFACE = "#F5F2EA";
const BORDER = "#DCD3BE";

function StrongTag({ children }: { children?: React.ReactNode }) {
  return (
    <strong className="font-semibold" style={{ color: INK }}>
      {children}
    </strong>
  );
}

export default function ProductDescription({ content }: { content: string }) {
  if (!content) return null;

  return (
    <div className="space-y-1">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // O h1 duplicaria o título do produto, que já aparece acima — não renderiza.
          h1: () => null,

          h2: ({ children }) => (
            <h2
              className="mb-3 mt-9 text-lg italic first:mt-0 sm:text-2xl"
              style={{
                fontFamily: FONT_DISPLAY,
                color: INK,
                borderTop: `1px solid ${BORDER}`,
                paddingTop: "1.75rem",
              }}
            >
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="mb-2 mt-6 text-sm font-semibold uppercase tracking-wide" style={{ fontFamily: FONT_MONO, color: BRASS }}>
              {children}
            </h3>
          ),

          strong: StrongTag,

          p: ({ children }) => {
            const arr = Array.isArray(children) ? children : [children];

            // Linhas de benefício que começam com ✅ viram uma linha com selo de check
            if (typeof arr[0] === "string" && arr[0].trimStart().startsWith("✅")) {
              const stripped = arr[0].replace(/^\s*✅\s*/, "");
              return (
                <div className="flex items-start gap-2 py-1 text-sm text-stone-600">
                  <span
                    className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] text-white"
                    style={{ backgroundColor: SAGE }}
                  >
                    ✓
                  </span>
                  <span>
                    {stripped}
                    {arr.slice(1)}
                  </span>
                </div>
              );
            }

            // Parágrafo que é só uma linha em negrito (ex: pergunta de FAQ) vira subtítulo
            if (arr.length === 1 && isValidElement(arr[0]) && arr[0].type === StrongTag) {
              return (
                <p className="mb-1 mt-4 text-sm font-semibold" style={{ color: INK }}>
                  {(arr[0] as React.ReactElement<{ children?: React.ReactNode }>).props.children}
                </p>
              );
            }

            return <p className="mb-3 text-sm leading-relaxed text-stone-600">{children}</p>;
          },

          ul: ({ children }) => <ul className="mb-4 space-y-1.5">{children}</ul>,
          ol: ({ children }) => <ol className="mb-4 space-y-1.5">{children}</ol>,
          li: ({ children }) => (
            <li className="flex gap-2 text-sm leading-relaxed text-stone-600">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: BRASS }} />
              <span>{children}</span>
            </li>
          ),

          table: ({ children }) => (
            <div className="mb-4 overflow-x-auto rounded-xl" style={{ border: `1px solid ${BORDER}` }}>
              <table className="w-full border-collapse text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead style={{ backgroundColor: SURFACE }}>{children}</thead>,
          th: ({ children }) => (
            <th
              className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide"
              style={{ color: "#7A6B4E", fontFamily: FONT_MONO, borderBottom: `1px solid ${BORDER}` }}
            >
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-3 py-2 text-stone-600" style={{ borderBottom: `1px solid ${BORDER}` }}>
              {children}
            </td>
          ),

          hr: () => <hr className="my-6" style={{ borderColor: BORDER }} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}