"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "elektropolnilnice.eu",
        shortDescription: "Website with all electric stations in Maribor.",
        longDescription: "Fully responsive portfolio showcasing my work.",
        image: "/projects/elektropolnilnice.png",
        githubLink: "https://github.com/yourusername/portfolio",
    },
    {
        id: 2,
        title: "elektropolnilnice.eu",
        shortDescription: "Website with all electric stations in Maribor.",
        longDescription: "Fully responsive portfolio showcasing my work.",
        image: "/projects/elektropolnilnice.png",
        githubLink: "https://github.com/yourusername/portfolio",
    },
    {
        id: 3,
        title: "Game 2048",
        shortDescription: "Desktop game 2048 made with libGDX in Java.",
        longDescription: "Fun puzzle game built in Java using libGDX.",
        image: "/projects/game_2048.png",
        githubLink: "https://github.com/yourusername/ecommerce-store",
    },
    {
        id: 4,
        title: "davidgole.eu",
        shortDescription: "This website as my portfolio.",
        longDescription: "Personal portfolio built with Next.js and TailwindCSS.",
        image: "/logo.png",
        githubLink: "https://github.com/yourusername/blog-platform",
    },
];

export default function ProjectsStack() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { scrollYProgress } = useScroll();
    const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, projects.length - 1]); // <-- -1 tu!

    useEffect(() => {
        const unsubscribe = scrollProgress.on("change", (latest) => {
            const newIndex = Math.round(latest); // <-- round tukaj
            if (newIndex !== currentIndex && newIndex >= 0 && newIndex < projects.length) {
                setCurrentIndex(newIndex);
            }
        });

        return () => unsubscribe();
    }, [scrollProgress, currentIndex]);

    return (
        <section id="projects" className="w-full h-[300vh] relative">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center">
                <div className="relative w-full max-w-5xl h-1/2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="absolute inset-0 grid place-items-center rounded-box border-2 border-[var(--primary)] bg-[var(--background)] p-8"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: index === currentIndex ? 1 : 0,
                                y: index === currentIndex ? 0 : 50,
                                zIndex: index === currentIndex ? 10 : 0,
                            }}
                            transition={{ type: "spring", stiffness: 100 }}
                        >
                            <div className="text-center">
                                <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                                <p className="text-xl mb-6">{project.shortDescription}</p>
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <p className="mt-6 opacity-80">{project.longDescription}</p>
                                <a
                                    href={project.githubLink}
                                    className="mt-4 inline-block text-[var(--primary)] hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
