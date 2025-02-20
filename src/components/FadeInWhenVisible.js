"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInWhenVisible({ children, delay = 0 }) {
    const { ref, inView } = useInView({
        triggerOnce: false, // Animira samo enkrat
        threshold: 0.5, // Ko 20% elementa pride v vidno polje
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
}
