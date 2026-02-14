
import React from 'react';

const TermsOfService: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back to Home
        </button>

        <h1 className="text-4xl md:text-5xl font-black text-secondary mb-8">Terms of Service</h1>
        <p className="text-gray-500 mb-12 font-medium">Last Updated: May 20, 2024</p>

        <div className="prose prose-blue max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the PlumbPro Blackfoot website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">2. Description of Service</h2>
            <p>
              PlumbPro Blackfoot provides professional plumbing services, including but not limited to emergency repairs, drain cleaning, water heater maintenance, and pipe replacement in the Blackfoot, ID area.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">3. Estimates and Pricing</h2>
            <p>
              While we strive to provide accurate information on our website:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All online estimates are preliminary and subject to on-site verification.</li>
              <li>Final pricing is determined after a physical inspection by our licensed plumbers.</li>
              <li>Emergency service calls may be subject to additional after-hours fees.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">4. User Responsibilities</h2>
            <p>
              Users agree to provide accurate contact information when requesting services. For emergency repairs, users should follow any immediate safety instructions provided by our staff or AI Assistant (such as turning off the main water valve).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">5. Limitation of Liability</h2>
            <p>
              PlumbPro Blackfoot is not liable for indirect, incidental, or consequential damages resulting from the use of our website or services. Our maximum liability for any claim shall not exceed the amount paid for the specific service in question.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">6. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of PlumbPro Blackfoot and is protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">7. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the State of Idaho, without regard to its conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the site constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">9. Contact Information</h2>
            <p>
              For questions regarding these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-xl mt-4 border border-gray-100">
              <p className="font-bold text-secondary">PlumbPro Blackfoot</p>
              <p>27 N 550 W</p>
              <p>Blackfoot, ID 83221</p>
              <p>Phone: (208) 555-0123</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
