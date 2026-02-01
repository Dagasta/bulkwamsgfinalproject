import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { ArrowRight, Target, Users, Zap, Shield, Heart, Globe } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About Us - BulkWaMsg | Leading WhatsApp Marketing Platform',
    description: 'Learn about BulkWaMsg\'s mission to revolutionize business communication through WhatsApp. Trusted by 10,000+ businesses worldwide.',
    keywords: ['about bulkwamsg', 'whatsapp marketing company', 'bulk messaging platform'],
};

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-soft-gray via-white to-blue-50">
                <div className="container-custom text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-dark-navy mb-6">
                        Revolutionizing Business Communication
                    </h1>
                    <p className="text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed">
                        We're on a mission to help businesses of all sizes reach their customers instantly through WhatsApp—the world's most popular messaging platform.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="card">
                            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                                <Target className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">Our Mission</h2>
                            <p className="text-slate-gray leading-relaxed">
                                To empower businesses with the tools they need to connect with customers at scale,
                                making WhatsApp marketing accessible, affordable, and effective for everyone.
                            </p>
                        </div>

                        <div className="card">
                            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                                <Globe className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">Our Vision</h2>
                            <p className="text-slate-gray leading-relaxed">
                                To become the world's #1 WhatsApp marketing platform, helping millions of businesses
                                grow through meaningful customer conversations and automated messaging at scale.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="section-padding bg-soft-gray">
                <div className="container-custom max-w-4xl">
                    <h2 className="text-4xl font-bold text-dark-navy text-center mb-12">Our Story</h2>
                    <div className="card">
                        <p className="text-slate-gray leading-relaxed mb-4">
                            BulkWaMsg was born from a simple observation: businesses were struggling to reach their customers
                            effectively. Email open rates were declining, SMS was expensive, and traditional marketing channels
                            were becoming less effective.
                        </p>
                        <p className="text-slate-gray leading-relaxed mb-4">
                            Meanwhile, WhatsApp had become the primary communication channel for billions of people worldwide,
                            with open rates exceeding 98%. Yet, there was no easy, affordable way for businesses to leverage
                            this powerful platform at scale.
                        </p>
                        <p className="text-slate-gray leading-relaxed">
                            We built BulkWaMsg to bridge this gap—creating a platform that makes WhatsApp marketing simple,
                            compliant, and incredibly effective. Today, we're proud to serve over 10,000 businesses across
                            150+ countries, helping them send millions of messages and grow their revenue.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="text-4xl font-bold text-dark-navy text-center mb-12">Our Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="card text-center">
                                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-dark-navy mb-3">{value.title}</h3>
                                <p className="text-slate-gray">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section-padding bg-gradient-primary text-white">
                <div className="container-custom">
                    <h2 className="text-4xl font-bold text-center mb-12">BulkWaMsg by the Numbers</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                                <div className="text-white/80">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-bold text-dark-navy mb-6">
                        Join Thousands of Growing Businesses
                    </h2>
                    <p className="text-xl text-slate-gray mb-8 max-w-2xl mx-auto">
                        Start your free trial today and see why businesses worldwide trust BulkWaMsg for their WhatsApp marketing.
                    </p>
                    <Link href="/signup" className="btn-primary inline-flex items-center gap-2">
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

const values = [
    {
        icon: Users,
        title: 'Customer First',
        description: 'Every decision we make starts with our customers. Their success is our success.',
    },
    {
        icon: Zap,
        title: 'Innovation',
        description: 'We constantly push boundaries to deliver cutting-edge features and capabilities.',
    },
    {
        icon: Shield,
        title: 'Trust & Security',
        description: 'We protect your data and ensure compliance with the highest security standards.',
    },
    {
        icon: Heart,
        title: 'Simplicity',
        description: 'Complex technology, simple interface. We make powerful tools accessible to everyone.',
    },
    {
        icon: Target,
        title: 'Results Driven',
        description: 'We measure success by the results our customers achieve with our platform.',
    },
    {
        icon: Globe,
        title: 'Global Impact',
        description: 'Serving businesses worldwide, breaking down communication barriers everywhere.',
    },
];

const stats = [
    { value: '10,000+', label: 'Active Businesses' },
    { value: '50M+', label: 'Messages Sent' },
    { value: '150+', label: 'Countries Served' },
    { value: '98.5%', label: 'Delivery Rate' },
];
