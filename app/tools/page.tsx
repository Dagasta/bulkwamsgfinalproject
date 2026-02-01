import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { Link as LinkIcon, Calculator, QrCode, Phone, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Free WhatsApp Tools - BulkWaMsg',
    description: 'Free WhatsApp marketing tools: link generator, number formatter, QR code generator, and more.',
    keywords: ['whatsapp tools', 'whatsapp link generator', 'free marketing tools'],
};

export default function ToolsPage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            {/* Hero */}
            <section className="section-padding bg-gradient-to-br from-soft-gray via-white to-blue-50">
                <div className="container-custom text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-dark-navy mb-6">
                        Free WhatsApp Marketing Tools
                    </h1>
                    <p className="text-xl text-slate-gray max-w-3xl mx-auto">
                        Powerful, free tools to enhance your WhatsApp marketing. No signup required.
                    </p>
                </div>
            </section>

            {/* Tools Grid */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tools.map((tool, index) => (
                            <Link key={index} href={tool.link} className="card group hover:border-trust-blue transition-all">
                                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <tool.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-dark-navy mb-2">{tool.title}</h3>
                                <p className="text-slate-gray leading-relaxed mb-4">{tool.description}</p>
                                <div className="flex items-center gap-2">
                                    <span className="bg-success-green/10 text-success-green px-3 py-1 rounded-full text-xs font-medium">
                                        Free
                                    </span>
                                    {tool.popular && (
                                        <span className="bg-warning-amber/10 text-warning-amber px-3 py-1 rounded-full text-xs font-medium">
                                            Popular
                                        </span>
                                    )}
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <span className="text-trust-blue font-semibold group-hover:underline inline-flex items-center gap-1">
                                        Use tool <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Use Our Tools */}
            <section className="section-padding bg-soft-gray">
                <div className="container-custom max-w-4xl">
                    <h2 className="text-4xl font-bold text-dark-navy text-center mb-12">
                        Why Use Our Free Tools?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="card">
                                <h3 className="text-xl font-bold text-dark-navy mb-3">{benefit.title}</h3>
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
                        Need More Powerful Features?
                    </h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Upgrade to BulkWaMsg for advanced bulk messaging, scheduling, analytics, and more.
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

const tools = [
    {
        icon: LinkIcon,
        title: 'WhatsApp Link Generator',
        description: 'Create click-to-chat links for your website, social media, or marketing campaigns.',
        link: '/tools/whatsapp-link-generator',
        popular: true,
    },
    {
        icon: QrCode,
        title: 'WhatsApp QR Code Generator',
        description: 'Generate QR codes that open WhatsApp chats when scanned.',
        link: '/tools',
        popular: false,
    },
    {
        icon: Phone,
        title: 'Phone Number Formatter',
        description: 'Format phone numbers to international WhatsApp format automatically.',
        link: '/tools',
        popular: false,
    },
    {
        icon: Calculator,
        title: 'Campaign ROI Calculator',
        description: 'Calculate the potential return on investment for your WhatsApp campaigns.',
        link: '/tools',
        popular: false,
    },
    {
        icon: LinkIcon,
        title: 'Message Template Builder',
        description: 'Create and preview WhatsApp message templates with variables.',
        link: '/tools',
        popular: false,
    },
    {
        icon: Calculator,
        title: 'Contact List Validator',
        description: 'Validate and clean your contact lists before importing.',
        link: '/tools',
        popular: false,
    },
];

const benefits = [
    {
        title: 'Completely Free',
        description: 'All our tools are 100% free to use. No hidden fees, no signup required for basic features.',
    },
    {
        title: 'No Limits',
        description: 'Use our tools as many times as you need. No daily limits or usage restrictions.',
    },
    {
        title: 'Privacy First',
        description: 'We don\'t store your data. Everything is processed locally in your browser.',
    },
    {
        title: 'Always Updated',
        description: 'Our tools are regularly updated to work with the latest WhatsApp features and requirements.',
    },
];
