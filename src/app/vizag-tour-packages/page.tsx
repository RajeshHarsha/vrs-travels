import { Metadata } from "next";
import VizagClient from "./VizagClient";

export const metadata: Metadata = {
    title: "Vizag Tour Packages from Hyderabad | From ₹7,499",
    description:
        "Explore Vizag (Visakhapatnam) tour packages from Hyderabad starting at ₹7,499. Visit Araku Valley, beaches, and more. AC transport, hotel stay included. VRS Travels.",
    keywords: ["Vizag tour packages", "Visakhapatnam tour", "Hyderabad to Vizag", "Araku Valley trip", "Vizag travel packages"],
    openGraph: {
        title: "Vizag Tour Packages from Hyderabad - VRS Travels",
        description: "Affordable Vizag tour packages with hotel, sightseeing, and AC cab.",
    },
};

const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "How far is Vizag from Hyderabad?", acceptedAnswer: { "@type": "Answer", text: "Visakhapatnam (Vizag) is approximately 620 km from Hyderabad, taking about 9-10 hours by cab via NH65." } },
        { "@type": "Question", name: "What is the best time to visit Vizag?", acceptedAnswer: { "@type": "Answer", text: "The best time to visit Vizag is between October and March when the weather is pleasant. Araku Valley is best visited during winter months." } },
    ],
};

export default function VizagPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
            <VizagClient />
        </>
    );
}
