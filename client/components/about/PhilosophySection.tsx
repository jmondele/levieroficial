import { useLanguage } from "@/context/LanguageContext";

export default function PhilosophySection() {
  const { t } = useLanguage();

  return (
    <div className="mb-20">
      <h2 className="font-galliso text-4xl md:text-5xl font-normal leading-[110%] tracking-[2px] uppercase text-[#EFE7D2] mb-12 text-center">
        {t("about.philosophy_title")}
      </h2>

      <div className="max-w-3xl mx-auto space-y-8 p-8 md:p-12 rounded-2xl border border-[rgba(239,231,210,0.1)] bg-[rgba(24,24,24,0.2)] backdrop-blur-sm">
        <p className="font-satoshi text-base md:text-lg font-normal leading-[180%] text-[#E0D3C4]">
          {t("about.philosophy1")}
        </p>

        <p className="font-satoshi text-base md:text-lg font-normal leading-[180%] text-[#E0D3C4]">
          {t("about.philosophy2")}
        </p>
      </div>
    </div>
  );
}
