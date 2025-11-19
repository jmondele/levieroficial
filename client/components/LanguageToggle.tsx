import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 ml-2">
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 rounded text-xs font-galliso uppercase tracking-[1px] transition-colors ${
          language === "en"
            ? "bg-[rgba(24,24,24,0.7)] text-[#EFE7D2]"
            : "text-[#8B7E6F] hover:text-[#E0D3C4]"
        }`}
      >
        EN
      </button>
      <span className="text-[#8B7E6F] text-xs">/</span>
      <button
        onClick={() => setLanguage("es")}
        className={`px-2 py-1 rounded text-xs font-galliso uppercase tracking-[1px] transition-colors ${
          language === "es"
            ? "bg-[rgba(24,24,24,0.7)] text-[#EFE7D2]"
            : "text-[#8B7E6F] hover:text-[#E0D3C4]"
        }`}
      >
        ES
      </button>
    </div>
  );
}
