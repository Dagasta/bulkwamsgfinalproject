import { Metadata } from 'next';
import Link from 'next/link';
import { Check, X, ArrowRight, Zap, Shield, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pricing - BulkWaMsg | Affordable WhatsApp Bulk Messaging Plans',
    description: 'Choose the perfect plan for your business. Start free or upgrade to send unlimited WhatsApp messages. Flexible pricing with no hidden fees.',
    keywords: ['bulk whatsapp pricing', 'whatsapp marketing pricing', 'bulk messaging plans', 'whatsapp sender cost'],
};

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-soft-gray">
            {/* Navigation - Same as homepage */}
            <nav className="border-b border-gray-100 bg-white">
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">BW</span>
                            </div>
                            <span className="text-xl font-bold text-dark-navy">BulkWaMsg</span>
                        </Link>

                        <div className="flex items-center gap-4">
                            <Link href="/login" className="text-trust-blue font-semibold">
                                Sign In
                            </Link>
                            <Link href="/signup" className="btn-primary">
                                Start Free Trial
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="section-padding bg-white">
                <div className="container-custom text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-dark-navy mb-6">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-xl text-slate-gray max-w-2xl mx-auto mb-4">
                        Choose the perfect plan for your business. No hidden fees, cancel anytime.
                    </p>
                    <div className="inline-flex items-center gap-2 bg-green-50 text-success-green px-4 py-2 rounded-full text-sm font-medium">
                        <Zap className="w-4 h-4" />
                        <span>Start free, upgrade as you grow</span>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Free Plan */}
                        <div className="card">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-dark-navy mb-2">Free</h3>
                                <p className="text-slate-gray">Perfect for testing</p>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-bold text-dark-navy">$0</span>
                                    <span className="text-slate-gray">/month</span>
                                </div>
                            </div>

                            <Link href="/signup" className="btn-secondary w-full mb-6 text-center">
                                Get Started Free
                            </Link>

                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">50 messages/month</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">100 contacts</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">Basic features</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">Email support</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-400">Advanced analytics</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-400">API access</span>
                                </div>
                            </div>
                        </div>

                        {/* Starter Plan - Most Popular */}
                        <div className="card border-2 border-trust-blue relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-trust-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                                Most Popular
                            </div>

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-dark-navy mb-2">Starter</h3>
                                <p className="text-slate-gray">For growing businesses</p>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-bold text-dark-navy">$29</span>
                                    <span className="text-slate-gray">/month</span>
                                </div>
                            </div>

                            <Link href="/signup?plan=starter" className="btn-primary w-full mb-6 text-center">
                                Start 14-Day Trial
                            </Link>

                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium">5,000 messages/month</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium">1,000 contacts</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium">All core features</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium">Campaign scheduling</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium">Basic analytics</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium">Priority email support</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-400">API access</span>
                                </div>
                            </div>
                        </div>

                        {/* Professional Plan */}
                        <div className="card">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-dark-navy mb-2">Professional</h3>
                                <p className="text-slate-gray">For power users</p>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-bold text-dark-navy">$79</span>
                                    <span className="text-slate-gray">/month</span>
                                </div>
                            </div>

                            <Link href="/signup?plan=pro" className="btn-primary w-full mb-6 text-center">
                                Start 14-Day Trial
                            </Link>

                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium">25,000 messages/month</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium">10,000 contacts</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium">All features included</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium">Advanced analytics</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium">API access</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium">Priority support</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium">Custom integrations</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enterprise */}
                    <div className="card max-w-4xl mx-auto mt-8 bg-gradient-to-br from-dark-navy to-premium-indigo text-white">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-3xl font-bold mb-4">Enterprise</h3>
                                <p className="text-white/80 mb-6">
                                    Custom solutions for large organizations. Unlimited messages, dedicated support, and custom features.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-success-green" />
                                        <span>Unlimited messages & contacts</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-success-green" />
                                        <span>Dedicated account manager</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-success-green" />
                                        <span>Custom integrations & features</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-success-green" />
                                        <span>SLA guarantee</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center md:text-right">
                                <p className="text-4xl font-bold mb-6">Custom Pricing</p>
                                <Link href="/contact?plan=enterprise" className="bg-white text-trust-blue font-semibold px-8 py-4 rounded-lg hover:shadow-xl transition-all inline-flex items-center gap-2">
                                    Contact Sales
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Comparison */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-dark-navy text-center mb-12">
                        All Plans Include
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-trust-blue" />
                            </div>
                            <h3 className="font-semibold text-dark-navy mb-2">Anti-Spam Protection</h3>
                            <p className="text-sm text-slate-gray">Built-in safety features to prevent bans</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BarChart3 className="w-8 h-8 text-trust-blue" />
                            </div>
                            <h3 className="font-semibold text-dark-navy mb-2">Real-Time Analytics</h3>
                            <p className="text-sm text-slate-gray">Track delivery and engagement rates</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-8 h-8 text-trust-blue" />
                            </div>
                            <h3 className="font-semibold text-dark-navy mb-2">Lightning Fast</h3>
                            <p className="text-sm text-slate-gray">Send thousands of messages instantly</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding">
                <div className="container-custom max-w-3xl">
                    <h2 className="text-3xl font-bold text-dark-navy text-center mb-12">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="card">
                                <h3 className="font-semibold text-dark-navy mb-2">{faq.question}</h3>
                                <p className="text-slate-gray">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-primary text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Start your 14-day free trial today. No credit card required.
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

const faqs = [
    {
        question: 'Can I change plans anytime?',
        answer: 'Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately.',
    },
    {
        question: 'What happens if I exceed my message limit?',
        answer: 'Your campaigns will be paused until the next billing cycle. You can upgrade your plan anytime to continue sending.',
    },
    {
        question: 'Do you offer refunds?',
        answer: 'We offer a 14-day money-back guarantee on all paid plans. No questions asked.',
    },
    {
        question: 'Is there a setup fee?',
        answer: 'No setup fees, no hidden charges. You only pay for your chosen plan.',
    },
    {
        question: 'Can I use my own WhatsApp number?',
        answer: 'Yes! You connect your own WhatsApp account via QR code. We never ask for your password.',
    },
];
