import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://vrstravels.com";

    const routes = [
        "",
        "/about",
        "/fleet",
        "/tour-packages",
        "/outstation-trips",
        "/local-rentals",
        "/airport-transfers",
        "/contact",
        "/hyderabad-to-tirupati-cab",
        "/hyderabad-to-bangalore-cab",
        "/hyderabad-airport-taxi",
        "/vizag-tour-packages",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1 : route.startsWith("/hyderabad") || route.startsWith("/vizag") ? 0.9 : 0.8,
    }));
}
