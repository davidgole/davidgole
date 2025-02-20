"use client";

import { motion } from "framer-motion";

export default function BreathingText({ children, className = "" }) {
    return (
        <div className="relative inline-block">
            {/* Glow Effect */}
            <motion.div
                className="absolute inset-0 text-[var(--primary)] blur-lg opacity-40"
                initial={{ opacity: 0.3, scale: 0.95 }}
                animate={{ opacity: 0.6, scale: 1.05 }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
            >
                {children}
            </motion.div>

            {/* Actual Text */}
            <span className={`relative z-10 text-[var(--primary)] ${className}`}>
                {children}
            </span>
        </div>
    );
}
