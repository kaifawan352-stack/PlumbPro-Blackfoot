
import React from 'react';

const PrivacyPolicy: React.FC<{ onBack: () => void }> = ({ onBack }) => {
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

        <h1 className="text-4xl md:text-5xl font-black text-secondary mb-8">Privacy Policy</h1>
        <p className="text-gray-500 mb-12 font-medium">Last Updated: May 20, 2024</p>

        <div className="prose prose-blue max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">1. Introduction</h2>
            <p>
              Welcome to PlumbPro Blackfoot ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy applies to all information collected through our website and any related services, sales, marketing, or events.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">2. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. The personal information we collect includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Data:</strong> Name and phone number.</li>
              <li><strong>Service Data:</strong> Type of plumbing service requested.</li>
              <li><strong>Communication Data:</strong> Any information provided via our AI Assistant or contact forms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">3. How We Use Your Information</h2>
            <p>
              We use personal information collected via our website for a variety of business purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To facilitate service scheduling and dispatching plumbers to your location.</li>
              <li>To provide customer support and respond to inquiries.</li>
              <li>To send administrative information to you, such as service confirmations.</li>
              <li>To improve our website functionality and user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">4. Sharing Your Information</h2>
            <p>
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell, rent, or lease our customer lists to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">5. Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">6. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete the data we have collected about you. To exercise these rights, please contact us at the details provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">7. Contact Us</h2>
            <p>
              If you have questions or comments about this policy, you may contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-xl mt-4 border border-gray-100">
              <p className="font-bold text-secondary">PlumbPro Blackfoot</p>
              <p>27 N 550 W</p>
              <p>Blackfoot, ID 83221</p>
              <p>Phone: (208) 555-0123</p>
              <p>Email: privacy@plumbproblackfoot.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
