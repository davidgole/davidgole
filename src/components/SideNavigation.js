"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
    { id: "about", label: "About Me" },
    // { id: "work", label: "Where I've Worked" },
    { id: "projects", label: "Work & Projects" },
    { id: "contact", label: "Get in Touch" },
];

export default function SideNav() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -40% 0px", threshold: 0.2 } // Boljše zaznavanje vidnosti
        );

        sections.forEach(({ id }) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach(({ id }) => {
                const section = document.getElementById(id);
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
            <ul className="space-y-4">
                {sections.map(({ id, label }) => (
                    <li key={id}>
                        <a href={`#${id}`} className="relative">
                            <motion.span
                                className={`block px-4 py-2 text-lg font-semibold transition-colors ${
                                    activeSection === id ? "text-primary" : "text-foreground"
                                }`}
                            >
                                {label}
                            </motion.span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
