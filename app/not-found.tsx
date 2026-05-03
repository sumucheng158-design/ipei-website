import Link from "next/link";
import Icon from "@/components/Icon";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-forest-50 to-ocean-50 px-4">
      <div className="text-center max-w-md">
        {/* SVG waves icon replaces 🌊 emoji */}
        <div className="w-24 h-24 rounded-full bg-ocean-100 text-ocean-500 flex items-center justify-center mx-auto mb-6">
          <Icon name="waves" className="w-12 h-12" />
        </div>
        <h1 className="font-display text-6xl text-forest-700 mb-4">404</h1>
        <h2 className="font-display text-2xl text-gray-900 mb-4">
          找不到這個頁面
        </h2>
        <p className="text-gray-600 mb-8">
          這片海洋似乎還不存在。讓我們帶你回到熟悉的地方吧。
        </p>
        <Link href="/" className="btn-primary">
          回到首頁
        </Link>
      </div>
    </div>
  );
}
