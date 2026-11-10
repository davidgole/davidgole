'use client';

import { useState, useEffect } from 'react';

const images = [
  'public/projects/elektropolnilnice.PNG', // Zamenjaj s svojimi potmi do slik
  'public/projects/game_2048.PNG',
];

export default function ImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Interval za menjavo slik (3000ms = 3 sekunde)
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer); // Počistimo timer ob odstranitvi komponente
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg border border-gray-700 bg-gray-900">
        {images.map((src, index) => (
        <img
            key={src}
            src={src}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
        />
        ))}
        
        {/* Indikatorji (pika spodaj) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
            <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/40'
            }`}
            />
        ))}
        </div>
    </div>
  );
}