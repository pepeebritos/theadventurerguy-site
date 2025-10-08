'use client';

import { useState } from 'react';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsModal from './TermsModal';

export default function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <>
      <footer className="mt-20 bg-neutral-900 border-t border-neutral-700 py-12 text-center text-sm">
        <div className="max-w-4xl mx-auto px-6">
          {/* Main Footer Content */}
          <div className="mb-8">
            <h3 className="text-white text-lg font-semibold mb-4">The Adventurer Guy</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Cinematic outdoor films, travel guides, and gear by Pedro Britos. 
              Inspiring you to explore the world through authentic adventure storytelling.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-8">
              <a 
                href="https://youtube.com/@theadventurerguy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-red-400 transition-colors duration-300"
                title="YouTube Channel"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/theadventurerguy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-pink-400 transition-colors duration-300"
                title="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="mailto:hello@theadventurerguy.com" 
                className="text-white/80 hover:text-blue-400 transition-colors duration-300"
                title="Email"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="border-t border-neutral-700 pt-6 mb-6">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <button
                onClick={() => setShowPrivacyModal(true)}
                className="text-white hover:text-[var(--accent)] transition-colors duration-300 font-medium"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setShowTermsModal(true)}
                className="text-white hover:text-[var(--accent)] transition-colors duration-300 font-medium"
              >
                Terms & Conditions
              </button>
              <button
                onClick={() => {
                  const cookieConsent = localStorage.getItem('cookieConsent');
                  if (cookieConsent) {
                    localStorage.removeItem('cookieConsent');
                    window.location.reload();
                  }
                }}
                className="text-white hover:text-[var(--accent)] transition-colors duration-300 font-medium"
              >
                Cookie Settings
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-white/70">
            <p>&copy; {new Date().getFullYear()} Pedro Britos — The Adventurer Guy. All rights reserved.</p>
            <p className="mt-2">
              All photographs, videos, and content are protected by copyright law.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <PrivacyPolicyModal 
        isOpen={showPrivacyModal} 
        onClose={() => setShowPrivacyModal(false)} 
      />
      <TermsModal 
        isOpen={showTermsModal} 
        onClose={() => setShowTermsModal(false)} 
      />
    </>
  );
}
