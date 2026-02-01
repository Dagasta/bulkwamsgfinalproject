'use client';

import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement actual form submission
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <main className="min-h-screen">
            <Navigation />

            {/* Hero */}
            <section className="section-padding bg-gradient-to-br from-soft-gray via-white to-blue-50">
                <div className="container-custom text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-dark-navy mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-slate-gray max-w-2xl mx-auto">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <div className="card">
                            <h2 className="text-2xl font-bold text-dark-navy mb-6">Send us a Message</h2>

                            {submitted && (
                                <div className="mb-6 p-4 bg-success-green/10 border border-success-green rounded-lg text-success-green">
                                    Thank you! We'll get back to you soon.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <Input
                                    label="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                />

                                <Input
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                />

                                <Input
                                    label="Subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="How can we help?"
                                    required
                                />

                                <div>
                                    <label className="block text-sm font-medium text-dark-navy mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-trust-blue focus:ring-2 focus:ring-trust-blue/20 outline-none transition-all"
                                        placeholder="Tell us more about your inquiry..."
                                        required
                                    />
                                </div>

                                <Button type="submit" className="w-full">
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </Button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-dark-navy mb-6">Contact Information</h2>
                                <p className="text-slate-gray mb-8">
                                    Choose the best way to reach us. We're here to help you succeed with WhatsApp marketing.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-trust-blue" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-dark-navy mb-1">Email Us</h3>
                                        <p className="text-slate-gray text-sm mb-2">For general inquiries and support</p>
                                        <a href="mailto:support@bulkwamsg.com" className="text-trust-blue hover:underline">
                                            support@bulkwamsg.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-trust-blue" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-dark-navy mb-1">Call Us</h3>
                                        <p className="text-slate-gray text-sm mb-2">Mon-Fri, 9am-6pm EST</p>
                                        <a href="tel:+1234567890" className="text-trust-blue hover:underline">
                                            +1 (234) 567-890
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-trust-blue" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-dark-navy mb-1">Visit Us</h3>
                                        <p className="text-slate-gray text-sm">
                                            123 Business Street<br />
                                            Suite 100<br />
                                            San Francisco, CA 94105
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card bg-gradient-primary text-white">
                                <h3 className="text-xl font-bold mb-2">Enterprise Sales</h3>
                                <p className="text-white/80 mb-4">
                                    Need a custom solution for your organization? Our sales team is ready to help.
                                </p>
                                <a href="mailto:sales@bulkwamsg.com" className="text-white font-semibold hover:underline">
                                    sales@bulkwamsg.com
                                </a>
                            </div>
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
