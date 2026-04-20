"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import RouteCard from "@/components/RouteCard";
import BookingForm from "@/components/BookingForm";
import { FaCheckCircle } from "react-icons/fa";

const routes = [
    { from: "Hyderabad", to: "Tirupati", distance: "550 km · 9 hrs", price: "5,500", href: "/hyderabad-to-tirupati-cab" },
    { from: "Hyderabad", to: "Bangalore", distance: "570 km · 8 hrs", price: "5,700", href: "/hyderabad-to-bangalore-cab" },
    { from: "Hyderabad", to: "Vizag", distance: "620 km · 10 hrs", price: "6,200", href: "/vizag-tour-packages" },
    { from: "Hyderabad", to: "Vijayawada", distance: "275 km · 4 hrs", price: "2,750", href: "/contact" },
    { from: "Hyderabad", to: "Shirdi", distance: "580 km · 9 hrs", price: "5,800", href: "/contact" },
    { from: "Hyderabad", to: "Srisailam", distance: "215 km · 4 hrs", price: "2,400", href: "/contact" },
    { from: "Hyderabad", to: "Warangal", distance: "150 km · 3 hrs", price: "1,800", href: "/contact" },
    { from: "Hyderabad", to: "Bidar", distance: "150 km · 3 hrs", price: "1,800", href: "/contact" },
    { from: "Hyderabad", to: "Chennai", distance: "630 km · 9 hrs", price: "6,800", href: "/contact" },
    { from: "Hyderabad", to: "Ooty", distance: "850 km · 14 hrs", price: "9,500", href: "/contact" },
    { from: "Hyderabad", to: "Goa", distance: "650 km · 10 hrs", price: "7,200", href: "/contact" },
    { from: "Hyderabad", to: "Mumbai", distance: "710 km · 11 hrs", price: "8,000", href: "/contact" },
];

const benefits = [
    "Transparent pricing, no hidden charges",
    "One-way and round-trip options available",
    "Professional, experienced drivers",
    "24/7 roadside assistance included",
    "Multiple vehicle options to choose from",
    "Free cancellation up to 24 hours before trip",
];

export default function OutstationClient() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 gradient-primary" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,152,0,0.15),transparent_60%)]" />
                <div className="relative z-10 container-custom text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
                            Outstation <span className="text-accent-400">Trips</span>
                        </h1>
                        <p className="text-primary-200 text-lg max-w-2xl mx-auto">
                            Comfortable outstation cab services from Hyderabad to 50+ destinations
                            across South India.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-12 bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {benefits.map((b, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-2 text-sm text-gray-700"
                            >
                                <FaCheckCircle className="text-green-500 flex-shrink-0" />
                                {b}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Routes */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeading
                        title="Popular Outstation Routes"
                        subtitle="Explore our most popular outstation destinations with competitive pricing."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {routes.map((r, i) => (
                            <RouteCard key={`${r.from}-${r.to}`} {...r} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Form */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <SectionHeading
                        title="Book Your Outstation Trip"
                        subtitle="Fill in your trip details and get an instant quote."
                    />
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                        <BookingForm compact defaultPickup="Hyderabad" />
                    </div>
                </div>
            </section>
        </div>
    );
}
