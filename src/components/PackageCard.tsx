"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaClock, FaMapMarkerAlt, FaRupeeSign } from "react-icons/fa";

interface PackageCardProps {
    title: string;
    image: string;
    duration: string;
    location: string;
    price: string;
    highlights: string[];
    index?: number;
}

export default function PackageCard({
    title,
    image,
    duration,
    location,
    price,
    highlights,
    index = 0,
}: PackageCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group border border-gray-100"
        >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-white text-xs font-medium">
                        <FaClock /> {duration}
                    </span>
                    <span className="flex items-center gap-1 text-white text-xs font-medium">
                        <FaMapMarkerAlt /> {location}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-primary-900 mb-3">
                    {title}
                </h3>
                <ul className="space-y-1.5 mb-4">
                    {highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                            {h}
                        </li>
                    ))}
                </ul>
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-xs text-gray-500">Starting from</span>
                        <p className="flex items-center text-accent-700 font-bold text-lg">
                            <FaRupeeSign className="text-sm" />
                            {price}
                        </p>
                    </div>
                    <Link href="/contact" className="btn-primary text-sm !px-5 !py-2.5">
                        Enquiry
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
