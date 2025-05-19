
import React, { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
}

const Confetti: React.FC = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  
  useEffect(() => {
    const colors = ['#FF719A', '#9b87f5', '#FFE29F', '#D3E4FD'];
    const confettiCount = 100;
    const initialConfetti: ConfettiPiece[] = [];
    
    for (let i = 0; i < confettiCount; i++) {
      initialConfetti.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 0.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 5,
        duration: Math.random() * 2 + 3,
      });
    }
    
    setConfetti(initialConfetti);
  }, []);
  
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-10">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${piece.x}%`,
            top: '-5%',
            width: `${piece.size}rem`,
            height: `${piece.size * 1.5}rem`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            opacity: 0.8,
            zIndex: 1000,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
