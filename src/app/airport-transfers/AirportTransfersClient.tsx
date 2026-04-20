"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import BookingForm from "@/components/BookingForm";
import { FaPlane, FaClock, FaRupeeSign, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";

const pricing = [
    { area: "Hitech City / Gachibowli", dzire: "1,200", innova: "1,800", crysta: "2,200" },
    { area: "Secunderabad / Begumpet", dzire: "1,000", innova: "1,500", crysta: "1,900" },
    { area: "Banjara Hills / Jubilee Hills", dzire: "1,100", innova: "1,600", crysta: "2,000" },
    { area: "Kukatpally / Miyapur", dzire: "1,300", innova: "1,900", crysta: "2,300" },
    { area: "LB Nagar / Dilsukhnagar", dzire: "800", innova: "1,200", crysta: "1,500" },
    { area: "Old City / Charminar", dzire: "1,000", innova: "1,500", crysta: "1,800" },
];

const features = [
    "Flight status tracking — we adjust for delays",
    "Driver arrives 15 min before scheduled time",
    "Free waiting up to 45 min for international arrivals",
    "Free waiting up to 30 min for domestic arrivals",
    "Clean, sanitized vehicles with AC",
    "24/7 customer support",
];

export default function AirportTransfersClient() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 gradient-primary" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,152,0,0.15),transparent_60%)]" />
                <div className="relative z-10 container-custom text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-accent-500/20 flex items-center justify-center mb-6">
                            <FaPlane className="text-accent-400 text-2xl" />
                        </div>
                        <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
                            Airport <span className="text-accent-400">Transfers</span>
                        </h1>
                        <p className="text-primary-200 text-lg max-w-2xl mx-auto">
                            Reliable pickup and drop service to Rajiv Gandhi International
                            Airport (RGIA), Hyderabad.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="py-12 bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-2 text-sm text-gray-700 bg-white p-3 rounded-lg"
                            >
                                <FaCheckCircle className="text-green-500 flex-shrink-0" />
                                {f}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Table */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeading
                        title="Airport Transfer Pricing"
                        subtitle="Transparent pricing from various areas in Hyderabad to RGIA. No hidden charges."
                    />
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[600px] bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                            <thead>
                                <tr className="gradient-primary text-white">
                                    <th className="text-left px-5 py-4 font-heading font-semibold text-sm">
                                        <FaMapMarkerAlt className="inline mr-2" />
                                        Area
                                    </th>
                                    <th className="px-5 py-4 font-heading font-semibold text-sm">Swift Dzire</th>
                                    <th className="px-5 py-4 font-heading font-semibold text-sm">Toyota Innova</th>
                                    <th className="px-5 py-4 font-heading font-semibold text-sm">Innova Crysta</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pricing.map((row, i) => (
                                    <tr
                                        key={row.area}
                                        className={`border-b border-gray-100 hover:bg-accent-50/50 transition-colors ${i % 2 === 0 ? "bg-gray-50/50" : ""
                                            }`}
                                    >
                                        <td className="px-5 py-4 text-sm font-medium text-gray-800">
                                            {row.area}
                                        </td>
                                        <td className="px-5 py-4 text-center">
                                            <span className="flex items-center justify-center text-sm font-bold text-accent-700">
                                                <FaRupeeSign className="text-xs" />
                                                {row.dzire}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-center">
                                            <span className="flex items-center justify-center text-sm font-bold text-accent-700">
                                                <FaRupeeSign className="text-xs" />
                                                {row.innova}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-center">
                                            <span className="flex items-center justify-center text-sm font-bold text-accent-700">
                                                <FaRupeeSign className="text-xs" />
                                                {row.crysta}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                        <FaClock className="flex-shrink-0" />
                        Prices are for one-way airport transfer. Toll charges extra if applicable.
                    </div>
                </div>
            </section>

            {/* Booking Form */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <SectionHeading
                        title="Book Airport Transfer"
                        subtitle="Schedule your airport pickup or drop in advance for a stress-free experience."
                    />
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                        <BookingForm compact defaultDestination="RGIA Airport, Hyderabad" />
                    </div>
                </div>
            </section>
        </div>
    );
}
