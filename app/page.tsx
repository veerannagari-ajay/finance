

"use client";
import React from 'react';
import  AnimatedFinanceCards from './slidein/slide'; 
import FinanceCards from './components/AnimatedFinanceCards'; 
import Animated from './bouncein/bounce';
import Spincard from './spinin/spin';
const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-purple-300 space-y-10">
      <h1 className="text-3xl font-bold text-center my-10">Finance Information</h1>
      
      <section className="w-full flex justify-center">
        <FinanceCards/>
      </section>
      
      <section className="w-full flex justify-center">
        <Animated/>
      </section>

      <section className="w-full flex justify-center">
        <Spincard/>
      </section>

      <section className="w-full flex justify-center">
        <AnimatedFinanceCards/>
      </section>

    </main>
  );
};

export default HomePage;
