import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { programs } from "@/data/mockData";
import SectionHeader from "@/components/SectionHeader";
import ProgramCard from "@/components/ProgramCard";

export const metadata: Metadata = {
  title: "活動項目",
  description:
    "I.P.E.I. 的核心行動計畫：親子淨灘、生態教育、國際合作與永續生活，共同守護地球生態。",
};

const globalPrograms = [
  {
    country: "🇹🇼 台灣",
    name: "海岸守護計畫",
    desc: "每月第三個週末定期淨灘，已清除逾 8 噸廢棄物",
  },
  {
    country: "🇯🇵 日本",
    name: "里海親子教室",
    desc: "結合傳統漁業文化的生態教育課程",
  },
  {
    country: "🇸🇬 新加坡",
    name: "城市綠生活",
    desc: "都市家庭零廢棄挑戰，參與家庭超過 1,200 戶",
  },
  {
    country: "🇰🇷 韓國",
    name: "濟州島生態守護",
    desc: "UNESCO 生物圈保護區親子志工計畫",
  },
  {
    country: "🇲🇽 墨西哥",
    name: "加勒比海珊瑚守護",
    desc: "與在地漁民家庭合作的珊瑚礁監測計畫",
  },
  {
    country: "🇦🇺 澳洲",
    name: "大堡礁教育行動",
    desc: "大堡礁海洋教育課程，觸及 5,000+ 名學生",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-ocean-950 to-ocean-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1400&q=80"
            alt="Programs"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label text-ocean-300">活動項目</span>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-6 max-w-2xl">
            核心行動計畫
            <br />
            <span className="text-ocean-300">Our Programs</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            從海灘到課堂，從在地到全球，I.P.E.I. 透過四大核心計畫推動環境保護（Environmental Protection）
            與親子教育，讓每個家庭都能成為地球的守護者。
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60 C480 20 960 40 1440 10 L1440 60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="四大計畫"
            title="我們的行動方向"
            description="每個計畫都以親子共同參與為核心，結合在地需求與國際視野。"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <ProgramCard
                key={program.id}
                {...program}
                color={program.color as "forest" | "ocean"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Beach Cleanup feature */}
      <section className="py-20 bg-ocean-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=700&q=80"
                alt="Beach Cleanup"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeader
                label="精選計畫"
                title="親子淨灘（Beach Cleanup）"
                description="我們最具代表性的旗艦計畫，每月在全球多個海灘同步舉辦。"
                align="left"
              />
              <div className="mt-6 space-y-3">
                {[
                  "全球 24 個據點同步進行",
                  "提供完整安全裝備與指引",
                  "活動後數據回報與公開",
                  "親子友善設計，3 歲以上均可參加",
                  "與在地社群深度合作",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-ocean-100 flex items-center justify-center text-ocean-600 text-xs flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <Link href="/programs/beach-cleanup" className="btn-ocean">
                  了解更多
                </Link>
                <Link href="/get-involved" className="btn-secondary">
                  立即報名
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="全球部署"
            title="世界各地的 I.P.E.I. 行動"
            description="我們的計畫遍及亞洲、大洋洲與美洲，每個在地計畫都融合當地文化與環境特色。"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {globalPrograms.map((prog) => (
              <div
                key={prog.country}
                className="card p-6 hover:border-ocean-200"
              >
                <div className="text-2xl mb-3">{prog.country.split(" ")[0]}</div>
                <div className="text-xs text-gray-500 mb-1">{prog.country.split(" ").slice(1).join(" ")}</div>
                <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                  {prog.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-forest-700 to-ocean-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl text-white mb-6">
            想在你的城市發起行動？
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            I.P.E.I. 提供完整的活動支援資源，協助在地家庭成立分支據點，
            將親子環保（Family Eco-Action）帶入你的社區。
          </p>
          <Link href="/get-involved" className="bg-white text-forest-700 hover:bg-forest-50 font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg">
            申請成立在地據點
          </Link>
        </div>
      </section>
    </>
  );
}
