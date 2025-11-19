interface DifferenceCardProps {
  title: string;
  description: string;
}

export default function DifferenceCard({ title, description }: DifferenceCardProps) {
  return (
    <div className="group p-6 md:p-8 rounded-xl border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.3)] hover:bg-[rgba(24,24,24,0.5)] hover:border-[rgba(239,231,210,0.25)] transition-all duration-300 backdrop-blur-sm">
      <div className="flex gap-4">
        <div className="flex-shrink-0 mt-1">
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#EFE7D2] to-[#E0D3C4] shadow-lg"></div>
        </div>
        <div className="flex-1">
          <h3 className="font-galliso text-sm md:text-base font-normal tracking-[1px] uppercase text-[#EFE7D2] mb-2 group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="font-satoshi text-sm md:text-base font-normal leading-[160%] text-[#E0D3C4]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
