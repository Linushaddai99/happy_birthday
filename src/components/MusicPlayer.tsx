
import React, { useState, useRef, useEffect } from 'react';
import { Music, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Playback started successfully
            })
            .catch((error) => {
              toast.error("Couldn't play music automatically. Please click play!", {
                description: "Most browsers require user interaction before playing audio."
              });
            });
        }
      }
      
      setIsPlaying(!isPlaying);
    }
  };
  
  // Try to play music after first user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.4;
        document.removeEventListener('click', handleFirstInteraction);
      }
    };
    
    document.addEventListener('click', handleFirstInteraction);
    
    return () => {
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, []);
  
  return (
    <div className="fixed bottom-4 right-4 z-20">
      <audio 
        ref={audioRef} 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        loop
      />
      
      <Button 
        onClick={togglePlayback}
        className="rounded-full w-12 h-12 bg-birthday-pink hover:bg-birthday-purple p-0 shadow-lg"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Pause className="h-6 w-6 text-white" />
        ) : (
          <Play className="h-6 w-6 text-white" />
        )}
      </Button>
      
      <div className="absolute -top-10 right-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded-lg shadow-md">
        <span className="text-sm">Birthday Music</span>
      </div>
    </div>
  );
};

export default MusicPlayer;
