import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "BulkWaMsg | #1 Bulk WhatsApp Marketing Software & Automation",
    description: "Blast WhatsApp messages to thousands of customers instantly. The most powerful, free WhatsApp bulk sender for business marketing, notifications, and automation. No API costs, 100% secure.",
    keywords: [
        "bulk whatsapp sender",
        "whatsapp bulk message",
        "whatsapp marketing software",
        "bulk whatsapp messaging platform",
        "whatsapp automation tool",
        "free whatsapp marketing",
        "whatsapp blast software",
        "send bulk whatsapp messages",
        "whatsapp marketing api free",
        "best bulk whatsapp sender 2025"
    ],
    authors: [{ name: "BulkWaMsg Team" }],
    openGraph: {
        title: "BulkWaMsg | #1 Bulk WhatsApp Marketing Software",
        description: "Scale your business with automated WhatsApp marketing. Send thousands of messages for free.",
        url: "https://bulkwamsg.com",
        siteName: "BulkWaMsg",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "BulkWaMsg Platform",
            },
        ],
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "BulkWaMsg | Bulk WhatsApp Marketing",
        description: "The ultimate tool for WhatsApp bulk messaging. Free, fast, and easy to use.",
        images: ["/og-image.png"],
    },
    alternates: {
        canonical: "https://bulkwamsg.com",
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
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": "BulkWaMsg",
                            "operatingSystem": "Windows, macOS, Linux",
                            "applicationCategory": "BusinessApplication",
                            "offers": {
                                "@type": "Offer",
                                "price": "0.00",
                                "priceCurrency": "USD"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.9",
                                "ratingCount": "1250"
                            }
                        })
                    }}
                />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
