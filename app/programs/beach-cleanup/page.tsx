import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import Icon, { type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "親子淨灘",
  description:
    "I.P.E.I. 親子淨灘（Beach Cleanup）計畫 — 活動介紹、如何參加、安全說明，帶著孩子一起守護海洋。",
};

const steps = [
  {
    step: "01",
    title: "線上報名",
    desc: "透過活動頁面選擇離你最近的淨灘日期與地點，完成報名登記。",
  },
  {
    step: "02",
    title: "確認通知",
    desc: "報名後24小時內將收到確認郵件，內含集合地點、時間與攜帶物品清單。",
  },
  {
    step: "03",
    title: "活動當天",
    desc: "提前10分鐘抵達集合點，現場將發放手套、垃圾袋等裝備，並進行安全說明。",
  },
  {
    step: "04",
    title: "分類回收",
    desc: "撿拾結束後協助進行垃圾分類，並填寫數據回報表，讓每次行動都有跡可循。",
  },
  {
    step: "05",
    title: "分享影響力",
    desc: "活動後將收到電子證書與數據報告，歡迎在社群分享，感召更多家庭加入！",
  },
];

/* All emoji replaced with SVG iconKey */
const safetyRules: Array<{ iconKey: IconName; title: string; desc: string }> = [
  {
    iconKey: "sun",
    title: "防曬防暑",
    desc: "活動期間請塗抹防曬乳（SPF 30 以上），戴帽子，並補充足夠水分。",
  },
  {
    iconKey: "glove",
    title: "必戴手套",
    desc: "現場提供手套，全程請戴手套撿拾，避免直接接觸廢棄物。",
  },
  {
    iconKey: "shoe",
    title: "穿著適當",
    desc: "建議穿著包趾鞋或防水涼鞋，避免赤腳踩踏海灘上的尖銳物。",
  },
  {
    iconKey: "noEntry",
    title: "不撿危險物",
    desc: "如遇注射針頭、化學品等危險物品，請立即告知現場工作人員，勿自行處理。",
  },
  {
    iconKey: "child",
    title: "兒童陪同",
    desc: "12 歲以下兒童須全程由家長陪同，活動全程請牽好孩子的手。",
  },
  {
    iconKey: "phone",
    title: "緊急聯絡",
    desc: "請將現場工作人員聯絡電話存入手機，如有任何緊急狀況立即聯繫。",
  },
];

export default function BeachCleanupPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-ocean-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=1600&q=80"
            alt="Beach cleanup"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="animate-wave">
            <svg viewBox="0 0 1440 100" fill="none">
              <path
                d="M0 50 C240 80 480 20 720 50 C960 80 1200 20 1440 50 L1440 100 L0 100 Z"
                fill="rgba(255,255,255,0.05)"
              />
            </svg>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-ocean-300 text-sm mb-4">
            <Link href="/programs" className="hover:text-white transition-colors">
              活動項目
            </Link>
            <span>/</span>
            <span className="text-white">親子淨灘</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-6 max-w-2xl">
            親子淨灘
            <br />
            <span className="text-ocean-300">Beach Cleanup</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-8">
            每一片被撿起的垃圾，都是對孩子未來的承諾。
            加入全球數千個親子志工家庭，讓海洋重拾清澈。
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/get-involved" className="btn-ocean">
              立即報名活動
            </Link>
            <a
              href="#how-to-join"
              className="border border-white/30 text-white hover:bg-white/10 font-medium px-6 py-3 rounded-full transition-all duration-200"
            >
              了解如何參加
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60 C480 20 960 40 1440 10 L1440 60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label="計畫介紹"
                title="為什麼淨灘如此重要？"
                align="left"
              />
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  全球每年有超過{" "}
                  <strong className="text-ocean-600">800 萬噸</strong> 的塑膠垃圾進入海洋，
                  相當於每分鐘傾倒一輛垃圾車的廢棄物。這些垃圾不僅威脅海洋生物，
                  更透過食物鏈最終影響人類的健康。
                </p>
                <p>
                  I.P.E.I. 的親子淨灘計畫（Beach Cleanup Program）不只是撿垃圾的行動，
                  更是一堂生動的環境教育課（Environmental Education）。
                  當孩子親眼見到海灘上的廢棄物，並親手清理，這份記憶將成為他們
                  一生守護地球的動力。
                </p>
                <p>
                  我們與在地社群、學校、企業合作，提供完整的活動規劃與支援，
                  確保每次淨灘都安全、有趣，並留下可量化的環境影響數據。
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: "58 噸", label: "清除廢棄物" },
                  { value: "220+", label: "場次活動" },
                  { value: "8,000+", label: "親子志工" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 bg-ocean-50 rounded-2xl">
                    <div className="font-display text-2xl font-bold text-ocean-600">
                      {s.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-52 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80"
                    alt="Beach cleanup 1"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-36 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=400&q=80"
                    alt="Beach cleanup 2"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative h-36 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&q=80"
                    alt="Beach cleanup 3"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-52 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&q=80"
                    alt="Beach cleanup 4"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section id="how-to-join" className="py-20 bg-ocean-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="參與指南"
            title="如何加入淨灘活動？"
            description="從報名到完成活動，簡單五步驟，讓親子一同展開海洋守護行動。"
            className="mb-14"
          />
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-ocean-200 hidden md:block" />
            <div className="space-y-6">
              {steps.map((s) => (
                <div key={s.step} className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-ocean-600 text-white font-mono font-semibold flex items-center justify-center flex-shrink-0 shadow-lg z-10">
                    {s.step}
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-ocean-100">
                    <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/get-involved" className="btn-ocean text-base px-8 py-4">
              立即報名最近的淨灘活動
            </Link>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="安全第一"
            title="活動安全說明"
            description="參與者的安全是我們最重要的責任。請在活動前仔細閱讀以下安全守則（Safety Guidelines）。"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyRules.map((rule) => (
              <div
                key={rule.title}
                className="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:border-ocean-200 hover:bg-ocean-50 transition-all duration-200"
              >
                {/* SVG icon replaces emoji */}
                <div className="w-10 h-10 rounded-xl bg-ocean-100 text-ocean-600 flex items-center justify-center mb-3">
                  <Icon name={rule.iconKey} className="w-5 h-5" />
                </div>
                <h3 className="font-body font-semibold text-gray-900 mb-2">{rule.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{rule.desc}</p>
              </div>
            ))}
          </div>

          {/* ⚠️ replaced with SVG shield icon */}
          <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Icon name="shield" className="w-4 h-4" />
            </div>
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>重要提醒：</strong> 惡劣天氣（颱風、大浪、雷雨）時活動將取消或延期，
              屆時將提前通知報名者。健康狀況不佳者請勿強行參加。懷孕婦女請與工作人員確認參與事宜。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-ocean-800 to-ocean-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl text-white mb-6">
            每片海洋，都值得被守護
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            帶著你的孩子，加入我們下一次的淨灘行動。
            一個家庭的小步伐，匯聚成守護海洋的巨大力量。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/get-involved"
              className="bg-white text-ocean-700 hover:bg-ocean-50 font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg"
            >
              報名淨灘活動
            </Link>
            <Link
              href="/resources"
              className="border border-white/30 text-white hover:bg-white/10 font-medium px-8 py-4 rounded-full transition-all duration-200"
            >
              下載活動指南
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
