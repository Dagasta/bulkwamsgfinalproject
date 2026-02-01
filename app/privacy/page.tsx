import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
    title: 'Privacy Policy - BulkWaMsg',
    description: 'Learn how BulkWaMsg collects, uses, and protects your personal information. GDPR compliant privacy policy.',
    keywords: ['privacy policy', 'data protection', 'gdpr compliance'],
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            <section className="section-padding bg-white">
                <div className="container-custom max-w-4xl">
                    <h1 className="text-5xl font-bold text-dark-navy mb-6">Privacy Policy</h1>
                    <p className="text-slate-gray mb-8">Last updated: February 1, 2026</p>

                    <div className="prose prose-lg max-w-none space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">1. Introduction</h2>
                            <p className="text-slate-gray leading-relaxed">
                                BulkWaMsg ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our WhatsApp bulk messaging platform.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">2. Information We Collect</h2>
                            <h3 className="text-xl font-semibold text-dark-navy mb-3">2.1 Personal Information</h3>
                            <p className="text-slate-gray leading-relaxed mb-4">
                                We collect information that you provide directly to us, including:
                            </p>
                            <ul className="list-disc list-inside text-slate-gray space-y-2 mb-4">
                                <li>Name and email address</li>
                                <li>Phone number and WhatsApp account information</li>
                                <li>Payment and billing information</li>
                                <li>Contact lists and message content</li>
                                <li>Communication preferences</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-dark-navy mb-3">2.2 Automatically Collected Information</h3>
                            <p className="text-slate-gray leading-relaxed mb-4">
                                When you use our services, we automatically collect:
                            </p>
                            <ul className="list-disc list-inside text-slate-gray space-y-2">
                                <li>Device information and IP address</li>
                                <li>Browser type and operating system</li>
                                <li>Usage data and analytics</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">3. How We Use Your Information</h2>
                            <p className="text-slate-gray leading-relaxed mb-4">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc list-inside text-slate-gray space-y-2">
                                <li>Provide, maintain, and improve our services</li>
                                <li>Process your transactions and send messages</li>
                                <li>Send you technical notices and support messages</li>
                                <li>Respond to your comments and questions</li>
                                <li>Monitor and analyze trends and usage</li>
                                <li>Detect and prevent fraud and abuse</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">4. Information Sharing</h2>
                            <p className="text-slate-gray leading-relaxed mb-4">
                                We do not sell your personal information. We may share your information with:
                            </p>
                            <ul className="list-disc list-inside text-slate-gray space-y-2">
                                <li>Service providers who assist in our operations</li>
                                <li>Payment processors for billing purposes</li>
                                <li>Law enforcement when required by law</li>
                                <li>Other parties with your consent</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">5. Data Security</h2>
                            <p className="text-slate-gray leading-relaxed">
                                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">6. Your Rights</h2>
                            <p className="text-slate-gray leading-relaxed mb-4">
                                You have the right to:
                            </p>
                            <ul className="list-disc list-inside text-slate-gray space-y-2">
                                <li>Access your personal information</li>
                                <li>Correct inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Object to processing of your data</li>
                                <li>Export your data</li>
                                <li>Withdraw consent at any time</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">7. Data Retention</h2>
                            <p className="text-slate-gray leading-relaxed">
                                We retain your information for as long as necessary to provide our services and comply with legal obligations. When you delete your account, we will delete your personal information within 30 days.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">8. International Data Transfers</h2>
                            <p className="text-slate-gray leading-relaxed">
                                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">9. Children's Privacy</h2>
                            <p className="text-slate-gray leading-relaxed">
                                Our services are not intended for children under 18. We do not knowingly collect personal information from children.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">10. Changes to This Policy</h2>
                            <p className="text-slate-gray leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">11. Contact Us</h2>
                            <p className="text-slate-gray leading-relaxed">
                                If you have questions about this Privacy Policy, please contact us at:
                            </p>
                            <p className="text-slate-gray leading-relaxed mt-4">
                                Email: privacy@bulkwamsg.com<br />
                                Address: 123 Business Street, Suite 100, San Francisco, CA 94105
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
