// Ker je projekt statičen (output: 'export'), mora biti sitemap označen kot force-static.
export const dynamic = "force-static";

export default function sitemap() {
    return [
        {
            url: "https://davidgole.eu",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
