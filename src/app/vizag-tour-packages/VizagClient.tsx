"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import BookingForm from "@/components/BookingForm";
import FAQAccordion from "@/components/FAQAccordion";
import PackageCard from "@/components/PackageCard";
import { FaClock, FaRoute, FaRupeeSign, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const packages = [
    {
        title: "Vizag Weekend Getaway",
        image: "https://images.unsplash.com/photo-1590123715937-e5b14e5db5b0?w=600&h=400&fit=crop",
        duration: "3 Days / 2 Nights",
        location: "Visakhapatnam",
        price: "7,499",
        highlights: ["Beach Tour", "Kailasagiri Ropeway", "Simhachalam Temple", "AC Cab + Hotel"],
    },
    {
        title: "Vizag + Araku Valley",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
        duration: "4 Days / 3 Nights",
        location: "Vizag + Araku",
        price: "10,999",
        highlights: ["Araku Valley Trip", "Borra Caves", "Coffee Plantations", "Beach Tour + Hotel"],
    },
    {
        title: "Complete Vizag Explorer",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
        duration: "5 Days / 4 Nights",
        location: "Vizag + Araku + Lambasingi",
        price: "14,999",
        highlights: ["Lambasingi Visit", "Araku Valley", "All Beaches", "Complete City Tour"],
    },
];

const attractions = [
    "RK Beach (Ramakrishna Beach)",
    "Kailasagiri Hill Park & Ropeway",
    "Araku Valley & Borra Caves",
    "Submarine Museum INS Kurusura",
    "Simhachalam Temple",
    "Yarada Beach",
    "Dolphin's Nose Viewpoint",
    "Indira Gandhi Zoological Park",
];

const faqs = [
    { question: "How far is Vizag from Hyderabad?", answer: "Visakhapatnam (Vizag) is approximately 620 km from Hyderabad. By cab it takes about 9-10 hours via NH65. You can also reach by train or flight." },
    { question: "What are the top places to visit in Vizag?", answer: "Must-visit places: RK Beach, Kailasagiri, Borra Caves, Araku Valley, Simhachalam Temple, Yarada Beach, Submarine Museum, and Dolphin's Nose viewpoint." },
    { question: "What is the best time to visit Vizag?", answer: "October to March offers the most pleasant weather. For Araku Valley and Lambasingi, November to February is ideal for the cold, misty weather experience." },
    { question: "Are hotel stays included in your packages?", answer: "Yes! All our Vizag tour packages include hotel accommodation, AC cab for sightseeing, and driver bata. Meals can be arranged on request." },
    { question: "Can I customize the Vizag tour package?", answer: "Absolutely! We offer fully customizable packages. Choose your own itinerary, hotel category, and vehicle type. Contact us for a personalized quote." },
];

export default function VizagClient() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1590123715937-e5b14e5db5b0?w=1920&h=600&fit=crop" alt="Vizag Beach" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/80 to-primary-950/70" />
                </div>
                <div className="relative z-10 container-custom">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
                        <span className="inline-block bg-accent-500/20 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-accent-500/30">🏖️ Beach Destination</span>
                        <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
                            Vizag <span className="text-accent-400">Tour Packages</span>
                        </h1>
                        <p className="text-primary-200 text-lg mb-8">
                            Explore the jewel of the East Coast with our curated Vizag tour packages.
                            Beaches, valleys, caves, and more — all with comfortable transport and stays.
                        </p>
                        <div className="flex flex-wrap gap-6 text-white">
                            <div className="flex items-center gap-2"><FaRoute className="text-accent-400" /><span className="text-sm">620 km from Hyd</span></div>
                            <div className="flex items-center gap-2"><FaClock className="text-accent-400" /><span className="text-sm">3-5 Day Trips</span></div>
                            <div className="flex items-center gap-2"><FaRupeeSign className="text-accent-400" /><span className="text-sm">From ₹7,499</span></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Packages */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeading title="Choose Your Vizag Package" subtitle="All packages include AC cab, hotel stay, and sightseeing." />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {packages.map((p, i) => <PackageCard key={p.title} {...p} index={i} />)}
                    </div>
                </div>
            </section>

            {/* Attractions */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <SectionHeading title="Top Attractions in Vizag" subtitle="Must-visit places covered in our tour packages." />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {attractions.map((a, i) => (
                            <motion.div key={a} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-2 bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-sm text-gray-700">
                                <FaMapMarkerAlt className="text-accent-500 flex-shrink-0" /> {a}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Package Inclusions */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-10">
                        <div>
                            <SectionHeading title="What's Included" centered={false} />
                            <div className="space-y-3">
                                {["AC cab for all sightseeing and transfers", "Hotel accommodation (3-star or above)", "Experienced local driver with city knowledge", "Toll charges and parking fees", "24/7 customer support during trip", "Customizable itinerary on request"].map((item, i) => (
                                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                                        className="flex items-center gap-3 p-3 bg-green-50 rounded-lg text-sm text-gray-700">
                                        <FaCheckCircle className="text-green-500 flex-shrink-0" /> {item}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <SectionHeading title="Book Your Vizag Trip" centered={false} />
                            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                                <BookingForm compact defaultPickup="Hyderabad" defaultDestination="Visakhapatnam (Vizag)" />
                            </div>
                        </div>
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
