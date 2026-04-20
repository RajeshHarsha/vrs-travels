"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { openBookingModal } from "@/components/BookingModal";
import VehicleCard from "@/components/VehicleCard";
import TestimonialCard from "@/components/TestimonialCard";
import RouteCard from "@/components/RouteCard";
import PackageCard from "@/components/PackageCard";
import {
  FaShieldAlt,
  FaClock,
  FaHeadset,
  FaRoute,
} from "react-icons/fa";

const vehicles = [
  { name: "Swift Dzire", image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202009/Maruti_Suzuki_Swift_1200x768.png?size=690:388", capacity: "4 Passengers", ac: true, priceLabel: "From ₹10/km" },
  { name: "Toyota Innova", image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400&h=300&fit=crop", capacity: "6 Passengers", ac: true, priceLabel: "From ₹14/km" },
  { name: "Tempo Traveller", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=300&fit=crop", capacity: "12-18 Passengers", ac: true, priceLabel: "From ₹22/km" },
  // { name: "Luxury Cars", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop", capacity: "4 Passengers", ac: true, priceLabel: "From ₹25/km" },
];

const routes = [
  { from: "Hyderabad", to: "Tirupati", distance: "550 km · 9 hrs", price: "5,500", href: "/hyderabad-to-tirupati-cab" },
  { from: "Hyderabad", to: "Bangalore", distance: "570 km · 8 hrs", price: "5,700", href: "/hyderabad-to-bangalore-cab" },
  { from: "Hyderabad", to: "Airport", distance: "30 km · 45 mins", price: "800", href: "/hyderabad-airport-taxi" },
  { from: "Hyderabad", to: "Vizag", distance: "620 km · 10 hrs", price: "6,200", href: "/vizag-tour-packages" },
  { from: "Hyderabad", to: "Vijayawada", distance: "275 km · 4 hrs", price: "2,750", href: "/contact" },
  { from: "Hyderabad", to: "Shirdi", distance: "580 km · 9 hrs", price: "5,800", href: "/contact" },
];

const packages = [
  {
    title: "Tirupati Darshan Package",
    image: "https://images.unsplash.com/photo-1621621888528-f23bffcbc4e0?w=600&h=400&fit=crop",
    duration: "2 Days / 1 Night",
    location: "Tirupati",
    price: "4,999",
    highlights: ["VIP Darshan Tickets", "AC Cab Included", "Hotel Stay"],
  },
  {
    title: "Goa Beach Holiday",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=400&fit=crop",
    duration: "3 Days / 2 Nights",
    location: "Goa",
    price: "8,999",
    highlights: ["Beach Resort Stay", "Sightseeing Tour", "AC Transportation"],
  },
  {
    title: "Vizag Explorer",
    image: "https://images.unsplash.com/photo-1590123715937-e5b14e5db5b0?w=600&h=400&fit=crop",
    duration: "3 Days / 2 Nights",
    location: "Visakhapatnam",
    price: "7,499",
    highlights: ["Araku Valley Visit", "Beach Tour", "City Sightseeing"],
  },
];

const testimonials = [
  { name: "Ramesh Kumar", location: "Hyderabad", quote: "Excellent service! The driver was very professional and the car was spotless. VRS Travels made our Tirupati trip memorable. Highly recommended!", rating: 5 },
  { name: "Priya Sharma", location: "Secunderabad", quote: "Booked an Innova for our family trip to Goa. Very comfortable ride, AC worked perfectly throughout. Will definitely book again.", rating: 5 },
  { name: "Suresh Reddy", location: "Kukatpally", quote: "Best cab service in Hyderabad! Affordable rates, clean vehicles, and punctual drivers. My go-to travel partner for outstation trips.", rating: 4 },
  { name: "Fatima Begum", location: "Mehdipatnam", quote: "Used VRS Travels for airport transfer. Driver arrived 10 minutes early. Very reasonable pricing compared to others.", rating: 5 },
];

const features = [
  { icon: FaShieldAlt, title: "Safe & Secure", desc: "Verified drivers, GPS-tracked vehicles, and comprehensive insurance coverage." },
  { icon: FaClock, title: "24/7 Available", desc: "Round-the-clock service for all your travel needs, anytime anywhere." },
  { icon: FaHeadset, title: "Dedicated Support", desc: "Our support team is always ready to help you with bookings and queries." },
  { icon: FaRoute, title: "Best Routes", desc: "Optimized routes for faster, comfortable, and scenic travel experiences." },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1572401611152-cf63d874b019?q=80&w=1920&auto=format&fit=crop"
            alt="VRS Travels - Premium cab on Indian highway at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/70 to-primary-950/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom pt-24 pb-16 w-full">
          <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-accent-500/20 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-accent-500/30">
                🚗 #1 Travel Partner in Hyderabad
              </span>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Your Journey,
                <br />
                <span className="text-accent-400">Our Passion</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0">
                Premium cab services, curated tour packages, and unforgettable
                travel experiences across India. Book your ride today!
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button onClick={openBookingModal} className="btn-primary text-base px-8 py-4">
                  Enquiry
                </button>
                <Link href="/fleet" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-primary-900 text-base px-8 py-4">
                  View Fleet
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
                {[
                  { num: "10K+", label: "Happy Riders" },
                  { num: "50+", label: "Destinations" },
                  { num: "100+", label: "Vehicles" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl md:text-3xl font-heading font-bold text-accent-400">
                      {stat.num}
                    </p>
                    <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 card-hover"
              >
                <div className="w-14 h-14 mx-auto rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <f.icon className="text-white text-xl" />
                </div>
                <h3 className="font-heading font-semibold text-primary-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POPULAR ROUTES ===== */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Popular Routes"
            subtitle="Most booked cab routes from Hyderabad with competitive pricing and comfortable rides."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {routes.map((route, i) => (
              <RouteCard key={route.to} {...route} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== FLEET PREVIEW ===== */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Fleet"
            subtitle="Choose from our range of well-maintained, fully insured vehicles for every occasion."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((v, i) => (
              <VehicleCard key={v.name} {...v} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/fleet" className="btn-outline">
              View Full Fleet →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TOUR PACKAGES ===== */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Tour Packages"
            subtitle="Handpicked tour packages with comfortable stays, sightseeing, and hassle-free travel."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((p, i) => (
              <PackageCard key={p.title} {...p} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/tour-packages" className="btn-outline">
              View All Packages →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Real reviews from real travelers who chose VRS Travels for their journeys."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,152,0,0.15),transparent_60%)]" />
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-primary-200 text-lg mb-8 max-w-xl mx-auto">
              Book your ride now and experience premium travel with VRS Travels.
              Available 24/7 for all your travel needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={openBookingModal} className="btn-primary text-base px-8 py-4 !bg-accent-500 hover:!bg-accent-600">
                Enquiry →
              </button>
              <a href="tel:+919876543210" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-primary-900 text-base px-8 py-4">
                📞 Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
