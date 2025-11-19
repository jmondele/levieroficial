import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function ContactUs() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0A0B0A] text-[#EFE7D2] p-4 md:p-6">
      <div className="flex flex-col gap-4 h-full">
        {/* Navbar */}
        <nav className="m-4 md:m-12 inline-flex items-center gap-2 md:gap-3 p-2 rounded-xl bg-[#0A0B0A] w-fit max-w-full">
          {/* Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex-shrink-0 flex flex-col justify-center items-center gap-[5px] w-[41px] h-[41px] rounded-lg border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)] transition-all hover:bg-[rgba(24,24,24,0.7)]"
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
            <Link to="/products" className="px-3 py-3 rounded-lg text-[#E0D3C4] font-galliso text-xs font-normal leading-[130%] tracking-[1px] uppercase hover:bg-[rgba(24,24,24,0.3)] transition-colors">
              {t("nav.menu")}
            </Link>
            <Link to="/about" className="px-3 py-3 rounded-lg text-[#E0D3C4] font-galliso text-xs font-normal leading-[130%] tracking-[1px] uppercase hover:bg-[rgba(24,24,24,0.3)] transition-colors">
              {t("nav.about")}
            </Link>
            <Link to="/contact" className="px-3 py-3 rounded-lg border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)] text-[#E0D3C4] font-galliso text-xs font-normal leading-[130%] tracking-[1px] uppercase hover:bg-[rgba(24,24,24,0.7)] transition-colors">
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
                className="w-full px-4 py-4 rounded-lg border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)] text-[#E0D3C4] font-galliso text-sm font-normal leading-[130%] tracking-[1px] uppercase hover:bg-[rgba(24,24,24,0.7)] transition-colors"
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
                    <path d="M9 5.76562C8.3603 5.76562 7.73497 5.95532 7.20308 6.31072C6.67119 6.66611 6.25663 7.17125 6.01183 7.76226C5.76702 8.35326 5.70297 9.00359 5.82777 9.63099C5.95257 10.2584 6.26062 10.8347 6.71295 11.287C7.16529 11.7394 7.7416 12.0474 8.36901 12.1722C8.99641 12.297 9.64674 12.233 10.2377 11.9882C10.8287 11.7434 11.3339 11.3288 11.6893 10.7969C12.0447 10.265 12.2344 9.6397 12.2344 9C12.2344 8.14219 11.8936 7.31951 11.287 6.71295C10.6805 6.10639 9.85781 5.76562 9 5.76562ZM9 11.3906C8.52718 11.3906 8.06498 11.2504 7.67184 10.9877C7.2787 10.725 6.97229 10.3517 6.79135 9.91485C6.61041 9.47802 6.56307 8.99735 6.65531 8.53361C6.74755 8.06988 6.97524 7.64391 7.30957 7.30957C7.64391 6.97524 8.06988 6.74755 8.53361 6.65531C8.99735 6.56307 9.47802 6.61041 9.91485 6.79135C10.3517 6.97229 10.725 7.2787 10.9877 7.67184C11.2504 8.06498 11.3906 8.52718 11.3906 9C11.3888 9.63346 11.1363 10.2404 10.6884 10.6884C10.2404 11.1363 9.63346 11.3888 9 11.3906ZM12.0938 2.10938H5.90625C4.89926 2.10937 3.93351 2.5094 3.22145 3.22145C2.5094 3.93351 2.10938 4.89926 2.10938 5.90625V12.0938C2.10937 13.1007 2.5094 14.0665 3.22145 14.7785C3.93351 15.4906 4.89926 15.8906 5.90625 15.8906H12.0938C13.1007 15.8906 14.0665 15.4906 14.7785 14.7785C15.4906 14.0665 15.8906 13.1007 15.8906 12.0938V5.90625C15.8906 4.89926 15.4906 3.93351 14.7785 3.22145C14.0665 2.5094 13.1007 2.10938 12.0938 2.10938ZM15.0469 12.0938C15.0469 12.877 14.7357 13.6281 14.1819 14.1819C13.6281 14.7357 12.877 15.0469 12.0938 15.0469H5.90625C5.12305 15.0469 4.37193 14.7357 3.81813 14.1819C3.26433 13.6281 2.95313 12.877 2.95313 12.0938V5.90625C2.95313 5.12305 3.26433 4.37193 3.81813 3.81813C4.37193 3.26433 5.12305 2.95313 5.90625 2.95313H12.0938C12.877 2.95313 13.6281 3.26433 14.1819 3.81813C14.7357 4.37193 15.0469 5.12305 15.0469 5.90625V12.0938Z" fill="#EFE7D2"/>
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
                    <path d="M16.1719 9C16.1719 7.58154 15.7513 6.19493 14.9632 5.01552C14.1751 3.83611 13.055 2.91688 11.7446 2.37405C10.4341 1.83123 8.99205 1.68921 7.60084 1.96593C6.20963 2.24266 4.93173 2.92572 3.92872 3.92872C2.92572 4.93173 2.24266 6.20963 1.96593 7.60084C1.68921 8.99205 1.83123 10.4341 2.37405 11.7446C2.91688 13.055 3.83611 14.1751 5.01552 14.9632C6.19493 15.7513 7.58154 16.1719 9 16.1719C10.9015 16.17 12.7246 15.4138 14.0692 14.0692C15.4138 12.7246 16.17 10.9015 16.1719 9ZM9.42188 15.3141V10.5469H11.25C11.3619 10.5469 11.4692 10.5024 11.5483 10.4233C11.6274 10.3442 11.6719 10.2369 11.6719 10.125C11.6719 10.0131 11.6274 9.90581 11.5483 9.82669C11.4692 9.74758 11.3619 9.70313 11.25 9.70313H9.42188V7.875C9.42372 7.53991 9.55766 7.21906 9.79461 6.98211C10.0316 6.74516 10.3524 6.61122 10.6875 6.60938H11.8125C11.9244 6.60938 12.0317 6.56493 12.1108 6.48581C12.1899 6.4067 12.2344 6.29939 12.2344 6.1875C12.2344 6.07561 12.1899 5.96831 12.1108 5.88919C12.0317 5.81008 11.9244 5.76563 11.8125 5.76563H10.6875C10.1286 5.76748 9.59318 5.99031 9.198 6.3855C8.80281 6.78068 8.57998 7.31613 8.57813 7.875V9.70313H6.75C6.63811 9.70313 6.53081 9.74758 6.45169 9.82669C6.37258 9.90581 6.32813 10.0131 6.32813 10.125C6.32813 10.2369 6.37258 10.3442 6.45169 10.4233C6.53081 10.5024 6.63811 10.5469 6.75 10.5469H8.57813V15.3141C6.94 15.2046 5.40853 14.4628 4.30714 13.2453C3.20574 12.0277 2.62064 10.4298 2.6754 8.78896C2.73016 7.1481 3.42048 5.59274 4.6006 4.45135C5.78071 3.30996 7.3582 2.63376 9 2.63376C10.6418 2.63376 12.2193 3.30996 13.3994 4.45135C14.5795 5.59274 15.2698 7.1481 15.3246 8.78896C15.3793 10.4298 14.7942 12.0277 13.6928 13.2453C12.5914 14.4628 11.06 15.2046 9.42188 15.3141Z" fill="#EFE7D2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 rounded-2xl overflow-hidden bg-black">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16">
            {/* Left Column - Contact Information */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h1 className="font-galliso text-5xl md:text-6xl font-normal leading-[100%] tracking-[2px] uppercase text-[#EFE7D2] mb-2">
                  {t("contact.title")}
                </h1>
                <p className="font-satoshi text-lg font-normal leading-[160%] text-[#E0D3C4]">
                  {t("contact.subtitle")}
                </p>
              </div>

              {/* Address */}
              <div className="space-y-3">
                <h3 className="font-galliso text-lg font-normal leading-[120%] tracking-[1px] uppercase text-[#EFE7D2]">
                  {t("contact.location")}
                </h3>
                <p className="font-satoshi text-base font-normal leading-[160%] text-[#E0D3C4]">
                  {t("contact.address")}<br />
                  {t("contact.city")}
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-galliso text-lg font-normal leading-[120%] tracking-[1px] uppercase text-[#EFE7D2] mb-2">
                    {t("contact.phone")}
                  </h3>
                  <a
                    href="tel:+15551234567"
                    className="font-satoshi text-base font-normal leading-[160%] text-[#E0D3C4] hover:text-[#EFE7D2] transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div>
                  <h3 className="font-galliso text-lg font-normal leading-[120%] tracking-[1px] uppercase text-[#EFE7D2] mb-2">
                    {t("contact.email")}
                  </h3>
                  <a
                    href="mailto:hello@snackers.com"
                    className="font-satoshi text-base font-normal leading-[160%] text-[#E0D3C4] hover:text-[#EFE7D2] transition-colors"
                  >
                    hello@snackers.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="space-y-3">
                <h3 className="font-galliso text-lg font-normal leading-[120%] tracking-[1px] uppercase text-[#EFE7D2]">
                  {t("contact.hours")}
                </h3>
                <div className="font-satoshi text-base font-normal leading-[160%] text-[#E0D3C4] space-y-1">
                  <p>{t("contact.hours_weekday")}</p>
                  <p>{t("contact.hours_weekend")}</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-3 pt-4 border-t border-[rgba(239,231,210,0.15)]">
                <h3 className="font-galliso text-lg font-normal leading-[120%] tracking-[1px] uppercase text-[#EFE7D2]">
                  {t("contact.follow")}
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/levier.studio?igsh=MXNycXR6MzExMmI0Zw%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)] hover:bg-[rgba(24,24,24,0.7)] transition-colors"
                    aria-label="Instagram"
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 5.76562C8.3603 5.76562 7.73497 5.95532 7.20308 6.31072C6.67119 6.66611 6.25663 7.17125 6.01183 7.76226C5.76702 8.35326 5.70297 9.00359 5.82777 9.63099C5.95257 10.2584 6.26062 10.8347 6.71295 11.287C7.16529 11.7394 7.7416 12.0474 8.36901 12.1722C8.99641 12.297 9.64674 12.233 10.2377 11.9882C10.8287 11.7434 11.3339 11.3288 11.6893 10.7969C12.0447 10.265 12.2344 9.6397 12.2344 9C12.2344 8.14219 11.8936 7.31951 11.287 6.71295C10.6805 6.10639 9.85781 5.76562 9 5.76562ZM9 11.3906C8.52718 11.3906 8.06498 11.2504 7.67184 10.9877C7.2787 10.725 6.97229 10.3517 6.79135 9.91485C6.61041 9.47802 6.56307 8.99735 6.65531 8.53361C6.74755 8.06988 6.97524 7.64391 7.30957 7.30957C7.64391 6.97524 8.06988 6.74755 8.53361 6.65531C8.99735 6.56307 9.47802 6.61041 9.91485 6.79135C10.3517 6.97229 10.725 7.2787 10.9877 7.67184C11.2504 8.06498 11.3906 8.52718 11.3906 9C11.3888 9.63346 11.1363 10.2404 10.6884 10.6884C10.2404 11.1363 9.63346 11.3888 9 11.3906ZM12.0938 2.10938H5.90625C4.89926 2.10937 3.93351 2.5094 3.22145 3.22145C2.5094 3.93351 2.10938 4.89926 2.10938 5.90625V12.0938C2.10937 13.1007 2.5094 14.0665 3.22145 14.7785C3.93351 15.4906 4.89926 15.8906 5.90625 15.8906H12.0938C13.1007 15.8906 14.0665 15.4906 14.7785 14.7785C15.4906 14.0665 15.8906 13.1007 15.8906 12.0938V5.90625C15.8906 4.89926 15.4906 3.93351 14.7785 3.22145C14.0665 2.5094 13.1007 2.10938 12.0938 2.10938ZM15.0469 12.0938C15.0469 12.877 14.7357 13.6281 14.1819 14.1819C13.6281 14.7357 12.877 15.0469 12.0938 15.0469H5.90625C5.12305 15.0469 4.37193 14.7357 3.81813 14.1819C3.26433 13.6281 2.95313 12.877 2.95313 12.0938V5.90625C2.95313 5.12305 3.26433 4.37193 3.81813 3.81813C4.37193 3.26433 5.12305 2.95313 5.90625 2.95313H12.0938C12.877 2.95313 13.6281 3.26433 14.1819 3.81813C14.7357 4.37193 15.0469 5.12305 15.0469 5.90625V12.0938Z" fill="#EFE7D2"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)] hover:bg-[rgba(24,24,24,0.7)] transition-colors"
                    aria-label="Facebook"
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.1719 9C16.1719 7.58154 15.7513 6.19493 14.9632 5.01552C14.1751 3.83611 13.055 2.91688 11.7446 2.37405C10.4341 1.83123 8.99205 1.68921 7.60084 1.96593C6.20963 2.24266 4.93173 2.92572 3.92872 3.92872C2.92572 4.93173 2.24266 6.20963 1.96593 7.60084C1.68921 8.99205 1.83123 10.4341 2.37405 11.7446C2.91688 13.055 3.83611 14.1751 5.01552 14.9632C6.19493 15.7513 7.58154 16.1719 9 16.1719C10.9015 16.17 12.7246 15.4138 14.0692 14.0692C15.4138 12.7246 16.17 10.9015 16.1719 9ZM9.42188 15.3141V10.5469H11.25C11.3619 10.5469 11.4692 10.5024 11.5483 10.4233C11.6274 10.3442 11.6719 10.2369 11.6719 10.125C11.6719 10.0131 11.6274 9.90581 11.5483 9.82669C11.4692 9.74758 11.3619 9.70313 11.25 9.70313H9.42188V7.875C9.42372 7.53991 9.55766 7.21906 9.79461 6.98211C10.0316 6.74516 10.3524 6.61122 10.6875 6.60938H11.8125C11.9244 6.60938 12.0317 6.56493 12.1108 6.48581C12.1899 6.4067 12.2344 6.29939 12.2344 6.1875C12.2344 6.07561 12.1899 5.96831 12.1108 5.88919C12.0317 5.81008 11.9244 5.76563 11.8125 5.76563H10.6875C10.1286 5.76748 9.59318 5.99031 9.198 6.3855C8.80281 6.78068 8.57998 7.31613 8.57813 7.875V9.70313H6.75C6.63811 9.70313 6.53081 9.74758 6.45169 9.82669C6.37258 9.90581 6.32813 10.0131 6.32813 10.125C6.32813 10.2369 6.37258 10.3442 6.45169 10.4233C6.53081 10.5024 6.63811 10.5469 6.75 10.5469H8.57813V15.3141C6.94 15.2046 5.40853 14.4628 4.30714 13.2453C3.20574 12.0277 2.62064 10.4298 2.6754 8.78896C2.73016 7.1481 3.42048 5.59274 4.6006 4.45135C5.78071 3.30996 7.3582 2.63376 9 2.63376C10.6418 2.63376 12.2193 3.30996 13.3994 4.45135C14.5795 5.59274 15.2698 7.1481 15.3246 8.78896C15.3793 10.4298 14.7942 12.0277 13.6928 13.2453C12.5914 14.4628 11.06 15.2046 9.42188 15.3141Z" fill="#EFE7D2"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)] hover:bg-[rgba(24,24,24,0.7)] transition-colors"
                    aria-label="Twitter"
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.2617 4.90075C17.2299 4.82419 17.1763 4.75869 17.1075 4.71242C17.0388 4.66615 16.9579 4.64117 16.875 4.64059H14.6531C14.3785 4.13619 13.9745 3.71401 13.4827 3.41743C12.9909 3.12086 12.4289 2.96059 11.8547 2.95309C10.9918 2.94934 10.1626 3.28756 9.54855 3.89373C8.93448 4.4999 8.58554 5.32464 8.57811 6.18747V6.79919C5.59686 6.08903 3.13592 3.66325 3.1078 3.64216C3.05359 3.58865 2.98591 3.55081 2.91194 3.53266C2.83796 3.51451 2.76045 3.51673 2.68763 3.53908C2.61482 3.56143 2.54941 3.60308 2.49835 3.6596C2.4473 3.71613 2.4125 3.78542 2.39764 3.86013C1.78592 7.207 2.79139 9.44294 3.74061 10.7297C4.24405 11.4186 4.86248 12.0156 5.56874 12.4945C4.47889 13.8164 2.68592 14.5054 2.66483 14.5125C2.60493 14.5345 2.55092 14.5701 2.50702 14.6165C2.46311 14.6628 2.4305 14.7186 2.41171 14.7797C2.39175 14.8392 2.38582 14.9025 2.39435 14.9647C2.40289 15.0269 2.42567 15.0863 2.46092 15.1383C2.53124 15.2437 3.2203 16.1718 5.62499 16.1718C10.5258 16.1718 14.625 12.382 15.0187 7.51638L17.1703 5.35778C17.2313 5.30064 17.2729 5.22587 17.2893 5.14392C17.3057 5.06197 17.296 4.97695 17.2617 4.90075ZM14.3086 7.03122C14.2354 7.10419 14.1927 7.20219 14.1891 7.30544C13.9008 11.8054 10.139 15.3281 5.62499 15.3281C4.64764 15.3281 4.02186 15.1593 3.64921 14.9906C4.44374 14.5898 5.74452 13.8023 6.53905 12.607C6.5707 12.5574 6.592 12.502 6.60167 12.444C6.61134 12.386 6.60917 12.3266 6.5953 12.2695C6.58031 12.211 6.55315 12.1564 6.51559 12.1091C6.47803 12.0619 6.43091 12.0231 6.37733 11.9945C4.44374 11.0898 3.74452 9.8023 3.53905 8.607C3.5707 8.5574 3.592 8.502 3.60167 8.444C3.61134 8.386 3.60917 8.3266 3.5953 8.2695C3.58031 8.211 3.55315 8.1564 3.51559 8.1091C3.47803 8.0619 3.43091 8.0231 3.37733 7.9945L14.3086 7.03122Z" fill="#EFE7D2"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-galliso text-sm font-normal leading-[100%] tracking-[1px] uppercase text-[#E0D3C4] mb-3">
                    {t("contact.form_name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[rgba(24,24,24,0.5)] border border-[rgba(239,231,210,0.15)] rounded-lg font-satoshi text-base text-[#EFE7D2] placeholder-[#8B7E6F] focus:outline-none focus:border-[rgba(239,231,210,0.3)] transition-colors"
                    placeholder={t("contact.form_placeholder_name")}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-galliso text-sm font-normal leading-[100%] tracking-[1px] uppercase text-[#E0D3C4] mb-3">
                    {t("contact.form_email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[rgba(24,24,24,0.5)] border border-[rgba(239,231,210,0.15)] rounded-lg font-satoshi text-base text-[#EFE7D2] placeholder-[#8B7E6F] focus:outline-none focus:border-[rgba(239,231,210,0.3)] transition-colors"
                    placeholder={t("contact.form_placeholder_email")}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-galliso text-sm font-normal leading-[100%] tracking-[1px] uppercase text-[#E0D3C4] mb-3">
                    {t("contact.form_phone")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[rgba(24,24,24,0.5)] border border-[rgba(239,231,210,0.15)] rounded-lg font-satoshi text-base text-[#EFE7D2] placeholder-[#8B7E6F] focus:outline-none focus:border-[rgba(239,231,210,0.3)] transition-colors"
                    placeholder={t("contact.form_placeholder_phone")}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-galliso text-sm font-normal leading-[100%] tracking-[1px] uppercase text-[#E0D3C4] mb-3">
                    {t("contact.form_subject")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[rgba(24,24,24,0.5)] border border-[rgba(239,231,210,0.15)] rounded-lg font-satoshi text-base text-[#EFE7D2] placeholder-[#8B7E6F] focus:outline-none focus:border-[rgba(239,231,210,0.3)] transition-colors"
                    placeholder={t("contact.form_placeholder_subject")}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-galliso text-sm font-normal leading-[100%] tracking-[1px] uppercase text-[#E0D3C4] mb-3">
                    {t("contact.form_message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[rgba(24,24,24,0.5)] border border-[rgba(239,231,210,0.15)] rounded-lg font-satoshi text-base text-[#EFE7D2] placeholder-[#8B7E6F] focus:outline-none focus:border-[rgba(239,231,210,0.3)] transition-colors resize-none"
                    placeholder={t("contact.form_placeholder_message")}
                  />
                </div>

                {formSubmitted && (
                  <div className="px-4 py-3 bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.3)] rounded-lg">
                    <p className="font-satoshi text-sm text-[#22c55e]">
                      {t("contact.form_success")}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-lg border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)] text-[#E0D3C4] font-galliso text-sm font-normal leading-[130%] tracking-[1px] uppercase hover:bg-[rgba(24,24,24,0.7)] transition-colors"
                >
                  {t("contact.form_submit")}
                </button>

                <Link
                  to="/"
                  className="block text-center px-6 py-4 rounded-lg border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.3)] text-[#E0D3C4] font-galliso text-sm font-normal leading-[130%] tracking-[1px] uppercase hover:bg-[rgba(24,24,24,0.5)] transition-colors"
                >
                  {t("contact.back")}
                </Link>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
