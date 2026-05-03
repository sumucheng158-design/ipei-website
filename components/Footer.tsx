import Link from "next/link";
import { siteConfig, navLinks, socialLinks } from "@/data/mockData";
import Icon, { type IconName } from "@/components/Icon";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Wave top */}
      <div className="relative h-16 bg-white">
        <svg
          viewBox="0 0 1440 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full"
        >
          <path
            d="M0 64 C360 20 1080 20 1440 64 L1440 0 L0 0 Z"
            fill="#030712"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-forest-500 to-ocean-500 flex items-center justify-center">
                <span className="text-white text-sm font-display font-bold">IP</span>
              </div>
              <div>
                <div className="text-white font-display text-xl font-semibold">
                  {siteConfig.name}
                </div>
                <div className="text-gray-500 text-xs">
                  {siteConfig.fullName}
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              {siteConfig.description}
            </p>

            {/* Fix #12: unified SVG social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-forest-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Icon name={s.iconKey as IconName} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-body font-semibold text-sm mb-4 uppercase tracking-widest">
              網站導覽
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-forest-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — Fix #12: SVG icons instead of emoji */}
          <div>
            <h3 className="text-white font-body font-semibold text-sm mb-4 uppercase tracking-widest">
              聯絡資訊
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Icon name="mail" className="w-4 h-4 mt-0.5 flex-shrink-0 text-forest-400" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-forest-400 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="globe" className="w-4 h-4 mt-0.5 flex-shrink-0 text-forest-400" />
                <span>全球 {siteConfig.countries} 個國家服務</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="calendar" className="w-4 h-4 mt-0.5 flex-shrink-0 text-forest-400" />
                <span>成立於 {siteConfig.founded} 年</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/get-involved" className="btn-primary text-xs py-2 px-4">
                加入我們
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} —{" "}
            {siteConfig.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-gray-400 transition-colors">隱私政策</Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">服務條款</Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">Cookie 設定</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
