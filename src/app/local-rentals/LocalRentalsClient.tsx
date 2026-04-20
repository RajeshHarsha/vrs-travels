"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import BookingForm from "@/components/BookingForm";
import Link from "next/link";
import { FaClock, FaRoute, FaRupeeSign, FaCar } from "react-icons/fa";

const plans = [
    {
        name: "4 Hours / 40 Km",
        prices: [
            { vehicle: "Swift Dzire", price: "1,200" },
            { vehicle: "Toyota Innova", price: "1,800" },
            { vehicle: "Innova Crysta", price: "2,200" },
        ],
        popular: false,
    },
    {
        name: "8 Hours / 80 Km",
        prices: [
            { vehicle: "Swift Dzire", price: "2,000" },
            { vehicle: "Toyota Innova", price: "3,000" },
            { vehicle: "Innova Crysta", price: "3,600" },
        ],
        popular: true,
    },
    {
        name: "12 Hours / 120 Km",
        prices: [
            { vehicle: "Swift Dzire", price: "2,800" },
            { vehicle: "Toyota Innova", price: "4,200" },
            { vehicle: "Innova Crysta", price: "5,000" },
        ],
        popular: false,
    },
];

const useCases = [
    { icon: FaCar, title: "City Sightseeing", desc: "Explore Hyderabad's landmarks with a dedicated cab." },
    { icon: FaClock, title: "Shopping Trips", desc: "Visit malls and markets without parking hassles." },
    { icon: FaRoute, title: "Business Meetings", desc: "Reliable transport for multiple meeting locations." },
    { icon: FaRupeeSign, title: "Event Transport", desc: "Wedding, party, and event transportation." },
];

export default function LocalRentalsClient() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 gradient-primary" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,152,0,0.15),transparent_60%)]" />
                <div className="relative z-10 container-custom text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
                            Local <span className="text-accent-400">Rentals</span>
                        </h1>
                        <p className="text-primary-200 text-lg max-w-2xl mx-auto">
                            Affordable hourly car rental packages in Hyderabad with AC cabs and
                            professional drivers.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Plans */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeading
                        title="Rental Packages"
                        subtitle="Choose a plan that fits your schedule and budget. Extra charges apply beyond package limits."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative bg-white rounded-2xl overflow-hidden shadow-lg border-2 card-hover ${plan.popular ? "border-accent-500" : "border-gray-100"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="bg-accent-500 text-white text-xs font-bold text-center py-1.5">
                                        MOST POPULAR
                                    </div>
                                )}
                                <div className="p-6">
                                    <h3 className="font-heading font-bold text-xl text-primary-900 mb-5 text-center">
                                        {plan.name}
                                    </h3>
                                    <div className="space-y-3">
                                        {plan.prices.map((p) => (
                                            <div
                                                key={p.vehicle}
                                                className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                                            >
                                                <span className="text-sm text-gray-700 font-medium">
                                                    {p.vehicle}
                                                </span>
                                                <span className="flex items-center text-accent-700 font-bold">
                                                    <FaRupeeSign className="text-xs" />
                                                    {p.price}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="block text-center btn-primary w-full mt-5"
                                    >
                                        Enquiry
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-6">
                        * Extra km: ₹10/km (Dzire), ₹14/km (Innova), ₹16/km (Crysta) · Extra hr: ₹150-250/hr
                    </p>
                </div>
            </section>

            {/* Use Cases */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <SectionHeading
                        title="Perfect For"
                        subtitle="Our local rental packages are ideal for various occasions in and around Hyderabad."
                    />
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {useCases.map((u, i) => (
                            <motion.div
                                key={u.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 card-hover"
                            >
                                <div className="w-14 h-14 mx-auto rounded-xl gradient-primary flex items-center justify-center mb-4">
                                    <u.icon className="text-white text-xl" />
                                </div>
                                <h3 className="font-heading font-semibold text-primary-900 mb-2">
                                    {u.title}
                                </h3>
                                <p className="text-xs text-gray-500">{u.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Form */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeading
                        title="Book a Local Rental"
                        subtitle="Fill in your details and we'll arrange a cab for you."
                    />
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                        <BookingForm compact defaultPickup="Hyderabad" defaultDestination="Local Rental" />
                    </div>
                </div>
            </section>
        </div>
    );
}
