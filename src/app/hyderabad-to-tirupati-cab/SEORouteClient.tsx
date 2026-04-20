"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import BookingForm from "@/components/BookingForm";
import FAQAccordion from "@/components/FAQAccordion";
import VehicleCard from "@/components/VehicleCard";
import { FaMapMarkerAlt, FaClock, FaRoute, FaRupeeSign, FaRoad } from "react-icons/fa";

const vehicles = [
    { name: "Swift Dzire", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0afe?w=400&h=300&fit=crop", capacity: "4 Passengers", ac: true, priceLabel: "₹5,500" },
    { name: "Toyota Innova", image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400&h=300&fit=crop", capacity: "6 Passengers", ac: true, priceLabel: "₹7,700" },
    { name: "Tempo Traveller", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=300&fit=crop", capacity: "12-18 Passengers", ac: true, priceLabel: "₹11,000" },
    { name: "Innova Crysta", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop", capacity: "7 Passengers", ac: true, priceLabel: "₹8,800" },
];

const faqs = [
    { question: "What is the distance from Hyderabad to Tirupati by cab?", answer: "The distance from Hyderabad to Tirupati is approximately 550 km via NH65. The journey takes about 8-9 hours depending on traffic and road conditions." },
    { question: "How much does a Hyderabad to Tirupati cab cost?", answer: "Starting fares: Swift Dzire ₹5,500, Toyota Innova ₹7,700, Innova Crysta ₹8,800, Tempo Traveller ₹11,000. These are one-way fares inclusive of driver bata." },
    { question: "Can I book a round trip cab to Tirupati?", answer: "Yes! Round-trip packages start at ₹9,500 for a 2-day trip with Swift Dzire. This includes waiting charges at Tirupati, driver bata, and toll charges." },
    { question: "What is the best time to travel from Hyderabad to Tirupati?", answer: "The best time to travel is early morning (4-5 AM) to avoid traffic and reach by afternoon for darshan. The route via NH65 is well-maintained and scenic." },
    { question: "Is night travel available from Hyderabad to Tirupati?", answer: "Yes, we offer 24/7 cab services for Hyderabad to Tirupati travel. Night trips are safe with our experienced drivers and GPS-tracked vehicles." },
    { question: "Are toll charges included in the cab fare?", answer: "Toll charges are included in our quoted fares. There are no hidden or surprise charges. The price you see is what you pay." },
];

const pricingTable = [
    { vehicle: "Swift Dzire", oneWay: "5,500", roundTrip: "9,500", perKm: "10" },
    { vehicle: "Toyota Innova", oneWay: "7,700", roundTrip: "13,500", perKm: "14" },
    { vehicle: "Innova Crysta", oneWay: "8,800", roundTrip: "15,500", perKm: "16" },
    { vehicle: "Tempo Traveller", oneWay: "11,000", roundTrip: "19,000", perKm: "20" },
];

export default function SEORouteClient() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1621621888528-f23bffcbc4e0?w=1920&h=600&fit=crop"
                        alt="Tirupati Temple"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/80 to-primary-950/70" />
                </div>
                <div className="relative z-10 container-custom">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
                        <span className="inline-block bg-accent-500/20 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-accent-500/30">
                            Most Booked Route
                        </span>
                        <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
                            Hyderabad to Tirupati <span className="text-accent-400">Cab Booking</span>
                        </h1>
                        <p className="text-primary-200 text-lg mb-8">
                            Book comfortable AC cabs from Hyderabad to Tirupati at the best prices.
                            Professional drivers, clean vehicles, and 24/7 booking available.
                        </p>
                        <div className="flex flex-wrap gap-6 text-white">
                            <div className="flex items-center gap-2"><FaRoute className="text-accent-400" /><span className="text-sm">550 km</span></div>
                            <div className="flex items-center gap-2"><FaClock className="text-accent-400" /><span className="text-sm">~9 Hours</span></div>
                            <div className="flex items-center gap-2"><FaRoad className="text-accent-400" /><span className="text-sm">Via NH65</span></div>
                            <div className="flex items-center gap-2"><FaRupeeSign className="text-accent-400" /><span className="text-sm">From ₹5,500</span></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Route Overview */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-5 gap-10">
                        <div className="lg:col-span-3">
                            <SectionHeading title="Route Overview" centered={false} />
                            <div className="prose prose-gray max-w-none">
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    The Hyderabad to Tirupati route is one of the most popular outstation cab routes in South India.
                                    Covering approximately <strong>550 km via NH65</strong>, the journey takes about <strong>8-9 hours</strong> by cab.
                                    The route passes through Kurnool and offers a comfortable drive on well-maintained national highways.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Tirupati is home to the famous <strong>Sri Venkateswara Temple</strong> (Tirumala), one of the most visited
                                    religious sites in the world. VRS Travels offers dedicated cab services for Tirupati darshan trips,
                                    including VIP entry tickets and complete trip planning.
                                </p>
                                <h3 className="font-heading font-semibold text-primary-900 text-xl mt-8 mb-4">
                                    Route Highlights
                                </h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start gap-2"><FaMapMarkerAlt className="text-accent-500 mt-1 flex-shrink-0" /> Hyderabad → Jadcherla → Kurnool → Tirupati via NH65</li>
                                    <li className="flex items-start gap-2"><FaMapMarkerAlt className="text-accent-500 mt-1 flex-shrink-0" /> Well-maintained 4-lane highway for most of the route</li>
                                    <li className="flex items-start gap-2"><FaMapMarkerAlt className="text-accent-500 mt-1 flex-shrink-0" /> Multiple food and rest stops along the route</li>
                                    <li className="flex items-start gap-2"><FaMapMarkerAlt className="text-accent-500 mt-1 flex-shrink-0" /> Early morning departure recommended for same-day darshan</li>
                                </ul>
                            </div>
                        </div>

                        {/* Pricing Table */}
                        <div className="lg:col-span-2">
                            <SectionHeading title="Pricing" centered={false} />
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                                <table className="w-full">
                                    <thead>
                                        <tr className="gradient-primary text-white">
                                            <th className="px-4 py-3 text-left text-xs font-semibold">Vehicle</th>
                                            <th className="px-4 py-3 text-center text-xs font-semibold">One Way</th>
                                            <th className="px-4 py-3 text-center text-xs font-semibold">Round Trip</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pricingTable.map((row, i) => (
                                            <tr key={row.vehicle} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-gray-50/50" : ""}`}>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-800">{row.vehicle}</td>
                                                <td className="px-4 py-3 text-center text-sm font-bold text-accent-700">₹{row.oneWay}</td>
                                                <td className="px-4 py-3 text-center text-sm font-bold text-accent-700">₹{row.roundTrip}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <p className="px-4 py-3 text-xs text-gray-500 bg-gray-50">
                                    * Prices inclusive of toll, driver bata & fuel
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vehicle Options */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <SectionHeading
                        title="Vehicle Options"
                        subtitle="Choose the perfect vehicle for your Hyderabad to Tirupati trip."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {vehicles.map((v, i) => (
                            <VehicleCard key={v.name} {...v} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Form */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeading
                        title="Book Hyderabad to Tirupati Cab"
                        subtitle="Fill in your details to get an instant booking confirmation."
                    />
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                        <BookingForm compact defaultPickup="Hyderabad" defaultDestination="Tirupati" />
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <SectionHeading
                        title="Frequently Asked Questions"
                        subtitle="Everything you need to know about Hyderabad to Tirupati cab booking."
                    />
                    <div className="max-w-3xl mx-auto">
                        <FAQAccordion items={faqs} />
                    </div>
                </div>
            </section>
        </div>
    );
}
