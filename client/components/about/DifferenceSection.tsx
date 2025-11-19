import { useLanguage } from "@/context/LanguageContext";
import DifferenceCard from "./DifferenceCard";

export default function DifferenceSection() {
  const { t } = useLanguage();

  const differences = [
    {
      title: t("about.different1_title"),
      description: t("about.different1"),
    },
    {
      title: t("about.different2_title"),
      description: t("about.different2"),
    },
    {
      title: t("about.different3_title"),
      description: t("about.different3"),
    },
    {
      title: t("about.different4_title"),
      description: t("about.different4"),
    },
    {
      title: t("about.different5_title"),
      description: t("about.different5"),
    },
  ];

  return (
    <div className="mb-20">
      <h2 className="font-galliso text-4xl md:text-5xl font-normal leading-[110%] tracking-[2px] uppercase text-[#EFE7D2] mb-12 text-center">
        {t("about.different_title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {differences.map((diff, index) => (
          <DifferenceCard
            key={index}
            title={diff.title}
            description={diff.description}
          />
        ))}
      </div>
    </div>
  );
}
