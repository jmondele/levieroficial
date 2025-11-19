export default function SplashScreen() {

  return (
    <div className="fixed inset-0 bg-[#0A0B0A] flex items-center justify-center z-[9999]">
      <div className="animate-fade-in flex flex-col items-center justify-center gap-8">
        <img
          src="/Recurso8.svg"
          alt="Levier"
          className="h-24 md:h-32 w-auto object-contain animate-scale-in"
        />
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#EFE7D2] rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
          <div className="w-2 h-2 bg-[#EFE7D2] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-2 bg-[#EFE7D2] rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
