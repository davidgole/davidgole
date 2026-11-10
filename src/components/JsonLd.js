// Strukturirani podatki (JSON-LD), ki iskalnikom povedo, kdo si in katere profile imaš.
const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "David Gole",
    url: "https://davidgole.eu",
    jobTitle: "Software Developer",
    description:
        "Computer science student and developer from Maribor, Slovenia, building web apps, games and software.",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Maribor",
        addressCountry: "SI",
    },
    knowsAbout: ["Web development", "Next.js", "React", "Java", "TailwindCSS"],
    sameAs: [
        "https://github.com/davidgole",
        "https://www.instagram.com/gole_david/",
        "https://www.facebook.com/david.gole.10",
        // TODO: zamenjaj s povezavo do svojega LinkedIn profila
        // "https://www.linkedin.com/in/tvoj-profil/",
    ],
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "David Gole",
    url: "https://davidgole.eu",
    inLanguage: "en",
};

export default function JsonLd() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    );
}
