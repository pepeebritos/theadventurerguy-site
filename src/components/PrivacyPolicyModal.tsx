'use client';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white text-neutral-900 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Privacy Policy</h2>
            <button
              onClick={onClose}
              className="text-neutral-500 hover:text-neutral-700 text-3xl leading-none p-2 hover:bg-neutral-100 rounded-full"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-8 text-sm leading-relaxed">
            <div className="text-center p-4 bg-neutral-50 rounded-lg">
              <p className="text-neutral-600">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>
            </div>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">1. Introduction</h3>
              <p>
                Welcome to The Adventurer Guy website (the &quot;Website&quot;). Pedro Britos (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) 
                respects your privacy and is committed to protecting your personal information. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">2. Information We Collect</h3>
              
              <h4 className="font-semibold text-lg mb-3">2.1 Personal Information</h4>
              <p className="mb-3">We may collect personal information that you voluntarily provide to us, including:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Email address (when you contact us through our contact form)</li>
                <li>Name (if provided in communications)</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h4 className="font-semibold text-lg mb-3">2.2 Automatically Collected Information</h4>
              <p className="mb-3">When you visit our website, we may automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and location data</li>
                <li>Browser type, version, and operating system</li>
                <li>Pages visited, time spent on pages, and clickstream data</li>
                <li>Referring website addresses</li>
                <li>Device information and screen resolution</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">3. How We Use Your Information</h3>
              <p className="mb-3">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your inquiries and provide customer support</li>
                <li>To improve our website functionality and user experience</li>
                <li>To analyze website traffic and user behavior patterns</li>
                <li>To send periodic emails (only if you&apos;ve opted in)</li>
                <li>To comply with legal obligations and protect our rights</li>
                <li>To prevent fraud and ensure website security</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">4. Cookies and Tracking Technologies</h3>
              <p className="mb-3">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience. 
                Cookies are small text files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and recommendations</li>
                <li>Improve website performance and functionality</li>
              </ul>
              
              <h4 className="font-semibold text-lg mb-3">4.1 Third-Party Cookies</h4>
              <p className="mb-3">We use the following third-party services that may set their own cookies:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics:</strong> For website traffic analysis</li>
                <li><strong>Instagram:</strong> For embedded social media content</li>
                <li><strong>Other social media platforms:</strong> As integrated</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">5. Information Sharing and Disclosure</h3>
              <p className="mb-3">We do not sell, trade, or otherwise transfer your personal information to third parties, except:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>With trusted service providers who assist in website operations (under strict confidentiality agreements)</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">6. Data Security</h3>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, no method 
                of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">7. Your Rights (CCPA & GDPR)</h3>
              
              <h4 className="font-semibold text-lg mb-3">7.1 California Consumer Privacy Act (CCPA) Rights</h4>
              <p className="mb-3">If you are a California resident, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Know what personal information we collect and how we use it</li>
                <li>Delete your personal information</li>
                <li>Opt-out of the sale of personal information (we do not sell personal information)</li>
                <li>Non-discrimination for exercising your privacy rights</li>
              </ul>

              <h4 className="font-semibold text-lg mb-3">7.2 General Data Protection Regulation (GDPR) Rights</h4>
              <p className="mb-3">If you are in the European Union, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Rectify inaccurate personal data</li>
                <li>Erase your personal data</li>
                <li>Restrict processing of your personal data</li>
                <li>Data portability</li>
                <li>Object to processing</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">8. Children&apos;s Privacy</h3>
              <p>
                Our website is not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If you become aware that a child has provided us 
                with personal information, please contact us immediately.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">9. International Data Transfers</h3>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. 
                We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">10. Changes to This Privacy Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. You are advised to review 
                this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">11. Contact Information</h3>
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-neutral-50 rounded-lg">
                <p><strong>Email:</strong> <a href="mailto:theadventurerguy@gmail.com" className="text-[var(--accent)] hover:underline">theadventurerguy@gmail.com</a></p>
                <p><strong>Website:</strong> The Adventurer Guy</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}



