"use client";

import { motion } from "framer-motion";
import { FaRoute, FaRupeeSign } from "react-icons/fa";
import Link from "next/link";

interface RouteCardProps {
    from: string;
    to: string;
    distance: string;
    price: string;
    href: string;
    index?: number;
}

export default function RouteCard({
    from,
    to,
    distance,
    price,
    href,
    index = 0,
}: RouteCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
        >
            <Link
                href={href}
                className="block bg-white p-5 rounded-2xl shadow-md border border-gray-100 card-hover group"
            >
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center group-hover:bg-accent-100 transition-colors">
                        <FaRoute className="text-accent-600" />
                    </div>
                    <div>
                        <p className="font-heading font-semibold text-primary-900 text-sm">
                            {from} → {to}
                        </p>
                        <p className="text-xs text-gray-500">{distance}</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="flex items-center text-accent-700 font-bold text-sm">
                        <FaRupeeSign className="text-xs" />
                        {price}
                    </span>
                    <span className="text-xs text-primary-600 font-medium group-hover:text-accent-600 transition-colors">
                        View Details →
                    </span>
                </div>
            </Link>
        </motion.div>
    );
}
