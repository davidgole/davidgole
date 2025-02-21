"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Ikone za meni

const sections = [
    { id: "about", label: "About Me" },
    { id: "projects", label: "Work & Projects" },
    { id: "contact", label: "Get in Touch" },
];

export default function SideNav() {
    const [activeSection, setActiveSection] = useState("");
    const [hideNav, setHideNav] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -40% 0px", threshold: 0.2 }
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

    useEffect(() => {
        const heroSection = document.querySelector("#hero");
        if (!heroSection) return;

        const heroObserver = new IntersectionObserver(
            ([entry]) => {
                setHideNav(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        heroObserver.observe(heroSection);
        return () => heroObserver.disconnect();
    }, []);

    return (
        <>
            {/* DESKTOP NAVIGATION */}
            <motion.nav
                initial={{ opacity: 1 }}
                animate={{ opacity: hideNav ? 0 : 1 }}
                transition={{ duration: 0.5 }}
                className={`hidden lg:block fixed left-4 top-1/2 -translate-y-1/2 z-50 transition-opacity ${
                    hideNav ? "pointer-events-none" : ""
                }`}
            >
                <ul className="space-y-4">
                    {sections.map(({ id, label }) => (
                        <li key={id}>
                            <a href={`#${id}`} className="relative">
                                <motion.span
                                    className={`block px-4 py-2 text-lg font-semibold transition-colors ${
                                        activeSection === id ? "text-[var(--primary)]" : "text-[var(--foreground)]"
                                    }`}
                                >
                                    {label}
                                </motion.span>
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.nav>

            {/* MOBILE NAVIGATION */}
            <div className="lg:hidden fixed top-4 right-4 z-50">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-3 rounded-md"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%", opacity: 0 }} // Začetek: izven ekrana + nevidno
                        animate={{ x: 0, opacity: 1 }} // Animira videnje in premik
                        exit={{ x: "100%", opacity: 0 }} // Skrije meni z fade-out efektom
                        transition={{ duration: 0.6, ease: "easeInOut" }} // Počasnejša animacija
                        className="lg:hidden fixed top-0 right-0 h-full w-64 bg-[var(--background)] shadow-lg z-40"
                    >
                        <ul className="p-6 space-y-4">
                            {sections.map(({ id, label }) => (
                                <li key={id}>
                                    <a
                                        href={`#${id}`}
                                        className={`block px-4 py-2 text-lg font-semibold transition-colors ${
                                            activeSection === id ? "text-[var(--primary)]" : "text-[var(--foreground)]"
                                        }`}
                                        onClick={() => setIsMobileMenuOpen(false)} // Zapre meni ob kliku
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
}
