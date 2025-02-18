"use client";
import { motion } from "framer-motion";

export default function AnimatedButton({ children }) {
    return (
        <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="mt-8 px-6 py-3 border rounded-lg backdrop-blur-md
                       bg-transparent transition-all hover:bg-white/20
                       hover:backdrop-blur-xl hover:shadow-lg"
        >
            {children}
        </motion.button>
    );
}
