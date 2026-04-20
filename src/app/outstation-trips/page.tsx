import { Metadata } from "next";
import OutstationClient from "./OutstationClient";

export const metadata: Metadata = {
    title: "Outstation Trips",
    description:
        "Book outstation cabs from Hyderabad at best prices. One-way and round-trip options to Tirupati, Bangalore, Vizag, Vijayawada, and 50+ destinations.",
    openGraph: {
        title: "Outstation Cabs from Hyderabad - VRS Travels",
        description: "Affordable outstation cab booking with one-way and round-trip options.",
    },
};

export default function OutstationPage() {
    return <OutstationClient />;
}
