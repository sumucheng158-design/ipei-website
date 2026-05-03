import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
  tag: string;
}

export default function ArticleCard({
  title,
  category,
  readTime,
  date,
  excerpt,
  image,
  tag,
}: ArticleCardProps) {
  return (
    <div className="card group flex flex-col">
      <div className="relative h-44 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="bg-forest-600 text-white text-xs font-mono font-medium px-2.5 py-1 rounded-full">
            {tag}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <span>{category}</span>
          <span>·</span>
          <span>{readTime}閱讀</span>
          <span>·</span>
          <span>{date}</span>
        </div>
        <h3 className="font-display text-base font-semibold text-gray-900 leading-snug mb-2 group-hover:text-forest-700 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">{excerpt}</p>
        <Link
          href="/resources"
          className="mt-4 text-xs text-forest-600 font-semibold hover:text-forest-700 transition-colors flex items-center gap-1"
        >
          閱讀全文 →
        </Link>
      </div>
    </div>
  );
}
