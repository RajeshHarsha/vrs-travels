import { Metadata } from "next";
import SEORouteClient from "./SEORouteClient";

export const metadata: Metadata = {
    title: "Hyderabad to Tirupati Cab - Book Online | ₹5,500 One-Way",
    description:
        "Book Hyderabad to Tirupati cab at ₹5,500 one-way. 550 km, 9 hrs drive. AC cabs - Swift Dzire, Innova, Tempo Traveller. 24/7 booking, professional drivers. VRS Travels.",
    keywords: [
        "Hyderabad to Tirupati cab",
        "Hyderabad Tirupati taxi",
        "cab booking Tirupati",
        "Tirupati darshan cab",
        "outstation cab Tirupati",
    ],
    openGraph: {
        title: "Hyderabad to Tirupati Cab Booking - VRS Travels",
        description: "Book Hyderabad to Tirupati cab at best prices. AC cabs, professional drivers, 24/7 booking.",
    },
};

const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the distance from Hyderabad to Tirupati by cab?",
            acceptedAnswer: { "@type": "Answer", text: "The distance from Hyderabad to Tirupati is approximately 550 km via NH65 and takes about 8-9 hours by cab depending on traffic conditions." },
        },
        {
            "@type": "Question",
            name: "How much does a cab from Hyderabad to Tirupati cost?",
            acceptedAnswer: { "@type": "Answer", text: "Cab fare from Hyderabad to Tirupati starts at ₹5,500 for a Swift Dzire (one-way). Innova starts at ₹7,700 and Tempo Traveller from ₹11,000." },
        },
        {
            "@type": "Question",
            name: "Can I book a round-trip cab to Tirupati from Hyderabad?",
            acceptedAnswer: { "@type": "Answer", text: "Yes! Round-trip cab packages from Hyderabad to Tirupati are available starting at ₹9,500 for a 2-day trip with a Swift Dzire, including driver bata and toll charges." },
        },
        {
            "@type": "Question",
            name: "Is it safe to travel by cab from Hyderabad to Tirupati?",
            acceptedAnswer: { "@type": "Answer", text: "Absolutely! All VRS Travels cabs are GPS-tracked, fully insured, and driven by verified, experienced drivers. We provide 24/7 roadside assistance for every trip." },
        },
    ],
};

export default function HydToTirupatiPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
            />
            <SEORouteClient />
        </>
    );
}
