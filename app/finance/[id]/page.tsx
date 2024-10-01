import { notFound } from 'next/navigation';
import Image from 'next/image'; // Import Image from next/image

interface FinanceCardProps {
  title: string;
  description: string;
  content: string;
  image?: string;   
  link?: string;    
}

const financeData: FinanceCardProps[] = [
  {
    title: 'Budgeting Tips',
    description: 'Learn how to budget effectively and save more.',
    content: 'Budgeting is the process of creating a plan to spend your money. It helps you balance your expenses with your income, avoid overspending, and save for future goals.',
    image: '/images/budget.jpg', // Make sure this image is in the public/images directory
    link: ''
  },
  {
    title: 'Investment Strategies',
    description: 'Discover top investment plans for 2024.',
    content: 'Investment strategies help you allocate your funds to different financial assets like stocks, bonds, or real estate to maximize returns while managing risks.',
    image: '/images/investment strategy.jpg', // Check this path
    link: ''
  },
  {
    title: 'Saving Hacks',
    description: 'Smart ways to boost your savings.',
    content: 'Saving money is key to building financial stability. Learn tips like automating savings, cutting unnecessary expenses, and setting up a rainy day fund.',
    image: '/images/savings.jpg', // Check this path
    link: ''
  },
  {
    title: 'Debt Management',
    description: 'Practical steps to reduce and manage debt.',
    content: 'Managing debt involves tracking your loans, prioritizing repayments, and consolidating debts to reduce interest rates. These steps help you become debt-free faster.',
    image: '/images/debt.jpg', // Check this path
    link: ''
  },
  {
    title: 'Retirement Plans',
    description: 'Planning for a stress-free retirement.',
    content: 'Retirement planning ensures you save enough during your working years to maintain your lifestyle after retirement. Consider investing in 401(k), IRAs, and other retirement accounts.',
    image: '/images/retirement.jpg', // Check this path
    link: ''
  },
];

interface FinanceDetailProps {
  params: { id: string };
}

const FinanceCardDetail = ({ params }: FinanceDetailProps) => {
  const cardIndex = parseInt(params.id, 10);
  const card = financeData[cardIndex];

  if (!card) {
    notFound(); // If the card is not found, show 404
  }

  return (
    <div className="container mx-auto p-10">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{card.title}</h1>
        <Image 
          src={card.image || '/images/default.jpg'} // Use a default image if card.image is undefined
          alt={card.title}  
          width={500} // Specify the width of the image
          height={300} // Specify the height of the image
          className="w-full h-64 object-cover mb-4" 
        />
        <p className="text-gray-700 text-lg mb-4">{card.description}</p>
        <p className="text-gray-600 text-base mb-6">{card.content}</p>
        {card.link && (
          <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Learn More
          </a>
        )}
      </div>
    </div>
  );
};

export default FinanceCardDetail;
