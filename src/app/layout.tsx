import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingModal from "@/components/BookingModal";
import CallButton from "@/components/CallButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://vrstravels.com"),
  title: {
    default: "VRS Travels - Premium Cab & Tour Services | Hyderabad",
    template: "%s | VRS Travels",
  },
  description:
    "VRS Travels offers premium cab booking, tour packages, outstation trips, local rentals, and airport transfers in Hyderabad. Book your ride today!",
  keywords: [
    "cab booking Hyderabad",
    "tour packages Hyderabad",
    "outstation cabs",
    "airport taxi Hyderabad",
    "car rental Hyderabad",
    "VRS Travels",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vrstravels.com",
    siteName: "VRS Travels",
    title: "VRS Travels - Premium Cab & Tour Services | Hyderabad",
    description:
      "Book premium cabs, tour packages, and airport transfers with VRS Travels Hyderabad.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VRS Travels - Premium Cab Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VRS Travels - Premium Cab & Tour Services",
    description:
      "Book premium cabs, tour packages, and airport transfers with VRS Travels Hyderabad.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "TaxiService"],
  name: "VRS Travels",
  description:
    "Premium cab booking, tour packages, outstation trips, local rentals, and airport transfers in Hyderabad.",
  url: "https://vrstravels.com",
  telephone: "+919876543210",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Manikonda",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500089",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.385,
    longitude: 78.4867,
  },
  areaServed: {
    "@type": "City",
    name: "Hyderabad",
  },
  priceRange: "₹₹",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CallButton />
        <BookingModal />
      </body>
    </html>
  );
}
