import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageSquare, Users, Calendar, BarChart3, Shield, Zap, CheckCircle2, Star } from 'lucide-react';

export default function HomePage() {
    return (
        <main className="min-h-screen">
            {/* Navigation */}
            <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                                <MessageSquare className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-dark-navy">BulkWaMsg</span>
                        </div>

                        <div className="hidden md:flex items-center gap-8">
                            <Link href="/features" className="text-slate-gray hover:text-trust-blue font-medium transition-colors">
                                Features
                            </Link>
                            <Link href="/use-cases" className="text-slate-gray hover:text-trust-blue font-medium transition-colors">
                                Use Cases
                            </Link>
                            <Link href="/pricing" className="text-slate-gray hover:text-trust-blue font-medium transition-colors">
                                Pricing
                            </Link>
                            <Link href="/help" className="text-slate-gray hover:text-trust-blue font-medium transition-colors">
                                Help
                            </Link>
                        </div>

                        <div className="flex items-center gap-4">
                            <Link href="/login" className="text-trust-blue font-semibold hover:text-premium-indigo transition-colors">
                                Sign In
                            </Link>
                            <Link href="/signup" className="btn-primary">
                                Start Free Trial
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-soft-gray via-white to-blue-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 animate-fade-in">
                            <div className="inline-flex items-center gap-2 bg-blue-50 text-trust-blue px-4 py-2 rounded-full text-sm font-medium">
                                <Zap className="w-4 h-4" />
                                <span>Trusted by 10,000+ businesses worldwide</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-dark-navy leading-tight">
                                Send Bulk WhatsApp Messages That Actually{' '}
                                <span className="gradient-text">Get Read</span>
                            </h1>

                            <p className="text-xl text-slate-gray leading-relaxed">
                                Reach thousands of customers instantly with the #1 WhatsApp marketing platform.
                                Schedule campaigns, manage contacts, and track results—all in one powerful dashboard.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/signup" className="btn-primary inline-flex items-center justify-center gap-2 text-lg">
                                    Start Free Trial
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link href="/demo" className="btn-secondary inline-flex items-center justify-center gap-2 text-lg">
                                    Watch Demo
                                </Link>
                            </div>

                            <div className="flex items-center gap-8 pt-4">
                                <div>
                                    <div className="flex items-center gap-1 mb-1">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Star key={i} className="w-5 h-5 fill-warning-amber text-warning-amber" />
                                        ))}
                                    </div>
                                    <p className="text-sm text-slate-gray">4.9/5 from 2,000+ reviews</p>
                                </div>
                                <div className="h-12 w-px bg-gray-200" />
                                <div>
                                    <p className="text-2xl font-bold text-dark-navy">50M+</p>
                                    <p className="text-sm text-slate-gray">Messages sent</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative animate-slide-up">
                            <div className="card p-8 shadow-xl">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold">Campaign Dashboard</h3>
                                        <span className="bg-success-green/10 text-success-green px-3 py-1 rounded-full text-sm font-medium">
                                            Active
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <p className="text-sm text-slate-gray mb-1">Messages Sent</p>
                                            <p className="text-2xl font-bold text-trust-blue">12,847</p>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <p className="text-sm text-slate-gray mb-1">Delivery Rate</p>
                                            <p className="text-2xl font-bold text-success-green">98.5%</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-success-green" />
                                            <span className="text-sm">1,247 contacts imported from CSV</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-success-green" />
                                            <span className="text-sm">Campaign scheduled for 9:00 AM</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-success-green" />
                                            <span className="text-sm">Analytics tracking enabled</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-dark-navy mb-4">
                            Everything You Need to Dominate WhatsApp Marketing
                        </h2>
                        <p className="text-xl text-slate-gray max-w-3xl mx-auto">
                            Powerful features designed to help you reach more customers, save time, and grow your business.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="card group hover:border-trust-blue cursor-pointer">
                                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-dark-navy mb-2">{feature.title}</h3>
                                <p className="text-slate-gray leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-primary text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Transform Your WhatsApp Marketing?
                    </h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Join 10,000+ businesses already growing with BulkWaMsg. Start your free trial today—no credit card required.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/signup" className="bg-white text-trust-blue font-semibold px-8 py-4 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 inline-flex items-center justify-center gap-2">
                            Start Free Trial
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/contact" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-trust-blue transition-all duration-200">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dark-navy text-white py-12">
                <div className="container-custom">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                                    <MessageSquare className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-lg font-bold">BulkWaMsg</span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                The #1 bulk WhatsApp messaging platform for businesses.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Product</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                                <li><Link href="/use-cases" className="hover:text-white transition-colors">Use Cases</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Resources</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                                <li><Link href="/tools" className="hover:text-white transition-colors">Free Tools</Link></li>
                                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                                <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                        <p>&copy; 2026 BulkWaMsg. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}

const features = [
    {
        icon: MessageSquare,
        title: 'Bulk Message Sending',
        description: 'Send thousands of WhatsApp messages instantly. Paste unlimited numbers, import from CSV, or sync from your contacts.',
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
