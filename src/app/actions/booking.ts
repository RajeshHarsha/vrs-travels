"use server";

import fs from "fs";
import path from "path";
import { sendBookingNotifications } from "@/lib/notifications";

export interface BookingData {
    pickupCity: string;
    destination: string;
    pickupDate: string;
    returnDate: string;
    vehicleType: string;
    customerName: string;
    phone: string;
    email: string;
    message: string;
}

export interface StoredBooking extends BookingData {
    id: string;
    bookingRef: string;
    status: "pending" | "confirmed" | "completed" | "cancelled";
    createdAt: string;
    updatedAt: string;
}

const BOOKINGS_FILE = path.join(process.cwd(), "data", "bookings.json");

function ensureDataDir() {
    const dir = path.dirname(BOOKINGS_FILE);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    if (!fs.existsSync(BOOKINGS_FILE)) {
        fs.writeFileSync(BOOKINGS_FILE, JSON.stringify([], null, 2));
    }
}

function readBookings(): StoredBooking[] {
    ensureDataDir();
    try {
        const raw = fs.readFileSync(BOOKINGS_FILE, "utf-8");
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

function writeBookings(bookings: StoredBooking[]) {
    ensureDataDir();
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
}

export async function submitBooking(data: BookingData) {
    // Validate required fields
    if (
        !data.pickupCity ||
        !data.destination ||
        !data.pickupDate ||
        !data.customerName ||
        !data.phone
    ) {
        return { success: false, error: "Please fill in all required fields." };
    }

    // Validate phone
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(data.phone.replace(/\D/g, "").slice(-10))) {
        return { success: false, error: "Please enter a valid 10-digit phone number." };
    }

    // Validate email if provided
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        return { success: false, error: "Please enter a valid email address." };
    }

    // Generate booking reference
    const bookingRef = `VRS${Date.now().toString(36).toUpperCase()}`;
    const now = new Date().toISOString();

    const booking: StoredBooking = {
        ...data,
        id: crypto.randomUUID(),
        bookingRef,
        status: "pending",
        createdAt: now,
        updatedAt: now,
    };

    // Save to JSON file
    try {
        const bookings = readBookings();
        bookings.unshift(booking); // newest first
        writeBookings(bookings);
        console.log(`✅ Booking saved: ${bookingRef} — ${data.customerName} (${data.phone})`);

        // Trigger automated email & WhatsApp notifications (runs async in background)
        sendBookingNotifications(booking, bookingRef);
    } catch (err) {
        console.error("Failed to save booking:", err);
        return { success: false, error: "Failed to save booking. Please try again." };
    }

    // Construct WhatsApp message
    const whatsappMessage = encodeURIComponent(
        `🚕 *New Booking Request*\n\n` +
        `📋 Ref: ${bookingRef}\n` +
        `👤 Name: ${data.customerName}\n` +
        `📞 Phone: ${data.phone}\n` +
        `📍 From: ${data.pickupCity}\n` +
        `📍 To: ${data.destination}\n` +
        `📅 Pickup: ${data.pickupDate}\n` +
        `📅 Return: ${data.returnDate || "One-way"}\n` +
        `🚗 Vehicle: ${data.vehicleType}\n` +
        `💬 Message: ${data.message || "N/A"}`
    );

    return {
        success: true,
        bookingRef,
        whatsappUrl: `https://wa.me/919876543210?text=${whatsappMessage}`,
        message: `Your booking has been received! Reference: ${bookingRef}. Our team will contact you within 30 minutes to confirm.`,
    };
}

// ----- Admin actions -----

export async function getBookings(): Promise<StoredBooking[]> {
    return readBookings();
}

export async function updateBookingStatus(
    bookingId: string,
    status: StoredBooking["status"]
) {
    const bookings = readBookings();
    const index = bookings.findIndex((b) => b.id === bookingId);
    if (index === -1) {
        return { success: false, error: "Booking not found" };
    }
    bookings[index].status = status;
    bookings[index].updatedAt = new Date().toISOString();
    writeBookings(bookings);
    return { success: true, booking: bookings[index] };
}

export async function deleteBooking(bookingId: string) {
    const bookings = readBookings();
    const filtered = bookings.filter((b) => b.id !== bookingId);
    if (filtered.length === bookings.length) {
        return { success: false, error: "Booking not found" };
    }
    writeBookings(filtered);
    return { success: true };
}
