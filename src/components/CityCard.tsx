import Image from "next/image";
import Link from "next/link";

interface CityCardProps {
  name: string;
  href: string;
  image: string;
  description: string;
  badge?: string;
}

export default function CityCard({ name, href, image, description, badge }: CityCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
        <Image
          src={image}
          alt={`Cannabis clubs in ${name}, Spain`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {badge && (
          <span className="absolute top-3 right-3 px-3 py-1 bg-[var(--color-gold)] text-[var(--color-forest-dark)] text-xs font-bold rounded-full">
            {badge}
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-bold text-white group-hover:text-[var(--color-gold)] transition-colors">
            {name}
          </h3>
        </div>
      </div>
      <p className="text-sm text-[var(--color-text-muted)] line-clamp-2">{description}</p>
    </Link>
  );
}
