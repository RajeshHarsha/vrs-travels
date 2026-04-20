import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Fleet", href: "/fleet" },
    { name: "Tour Packages", href: "/tour-packages" },
    { name: "Outstation Trips", href: "/outstation-trips" },
    { name: "Local Rentals", href: "/local-rentals" },
    { name: "Airport Transfers", href: "/airport-transfers" },
    { name: "Contact Us", href: "/contact" },
];

const popularRoutes = [
    { name: "Hyderabad to Tirupati", href: "/hyderabad-to-tirupati-cab" },
    { name: "Hyderabad to Bangalore", href: "/hyderabad-to-bangalore-cab" },
    { name: "Hyderabad Airport Taxi", href: "/hyderabad-airport-taxi" },
    { name: "Vizag Tour Packages", href: "/vizag-tour-packages" },
];

const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
    return (
        <footer className="bg-primary-950 text-gray-300">
            {/* Main Footer */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <div>
                        <Link href="/" className="inline-block mb-5">
                            <img
                                src="/logo.png"
                                alt="VRS Travels"
                                className="h-12 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed mb-6 text-gray-400">
                            Your trusted travel partner in Hyderabad. We provide premium cab
                            services, tour packages, and hassle-free travel experiences across
                            India.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                                >
                                    <social.icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading font-semibold text-white text-lg mb-5">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-accent-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular Routes */}
                    <div>
                        <h3 className="font-heading font-semibold text-white text-lg mb-5">
                            Popular Routes
                        </h3>
                        <ul className="space-y-3">
                            {popularRoutes.map((route) => (
                                <li key={route.name}>
                                    <Link
                                        href={route.href}
                                        className="text-sm text-gray-400 hover:text-accent-400 transition-colors duration-300"
                                    >
                                        {route.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-heading font-semibold text-white text-lg mb-5">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-accent-500 mt-1 flex-shrink-0" />
                                <span className="text-sm text-gray-400">
                                    Manikonda, Hyderabad,
                                    <br />
                                    Telangana 500089
                                </span>
                            </li>
                            <li>
                                <a
                                    href="tel:+919876543210"
                                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-accent-400 transition-colors"
                                >
                                    <FaPhoneAlt className="text-accent-500 flex-shrink-0" />
                                    +91 98765 43210
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@vrstravels.com"
                                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-accent-400 transition-colors"
                                >
                                    <FaEnvelope className="text-accent-500 flex-shrink-0" />
                                    info@vrstravels.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} VRS Travels. All rights reserved.
                    </p>
                    <div className="flex items-center gap-5 text-xs text-gray-500">
                        <Link href="#" className="hover:text-accent-400 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-accent-400 transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
