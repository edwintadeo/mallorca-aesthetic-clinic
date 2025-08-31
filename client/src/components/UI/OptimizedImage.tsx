import LazyImage from "./LazyImage";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "1:1" | "4:3" | "16:9" | "21:9";
  priority?: boolean;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  aspectRatio = "16:9",
  priority = false 
}: OptimizedImageProps) {
  // Calculate aspect ratio padding for responsive container
  const getAspectRatioPadding = () => {
    switch (aspectRatio) {
      case "1:1": return "100%";
      case "4:3": return "75%";
      case "16:9": return "56.25%";
      case "21:9": return "42.86%";
      default: return "56.25%";
    }
  };

  // Generate responsive sizes for different breakpoints
  const sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";
  
  return (
    <div className="relative" style={{ paddingBottom: getAspectRatioPadding() }}>
      <LazyImage
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover ${className}`}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
}