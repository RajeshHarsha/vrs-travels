"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import BookingForm from "@/components/BookingForm";
import FAQAccordion from "@/components/FAQAccordion";
import { FaPlane, FaClock, FaRupeeSign, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";

const pricing = [
    { area: "Hitech City / Gachibowli", dzire: "1,200", innova: "1,800", crysta: "2,200" },
    { area: "Secunderabad / Begumpet", dzire: "1,000", innova: "1,500", crysta: "1,900" },
    { area: "Banjara Hills / Jubilee Hills", dzire: "1,100", innova: "1,600", crysta: "2,000" },
    { area: "Kukatpally / Miyapur", dzire: "1,300", innova: "1,900", crysta: "2,300" },
    { area: "LB Nagar / Dilsukhnagar", dzire: "800", innova: "1,200", crysta: "1,500" },
    { area: "Old City / Charminar", dzire: "1,000", innova: "1,500", crysta: "1,800" },
    { area: "Shamshabad / Near Airport", dzire: "500", innova: "800", crysta: "1,000" },
];

const faqs = [
    { question: "How much does a Hyderabad airport taxi cost?", answer: "Airport taxi fares start from ₹500-₹1,300 depending on pickup location. Dzire starts at ₹800 from central areas, Innova at ₹1,200." },
    { question: "How early should I book airport cab?", answer: "We recommend booking at least 4 hours before departure for domestic flights and 6 hours for international flights. However, we also accept last-minute bookings." },
    { question: "Do you track flight status?", answer: "Yes! We track your flight status and adjust pickup time accordingly. If your flight is delayed, your driver will wait at no extra charge." },
    { question: "Is there a waiting charge at the airport?", answer: "We offer 30 minutes free waiting for domestic arrivals and 45 minutes for international arrivals. After that, standard waiting charges apply." },
    { question: "Can I book a round-trip airport transfer?", answer: "Yes! Round-trip airport transfers are available at discounted rates. Contact us for special pricing." },
];

const features = [
    "Flight status tracking — we adjust for delays",
    "Driver arrives 15 min before scheduled time",
    "Free waiting up to 45 min (international)",
    "Free waiting up to 30 min (domestic)",
    "Meet & greet at airport (on request)",
    "24/7 availability, even for late-night flights",
    "Clean, sanitized AC vehicles",
    "Fixed pricing — no surge, no hidden charges",
];

export default function AirportTaxiClient() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=1920&h=600&fit=crop" alt="Airport" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/80 to-primary-950/70" />
                </div>
                <div className="relative z-10 container-custom">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
                        <div className="w-16 h-16 rounded-2xl bg-accent-500/20 flex items-center justify-center mb-6">
                            <FaPlane className="text-accent-400 text-2xl" />
                        </div>
                        <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
                            Hyderabad <span className="text-accent-400">Airport Taxi</span>
                        </h1>
                        <p className="text-primary-200 text-lg mb-8">
                            Reliable cab service to and from Rajiv Gandhi International Airport. Fixed fares, flight tracking, and 24/7 availability.
                        </p>
                        <div className="flex flex-wrap gap-6 text-white">
                            <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-accent-400" /><span className="text-sm">RGIA Shamshabad</span></div>
                            <div className="flex items-center gap-2"><FaClock className="text-accent-400" /><span className="text-sm">24/7 Available</span></div>
                            <div className="flex items-center gap-2"><FaRupeeSign className="text-accent-400" /><span className="text-sm">From ₹500</span></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="py-12 bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {features.map((f, i) => (
                            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-center gap-2 text-sm text-gray-700 bg-white p-3 rounded-lg">
                                <FaCheckCircle className="text-green-500 flex-shrink-0" />
                                {f}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeading title="Airport Transfer Pricing" subtitle="Transparent, fixed pricing from all major Hyderabad areas to RGIA." />
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[600px] bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                            <thead>
                                <tr className="gradient-primary text-white">
                                    <th className="text-left px-5 py-4 font-heading font-semibold text-sm">Area</th>
                                    <th className="px-5 py-4 font-heading font-semibold text-sm">Swift Dzire</th>
                                    <th className="px-5 py-4 font-heading font-semibold text-sm">Toyota Innova</th>
                                    <th className="px-5 py-4 font-heading font-semibold text-sm">Innova Crysta</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pricing.map((row, i) => (
                                    <tr key={row.area} className={`border-b border-gray-100 hover:bg-accent-50/50 transition-colors ${i % 2 === 0 ? "bg-gray-50/50" : ""}`}>
                                        <td className="px-5 py-4 text-sm font-medium text-gray-800">{row.area}</td>
                                        <td className="px-5 py-4 text-center text-sm font-bold text-accent-700">₹{row.dzire}</td>
                                        <td className="px-5 py-4 text-center text-sm font-bold text-accent-700">₹{row.innova}</td>
                                        <td className="px-5 py-4 text-center text-sm font-bold text-accent-700">₹{row.crysta}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Booking */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <SectionHeading title="Book Airport Taxi" subtitle="Schedule your airport pickup or drop now." />
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                        <BookingForm compact defaultDestination="RGIA Airport, Hyderabad" />
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeading title="Frequently Asked Questions" />
                    <div className="max-w-3xl mx-auto"><FAQAccordion items={faqs} /></div>
                </div>
            </section>
        </div>
    );
}
