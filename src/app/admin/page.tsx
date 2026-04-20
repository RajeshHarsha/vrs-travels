import AdminDashboardClient from "./AdminDashboardClient";

export const metadata = {
    title: "Admin - Bookings Dashboard",
    robots: { index: false, follow: false },
};

export default function AdminPage() {
    return <AdminDashboardClient />;
}
