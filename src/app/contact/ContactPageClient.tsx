"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import BookingForm from "@/components/BookingForm";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaWhatsapp,
} from "react-icons/fa";

const contactInfo = [
    {
        icon: FaPhoneAlt,
        title: "Phone",
        details: ["+91 98765 43210", "+91 98765 43211"],
        href: "tel:+919876543210",
    },
    {
        icon: FaWhatsapp,
        title: "WhatsApp",
        details: ["+91 98765 43210"],
        href: "https://wa.me/919876543210",
    },
    {
        icon: FaEnvelope,
        title: "Email",
        details: ["info@vrstravels.com", "booking@vrstravels.com"],
        href: "mailto:info@vrstravels.com",
    },
    {
        icon: FaMapMarkerAlt,
        title: "Office Address",
        details: ["Manikonda, Hyderabad", "Telangana 500089"],
        href: "https://maps.google.com/?q=Manikonda+Hyderabad",
    },
    {
        icon: FaClock,
        title: "Business Hours",
        details: ["Available 24/7", "365 days a year"],
        href: null,
    },
];

export default function ContactPageClient() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 gradient-primary" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,152,0,0.1),transparent_60%)]" />
                <div className="relative z-10 container-custom text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
                            Contact <span className="text-accent-400">Us</span>
                        </h1>
                        <p className="text-primary-200 text-lg max-w-2xl mx-auto">
                            Get in touch with us for bookings, inquiries, or support. We&apos;re
                            available 24/7!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12 bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {contactInfo.map((c, i) => (
                            <motion.div
                                key={c.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                            >
                                {c.href ? (
                                    <a
                                        href={c.href}
                                        target={c.href.startsWith("http") ? "_blank" : undefined}
                                        rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="block bg-white p-5 rounded-2xl shadow-sm border border-gray-100 card-hover text-center h-full"
                                    >
                                        <c.icon className="text-accent-600 text-2xl mx-auto mb-3" />
                                        <h3 className="font-heading font-semibold text-primary-900 text-sm mb-2">
                                            {c.title}
                                        </h3>
                                        {c.details.map((d) => (
                                            <p key={d} className="text-xs text-gray-600">
                                                {d}
                                            </p>
                                        ))}
                                    </a>
                                ) : (
                                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-center h-full">
                                        <c.icon className="text-accent-600 text-2xl mx-auto mb-3" />
                                        <h3 className="font-heading font-semibold text-primary-900 text-sm mb-2">
                                            {c.title}
                                        </h3>
                                        {c.details.map((d) => (
                                            <p key={d} className="text-xs text-gray-600">
                                                {d}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* Booking Form */}
                        <div>
                            <SectionHeading title="Quick Enquiry" subtitle="Fill in your travel details for an instant quote." centered={false} />
                            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                                <BookingForm compact />
                            </div>
                        </div>

                        {/* Map */}
                        <div>
                            <SectionHeading title="Find Us" subtitle="Visit our office or reach us anytime via phone or WhatsApp." centered={false} />
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-[400px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.05435450893!2d78.3698!3d17.4023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb940026e6f987%3A0x6bba46c5332f91a5!2sManikonda%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="VRS Travels Office Location"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
