import { useLanguage } from "@/context/LanguageContext";

export default function IntroSection() {
  const { t } = useLanguage();

  return (
    <div className="mb-20">
      <div className="max-w-3xl mx-auto">
        <p className="font-satoshi text-lg md:text-xl font-normal leading-[180%] text-[#E0D3C4] mb-6">
          {t("about.intro1")}
        </p>
        <p className="font-satoshi text-lg md:text-xl font-normal leading-[180%] text-[#E0D3C4] mb-6">
          {t("about.intro2")}
        </p>
        <p className="font-satoshi text-lg md:text-xl font-normal leading-[180%] text-[#E0D3C4]">
          {t("about.intro3")}
        </p>
      </div>
    </div>
  );
}
