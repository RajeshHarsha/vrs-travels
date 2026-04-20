import nodemailer from 'nodemailer';
import { BookingData } from '@/app/actions/booking';

/**
 * Sends booking confirmation emails to both the Admin and the Customer.
 * Requires SMTP environment variables to be set.
 */
async function sendEmails(booking: BookingData, bookingRef: string) {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, ADMIN_EMAIL } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
        console.warn("⚠️ SMTP credentials not configured. Skipping email notifications.");
        return false;
    }

    try {
        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: Number(SMTP_PORT) || 587,
            secure: Number(SMTP_PORT) === 465, // true for 465, false for other ports
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });

        const bookingDetailsHTML = `
      <h2>Booking Details</h2>
      <ul>
        <li><strong>Reference:</strong> ${bookingRef}</li>
        <li><strong>Name:</strong> ${booking.customerName}</li>
        <li><strong>Phone:</strong> ${booking.phone}</li>
        <li><strong>Email:</strong> ${booking.email || 'N/A'}</li>
        <li><strong>Route:</strong> ${booking.pickupCity} &rarr; ${booking.destination}</li>
        <li><strong>Pickup Date:</strong> ${booking.pickupDate}</li>
        <li><strong>Return Date:</strong> ${booking.returnDate || 'One-way'}</li>
        <li><strong>Vehicle:</strong> ${booking.vehicleType}</li>
        <li><strong>Message:</strong> ${booking.message || 'None'}</li>
      </ul>
    `;

        // 1. Send to Admin
        if (ADMIN_EMAIL) {
            await transporter.sendMail({
                from: `"VRS Travels Website" <${SMTP_USER}>`,
                to: ADMIN_EMAIL,
                subject: `New Booking Request - ${bookingRef} (${booking.customerName})`,
                html: `
          <p>A new booking request has been submitted.</p>
          ${bookingDetailsHTML}
          <p>Please review and confirm this booking in the admin dashboard.</p>
        `,
            });
            console.log(`✅ Admin email sent for booking ${bookingRef}`);
        }

        // 2. Send to Customer
        if (booking.email) {
            await transporter.sendMail({
                from: `"VRS Travels" <${SMTP_USER}>`,
                to: booking.email,
                subject: `Booking Received - VRS Travels (Ref: ${bookingRef})`,
                html: `
          <p>Dear ${booking.customerName},</p>
          <p>Thank you for choosing VRS Travels! We have received your booking request.</p>
          ${bookingDetailsHTML}
          <p>Our team will contact you shortly to confirm your trip.</p>
          <p>Best regards,<br>VRS Travels Team</p>
        `,
            });
            console.log(`✅ Customer email sent to ${booking.email} for booking ${bookingRef}`);
        }

        return true;
    } catch (error) {
        console.error("❌ Failed to send emails:", error);
        return false;
    }
}

/**
 * Sends an automated WhatsApp message to the customer using Twilio API.
 * Requires Twilio environment variables.
 */
async function sendAutomatedWhatsApp(booking: BookingData, bookingRef: string) {
    const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_NUMBER } = process.env;

    if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_WHATSAPP_NUMBER) {
        console.warn("⚠️ Twilio credentials not configured. Skipping automated WhatsApp notification.");
        return false;
    }

    try {
        // Format phone number to E.164 format with +91 country code (assuming India)
        const formattedPhone = `+91${booking.phone.replace(/\D/g, '').slice(-10)}`;

        const message = `*VRS Travels - Booking Received* 🚕\n\nHi ${booking.customerName}, we have received your booking request!\n\n📋 *Ref:* ${bookingRef}\n📍 *Route:* ${booking.pickupCity} to ${booking.destination}\n📅 *Date:* ${booking.pickupDate}\n🚗 *Vehicle:* ${booking.vehicleType}\n\nOur team will contact you shortly to confirm the trip. Thank you!`;

        // Standard HTTP POST request to Twilio API
        const response = await fetch(
            `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: "Basic " + Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString("base64"),
                },
                body: new URLSearchParams({
                    From: `whatsapp:${TWILIO_WHATSAPP_NUMBER}`,
                    To: `whatsapp:${formattedPhone}`,
                    Body: message,
                }).toString(),
            }
        );

        if (response.ok) {
            console.log(`✅ Automated WhatsApp sent to ${formattedPhone} for booking ${bookingRef}`);
            return true;
        } else {
            const errorData = await response.json();
            console.error("❌ Twilio API Error:", errorData);
            return false;
        }
    } catch (error) {
        console.error("❌ Failed to send automated WhatsApp:", error);
        return false;
    }
}

/**
 * Main function to trigger all notifications for a new booking
 */
export async function sendBookingNotifications(booking: BookingData, bookingRef: string) {
    // We run these concurrently but don't await them here so we don't block the UI response
    Promise.all([
        sendEmails(booking, bookingRef),
        sendAutomatedWhatsApp(booking, bookingRef)
    ]).catch(console.error);
}
