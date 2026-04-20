import { Metadata } from "next";
import AirportTransfersClient from "./AirportTransfersClient";

export const metadata: Metadata = {
    title: "Airport Transfers",
    description:
        "Reliable airport cab service in Hyderabad. Pickup and drop to Rajiv Gandhi International Airport. Transparent pricing, flight tracking, and 24/7 availability.",
    openGraph: {
        title: "Airport Taxi Hyderabad - VRS Travels",
        description: "Reliable airport pickup and drop service at RGIA Hyderabad.",
    },
};

export default function AirportTransfersPage() {
    return <AirportTransfersClient />;
}
