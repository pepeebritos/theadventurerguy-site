'use client';

import Script from 'next/script';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

export default function GoogleAnalytics() {
  // Don't load if tracking ID is not set
  if (!GA_TRACKING_ID || GA_TRACKING_ID === 'G-XXXXXXXXXX') {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Set default consent mode to denied (GDPR/CCPA compliant)
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });
            
            gtag('config', '${GA_TRACKING_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
            
            // Update consent if user has already accepted cookies
            if (typeof window !== 'undefined') {
              const consent = localStorage.getItem('cookieConsent');
              if (consent === 'accepted') {
                gtag('consent', 'update', {
                  'analytics_storage': 'granted'
                });
              }
            }
          `,
        }}
      />
    </>
  );
}








