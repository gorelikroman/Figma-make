import React, { useState, useEffect, useRef } from 'react';

export interface ImageAsset {
  assetUri: string;
  assetAlt?: string;
}

export interface ImageProps {
  original: ImageAsset;
  webp?: ImageAsset;
  minimizedWebp?: ImageAsset;
  noLazyLoad?: boolean;
  priority?: 'high' | 'low';
  imageClasses?: string;
  wrapperClasses?: string;
  pictureClasses?: string;
  transitions?: string | string[];
}

export const Image: React.FC<ImageProps> = ({
  original,
  webp,
  minimizedWebp,
  noLazyLoad = false,
  priority,
  imageClasses = 'w-full h-auto block',
  wrapperClasses = 'h-full w-full',
  pictureClasses = 'h-full w-full block',
  transitions = '',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const hasBlur = !!minimizedWebp;

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Build transition CSS
  const transitionParts = ['opacity 400ms ease-in-out'];
  if (transitions) {
    if (Array.isArray(transitions)) {
      transitionParts.push(...transitions);
    } else {
      transitionParts.push(transitions);
    }
  }
  const transitionStyle = transitionParts.join(', ');

  return (
    <div 
      className={`${wrapperClasses} ${hasBlur ? 'blurred-img' : ''} ${isLoaded ? 'loaded' : ''}`}
      style={hasBlur && minimizedWebp ? { 
        backgroundImage: `url('${minimizedWebp.assetUri}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : undefined}
    >
      <picture className={pictureClasses}>
        {webp && (
          <source srcSet={webp.assetUri} type="image/webp" />
        )}
        <img
          ref={imgRef}
          src={original.assetUri}
          alt={original.assetAlt || ''}
          className={imageClasses}
          style={{ transition: transitionStyle }}
          loading={noLazyLoad ? undefined : 'lazy'}
          fetchPriority={priority}
          decoding="async"
          onLoad={handleLoad}
        />
      </picture>

      {/* Blur-up effect styles */}
      <style>{`
        .blurred-img {
          background-size: cover;
          background-position: center;
        }
        .blurred-img::before {
          content: '';
          position: absolute;
          inset: 0;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          backdrop-filter: blur(10px);
          transition: opacity 400ms ease-in-out;
        }
        .blurred-img.loaded::before {
          opacity: 0;
        }
        .blurred-img img {
          opacity: 0;
          transition: opacity 400ms ease-in-out;
        }
        .blurred-img.loaded img {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};
