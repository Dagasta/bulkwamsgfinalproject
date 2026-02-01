import { Metadata } from 'next';
import Link from 'next/link';
import { MessageSquare, Upload, CheckCircle2, AlertCircle, FileSpreadsheet, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Bulk WhatsApp Messaging - Send Thousands of Messages Instantly | BulkWaMsg',
    description: 'Send bulk WhatsApp messages to thousands of contacts instantly. Paste unlimited numbers, import from CSV/Excel, auto-validate, and track delivery. Start free.',
    keywords: ['bulk whatsapp sender', 'send bulk whatsapp messages', 'whatsapp bulk messaging', 'mass whatsapp sender'],
};

export default function BulkMessagingPage() {
    return (
        <main className="min-h-screen">
            {/* Navigation */}
            <nav className="border-b border-gray-100 bg-white">
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                                <MessageSquare className="w-6 h-6 text-white" />
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
            <section className="section-padding bg-gradient-to-br from-soft-gray to-blue-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-dark-navy mb-6">
                            Send Bulk WhatsApp Messages to <span className="gradient-text">Thousands</span> of Contacts
                        </h1>
                        <p className="text-xl text-slate-gray mb-8 leading-relaxed">
                            The most powerful bulk WhatsApp messaging platform. Paste unlimited numbers,
                            import from Excel/CSV, auto-validate, and send thousands of messages in minutes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/signup" className="btn-primary inline-flex items-center justify-center gap-2">
                                Start Free Trial
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/demo" className="btn-secondary inline-flex items-center justify-center gap-2">
                                Watch Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="text-4xl font-bold text-dark-navy text-center mb-12">
                        Unlimited Bulk Number Input
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MessageSquare className="w-6 h-6 text-trust-blue" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-dark-navy mb-2">Paste Unlimited Numbers</h3>
                                    <p className="text-slate-gray">
                                        Copy and paste thousands of phone numbers at once. Our system handles unlimited input
                                        without any lag or restrictions.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FileSpreadsheet className="w-6 h-6 text-trust-blue" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-dark-navy mb-2">Import from Excel/CSV</h3>
                                    <p className="text-slate-gray">
                                        Drag and drop your Excel or CSV files. We automatically detect phone numbers
                                        and import them into your contact list.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-success-green" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-dark-navy mb-2">Auto-Validation & Formatting</h3>
                                    <p className="text-slate-gray">
                                        Automatically detect and remove duplicates, validate phone numbers,
                                        add country codes, and format numbers correctly.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Upload className="w-6 h-6 text-trust-blue" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-dark-navy mb-2">Bulk Edit & Clean</h3>
                                    <p className="text-slate-gray">
                                        Edit numbers in bulk, remove invalid entries, and clean your contact list
                                        before sending campaigns.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card p-8">
                            <h3 className="text-lg font-semibold text-dark-navy mb-4">Number Input Example</h3>
                            <div className="bg-soft-gray rounded-lg p-4 mb-4 font-mono text-sm">
                                <div className="text-slate-gray mb-2">Paste your numbers here...</div>
                                <div className="space-y-1 text-dark-navy">
                                    <div>+1 234 567 8900</div>
                                    <div>+44 20 1234 5678</div>
                                    <div>+971 50 123 4567</div>
                                    <div>+91 98765 43210</div>
                                    <div className="text-slate-gray">... paste thousands more</div>
                                </div>
                            </div>

                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-success-green">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>1,247 numbers detected</span>
                                </div>
                                <div className="flex items-center gap-2 text-warning-amber">
                                    <AlertCircle className="w-4 h-4" />
                                    <span>12 duplicates removed</span>
                                </div>
                                <div className="flex items-center gap-2 text-error-red">
                                    <AlertCircle className="w-4 h-4" />
                                    <span>3 invalid numbers found</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section-padding bg-soft-gray">
                <div className="container-custom">
                    <h2 className="text-4xl font-bold text-dark-navy text-center mb-12">
                        How It Works
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="card text-center">
                            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                                1
                            </div>
                            <h3 className="text-xl font-semibold text-dark-navy mb-2">Add Contacts</h3>
                            <p className="text-slate-gray">
                                Paste numbers, import CSV/Excel, or sync from your WhatsApp contacts
                            </p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                                2
                            </div>
                            <h3 className="text-xl font-semibold text-dark-navy mb-2">Create Message</h3>
                            <p className="text-slate-gray">
                                Write your message, add images/documents, use templates
                            </p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                                3
                            </div>
                            <h3 className="text-xl font-semibold text-dark-navy mb-2">Send & Track</h3>
                            <p className="text-slate-gray">
                                Send instantly or schedule, then track delivery and engagement
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="text-4xl font-bold text-dark-navy text-center mb-12">
                        Why Choose BulkWaMsg?
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold text-trust-blue mb-2">{benefit.stat}</div>
                                <p className="text-slate-gray">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-primary text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Start Sending Bulk WhatsApp Messages Today
                    </h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Join 10,000+ businesses using BulkWaMsg to reach more customers.
                        Start your free trial—no credit card required.
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

const benefits = [
    { stat: '98.5%', description: 'Average delivery rate' },
    { stat: '10K+', description: 'Active businesses' },
    { stat: '50M+', description: 'Messages sent monthly' },
    { stat: '24/7', description: 'Customer support' },
];
