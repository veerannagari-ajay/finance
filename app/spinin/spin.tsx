"use client"; 

import React from 'react';

const financeInfo = [
  { id: 1, title: 'Taking Loans ', description: 'Don`t take loans with high interest'  },
  { id: 2, title: 'Buying things', description: 'Don`t buy luxury things with EMI`s ' },
  { id: 3, title: 'Don`t do trading', description: 'If you don`t know about trading don`t do it.' },
  { id: 4, title: 'Don`t put all eggs in one basket', description: 'Like investing all your savings in one thing may cause risk' },
];

const Spincard: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Don't Do these Things</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {financeInfo.map((info) => (
          <div
            key={info.id}
            className="bg-white p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:rotate-12"
          >
            <h3 className="text-lg font-semibold">{info.title}</h3>
            <p className="text-gray-700">{info.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spincard;
