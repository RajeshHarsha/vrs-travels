import { Metadata } from "next";
import BangaloreRouteClient from "./BangaloreRouteClient";

export const metadata: Metadata = {
    title: "Hyderabad to Bangalore Cab - Book Online | ₹5,700 One-Way",
    description:
        "Book Hyderabad to Bangalore cab at ₹5,700 one-way. 570 km, 8 hrs drive. AC cabs - Swift Dzire, Innova, Tempo Traveller. 24/7 booking. VRS Travels.",
    keywords: ["Hyderabad to Bangalore cab", "Hyderabad Bangalore taxi", "cab booking Bangalore", "outstation cab Bangalore"],
    openGraph: {
        title: "Hyderabad to Bangalore Cab Booking - VRS Travels",
        description: "Book Hyderabad to Bangalore cab at best prices. AC cabs, professional drivers.",
    },
};

const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is the distance from Hyderabad to Bangalore?", acceptedAnswer: { "@type": "Answer", text: "The distance from Hyderabad to Bangalore is approximately 570 km via NH44 and takes about 7-8 hours by cab." } },
        { "@type": "Question", name: "How much does a cab from Hyderabad to Bangalore cost?", acceptedAnswer: { "@type": "Answer", text: "Cab fare starts at ₹5,700 for a Swift Dzire (one-way). Innova starts at ₹7,980 and Tempo Traveller from ₹11,400." } },
    ],
};

export default function HydToBangalorePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
            <BangaloreRouteClient />
        </>
    );
}
