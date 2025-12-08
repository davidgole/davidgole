'use client'; 

import { useState, useRef, useEffect } from 'react';
import AnimatedButton from '@/components/AnimatedButton';
import WordInput from './wordInput';
import FallingWord from './fallingWord';

const WORD_LIST = [
  "diamond", 
  "decorate", 
  "dark", 
  "duck", 
  "dream"
];

const INITIAL_LIVES = 3;

export default function WordsGame() {
  const [gameState, setGameState] = useState('menu'); 
  const [lives, setLives] = useState(INITIAL_LIVES);
  // NOVO STANJE: Seznam vseh besed, ki so trenutno na zaslonu
  const [activeWords, setActiveWords] = useState([]); // [{ id: number, word: string, yPos: number }]
  // NOVO STANJE: ID za nove besede
  const [nextId, setNextId] = useState(0); 
  
  // Hitrost padanja in interval generiranja (lahko jih prilagajamo za težavnost)
  const FALL_SPEED = 0.5; // Premik v vh na vsak interval
  const GENERATE_INTERVAL = 3000; // Generiraj novo besedo vsake 3 sekunde (v ms)
  const MAX_Y_POSITION = 90; // Če pade pod 90vh, je beseda zgrešena

 
  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * WORD_LIST.length);
    let word = WORD_LIST[randomIndex]
    console.log(`Generirana beseda: "${word}"`);
    return word;
  };

  const getRandomXPos = () => {
    // Generira naključno pozicijo med 10% in 90%
    return Math.random() * 80 + 10;
};

  // Logika animacije in padanja besed (useEffect)
  useEffect(() => {
    if (gameState !== 'playing') return;

    // 1. Časovnik za generiranje novih besed
    const generationTimer = setInterval(() => {
      const newWord = {
        id: nextId,
        word: getRandomWord(),
        yPos: 0,
        xPos: getRandomXPos(),
        isMissed: false,
      };
      setActiveWords(prev => [...prev, newWord]);
      setNextId(prev => prev + 1);
    }, GENERATE_INTERVAL);


    // 2. Časovnik za premikanje besed (animacija)
    const animationTimer = setInterval(() => {
      setActiveWords(prevWords => {
        const updatedWords = prevWords.map(word => ({
          ...word,
          yPos: word.yPos + FALL_SPEED,
        }));
        
        // Preverjanje, ali je katera beseda padla pod mejo
        const missedWords = updatedWords.filter(word => word.yPos > MAX_Y_POSITION && !word.isMissed);
        
        if (missedWords.length > 0) {
          // Izguba življenja!
          setLives(prevLives => {
            const newLives = prevLives - missedWords.length;
            if (newLives <= 0) {
              setGameState('gameOver'); // Konec igre
            }
            return newLives;
          });

          // Označi besede kot zgrešene, da jih ne štejemo ponovno
          return updatedWords.map(word => 
            missedWords.some(missed => missed.id === word.id) ? { ...word, isMissed: true } : word
          ).filter(word => word.yPos <= MAX_Y_POSITION + 10); // Odstrani že padle besede iz stanja
        }

        return updatedWords;
      });
    }, 100); // Interval gibanja (hitrost je odvisna od tega in FALL_SPEED)


    // Čiščenje timerjev ob koncu
    return () => {
      clearInterval(generationTimer);
      clearInterval(animationTimer);
    };

  }, [gameState, nextId]);

  const handleWordTyped = (typedWord) => {
    // 1. Poišči besedo, ki se ujema
    const matchIndex = activeWords.findIndex(
      (wordObj) => wordObj.word === typedWord
    );
    
    // Preverjanje uspešnosti
    if (matchIndex !== -1) {
      // Beseda je najdena!
      console.log(`Zadetek! Beseda: "${typedWord}" je bila odstranjena.`);
      
      // 2. Posodobi stanje: Odstrani besedo iz seznama activeWords
      setActiveWords(prevWords => {
        // Ustvarimo nov seznam brez zadete besede
        return prevWords.filter((_, index) => index !== matchIndex);
      });
      
      // (Tukaj bi lahko dodali točke ali vizualni učinek)

    } else {
      // Ni ujemanja
      // (Tukaj bi lahko signalizirali napačen vnos, npr. zvočni signal)
      console.log(`Napaka: Beseda "${typedWord}" se ne ujema z nobeno aktivno besedo.`);
    }
    
    // Opomba: Vnosno polje se izprazni že v WordInput.jsx (pri pritisku Enter).
  };
  

  if (gameState === 'menu') {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-center'>
            <div className='flex items-center justify-center'>
                <h1 className="text-4xl font-bold mb-4">d'words</h1>
            </div>
            <a
                onClick={() => setGameState('playing')} 
                className="inline-flex items-center gap-2 px-6 py-3 
                rounded-lg bg-[var(--background)] border border-[var(--primary)] 
                text-[var(--foreground)] hover:bg-[var(--primary)] 
                hover:text-[var(--background)] transition-all duration-300 group
                
                // KLJUČNA SPREMEMBA: Dodan je 'block' in 'mx-auto', vendar je
                // lažje uporabiti 'text-center' na nadrejenem elementu (div) za centriranje.
                // Ker smo dodali 'text-center' v nadrejeni div, je ta koda že centrirana.
                "
                style={{ cursor: 'pointer' }}
            >
                <span className="font-medium">play</span>
            </a>
        </div>
      </div>
    );
  }

  if (gameState === 'playing') {
    return (
      <div className="min-h-screen w-full relative overflow-hidden">
        
        <div className="absolute top-4 left-4 text-white text-lg font-semibold">
            Življenja: **{lives}**
        </div>

        {activeWords.map(wordObj => (
          <FallingWord 
            key={wordObj.id} 
            id={wordObj.id}
            word={wordObj.word} 
            yPos={wordObj.yPos}
            xPos={wordObj.xPos}
          />
        ))}

        <WordInput onWordTyped={handleWordTyped} />

        <button 
          onClick={() => setGameState('menu')}
          className="absolute top-4 right-4 p-2 bg-gray-700 text-white rounded hover:bg-gray-600"
        >
          Nazaj v meni (Test)
        </button>
      </div>
    );
  }
  
  if (gameState === 'gameOver') {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>GAME OVER</h1>
        <p>Izgubil si vsa življenja.</p>
        <button 
          onClick={() => {
            setLives(INITIAL_LIVES);
            setGameState('menu'); 
          }}
          style={{ 
            padding: '10px 20px', 
            fontSize: '1.2em', 
            cursor: 'pointer' 
          }}
        >
          Igraj ponovno
        </button>
      </div>
    );
  }

  return null;
}