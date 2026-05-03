import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";

interface EventCardProps {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  countryFlag: string;
  spots: number;
  spotsLeft: number;
  image: string;
}

export default function EventCard({
  title,
  subtitle,
  date,
  location,
  countryFlag,
  spots,
  spotsLeft,
  image,
}: EventCardProps) {
  const percentage = Math.round(((spots - spotsLeft) / spots) * 100);

  /* Fix #18: consistent date formatting */
  const dateObj = new Date(date);
  const month = dateObj.toLocaleDateString("zh-TW", { month: "short", timeZone: "UTC" });
  const day = dateObj.getUTCDate();

  return (
    <div className="card group flex flex-col sm:flex-row overflow-hidden">
      <div className="relative h-40 sm:h-auto sm:w-36 flex-shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, 144px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent" />
        <div className="absolute top-3 left-3 bg-white rounded-xl px-2.5 py-1.5 text-center shadow-sm min-w-[44px]">
          <div className="text-forest-600 font-mono text-xs font-semibold uppercase">
            {month}
          </div>
          <div className="text-gray-900 font-display text-xl font-bold leading-none">
            {day}
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="mb-1">
          <h3 className="font-display text-base font-semibold text-gray-900 leading-snug">
            {title}
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>
        </div>

        {/* Fix #10: integrate flag into location row instead of floating alone */}
        <p className="text-sm text-gray-500 flex items-center gap-1.5 mt-2 mb-3">
          <Icon name="pin" className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <span className="text-base leading-none">{countryFlag}</span>
          {location}
        </p>

        <div className="mt-auto">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
            <span>報名狀況</span>
            <span className="text-forest-600 font-semibold">
              剩餘 {spotsLeft} 名額
            </span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-forest-400 to-forest-600 rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        <Link
          href="/get-involved"
          className="mt-3 text-xs text-forest-600 font-semibold hover:text-forest-700 transition-colors flex items-center gap-1"
        >
          立即報名 →
        </Link>
      </div>
    </div>
  );
}
