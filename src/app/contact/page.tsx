import { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with VRS Travels Hyderabad. Call us, WhatsApp, or visit our office. Available 24/7 for cab bookings and travel inquiries.",
    openGraph: {
        title: "Contact VRS Travels Hyderabad",
        description: "Reach out to us for cab bookings, tour packages, and travel inquiries.",
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
