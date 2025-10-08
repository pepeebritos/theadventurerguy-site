'use client';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white text-neutral-900 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Terms and Conditions</h2>
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
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">1. Acceptance of Terms</h3>
              <p>
                By accessing and using The Adventurer Guy website (the &quot;Website&quot;), you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, please do not 
                use this service.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">2. Use License</h3>
              <p className="mb-3">
                Permission is granted to temporarily download one copy of the materials on The Adventurer Guy website 
                for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer 
                of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">3. Intellectual Property Rights</h3>
              <p className="mb-3">
                All content on this website, including but not limited to text, graphics, logos, images, photographs, 
                videos, and software, is the property of Pedro Britos (&quot;The Adventurer Guy&quot;) and is protected by 
                copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mb-3">
                <strong>Copyright Notice:</strong> © {new Date().getFullYear()} The Adventurer Guy. All rights reserved.
              </p>
              <p>
                You may not reproduce, distribute, display, sell, lease, transmit, create derivative works from, 
                translate, modify, reverse-engineer, disassemble, decompile or otherwise exploit this website or 
                any portion of it unless expressly permitted by us in writing.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">4. User-Generated Content</h3>
              <p>
                If you submit any content to our website (comments, reviews, etc.), you grant us a non-exclusive, 
                royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, 
                adapt, publish, translate, create derivative works from, distribute, and display such content 
                throughout the world in any media.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">5. Prohibited Uses</h3>
              <p className="mb-3">You may not use our website:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
                <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                <li>For any obscene or immoral purpose</li>
                <li>To interfere with or circumvent the security features of the website</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">6. Privacy Policy</h3>
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of 
                the website, to understand our practices.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">7. Third-Party Links</h3>
              <p>
                Our website may contain links to third-party websites or services that are not owned or controlled 
                by The Adventurer Guy. We have no control over, and assume no responsibility for, the content, 
                privacy policies, or practices of any third-party websites or services.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">8. Disclaimer</h3>
              <p className="mb-3">
                The materials on The Adventurer Guy website are provided on an &apos;as is&apos; basis. The Adventurer Guy 
                makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                including without limitation, implied warranties or conditions of merchantability, fitness for a 
                particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p>
                Further, The Adventurer Guy does not warrant or make any representations concerning the accuracy, 
                likely results, or reliability of the use of the materials on its website or otherwise relating to 
                such materials or on any sites linked to this site.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">9. Limitations</h3>
              <p>
                In no event shall The Adventurer Guy or its suppliers be liable for any damages (including, without 
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the 
                use or inability to use the materials on The Adventurer Guy website, even if The Adventurer Guy or 
                an authorized representative has been notified orally or in writing of the possibility of such damage. 
                Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability 
                for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">10. Accuracy of Materials</h3>
              <p>
                The materials appearing on The Adventurer Guy website could include technical, typographical, or 
                photographic errors. The Adventurer Guy does not warrant that any of the materials on its website 
                are accurate, complete, or current. The Adventurer Guy may make changes to the materials contained 
                on its website at any time without notice. However, The Adventurer Guy does not make any commitment 
                to update the materials.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">11. Governing Law</h3>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of California, 
                United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that state 
                or location.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">12. Changes to Terms</h3>
              <p>
                The Adventurer Guy reserves the right, at our sole discretion, to modify or replace these Terms at 
                any time. If a revision is material, we will try to provide at least 30 days notice prior to any 
                new terms taking effect.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-neutral-800">13. Contact Information</h3>
              <p>
                If you have any questions about these Terms and Conditions, please contact us:
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



