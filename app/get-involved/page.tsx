"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { upcomingEvents, siteConfig } from "@/data/mockData";
import SectionHeader from "@/components/SectionHeader";
import EventCard from "@/components/EventCard";
import Icon, { type IconName } from "@/components/Icon";

const volunteerRoles = [
  {
    iconKey: "beach" as IconName,
    title: "淨灘志工",
    subtitle: "Beach Cleanup Volunteer",
    commitment: "每月1次",
    desc: "帶領親子家庭進行淨灘活動，負責現場引導、數據記錄與垃圾分類教學。",
  },
  {
    iconKey: "book" as IconName,
    title: "環教講師",
    subtitle: "Eco Education Facilitator",
    commitment: "彈性排班",
    desc: "前往學校或社區進行環境教育課程，為孩子帶來有趣的生態知識。需受過培訓。",
  },
  {
    iconKey: "camera" as IconName,
    title: "記錄志工",
    subtitle: "Documentation Volunteer",
    commitment: "活動日配合",
    desc: "協助記錄活動照片與影片，撰寫活動紀錄，讓每次行動的影響力被看見。",
  },
  {
    iconKey: "network" as IconName,
    title: "線上社群志工",
    subtitle: "Online Community Volunteer",
    commitment: "每週2-3小時",
    desc: "協助管理社群媒體內容、翻譯資源教材、回覆社群問題，遠端即可進行。",
  },
  {
    iconKey: "users" as IconName,
    title: "企業聯繫志工",
    subtitle: "Corporate Liaison",
    commitment: "視需求而定",
    desc: "協助聯繫在地企業、學校與社區組織，拓展I.P.E.I.的合作網絡。",
  },
  {
    iconKey: "laptop" as IconName,
    title: "技術支援志工",
    subtitle: "Tech Support Volunteer",
    commitment: "視需求而定",
    desc: "具備網頁、設計或資料分析技能者，協助改善組織數位工具與系統。",
  },
];

const donateAmounts = ["NT$200", "NT$500", "NT$1,000", "NT$2,000", "NT$5,000", "自訂金額"];

