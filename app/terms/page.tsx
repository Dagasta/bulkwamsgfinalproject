import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
    title: 'Terms of Service - BulkWaMsg',
    description: 'Read our terms of service to understand the rules and regulations for using the BulkWaMsg platform.',
    keywords: ['terms of service', 'terms and conditions', 'user agreement'],
};

export default function TermsPage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            <section className="section-padding bg-white">
                <div className="container-custom max-w-4xl">
                    <h1 className="text-5xl font-bold text-dark-navy mb-6">Terms of Service</h1>
                    <p className="text-slate-gray mb-8">Last updated: February 1, 2026</p>

                    <div className="prose prose-lg max-w-none space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">1. Acceptance of Terms</h2>
                            <p className="text-slate-gray leading-relaxed">
                                By accessing and using BulkWaMsg ("the Service"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">2. Description of Service</h2>
                            <p className="text-slate-gray leading-relaxed">
                                BulkWaMsg provides a platform for sending bulk WhatsApp messages, managing contacts, scheduling campaigns, and analyzing message performance. We reserve the right to modify, suspend, or discontinue any part of the Service at any time.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">3. User Accounts</h2>
                            <h3 className="text-xl font-semibold text-dark-navy mb-3">3.1 Account Creation</h3>
                            <p className="text-slate-gray leading-relaxed mb-4">
                                You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials.
                            </p>
                            <h3 className="text-xl font-semibold text-dark-navy mb-3">3.2 Account Security</h3>
                            <p className="text-slate-gray leading-relaxed">
                                You are responsible for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">4. Acceptable Use Policy</h2>
                            <p className="text-slate-gray leading-relaxed mb-4">
                                You agree NOT to use the Service to:
                            </p>
                            <ul className="list-disc list-inside text-slate-gray space-y-2">
                                <li>Send spam, unsolicited messages, or illegal content</li>
                                <li>Violate WhatsApp's Terms of Service or policies</li>
                                <li>Harass, abuse, or harm others</li>
                                <li>Impersonate any person or entity</li>
                                <li>Distribute malware or viruses</li>
                                <li>Violate any applicable laws or regulations</li>
                                <li>Interfere with the Service's operation</li>
                                <li>Attempt to gain unauthorized access to our systems</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">5. WhatsApp Compliance</h2>
                            <p className="text-slate-gray leading-relaxed">
                                You acknowledge that you are solely responsible for complying with WhatsApp's Terms of Service and Business Policy. BulkWaMsg is not responsible for any account bans or restrictions imposed by WhatsApp.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">6. Subscription and Payments</h2>
                            <h3 className="text-xl font-semibold text-dark-navy mb-3">6.1 Pricing</h3>
                            <p className="text-slate-gray leading-relaxed mb-4">
                                Subscription fees are charged in advance on a monthly basis. Prices are subject to change with 30 days notice.
                            </p>
                            <h3 className="text-xl font-semibold text-dark-navy mb-3">6.2 Refunds</h3>
                            <p className="text-slate-gray leading-relaxed mb-4">
                                We offer a 14-day money-back guarantee on all paid plans. Refunds after 14 days are at our discretion.
                            </p>
                            <h3 className="text-xl font-semibold text-dark-navy mb-3">6.3 Cancellation</h3>
                            <p className="text-slate-gray leading-relaxed">
                                You may cancel your subscription at any time. Cancellations take effect at the end of the current billing period.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">7. Intellectual Property</h2>
                            <p className="text-slate-gray leading-relaxed">
                                The Service and its original content, features, and functionality are owned by BulkWaMsg and are protected by international copyright, trademark, and other intellectual property laws.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">8. User Content</h2>
                            <p className="text-slate-gray leading-relaxed mb-4">
                                You retain all rights to the content you upload to the Service. By uploading content, you grant us a license to use, store, and process that content solely to provide the Service.
                            </p>
                            <p className="text-slate-gray leading-relaxed">
                                You are solely responsible for the content you send through the Service and must ensure you have the right to send messages to your contacts.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">9. Disclaimers</h2>
                            <p className="text-slate-gray leading-relaxed">
                                THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE. WE ARE NOT RESPONSIBLE FOR ANY WHATSAPP ACCOUNT BANS OR RESTRICTIONS.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">10. Limitation of Liability</h2>
                            <p className="text-slate-gray leading-relaxed">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, BULKWAMSG SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE SERVICE.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">11. Termination</h2>
                            <p className="text-slate-gray leading-relaxed">
                                We may terminate or suspend your account immediately, without prior notice, for any violation of these Terms. Upon termination, your right to use the Service will immediately cease.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">12. Changes to Terms</h2>
                            <p className="text-slate-gray leading-relaxed">
                                We reserve the right to modify these Terms at any time. We will notify users of any material changes. Your continued use of the Service after changes constitutes acceptance of the new Terms.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">13. Governing Law</h2>
                            <p className="text-slate-gray leading-relaxed">
                                These Terms shall be governed by the laws of the State of California, United States, without regard to its conflict of law provisions.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-dark-navy mb-4">14. Contact Information</h2>
                            <p className="text-slate-gray leading-relaxed">
                                For questions about these Terms, please contact us at:
                            </p>
                            <p className="text-slate-gray leading-relaxed mt-4">
                                Email: legal@bulkwamsg.com<br />
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
