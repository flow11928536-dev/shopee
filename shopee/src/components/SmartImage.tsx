import Image from "next/image";
import { cn } from "@/utils/cn";

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  aspect?: string;
}

export default function SmartImage({
  src,
  alt,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw",
  aspect = "4 / 3",
}: SmartImageProps) {
  const isExternal =
    src.startsWith("http://") || src.startsWith("https://");

  return (
    <div
      className="relative w-full overflow-hidden bg-white"
      style={{ aspectRatio: aspect }}
    >
      {isExternal ? (
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className={cn("h-full w-full object-contain", className)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={85}
          placeholder="empty"
          sizes={sizes}
          className={cn("object-contain", className)}
        />
      )}
    </div>
  );
}