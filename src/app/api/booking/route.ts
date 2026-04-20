import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { sendBookingNotifications } from "@/lib/notifications";

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

// POST — submit a new booking
export async function POST(request: Request) {
    try {
        const data = await request.json();

        if (
            !data.pickupCity ||
            !data.destination ||
            !data.pickupDate ||
            !data.customerName ||
            !data.phone
        ) {
            return NextResponse.json(
                { success: false, error: "Missing required fields" },
                { status: 400 }
            );
        }

        const bookingRef = `VRS${Date.now().toString(36).toUpperCase()}`;
        const now = new Date().toISOString();

        const booking = {
            ...data,
            id: crypto.randomUUID(),
            bookingRef,
            status: "pending",
            createdAt: now,
            updatedAt: now,
        };

        ensureDataDir();
        const raw = fs.readFileSync(BOOKINGS_FILE, "utf-8");
        const bookings = JSON.parse(raw);
        bookings.unshift(booking);
        fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));

        // Trigger automated email & WhatsApp notifications (runs async in background)
        sendBookingNotifications(booking, bookingRef);

        const whatsappMessage = encodeURIComponent(
            `🚕 New Booking\nRef: ${bookingRef}\nName: ${data.customerName}\nPhone: ${data.phone}\nFrom: ${data.pickupCity}\nTo: ${data.destination}\nDate: ${data.pickupDate}\nVehicle: ${data.vehicleType}`
        );

        return NextResponse.json({
            success: true,
            bookingRef,
            booking,
            whatsappUrl: `https://wa.me/919876543210?text=${whatsappMessage}`,
            message: `Booking confirmed! Reference: ${bookingRef}`,
        });
    } catch {
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}

// GET — retrieve all bookings (for admin)
export async function GET() {
    try {
        ensureDataDir();
        const raw = fs.readFileSync(BOOKINGS_FILE, "utf-8");
        const bookings = JSON.parse(raw);
        return NextResponse.json({ success: true, bookings });
    } catch {
        return NextResponse.json(
            { success: false, error: "Failed to read bookings" },
            { status: 500 }
        );
    }
}
