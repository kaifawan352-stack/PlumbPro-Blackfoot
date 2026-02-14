
import React from 'react';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Blackfoot Resident',
    content: '"My water heater burst at 2 AM on a Tuesday. PlumbPro was at my house within 30 minutes. Fast, clean, and professional!"',
    rating: 5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgNb0YPCJYFttQ3TmCd976DlNzWAsiqJmV7vHZO-6AX5g1L_O2e5-WKzhX5FMc2IyyacgdyoE-91bP2ObTZ80w0CR_LvhomSWZ8NCNLNza53LkZqN7_dYE8T3OH4q9rElY_GyTtWMAdwpVQr6EQ2O2jeaeCkbKEnxJrA1JZmMNVf8M8XlP-Zv5_5YQ2f4BBF5BEhVIRLJIz0Em7LADnf7C_v-eCXzkoTPP8qS9DCXUys0KOcU0Pd9AbmizPd-eTqiIfoXStocsk30F'
  },
  {
    id: '2',
    name: 'Mike Thompson',
    role: 'Blackfoot Resident',
    content: '"Excellent service for our kitchen renovation. They handled all the new piping and fixture installations perfectly."',
    rating: 5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrpHx7t1AhnJYRcmg8mKsumnGGRY0AhjD-rYbobdowFeiuh7azR7MBfAvkP6pcu47nDBHS-Z2v2uB84XUXwmY-uWjiToAab764A5A-EADViD5cJ2w7WfAZkB0OORgy-my7N9vThbc1tSyxPoa_Zc5K9EFdorWx4Eq4M96hNL2yCPhGDZGojVBpvwpvuXE1XatuftiKEcG3eCf_adpRHt_lZVTfXdnahqHWGj0wNfK9SdWLnEJzt0DgksUodh-521YLStoCNtNdJuYQ'
  },
  {
    id: '3',
    name: 'Linda G.',
    role: 'Blackfoot Resident',
    content: '"They cleared a drain clog that three other companies couldn\'t fix. These guys are the real deal and very affordable."',
    rating: 5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBATXrRbhFkamczWZPCtcJEx2e4Mwof5x0nzJo-mdXM0R5BdyNaCGkDe8RaMCeGWL_qadnYGDeGVLNTQf7Euk2xpKnmlYdweOF1n-E7YaRpumx1bI00jFTU6D97axKldW6kDl9cjgy56ChZTLO5qjCBvQmTFepxsF5vp4C88nKd61nPwfYbPfYd_Ox1VDBnYKSzSFxs6huoPSFg4pRnCF3fD-hwY5UwEs3icAySMdS2m-umS1JpD-nTrmQ51FbB1hwQjxCqChTFaV0'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-primary/5 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-black text-secondary leading-tight">What Our Neighbors Say</h3>
          </div>
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm material-symbols-fill">star</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed flex-grow">{review.content}</p>
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full bg-gray-100 bg-cover bg-center border border-gray-100" 
                  style={{ backgroundImage: `url('${review.image}')` }}
                />
                <div>
                  <div className="font-bold text-secondary">{review.name}</div>
                  <div className="text-xs text-gray-400 font-medium">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
