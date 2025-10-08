'use client';

import { useEffect, useState } from 'react';

interface ScrollProgressProps {
  containerId: string;
}

export default function ScrollProgress({ containerId }: ScrollProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = document.getElementById(containerId);
    
    if (!container) return;

    const updateScrollProgress = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    container.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial calculation

    return () => {
      container.removeEventListener('scroll', updateScrollProgress);
    };
  }, [containerId]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-neutral-200">
      <div 
        className="h-full bg-[var(--accent)] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}



