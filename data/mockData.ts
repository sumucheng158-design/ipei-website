export const siteConfig = {
  name: "I.P.E.I.",
  fullName: "International Parent-child Eco Initiative",
  chineseName: "國際親子生態倡議組織",
  tagline: "攜手孩子，守護地球 · Together for a Greener Tomorrow",
  description:
    "I.P.E.I. 是一個致力於透過親子共同參與，推動全球環境保護與永續發展的國際非政府組織。",
  email: "hello@ipei.org",
  founded: "2018",
  countries: 24,
  volunteers: 12000,
  events: 380,
};

export const navLinks = [
  { label: "首頁", href: "/" },
  { label: "關於我們", href: "/about" },
  { label: "活動項目", href: "/programs" },
  { label: "資源中心", href: "/resources" },
  { label: "參與我們", href: "/get-involved" },
];

export const stats = [
  { value: "24", label: "合作國家（Countries）", icon: "🌍" },
  { value: "12,000+", label: "志工夥伴（Volunteers）", icon: "🤝" },
  { value: "380+", label: "舉辦活動（Events）", icon: "📅" },
  { value: "58 噸", label: "清除垃圾（Waste Removed）", icon: "♻️" },
];

export const programs = [
  {
    id: "beach-cleanup",
    title: "親子淨灘",
    subtitle: "Beach Cleanup",
    description:
      "結合親子力量，定期舉辦海灘淨化活動。透過實際行動讓孩子理解海洋保護的重要性，培養對自然環境的責任感。",
    icon: "🏖️",
    color: "ocean",
    image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=600&q=80",
    href: "/programs/beach-cleanup",
    highlights: ["每月定期舉辦", "親子友善設計", "安全設備提供", "國際同步活動"],
  },
  {
    id: "eco-education",
    title: "生態教育",
    subtitle: "Environmental Education",
    description:
      "提供系統化的環境教育課程，適合不同年齡層的親子學習。從課堂到戶外，讓永續觀念從小扎根。",
    icon: "🌱",
    color: "forest",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
    href: "/programs",
    highlights: ["多媒體教材", "戶外體驗課", "親子工作坊", "國際師資"],
  },
  {
    id: "global-programs",
    title: "國際合作",
    subtitle: "Global Programs",
    description:
      "連結全球24個國家的家庭志工網絡，共同推動跨國環保行動，分享在地知識與全球視野。",
    icon: "🌐",
    color: "ocean",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
    href: "/programs",
    highlights: ["24國合作網絡", "線上交流平台", "國際交換計畫", "多語言支援"],
  },
  {
    id: "sustainable-living",
    title: "永續生活",
    subtitle: "Sustainable Living",
    description:
      "從日常生活出發，推廣零廢棄、低碳生活方式。提供實用指南讓家庭輕鬆實踐環保生活。",
    icon: "🏡",
    color: "forest",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80",
    href: "/programs",
    highlights: ["零廢棄挑戰", "碳足跡計算", "DIY 教學", "社群支持"],
  },
];

export const upcomingEvents = [
  {
    id: 1,
    title: "2025 夏季國際親子淨灘日",
    subtitle: "International Family Beach Cleanup Day",
    date: "2025-08-16",
    location: "台灣・新北市淡水海灘",
    country: "🇹🇼",
    spots: 120,
    spotsLeft: 38,
    category: "beach-cleanup",
    image: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=400&q=80",
  },
  {
    id: 2,
    title: "親子生態探索工作坊",
    subtitle: "Family Eco-Exploration Workshop",
    date: "2025-09-06",
    location: "日本・東京都立公園",
    country: "🇯🇵",
    spots: 60,
    spotsLeft: 12,
    category: "eco-education",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&q=80",
  },
  {
    id: 3,
    title: "全球永續家庭線上峰會",
    subtitle: "Global Sustainable Families Online Summit",
    date: "2025-10-12",
    location: "線上活動（Online）",
    country: "🌍",
    spots: 500,
    spotsLeft: 203,
    category: "global",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&q=80",
  },
];

