'use client';

import { useState, useRef, useEffect } from 'react';

/**
 * Komponenta za vnos in prikaz vtipkane besede.
 * @param {object} props
 * @param {function} props.onWordTyped - Klicana, ko igralec pritisne Enter.
 */
export default function WordInput({ onWordTyped }) {
  // Stanje za shranjevanje trenutnega vnosa igralca
  const [inputValue, setInputValue] = useState('');
  
  // Ref za fokusiranje vnosnega polja
  const inputRef = useRef(null);

  // Funkcija, ki se sproži ob spremembi vnosnega polja
  const handleChange = (event) => {
    // Spremljamo in shranjujemo vneseno vrednost, pretvorjeno v male črke
    setInputValue(event.target.value.toLowerCase());
  };

  // Funkcija, ki se sproži ob pritisku tipke
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Preprečimo privzeto obnašanje (npr. oddajo obrazca)
      event.preventDefault(); 
      
      // Pokličemo funkcijo, ki nam jo je posredovala starševska komponenta (WordsGame)
      onWordTyped(inputValue);
      
      // Po preverjanju vnos izpraznimo
      setInputValue('');
    }
  };

  // Uporabimo useEffect, da avtomatsko fokusiramo vnosno polje
  // vsakič, ko se komponenta prikaže, kar olajša igranje.
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 p-5 text-center z-10"
    >
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Vnesite besedo in pritisnite ENTER"
        className="w-11/12 max-w-xl p-3 text-2xl border-[var(--primary)] rounded-lg focus:outline-none text-center bg-[var(--surface)] text-white"
      />
      <div
        className="mt-3 text-lg text-gray-400"
      >
        Trenutni vnos: **{inputValue}** 333 
        {/* tukaj bodo srcki */}
      </div>
    </div>
  );
}