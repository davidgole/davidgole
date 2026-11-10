"use client";

import { useState } from "react";

// Ker je projekt statičen (output: 'export'), nima strežnika za pošiljanje e-pošte.
// Obrazec zato pošilja prek Formspree (https://formspree.io):
// 1. Ustvari brezplačen račun in nov obrazec (kot prejemnik vpiši svoj e-naslov).
// 2. Kopiraj ID obrazca (npr. "xyzabcde") in ga vpiši spodaj
//    ali pa ga nastavi v .env.local kot NEXT_PUBLIC_FORMSPREE_ID.
// Dokler ID ni nastavljen, se obrazec odpre kot mailto: v privzetem e-poštnem odjemalcu.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "myeeleja";
const FALLBACK_EMAIL = "david.gole@outlook.com";

const inputClass =
    "w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--surface)] text-[var(--foreground)] placeholder:opacity-40 focus:outline-none focus:border-[var(--primary)] transition-colors duration-300";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Honeypot: če ga izpolni bot, obrazca ne pošljemo.
        if (form.website) return;

        if (!FORMSPREE_ID) {
            const subject = encodeURIComponent(`Portfolio: sporočilo od ${form.name}`);
            const body = encodeURIComponent(`${form.message}\n\n${form.name} (${form.email})`);
            window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
            return;
        }

        setStatus("sending");
        try {
            const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    message: form.message,
                }),
            });
            if (!res.ok) throw new Error("Request failed");
            setStatus("success");
            setForm({ name: "", email: "", message: "", website: "" });
        } catch {
            setStatus("error");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-10 max-w-2xl flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm tracking-wide opacity-60">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm tracking-wide opacity-60">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputClass}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm tracking-wide opacity-60">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What would you like to talk about?"
                    className={`${inputClass} resize-y`}
                />
            </div>

            {/* Honeypot polje (skrito pred uporabniki) */}
            <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={handleChange}
                className="hidden"
                aria-hidden="true"
            />

            <div className="flex flex-wrap items-center gap-4">
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--background)] border border-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-[var(--background)] transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    <span className="font-medium">
                        {status === "sending" ? "Sending..." : "Send message"}
                    </span>
                </button>

                <p role="status" aria-live="polite" className="text-sm">
                    {status === "success" && (
                        <span className="text-[var(--primary)]">Thanks! Your message has been sent.</span>
                    )}
                    {status === "error" && (
                        <span className="text-red-500">
                            Something went wrong. Please try again or email me directly.
                        </span>
                    )}
                </p>
            </div>
        </form>
    );
}
