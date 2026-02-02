import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { Search, Book, MessageCircle, HelpCircle, Zap, Shield } from 'lucide-react';

export default function HelpPage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            <section className="pt-32 pb-20 bg-slate-50">
                <div className="container-custom text-center">
                    <h1 className="text-5xl md:text-7xl font-black text-dark-navy mb-12 tracking-tighter italic">Support <span className="gradient-text">Hub</span></h1>

                    <div className="max-w-2xl mx-auto relative group">
                        <div className="absolute -inset-1 bg-gradient-primary opacity-20 rounded-[40px] blur transition-all group-focus-within:opacity-40"></div>
                        <div className="relative bg-white p-2 rounded-[38px] shadow-2xl flex items-center gap-4">
                            <Search className="w-6 h-6 text-slate-300 ml-6" />
                            <input type="text" placeholder="Search for solutions..." className="flex-1 py-4 font-bold text-dark-navy outline-none" />
                            <button className="bg-dark-navy text-white px-8 py-4 rounded-[30px] font-black text-xs uppercase tracking-widest hover:bg-black transition-all">Search</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: Zap,
                                title: 'Getting Started',
                                desc: 'Learn how to link your device and launch your first mission in under 60 seconds.'
                            },
                            {
                                icon: Shield,
                                title: 'Account Safety',
                                desc: 'Best practices for keeping your WhatsApp node healthy and avoiding security flags.'
                            },
                            {
                                icon: Book,
                                title: 'Enterprise API',
                                desc: 'The technical documentation for integrating BulkWaMsg with your existing CRM.'
                            }
                        ].map((card, i) => (
                            <div key={i} className="card p-10 rounded-[40px] border-none shadow-xl bg-white hover:-translate-y-2 transition-all">
                                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-trust-blue mb-8">
                                    <card.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-dark-navy mb-4">{card.title}</h3>
                                <p className="text-slate-gray font-medium leading-relaxed mb-8">{card.desc}</p>
                                <button className="text-xs font-black text-trust-blue uppercase tracking-widest flex items-center gap-2 group">
                                    Read Articles
                                    <div className="w-8 h-px bg-trust-blue group-hover:w-16 transition-all"></div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container-custom max-w-4xl">
                    <h2 className="text-4xl font-black text-dark-navy mb-12 italic">Common Queries</h2>
                    <div className="space-y-6">
                        {[
                            { q: 'Is there a limit on how many messages I can send?', a: 'On the Enterprise (Pro) plan, there are no software-imposed limits. However, we recommend following our safety guidelines to avoid being flagged by WhatsApp.' },
                            { q: 'Can I send images and PDF documents?', a: 'Yes! Our high-speed dispatch tool supports HD images, PDF documents, and videos up to 16MB.' },
                            { q: 'Do I need to pay for the official WhatsApp Business API?', a: 'No. BulkWaMsg works by securely linking your existing WhatsApp account via our multi-device protocol, bypassing the need for expensive API costs.' },
                            { q: 'What happens if my account gets banned?', a: 'We provide extensive safety protocols like variable delays and content rotation. If a ban occurs, our team can guide you on the recovery process, but following our safety tips makes this rare.' }
                        ].map((faq, i) => (
                            <div key={i} className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 italic">
                                <h4 className="text-xl font-black text-dark-navy mb-2 tracking-tight">Q: {faq.q}</h4>
                                <p className="text-slate-gray font-medium">A: {faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
