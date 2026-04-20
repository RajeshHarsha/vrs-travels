"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import PackageCard from "@/components/PackageCard";
import BookingForm from "@/components/BookingForm";

const packages = [
    {
        title: "Tirupati Darshan Package",
        image: "https://images.unsplash.com/photo-1621621888528-f23bffcbc4e0?w=600&h=400&fit=crop",
        duration: "2 Days / 1 Night",
        location: "Tirupati",
        price: "4,999",
        highlights: ["VIP Darshan Tickets", "AC Cab Included", "Hotel Stay", "Breakfast Included"],
    },
    {
        title: "Goa Beach Holiday",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=400&fit=crop",
        duration: "3 Days / 2 Nights",
        location: "Goa",
        price: "8,999",
        highlights: ["Beach Resort Stay", "North & South Goa Tour", "Water Sports", "AC Transportation"],
    },
    {
        title: "Vizag Explorer",
        image: "https://images.unsplash.com/photo-1590123715937-e5b14e5db5b0?w=600&h=400&fit=crop",
        duration: "3 Days / 2 Nights",
        location: "Visakhapatnam",
        price: "7,499",
        highlights: ["Araku Valley Visit", "Beach Tour", "City Sightseeing", "Hotel Stay"],
    },
    {
        title: "Ooty Hill Station",
        image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=600&h=400&fit=crop",
        duration: "4 Days / 3 Nights",
        location: "Ooty",
        price: "12,999",
        highlights: ["Botanical Garden", "Ooty Lake Boating", "Tea Factory Visit", "Coonoor Trip"],
    },
    {
        title: "Srisailam Temple Tour",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=400&fit=crop",
        duration: "2 Days / 1 Night",
        location: "Srisailam",
        price: "3,999",
        highlights: ["Temple Darshan", "Patalaganga Visit", "AC Cab", "Hotel Stay"],
    },
    {
        title: "Kerala Backwaters",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop",
        duration: "5 Days / 4 Nights",
        location: "Kerala",
        price: "15,999",
        highlights: ["Houseboat Stay", "Munnar Tea Gardens", "Alleppey Backwaters", "Fort Kochi Tour"],
    },
];

export default function TourPackagesClient() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 gradient-primary" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,152,0,0.15),transparent_60%)]" />
                <div className="relative z-10 container-custom text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
                            Tour <span className="text-accent-400">Packages</span>
                        </h1>
                        <p className="text-primary-200 text-lg max-w-2xl mx-auto">
                            Curated holiday packages with comfortable stays, sightseeing, and
                            hassle-free transportation included.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Packages */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeading
                        title="Explore Our Packages"
                        subtitle="From weekend getaways to extended vacations, we have the perfect package for you."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {packages.map((p, i) => (
                            <PackageCard key={p.title} {...p} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Package CTA + Form */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <SectionHeading
                        title="Want a Custom Package?"
                        subtitle="Tell us your travel preferences and we'll create a personalized itinerary just for you."
                    />
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                        <BookingForm compact />
                    </div>
                </div>
            </section>
        </div>
    );
}
