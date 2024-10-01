
"use client"; 

import { useState } from 'react';

const financeInfo = [
  { id: 1, title: 'Reading news', description: 'Reading news about stock market every day is a good habit ' },
  { id: 2, title: 'Patience', description: 'Patience is key in investing field' },
  { id: 3, title: 'Knowing about great investors', description: 'Try to know about the great investors like warren buffett ,peter lynch, jim simons ...etc' },
  { id: 4, title: 'Doing research', description: 'Doing your own research about stocks is a great thing ' },
];

export default function AnimatedFinanceCards() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]); // Track which cards are visible
  const [showing, setShowing] = useState(false); // State to track if cards are currently being shown

  const handleButtonClick = () => {
    if (showing) {
      // If cards are currently showing, hide them
      setVisibleCards([]);
      setShowing(false);
    } else {
      // Show each card one by one
      financeInfo.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, index]); // Show each card one by one
        }, index * 600); // Delay each card by 1200ms (1.2 seconds)
      });
      setShowing(true); // Update showing state to true
    }
  };

  return (
    <div className="p-6">
      <button
        onClick={handleButtonClick}
        className="mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        {showing ? 'Hide Finance Tips' : 'More Finance Tips'}
      </button>

      <div className="space-y-6">
        {financeInfo.map((info, index) => (
          <div
            key={info.id}
            className={`bg-white p-4 rounded shadow-md transition-all duration-300 ease-out transform ${
              visibleCards.includes(index) ? 'animate-slideIn' : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 0.001}s` }} // Stagger the animation delay
          >
            <h3 className="text-lg font-bold">{info.title}</h3>
            <p className="text-gray-700">{info.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

