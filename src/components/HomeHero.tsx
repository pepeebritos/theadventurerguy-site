'use client';

import { useEffect, useRef, useState } from 'react';

interface VideoItem {
  src: string;
  poster: string;
}

interface HomeHeroProps {
  videos: VideoItem[];
  mobileVideos?: VideoItem[];
  title: string;
  subtitle: string;
  containerId: string;
}

export default function HomeHero({ videos, mobileVideos, title, subtitle, containerId }: HomeHeroProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical tablet breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Use mobile videos if available and on mobile, otherwise use desktop videos
  const activeVideos = (isMobile && mobileVideos && mobileVideos.length > 0) ? mobileVideos : videos;

  // Fade-in title effect with delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(true);
    }, 500); // 0.5 second delay

    return () => clearTimeout(timer);
  }, []);

  // Fade-in subtitle effect after title appears
  useEffect(() => {
    if (showTitle) {
      const timer = setTimeout(() => {
        setShowSubtitle(true);
      }, 300); // 0.3 second delay after title appears

      return () => clearTimeout(timer);
    }
  }, [showTitle]);

  useEffect(() => {
    if (activeVideos.length <= 1) return;

    // Auto-cycle through videos every 5 seconds
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % activeVideos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeVideos.length]);

  // Reset video index when switching between mobile/desktop
  useEffect(() => {
    setCurrentVideoIndex(0);
  }, [isMobile]);

  useEffect(() => {
    // Play the current video and pause others
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentVideoIndex) {
          video.currentTime = 0; // Reset to beginning
          video.play().catch(console.error);
        } else {
          video.pause();
        }
      }
    });
  }, [currentVideoIndex]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video backgrounds with crossfade */}
      {activeVideos.map((video, index) => (
        <video
          key={index}
          ref={(el) => {
            videoRefs.current[index] = el;
          }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
          }`}
          poster={video.poster}
          muted
          loop
          playsInline
        >
          <source src={video.src} type={video.src.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />
        </video>
      ))}


      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
        <div className="max-w-5xl px-6">
          <h1 className={`mb-8 text-[clamp(4rem,12vw,8rem)] font-bold leading-tight font-dancing-script transition-opacity duration-2000 ease-out ${
            showTitle ? 'opacity-100' : 'opacity-0'
          }`}>
            The Adventurer Guy
          </h1>
          <p className={`text-[clamp(1.5rem,4vw,2.5rem)] leading-relaxed font-dancing-script transition-opacity duration-2000 ease-out ${
            showSubtitle ? 'opacity-90' : 'opacity-0'
          }`}>
            Inspiring you to explore the world
          </p>
        </div>
      </div>
    </div>
  );
}
