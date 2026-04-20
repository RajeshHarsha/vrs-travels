"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { openBookingModal } from "@/components/BookingModal";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Fleet", href: "/fleet" },
    // { name: "Tour Packages", href: "/tour-packages" },
    { name: "Outstation", href: "/outstation-trips" },
    { name: "Local Rentals", href: "/local-rentals" },
    // { name: "Airport Transfers", href: "/airport-transfers" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="container-custom">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <img
                            src="/logo.png"
                            alt="VRS Travels"
                            className="h-12 md:h-15 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-accent-600 rounded-lg hover:bg-accent-50 transition-all duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href="tel:+919876543210"
                            className="flex items-center gap-2 text-sm font-semibold text-primary-900"
                        >
                            <FaPhoneAlt className="text-accent-600" />
                            +91 98765 43210
                        </a>
                        <button onClick={openBookingModal} className="btn-primary text-sm !px-5 !py-2.5">
                            Book Now
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden p-2 text-gray-700 hover:text-accent-600 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <nav className="container-custom py-4 space-y-1">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block px-4 py-3 text-gray-700 hover:text-accent-600 hover:bg-accent-50 rounded-lg font-medium transition-all duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="pt-3 border-t border-gray-100 space-y-3">
                                <a
                                    href="tel:+919876543210"
                                    className="flex items-center gap-2 px-4 py-2 text-primary-900 font-semibold"
                                >
                                    <FaPhoneAlt className="text-accent-600" /> +91 98765 43210
                                </a>
                                <button
                                    onClick={() => { setMobileOpen(false); openBookingModal(); }}
                                    className="block text-center btn-primary mx-4 w-[calc(100%-2rem)]"
                                >
                                    Enquiry
                                </button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
