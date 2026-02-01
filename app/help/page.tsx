import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { Search, Book, MessageCircle, Mail, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Help Center - BulkWaMsg | Support & Documentation',
    description: 'Find answers to common questions, tutorials, and guides for using BulkWaMsg effectively.',
    keywords: ['bulkwamsg help', 'whatsapp marketing support', 'bulk messaging guide'],
};

export default function HelpPage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            {/* Hero */}
            <section className="section-padding bg-gradient-to-br from-soft-gray via-white to-blue-50">
                <div className="container-custom text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-dark-navy mb-6">
                        How Can We Help You?
                    </h1>
                    <p className="text-xl text-slate-gray max-w-2xl mx-auto mb-8">
                        Search our knowledge base or browse popular topics below.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-gray" />
                            <input
                                type="text"
                                placeholder="Search for help articles..."
                                className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-200 focus:border-trust-blue focus:ring-2 focus:ring-trust-blue/20 outline-none text-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-4 gap-6 mb-16">
                        {quickLinks.map((link, index) => (
                            <Link key={index} href={link.href} className="card hover:border-trust-blue transition-all group">
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-trust-blue transition-colors">
                                    <link.icon className="w-6 h-6 text-trust-blue group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="font-semibold text-dark-navy mb-2">{link.title}</h3>
                                <p className="text-sm text-slate-gray">{link.description}</p>
                            </Link>
                        ))}
                    </div>

                    {/* Popular Topics */}
                    <h2 className="text-3xl font-bold text-dark-navy mb-8">Popular Topics</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {categories.map((category, index) => (
                            <div key={index} className="card">
                                <h3 className="text-xl font-bold text-dark-navy mb-4">{category.title}</h3>
                                <ul className="space-y-3">
                                    {category.articles.map((article, articleIndex) => (
                                        <li key={articleIndex}>
                                            <Link href={article.href} className="text-trust-blue hover:underline flex items-start gap-2">
                                                <HelpCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                                <span>{article.title}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Support */}
            <section className="section-padding bg-soft-gray">
                <div className="container-custom max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-dark-navy mb-6">
                        Still Need Help?
                    </h2>
                    <p className="text-slate-gray mb-8">
                        Can't find what you're looking for? Our support team is here to help.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Link href="/contact" className="card hover:border-trust-blue transition-all group">
                            <Mail className="w-12 h-12 text-trust-blue mx-auto mb-4" />
                            <h3 className="font-semibold text-dark-navy mb-2">Email Support</h3>
                            <p className="text-sm text-slate-gray mb-4">Get help via email within 24 hours</p>
                            <span className="text-trust-blue font-semibold group-hover:underline">Contact Us →</span>
                        </Link>
                        <div className="card">
                            <MessageCircle className="w-12 h-12 text-trust-blue mx-auto mb-4" />
                            <h3 className="font-semibold text-dark-navy mb-2">Live Chat</h3>
                            <p className="text-sm text-slate-gray mb-4">Chat with our team in real-time</p>
                            <button className="text-trust-blue font-semibold hover:underline">Start Chat →</button>
                        </div>
                    </div>
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

const quickLinks = [
    {
        icon: Book,
        title: 'Getting Started',
        description: 'Learn the basics of BulkWaMsg',
        href: '/help',
    },
    {
        icon: MessageCircle,
        title: 'Send Messages',
        description: 'How to send bulk messages',
        href: '/help',
    },
    {
        icon: Search,
        title: 'Troubleshooting',
        description: 'Fix common issues',
        href: '/help',
    },
    {
        icon: Mail,
        title: 'Contact Support',
        description: 'Get personalized help',
        href: '/contact',
    },
];

const categories = [
    {
        title: 'Getting Started',
        articles: [
            { title: 'How to create an account', href: '/help' },
            { title: 'Connecting your WhatsApp number', href: '/help' },
            { title: 'Importing your first contacts', href: '/help' },
            { title: 'Sending your first campaign', href: '/help' },
        ],
    },
    {
        title: 'Campaign Management',
        articles: [
            { title: 'How to schedule messages', href: '/help' },
            { title: 'Using message templates', href: '/help' },
            { title: 'Personalizing bulk messages', href: '/help' },
            { title: 'Managing campaign analytics', href: '/help' },
        ],
    },
    {
        title: 'Contact Management',
        articles: [
            { title: 'Importing contacts from CSV', href: '/help' },
            { title: 'Creating contact segments', href: '/help' },
            { title: 'Managing contact tags', href: '/help' },
            { title: 'Removing duplicates', href: '/help' },
        ],
    },
    {
        title: 'Billing & Subscriptions',
        articles: [
            { title: 'Understanding pricing plans', href: '/pricing' },
            { title: 'How to upgrade your plan', href: '/pricing' },
            { title: 'Managing your subscription', href: '/pricing' },
            { title: 'Refund policy', href: '/terms' },
        ],
    },
];
