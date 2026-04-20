"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import VehicleCard from "@/components/VehicleCard";
import Link from "next/link";
import { FaShieldAlt, FaSnowflake, FaMapMarkedAlt, FaUserCheck } from "react-icons/fa";

const vehicles = [
    { name: "Swift Dzire", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0afe?w=600&h=400&fit=crop", capacity: "4 Passengers", ac: true, priceLabel: "From ₹10/km" },
    { name: "Toyota Innova", image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600&h=400&fit=crop", capacity: "6 Passengers", ac: true, priceLabel: "From ₹14/km" },
    { name: "Innova Crysta", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop", capacity: "7 Passengers", ac: true, priceLabel: "From ₹16/km" },
    { name: "Tempo Traveller (12-seater)", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&h=400&fit=crop", capacity: "12 Passengers", ac: true, priceLabel: "From ₹20/km" },
    { name: "Tempo Traveller (18-seater)", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop", capacity: "18 Passengers", ac: true, priceLabel: "From ₹25/km" },
    { name: "Toyota Fortuner", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop", capacity: "4 Passengers", ac: true, priceLabel: "From ₹30/km" },
    { name: "Mercedes Benz", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop", capacity: "4 Passengers", ac: true, priceLabel: "From ₹50/km" },
    { name: "BMW", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop", capacity: "4 Passengers", ac: true, priceLabel: "On Request" },
];

const features = [
    { icon: FaSnowflake, title: "Fully AC", desc: "All vehicles equipped with powerful AC" },
    { icon: FaMapMarkedAlt, title: "GPS Tracked", desc: "Real-time tracking for every trip" },
    { icon: FaShieldAlt, title: "Fully Insured", desc: "Comprehensive insurance coverage" },
    { icon: FaUserCheck, title: "Verified Drivers", desc: "Background-checked, trained drivers" },
];

export default function FleetPageClient() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 gradient-primary" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,152,0,0.15),transparent_60%)]" />
                <div className="relative z-10 container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
                            Our <span className="text-accent-400">Fleet</span>
                        </h1>
                        <p className="text-primary-200 text-lg max-w-2xl mx-auto">
                            Choose from our wide range of well-maintained, comfortable vehicles
                            for any occasion.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features Strip */}
            <section className="py-10 bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {features.map((f, i) => (
                            <motion.div
                                key={f.title}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm"
                            >
                                <f.icon className="text-accent-600 text-xl flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-sm text-primary-900">{f.title}</p>
                                    <p className="text-xs text-gray-500">{f.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vehicles Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeading
                        title="Choose Your Ride"
                        subtitle="Every vehicle is regularly serviced, sanitized, and ready for your journey."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {vehicles.map((v, i) => (
                            <VehicleCard key={v.name} {...v} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 gradient-primary">
                <div className="container-custom text-center">
                    <h2 className="font-heading font-bold text-3xl text-white mb-4">
                        Can&apos;t find the vehicle you need?
                    </h2>
                    <p className="text-primary-200 mb-8">
                        Contact us and we&apos;ll arrange the perfect vehicle for your trip.
                    </p>
                    <Link href="/contact" className="btn-primary !bg-accent-500 hover:!bg-accent-600 text-base px-8 py-4">
                        Contact Us →
                    </Link>
                </div>
            </section>
        </div>
    );
}
