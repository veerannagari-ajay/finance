
import React from 'react';
import Link from 'next/link';

interface FinanceCardProps {
  title: string;
  description: string;
}

const financeData: FinanceCardProps[] = [
  { title: 'Budgeting Tips', description: '' },
  { title: 'Investment Strategies', description: '' },
  { title: 'Saving Hacks', description: '' },
  { title: 'Debt Management', description: '' },
  { title: 'Retirement Plans', description: '' },
];

const FinanceCards: React.FC = () => {
  return (
    <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {financeData.map((card, index) => (
        <Link key={index} href={`/finance/${index}`} passHref>
          <div
            className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110 cursor-pointer"
          >
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-gray-700">{card.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FinanceCards;
