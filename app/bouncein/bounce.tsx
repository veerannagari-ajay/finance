"use client"; 

import React from 'react';

const financeInfo = [
  { id: 1, title: 'Stock Market', description: 'Investing in stocks, bonds, and ETFs.' },
  { id: 2, title: 'Real Estate', description: 'Investing in Real Estate' },
  { id: 3, title: 'Physical assests', description: 'Investing in physcial assests like land is a great investment.' },
  { id: 4, title: 'Gold', description: 'Having small portion of your wealth in gold is a great investment' },
];

const Animated: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Best Investments</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {financeInfo.map((info) => (
          <div
            key={info.id}
            className="bg-white p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:animate-bounce"
          >
            <h3 className="text-lg font-semibold">{info.title}</h3>
            <p className="text-gray-700">{info.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Animated;
