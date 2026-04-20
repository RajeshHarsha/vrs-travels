"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    light?: boolean;
}

export default function SectionHeading({
    title,
    subtitle,
    centered = true,
    light = false,
}: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className={`mb-12 ${centered ? "text-center" : ""}`}
        >
            <h2
                className={`font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 ${light ? "text-white" : "text-primary-900"
                    }`}
            >
                {title}
            </h2>
            <div className="flex items-center gap-2 mb-4 justify-center">
                <span className="h-1 w-8 rounded-full bg-accent-500" />
                <span className="h-1 w-16 rounded-full bg-accent-600" />
                <span className="h-1 w-8 rounded-full bg-accent-500" />
            </div>
            {subtitle && (
                <p
                    className={`text-base md:text-lg max-w-2xl ${centered ? "mx-auto" : ""
                        } ${light ? "text-gray-300" : "text-gray-600"}`}
                >
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
