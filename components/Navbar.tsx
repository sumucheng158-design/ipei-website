"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/data/mockData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-forest-500 to-ocean-500 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <span className="text-white text-xs font-display font-bold leading-none">IP</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold text-forest-700 tracking-tight">
                {siteConfig.name}
              </span>
              <span className="font-body text-[10px] text-gray-500 tracking-wide hidden sm:block">
                {siteConfig.chineseName}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${
                  pathname === link.href ? "text-forest-600 after:w-full" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-involved"
              className="btn-primary text-sm py-2 px-5"
            >
              立即加入
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-0.5 bg-gray-700 rounded transition-all duration-200 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-gray-700 rounded transition-all duration-200 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-gray-700 rounded transition-all duration-200 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 mt-2 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2.5 rounded-xl text-sm font-body font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-forest-50 text-forest-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-100 mt-1">
              <Link href="/get-involved" className="btn-primary w-full justify-center text-sm py-2.5">
                立即加入
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
