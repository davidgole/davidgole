"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AnimatedBackground({ children }) {
    const { theme } = useTheme(); // Pridobi trenutni način (light/dark)
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const radius = 400;
    const [resolvedTheme, setResolvedTheme] = useState("dark"); // Privzeti način

    useEffect(() => {
        if (theme) {
            setResolvedTheme(theme);
        }
    }, [theme]);

    // Gradient se prilagodi dark/light mode
    const background = useTransform(
        [mouseX, mouseY],
        ([x, y]) => {
            const lightModeColors = "#D1D1D1FF, #ffffff";
            const darkModeColors = "#1e1e1e, #0a0a0a";

            return `radial-gradient(${radius}px at ${x}px ${y}px, ${
                resolvedTheme === "dark" ? darkModeColors : lightModeColors
            })`;
        }
    );

    return (
        <motion.div
            className="min-h-screen w-full flex items-center justify-center transition-colors duration-500"
            style={{ background }}
            onMouseMove={(event) => {
                mouseX.set(event.pageX);
                mouseY.set(event.pageY);
            }}
        >
            {children}
        </motion.div>
    );
}
