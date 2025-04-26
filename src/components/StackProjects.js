"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
        title: "Game 2048",
        shortDescription: "Desktop game 2048 made with libGDX in Java.",
        longDescription: "Fun puzzle game built in Java using libGDX.",
        image: "/projects/game_2048.png",
        githubLink: "https://github.com/yourusername/ecommerce-store",
    },
    {
        id: 3,
        title: "davidgole.eu",
        shortDescription: "This website as my portfolio.",
        longDescription: "Personal portfolio built with Next.js and TailwindCSS.",
        image: "/logo.png",
        githubLink: "https://github.com/yourusername/blog-platform",
    },
];

export default function ProjectsStack() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section
            id="projects"
            className="w-full h-screen flex flex-col items-center justify-center gap-8"
        >
            <div className="relative w-full max-w-5xl h-1/2 flex items-center justify-center">
                <div className="stack w-full h-full">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="relative w-full h-full group overflow-hidden rounded-box"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{
                                opacity: index === currentIndex ? 1 : 0,
                                scale: index === currentIndex ? 1 : 0.95,
                                zIndex: index === currentIndex ? 10 : 0,
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            {/* Okno za projekt */}
                            <div className="mockup-window w-full h-full bg-[var(--surface)] flex items-center justify-center border border-[var(--primary)] rounded-box overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Hover efekt */}
                            <div className="absolute top-0 left-0 w-full h-full bg-[var(--primary)] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6 rounded-box text-center">
                                <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                                <p className="text-lg mb-4">{project.shortDescription}</p>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 mt-2 border-2 border-white rounded-md hover:bg-white hover:text-primary transition-colors"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Gumbi za navigacijo */}
            <div className="flex gap-6">
                <button
                    onClick={prevProject}
                    className="px-6 py-2 border-2 border-[var(--primary)] text-[var(--primary)] rounded-md hover:bg-[var(--primary)] hover:text-white transition-colors"
                >
                    Previous
                </button>
                <button
                    onClick={nextProject}
                    className="px-6 py-2 border-2 border-[var(--primary)] text-[var(--primary)] rounded-md hover:bg-[var(--primary)] hover:text-white transition-colors"
                >
                    Next
                </button>
            </div>
        </section>
    );
}
