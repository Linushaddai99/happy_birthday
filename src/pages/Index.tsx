
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ChevronDown } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import Confetti from '@/components/Confetti';
import LoveList from '@/components/LoveList';
import MemoriesGallery from '@/components/MemoriesGallery';
import MusicPlayer from '@/components/MusicPlayer';
import RevealMessage from '@/components/RevealMessage';

const Index = () => {
  const [name, setName] = useState("Veek!!");
  const [showConfetti, setShowConfetti] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    // Show confetti after a short delay
    const timer = setTimeout(() => {
      setShowConfetti(true);
      toast.success("Happy Birthday! 🎂", {
        description: "Wishing you an amazing day filled with joy!",
      });
    }, 1000);
    
    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-birthday-blue/10">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
        {showConfetti && <Confetti />}
        
        <div className="text-center z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-pacifico mb-6 text-birthday-purple animate-float">
            Happy Birthday, <span className="text-birthday-pink">{name}</span>!
          </h1>
          
          <p className="text-xl md:text-2xl font-baloo mb-8 text-gray-700">
            Please give me a BIG SMILE🙃, its your day!! 🎉
          </p>
          
          <Button 
            onClick={() => scrollToSection('love-section')}
            className="bg-birthday-pink hover:bg-birthday-purple text-white font-baloo text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 animate-pulse"
          >
            <Heart className="mr-2 h-5 w-5" /> Let's Celebrate <Heart className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => scrollToSection('love-section')}
            aria-label="Scroll down"
          >
            <ChevronDown className="h-6 w-6 text-gray-500" />
          </Button>
        </div>
        
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-birthday-gold/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-24 w-72 h-72 bg-birthday-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-birthday-pink/20 rounded-full blur-3xl"></div>
      </section>
      
      {/* What I Love About You Section */}
      <LoveList />
      
      {/* Memories Gallery */}
      <MemoriesGallery />
      
      {/* Final Message */}
      <RevealMessage />
      
      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 font-baloo">
        <p>Made with ❤️ for your special day</p>
      </footer>
      
      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
};

export default Index;
