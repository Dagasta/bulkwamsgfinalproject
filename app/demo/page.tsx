import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { Play, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Product Demo - BulkWaMsg | See How It Works',
    description: 'Watch our interactive demo to see how BulkWaMsg makes WhatsApp marketing simple and effective. Learn how to send bulk messages in minutes.',
    keywords: ['bulkwamsg demo', 'whatsapp marketing demo', 'bulk messaging tutorial'],
};

export default function DemoPage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            {/* Hero */}
            <section className="section-padding bg-gradient-to-br from-soft-gray via-white to-blue-50">
                <div className="container-custom text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-dark-navy mb-6">
                        See BulkWaMsg in Action
                    </h1>
                    <p className="text-xl text-slate-gray max-w-2xl mx-auto">
                        Watch how easy it is to send thousands of WhatsApp messages in just a few clicks.
                    </p>
                </div>
            </section>

            {/* Video Demo */}
            <section className="section-padding bg-white">
                <div className="container-custom max-w-5xl">
                    <div className="card">
                        <div className="aspect-video bg-gradient-to-br from-trust-blue to-premium-indigo rounded-lg flex items-center justify-center mb-8">
                            <div className="text-center text-white">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/30 transition-all">
                                    <Play className="w-10 h-10 ml-1" />
                                </div>
                                <p className="text-lg font-semibold">Watch Product Demo</p>
                                <p className="text-white/80 text-sm">5 minutes</p>
                            </div>
                        </div>
                        <p className="text-center text-slate-gray">
                            See how to set up your first campaign, import contacts, and start sending messages in under 5 minutes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Features Walkthrough */}
            <section className="section-padding bg-soft-gray">
                <div className="container-custom">
                    <h2 className="text-4xl font-bold text-dark-navy text-center mb-12">
                        What You'll Learn
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="card">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-success-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <CheckCircle2 className="w-5 h-5 text-success-green" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-dark-navy mb-2">{feature.title}</h3>
                                        <p className="text-slate-gray text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Demo Sections */}
            <section className="section-padding bg-white">
                <div className="container-custom max-w-4xl">
                    <h2 className="text-4xl font-bold text-dark-navy text-center mb-12">
                        Step-by-Step Walkthrough
                    </h2>
                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <div key={index} className="card">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-dark-navy mb-2">{step.title}</h3>
                                        <p className="text-slate-gray">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-primary text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Try It Yourself?
                    </h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Start your free trial and experience the power of BulkWaMsg firsthand.
                    </p>
                    <Link href="/signup" className="bg-white text-trust-blue font-semibold px-8 py-4 rounded-lg hover:shadow-xl transition-all inline-flex items-center gap-2">
                        Start Free Trial
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Back to Home */}
            <section className="section-padding bg-white text-center">
                <Link href="/" className="text-trust-blue hover:underline font-semibold inline-flex items-center gap-2">
                    ← Back to Home
                </Link>
            </section>

            <Footer />
        </main>
    );
}

const features = [
    {
        title: 'Connect Your WhatsApp',
        description: 'Scan a QR code to securely connect your WhatsApp account in seconds.',
    },
    {
        title: 'Import Contacts',
        description: 'Upload contacts from CSV, Excel, or paste numbers directly.',
    },
    {
        title: 'Create Your Message',
        description: 'Write your message with personalization and preview how it looks.',
    },
    {
        title: 'Schedule & Send',
        description: 'Send immediately or schedule for the perfect time.',
    },
    {
        title: 'Track Performance',
        description: 'Monitor delivery rates, read receipts, and engagement in real-time.',
    },
    {
        title: 'Manage Campaigns',
        description: 'View all your campaigns, analytics, and contact lists in one dashboard.',
    },
];

const steps = [
    {
        title: 'Sign Up & Connect WhatsApp',
        description: 'Create your free account and connect your WhatsApp number using our secure QR code authentication. No password required.',
    },
    {
        title: 'Import Your Contacts',
        description: 'Upload your contact list via CSV/Excel or paste numbers directly. Our system automatically validates and formats all numbers.',
    },
    {
        title: 'Create Your Campaign',
        description: 'Write your message, add personalization tags, and preview how it will look to recipients.',
    },
    {
        title: 'Schedule or Send',
        description: 'Choose to send immediately or schedule for a specific date and time. Set up recurring campaigns for automated messaging.',
    },
    {
        title: 'Monitor Results',
        description: 'Track delivery rates, read receipts, and responses in real-time. Export detailed reports for analysis.',
    },
];
