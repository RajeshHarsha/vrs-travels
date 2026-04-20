"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitBooking, BookingData } from "@/app/actions/booking";
import {
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaCar,
    FaUser,
    FaPhone,
    FaEnvelope,
    FaWhatsapp,
    FaCheckCircle,
} from "react-icons/fa";

const vehiclePricing: Record<string, number> = {
    "Swift Dzire": 2500,
    "Toyota Innova": 4000,
    "Tempo Traveller": 6500,
    "Luxury Car": 8500,
};

const vehicleTypes = Object.keys(vehiclePricing);

interface BookingFormProps {
    compact?: boolean;
    defaultPickup?: string;
    defaultDestination?: string;
}

export default function BookingForm({
    compact = false,
    defaultPickup = "",
    defaultDestination = "",
}: BookingFormProps) {
    const [formData, setFormData] = useState<BookingData>({
        pickupCity: defaultPickup,
        destination: defaultDestination,
        pickupDate: "",
        returnDate: "",
        vehicleType: vehicleTypes[0],
        customerName: "",
        phone: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [mounted, setMounted] = useState(false);

    useState(() => {
        // Use an effect-like pattern to set mounted on client
        if (typeof window !== 'undefined') {
            setTimeout(() => setMounted(true), 0);
        }
    });

    const [result, setResult] = useState<{
        success: boolean;
        message?: string;
        bookingRef?: string;
        whatsappUrl?: string;
        error?: string;
    } | null>(null);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // Calculate duration and total price
    const calculateTotal = () => {
        if (!formData.pickupDate) return 0;

        const start = new Date(formData.pickupDate);
        const end = formData.returnDate ? new Date(formData.returnDate) : start;

        // Difference in days (minimum 1)
        const diffTime = Math.max(0, end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

        return diffDays * (vehiclePricing[formData.vehicleType] || 0);
    };

    const totalPrice = calculateTotal();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);

        try {
            const res = await submitBooking(formData);
            setResult(res);
            if (res.success) {
                setFormData({
                    pickupCity: "",
                    destination: "",
                    pickupDate: "",
                    returnDate: "",
                    vehicleType: vehicleTypes[0],
                    customerName: "",
                    phone: "",
                    email: "",
                    message: "",
                });
            }
        } catch {
            setResult({ success: false, error: "Something went wrong. Please try again." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            <AnimatePresence mode="wait">
                {result?.success ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="text-center py-8 px-4"
                    >
                        <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                        <h3 className="font-heading font-bold text-xl text-primary-900 mb-2">
                            Booking Confirmed!
                        </h3>
                        <p className="text-gray-600 mb-2">
                            Reference: <span className="font-bold text-accent-700">{result.bookingRef}</span>
                        </p>
                        <p className="text-sm text-gray-500 mb-6">{result.message}</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            {result.whatsappUrl && (
                                <a
                                    href={result.whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-all"
                                >
                                    <FaWhatsapp size={18} /> Confirm via WhatsApp
                                </a>
                            )}
                            <button
                                onClick={() => setResult(null)}
                                className="btn-outline text-sm"
                            >
                                Book Another Ride
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className={`grid gap-4 ${compact ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}
                    >
                        {/* Pickup City */}
                        <div className="relative">
                            <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-accent-500 text-sm" />
                            <input
                                type="text"
                                name="pickupCity"
                                value={formData.pickupCity}
                                onChange={handleChange}
                                placeholder="Pickup City *"
                                required
                                className="input-field !pl-10"
                                suppressHydrationWarning
                            />
                        </div>

                        {/* Destination */}
                        <div className="relative">
                            <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500 text-sm" />
                            <input
                                type="text"
                                name="destination"
                                value={formData.destination}
                                onChange={handleChange}
                                placeholder="Destination *"
                                required
                                className="input-field !pl-10"
                                suppressHydrationWarning
                            />
                        </div>

                        {/* Pickup Date */}
                        <div className="relative">
                            <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-accent-500 text-sm pointer-events-none" />
                            <input
                                type="date"
                                name="pickupDate"
                                value={formData.pickupDate}
                                onChange={handleChange}
                                required
                                className="input-field !pl-10"
                            />
                        </div>

                        {/* Return Date */}
                        <div className="relative">
                            <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
                            <input
                                type="date"
                                name="returnDate"
                                value={formData.returnDate}
                                onChange={handleChange}
                                className="input-field !pl-10"
                                placeholder="Return Date (Optional)"
                                suppressHydrationWarning
                            />
                        </div>

                        {/* Vehicle Type */}
                        <div className="relative">
                            <FaCar className="absolute left-3 top-1/2 -translate-y-1/2 text-accent-500 text-sm pointer-events-none" />
                            <select
                                name="vehicleType"
                                value={formData.vehicleType}
                                onChange={handleChange}
                                className="input-field !pl-10 appearance-none"
                                suppressHydrationWarning
                            >
                                {vehicleTypes.map((v) => (
                                    <option key={v} value={v}>
                                        {v}
                                    </option>
                                ))}
                            </select>

                            {/* Total Price Display */}
                            <AnimatePresence>
                                {mounted && totalPrice > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-2 p-2 bg-accent-50 rounded-lg border border-accent-100 flex items-center justify-between"
                                    >
                                        <span className="text-xs text-gray-500 font-medium">Estimated Total:</span>
                                        <span className="text-sm font-bold text-accent-700">₹{totalPrice.toLocaleString('en-IN')}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Customer Name */}
                        <div className="relative">
                            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-accent-500 text-sm" />
                            <input
                                type="text"
                                name="customerName"
                                value={formData.customerName}
                                onChange={handleChange}
                                placeholder="Your Name *"
                                required
                                className="input-field !pl-10"
                                suppressHydrationWarning
                            />
                        </div>

                        {/* Phone */}
                        <div className="relative">
                            <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-accent-500 text-sm" />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number *"
                                required
                                className="input-field !pl-10"
                                suppressHydrationWarning
                            />
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-accent-500 text-sm" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email (Optional)"
                                className="input-field !pl-10"
                                suppressHydrationWarning
                            />
                        </div>

                        {/* Message */}
                        <div className={compact ? "md:col-span-2" : "md:col-span-2 lg:col-span-1"}>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Additional Message (Optional)"
                                rows={compact ? 2 : 3}
                                className="input-field resize-none"
                                suppressHydrationWarning
                            />
                        </div>

                        {/* Error Message */}
                        {result?.error && (
                            <div className={compact ? "md:col-span-2" : "md:col-span-2 lg:col-span-3"}>
                                <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                                    {result.error}
                                </p>
                            </div>
                        )}

                        {/* Submit */}
                        <div className={compact ? "md:col-span-2" : "md:col-span-2 lg:col-span-3"}>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full btn-primary text-base py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    "Send Enquiry"
                                )}
                            </button>
                        </div>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}
