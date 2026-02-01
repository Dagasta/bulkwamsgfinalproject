import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { MessageSquare, Calendar, Users, BarChart3, Shield, Zap, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Features - BulkWaMsg | Powerful WhatsApp Marketing Tools',
    description: 'Explore all BulkWaMsg features: bulk messaging, contact management, campaign scheduling, analytics, and more.',
    keywords: ['whatsapp features', 'bulk messaging features', 'whatsapp marketing tools'],
};

export default function FeaturesPage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            {/* Hero */}
            <section className="section-padding bg-gradient-to-br from-soft-gray via-white to-blue-50">
                <div className="container-custom text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-dark-navy mb-6">
                        Everything You Need to Succeed
                    </h1>
                    <p className="text-xl text-slate-gray max-w-3xl mx-auto">
                        Powerful features designed to help you reach more customers, save time, and grow your business through WhatsApp marketing.
                    </p>
                </div>
            </section>

            {/* Core Features */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="text-4xl font-bold text-dark-navy text-center mb-12">Core Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreFeatures.map((feature, index) => (
                            <div key={index} className="card group hover:border-trust-blue cursor-pointer">
                                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-dark-navy mb-2">{feature.title}</h3>
                                <p className="text-slate-gray leading-relaxed mb-4">{feature.description}</p>
                                {feature.link && (
                                    <Link href={feature.link} className="text-trust-blue font-semibold hover:underline inline-flex items-center gap-1">
                                        Learn more <ArrowRight className="w-4 h-4" />
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Highlights */}
            <section className="section-padding bg-soft-gray">
                <div className="container-custom">
                    {highlights.map((highlight, index) => (
                        <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center mb-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                <div className="inline-flex items-center gap-2 bg-blue-50 text-trust-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
                                    {highlight.badge}
                                </div>
                                <h2 className="text-3xl font-bold text-dark-navy mb-4">{highlight.title}</h2>
                                <p className="text-slate-gray leading-relaxed mb-6">{highlight.description}</p>
                                <ul className="space-y-3">
                                    {highlight.points.map((point, pointIndex) => (
                                        <li key={pointIndex} className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-success-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <div className="w-2 h-2 bg-success-green rounded-full" />
                                            </div>
                                            <span className="text-slate-gray">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                <div className="card bg-gradient-to-br from-trust-blue to-premium-indigo p-8 text-white">
                                    <div className="aspect-video bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                        <highlight.icon className="w-24 h-24 text-white/50" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-primary text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Experience These Features?
                    </h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Start your free trial and see how BulkWaMsg can transform your WhatsApp marketing.
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

const coreFeatures = [
    {
        icon: MessageSquare,
        title: 'Bulk Message Sending',
        description: 'Send thousands of WhatsApp messages instantly. Paste unlimited numbers, import from CSV, or sync from your contacts.',
        link: '/features/bulk-messaging',
    },
    {
        icon: Calendar,
        title: 'Smart Scheduling',
        description: 'Schedule campaigns for optimal send times. Create sequences, recurring messages, and automated follow-ups.',
    },
    {
        icon: Users,
        title: 'Contact Management',
        description: 'Organize contacts with tags, segments, and custom fields. Excel-style table for easy bulk editing.',
    },
    {
        icon: BarChart3,
        title: 'Campaign Analytics',
        description: 'Track delivery rates, read receipts, and response rates. Export detailed reports in PDF or Excel.',
    },
    {
        icon: Shield,
        title: 'Anti-Spam Protection',
        description: 'Built-in safety features to prevent bans. Smart delays, message rotation, and account health monitoring.',
    },
    {
        icon: Zap,
        title: 'Lightning Fast',
        description: 'Send messages at scale without compromising speed. Optimized for high-volume campaigns.',
    },
];

const highlights = [
    {
        icon: MessageSquare,
        badge: 'Most Popular',
        title: 'Unlimited Number Input',
        description: 'Never worry about contact limits again. Our advanced system handles unlimited phone numbers with automatic validation and formatting.',
        points: [
            'Paste unlimited numbers directly',
            'Import from CSV, Excel, or Google Sheets',
            'Automatic duplicate removal',
            'International number formatting',
            'Invalid number detection',
        ],
    },
    {
        icon: Calendar,
        badge: 'Time Saver',
        title: 'Advanced Campaign Scheduling',
        description: 'Set it and forget it. Schedule your campaigns to send at the perfect time, even when you\'re sleeping.',
        points: [
            'Schedule for specific dates and times',
            'Recurring campaigns (daily, weekly, monthly)',
            'Timezone-aware scheduling',
            'Automated follow-up sequences',
            'Campaign queue management',
        ],
    },
    {
        icon: BarChart3,
        badge: 'Data Driven',
        title: 'Comprehensive Analytics',
        description: 'Make informed decisions with detailed insights into your campaign performance and customer engagement.',
        points: [
            'Real-time delivery tracking',
            'Read receipt monitoring',
            'Response rate analytics',
            'Export reports in PDF/Excel',
            'Historical data comparison',
        ],
    },
];
