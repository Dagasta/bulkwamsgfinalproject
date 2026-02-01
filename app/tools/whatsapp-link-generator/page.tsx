import { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppLinkGenerator from '@/components/tools/WhatsAppLinkGenerator';
import { ArrowRight, Link as LinkIcon } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Free WhatsApp Link Generator - Create Click-to-Chat Links | BulkWaMsg',
    description: 'Generate free WhatsApp click-to-chat links instantly. Create wa.me links with pre-filled messages. Perfect for websites, social media, and marketing campaigns.',
    keywords: ['whatsapp link generator', 'wa.me link', 'whatsapp click to chat', 'create whatsapp link', 'whatsapp chat link'],
};

export default function WhatsAppLinkGeneratorPage() {
    return (
        <main className="min-h-screen bg-soft-gray">
            {/* Navigation */}
            <nav className="border-b border-gray-100 bg-white">
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                                <LinkIcon className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-dark-navy">BulkWaMsg</span>
                        </Link>

                        <Link href="/signup" className="btn-primary">
                            Start Free Trial
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="section-padding bg-white">
                <div className="container-custom text-center">
                    <h1 className="text-5xl font-bold text-dark-navy mb-6">
                        Free WhatsApp Link Generator
                    </h1>
                    <p className="text-xl text-slate-gray max-w-2xl mx-auto">
                        Create WhatsApp click-to-chat links instantly. Perfect for websites,
                        social media, and marketing campaigns.
                    </p>
                </div>
            </section>

            {/* Tool */}
            <section className="section-padding">
                <div className="container-custom">
                    <WhatsAppLinkGenerator />
                </div>
            </section>

            {/* Benefits */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-dark-navy text-center mb-12">
                        Why Use WhatsApp Links?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="card text-center">
                            <h3 className="text-xl font-semibold text-dark-navy mb-2">Easy Contact</h3>
                            <p className="text-slate-gray">
                                Let customers reach you with one click—no need to save your number
                            </p>
                        </div>

                        <div className="card text-center">
                            <h3 className="text-xl font-semibold text-dark-navy mb-2">Pre-filled Messages</h3>
                            <p className="text-slate-gray">
                                Add default messages to make it easier for customers to start conversations
                            </p>
                        </div>

                        <div className="card text-center">
                            <h3 className="text-xl font-semibold text-dark-navy mb-2">Track Engagement</h3>
                            <p className="text-slate-gray">
                                Use different links for different campaigns to track where leads come from
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-primary text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Need More Than Just Links?
                    </h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Send bulk WhatsApp messages, schedule campaigns, and track analytics with BulkWaMsg.
                    </p>
                    <Link href="/signup" className="bg-white text-trust-blue font-semibold px-8 py-4 rounded-lg hover:shadow-xl transition-all inline-flex items-center gap-2">
                        Start Free Trial
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
