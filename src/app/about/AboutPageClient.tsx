"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import {
    FaShieldAlt,
    FaUsers,
    FaCar,
    FaMapMarkerAlt,
    FaTrophy,
    FaClock,
    FaThumbsUp,
    FaHeadset,
} from "react-icons/fa";

const stats = [
    { icon: FaUsers, num: "10,000+", label: "Happy Customers" },
    { icon: FaCar, num: "100+", label: "Vehicles" },
    { icon: FaMapMarkerAlt, num: "50+", label: "Destinations" },
    { icon: FaTrophy, num: "15+", label: "Years Experience" },
];

const values = [
    { icon: FaShieldAlt, title: "Safety First", desc: "All vehicles GPS-tracked, verified drivers with clean records, and comprehensive insurance." },
    { icon: FaClock, title: "Punctuality", desc: "We value your time. Our drivers arrive early and ensure you reach your destination on time." },
    { icon: FaThumbsUp, title: "Quality Service", desc: "Well-maintained, clean vehicles with professional, courteous drivers for every trip." },
    { icon: FaHeadset, title: "24/7 Support", desc: "Our customer support team is available round the clock for bookings and assistance." },
];

export default function AboutPageClient() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 gradient-primary" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,152,0,0.15),transparent_60%)]" />
                <div className="relative z-10 container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
                            About <span className="text-accent-400">VRS Travels</span>
                        </h1>
                        <p className="text-primary-200 text-lg max-w-2xl mx-auto">
                            Hyderabad&apos;s most trusted travel partner, serving thousands of
                            happy customers since 2010.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1449965408869-ebd13bc9e5a8?w=600&h=400&fit=crop"
                                    alt="VRS Travels team"
                                    className="w-full h-80 object-cover rounded-2xl shadow-xl"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-accent-600 text-white p-6 rounded-2xl shadow-lg hidden md:block">
                                    <p className="font-heading font-bold text-3xl">15+</p>
                                    <p className="text-sm">Years of Service</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-heading font-bold text-3xl text-primary-900 mb-6">
                                Our Story
                            </h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Founded in 2010, VRS Travels started with a simple mission — to
                                make travel in and around Hyderabad comfortable, safe, and
                                affordable. What began as a small fleet of 5 cars has grown into
                                one of the city&apos;s most trusted cab and tour service providers.
                            </p>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Over the past 15 years, we&apos;ve served over 10,000 happy
                                customers, expanded to 100+ vehicles, and now cover 50+
                                destinations across South India. Our commitment to quality,
                                safety, and customer satisfaction has earned us a loyal customer
                                base and numerous industry recognitions.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Whether it&apos;s a quick airport transfer, a weekend getaway, or a
                                week-long tour package, VRS Travels is your one-stop destination
                                for all travel needs.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
                            >
                                <stat.icon className="text-accent-600 text-3xl mx-auto mb-3" />
                                <p className="font-heading font-bold text-3xl text-primary-900 mb-1">
                                    {stat.num}
                                </p>
                                <p className="text-sm text-gray-500">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding">
                <div className="container-custom">
                    <SectionHeading
                        title="Our Values"
                        subtitle="The principles that drive us to deliver exceptional travel experiences every day."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-5 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 card-hover"
                            >
                                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                                    <v.icon className="text-white text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-primary-900 text-lg mb-2">
                                        {v.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {v.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 gradient-primary" />
                <div className="relative z-10 container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
                            Our Mission
                        </h2>
                        <p className="text-primary-100 text-lg max-w-3xl mx-auto leading-relaxed">
                            To revolutionize travel in South India by providing safe,
                            affordable, and premium cab services that create lasting memories.
                            We strive to be the first choice for every traveler in Hyderabad
                            and beyond.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
