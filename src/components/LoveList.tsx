
import React from 'react';
import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';

interface LoveItem {
  id: number;
  emoji: string;
  message: string;
  detail: string;
}

const loveItems: LoveItem[] = [
  {
    id: 1,
    emoji: '😊',
    message: "You always listen when I rant",
    detail: "Even though alot of times I don't want to give details, you are willing to just talk with me when i'm down."
  },
  {
    id: 2,
    emoji: '😂',
    message: "You make me laugh",
    detail: "Your sense of humor is so beautiful in a very strange way, you may not see yourself as funny, but you make me laugh alot. Never stop being the joy-bringer!"
  },
  {
    id: 3,
    emoji: '💫',
    message: "You're simply unforgettable",
    // detail: "In every moment we spend together, you create memories that I'll cherish forever."
    detail: "I know I just got to know you, but it has been worth it, you are one of those people that are hard to forget.."
  },
  {
    id: 4,
    emoji: '🌟',
    message: "You're so passionate",
    detail: "The way you pour in all of you into all you do is really beautiful. You are living your best like veek, and I love it."
  },
  {
    id: 5,
    emoji: '🎯',
    message: "Your determination is inspiring",
    detail: "When you set your mind to something, nothing can stand in your way. Always have a way of getting what you want is really a super power power, I'm learning...lolz"
  },
  {
    id: 6,
    emoji: '🤗',
    message: "You're very very smart",
    detail: "Yes I said it and I will keep saying it. I really admire your brains and willingness to pick up anything be it a coding language, a skill, whatever and you can just spin it around in no time. its magic bro."
  },
];

const LoveList: React.FC = () => {
  return (
    <section className="py-16 px-4" id="love-section">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-8 gap-2">
          <Heart className="text-birthday-pink w-8 h-8" />
          <div className='text-center'>
            <h2 className="text-3xl md:text-4xl font-pacifico text-center bg-clip-text text-transparent bg-love-gradient">
              What I Love About You
            </h2>
            <p className='font-semibold'>Hover to see details🙃</p>
          </div>
          <Heart className="text-birthday-pink w-8 h-8" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loveItems.map((item) => (
            <div key={item.id} className="flip-card h-48">
              <div className="flip-card-inner">
                <Card className="flip-card-front rounded-lg shadow-lg flex flex-col items-center justify-center p-6 border-2 border-birthday-purple/30 bg-white">
                  <span className="text-4xl mb-3">{item.emoji}</span>
                  <h3 className="text-xl font-baloo font-bold text-center">{item.message}</h3>
                </Card>
                <Card className="flip-card-back rounded-lg shadow-lg flex flex-col items-center justify-center p-6 border-2 border-birthday-pink/30 bg-white">
                  <p className="text-center text-gray-700 font-baloo">{item.detail}</p>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveList;
