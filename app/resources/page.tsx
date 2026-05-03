import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles, downloadResources } from "@/data/mockData";
import SectionHeader from "@/components/SectionHeader";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "資源中心",
  description:
    "I.P.E.I. 資源中心 — 環境教育文章、親子教學內容、可下載教材，支援你的環保行動。",
};

const categories = ["全部", "親子教育", "環境科學", "永續生活", "組織報告"];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-forest-900 to-forest-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=1400&q=80"
            alt="Resources"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label text-forest-300">資源中心</span>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-6 max-w-2xl">
            知識就是力量
            <br />
            <span className="text-forest-300">Resource Hub</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            精選環境教育文章、親子教學素材與可下載資源，
            支援你的親子環保（Family Eco）行動。
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60 C480 20 960 40 1440 10 L1440 60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
            <SectionHeader
              label="精選文章"
              title="環境教育知識庫"
              align="left"
              className="mb-0"
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`text-xs px-4 py-1.5 rounded-full border font-medium transition-colors ${
                    cat === "全部"
                      ? "bg-forest-600 border-forest-600 text-white"
                      : "border-gray-200 text-gray-600 hover:border-forest-400 hover:text-forest-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>

          <div className="text-center">
            <button className="btn-secondary">載入更多文章</button>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 bg-forest-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="免費下載"
            title="教材與工具包"
            description="所有資源均免費提供，歡迎親子家庭、學校教師、社區組織自由下載使用。"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {downloadResources.map((res) => (
              <div
                key={res.id}
                className="card p-6 flex items-start gap-5"
              >
                <div className="text-4xl flex-shrink-0">{res.icon}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base font-semibold text-gray-900 mb-0.5">
                    {res.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">{res.subtitle}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-600 rounded px-2 py-0.5">
                      {res.format}
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-600 rounded px-2 py-0.5">
                      {res.size}
                    </span>
                    {res.languages.map((lang) => (
                      <span key={lang} className="text-xs bg-forest-50 text-forest-700 rounded px-2 py-0.5">
                        {lang}
                      </span>
                    ))}
                  </div>
                  <button className="text-xs text-forest-600 font-semibold hover:text-forest-700 flex items-center gap-1.5 transition-colors">
                    ↓ 免費下載
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="影片教材"
            title="親子教學影片"
            description="由 I.P.E.I. 教育團隊製作的環境教育影片，適合家庭與課堂使用。"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "什麼是微塑膠？給孩子的科學解說",
                duration: "8:32",
                views: "24.6K",
                thumb: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&q=80",
              },
              {
                title: "第一次淨灘完全指南（親子版）",
                duration: "12:15",
                views: "38.2K",
                thumb: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=400&q=80",
              },
              {
                title: "在家就能做的 5 個零廢棄實驗",
                duration: "15:48",
                views: "19.1K",
                thumb: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=400&q=80",
              },
            ].map((video) => (
              <div key={video.title} className="card group cursor-pointer">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={video.thumb}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-forest-600 text-xl ml-0.5">▶</span>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-body font-semibold text-sm text-gray-900 leading-snug mb-1">
                    {video.title}
                  </h3>
                  <p className="text-xs text-gray-500">👁 {video.views} 次觀看</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="#"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              前往 YouTube 頻道
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-forest-600 to-forest-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl text-white mb-4">
            訂閱電子報，不錯過任何資源
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            每月收到最新環境教育文章、活動資訊與可下載教材。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/50 text-sm"
            />
            <button className="bg-white text-forest-700 font-semibold px-6 py-3.5 rounded-full hover:bg-forest-50 transition-colors text-sm whitespace-nowrap">
              立即訂閱
            </button>
          </div>
          <p className="text-white/40 text-xs mt-4">不發廣告信，隨時可取消訂閱。</p>
        </div>
      </section>
    </>
  );
}
