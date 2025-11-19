import { Link } from "react-router-dom";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function Navbar() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="m-4 md:m-12 inline-flex items-center gap-2 md:gap-3 p-2 rounded-xl bg-[#0A0B0A] border border-[rgba(239,231,210,0.08)] backdrop-blur-sm w-fit max-w-full">
        {/* Menu Toggle - Hidden on desktop */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex-shrink-0 flex flex-col justify-center items-center gap-[5px] w-[41px] h-[41px] rounded-lg border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)] transition-all hover:bg-[rgba(24,24,24,0.7)] hover:border-[rgba(239,231,210,0.25)]"
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-[1px] bg-[#E0D3C4] transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <div className={`w-5 h-[1px] bg-[#E0D3C4] transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-[1px] bg-[#E0D3C4] transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>

        {/* Logo */}
        <Link to="/" className="flex-shrink min-w-0">
          <img
            src="/Recurso8.svg"
            alt="Logo"
            className="h-[32px] md:h-[38px] w-auto max-w-[120px] md:max-w-none object-contain"
          />
        </Link>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex items-center gap-1 flex-shrink-0">
          <Link to="/products" className="px-3 py-3 rounded-lg text-[#E0D3C4] font-galliso text-xs font-normal leading-[130%] tracking-[1px] uppercase hover:bg-[rgba(24,24,24,0.3)] hover:text-[#EFE7D2] transition-colors">
            {t("nav.menu")}
          </Link>
          <Link to="/about" className="px-3 py-3 rounded-lg text-[#E0D3C4] font-galliso text-xs font-normal leading-[130%] tracking-[1px] uppercase hover:bg-[rgba(24,24,24,0.3)] hover:text-[#EFE7D2] transition-colors">
            {t("nav.about")}
          </Link>
          <Link to="/contact" className="px-3 py-3 rounded-lg text-[#E0D3C4] font-galliso text-xs font-normal leading-[130%] tracking-[1px] uppercase hover:bg-[rgba(24,24,24,0.3)] hover:text-[#EFE7D2] transition-colors">
            {t("nav.contact")}
          </Link>
        </div>

        {/* Language Toggle */}
        <LanguageToggle />
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Slide-out */}
      <div className={`md:hidden fixed top-0 left-0 h-full w-[280px] bg-[#0A0B0A] border-r border-[rgba(239,231,210,0.15)] z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full p-6">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-8">
            <img
              src="/Recurso8.svg"
              alt="Logo"
              className="h-[32px] w-auto"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)]"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15M5 5L15 15" stroke="#E0D3C4" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="flex flex-col gap-2">
            <Link
              to="/products"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full px-4 py-4 rounded-lg text-left text-[#E0D3C4] font-galliso text-sm font-normal leading-[130%] tracking-[1px] uppercase hover:bg-[rgba(24,24,24,0.5)] transition-colors"
            >
              {t("nav.menu")}
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full px-4 py-4 rounded-lg text-left text-[#E0D3C4] font-galliso text-sm font-normal leading-[130%] tracking-[1px] uppercase hover:bg-[rgba(24,24,24,0.5)] transition-colors"
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full px-4 py-4 rounded-lg text-left text-[#E0D3C4] font-galliso text-sm font-normal leading-[130%] tracking-[1px] uppercase hover:bg-[rgba(24,24,24,0.5)] transition-colors"
            >
              {t("nav.contact")}
            </Link>
          </nav>

          {/* Mobile Menu Social Icons */}
          <div className="mt-auto pt-6 border-t border-[rgba(239,231,210,0.15)]">
            <p className="text-[#E0D3C4] font-galliso text-xs uppercase tracking-[1px] mb-4">{t("nav.follow")}</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/levier.studio?igsh=MXNycXR6MzExMmI0Zw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)] hover:bg-[rgba(24,24,24,0.7)] transition-colors"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5.76562C8.3603 5.76562 7.73497 5.95532 7.20308 6.31072C6.67119 6.66611 6.25663 7.17125 6.01183 7.76226C5.76702 8.35326 5.70297 9.00359 5.82777 9.63099C5.95257 10.2584 6.26062 10.8347 6.71295 11.287C7.16529 11.7394 7.7416 12.0474 8.36901 12.1722C8.99641 12.297 9.64674 12.233 10.2377 11.9882C10.8287 11.7434 11.3339 11.3288 11.6893 10.7969C12.0447 10.265 12.2344 9.6397 12.2344 9C12.2344 8.14219 11.8936 7.31951 11.287 6.71295C10.6805 6.10639 9.85781 5.76562 9 5.76562ZM9 11.3906C8.52718 11.3906 8.06498 11.2504 7.67184 10.9877C7.2787 10.725 6.97229 10.3517 6.79135 9.91485C6.61041 9.47802 6.56307 8.99735 6.65531 8.53361C6.74755 8.06988 6.97524 7.64391 7.30957 7.30957C7.64391 6.97524 8.06988 6.74755 8.53361 6.65531C8.99735 6.56307 9.47802 6.61041 9.91485 6.79135C10.3517 6.97229 10.725 7.2787 10.9877 7.67184C11.2504 8.06498 11.3906 8.52718 11.3906 9C11.3888 9.63346 11.1363 10.2404 10.6884 10.6884C10.2404 11.1363 9.63346 11.3888 9 11.3906ZM12.0938 2.10938H5.90625C4.89926 2.10937 3.93351 2.5094 3.22145 3.22145C2.5094 3.93351 2.10938 4.89926 2.10938 5.90625V12.0938C2.10937 13.1007 2.5094 14.0665 3.22145 14.7785C3.93351 15.4906 4.89926 15.8906 5.90625 15.8906H12.0938C13.1007 15.8906 14.0665 15.4906 14.7785 14.7785C15.4906 14.0665 15.8906 13.1007 15.8906 12.0938V5.90625C15.8906 4.89926 15.4906 3.93351 14.7785 3.22145C14.0665 2.5094 13.1007 2.10938 12.0938 2.10938ZM15.0469 12.0938C15.0469 12.877 14.7357 13.6281 14.1819 14.1819C13.6281 14.7357 12.877 15.0469 12.0938 15.0469H5.90625C5.12303 15.0469 4.37189 14.7357 3.81808 14.1819C3.26426 13.6281 2.95312 12.877 2.95312 12.0938V5.90625C2.95312 5.12303 3.26426 4.37189 3.81808 3.81808C4.37189 3.26426 5.12303 2.95312 5.90625 2.95312H12.0938C12.877 2.95312 13.6281 3.26426 14.1819 3.81808C14.7357 4.37189 15.0469 5.12303 15.0469 5.90625V12.0938ZM13.3594 5.34375C13.3594 5.48282 13.3181 5.61876 13.2409 5.73439C13.1636 5.85001 13.0538 5.94013 12.9253 5.99335C12.7968 6.04657 12.6555 6.06049 12.5191 6.03336C12.3827 6.00623 12.2574 5.93927 12.1591 5.84093C12.0607 5.7426 11.9938 5.61732 11.9666 5.48092C11.9395 5.34453 11.9534 5.20315 12.0066 5.07468C12.0599 4.9462 12.15 4.83638 12.2656 4.75912C12.3812 4.68186 12.5172 4.64062 12.6562 4.64062C12.8427 4.64062 13.0216 4.7147 13.1534 4.84657C13.2853 4.97843 13.3594 5.15727 13.3594 5.34375Z" fill="#EFE7D2"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)] hover:bg-[rgba(24,24,24,0.7)] transition-colors"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1719 9C16.1719 7.58154 15.7513 6.19493 14.9632 5.01552C14.1751 3.83611 13.055 2.91688 11.7446 2.37405C10.4341 1.83123 8.99205 1.68921 7.60084 1.96593C6.20963 2.24266 4.93173 2.92572 3.92872 3.92872C2.92572 4.93173 2.24266 6.20963 1.96593 7.60084C1.68921 8.99205 1.83123 10.4341 2.37405 11.7446C2.91688 13.055 3.83611 14.1751 5.01552 14.9632C6.19493 15.7513 7.58154 16.1719 9 16.1719C10.9015 16.17 12.7246 15.4138 14.0692 14.0692C15.4138 12.7246 16.17 10.9015 16.1719 9ZM9.42188 15.3141V10.5469H11.25C11.3619 10.5469 11.4692 10.5024 11.5483 10.4233C11.6274 10.3442 11.6719 10.2369 11.6719 10.125C11.6719 10.0131 11.6274 9.90581 11.5483 9.82669C11.4692 9.74758 11.3619 9.70313 11.25 9.70313H9.42188V7.875C9.42372 7.53991 9.55766 7.21906 9.79461 6.98211C10.0316 6.74516 10.3524 6.61122 10.6875 6.60938H11.8125C11.9244 6.60938 12.0317 6.56493 12.1108 6.48581C12.1899 6.4067 12.2344 6.29939 12.2344 6.1875C12.2344 6.07561 12.1899 5.96831 12.1108 5.88919C12.0317 5.81008 11.9244 5.76563 11.8125 5.76563H10.6875C10.1286 5.76748 9.59318 5.99031 9.198 6.3855C8.80281 6.78068 8.57998 7.31613 8.57813 7.875V9.70313H6.75C6.63811 9.70313 6.53081 9.74758 6.45169 9.82669C6.37258 9.90581 6.32813 10.0131 6.32813 10.125C6.32813 10.2369 6.37258 10.3442 6.45169 10.4233C6.53081 10.5024 6.63811 10.5469 6.75 10.5469H8.57813V15.3141C6.94 15.2046 5.40853 14.4628 4.30714 13.2453C3.20574 12.0277 2.62064 10.4298 2.6754 8.78896C2.73016 7.1481 3.42048 5.59274 4.6006 4.45135C5.78071 3.30996 7.35822 2.67189 9 2.67189C10.6418 2.67189 12.2193 3.30996 13.3994 4.45135C14.5795 5.59274 15.2699 7.1481 15.3246 8.78896C15.3794 10.4298 14.7943 12.0277 13.6929 13.2453C12.5915 14.4628 11.06 15.2046 9.42188 15.3141Z" fill="#EFE7D2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
