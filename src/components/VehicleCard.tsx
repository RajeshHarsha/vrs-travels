"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaUsers, FaSnowflake } from "react-icons/fa";

interface VehicleCardProps {
    name: string;
    image: string;
    capacity: string;
    ac: boolean;
    priceLabel?: string;
    index?: number;
}

export default function VehicleCard({
    name,
    image,
    capacity,
    ac,
    priceLabel,
    index = 0,
}: VehicleCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group border border-gray-100"
        >
            {/* Image */}
            <div className="relative h-48 bg-gradient-to-br from-primary-50 to-primary-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
                {priceLabel && (
                    <div className="absolute top-3 right-3 bg-accent-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {priceLabel}
                    </div>
                )}
            </div>

            {/* Info */}
            <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-primary-900 mb-3">
                    {name}
                </h3>
                <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center gap-1.5 text-sm text-gray-600">
                        <FaUsers className="text-accent-600" />
                        {capacity}
                    </span>
                    {ac && (
                        <span className="flex items-center gap-1.5 text-sm text-gray-600">
                            <FaSnowflake className="text-blue-500" />
                            AC
                        </span>
                    )}
                </div>
                <Link
                    href="/contact"
                    className="block text-center btn-primary text-sm !py-2.5 w-full"
                >
                    Enquiry
                </Link>
            </div>
        </motion.div>
    );
}
