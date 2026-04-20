import { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about VRS Travels - Hyderabad's trusted travel partner offering premium cab services, tour packages, and airport transfers since 2010.",
    openGraph: {
        title: "About VRS Travels - Your Trusted Travel Partner",
        description:
            "Hyderabad's most trusted cab and travel service provider with 10K+ happy customers.",
    },
};

export default function AboutPage() {
    return <AboutPageClient />;
}
