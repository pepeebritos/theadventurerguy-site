'use client';

import Image from "next/image";
import { useEffect } from "react";

export default function GearSection() {
  const openGearModal = () => {
    const modal = document.getElementById('gear-modal') as HTMLDialogElement;
    
    // Ensure LighterPack script is loaded when modal opens
    if (!document.querySelector('script[src="https://lighterpack.com/e/ttoqvd"]')) {
      const script = document.createElement('script');
      script.src = 'https://lighterpack.com/e/ttoqvd';
      script.async = true;
      document.head.appendChild(script);
    }
    
    modal?.showModal();
  };

  const closeGearModal = () => {
    const modal = document.getElementById('gear-modal') as HTMLDialogElement;
    modal?.close();
  };

  useEffect(() => {
    // Load LighterPack script only on client side
    const loadLighterPack = () => {
      // Check if script already exists
      if (document.querySelector('script[src="https://lighterpack.com/e/ttoqvd"]')) {
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://lighterpack.com/e/ttoqvd';
      script.async = true;
      script.onload = () => {
        console.log('LighterPack script loaded');
      };
      script.onerror = () => {
        console.error('Failed to load LighterPack script');
      };
      document.head.appendChild(script);
    };

    loadLighterPack();
  }, []);

  return (
    <>
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="text-center mb-12">
          <div className="mb-12"></div>
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-neutral-900">My Gear</h2>
            <div className="ml-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="max-w-md mx-auto mb-8">
            <div className="relative overflow-hidden rounded-2xl bg-neutral-200">
              <Image
                src="/images/gear-photo.jpg"
                alt="Adventure gear setup"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <button 
            onClick={openGearModal}
            className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 mb-8"
          >
            View Complete Gear List
          </button>
        </div>
      </div>

      {/* Gear Modal */}
      <dialog
        id="gear-modal"
        className="w-full h-full max-w-none max-h-none p-0 bg-transparent backdrop:bg-black/90 m-0"
      >
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="relative max-w-[95vw] max-h-[95vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
            <button
              onClick={closeGearModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/80 text-white hover:bg-black hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
              aria-label="Close gear list"
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

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-center">Complete Adventure Gear List</h3>
              <div className="max-h-[80vh] overflow-y-auto">
                <div id="ttoqvd"></div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
