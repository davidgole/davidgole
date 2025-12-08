// app/games/wordsGame/components/FallingWord.jsx

/**
 * Prikazuje besedo, ki pada.
 * @param {object} props
 * @param {string} props.word - Beseda za prikaz.
 * @param {number} props.yPos - Vertikalna pozicija (0 do 100, kot % ali vh).
 * @param {string} props.id - Edinstveni ID besede.
 */
export default function FallingWord({ word, yPos, xPos, id }) {
  // Dinamične vrednosti:
  
  return (
    <div
      data-word-id={id}
      className="absolute p-2 bg-black/50 border-2 font-bold text-xl 
      rounded-md whitespace-nowrap z-10
      color--[var(--foreground)] border--[var(--foreground)]"
      style={{
        // Dinamični/CSS stili ostanejo v inline style bloku:
        position: 'absolute', // Ohranjeno v razredih (absolute)
        top: `${yPos}vh`, // Dinamična pozicija Y (vh)
        left: `${xPos}%`, // Naključna pozicija X (%)
        transform: 'translateX(-50%)', // Centriranje besede
        transition: 'none', // Brez animacije pri posodabljanju Y (ključno za gladko padanje)
      }}
    >
      {word}
    </div>
  );
}