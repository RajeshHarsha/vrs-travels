"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import BookingForm from "@/components/BookingForm";
import FAQAccordion from "@/components/FAQAccordion";
import VehicleCard from "@/components/VehicleCard";
import { FaClock, FaRoute, FaRupeeSign, FaRoad, FaMapMarkerAlt } from "react-icons/fa";

const vehicles = [
    { name: "Swift Dzire", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0afe?w=400&h=300&fit=crop", capacity: "4 Passengers", ac: true, priceLabel: "₹5,700" },
    { name: "Toyota Innova", image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400&h=300&fit=crop", capacity: "6 Passengers", ac: true, priceLabel: "₹7,980" },
    { name: "Innova Crysta", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop", capacity: "7 Passengers", ac: true, priceLabel: "₹9,120" },
    { name: "Tempo Traveller", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=300&fit=crop", capacity: "12-18 Passengers", ac: true, priceLabel: "₹11,400" },
];

const faqs = [
    { question: "What is the distance from Hyderabad to Bangalore by cab?", answer: "The distance from Hyderabad to Bangalore is approximately 570 km via NH44 (Hyderabad-Bangalore Highway). The journey takes about 7-8 hours." },
    { question: "How much does a Hyderabad to Bangalore cab cost?", answer: "One-way fares: Swift Dzire ₹5,700, Innova ₹7,980, Crysta ₹9,120, Tempo Traveller ₹11,400. Prices include toll and driver bata." },
    { question: "What is the best route from Hyderabad to Bangalore?", answer: "The best route is via NH44 through Kurnool → Anantapur → Bengaluru. It's a well-maintained 4-lane highway with multiple food stops." },
    { question: "Can I make stops on the way to Bangalore?", answer: "Yes! You can request stops at Lepakshi, Anantapur, or any other point of interest. Just inform us while booking." },
    { question: "Do you provide one-way cabs to Bangalore?", answer: "Yes, we offer both one-way and round-trip cabs from Hyderabad to Bangalore at competitive prices." },
];

const pricingTable = [
    { vehicle: "Swift Dzire", oneWay: "5,700", roundTrip: "10,000", perKm: "10" },
    { vehicle: "Toyota Innova", oneWay: "7,980", roundTrip: "14,000", perKm: "14" },
    { vehicle: "Innova Crysta", oneWay: "9,120", roundTrip: "16,000", perKm: "16" },
    { vehicle: "Tempo Traveller", oneWay: "11,400", roundTrip: "20,000", perKm: "20" },
];

export default function BangaloreRouteClient() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=1920&h=600&fit=crop" alt="Bangalore skyline" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/80 to-primary-950/70" />
                </div>
                <div className="relative z-10 container-custom">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
                        <span className="inline-block bg-accent-500/20 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-accent-500/30">Popular Route</span>
                        <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
                            Hyderabad to Bangalore <span className="text-accent-400">Cab Booking</span>
                        </h1>
                        <p className="text-primary-200 text-lg mb-8">
                            Comfortable AC cabs from Hyderabad to Bangalore at the best prices. Professional drivers and 24/7 availability.
                        </p>
                        <div className="flex flex-wrap gap-6 text-white">
                            <div className="flex items-center gap-2"><FaRoute className="text-accent-400" /><span className="text-sm">570 km</span></div>
                            <div className="flex items-center gap-2"><FaClock className="text-accent-400" /><span className="text-sm">~8 Hours</span></div>
                            <div className="flex items-center gap-2"><FaRoad className="text-accent-400" /><span className="text-sm">Via NH44</span></div>
                            <div className="flex items-center gap-2"><FaRupeeSign className="text-accent-400" /><span className="text-sm">From ₹5,700</span></div>
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
                                    The Hyderabad to Bangalore route covers approximately <strong>570 km via NH44</strong>, one of India&apos;s busiest and best-maintained highways. The journey takes about <strong>7-8 hours</strong>, passing through Kurnool and Anantapur.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Bangalore (Bengaluru), India&apos;s IT capital, is a popular destination for business travelers, tech professionals, and tourists alike. VRS Travels provides reliable, comfortable cab services for this busy route.
                                </p>
                                <h3 className="font-heading font-semibold text-primary-900 text-xl mt-8 mb-4">Route Highlights</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start gap-2"><FaMapMarkerAlt className="text-accent-500 mt-1 flex-shrink-0" /> Hyderabad → Jadcherla → Kurnool → Anantapur → Bangalore</li>
                                    <li className="flex items-start gap-2"><FaMapMarkerAlt className="text-accent-500 mt-1 flex-shrink-0" /> Famous Lepakshi temple en route (optional stop)</li>
                                    <li className="flex items-start gap-2"><FaMapMarkerAlt className="text-accent-500 mt-1 flex-shrink-0" /> Well-maintained 4-lane highway throughout</li>
                                </ul>
                            </div>
                        </div>
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
                                <p className="px-4 py-3 text-xs text-gray-500 bg-gray-50">* Prices inclusive of toll, driver bata & fuel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vehicle Options */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <SectionHeading title="Vehicle Options" subtitle="Choose the perfect vehicle for your Hyderabad to Bangalore trip." />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {vehicles.map((v, i) => <VehicleCard key={v.name} {...v} index={i} />)}
                    </div>
                </div>
            </section>

            {/* Booking */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeading title="Book Hyderabad to Bangalore Cab" subtitle="Fill in your details for instant booking." />
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                        <BookingForm compact defaultPickup="Hyderabad" defaultDestination="Bangalore" />
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <SectionHeading title="Frequently Asked Questions" />
                    <div className="max-w-3xl mx-auto"><FAQAccordion items={faqs} /></div>
                </div>
            </section>
        </div>
    );
}
