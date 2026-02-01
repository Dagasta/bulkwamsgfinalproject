import { Metadata } from 'next';
import Link from 'next/link';
import { Home, TrendingUp, Users, Calendar, BarChart3, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'WhatsApp Marketing for Real Estate Agents - Close More Deals | BulkWaMsg',
    description: 'Real estate agents use BulkWaMsg to send property listings, schedule viewings, and follow up with leads via WhatsApp. Close more deals with instant bulk messaging.',
    keywords: ['whatsapp for real estate', 'real estate whatsapp marketing', 'property listings whatsapp', 'real estate bulk messaging'],
};

export default function RealEstateUseCasePage() {
    return (
        <main className="min-h-screen">
            {/* Navigation */}
            <nav className="border-b border-gray-100 bg-white">
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                                <Home className="w-6 h-6 text-white" />
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
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-trust-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Home className="w-4 h-4" />
                            <span>For Real Estate Professionals</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-dark-navy mb-6">
                            Close More Real Estate Deals with <span className="gradient-text">WhatsApp Marketing</span>
                        </h1>
                        <p className="text-xl text-slate-gray mb-8 leading-relaxed">
                            Send property listings, schedule viewings, and follow up with leads instantly.
                            Real estate agents using BulkWaMsg close 3x more deals.
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

            {/* Use Cases */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="text-4xl font-bold text-dark-navy text-center mb-12">
                        How Real Estate Agents Use BulkWaMsg
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="card">
                                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                                    <useCase.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-dark-navy mb-2">{useCase.title}</h3>
                                <p className="text-slate-gray mb-4">{useCase.description}</p>
                                <div className="bg-soft-gray rounded-lg p-3 text-sm font-mono text-slate-gray">
                                    {useCase.example}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section-padding bg-soft-gray">
                <div className="container-custom">
                    <h2 className="text-4xl font-bold text-dark-navy text-center mb-12">
                        Why Real Estate Agents Love BulkWaMsg
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="card text-center">
                                <div className="text-4xl font-bold text-trust-blue mb-2">{benefit.stat}</div>
                                <p className="text-slate-gray">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="text-4xl font-bold text-dark-navy text-center mb-12">
                        Features Built for Real Estate
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-success-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white text-sm">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-navy mb-1">{feature.title}</h3>
                                    <p className="text-sm text-slate-gray">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="section-padding bg-soft-gray">
                <div className="container-custom max-w-4xl">
                    <div className="card bg-white p-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                JD
                            </div>
                            <div>
                                <h3 className="font-semibold text-dark-navy">John Doe</h3>
                                <p className="text-slate-gray">Real Estate Agent, Dubai</p>
                            </div>
                        </div>
                        <p className="text-lg text-slate-gray italic mb-4">
                            "BulkWaMsg transformed my real estate business. I can now send property listings
                            to hundreds of potential buyers instantly. My closing rate increased by 40% in just 3 months!"
                        </p>
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <span key={i} className="text-warning-amber text-xl">★</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-primary text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Close More Deals?
                    </h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Join hundreds of real estate agents using BulkWaMsg to grow their business.
                        Start your free trial today—no credit card required.
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

const useCases = [
    {
        icon: Home,
        title: 'Send Property Listings',
        description: 'Share new listings with your entire database instantly. Include photos, prices, and details.',
        example: '🏡 New Listing!\n3BR Villa in Dubai Marina\n$2.5M | 2,500 sqft\nView: bit.ly/villa123',
    },
    {
        icon: Calendar,
        title: 'Schedule Viewings',
        description: 'Send viewing reminders and confirmations automatically. Reduce no-shows by 60%.',
        example: 'Hi John! Reminder: Property viewing tomorrow at 2 PM\n📍 Dubai Marina\nSee you there!',
    },
    {
        icon: Users,
        title: 'Follow Up with Leads',
        description: 'Stay top-of-mind with automated follow-ups. Never lose a lead again.',
        example: 'Hi Sarah! Still interested in 2BR apartments in JBR? I have 3 new options for you!',
    },
    {
        icon: TrendingUp,
        title: 'Market Updates',
        description: 'Keep clients informed about market trends and price changes in their areas of interest.',
        example: '📊 Market Update: Dubai Marina prices up 5% this month. Great time to sell!',
    },
];

const benefits = [
    { stat: '3x', description: 'More deals closed' },
    { stat: '98%', description: 'Message open rate' },
    { stat: '60%', description: 'Fewer no-shows' },
];

const features = [
    { title: 'Bulk Property Listings', description: 'Send to thousands of buyers at once' },
    { title: 'Image & Document Sharing', description: 'Include photos, floor plans, brochures' },
    { title: 'Contact Segmentation', description: 'Group by budget, location, property type' },
    { title: 'Automated Reminders', description: 'Schedule viewing and payment reminders' },
    { title: 'Lead Tracking', description: 'Track which properties get the most interest' },
    { title: 'Quick Templates', description: 'Pre-built messages for common scenarios' },
];
