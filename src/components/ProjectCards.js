"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "elektropolnilnice.eu",
        description: "Website with all electric charging stations in Maribor.",
        image: "/projects/elektropolnilnice.PNG",
        tags: ["Web", "Maps"],
        href: "https://elektropolnilnice.eu",
        action: "Visit website",
        type: "external",
    },
    {
        title: "Game 2048",
        description: "Desktop version of the puzzle game 2048, made with libGDX in Java.",
        image: "/projects/game_2048.PNG",
        tags: ["Java", "libGDX", "Game"],
        href: "/game2048.zip",
        action: "Download",
        type: "download",
    },
    {
        title: "d'words",
        description: "A word game I'm still working on. Currently in test phase.",
        tags: ["Game", "Test"],
        href: "/games/wordsGame",
        action: "Play d'words",
        type: "external",
    },
    {
        title: "Wordle",
        description: "My own take on the popular word guessing game.",
        tags: ["Game", "Web"],
        href: "https://wordlegame-seven.vercel.app/",
        action: "Play wordle",
        type: "external",
    },
    {
        title: "Skavti Tržišče",
        description: "Web app for the scout marketplace, deployed on Netlify.",
        tags: ["Web", "Netlify"],
        href: "https://skavti-trzisce.netlify.app/",
        action: "Open app",
        type: "external",
    },
];

const ExternalIcon = () => (
    <svg
        className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

const DownloadIcon = () => (
    <svg
        className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

export default function ProjectCards() {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {projects.map((project, index) => (
                <motion.li
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                    className="group/card flex flex-col overflow-hidden rounded-2xl border border-[var(--surface)] bg-[var(--background)] hover:border-[var(--primary)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                    {/* Slika ali nadomestek */}
                    <div className="relative aspect-video w-full overflow-hidden bg-[var(--surface)]/40">
                        {project.image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-full w-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                            />
                        ) : (
                            <div className="h-full w-full flex items-center justify-center">
                                <span className="text-7xl font-bold text-[var(--primary)] opacity-60">
                                    {project.title.charAt(0)}
                                </span>
                            </div>
                        )}
                        <div className="absolute top-0 left-0 h-1 w-full bg-[var(--primary)]" />
                    </div>

                    {/* Vsebina */}
                    <div className="flex flex-1 flex-col gap-3 p-6 text-left">
                        <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
                        <p className="opacity-60 flex-1">{project.description}</p>

                        <ul className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <li
                                    key={tag}
                                    className="px-3 py-1 rounded-full text-xs font-medium border border-[var(--surface)] bg-[var(--surface)]/40"
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>

                        <a
                            href={project.href}
                            {...(project.type === "download"
                                ? { download: true }
                                : { target: "_blank", rel: "noopener noreferrer" })}
                            className="mt-2 self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-[var(--background)] transition-all duration-300 group"
                        >
                            <span className="font-medium">{project.action}</span>
                            {project.type === "download" ? <DownloadIcon /> : <ExternalIcon />}
                        </a>
                    </div>
                </motion.li>
            ))}
        </ul>
    );
}
