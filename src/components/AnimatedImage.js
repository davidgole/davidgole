"use client";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

export default function FramedImage() {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative w-full overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Kvadrat v ozadju */}
            <motion.div
                className="absolute w-full h-full bg-[var(--primary)] z-0 rounded"
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{
                    x: hovered ? -20 : 0,
                    y: hovered ? -20 : 0,
                    opacity: hovered ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />

            {/* Slika čez kvadrat */}
            <motion.div
                className="relative z-10 w-full"
                animate={{
                    x: hovered ? 10 : 0,
                    y: hovered ? 10 : 0,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                <Image
                    src="/me_remove.png"
                    alt="My profile"
                    layout="responsive"
                    width={800}
                    height={800}
                    objectFit="cover"
                    className="object-cover"
                    priority
                />
            </motion.div>
        </div>
    );
}
