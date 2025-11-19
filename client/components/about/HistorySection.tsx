import { useLanguage } from "@/context/LanguageContext";

export default function HistorySection() {
  const { t } = useLanguage();

  return (
    <div className="mb-20">
      <h2 className="font-galliso text-4xl md:text-5xl font-normal leading-[110%] tracking-[2px] uppercase text-[#EFE7D2] mb-12 text-center">
        {t("about.history_title")}
      </h2>

      {/* Featured Chef Photo */}
      <div className="flex justify-center mb-16">
        <div className="w-full max-w-2xl">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(239,231,210,0.1)] to-transparent rounded-3xl"></div>
            <img
              src="/chef/image0cut.jpeg"
              alt="Javier Bernal - Chef & Founder"
              className="w-full h-auto rounded-3xl object-cover shadow-2xl border border-[rgba(239,231,210,0.15)]"
              loading="lazy"
            />
          </div>
          <p className="text-center mt-6 font-galliso text-sm uppercase tracking-[1px] text-[#E0D3C4] font-light">
            {t("about.caption")}
          </p>
        </div>
      </div>

      {/* Story Text */}
      <div className="max-w-3xl mx-auto space-y-8">
        <p className="font-satoshi text-base md:text-lg font-normal leading-[180%] text-[#E0D3C4]">
          {t("about.history1")}
        </p>

        <p className="font-satoshi text-base md:text-lg font-normal leading-[180%] text-[#E0D3C4]">
          {t("about.history2")}
        </p>

        <p className="font-satoshi text-base md:text-lg font-normal leading-[180%] text-[#E0D3C4]">
          {t("about.history3")}
        </p>

        <p className="font-satoshi text-base md:text-lg font-normal leading-[180%] text-[#E0D3C4]">
          {t("about.history4")}
        </p>

        <p className="font-satoshi text-base md:text-lg font-normal leading-[180%] text-[#E0D3C4]">
          {t("about.history5")}
          <br />
          <span className="text-[#EFE7D2] font-semibold">{t("about.history6")}</span>
        </p>
      </div>
    </div>
  );
}
