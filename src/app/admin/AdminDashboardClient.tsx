"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    getBookings,
    updateBookingStatus,
    deleteBooking,
    StoredBooking,
} from "@/app/actions/booking";
import {
    FaSearch,
    FaFilter,
    FaTrash,
    FaWhatsapp,
    FaPhone,
    FaEnvelope,
    FaCheckCircle,
    FaClock,
    FaBan,
    FaFlag,
    FaSyncAlt,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaCar,
} from "react-icons/fa";

const statusConfig: Record<
    StoredBooking["status"],
    { label: string; color: string; bg: string; icon: React.ElementType }
> = {
    pending: { label: "Pending", color: "text-amber-700", bg: "bg-amber-50 border-amber-200", icon: FaClock },
    confirmed: { label: "Confirmed", color: "text-blue-700", bg: "bg-blue-50 border-blue-200", icon: FaFlag },
    completed: { label: "Completed", color: "text-green-700", bg: "bg-green-50 border-green-200", icon: FaCheckCircle },
    cancelled: { label: "Cancelled", color: "text-red-700", bg: "bg-red-50 border-red-200", icon: FaBan },
};

export default function AdminDashboardClient() {
    const [bookings, setBookings] = useState<StoredBooking[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [filterStatus, setFilterStatus] = useState<string>("all");
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const loadBookings = useCallback(async () => {
        setLoading(true);
        try {
            const data = await getBookings();
            setBookings(data);
        } catch (err) {
            console.error("Failed to load bookings:", err);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        loadBookings();
    }, [loadBookings]);

    const handleStatusChange = async (id: string, status: StoredBooking["status"]) => {
        const res = await updateBookingStatus(id, status);
        if (res.success) {
            setBookings((prev) =>
                prev.map((b) => (b.id === id ? { ...b, status, updatedAt: new Date().toISOString() } : b))
            );
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this booking?")) return;
        const res = await deleteBooking(id);
        if (res.success) {
            setBookings((prev) => prev.filter((b) => b.id !== id));
        }
    };

    // Filtered bookings
    const filtered = bookings.filter((b) => {
        const matchesSearch =
            !search ||
            b.customerName.toLowerCase().includes(search.toLowerCase()) ||
            b.phone.includes(search) ||
            b.bookingRef.toLowerCase().includes(search.toLowerCase()) ||
            b.pickupCity.toLowerCase().includes(search.toLowerCase()) ||
            b.destination.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = filterStatus === "all" || b.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    // Stats
    const stats = {
        total: bookings.length,
        pending: bookings.filter((b) => b.status === "pending").length,
        confirmed: bookings.filter((b) => b.status === "confirmed").length,
        completed: bookings.filter((b) => b.status === "completed").length,
    };

    const formatDate = (iso: string) => {
        return new Date(iso).toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
        });
    };

    return (
        <div className="pt-24 pb-16 min-h-screen bg-gray-50">
            <div className="container-custom">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="font-heading font-bold text-3xl text-primary-900">
                            Bookings Dashboard
                        </h1>
                        <p className="text-gray-500 text-sm mt-1">
                            Manage and track all customer bookings
                        </p>
                    </div>
                    <button
                        onClick={loadBookings}
                        className="flex items-center gap-2 btn-outline text-sm !py-2.5"
                    >
                        <FaSyncAlt className={loading ? "animate-spin" : ""} /> Refresh
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: "Total Bookings", value: stats.total, color: "from-primary-800 to-primary-900" },
                        { label: "Pending", value: stats.pending, color: "from-amber-500 to-amber-600" },
                        { label: "Confirmed", value: stats.confirmed, color: "from-blue-500 to-blue-600" },
                        { label: "Completed", value: stats.completed, color: "from-green-500 to-green-600" },
                    ].map((s) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`bg-gradient-to-br ${s.color} rounded-2xl p-5 text-white`}
                        >
                            <p className="text-2xl font-heading font-bold">{s.value}</p>
                            <p className="text-sm opacity-80">{s.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    <div className="relative flex-1">
                        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                        <input
                            type="text"
                            placeholder="Search by name, phone, ref, city..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="input-field !pl-10"
                        />
                    </div>
                    <div className="relative">
                        <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="input-field !pl-10 !pr-8 appearance-none min-w-[160px]"
                        >
                            <option value="all">All Status</option>
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                    </div>
                </div>

                {/* Bookings List */}
                {loading ? (
                    <div className="text-center py-16">
                        <div className="w-10 h-10 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4" />
                        <p className="text-gray-500">Loading bookings...</p>
                    </div>
                ) : filtered.length === 0 ? (
                    <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                        <p className="text-gray-400 text-lg mb-2">No bookings found</p>
                        <p className="text-gray-400 text-sm">
                            {bookings.length === 0
                                ? "Bookings will appear here when customers submit the form."
                                : "Try adjusting your search or filter."}
                        </p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        <AnimatePresence>
                            {filtered.map((booking, i) => {
                                const sc = statusConfig[booking.status];
                                const isExpanded = expandedId === booking.id;

                                return (
                                    <motion.div
                                        key={booking.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ delay: i * 0.03 }}
                                        className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                                    >
                                        {/* Summary Row */}
                                        <button
                                            onClick={() => setExpandedId(isExpanded ? null : booking.id)}
                                            className="w-full flex items-center gap-4 p-4 md:p-5 text-left hover:bg-gray-50/50 transition-colors"
                                        >
                                            {/* Status Dot */}
                                            <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${booking.status === "pending" ? "bg-amber-500" :
                                                    booking.status === "confirmed" ? "bg-blue-500" :
                                                        booking.status === "completed" ? "bg-green-500" : "bg-red-400"
                                                }`} />

                                            {/* Main Info */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="font-semibold text-primary-900 text-sm truncate">
                                                        {booking.customerName}
                                                    </span>
                                                    <span className="text-xs text-gray-400 font-mono">
                                                        {booking.bookingRef}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                    <FaMapMarkerAlt className="text-accent-500" />
                                                    <span className="truncate">
                                                        {booking.pickupCity} → {booking.destination}
                                                    </span>
                                                    <span className="hidden sm:inline">·</span>
                                                    <span className="hidden sm:flex items-center gap-1">
                                                        <FaCalendarAlt /> {booking.pickupDate}
                                                    </span>
                                                    <span className="hidden md:inline">·</span>
                                                    <span className="hidden md:flex items-center gap-1">
                                                        <FaCar /> {booking.vehicleType}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Status Badge */}
                                            <span className={`hidden sm:flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${sc.bg} ${sc.color}`}>
                                                <sc.icon className="text-[10px]" /> {sc.label}
                                            </span>

                                            {/* Time */}
                                            <span className="hidden lg:block text-xs text-gray-400 min-w-[100px] text-right">
                                                {formatDate(booking.createdAt)}
                                            </span>
                                        </button>

                                        {/* Expanded Details */}
                                        <AnimatePresence>
                                            {isExpanded && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-5 pb-5 border-t border-gray-100">
                                                        {/* Details Grid */}
                                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
                                                            <div>
                                                                <p className="text-xs text-gray-400 mb-1">Phone</p>
                                                                <a href={`tel:${booking.phone}`} className="text-sm font-medium text-primary-900 flex items-center gap-1">
                                                                    <FaPhone className="text-xs text-accent-500" /> {booking.phone}
                                                                </a>
                                                            </div>
                                                            <div>
                                                                <p className="text-xs text-gray-400 mb-1">Email</p>
                                                                <p className="text-sm font-medium text-primary-900 flex items-center gap-1">
                                                                    <FaEnvelope className="text-xs text-accent-500" /> {booking.email || "N/A"}
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <p className="text-xs text-gray-400 mb-1">Return Date</p>
                                                                <p className="text-sm font-medium text-primary-900">
                                                                    {booking.returnDate || "One-way"}
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <p className="text-xs text-gray-400 mb-1">Vehicle</p>
                                                                <p className="text-sm font-medium text-primary-900">
                                                                    {booking.vehicleType}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        {booking.message && (
                                                            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                                                                <p className="text-xs text-gray-400 mb-1">Message</p>
                                                                <p className="text-sm text-gray-700">{booking.message}</p>
                                                            </div>
                                                        )}

                                                        <p className="text-xs text-gray-400 mb-4">
                                                            Created: {formatDate(booking.createdAt)} · Updated: {formatDate(booking.updatedAt)}
                                                        </p>

                                                        {/* Actions */}
                                                        <div className="flex flex-wrap items-center gap-2">
                                                            {/* Status Buttons */}
                                                            {(["pending", "confirmed", "completed", "cancelled"] as const).map(
                                                                (s) => {
                                                                    if (s === booking.status) return null;
                                                                    const cfg = statusConfig[s];
                                                                    return (
                                                                        <button
                                                                            key={s}
                                                                            onClick={() => handleStatusChange(booking.id, s)}
                                                                            className={`flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg border transition-colors hover:opacity-80 ${cfg.bg} ${cfg.color}`}
                                                                        >
                                                                            <cfg.icon /> {cfg.label}
                                                                        </button>
                                                                    );
                                                                }
                                                            )}

                                                            <div className="flex-1" />

                                                            {/* WhatsApp */}
                                                            <a
                                                                href={`https://wa.me/91${booking.phone.replace(/\D/g, "").slice(-10)}?text=${encodeURIComponent(`Hi ${booking.customerName}, regarding your booking ${booking.bookingRef}...`)}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 transition-colors"
                                                            >
                                                                <FaWhatsapp /> WhatsApp
                                                            </a>

                                                            {/* Call */}
                                                            <a
                                                                href={`tel:${booking.phone}`}
                                                                className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
                                                            >
                                                                <FaPhone /> Call
                                                            </a>

                                                            {/* Delete */}
                                                            <button
                                                                onClick={() => handleDelete(booking.id)}
                                                                className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition-colors"
                                                            >
                                                                <FaTrash /> Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                )}

                {/* Count */}
                {filtered.length > 0 && (
                    <p className="text-center text-sm text-gray-400 mt-6">
                        Showing {filtered.length} of {bookings.length} bookings
                    </p>
                )}
            </div>
        </div>
    );
}
