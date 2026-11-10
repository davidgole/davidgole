import {Geist, Geist_Mono, Poppins} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
});

export const metadata = {
    metadataBase: new URL("https://davidgole.eu"),
    title: {
        default: "David Gole | Web & Software Developer from Slovenia",
        template: "%s | David Gole",
    },
    description:
        "Portfolio of David Gole, a computer science student and developer from Maribor, Slovenia. Web apps, games and Java projects.",
    keywords: ["David Gole", "web developer", "software developer", "portfolio", "Maribor", "Slovenia", "Next.js", "React"],
    authors: [{ name: "David Gole", url: "https://davidgole.eu" }],
    creator: "David Gole",
    alternates: { canonical: "/" },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    openGraph: {
        title: "David Gole | Web & Software Developer",
        description: "Portfolio of David Gole, developer from Slovenia. Web apps, games and Java projects.",
        url: "https://davidgole.eu",
        siteName: "David Gole",
        locale: "en_US",
        type: "website",
        images: [{ url: "/logo.png", alt: "David Gole logo" }],
    },
    twitter: {
        card: "summary",
        title: "David Gole | Web & Software Developer",
        description: "Portfolio of David Gole, developer from Slovenia.",
        images: ["/logo.png"],
    },
    icons: { icon: "favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`${poppins.variable} antialiased`}>
        <JsonLd />
        <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
        </ThemeProvider>
    </body>
    </html>
  );
}
