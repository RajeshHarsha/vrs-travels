import { Metadata } from "next";
import FleetPageClient from "./FleetPageClient";

export const metadata: Metadata = {
    title: "Our Fleet",
    description:
        "Explore our range of well-maintained vehicles - Swift Dzire, Toyota Innova, Tempo Traveller, and luxury cars. All AC, GPS-tracked, and fully insured.",
    openGraph: {
        title: "Our Fleet - VRS Travels",
        description: "Choose from our premium, well-maintained vehicles for your next trip.",
    },
};

export default function FleetPage() {
    return <FleetPageClient />;
}