export const articles = [
  {
    id: 1,
    title: "如何帶孩子參與第一次淨灘（Beach Cleanup）活動",
    category: "親子教育",
    readTime: "5 分鐘",
    date: "2025-06-15",
    excerpt:
      "淨灘不只是撿垃圾，更是一堂親子共學的生態課。本文提供完整準備指南，讓第一次參與的家庭也能輕鬆上手。",
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=400&q=80",
    tag: "新手必讀",
  },
  {
    id: 2,
    title: "海洋微塑膠（Microplastics）對孩子健康的影響",
    category: "環境科學",
    readTime: "8 分鐘",
    date: "2025-05-28",
    excerpt:
      "微塑膠已進入食物鏈，了解其來源與影響，幫助家長做出更明智的生活選擇，保護孩子的未來。",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&q=80",
    tag: "科普知識",
  },
  {
    id: 3,
    title: "10 個讓孩子愛上環保的日常習慣",
    category: "永續生活",
    readTime: "6 分鐘",
    date: "2025-05-10",
    excerpt:
      "從分類回收到隨手關燈，用遊戲化方式讓永續生活（Sustainable Living）成為全家人的日常。",
    image: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=400&q=80",
    tag: "生活實踐",
  },
  {
    id: 4,
    title: "I.P.E.I. 2024 年度影響力報告",
    category: "組織報告",
    readTime: "12 分鐘",
    date: "2025-04-01",
    excerpt:
      "回顧 2024 年度，我們在全球 24 個國家的行動成果，以及對海洋環境保護（Ocean Conservation）的具體貢獻。",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80",
    tag: "年度報告",
  },
];

export const downloadResources = [
  {
    id: 1,
    title: "親子淨灘活動指南",
    subtitle: "Family Beach Cleanup Guide",
    format: "PDF",
    size: "2.4 MB",
    languages: ["繁體中文", "English", "日本語"],
    icon: "📖",
  },
  {
    id: 2,
    title: "海洋生態教育教材（K-6年級）",
    subtitle: "Ocean Ecology Curriculum Pack",
    format: "ZIP",
    size: "18.6 MB",
    languages: ["繁體中文", "English"],
    icon: "🎓",
  },
  {
    id: 3,
    title: "零廢棄生活30日挑戰卡",
    subtitle: "30-Day Zero Waste Challenge",
    format: "PDF",
    size: "1.1 MB",
    languages: ["繁體中文", "English", "한국어"],
    icon: "♻️",
  },
  {
    id: 4,
    title: "親子環保誓言海報",
    subtitle: "Family Eco Pledge Poster",
    format: "PNG",
    size: "3.8 MB",
    languages: ["多語言版本"],
    icon: "🖼️",
  },
];

export const teamMembers = [
  {
    name: "林雅婷",
    nameEn: "Yating Lin",
    role: "創辦人暨執行長",
    roleEn: "Founder & CEO",
    country: "台灣",
    bio: "前聯合國環境規劃署（UNEP）顧問，致力推動亞太地區親子環境教育逾十五年。",
    avatar: "YL",
    color: "forest",
  },
  {
    name: "田中誠一",
    nameEn: "Seiichi Tanaka",
    role: "國際關係總監",
    roleEn: "Director of Global Relations",
    country: "日本",
    bio: "曾任職多個國際環保組織，負責協調 I.P.E.I. 在亞洲地區的合作網絡與夥伴關係。",
    avatar: "ST",
    color: "ocean",
  },
  {
    name: "Sofia Mendoza",
    nameEn: "Sofia Mendoza",
    role: "課程設計總監",
    roleEn: "Director of Curriculum",
    country: "Mexico",
    bio: "兒童環境教育專家，開發適合 3-12 歲親子共學的創新環境教育課程體系。",
    avatar: "SM",
    color: "sand",
  },
  {
    name: "陳建宏",
    nameEn: "Jianhong Chen",
    role: "科技與數位總監",
    roleEn: "Director of Technology",
    country: "台灣",
    bio: "負責 I.P.E.I. 數位平台建設與全球志工協作系統，推動技術賦能環保行動。",
    avatar: "JC",
    color: "forest",
  },
];

export const testimonials = [
  {
    quote: "帶著女兒第一次參加淨灘活動，看到她認真撿起每一片垃圾的樣子，我知道這是一個她會記得一輩子的經驗。",
    author: "王小明",
    role: "兩個孩子的爸爸・台北",
    country: "🇹🇼",
  },
  {
    quote:
      "I.P.E.I.'s programs beautifully bridge cultural differences. Our family joined from Singapore and felt welcomed by the global community of eco-families.",
    author: "Priya Sharma",
    role: "Mother of three · Singapore",
    country: "🇸🇬",
  },
  {
    quote:
      "IPEIの活動を通じて、子供たちが地球環境について真剣に考えるようになりました。これからも家族で参加し続けます。",
    author: "佐藤美香",
    role: "三人の子供のお母さん・東京",
    country: "🇯🇵",
  },
];

export const socialLinks = [
  { platform: "Facebook", icon: "f", href: "#", label: "Facebook" },
  { platform: "Instagram", icon: "📷", href: "#", label: "Instagram" },
  { platform: "YouTube", icon: "▶", href: "#", label: "YouTube" },
  { platform: "LinkedIn", icon: "in", href: "#", label: "LinkedIn" },
];
