import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

export default function TermsPage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            <section className="pt-32 pb-20">
                <div className="container-custom max-w-4xl">
                    <h1 className="text-5xl font-black text-dark-navy mb-4 tracking-tighter italic">Operational <span className="gradient-text">Terms</span></h1>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-12">Effective: February 2, 2026</p>

                    <div className="prose prose-slate max-w-none space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-dark-navy">1. Acceptable Use Policy</h2>
                            <p className="text-lg text-slate-gray leading-relaxed font-medium">
                                BulkWaMsg is a business communication tool. By using our platform, you agree to comply with all local anti-spam regulations (including CAN-SPAM Act, GDPR, and WhatsApp's Terms of Service).
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-dark-navy">2. User Responsibility</h2>
                            <p className="text-lg text-slate-gray leading-relaxed font-medium">
                                You are solely responsible for the content you dispatch and the consent of your recipients. BulkWaMsg does not provide lead lists and strictly prohibits the use of our software for illegal activities or harassment.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-dark-navy">3. Service Availability</h2>
                            <p className="text-lg text-slate-gray leading-relaxed font-medium">
                                While we strive for 100% uptime, BulkWaMsg is provided "as is". We are not responsible for account bans or service interruptions caused by changes to the WhatsApp protocol.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-dark-navy">4. Subscription Terms</h2>
                            <p className="text-lg text-slate-gray leading-relaxed font-medium">
                                Lite plans are provided for free. Pro/Enterprise subscriptions are billed via PayPal and grant access to advanced features as described on our pricing page. Refund policies are governed by our payment processor agreement.
                            </p>
                        </div>

                        <div className="p-12 bg-dark-navy rounded-[40px] text-white">
                            <h3 className="text-xl font-bold mb-4 italic">Legal Inquiries</h3>
                            <p className="text-slate-400 mb-6 font-medium">For official legal notices or compliance requests, use the channel below.</p>
                            <p className="font-black text-indigo-400">legal@bulkwamsg.com</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
