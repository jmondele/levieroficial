import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";
import OptimizedImage from "@/components/OptimizedImage";

export default function Index() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0A0B0A] text-[#EFE7D2] p-4 md:p-6">
      <div className="flex flex-col lg:flex-row gap-4 h-full">
        {/* Main Hero Section */}
        <div className="flex-1 relative rounded-2xl lg:rounded-r-[48px] overflow-hidden bg-black">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/snackers/2T5A8620.jpeg"
              alt="Snackers"
              className="w-full h-full object-cover"
              fetchPriority="high"
              loading="eager"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-60 z-20" />
          </div>

          {/* Content */}
          <div className="relative z-30 flex flex-col h-full min-h-[600px] lg:min-h-[800px]">
            <Navbar />

            {/* Hero Text */}
            <div className="mt-auto px-6 md:px-20 pb-12 md:pb-20">
              <h1 className="font-galliso text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-[100%] tracking-[3px] uppercase text-[#EFE7D2] max-w-4xl mx-auto text-center">
                {t("home.title")}
              </h1>
              <p className="font-galliso text-xl md:text-2xl lg:text-3xl font-normal leading-[120%] tracking-[1px] text-[#E0D3C4] mt-6 max-w-2xl">
                Snackers
              </p>
            </div>

            {/* Social Icons - Bottom Right */}
            <div className="absolute bottom-0 right-0 bg-[#0A0B0A] rounded-tl-3xl p-6 flex items-center gap-2">
              {/* Decorative rounded edges */}
              <div className="absolute -left-6 top-0 w-6 h-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0V24C0 10.7452 10.7452 0 24 0H0Z" fill="#0A0B0A" />
                </svg>
              </div>
              <div className="absolute right-0 -top-6 w-6 h-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 24V0C24 13.2548 13.2548 24 0 24H24Z"
                    fill="#0A0B0A"
                  />
                </svg>
              </div>

              {/* Social buttons */}
              <a
                href="https://www.instagram.com/levier.studio?igsh=MXM4eWtqdWxoMmNwNg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)] hover:bg-[rgba(239,231,210,0.1)] transition-colors"
                aria-label="Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5.76562C8.3603 5.76562 7.73497 5.95532 7.20308 6.31072C6.67119 6.66611 6.25663 7.17125 6.01183 7.76226C5.76702 8.35326 5.70297 9.00359 5.82777 9.63099C5.95257 10.2584 6.26062 10.8347 6.71295 11.287C7.16529 11.7394 7.7416 12.0474 8.36901 12.1722C8.99641 12.297 9.64674 12.233 10.2377 11.9882C10.8287 11.7434 11.3339 11.3288 11.6893 10.7969C12.0447 10.265 12.2344 9.6397 12.2344 9C12.2344 8.14219 11.8936 7.31951 11.287 6.71295C10.6805 6.10639 9.85781 5.76562 9 5.76562ZM9 11.3906C8.52718 11.3906 8.06498 11.2504 7.67184 10.9877C7.2787 10.725 6.97229 10.3517 6.79135 9.91485C6.61041 9.47802 6.56307 8.99735 6.65531 8.53361C6.74755 8.06988 6.97524 7.64391 7.30957 7.30957C7.64391 6.97524 8.06988 6.74755 8.53361 6.65531C8.99735 6.56307 9.47802 6.61041 9.91485 6.79135C10.3517 6.97229 10.725 7.2787 10.9877 7.67184C11.2504 8.06498 11.3906 8.52718 11.3906 9C11.3888 9.63346 11.1363 10.2404 10.6884 10.6884C10.2404 11.1363 9.63346 11.3888 9 11.3906ZM12.0938 2.10938H5.90625C4.89926 2.10937 3.93351 2.5094 3.22145 3.22145C2.5094 3.93351 2.10938 4.89926 2.10938 5.90625V12.0938C2.10937 13.1007 2.5094 14.0665 3.22145 14.7785C3.93351 15.4906 4.89926 15.8906 5.90625 15.8906H12.0938C13.1007 15.8906 14.0665 15.4906 14.7785 14.7785C15.4906 14.0665 15.8906 13.1007 15.8906 12.0938V5.90625C15.8906 4.89926 15.4906 3.93351 14.7785 3.22145C14.0665 2.5094 13.1007 2.10938 12.0938 2.10938ZM15.0469 12.0938C15.0469 12.877 14.7357 13.6281 14.1819 14.1819C13.6281 14.7357 12.877 15.0469 12.0938 15.0469H5.90625C5.12303 15.0469 4.37189 14.7357 3.81808 14.1819C3.26426 13.6281 2.95312 12.877 2.95312 12.0938V5.90625C2.95312 5.12303 3.26426 4.37189 3.81808 3.81808C4.37189 3.26426 5.12303 2.95312 5.90625 2.95312H12.0938C12.877 2.95312 13.6281 3.26426 14.1819 3.81808C14.7357 4.37189 15.0469 5.12303 15.0469 5.90625V12.0938ZM13.3594 5.34375C13.3594 5.48282 13.3181 5.61876 13.2409 5.73439C13.1636 5.85001 13.0538 5.94013 12.9253 5.99335C12.7968 6.04657 12.6555 6.06049 12.5191 6.03336C12.3827 6.00623 12.2574 5.93927 12.1591 5.84093C12.0607 5.7426 11.9938 5.61732 11.9666 5.48092C11.9395 5.34453 11.9534 5.20315 12.0066 5.07468C12.0599 4.9462 12.15 4.83638 12.2656 4.75912C12.3812 4.68186 12.5172 4.64062 12.6562 4.64062C12.8427 4.64062 13.0216 4.7147 13.1534 4.84657C13.2853 4.97843 13.3594 5.15727 13.3594 5.34375Z"
                    fill="#EFE7D2"
                  />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)] hover:bg-[rgba(239,231,210,0.1)] transition-colors"
                aria-label="Facebook"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1719 9C16.1719 7.58154 15.7513 6.19493 14.9632 5.01552C14.1751 3.83611 13.055 2.91688 11.7446 2.37405C10.4341 1.83123 8.99205 1.68921 7.60084 1.96593C6.20963 2.24266 4.93173 2.92572 3.92872 3.92872C2.92572 4.93173 2.24266 6.20963 1.96593 7.60084C1.68921 8.99205 1.83123 10.4341 2.37405 11.7446C2.91688 13.055 3.83611 14.1751 5.01552 14.9632C6.19493 15.7513 7.58154 16.1719 9 16.1719C10.9015 16.17 12.7246 15.4138 14.0692 14.0692C15.4138 12.7246 16.17 10.9015 16.1719 9ZM9.42188 15.3141V10.5469H11.25C11.3619 10.5469 11.4692 10.5024 11.5483 10.4233C11.6274 10.3442 11.6719 10.2369 11.6719 10.125C11.6719 10.0131 11.6274 9.90581 11.5483 9.82669C11.4692 9.74758 11.3619 9.70313 11.25 9.70313H9.42188V7.875C9.42372 7.53991 9.55766 7.21906 9.79461 6.98211C10.0316 6.74516 10.3524 6.61122 10.6875 6.60938H11.8125C11.9244 6.60938 12.0317 6.56493 12.1108 6.48581C12.1899 6.4067 12.2344 6.29939 12.2344 6.1875C12.2344 6.07561 12.1899 5.96831 12.1108 5.88919C12.0317 5.81008 11.9244 5.76563 11.8125 5.76563H10.6875C10.1286 5.76748 9.59318 5.99031 9.198 6.3855C8.80281 6.78068 8.57998 7.31613 8.57813 7.875V9.70313H6.75C6.63811 9.70313 6.53081 9.74758 6.45169 9.82669C6.37258 9.90581 6.32813 10.0131 6.32813 10.125C6.32813 10.2369 6.37258 10.3442 6.45169 10.4233C6.53081 10.5024 6.63811 10.5469 6.75 10.5469H8.57813V15.3141C6.94 15.2046 5.40853 14.4628 4.30714 13.2453C3.20574 12.0277 2.62064 10.4298 2.6754 8.78896C2.73016 7.1481 3.42048 5.59274 4.6006 4.45135C5.78071 3.30996 7.35822 2.67189 9 2.67189C10.6418 2.67189 12.2193 3.30996 13.3994 4.45135C14.5795 5.59274 15.2699 7.1481 15.3246 8.78896C15.3794 10.4298 14.7943 12.0277 13.6929 13.2453C12.5915 14.4628 11.06 15.2046 9.42188 15.3141Z"
                    fill="#EFE7D2"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Grid of Cards */}
        <div className="w-full lg:w-[420px] flex flex-col gap-4">
          {/* Menu Card */}
          <Link to="/products" className="relative flex-1 min-h-[200px] lg:min-h-[334px] rounded-2xl overflow-hidden block hover:opacity-90 transition-opacity">
            <div className="absolute inset-0">
              <img
                src="/hummus/WhatsApp Image 2025-11-17 at 18.41.04_58d00501.jpg"
                alt="Products"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-[#0A0B0A] rounded-tl-3xl p-6">
              {/* Decorative rounded edges */}
              <div className="absolute -left-6 top-0 w-6 h-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0V24C0 10.7452 10.7452 0 24 0H0Z" fill="#0A0B0A" />
                </svg>
              </div>
              <div className="absolute right-0 -top-6 w-6 h-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 24V0C24 13.2548 13.2548 24 0 24H24Z"
                    fill="#0A0B0A"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-galliso text-base font-normal leading-[100%] tracking-[1px] uppercase text-[#EFE7D2]">
                  {t("home.products")}
                </span>
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7625 8.26252L9.2625 12.7625C9.22803 12.797 9.1871 12.8243 9.14206 12.843C9.09702 12.8616 9.04875 12.8712 9 12.8712C8.95125 12.8712 8.90298 12.8616 8.85794 12.843C8.8129 12.8243 8.77197 12.797 8.7375 12.7625C8.70303 12.728 8.67568 12.6871 8.65703 12.6421C8.63837 12.597 8.62877 12.5488 8.62877 12.5C8.62877 12.4513 8.63837 12.403 8.65703 12.358C8.67568 12.3129 8.70303 12.272 8.7375 12.2375L12.5938 8.37502H2.5C2.40054 8.37502 2.30516 8.33551 2.23483 8.26518C2.16451 8.19485 2.125 8.09947 2.125 8.00002C2.125 7.90056 2.16451 7.80518 2.23483 7.73485C2.30516 7.66452 2.40054 7.62502 2.5 7.62502H12.5938L8.7375 3.76252C8.66788 3.6929 8.62877 3.59847 8.62877 3.50002C8.62877 3.40156 8.66788 3.30713 8.7375 3.23752C8.80712 3.1679 8.90154 3.12878 9 3.12878C9.09846 3.12878 9.19288 3.1679 9.2625 3.23752L13.7625 7.73752C13.798 7.77137 13.8264 7.8121 13.8457 7.85722C13.865 7.90234 13.875 7.95092 13.875 8.00002C13.875 8.04911 13.865 8.09769 13.8457 8.14281C13.8264 8.18793 13.798 8.22866 13.7625 8.26252Z"
                      fill="#EFE7D2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Reservation Card */}
          <Link to="/about" className="relative min-h-[150px] lg:min-h-[220px] rounded-2xl overflow-hidden block hover:opacity-90 transition-opacity">
            <div className="absolute inset-0 opacity-70">
              <OptimizedImage
                src="https://cdn.builder.io/api/v1/image/assets%2F0232cb78a60446ae98fdb33e73602887%2Fdc08a145746743cbb5b553a65c82c91f?format=webp&width=800"
                alt="Javier Bernal - Chef"
                className="w-full h-full"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 420px"
                mobileOptimized={true}
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-[#0A0B0A] rounded-tl-3xl p-6">
              {/* Decorative rounded edges */}
              <div className="absolute -left-6 top-0 w-6 h-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0V24C0 10.7452 10.7452 0 24 0H0Z" fill="#0A0B0A" />
                </svg>
              </div>
              <div className="absolute right-0 -top-6 w-6 h-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 24V0C24 13.2548 13.2548 24 0 24H24Z"
                    fill="#0A0B0A"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-galliso text-base font-normal leading-[100%] tracking-[1px] uppercase text-[#EFE7D2]">
                  {t("home.about_us")}
                </span>
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7625 8.26252L9.2625 12.7625C9.22803 12.797 9.1871 12.8243 9.14206 12.843C9.09702 12.8616 9.04875 12.8712 9 12.8712C8.95125 12.8712 8.90298 12.8616 8.85794 12.843C8.8129 12.8243 8.77197 12.797 8.7375 12.7625C8.70303 12.728 8.67568 12.6871 8.65703 12.6421C8.63837 12.597 8.62877 12.5488 8.62877 12.5C8.62877 12.4513 8.63837 12.403 8.65703 12.358C8.67568 12.3129 8.70303 12.272 8.7375 12.2375L12.5938 8.37502H2.5C2.40054 8.37502 2.30516 8.33551 2.23483 8.26518C2.16451 8.19485 2.125 8.09947 2.125 8.00002C2.125 7.90056 2.16451 7.80518 2.23483 7.73485C2.30516 7.66452 2.40054 7.62502 2.5 7.62502H12.5938L8.7375 3.76252C8.66788 3.6929 8.62877 3.59847 8.62877 3.50002C8.62877 3.40156 8.66788 3.30713 8.7375 3.23752C8.80712 3.1679 8.90154 3.12878 9 3.12878C9.09846 3.12878 9.19288 3.1679 9.2625 3.23752L13.7625 7.73752C13.798 7.77137 13.8264 7.8121 13.8457 7.85722C13.865 7.90234 13.875 7.95092 13.875 8.00002C13.875 8.04911 13.865 8.09769 13.8457 8.14281C13.8264 8.18793 13.798 8.22866 13.7625 8.26252Z"
                      fill="#EFE7D2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Our Restaurant Card */}
          <Link to="/contact" className="relative flex-1 min-h-[200px] lg:min-h-[334px] rounded-2xl overflow-hidden hover:opacity-90 transition-opacity bg-gradient-to-br from-[rgba(24,24,24,0.8)] to-[rgba(24,24,24,0.4)] flex items-center justify-center">
            <img
              src="/Recurso8.svg"
              alt="Levier Logo"
              className="h-32 md:h-48 w-auto object-contain"
              loading="lazy"
            />
            <div className="absolute bottom-0 right-0 bg-[#0A0B0A] rounded-tl-3xl p-6">
              {/* Decorative rounded edges */}
              <div className="absolute -left-6 top-0 w-6 h-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0V24C0 10.7452 10.7452 0 24 0H0Z" fill="#0A0B0A" />
                </svg>
              </div>
              <div className="absolute right-0 -top-6 w-6 h-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 24V0C24 13.2548 13.2548 24 0 24H24Z"
                    fill="#0A0B0A"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-galliso text-base font-normal leading-[100%] tracking-[1px] uppercase text-[#EFE7D2]">
                  {t("home.contact_us")}
                </span>
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7625 8.26252L9.2625 12.7625C9.22803 12.797 9.1871 12.8243 9.14206 12.843C9.09702 12.8616 9.04875 12.8712 9 12.8712C8.95125 12.8712 8.90298 12.8616 8.85794 12.843C8.8129 12.8243 8.77197 12.797 8.7375 12.7625C8.70303 12.728 8.67568 12.6871 8.65703 12.6421C8.63837 12.597 8.62877 12.5488 8.62877 12.5C8.62877 12.4513 8.63837 12.403 8.65703 12.358C8.67568 12.3129 8.70303 12.272 8.7375 12.2375L12.5938 8.37502H2.5C2.40054 8.37502 2.30516 8.33551 2.23483 8.26518C2.16451 8.19485 2.125 8.09947 2.125 8.00002C2.125 7.90056 2.16451 7.80518 2.23483 7.73485C2.30516 7.66452 2.40054 7.62502 2.5 7.62502H12.5938L8.7375 3.76252C8.66788 3.6929 8.62877 3.59847 8.62877 3.50002C8.62877 3.40156 8.66788 3.30713 8.7375 3.23752C8.80712 3.1679 8.90154 3.12878 9 3.12878C9.09846 3.12878 9.19288 3.1679 9.2625 3.23752L13.7625 7.73752C13.798 7.77137 13.8264 7.8121 13.8457 7.85722C13.865 7.90234 13.875 7.95092 13.875 8.00002C13.875 8.04911 13.865 8.09769 13.8457 8.14281C13.8264 8.18793 13.798 8.22866 13.7625 8.26252Z"
                      fill="#EFE7D2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
