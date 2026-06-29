import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            { userAgent: "*", allow: "/" },
            { userAgent: "GPTBot", allow: "/" },
            { userAgent: "Google-Extended", allow: "/" },
            { userAgent: "ChatGPT-User", allow: "/" },
            { userAgent: "PerplexityBot", allow: "/" },
        ],
        sitemap: "https://lqglobal.vercel.app/sitemap.xml",
    };
}