import { useState, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  blurDataURL?: string;
  sizes?: string;
  srcSet?: string;
  style?: React.CSSProperties;
  mobileOptimized?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  className = "",
  priority = false,
  blurDataURL,
  sizes = "100vw",
  srcSet,
  style,
  mobileOptimized = false,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate optimized sizes based on viewport for mobile-first approach
  const getResponsiveSizes = () => {
    if (mobileOptimized) {
      // Mobile-first: smaller images on mobile, larger on desktop
      return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px";
    }
    return sizes;
  };

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {/* Low quality placeholder with gradient background */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse"
          aria-hidden="true"
        />
      )}

      {/* Blur placeholder */}
      {blurDataURL && !isLoaded && isMounted && (
        <img
          src={blurDataURL}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-lg scale-110 transition-opacity duration-300"
          aria-hidden="true"
          loading="eager"
        />
      )}

      {/* Main image - only render after mount for better SSR */}
      {isMounted && (
        <img
          src={src}
          srcSet={srcSet}
          sizes={getResponsiveSizes()}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ease-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          onLoad={() => setIsLoaded(true)}
          decoding="async"
        />
      )}
    </div>
  );
}
