import { Metadata } from "next";
import TourPackagesClient from "./TourPackagesClient";

export const metadata: Metadata = {
    title: "Tour Packages",
    description:
        "Explore affordable tour packages from Hyderabad - Tirupati, Goa, Vizag, Ooty, and more. Includes hotel stay, sightseeing, and comfortable AC transport.",
    openGraph: {
        title: "Tour Packages - VRS Travels Hyderabad",
        description: "Affordable tour packages with hotel, sightseeing, and AC cab included.",
    },
};

export default function TourPackagesPage() {
    return <TourPackagesClient />;
}
