import { useState } from 'react';

interface VideoPlayerProps {
  src: string;
  fallbackSrc?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  poster?: string;
  controls?: boolean;
  onError?: () => void;
  children?: React.ReactNode;
}

export function VideoPlayer({
  src,
  fallbackSrc,
  className = "",
  autoPlay = false,
  muted = false,
  loop = false,
  playsInline = false,
  poster,
  controls = false,
  onError,
  children,
  ...props
}: VideoPlayerProps) {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  if (hasError && !fallbackSrc) {
    return poster ? (
      <div 
        className={`${className} bg-cover bg-center`}
        style={{ backgroundImage: `url(${poster})` }}
      />
    ) : null;
  }

  return (
    <video
      className={className}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      poster={poster}
      controls={controls}
      onError={handleError}
      {...props}
    >
      <source src={src} type="video/mp4" />
      {fallbackSrc && <source src={fallbackSrc} type="video/mp4" />}
      {children}
    </video>
  );
}