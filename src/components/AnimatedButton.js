"use client";
import { motion } from "framer-motion";

export default function AnimatedButton({ children }) {
    return (
        <motion.button
            className="relative mt-5 px-6 py-3 border rounded-lg text-[var(--foreground)] font-semibold
                       transition-all overflow-hidden bg-[var(--background)]"
            initial={{ boxShadow: "0px 0px 0px rgba(255, 102, 0, 0)" }}
            whileHover={{
                boxShadow: "0px 0px 20px rgba(255, 102, 0, 0.8)", // Takojšnja močnejša senca
            }}
            whileTap={{
                scale:0.9,
            }}
            transition={{
                duration: 0.2, // Hitrejša animacija za boljši odziv
                ease: "easeOut",
            }}
        >
            {children}
        </motion.button>
    );
}
