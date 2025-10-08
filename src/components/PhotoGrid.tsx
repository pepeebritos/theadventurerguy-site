"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { photos, type Photo } from "@/lib/photos";

export default function PhotoGrid() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [visiblePhotos, setVisiblePhotos] = useState<Set<number>>(new Set());
  const dialogRef = useRef<HTMLDialogElement>(null);
  const photoRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedPhoto) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [selectedPhoto]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      setSelectedPhoto(null);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPhoto(null);
      }
    };

    dialog.addEventListener("close", handleClose);
    dialog.addEventListener("keydown", handleKeyDown);

    return () => {
      dialog.removeEventListener("close", handleClose);
      dialog.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Intersection Observer for photo animations
  useEffect(() => {
    const observers = photoRefs.current.map((photoRef, index) => {
      if (!photoRef) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add a staggered delay based on index
              setTimeout(() => {
                setVisiblePhotos(prev => new Set([...prev, index]));
              }, index * 100); // 100ms delay between each photo
            }
          });
        },
        { 
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px' // Start animation when photo is 50px from viewport
        }
      );

      observer.observe(photoRef);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;

    if (!isInDialog) {
      setSelectedPhoto(null);
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 w-full">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold">Photos</h2>
            <div className="ml-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
          {photos.map((photo, index) => {
            const isVisible = visiblePhotos.has(index);
            return (
              <button
                key={index}
                ref={(el) => {
                  photoRefs.current[index] = el;
                }}
                onClick={() => setSelectedPhoto(photo)}
                className={`relative overflow-hidden rounded-lg bg-neutral-200 transition-all duration-700 hover:scale-110 hover:z-20 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)] aspect-square transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{
                  transitionDelay: isVisible ? '0ms' : '0ms'
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300" />
              </button>
            );
          })}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        className="w-full h-full max-w-none max-h-none p-0 bg-transparent backdrop:bg-black/90 m-0"
      >
        {selectedPhoto && (
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <div className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-2xl shadow-2xl border-4 border-white/20 overflow-hidden">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/80 text-white hover:bg-black hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                aria-label="Close lightbox"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div className="relative">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  width={selectedPhoto.width}
                  height={selectedPhoto.height}
                  className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
