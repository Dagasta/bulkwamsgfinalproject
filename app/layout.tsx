import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "BulkWaMsg - Bulk WhatsApp Messaging Platform",
    description: "Send bulk WhatsApp messages instantly. Reach thousands of customers with our powerful WhatsApp marketing platform. Schedule campaigns, manage contacts, and track analytics.",
    keywords: ["bulk whatsapp sender", "whatsapp bulk message", "whatsapp marketing", "bulk messaging platform", "whatsapp automation"],
    authors: [{ name: "BulkWaMsg" }],
    openGraph: {
        title: "BulkWaMsg - Bulk WhatsApp Messaging Platform",
        description: "Send bulk WhatsApp messages instantly. Reach thousands of customers with our powerful platform.",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "BulkWaMsg - Bulk WhatsApp Messaging Platform",
        description: "Send bulk WhatsApp messages instantly. Reach thousands of customers with our powerful platform.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: "your-google-verification-code",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
