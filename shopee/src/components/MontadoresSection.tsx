// src/components/MontadoresSection.tsx
import { Montador } from "@/data/montadores";
import MontadorCard from "@/components/MontadorCard";

interface Props {
  montadores: Montador[];
  cidadeSlug: string;
}

export default function MontadoresSection({ montadores, cidadeSlug }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {montadores.map((montador) => (
        <MontadorCard
          key={montador.slug}
          montador={montador}
          cidadeSlug={cidadeSlug}
        />
      ))}
    </div>
  );
}