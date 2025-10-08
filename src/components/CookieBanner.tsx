'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    
    // Enable Google Analytics and other tracking
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      if (window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    }
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 text-white p-4 shadow-lg z-50 border-t border-neutral-700">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm md:text-base leading-relaxed">
              🍪 This website uses cookies to improve your experience, analyze traffic, and provide personalized content. 
              By continuing to use this site, you consent to our use of cookies.{' '}
              <button
                onClick={() => setShowPrivacyModal(true)}
                className="text-[var(--accent)] hover:underline font-medium"
              >
                Learn more
              </button>
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={rejectCookies}
              className="px-4 py-2 text-sm border border-neutral-600 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Reject
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 text-sm bg-[var(--accent)] text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
          <div className="bg-white text-neutral-900 rounded-2xl max-w-4xl max-h-[80vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Privacy Policy & Cookie Information</h2>
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="text-neutral-500 hover:text-neutral-700 text-2xl leading-none"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-6 text-sm leading-relaxed">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Information We Collect</h3>
                  <p className="mb-2">
                    When you visit our website, we may collect the following information:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Email address (when you contact us)</li>
                    <li>Social media interactions (Instagram embeds)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">How We Use Cookies</h3>
                  <p className="mb-2">
                    We use cookies to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and user behavior</li>
                    <li>Improve website performance and user experience</li>
                    <li>Provide personalized content and recommendations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Third-Party Services</h3>
                  <p>
                    Our website integrates with Instagram, Google Analytics, and other services that may use their own cookies and tracking technologies.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Your Rights</h3>
                  <p>
                    Under California Consumer Privacy Act (CCPA) and other applicable laws, you have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Know what personal information we collect</li>
                    <li>Delete your personal information</li>
                    <li>Opt-out of the sale of personal information</li>
                    <li>Non-discrimination for exercising your privacy rights</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
                  <p>
                    If you have questions about this privacy policy or want to exercise your rights, 
                    contact us at{' '}
                    <a href="mailto:theadventurerguy@gmail.com" className="text-[var(--accent)] hover:underline">
                      theadventurerguy@gmail.com
                    </a>
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-xs text-neutral-600">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


