import Link from "next/link";
import Image from "next/image";

interface ProgramCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  href: string;
  highlights: string[];
  color?: "forest" | "ocean";
}

export default function ProgramCard({
  title,
  subtitle,
  description,
  icon,
  image,
  href,
  highlights,
  color = "forest",
}: ProgramCardProps) {
  const accent =
    color === "ocean"
      ? "text-ocean-600 bg-ocean-50 border-ocean-200"
      : "text-forest-600 bg-forest-50 border-forest-200";
  const btnClass = color === "ocean" ? "btn-ocean" : "btn-primary";

  return (
    <div className="card group flex flex-col">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute top-4 left-4 text-3xl">{icon}</span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-1">
          <span
            className={`inline-block text-xs font-mono font-medium tracking-widest uppercase px-2 py-0.5 rounded border ${accent}`}
          >
            {subtitle}
          </span>
        </div>
        <h3 className="font-display text-xl font-semibold text-gray-900 mt-2 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {highlights.map((h) => (
            <span
              key={h}
              className="text-xs text-gray-600 bg-gray-100 rounded-full px-3 py-1"
            >
              ✓ {h}
            </span>
          ))}
        </div>
        <Link href={href} className={`${btnClass} text-sm py-2.5 justify-center`}>
          了解更多
        </Link>
      </div>
    </div>
  );
}
