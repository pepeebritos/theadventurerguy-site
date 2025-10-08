'use client';

import { useState } from 'react';

interface YouTubeVideoProps {
  videoId: string;
  title: string;
  description?: string;
  thumbnail?: boolean; // If true, shows thumbnail with play button overlay
  className?: string;
}

export default function YouTubeVideo({ 
  videoId, 
  title, 
  description, 
  thumbnail = false,
  className = "" 
}: YouTubeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (thumbnail && !isPlaying) {
    return (
      <div className={`relative group cursor-pointer ${className}`} onClick={() => setIsPlaying(true)}>
        <div className="relative overflow-hidden rounded-lg aspect-video bg-neutral-800">
          <img 
            src={thumbnailUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Fallback to a different quality if maxresdefault fails
              const target = e.target as HTMLImageElement;
              target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }}
          />
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="mt-3">
          <h3 className="font-semibold text-white group-hover:text-red-400 transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-white/70 mt-1">
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="relative overflow-hidden rounded-lg aspect-video bg-neutral-800">
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      
      <div>
        <h3 className="font-semibold text-white text-lg">
          {title}
        </h3>
        {description && (
          <p className="text-white/70 mt-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

