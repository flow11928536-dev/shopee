import Image from "next/image";
import Link from "next/link";

const hero = {
  image: "/banners/cozinhas-barata-promocao.webp",
  imageMobile: "/banners/banner-mobile-loja-de-moveis-01.avif",
  alt: "Móveis de alto padrão pelo melhor preço",
  title: "Móveis de alto padrão pelo melhor preço",
  href: "/categoria/cozinhas",
};

export default function HeroSlider() {
  return (
    <section
      className="relative w-full overflow-hidden bg-stone-950"
      aria-label="Destaque de ofertas"
    >
      <Link
        href={hero.href}
        aria-label={`${hero.title}. Ver cozinhas`}
        className="group relative block aspect-[1920/415] min-h-[220px] w-full sm:min-h-[260px] md:max-h-[340px]"
      >
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={hero.imageMobile}
          />

          <Image
            src={hero.image}
            alt={hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </picture>

        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/10" />

        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-10">
          <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-[#1E1B18] shadow-lg transition group-hover:bg-[#C5A880] sm:px-5 sm:py-2.5 sm:text-xs">
            Ver cozinhas →
          </span>
        </div>
      </Link>
    </section>
  );
}
