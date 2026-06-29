import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const url = "https://lqglobal.vercel.app";

    return [
        {
            url,
            lastModified: new Date(),
            priority: 1,
            changeFrequency: "weekly",
        },
        {
            url: `${url}/services`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${url}/our-work`,
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: `${url}/about`,
            lastModified: new Date(),
        },
        {
            url: `${url}/contact`,
            lastModified: new Date(),
        },
    ];
}