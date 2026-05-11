module.exports = [
"[project]/src/components/AnimatedBackground.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function AnimatedBackground({ children }) {
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])(); // Pridobi trenutni način (light/dark)
    const mouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const mouseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const radius = 400;
    const [resolvedTheme, setResolvedTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("dark"); // Privzeti način
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (theme) {
            setResolvedTheme(theme);
        }
    }, [
        theme
    ]);
    // Gradient se prilagodi dark/light mode
    const background = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])([
        mouseX,
        mouseY
    ], ([x, y])=>{
        const lightModeColors = "#D1D1D1FF, #ffffff";
        const darkModeColors = "#1e1e1e, #0a0a0a";
        return `radial-gradient(${radius}px at ${x}px ${y}px, ${resolvedTheme === "dark" ? darkModeColors : lightModeColors})`;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "min-h-screen w-full flex items-center justify-center transition-colors duration-500",
        style: {
            background
        },
        onMouseMove: (event)=>{
            mouseX.set(event.pageX);
            mouseY.set(event.pageY);
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/AnimatedBackground.js",
        lineNumber: 35,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/AnimatedButton.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function AnimatedButton({ children }) {
    const scrollToContact = ()=>{
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
        onClick: scrollToContact,
        className: "relative mt-5 px-6 py-3 border rounded-lg text-[var(--foreground)] font-semibold   transition-all overflow-hidden bg-[var(--background)]",
        initial: {
            boxShadow: "0px 0px 0px rgba(255, 102, 0, 0)"
        },
        whileHover: {
            boxShadow: "0px 0px 20px rgba(255, 102, 0, 0.8)"
        },
        whileTap: {
            scale: 0.9
        },
        transition: {
            duration: 0.2,
            ease: "easeOut"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/AnimatedButton.js",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/games/wordsGame/components/wordInput.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WordInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function WordInput({ onWordTyped }) {
    // Stanje za shranjevanje trenutnega vnosa igralca
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Ref za fokusiranje vnosnega polja
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Funkcija, ki se sproži ob spremembi vnosnega polja
    const handleChange = (event)=>{
        // Spremljamo in shranjujemo vneseno vrednost, pretvorjeno v male črke
        setInputValue(event.target.value.toLowerCase());
    };
    // Funkcija, ki se sproži ob pritisku tipke
    const handleKeyDown = (event)=>{
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-0 left-0 right-0 p-5 text-center z-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: inputRef,
                type: "text",
                value: inputValue,
                onChange: handleChange,
                onKeyDown: handleKeyDown,
                placeholder: "Vnesite besedo in pritisnite ENTER",
                className: "w-11/12 max-w-xl p-3 text-2xl border-[var(--primary)] rounded-lg focus:outline-none text-center bg-[var(--surface)] text-white"
            }, void 0, false, {
                fileName: "[project]/src/app/games/wordsGame/components/wordInput.js",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 text-lg text-gray-400",
                children: [
                    "Trenutni vnos: **",
                    inputValue,
                    "** 333"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/games/wordsGame/components/wordInput.js",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/games/wordsGame/components/wordInput.js",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/games/wordsGame/components/fallingWord.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/games/wordsGame/components/FallingWord.jsx
/**
 * Prikazuje besedo, ki pada.
 * @param {object} props
 * @param {string} props.word - Beseda za prikaz.
 * @param {number} props.yPos - Vertikalna pozicija (0 do 100, kot % ali vh).
 * @param {string} props.id - Edinstveni ID besede.
 */ __turbopack_context__.s([
    "default",
    ()=>FallingWord
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function FallingWord({ word, yPos, xPos, id }) {
    // Dinamične vrednosti:
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-word-id": id,
        className: "absolute p-2 bg-black/50 border-2 font-bold text-xl    rounded-md whitespace-nowrap z-10   color--[var(--foreground)] border--[var(--foreground)]",
        style: {
            // Dinamični/CSS stili ostanejo v inline style bloku:
            position: 'absolute',
            top: `${yPos}vh`,
            left: `${xPos}%`,
            transform: 'translateX(-50%)',
            transition: 'none'
        },
        children: word
    }, void 0, false, {
        fileName: "[project]/src/app/games/wordsGame/components/fallingWord.js",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/games/wordsGame/components/wordsGame.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WordsGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnimatedButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$games$2f$wordsGame$2f$components$2f$wordInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/games/wordsGame/components/wordInput.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$games$2f$wordsGame$2f$components$2f$fallingWord$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/games/wordsGame/components/fallingWord.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const WORD_LIST = [
    "diamond",
    "decorate",
    "dark",
    "duck",
    "dream"
];
const INITIAL_LIVES = 3;
function WordsGame() {
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('menu');
    const [lives, setLives] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(INITIAL_LIVES);
    // NOVO STANJE: Seznam vseh besed, ki so trenutno na zaslonu
    const [activeWords, setActiveWords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // [{ id: number, word: string, yPos: number }]
    // NOVO STANJE: ID za nove besede
    const [nextId, setNextId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Hitrost padanja in interval generiranja (lahko jih prilagajamo za težavnost)
    const FALL_SPEED = 0.5; // Premik v vh na vsak interval
    const GENERATE_INTERVAL = 3000; // Generiraj novo besedo vsake 3 sekunde (v ms)
    const MAX_Y_POSITION = 90; // Če pade pod 90vh, je beseda zgrešena
    const getRandomWord = ()=>{
        const randomIndex = Math.floor(Math.random() * WORD_LIST.length);
        let word = WORD_LIST[randomIndex];
        console.log(`Generirana beseda: "${word}"`);
        return word;
    };
    const getRandomXPos = ()=>{
        // Generira naključno pozicijo med 10% in 90%
        return Math.random() * 80 + 10;
    };
    // Logika animacije in padanja besed (useEffect)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (gameState !== 'playing') return;
        // 1. Časovnik za generiranje novih besed
        const generationTimer = setInterval(()=>{
            const newWord = {
                id: nextId,
                word: getRandomWord(),
                yPos: 0,
                xPos: getRandomXPos(),
                isMissed: false
            };
            setActiveWords((prev)=>[
                    ...prev,
                    newWord
                ]);
            setNextId((prev)=>prev + 1);
        }, GENERATE_INTERVAL);
        // 2. Časovnik za premikanje besed (animacija)
        const animationTimer = setInterval(()=>{
            setActiveWords((prevWords)=>{
                const updatedWords = prevWords.map((word)=>({
                        ...word,
                        yPos: word.yPos + FALL_SPEED
                    }));
                // Preverjanje, ali je katera beseda padla pod mejo
                const missedWords = updatedWords.filter((word)=>word.yPos > MAX_Y_POSITION && !word.isMissed);
                if (missedWords.length > 0) {
                    // Izguba življenja!
                    setLives((prevLives)=>{
                        const newLives = prevLives - missedWords.length;
                        if (newLives <= 0) {
                            setGameState('gameOver'); // Konec igre
                        }
                        return newLives;
                    });
                    // Označi besede kot zgrešene, da jih ne štejemo ponovno
                    return updatedWords.map((word)=>missedWords.some((missed)=>missed.id === word.id) ? {
                            ...word,
                            isMissed: true
                        } : word).filter((word)=>word.yPos <= MAX_Y_POSITION + 10); // Odstrani že padle besede iz stanja
                }
                return updatedWords;
            });
        }, 100); // Interval gibanja (hitrost je odvisna od tega in FALL_SPEED)
        // Čiščenje timerjev ob koncu
        return ()=>{
            clearInterval(generationTimer);
            clearInterval(animationTimer);
        };
    }, [
        gameState,
        nextId
    ]);
    const handleWordTyped = (typedWord)=>{
        // 1. Poišči besedo, ki se ujema
        const matchIndex = activeWords.findIndex((wordObj)=>wordObj.word === typedWord);
        // Preverjanje uspešnosti
        if (matchIndex !== -1) {
            // Beseda je najdena!
            console.log(`Zadetek! Beseda: "${typedWord}" je bila odstranjena.`);
            // 2. Posodobi stanje: Odstrani besedo iz seznama activeWords
            setActiveWords((prevWords)=>{
                // Ustvarimo nov seznam brez zadete besede
                return prevWords.filter((_, index)=>index !== matchIndex);
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold mb-4",
                            children: "d'words"
                        }, void 0, false, {
                            fileName: "[project]/src/app/games/wordsGame/components/wordsGame.js",
                            lineNumber: 136,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/games/wordsGame/components/wordsGame.js",
                        lineNumber: 135,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        onClick: ()=>setGameState('playing'),
                        className: "inline-flex items-center gap-2 px-6 py-3    rounded-lg bg-[var(--background)] border border-[var(--primary)]    text-[var(--foreground)] hover:bg-[var(--primary)]    hover:text-[var(--background)] transition-all duration-300 group      // KLJUČNA SPREMEMBA: Dodan je 'block' in 'mx-auto', vendar je   // lažje uporabiti 'text-center' na nadrejenem elementu (div) za centriranje.   // Ker smo dodali 'text-center' v nadrejeni div, je ta koda že centrirana.   ",
                        style: {
                            cursor: 'pointer'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: "play"
                        }, void 0, false, {
                            fileName: "[project]/src/app/games/wordsGame/components/wordsGame.js",
                            lineNumber: 151,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/games/wordsGame/components/wordsGame.js",
                        lineNumber: 138,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/games/wordsGame/components/wordsGame.js",
                lineNumber: 134,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/games/wordsGame/components/wordsGame.js",
            lineNumber: 133,
            columnNumber: 7
        }, this);
    }
    if (gameState === 'playing') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen w-full relative overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-4 left-4 text-white text-lg font-semibold",
                    children: [
                        "Življenja: **",
                        lives,
                        "**"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/games/wordsGame/components/wordsGame.js",
                    lineNumber: 162,
                    columnNumber: 9
                }, this),
                activeWords.map((wordObj)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$games$2f$wordsGame$2f$components$2f$fallingWord$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        id: wordObj.id,
                        word: wordObj.word,
                        yPos: wordObj.yPos,
                        xPos: wordObj.xPos
                    }, wordObj.id, false, {
                        fileName: "[project]/src/app/games/wordsGame/components/wordsGame.js",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$games$2f$wordsGame$2f$components$2f$wordInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onWordTyped: handleWordTyped
                }, void 0, false, {
                    fileName: "[project]/src/app/games/wordsGame/components/wordsGame.js",
                    lineNumber: 176,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setGameState('menu'),
                    className: "absolute top-4 right-4 p-2 bg-gray-700 text-white rounded hover:bg-gray-600",
                    children: "Nazaj v meni (Test)"
                }, void 0, false, {
                    fileName: "[project]/src/app/games/wordsGame/components/wordsGame.js",
                    lineNumber: 178,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/games/wordsGame/components/wordsGame.js",
            lineNumber: 160,
            columnNumber: 7
        }, this);
    }
    if (gameState === 'gameOver') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: 'center',
                padding: '50px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "GAME OVER"
                }, void 0, false, {
                    fileName: "[project]/src/app/games/wordsGame/components/wordsGame.js",
                    lineNumber: 191,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Izgubil si vsa življenja."
                }, void 0, false, {
                    fileName: "[project]/src/app/games/wordsGame/components/wordsGame.js",
                    lineNumber: 192,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        setLives(INITIAL_LIVES);
                        setGameState('menu');
                    },
                    style: {
                        padding: '10px 20px',
                        fontSize: '1.2em',
                        cursor: 'pointer'
                    },
                    children: "Igraj ponovno"
                }, void 0, false, {
                    fileName: "[project]/src/app/games/wordsGame/components/wordsGame.js",
                    lineNumber: 193,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/games/wordsGame/components/wordsGame.js",
            lineNumber: 190,
            columnNumber: 7
        }, this);
    }
    return null;
}
}),
];

//# sourceMappingURL=src_f37adb11._.js.map