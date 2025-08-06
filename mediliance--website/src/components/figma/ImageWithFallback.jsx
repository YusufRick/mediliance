import { useState } from 'react';

export function ImageWithFallback({ src, alt, className, ...props }) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (hasError) {
    return (
      <div 
        className={`flex items-center justify-center bg-muted text-muted-foreground ${className}`}
        {...props}
      >
        <span className="text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div 
          className={`flex items-center justify-center bg-muted animate-pulse ${className}`}
          {...props}
        >
          <span className="text-sm text-muted-foreground">Loading...</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'hidden' : ''}`}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    </>
  );
}