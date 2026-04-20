"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

interface TestimonialCardProps {
    name: string;
    location: string;
    quote: string;
    rating: number;
    index?: number;
}

export default function TestimonialCard({
    name,
    location,
    quote,
    rating,
    index = 0,
}: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 card-hover"
        >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                        key={i}
                        className={`${i < rating ? "text-amber-400" : "text-gray-200"
                            } text-sm`}
                    />
                ))}
            </div>

            {/* Quote */}
            <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
                &ldquo;{quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm">
                    {name.charAt(0)}
                </div>
                <div>
                    <p className="font-semibold text-sm text-primary-900">{name}</p>
                    <p className="text-xs text-gray-500">{location}</p>
                </div>
            </div>
        </motion.div>
    );
}
