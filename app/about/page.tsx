import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, stats, teamMembers } from "@/data/mockData";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "關於我們",
  description:
    "認識 I.P.E.I. 國際親子生態倡議組織 — 我們的使命、願景、核心價值，以及推動全球親子環保行動的故事。",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-forest-950 to-forest-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1400&q=80"
            alt="About IPEI"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label text-forest-300">關於我們</span>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-6 max-w-2xl">
            我們是誰
            <br />
            <span className="text-forest-300">About I.P.E.I.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            {siteConfig.description}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60 C480 20 960 40 1440 10 L1440 60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label="組織故事"
                title="從一片沙灘，開始的全球行動"
                align="left"
              />
              <div className="space-y-4 mt-6 text-gray-600 leading-relaxed">
                <p>
                  2018 年，創辦人林雅婷帶著女兒在台灣淡水海灘撿垃圾時，遇見了來自日本的田中誠一一家。
                  兩個家庭共同清理了超過 40 公斤的海洋廢棄物（Marine Debris），
                  這次相遇讓她們意識到：親子共同的環保行動，擁有改變世界的力量。
                </p>
                <p>
                  這個小小的起點，成為 I.P.E.I.（International Parent-child Eco Initiative）
                  的誕生故事。七年後，我們已連結了全球 {siteConfig.countries} 個國家、
                  超過 {siteConfig.volunteers.toLocaleString()} 個家庭志工，
                  共同舉辦逾 {siteConfig.events} 場環保行動。
                </p>
                <p>
                  我們相信，永續發展（Sustainability）不是政府或企業單獨的責任，
                  而是每一個家庭日常選擇的累積。當父母與孩子並肩行動，
                  環保教育（Environmental Education）才能真正走入心靈，世代傳承。
                </p>
              </div>
            </div>
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1578496479932-143c8f2e2264?w=700&q=80"
                alt="IPEI founders story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="核心理念"
            title="使命・願景・價值觀"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                en: "Mission",
                zh: "使命",
                color: "forest",
                content:
                  "透過親子共同參與，推動海洋保護、環境教育與永續生活，建立跨越國界的家庭環保行動網絡，讓每個世代都能享受美麗的地球。",
              },
              {
                icon: "🌟",
                en: "Vision",
                zh: "願景",
                color: "ocean",
                content:
                  "我們期許在 2030 年前，將親子環保（Family Eco-Action）理念融入全球 100 個國家的家庭文化，讓「守護地球」成為跨代際的共同語言。",
              },
              {
                icon: "💎",
                en: "Values",
                zh: "價值觀",
                color: "sand",
                content:
                  "共融（Inclusion）· 行動（Action）· 教育（Education）· 永續（Sustainability）· 連結（Connection）。我們以這五個核心價值引導每一個決策與行動。",
              },
            ].map((item) => (
              <div
                key={item.en}
                className={`rounded-2xl p-8 border-2 ${
                  item.color === "forest"
                    ? "bg-forest-50 border-forest-200"
                    : item.color === "ocean"
                    ? "bg-ocean-50 border-ocean-200"
                    : "bg-sand-50 border-sand-200"
                }`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="flex items-baseline gap-2 mb-3">
                  <h3 className="font-display text-2xl text-gray-900">{item.zh}</h3>
                  <span
                    className={`text-xs font-mono font-medium tracking-widest uppercase ${
                      item.color === "forest"
                        ? "text-forest-600"
                        : item.color === "ocean"
                        ? "text-ocean-600"
                        : "text-sand-600"
                    }`}
                  >
                    {item.en}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="成果數據"
            title="七年來，我們共同創造的改變"
            className="mb-14"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div
                  className={`font-display text-4xl md:text-5xl font-bold mb-2 ${
                    i % 2 === 0 ? "text-forest-600" : "text-ocean-600"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="核心團隊"
            title="推動 I.P.E.I. 的人們"
            description="來自不同國家與背景的專業夥伴，以共同的環保熱忱凝聚在一起。"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="card p-6 text-center">
                <div
                  className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-display text-xl font-semibold ${
                    member.color === "forest"
                      ? "bg-gradient-to-br from-forest-400 to-forest-600"
                      : member.color === "ocean"
                      ? "bg-gradient-to-br from-ocean-400 to-ocean-600"
                      : "bg-gradient-to-br from-sand-400 to-sand-600"
                  }`}
                >
                  {member.avatar}
                </div>
                <h3 className="font-display text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-xs text-gray-500 mb-1">{member.nameEn}</p>
                <p className="text-xs font-semibold text-forest-600 mb-1">{member.role}</p>
                <p className="text-xs text-gray-500 mb-3">
                  {member.roleEn} · {member.country}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Position */}
      <section className="py-20 bg-gradient-to-br from-ocean-900 to-forest-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <span className="section-label text-ocean-300">國際定位</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            植根亞洲，放眼全球
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            I.P.E.I. 以亞太地區為核心出發，與聯合國永續發展目標（UN SDGs）
            緊密連結，特別聚焦於目標 14（海洋生態，Life Below Water）
            與目標 4（優質教育，Quality Education）。
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["聯合國 SDG 14", "聯合國 SDG 4", "亞太環保夥伴網絡", "ISO 認證組織"].map((badge) => (
              <span key={badge} className="bg-white/10 border border-white/20 text-white/80 text-sm rounded-full px-4 py-1.5">
                {badge}
              </span>
            ))}
          </div>
          <Link href="/get-involved" className="bg-white text-forest-700 hover:bg-forest-50 font-body font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg">
            加入全球網絡
          </Link>
        </div>
      </section>
    </>
  );
}
