export const dynamic = "force-static";

export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://davidgole.eu/sitemap.xml",
        host: "https://davidgole.eu",
    };
}
