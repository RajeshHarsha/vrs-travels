import { Metadata } from "next";
import LocalRentalsClient from "./LocalRentalsClient";

export const metadata: Metadata = {
    title: "Local Rentals",
    description:
        "Affordable hourly car rental in Hyderabad. Choose from 4hr/40km, 8hr/80km, and 12hr/120km packages. AC cabs with professional drivers.",
    openGraph: {
        title: "Local Car Rental Hyderabad - VRS Travels",
        description: "Affordable hourly car rental packages in Hyderabad with AC cabs.",
    },
};

export default function LocalRentalsPage() {
    return <LocalRentalsClient />;
}
