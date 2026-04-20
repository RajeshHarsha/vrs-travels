"use client";

import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CallButton() {
    return (
        <motion.a
            href="tel:+919876543210"
            className="fixed bottom-6 left-6 z-50 w-14 h-14 gradient-primary hover:opacity-90 rounded-full flex items-center justify-center shadow-lg shadow-primary-900/30 transition-all duration-300 group"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Call us"
        >
            <FaPhoneAlt size={22} className="text-white" />
            <span className="absolute left-16 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Call Now
            </span>
        </motion.a>
    );
}
