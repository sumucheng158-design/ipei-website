import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  stats,
  programs,
  upcomingEvents,
  articles,
  testimonials,
  siteConfig,
} from "@/data/mockData";
import SectionHeader from "@/components/SectionHeader";
import ProgramCard from "@/components/ProgramCard";
import EventCard from "@/components/EventCard";
import ArticleCard from "@/components/ArticleCard";
import Icon, { type IconName } from "@/components/Icon";

/* ── Metadata (fix #1/#2) ── */
export const metadata: Metadata = {
  title: "攜手孩子，守護地球",
  description:
    "I.P.E.I. 國際親子生態倡議組織 — 推動親子淨灘、環境教育與永續生活。加入全球 12,000 個家庭志工，一起守護地球。",
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-forest-950 via-forest-900 to-ocean-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1600&q=80"
            alt="Beach cleanup hero"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
        </div>

        <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-forest-400/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-ocean-400/10 blur-3xl animate-float animate-delay-300" />

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/80 mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-forest-400 animate-pulse" />
              全球 {siteConfig.countries} 個國家共同守護地球
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-fade-up animate-delay-100">
              攜手孩子，
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-300 to-ocean-300">
                守護地球
              </span>
            </h1>

            <p className="text-white/70 text-xl leading-relaxed mb-4 animate-fade-up animate-delay-200">
              Together for a Greener Tomorrow
            </p>

            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl mb-10 animate-fade-up animate-delay-300">
              I.P.E.I. 是一個透過親子共同行動推動全球環境保護的國際倡議組織。
              從淨灘（Beach Cleanup）到環境教育（Environmental Education），
              我們相信改變從家庭開始。
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-400">
              <Link href="/get-involved" className="btn-primary text-base px-8 py-4">
                立即參與 →
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 font-body font-medium px-8 py-4 rounded-full transition-all duration-200"
              >
                了解組織
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80 C360 20 1080 60 1440 20 L1440 80 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────────── */}
      {/* Fix #9: color by semantic category, not index parity */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const isOcean = stat.iconKey === "waves" || stat.iconKey === "recycle";
              return (
                <div
                  key={stat.label}
                  className={`text-center p-6 rounded-2xl bg-gradient-to-br ${
                    isOcean
                      ? "from-ocean-50 to-ocean-100/50"
                      : "from-forest-50 to-forest-100/50"
                  }`}
                >
                  <div
                    className={`flex justify-center mb-3 ${
                      isOcean ? "text-ocean-500" : "text-forest-500"
                    }`}
                  >
                    <Icon name={stat.iconKey as IconName} className="w-8 h-8" />
                  </div>
                  <div
                    className={`font-display text-3xl md:text-4xl font-bold mb-1 ${
                      isOcean ? "text-ocean-700" : "text-forest-700"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm leading-snug">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── About intro ────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label="關於 I.P.E.I."
                title="讓每個家庭，成為改變地球的力量"
                description="我們相信，當親子攜手行動，環保不再只是口號，而是代代相傳的生活方式。I.P.E.I. 連結全球家庭，共同實踐可持續的未來。"
                align="left"
              />
              <div className="mt-8 space-y-4">
                {[
                  {
                    iconKey: "waves" as IconName,
                    color: "ocean",
                    title: "海洋守護（Ocean Protection）",
                    desc: "透過親子淨灘，直接改善海洋環境",
                  },
                  {
                    iconKey: "book" as IconName,
                    color: "forest",
                    title: "知識傳承（Education First）",
                    desc: "系統化環境教育，讓永續觀念從小扎根",
                  },
                  {
                    iconKey: "network" as IconName,
                    color: "ocean",
                    title: "全球連結（Global Network）",
                    desc: "跨國家庭志工網絡，共同發聲",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        item.color === "ocean"
                          ? "bg-ocean-100 text-ocean-600"
                          : "bg-forest-100 text-forest-600"
                      }`}
                    >
                      <Icon name={item.iconKey} className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-body font-semibold text-gray-800 text-sm">
                        {item.title}
                      </div>
                      <div className="text-gray-500 text-sm mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/about" className="btn-primary">
                  了解我們的故事
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&q=80"
                  alt="Family environmental action"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="font-display text-2xl font-bold text-forest-600">2018</div>
                <div className="text-xs text-gray-500">成立至今</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-forest-600 rounded-2xl shadow-xl p-4 text-white">
                <div className="font-display text-2xl font-bold">24</div>
                <div className="text-xs opacity-80">個國家夥伴</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Programs ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="活動項目"
            title="我們的核心行動計畫"
            description="從海灘到課堂，從在地到全球，I.P.E.I. 透過多元計畫推動環境保護與親子教育。"
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

      {/* ── Events ─────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-forest-50 to-ocean-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <SectionHeader
              label="即將舉辦"
              title="近期活動"
              description="立即報名，和全球親子一起行動！"
              align="left"
              className="mb-0"
            />
            <Link href="/get-involved" className="btn-secondary text-sm py-2.5 flex-shrink-0">
              查看全部活動
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────── */}
      {/* Fix #11: SVG quote mark */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="來自全球家庭"
            title="他們這樣說"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-forest-200 transition-colors duration-200 flex flex-col"
              >
                {/* SVG quote icon */}
                <svg
                  className="w-8 h-8 text-forest-200 mb-4 flex-shrink-0"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.5C7.5 11.515 8.932 10 11 10l-1-2zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6.5C21.5 11.515 22.932 10 25 10l-1-2z" />
                </svg>
                <p className="text-gray-700 leading-relaxed text-sm mb-6 flex-1">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-forest-400 to-ocean-400 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-body font-semibold text-gray-800 text-sm">
                      {t.author}
                    </div>
                    <div className="text-gray-500 text-xs flex items-center gap-1">
                      {t.country} {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Articles ───────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <SectionHeader
              label="資源中心"
              title="精選文章與教材"
              align="left"
              className="mb-0"
            />
            <Link href="/resources" className="btn-secondary text-sm py-2.5 flex-shrink-0">
              查看全部資源
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {articles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-forest-700 via-forest-800 to-ocean-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            準備好帶著孩子，
            <br />
            守護我們的地球了嗎？
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            加入全球 {siteConfig.volunteers.toLocaleString()} 個親子志工家庭，一起成為地球改變的力量。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/get-involved"
              className="bg-white text-forest-700 hover:bg-forest-50 font-body font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              成為志工（Volunteer）
            </Link>
            <Link
              href="/get-involved"
              className="border border-white/40 text-white hover:bg-white/10 font-body font-medium px-8 py-4 rounded-full transition-all duration-200"
            >
              捐款支持（Donate）
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
