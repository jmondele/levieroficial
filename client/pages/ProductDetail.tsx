import { Link, useParams, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

interface Product {
  id: string;
  name_key: string;
  description_key: string;
  price_key: string;
  images: string[];
  details_key?: string;
  ingredients_key?: string;
  features?: string[];
}

const products: Record<string, Product> = {
  "snackers": {
    id: "snackers",
    name_key: "SNACKERS",
    description_key: "product.snackers_6u_desc",
    price_key: "price.snackers_6u",
    images: ["/snackers/2T5A8628.jpeg", "/snackers/2T5A8620.jpeg", "/snackers/2T5A8639.jpeg"],
    details_key: "product.snackers_6u_details",
    ingredients_key: "product.snackers_6u_ingredients",
    features: ["Gluten-free", "Low glycemic index", "Non-GMO organic dates", "Perfect pre/post workout", "Available in 6 units or Family Size (24 units)"],
  },
  "snackers-6u": {
    id: "snackers-6u",
    name_key: "product.snackers_6u",
    description_key: "product.snackers_6u_desc",
    price_key: "price.snackers_6u",
    images: ["/snackers/2T5A8628.jpeg", "/snackers/2T5A8620.jpeg", "/snackers/2T5A8639.jpeg"],
    details_key: "product.snackers_6u_details",
    ingredients_key: "product.snackers_6u_ingredients",
    features: ["Gluten-free", "Low glycemic index", "Non-GMO organic dates", "Perfect pre/post workout"],
  },
  "snackers-family": {
    id: "snackers-family",
    name_key: "product.snackers_family",
    description_key: "product.snackers_family_desc",
    price_key: "price.snackers_family",
    images: ["/snackers/2T5A8628.jpeg", "/snackers/2T5A8620.jpeg", "/snackers/2T5A8639.jpeg"],
    features: ["24 units", "Gluten-free", "Low glycemic index", "Non-GMO organic dates", "Perfect for sharing"],
  },
  "snackers-dark": {
    id: "snackers-dark",
    name_key: "product.snackers_dark",
    description_key: "product.snackers_dark_desc",
    price_key: "price.snackers_dark",
    images: [
      "/snackerchocolate/WhatsApp Image 2025-11-17 at 18.42.13_23b6a207.jpg",
      "/snackerchocolate/WhatsApp Image 2025-11-17 at 18.43.00_094dc3d2.jpg",
      "/snackers/2T5A8639.jpeg"
    ],
    ingredients_key: "product.snackers_dark_ingredients",
    features: ["Sugar-free dark chocolate", "Gluten-free", "Low glycemic index", "56% cacao", "Available in 6 units or Family Size (24 units)"],
  },
  "snackers-dark-6u": {
    id: "snackers-dark-6u",
    name_key: "product.snackers_dark",
    description_key: "product.snackers_dark_desc",
    price_key: "price.snackers_dark_6u",
    images: [
      "/snackerchocolate/WhatsApp Image 2025-11-17 at 18.42.13_23b6a207.jpg",
      "/snackerchocolate/WhatsApp Image 2025-11-17 at 18.43.00_094dc3d2.jpg",
      "/snackers/2T5A8639.jpeg"
    ],
    ingredients_key: "product.snackers_dark_ingredients",
    features: ["Sugar-free dark chocolate", "Gluten-free", "Low glycemic index", "56% cacao"],
  },
  "snackers-dark-family": {
    id: "snackers-dark-family",
    name_key: "product.snackers_dark",
    description_key: "product.snackers_dark_desc",
    price_key: "price.snackers_dark_family",
    images: [
      "/snackerchocolate/WhatsApp Image 2025-11-17 at 18.42.13_23b6a207.jpg",
      "/snackerchocolate/WhatsApp Image 2025-11-17 at 18.43.00_094dc3d2.jpg",
      "/snackers/2T5A8639.jpeg"
    ],
    ingredients_key: "product.snackers_dark_ingredients",
    features: ["24 units", "Sugar-free dark chocolate", "Gluten-free", "Low glycemic index", "56% cacao", "Perfect for sharing"],
  },
  "cheesecake-tamarindo": {
    id: "cheesecake-tamarindo",
    name_key: "product.cheesecake_tamarindo",
    description_key: "product.cheesecake_tamarindo_desc",
    price_key: "price.cheesecake_tamarindo",
    images: ["https://images.unsplash.com/photo-1533134242820-b74891e8923a?w=500&h=500&fit=crop"],
    features: ["Sugar-free", "Authentic Panamanian flavor", "Handcrafted"],
  },
  hummus: {
    id: "hummus",
    name_key: "product.hummus",
    description_key: "product.hummus_desc",
    price_key: "price.hummus",
    images: [
      "/hummus/WhatsApp Image 2025-11-17 at 18.41.04_58d00501.jpg",
      "/hummus/WhatsApp Image 2025-11-17 at 18.44.46_8faa91b9.jpg",
      "/hummus/WhatsApp Image 2025-11-17 at 18.44.46_a4906e5b.jpg",
      "/hummus/2T5A8647.jpeg",
      "/hummus/2T5A8685.jpeg"
    ],
    details_key: "product.hummus_details",
    ingredients_key: "product.hummus_ingredients",
    features: ["No additives", "No preservatives", "Fresh ingredients", "Authentic taste"],
  },
  "cashew-butter": {
    id: "cashew-butter",
    name_key: "product.cashew_butter",
    description_key: "product.cashew_butter_desc",
    price_key: "price.cashew_butter",
    images: ["/2T5A8596.JPEG"],
    details_key: "product.cashew_butter_details",
    ingredients_key: "product.cashew_butter_ingredients",
    features: ["Only 2 ingredients", "Ultra creamy", "Small batch production", "Versatile"],
  },
  "cinnamon-cashew-butter": {
    id: "cinnamon-cashew-butter",
    name_key: "product.cinnamon_cashew_butter",
    description_key: "product.cinnamon_cashew_butter_desc",
    price_key: "price.cinnamon_cashew_butter",
    images: ["https://images.unsplash.com/photo-1600603405959-6d623e92445c?w=500&h=500&fit=crop"],
    details_key: "product.cinnamon_cashew_butter_details",
    ingredients_key: "product.cinnamon_cashew_butter_ingredients",
    features: ["No added sugar", "Ceylon cinnamon", "Naturally sweet taste", "Perfect for spreads"],
  },
  "citric-hot-honey": {
    id: "citric-hot-honey",
    name_key: "product.citric_hot_honey",
    description_key: "product.citric_hot_honey_desc",
    price_key: "price.citric_hot_honey",
    images: ["/2T5A8728.JPEG"],
    details_key: "product.citric_hot_honey_details",
    ingredients_key: "product.citric_hot_honey_ingredients",
    features: ["Real citrus zest", "Balanced heat", "Versatile condiment", "Handcrafted"],
  },
};

export default function ProductDetail() {
  const { t } = useLanguage();
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = productId ? products[productId] : null;

  // Preload product images for faster loading
  useEffect(() => {
    if (product && product.images.length > 0) {
      // Preload the first image with high priority
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = product.images[0];
      preloadLink.fetchPriority = 'high';
      document.head.appendChild(preloadLink);

      // Preload additional images in the background
      product.images.slice(1, 3).forEach((image) => {
        const img = new Image();
        img.src = image;
      });

      return () => {
        document.head.removeChild(preloadLink);
      };
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0A0B0A] text-[#EFE7D2] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-galliso text-4xl mb-4">Product not found</h1>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)] text-[#E0D3C4] font-galliso text-sm uppercase hover:bg-[rgba(24,24,24,0.7)] transition-colors"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

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
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 rounded-2xl overflow-hidden bg-black">
          <div className="p-8 md:p-12 lg:p-16">
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)] text-[#E0D3C4] font-galliso text-xs font-normal leading-[130%] tracking-[1px] uppercase hover:bg-[rgba(24,24,24,0.7)] transition-colors"
            >
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
              Back
            </button>

            {/* Product Detail Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Images */}
              <div className="space-y-6">
                {/* Main Image with Carousel Controls */}
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-[rgba(24,24,24,0.3)] border border-[rgba(239,231,210,0.15)] group">
                  <img
                    src={product.images[currentImageIndex]}
                    alt={t(product.name_key)}
                    className="w-full h-full object-cover transition-opacity duration-300"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />

                  {/* Carousel Navigation Arrows (show if multiple images) */}
                  {product.images.length > 1 && (
                    <>
                      {/* Previous Button */}
                      <button
                        onClick={() => setCurrentImageIndex((prev) => prev === 0 ? product.images.length - 1 : prev - 1)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.7)] border border-[rgba(239,231,210,0.3)] text-[#EFE7D2] opacity-0 group-hover:opacity-100 hover:bg-[rgba(0,0,0,0.9)] transition-all duration-300"
                        aria-label="Previous image"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>

                      {/* Next Button */}
                      <button
                        onClick={() => setCurrentImageIndex((prev) => prev === product.images.length - 1 ? 0 : prev + 1)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.7)] border border-[rgba(239,231,210,0.3)] text-[#EFE7D2] opacity-0 group-hover:opacity-100 hover:bg-[rgba(0,0,0,0.9)] transition-all duration-300"
                        aria-label="Next image"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>

                      {/* Image Counter */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[rgba(0,0,0,0.7)] border border-[rgba(239,231,210,0.3)] text-[#EFE7D2] text-xs font-galliso tracking-wider">
                        {currentImageIndex + 1} / {product.images.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Image Thumbnails (if multiple images) */}
                {product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-4">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative w-full aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                          currentImageIndex === index
                            ? "border-[#EFE7D2] scale-95"
                            : "border-[rgba(239,231,210,0.15)] hover:border-[rgba(239,231,210,0.3)]"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${t(product.name_key)} - ${index + 1}`}
                          className="w-full h-full object-cover transition-opacity duration-200"
                          loading="lazy"
                          decoding="async"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column - Product Info */}
              <div className="space-y-8">
                {/* Product Name */}
                <div>
                  <h1 className="font-galliso text-4xl md:text-5xl font-normal leading-[100%] tracking-[2px] uppercase text-[#EFE7D2] mb-4">
                    {t(product.name_key)}
                  </h1>
                  <p className="font-galliso text-2xl font-normal tracking-[1px] text-[#EFE7D2]">
                    {t(product.price_key)}
                  </p>
                </div>

                {/* Description */}
                <div className="border-t border-[rgba(239,231,210,0.15)] pt-6">
                  <h2 className="font-galliso text-xl font-normal leading-[120%] tracking-[1px] uppercase text-[#EFE7D2] mb-3">
                    {t("product.description")}
                  </h2>
                  <p className="font-satoshi text-base font-normal leading-[180%] text-[#E0D3C4]">
                    {t(product.description_key)}
                  </p>
                </div>

                {/* Additional Details (if available) */}
                {product.details_key && (
                  <div className="border-t border-[rgba(239,231,210,0.15)] pt-6">
                    <h2 className="font-galliso text-xl font-normal leading-[120%] tracking-[1px] uppercase text-[#EFE7D2] mb-3">
                      {t("product.details")}
                    </h2>
                    <p className="font-satoshi text-base font-normal leading-[180%] text-[#E0D3C4]">
                      {t(product.details_key)}
                    </p>
                  </div>
                )}

                {/* Ingredients (if available) */}
                {product.ingredients_key && (
                  <div className="border-t border-[rgba(239,231,210,0.15)] pt-6">
                    <h2 className="font-galliso text-xl font-normal leading-[120%] tracking-[1px] uppercase text-[#EFE7D2] mb-3">
                      {t("product.ingredients")}
                    </h2>
                    <p className="font-satoshi text-base font-normal leading-[180%] text-[#E0D3C4]">
                      {t(product.ingredients_key)}
                    </p>
                  </div>
                )}

                {/* Features (if available) */}
                {product.features && product.features.length > 0 && (
                  <div className="border-t border-[rgba(239,231,210,0.15)] pt-6">
                    <h2 className="font-galliso text-xl font-normal leading-[120%] tracking-[1px] uppercase text-[#EFE7D2] mb-3">
                      {t("product.features")}
                    </h2>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li
                          key={index}
                          className="font-satoshi text-base font-normal leading-[180%] text-[#E0D3C4] flex items-start gap-2"
                        >
                          <span className="text-[#EFE7D2] mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Sales Points */}
                <div className="border-t border-[rgba(239,231,210,0.15)] pt-6">
                  <h2 className="font-galliso text-xl font-normal leading-[120%] tracking-[1px] uppercase text-[#EFE7D2] mb-3">
                    {t("product.where_to_buy")}
                  </h2>
                  <ul className="space-y-2">
                    <li className="font-satoshi text-base font-normal leading-[180%] text-[#E0D3C4] flex items-start gap-2">
                      <span className="text-[#EFE7D2] mt-1">•</span>
                      Saha Yoga Studio
                    </li>
                    <li className="font-satoshi text-base font-normal leading-[180%] text-[#E0D3C4] flex items-start gap-2">
                      <span className="text-[#EFE7D2] mt-1">•</span>
                      Coffee Max Paitilla
                    </li>
                    <li className="font-satoshi text-base font-normal leading-[180%] text-[#E0D3C4] flex items-start gap-2">
                      <span className="text-[#EFE7D2] mt-1">•</span>
                      Brew Coffee
                    </li>
                  </ul>
                </div>

                {/* Order Button */}
                <div className="border-t border-[rgba(239,231,210,0.15)] pt-6">
                  <a
                    href={`https://wa.me/50769072343?text=Hi! I'm interested in ordering ${t(product.name_key)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-[#F57200] hover:bg-[#FFA456] text-[#EFE7D2] font-galliso text-base font-normal leading-[130%] tracking-[1px] uppercase transition-colors w-full md:w-auto"
                  >
                    {t("products.order")}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.7625 11.7375L13.2625 7.2375C13.228 7.20303 13.1871 7.17568 13.1421 7.15702C13.097 7.13837 13.0488 7.12877 13 7.12877C12.9512 7.12877 12.903 7.13837 12.8579 7.15702C12.8129 7.17568 12.772 7.20303 12.7375 7.2375C12.703 7.27197 12.6757 7.31289 12.657 7.35794C12.6384 7.40298 12.6288 7.45125 12.6288 7.5C12.6288 7.54875 12.6384 7.59702 12.657 7.64206C12.6757 7.68711 12.703 7.72803 12.7375 7.7625L16.5937 11.625H6.5C6.40054 11.625 6.30516 11.6645 6.23484 11.7348C6.16451 11.8052 6.125 11.9005 6.125 12C6.125 12.0995 6.16451 12.1948 6.23484 12.2652C6.30516 12.3355 6.40054 12.375 6.5 12.375H16.5937L12.7375 16.2375C12.6679 16.3071 12.6288 16.4015 12.6288 16.5C12.6288 16.5985 12.6679 16.6929 12.7375 16.7625C12.8071 16.8321 12.9015 16.8712 13 16.8712C13.0985 16.8712 13.1929 16.8321 13.2625 16.7625L17.7625 12.2625C17.798 12.2286 17.8264 12.1879 17.8457 12.1428C17.865 12.0977 17.875 12.0491 17.875 12C17.875 11.9509 17.865 11.9023 17.8457 11.8572C17.8264 11.8121 17.798 11.7714 17.7625 11.7375Z" fill="#EFE7D2"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
