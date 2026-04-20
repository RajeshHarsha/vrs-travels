import { Metadata } from "next";
import AirportTaxiClient from "./AirportTaxiClient";

export const metadata: Metadata = {
    title: "Hyderabad Airport Taxi - Cab to RGIA | From ₹800",
    description:
        "Book Hyderabad airport taxi at ₹800 one-way. Pickup & drop to Rajiv Gandhi International Airport. Flight tracking, free waiting, 24/7 service. VRS Travels.",
    keywords: ["Hyderabad airport taxi", "RGIA cab", "airport cab Hyderabad", "Shamshabad airport taxi"],
    openGraph: {
        title: "Hyderabad Airport Taxi - VRS Travels",
        description: "Reliable airport taxi to RGIA Hyderabad from ₹800.",
    },
};

const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "How much does an airport taxi cost in Hyderabad?", acceptedAnswer: { "@type": "Answer", text: "Airport taxi fares start from ₹800 for a Swift Dzire from central Hyderabad areas. Prices vary based on pickup location." } },
        { "@type": "Question", name: "How far is Hyderabad airport from the city?", acceptedAnswer: { "@type": "Answer", text: "Rajiv Gandhi International Airport (RGIA) is located in Shamshabad, approximately 25-40 km from various parts of Hyderabad city." } },
    ],
};

export default function AirportTaxiPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
            <AirportTaxiClient />
        </>
    );
}
