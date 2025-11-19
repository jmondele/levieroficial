import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

interface ProductOption {
  name_key: string;
  price_key: string;
  slug: string;
}

interface Product {
  id: number;
  slug: string;
  name_key: string;
  description_key: string;
  price_key?: string;
  image: string;
  options?: ProductOption[];
}

export default function Products() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const appetizers: Product[] = [
    {
      id: 1,
      slug: "snackers",
      name_key: "SNACKERS",
      description_key: "product.snackers_6u_desc",
      image: "/snackers/2T5A8628.jpeg",
      options: [
        {
          name_key: "6 units",
          price_key: "price.snackers_6u",
          slug: "snackers-6u"
        },
        {
          name_key: "Family Size (24 units)",
          price_key: "price.snackers_family",
          slug: "snackers-family"
        }
      ]
    },
    {
      id: 3,
      slug: "snackers-dark",
      name_key: "product.snackers_dark",
      description_key: "product.snackers_dark_desc",
      image: "/snackerchocolate/WhatsApp Image 2025-11-17 at 18.43.00_094dc3d2.jpg",
      options: [
        {
          name_key: "6 units",
          price_key: "price.snackers_dark_6u",
          slug: "snackers-dark-6u"
        },
        {
          name_key: "Family Size (24 units)",
          price_key: "price.snackers_dark_family",
          slug: "snackers-dark-family"
        }
      ]
    },
    {
      id: 4,
      slug: "cheesecake-tamarindo",
      name_key: "product.cheesecake_tamarindo",
      description_key: "product.cheesecake_tamarindo_desc",
      price_key: "price.cheesecake_tamarindo",
      image: "https://images.unsplash.com/photo-1533134242820-b74891e8923a?w=500&h=500&fit=crop",
    },
    {
      id: 5,
      slug: "hummus",
      name_key: "product.hummus",
      description_key: "product.hummus_desc",
      price_key: "price.hummus",
      image: "/hummus/WhatsApp Image 2025-11-17 at 18.41.04_58d00501.jpg",
    },
    {
      id: 6,
      slug: "cashew-butter",
      name_key: "product.cashew_butter",
      description_key: "product.cashew_butter_desc",
      price_key: "price.cashew_butter",
      image: "/2T5A8596.JPEG",
    },
    {
      id: 7,
      slug: "cinnamon-cashew-butter",
      name_key: "product.cinnamon_cashew_butter",
      description_key: "product.cinnamon_cashew_butter_desc",
      price_key: "price.cinnamon_cashew_butter",
      image: "https://images.unsplash.com/photo-1600603405959-6d623e92445c?w=500&h=500&fit=crop",
    },
    {
      id: 8,
      slug: "citric-hot-honey",
      name_key: "product.citric_hot_honey",
      description_key: "product.citric_hot_honey_desc",
      price_key: "price.citric_hot_honey",
      image: "/honey/2T5A8728.jpeg",
    },
  ];

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
              <p className="text-[#E0D3C4] font-galliso text-xs uppercase tracking-[1px] mb-4">Follow Us</p>
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
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)] hover:bg-[rgba(24,24,24,0.7)] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1719 9C16.1719 7.58154 15.7513 6.19493 14.9632 5.01552C14.1751 3.83611 13.055 2.91688 11.7446 2.37405C10.4341 1.83123 8.99205 1.68921 7.60084 1.96593C6.20963 2.24266 4.93173 2.92572 3.92872 3.92872C2.92572 4.93173 2.24266 6.20963 1.96593 7.60084C1.68921 8.99205 1.83123 10.4341 2.37405 11.7446C2.91688 13.055 3.83611 14.1751 5.01552 14.9632C6.19493 15.7513 7.58154 16.1719 9 16.1719C10.9015 16.17 12.7246 15.4138 14.0692 14.0692C15.4138 12.7246 16.17 10.9015 16.1719 9ZM9.42188 15.3141V10.5469H11.25C11.3619 10.5469 11.4692 10.5024 11.5483 10.4233C11.6274 10.3442 11.6719 10.2369 11.6719 10.125C11.6719 10.0131 11.6274 9.90581 11.5483 9.82669C11.4692 9.74758 11.3619 9.70313 11.25 9.70313H9.42188V7.875C9.42372 7.53991 9.55766 7.21906 9.79461 6.98211C10.0316 6.74516 10.3524 6.61122 10.6875 6.60938H11.8125C11.9244 6.60938 12.0317 6.56493 12.1108 6.48581C12.1899 6.4067 12.2344 6.29939 12.2344 6.1875C12.2344 6.07561 12.1899 5.96831 12.1108 5.88919C12.0317 5.81008 11.9244 5.76563 11.8125 5.76563H10.6875C10.1286 5.76748 9.59318 5.99031 9.198 6.3855C8.80281 6.78068 8.57998 7.31613 8.57813 7.875V9.70313H6.75C6.63811 9.70313 6.53081 9.74758 6.45169 9.82669C6.37258 9.90581 6.32813 10.0131 6.32813 10.125C6.32813 10.2369 6.37258 10.3442 6.45169 10.4233C6.53081 10.5024 6.63811 10.5469 6.75 10.5469H8.57813V15.3141C6.94 15.2046 5.40853 14.4628 4.30714 13.2453C3.20574 12.0277 2.62064 10.4298 2.6754 8.78896C2.73016 7.1481 3.42048 5.59274 4.6006 4.45135C5.78071 3.30996 7.3582 2.63376 9 2.63376C10.6418 2.63376 12.2193 3.30996 13.3994 4.45135C14.5795 5.59274 15.2698 7.1481 15.3246 8.78896C15.3793 10.4298 14.7942 12.0277 13.6928 13.2453C12.5914 14.4628 11.06 15.2046 9.42188 15.3141Z" fill="#EFE7D2"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 rounded-2xl overflow-hidden bg-black">
          <div className="p-8 md:p-12 lg:p-16">
            {/* Header */}
            <div className="mb-12">
              <h1 className="font-galliso text-5xl md:text-6xl font-normal leading-[100%] tracking-[2px] uppercase text-[#EFE7D2] mb-3">
                {t("products.title")}
              </h1>
              <p className="font-satoshi text-lg font-normal leading-[160%] text-[#E0D3C4]">
                {t("products.subtitle")}
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {appetizers.map((product) => (
                <div
                  key={product.id}
                  className="rounded-lg overflow-hidden bg-[rgba(24,24,24,0.5)] border border-[rgba(239,231,210,0.15)] hover:border-[rgba(239,231,210,0.3)] transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(239,231,210,0.1)]"
                >
                  {/* Product Image */}
                  <div className="relative w-full h-64 overflow-hidden bg-[rgba(24,24,24,0.3)]">
                    <img
                      src={product.image}
                      alt={product.name_key}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-galliso text-xl font-normal leading-[120%] tracking-[1px] uppercase text-[#EFE7D2] mb-2">
                        {product.name_key.startsWith('product.') ? t(product.name_key) : product.name_key}
                      </h3>
                      <p className="font-satoshi text-sm font-normal leading-[160%] text-[#E0D3C4]">
                        {t(product.description_key)}
                      </p>
                    </div>

                    {/* Size Options or Single Price */}
                    {product.options ? (
                      <div className="pt-4 border-t border-[rgba(239,231,210,0.15)] space-y-3">
                        {/* Size Options */}
                        <div className="space-y-2">
                          {product.options.map((option, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 rounded-lg border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.3)]"
                            >
                              <span className="font-galliso text-sm font-normal tracking-[1px] uppercase text-[#E0D3C4]">
                                {option.name_key}
                              </span>
                              <span className="font-galliso text-base font-normal tracking-[1px] text-[#EFE7D2]">
                                {t(option.price_key)}
                              </span>
                            </div>
                          ))}
                        </div>
                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <a
                            href={`https://wa.me/50769072343?text=Hi! I'm interested in ordering ${product.name_key}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-3 rounded-lg bg-[#F57200] hover:bg-[#FFA456] text-[#EFE7D2] font-galliso text-xs font-normal leading-[130%] tracking-[1px] uppercase transition-colors text-center"
                          >
                            {t("products.order")}
                          </a>
                          <Link
                            to={`/products/${product.slug}`}
                            className="flex-1 px-4 py-3 rounded-lg border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)] hover:bg-[rgba(24,24,24,0.7)] text-[#E0D3C4] font-galliso text-xs font-normal leading-[130%] tracking-[1px] uppercase transition-colors text-center"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div className="pt-4 border-t border-[rgba(239,231,210,0.15)] space-y-3">
                        {/* Price */}
                        <div className="flex items-center justify-center">
                          <span className="font-galliso text-xl font-normal tracking-[1px] uppercase text-[#EFE7D2]">
                            {product.price_key && t(product.price_key)}
                          </span>
                        </div>
                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <a
                            href={`https://wa.me/50769072343?text=Hi! I'm interested in ordering ${product.name_key.startsWith('product.') ? t(product.name_key) : product.name_key}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-3 rounded-lg bg-[#F57200] hover:bg-[#FFA456] text-[#EFE7D2] font-galliso text-xs font-normal leading-[130%] tracking-[1px] uppercase transition-colors text-center"
                          >
                            {t("products.order")}
                          </a>
                          <Link
                            to={`/products/${product.slug}`}
                            className="flex-1 px-4 py-3 rounded-lg border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)] hover:bg-[rgba(24,24,24,0.7)] text-[#E0D3C4] font-galliso text-xs font-normal leading-[130%] tracking-[1px] uppercase transition-colors text-center"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Back Button */}
            <div className="mt-12 flex justify-center">
              <Link
                to="/"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-lg border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)] text-[#E0D3C4] font-galliso text-sm font-normal leading-[130%] tracking-[1px] uppercase hover:bg-[rgba(24,24,24,0.7)] transition-colors"
              >
                {t("products.back")}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.23754 8.26252L6.73754 12.7625C6.77197 12.797 6.8129 12.8243 6.85794 12.843C6.90298 12.8616 6.95125 12.8712 7.00004 12.8712C7.04879 12.8712 7.09706 12.8616 7.1421 12.843C7.18714 12.8243 7.22807 12.797 7.2625 12.7625C7.29697 12.728 7.32432 12.6871 7.34297 12.6421C7.36163 12.597 7.37123 12.5488 7.37123 12.5C7.37123 12.4513 7.36163 12.403 7.34297 12.358C7.32432 12.3129 7.29697 12.272 7.2625 12.2375L3.40629 8.37502H13.5C13.5995 8.37502 13.6948 8.33551 13.7652 8.26518C13.8355 8.19485 13.875 8.09947 13.875 8.00002C13.875 7.90056 13.8355 7.80518 13.7652 7.73485C13.6948 7.66452 13.5995 7.62502 13.5 7.62502H3.40629L7.2625 3.76252C7.33212 3.6929 7.37123 3.59847 7.37123 3.50002C7.37123 3.40156 7.33212 3.30713 7.2625 3.23752C7.19288 3.1679 7.09846 3.12878 7.00004 3.12878C6.90158 3.12878 6.80716 3.1679 6.73754 3.23752L2.23754 7.73752C2.20197 7.77137 2.17362 7.8121 2.15432 7.85722C2.135 7.90234 2.125 7.95092 2.125 8.00002C2.125 8.04911 2.135 8.09769 2.15432 8.14281C2.17362 8.18793 2.20197 8.22866 2.23754 8.26252Z"
                    fill="#EFE7D2"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
