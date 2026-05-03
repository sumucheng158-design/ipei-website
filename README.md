# I.P.E.I. 國際親子生態倡議組織

**International Parent-child Eco Initiative**

攜手孩子，守護地球 · Together for a Greener Tomorrow

---

## 🌿 專案介紹

I.P.E.I. 官方網站，使用 Next.js 14 App Router 建構，支援一鍵部署至 Vercel。

## 🛠 技術棧

- **框架**：Next.js 14（App Router）
- **語言**：TypeScript
- **樣式**：Tailwind CSS
- **部署**：Vercel

## 📁 專案結構

```
ipei-website/
├── app/                     # Next.js App Router 頁面
│   ├── page.tsx             # 首頁（Home）
│   ├── about/page.tsx       # 關於我們
│   ├── programs/page.tsx    # 活動項目
│   ├── programs/beach-cleanup/page.tsx  # 親子淨灘專頁
│   ├── resources/page.tsx   # 資源中心
│   └── get-involved/page.tsx # 參與我們
├── components/              # 可重用元件
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── SectionHeader.tsx
│   ├── ProgramCard.tsx
│   ├── EventCard.tsx
│   └── ArticleCard.tsx
├── data/
│   └── mockData.ts          # 假資料
└── styles/
    └── globals.css          # 全域樣式
```

## 🚀 快速開始

### 安裝依賴

```bash
npm install
```

### 本地開發

```bash
npm run dev
```

開啟瀏覽器前往 [http://localhost:3000](http://localhost:3000)

### 建置生產版本

```bash
npm run build
npm start
```

## ☁️ 部署至 Vercel

### 方法一：透過 GitHub（推薦）

1. 將此專案推送到你的 GitHub Repository
2. 前往 [vercel.com](https://vercel.com) 並登入
3. 點擊「New Project」，匯入你的 GitHub Repository
4. 無需額外設定，直接點擊「Deploy」
5. 🎉 完成！

### 方法二：Vercel CLI

```bash
npm i -g vercel
vercel
```

## 📄 頁面說明

| 路徑 | 頁面 |
|------|------|
| `/` | 首頁 |
| `/about` | 關於我們 |
| `/programs` | 活動項目 |
| `/programs/beach-cleanup` | 親子淨灘專頁 |
| `/resources` | 資源中心 |
| `/get-involved` | 參與我們 |

## 🎨 設計系統

- **主色**：Forest Green（#2a9a4a）
- **副色**：Ocean Blue（#0ea5e9）
- **點綴色**：Sand Gold（#f5b228）
- **字型**：Playfair Display（標題）+ DM Sans（內文）

---

© 2025 I.P.E.I. International Parent-child Eco Initiative
