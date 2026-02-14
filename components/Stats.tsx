
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: "Years Experience", value: "15+" },
    { label: "Happy Clients", value: "2,500+" },
    { label: "Emergency Support", value: "24/7" },
    { label: "Google Rating", value: "4.9/5" },
  ];

  return (
    <section className="bg-white border-y border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
            <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