export default function GetInvolvedPage() {
  /* Fix #16: dynamic donate amount state */
  const [selectedAmount, setSelectedAmount] = useState("NT$500");
  const [customAmount, setCustomAmount] = useState("");

  /* Fix #15: basic volunteer form state */
  const [volunteerForm, setVolunteerForm] = useState({
    name: "", city: "", email: "", role: "", bio: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validateVolunteer() {
    const e: Record<string, string> = {};
    if (!volunteerForm.name.trim()) e.name = "請填寫姓名";
    if (!volunteerForm.email.trim()) e.email = "請填寫電子郵件";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(volunteerForm.email)) e.email = "電子郵件格式不正確";
    if (!volunteerForm.role) e.role = "請選擇志工角色";
    return e;
  }

  function handleVolunteerSubmit() {
    const e = validateVolunteer();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  const displayAmount =
    selectedAmount === "自訂金額"
      ? customAmount
        ? `NT$${customAmount}`
        : "自訂金額"
      : selectedAmount;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-forest-900 via-forest-800 to-ocean-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1400&q=80"
            alt="Get Involved"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label text-forest-300">參與我們</span>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-6">
            你的行動，
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-300 to-ocean-300">
              改變地球
            </span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed mb-10">
            無論是成為志工（Volunteer）、報名活動（Join Events）
            還是捐款支持（Donate），每一份參與都讓我們走得更遠。
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#volunteer" className="btn-primary text-base px-8 py-4">
              成為志工
            </a>
            <a href="#events" className="btn-ocean text-base px-8 py-4">
              報名活動
            </a>
            <a href="#donate" className="border border-white/30 text-white hover:bg-white/10 font-medium px-8 py-4 rounded-full transition-all duration-200">
              捐款支持
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60 C480 20 960 40 1440 10 L1440 60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Three ways */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="參與方式"
            title="三種方式，一樣的力量"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                iconKey: "handshake" as IconName,
                title: "成為志工",
                subtitle: "Become a Volunteer",
                desc: "加入我們的全球志工網絡，貢獻你的時間與技能，直接參與活動規劃、執行與推廣。",
                color: "forest",
                cta: "申請志工",
                href: "#volunteer",
              },
              {
                iconKey: "calendar" as IconName,
                title: "報名活動",
                subtitle: "Join Our Events",
                desc: "帶著孩子參加親子淨灘、生態工作坊、線上峰會等豐富活動，共同創造美好回憶與環境改變。",
                color: "ocean",
                cta: "瀏覽活動",
                href: "#events",
              },
              {
                iconKey: "heart" as IconName,
                title: "捐款支持",
                subtitle: "Make a Donation",
                desc: "你的捐款將直接支援活動執行、教材開發與在地志工培訓，讓更多家庭能免費參與我們的計畫。",
                color: "sand",
                cta: "立即捐款",
                href: "#donate",
              },
            ].map((way) => (
              <div
                key={way.title}
                className={`rounded-2xl p-8 border-2 text-center ${
                  way.color === "forest"
                    ? "border-forest-200 bg-forest-50"
                    : way.color === "ocean"
                    ? "border-ocean-200 bg-ocean-50"
                    : "border-sand-200 bg-sand-50"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4 ${
                    way.color === "forest"
                      ? "bg-forest-100 text-forest-600"
                      : way.color === "ocean"
                      ? "bg-ocean-100 text-ocean-600"
                      : "bg-sand-100 text-sand-600"
                  }`}
                >
                  <Icon name={way.iconKey} className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl text-gray-900 mb-1">{way.title}</h3>
                <p
                  className={`text-xs font-mono tracking-widest uppercase mb-4 ${
                    way.color === "forest"
                      ? "text-forest-600"
                      : way.color === "ocean"
                      ? "text-ocean-600"
                      : "text-sand-600"
                  }`}
                >
                  {way.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{way.desc}</p>
                <a
                  href={way.href}
                  className={`inline-flex items-center justify-center font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 ${
                    way.color === "forest"
                      ? "bg-forest-600 text-white hover:bg-forest-700"
                      : way.color === "ocean"
                      ? "bg-ocean-600 text-white hover:bg-ocean-700"
                      : "bg-sand-500 text-white hover:bg-sand-600"
                  }`}
                >
                  {way.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer section */}
      <section id="volunteer" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="志工計畫"
            title="成為志工（Volunteer）"
            description="我們有多種志工角色，歡迎具備不同技能與時間的朋友加入。無論你在哪個城市，都能貢獻你的力量。"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {volunteerRoles.map((role) => (
              <div key={role.title} className="card p-6">
                <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-600 flex items-center justify-center mb-3">
                  <Icon name={role.iconKey} className="w-5 h-5" />
                </div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-body font-semibold text-gray-900">{role.title}</h3>
                    <p className="text-xs text-gray-500">{role.subtitle}</p>
                  </div>
                  <span className="text-xs bg-forest-100 text-forest-700 rounded-full px-2.5 py-1 flex-shrink-0">
                    {role.commitment}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>

          {/* Volunteer form — Fix #15: validation + submit feedback */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl text-center mb-6">申請成為志工</h3>
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-forest-100 text-forest-600 flex items-center justify-center mx-auto mb-4">
                  <Icon name="check" className="w-8 h-8" />
                </div>
                <h4 className="font-display text-xl text-gray-900 mb-2">申請已送出！</h4>
                <p className="text-sm text-gray-500">我們將在 3 個工作日內透過電子郵件與您聯繫。</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">姓名 *</label>
                    <input
                      type="text"
                      placeholder="你的名字"
                      value={volunteerForm.name}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-forest-400 transition-colors ${
                        errors.name ? "border-red-400" : "border-gray-200"
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">所在城市</label>
                    <input
                      type="text"
                      placeholder="城市名稱"
                      value={volunteerForm.city}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-forest-400 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">電子郵件 *</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={volunteerForm.email}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-forest-400 transition-colors ${
                      errors.email ? "border-red-400" : "border-gray-200"
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">感興趣的志工角色 *</label>
                  <select
                    value={volunteerForm.role}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, role: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-forest-400 transition-colors bg-white ${
                      errors.role ? "border-red-400" : "border-gray-200"
                    }`}
                  >
                    <option value="">請選擇角色</option>
                    {volunteerRoles.map((r) => (
                      <option key={r.title}>{r.title}</option>
                    ))}
                  </select>
                  {errors.role && <p className="text-xs text-red-500 mt-1">{errors.role}</p>}
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">自我介紹</label>
                  <textarea
                    rows={3}
                    placeholder="簡短介紹自己，以及為何想加入 I.P.E.I...."
                    value={volunteerForm.bio}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, bio: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-forest-400 transition-colors resize-none"
                  />
                </div>
                <button
                  onClick={handleVolunteerSubmit}
                  className="btn-primary w-full justify-center py-3.5"
                >
                  送出申請
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-20 bg-gradient-to-br from-ocean-50 to-forest-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="近期活動"
            title="報名即將到來的活動"
            description="帶著孩子親身參與，讓環保行動成為家庭最美麗的共同記憶。"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label="捐款支持"
                title="你的每一分，都在守護地球"
                align="left"
              />
              <p className="text-gray-600 leading-relaxed mt-4 mb-6 text-sm">
                I.P.E.I. 是一個非營利組織（Non-profit Organization），
                所有活動均對參與家庭免費開放。你的捐款將直接用於：
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "購置淨灘設備與安全裝備",
                  "開發免費環境教育教材",
                  "支援在地志工培訓計畫",
                  "維運全球志工協作平台",
                  "推動新據點設立與擴展",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-forest-100 text-forest-600 flex items-center justify-center flex-shrink-0">
                      <Icon name="check" className="w-3 h-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              {/* Fix: lightbulb SVG instead of 💡 emoji */}
              <div className="p-5 bg-forest-50 rounded-2xl border border-forest-100 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-forest-100 text-forest-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="lightbulb" className="w-4 h-4" />
                </div>
                <p className="text-sm text-forest-800">
                  <strong>你知道嗎？</strong> 台幣 500 元的捐款，可以提供一個家庭參與完整的親子淨灘活動，
                  包含所有裝備與環教材料。
                </p>
              </div>
            </div>

            {/* Fix #16: dynamic donate button */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="font-display text-2xl text-center mb-6">選擇捐款金額</h3>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {donateAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`py-3 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                      selectedAmount === amount
                        ? "bg-forest-600 border-forest-600 text-white shadow-sm"
                        : "border-gray-200 text-gray-700 hover:border-forest-400 hover:text-forest-600 bg-white"
                    }`}
                  >
                    {amount}
                  </button>
                ))}
              </div>

              {/* Custom amount input */}
              {selectedAmount === "自訂金額" && (
                <div className="mb-4">
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">輸入金額（NT$）</label>
                  <input
                    type="number"
                    placeholder="請輸入金額"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    min="1"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-forest-400 bg-white transition-colors"
                  />
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">姓名</label>
                  <input
                    type="text"
                    placeholder="捐款人姓名"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-forest-400 bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">電子郵件</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-forest-400 bg-white transition-colors"
                  />
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-200">
                  <input type="checkbox" id="monthly" className="w-4 h-4 accent-forest-600" />
                  <label htmlFor="monthly" className="text-sm text-gray-700 cursor-pointer">
                    設為每月定期捐款（Monthly Giving）
                  </label>
                </div>
                {/* Fix #16: button shows actual selected amount */}
                <button className="btn-primary w-full justify-center py-3.5 text-base gap-2">
                  <Icon name="heart" className="w-4 h-4" />
                  立即捐款 {displayAmount}
                </button>
                <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
                  <Icon name="shield" className="w-3.5 h-3.5" />
                  安全加密支付 · 捐款憑證將寄至您的信箱
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact counter */}
      <section className="py-16 bg-gradient-to-br from-forest-700 to-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-white/70 text-sm mb-3">目前已有</p>
          <div className="font-display text-6xl md:text-7xl text-white font-bold mb-3">
            {siteConfig.volunteers.toLocaleString()}+
          </div>
          <p className="text-forest-300 text-lg">個家庭志工加入 I.P.E.I.</p>
          <p className="text-white/50 mt-4 text-sm">下一個，就是你們家</p>
        </div>
      </section>
    </>
  );
}
