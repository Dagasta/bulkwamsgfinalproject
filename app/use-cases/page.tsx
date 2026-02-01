import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { Store, Building2, GraduationCap, Heart, Home, Briefcase, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Use Cases - BulkWaMsg | WhatsApp Marketing for Every Industry',
    description: 'Discover how businesses across industries use BulkWaMsg for customer engagement, marketing, and sales.',
    keywords: ['whatsapp use cases', 'whatsapp marketing examples', 'bulk messaging industries'],
};

export default function UseCasesPage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            {/* Hero */}
            <section className="section-padding bg-gradient-to-br from-soft-gray via-white to-blue-50">
                <div className="container-custom text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-dark-navy mb-6">
                        WhatsApp Marketing for Every Business
                    </h1>
                    <p className="text-xl text-slate-gray max-w-3xl mx-auto">
                        See how businesses like yours are using BulkWaMsg to grow their revenue and engage customers.
                    </p>
                </div>
            </section>

            {/* Industry Use Cases */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="text-4xl font-bold text-dark-navy text-center mb-12">Industries We Serve</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry, index) => (
                            <Link key={index} href={industry.link} className="card group hover:border-trust-blue transition-all">
                                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <industry.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-dark-navy mb-2">{industry.title}</h3>
                                <p className="text-slate-gray leading-relaxed mb-4">{industry.description}</p>
                                <span className="text-trust-blue font-semibold group-hover:underline inline-flex items-center gap-1">
                                    View use case <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Use Case */}
            <section className="section-padding bg-soft-gray">
                <div className="container-custom">
                    <div className="card max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-blue-50 text-trust-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
                                    Featured Use Case
                                </div>
                                <h2 className="text-3xl font-bold text-dark-navy mb-4">Real Estate Success Story</h2>
                                <p className="text-slate-gray leading-relaxed mb-6">
                                    See how a real estate agency increased property viewings by 300% using BulkWaMsg to send personalized property alerts to interested buyers.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-success-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2 h-2 bg-success-green rounded-full" />
                                        </div>
                                        <span className="text-slate-gray">5,000+ property alerts sent monthly</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-success-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2 h-2 bg-success-green rounded-full" />
                                        </div>
                                        <span className="text-slate-gray">98% message open rate</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-success-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2 h-2 bg-success-green rounded-full" />
                                        </div>
                                        <span className="text-slate-gray">300% increase in property viewings</span>
                                    </li>
                                </ul>
                                <Link href="/use-cases/real-estate" className="btn-primary inline-flex items-center gap-2">
                                    Read Full Story
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                            <div className="bg-gradient-to-br from-trust-blue to-premium-indigo p-8 rounded-lg text-white">
                                <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                    <Home className="w-32 h-32 text-white/50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Use Cases */}
            <section className="section-padding bg-white">
                <div className="container-custom max-w-4xl">
                    <h2 className="text-4xl font-bold text-dark-navy text-center mb-12">Common Use Cases</h2>
                    <div className="space-y-6">
                        {commonUseCases.map((useCase, index) => (
                            <div key={index} className="card">
                                <h3 className="text-xl font-bold text-dark-navy mb-3">{useCase.title}</h3>
                                <p className="text-slate-gray leading-relaxed mb-4">{useCase.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {useCase.examples.map((example, exampleIndex) => (
                                        <span key={exampleIndex} className="bg-blue-50 text-trust-blue px-3 py-1 rounded-full text-sm">
                                            {example}
                                        </span>
                                    ))}
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
                        Ready to Grow Your Business?
                    </h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Join thousands of businesses using BulkWaMsg to reach their customers on WhatsApp.
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

const industries = [
    {
        icon: Home,
        title: 'Real Estate',
        description: 'Send property alerts, schedule viewings, and nurture leads with automated follow-ups.',
        link: '/use-cases/real-estate',
    },
    {
        icon: Store,
        title: 'E-commerce',
        description: 'Recover abandoned carts, send order updates, and promote flash sales to customers.',
        link: '/use-cases',
    },
    {
        icon: GraduationCap,
        title: 'Education',
        description: 'Share course updates, send admission reminders, and engage with students and parents.',
        link: '/use-cases',
    },
    {
        icon: Heart,
        title: 'Healthcare',
        description: 'Send appointment reminders, health tips, and emergency notifications to patients.',
        link: '/use-cases',
    },
    {
        icon: Building2,
        title: 'Finance',
        description: 'Share market updates, payment reminders, and personalized investment opportunities.',
        link: '/use-cases',
    },
    {
        icon: Briefcase,
        title: 'Professional Services',
        description: 'Schedule consultations, send invoices, and maintain client relationships.',
        link: '/use-cases',
    },
];

const commonUseCases = [
    {
        title: 'Customer Engagement',
        description: 'Keep your customers engaged with timely updates, personalized offers, and valuable content.',
        examples: ['Product launches', 'Special offers', 'Event invitations', 'Newsletters'],
    },
    {
        title: 'Transactional Messages',
        description: 'Send automated notifications for orders, bookings, payments, and deliveries.',
        examples: ['Order confirmations', 'Shipping updates', 'Payment receipts', 'Booking confirmations'],
    },
    {
        title: 'Lead Generation',
        description: 'Capture and nurture leads with automated follow-up sequences and personalized messages.',
        examples: ['Welcome sequences', 'Lead nurturing', 'Demo scheduling', 'Free trial reminders'],
    },
    {
        title: 'Customer Support',
        description: 'Provide instant support, answer FAQs, and resolve issues through WhatsApp.',
        examples: ['Support tickets', 'FAQ responses', 'Troubleshooting guides', 'Feedback collection'],
    },
    {
        title: 'Appointment Reminders',
        description: 'Reduce no-shows with automated appointment reminders and rescheduling options.',
        examples: ['Medical appointments', 'Salon bookings', 'Consultations', 'Service calls'],
    },
];
