import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            <section className="pt-32 pb-20">
                <div className="container-custom max-w-4xl">
                    <h1 className="text-5xl font-black text-dark-navy mb-4 tracking-tighter italic">Privacy <span className="gradient-text">Protocol</span></h1>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-12">Last Updated: February 2, 2026</p>

                    <div className="prose prose-slate max-w-none space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-dark-navy">1. Data Sovereignty</h2>
                            <p className="text-lg text-slate-gray leading-relaxed font-medium">
                                BulkWaMsg is built on a "Privacy First" architecture. We do not store your contacts, message contents, or media on our servers. All data remains on your local device and is transmitted directly through the WhatsApp protocol.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-dark-navy">2. Information Collection</h2>
                            <p className="text-lg text-slate-gray leading-relaxed font-medium">
                                We only collect essential account information required for service operation:
                            </p>
                            <ul className="list-disc pl-6 space-y-4 text-slate-gray font-medium">
                                <li>Email address for account authentication.</li>
                                <li>Payment information processed securely via PayPal.</li>
                                <li>Basic usage telemetry to improve system performance.</li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-dark-navy">3. Third-Party Protocols</h2>
                            <p className="text-lg text-slate-gray leading-relaxed font-medium">
                                We use Supabase for secure database management and PayPal for transaction security. Both partners adhere to global financial and data protection standards.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-dark-navy">4. Signal Security</h2>
                            <p className="text-lg text-slate-gray leading-relaxed font-medium">
                                Your WhatsApp connection uses the official Baileys multi-device protocol, which provides end-to-end encryption for all dispatched signals. BulkWaMsg never sees your actual WhatsApp messages.
                            </p>
                        </div>

                        <div className="p-12 bg-slate-50 rounded-[40px] border border-slate-100">
                            <h3 className="text-xl font-bold text-dark-navy mb-4">Contact Privacy Officer</h3>
                            <p className="text-slate-gray mb-6">If you have concerns about your data matrix, contact our protocol lead.</p>
                            <p className="font-black text-trust-blue">privacy@bulkwamsg.com</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
