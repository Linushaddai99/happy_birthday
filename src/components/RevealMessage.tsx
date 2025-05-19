
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, CakeSlice } from 'lucide-react';

const RevealMessage: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  
  const revealMessage = () => {
    setIsRevealed(true);
  };
  
  return (
    <section className="py-16 px-4" id="message-section">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8 flex justify-center items-center gap-2">
          <CakeSlice className="text-birthday-pink w-8 h-8" />
          <h2 className="text-3xl md:text-4xl font-pacifico text-birthday-purple">
            A Special Message For You
          </h2>
          <CakeSlice className="text-birthday-pink w-8 h-8" />
        </div>
        
        <Card className={`p-8 transition-all duration-500 ${isRevealed ? 'bg-birthday-gradient shadow-xl border-none' : 'bg-white'}`}>
          {!isRevealed ? (
            <div className="flex flex-col items-center">
              <p className="mb-6 text-lg font-baloo">Click the button to reveal a special birthday message...</p>
              <Button 
                onClick={revealMessage}
                className="bg-birthday-purple hover:bg-birthday-pink transition-all duration-300 font-baloo"
              >
                <Heart className="mr-2 h-4 w-4" /> Reveal Message <Heart className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className={`animate-scale-in text-white`}>
              <p className="mb-4 text-xl font-baloo">Dear Victor Edet,</p>
              <p className="mb-6 text-lg font-baloo leading-relaxed">
                On your special day, I want you to know that you are great friend, I know we just met not too long ago but the short time has been worth it. Your passion, light and humor just makes you almost perfect. I know you don't believe me, but regardless upon still. I'm grateful for you Veek.
              </p>
              <p className="mb-4 text-lg font-baloo leading-relaxed">
                May this year bring you all the happiness, success, love that you deserve as well as the encounter with God that you so desire. I'm so grateful to have you in my life and to celebrate another trip around the sun with you.
              </p>
              <p className="text-xl font-pacifico mt-8">With love and birthday wishes,</p>
              <p className="text-lg font-baloo">Your Friend, you know me😉</p>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default RevealMessage;
