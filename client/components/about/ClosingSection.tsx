import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";

export default function ClosingSection() {
  const { t } = useLanguage();

  return (
    <div className="pt-12">
      <div className="text-center mb-16">
        <h3 className="font-galliso text-5xl md:text-6xl font-normal leading-[110%] tracking-[2px] uppercase text-[#EFE7D2] mb-4">
          {t("about.closing_title")}
        </h3>
        <p className="font-galliso text-xl md:text-2xl font-normal leading-[130%] tracking-[1px] uppercase text-[#E0D3C4] font-light">
          {t("about.closing_subtitle")}
        </p>
      </div>

      {/* Back Button */}
      <div className="flex justify-center">
        <Link
          to="/"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-[rgba(239,231,210,0.2)] bg-[rgba(24,24,24,0.5)] text-[#E0D3C4] font-galliso text-sm font-normal leading-[130%] tracking-[1px] uppercase hover:bg-[rgba(239,231,210,0.05)] hover:border-[rgba(239,231,210,0.3)] transition-all duration-300 group"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-180 group-hover:-translate-x-1 transition-transform"
          >
            <path
              d="M13.7625 8.26252L9.2625 12.7625C9.22803 12.797 9.1871 12.8243 9.14206 12.843C9.09702 12.8616 9.04875 12.8712 9 12.8712C8.95125 12.8712 8.90298 12.8616 8.85794 12.843C8.8129 12.8243 8.77197 12.797 8.7375 12.7625C8.70303 12.728 8.67568 12.6871 8.65703 12.6421C8.63837 12.597 8.62877 12.5488 8.62877 12.5C8.62877 12.4513 8.63837 12.403 8.65703 12.358C8.67568 12.3129 8.70303 12.272 8.7375 12.2375L12.5938 8.37502H2.5C2.40054 8.37502 2.30516 8.33551 2.23483 8.26518C2.16451 8.19485 2.125 8.09947 2.125 8.00002C2.125 7.90056 2.16451 7.80518 2.23483 7.73485C2.30516 7.66452 2.40054 7.62502 2.5 7.62502H12.5938L8.7375 3.76252C8.66788 3.6929 8.62877 3.59847 8.62877 3.50002C8.62877 3.40156 8.66788 3.30713 8.7375 3.23752C8.80712 3.1679 8.90154 3.12878 9 3.12878C9.09846 3.12878 9.19288 3.1679 9.2625 3.23752L13.7625 7.73752C13.798 7.77137 13.8264 7.8121 13.8457 7.85722C13.865 7.90234 13.875 7.95092 13.875 8.00002C13.875 8.04911 13.865 8.09769 13.8457 8.14281C13.8264 8.18793 13.798 8.22866 13.7625 8.26252Z"
              fill="#EFE7D2"
            />
          </svg>
          {t("about.back")}
        </Link>
      </div>
    </div>
  );
}
