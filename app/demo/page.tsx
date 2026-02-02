import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { Play, CheckCircle2, ArrowRight, Zap, Shield, Search, Upload, BarChart3, MessageSquare, Users, Send } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Product Demo - BulkWaMsg | See How It Works',
    description: 'Watch our interactive demo to see how BulkWaMsg makes WhatsApp marketing simple and effective. Learn how to send bulk messages in minutes.',
    keywords: ['bulkwamsg demo', 'whatsapp marketing demo', 'bulk messaging tutorial'],
};

export default function DemoPage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-slate-50">
                <div className="container-custom text-center">
                    <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-trust-blue px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8">
                        Interactive Walkthrough
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-dark-navy mb-6 tracking-tighter">
                        Experience the <span className="gradient-text">Efficiency.</span>
                    </h1>
                    <p className="text-xl text-slate-gray max-w-2xl mx-auto font-medium">
                        Discover how BulkWaMsg transforms your marketing from manual labor to automated hyper-growth.
                    </p>
                </div>
            </section>

            {/* Step-by-Step Visual Explanation */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="space-y-32">
                        {/* Phase 1: Connection */}
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-8">
                                <div className="w-16 h-16 bg-indigo-50 rounded-3xl flex items-center justify-center text-trust-blue shadow-inner">
                                    <Zap className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl font-black text-dark-navy tracking-tight">Phase 01: <br /> Secure Neural Link</h2>
                                <p className="text-xl text-slate-gray leading-relaxed font-medium">
                                    Link your WhatsApp account in seconds using our encrypted QR protocol. No passwords, no API approvals, no verification waits.
                                </p>
                                <ul className="space-y-4">
                                    {['Multi-device compatibility', '100% end-to-end encryption', 'Instant connection status'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-dark-navy font-bold">
                                            <CheckCircle2 className="w-5 h-5 text-success-green" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-primary opacity-5 blur-3xl rounded-[60px] group-hover:opacity-10 transition-opacity"></div>
                                <div className="relative bg-white p-4 rounded-[48px] border border-slate-100 shadow-2xl">
                                    <div className="bg-slate-50 rounded-[40px] aspect-[4/3] flex flex-col items-center justify-center border border-dashed border-slate-200">
                                        <div className="w-48 h-48 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-8 relative">
                                            <div className="absolute inset-0 border-4 border-indigo-100 rounded-3xl animate-pulse"></div>
                                            <Search className="w-20 h-20 text-slate-100" />
                                        </div>
                                        <p className="text-slate-400 font-black uppercase tracking-widest text-xs">Waiting for Neural Sync...</p>
                                    </div>
                                    <div className="absolute top-10 right-10 bg-success-green text-white px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl">
                                        SECURE PROTOCOL v5.2
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phase 2: Audience */}
                        <div className="grid lg:grid-cols-2 gap-20 items-center lg:flex-row-reverse">
                            <div className="lg:order-2 space-y-8">
                                <div className="w-16 h-16 bg-emerald-50 rounded-3xl flex items-center justify-center text-success-green shadow-inner">
                                    <Users className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl font-black text-dark-navy tracking-tight">Phase 02: <br /> Lead Injection</h2>
                                <p className="text-xl text-slate-gray leading-relaxed font-medium">
                                    Import your entire database with zero manual entry. Our system handles raw numbers, CSVs, and Excel files with elite validation.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {['CSV Import', 'Manual Paste', 'Matrix Segments', 'Lead Validation'].map((item, i) => (
                                        <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 font-bold text-dark-navy italic">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative group lg:order-1">
                                <div className="absolute -inset-4 bg-gradient-primary opacity-5 blur-3xl rounded-[60px]"></div>
                                <div className="relative bg-white p-4 rounded-[48px] border border-slate-100 shadow-2xl overflow-hidden">
                                    <div className="bg-dark-navy rounded-[40px] aspect-[4/3] p-10 flex flex-col justify-between">
                                        <div className="space-y-4">
                                            <div className="h-2 w-1/3 bg-white/20 rounded-full"></div>
                                            <div className="h-12 w-full bg-white/5 rounded-2xl border border-white/10 flex items-center px-6">
                                                <div className="w-full h-2 bg-white/10 rounded-full"></div>
                                            </div>
                                            <div className="h-12 w-full bg-white/5 rounded-2xl border border-white/10 flex items-center px-6">
                                                <div className="w-full h-2 bg-white/10 rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="p-8 bg-indigo-500 rounded-3xl text-center shadow-2xl">
                                            <p className="text-white font-black italic">14,290 Identitites Parsed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phase 3: Broadcast */}
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-8">
                                <div className="w-16 h-16 bg-purple-50 rounded-3xl flex items-center justify-center text-premium-indigo shadow-inner">
                                    <Send className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl font-black text-dark-navy tracking-tight">Phase 03: <br /> Signal Dispatch</h2>
                                <p className="text-xl text-slate-gray leading-relaxed font-medium">
                                    Compose your message once, deliver it thousands of times. Full support for HD media and personalized tags.
                                </p>
                                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4">
                                    <div className="flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-success-green" />
                                        <span className="text-xs font-black uppercase tracking-widest text-dark-navy">Ghost-Mode Active</span>
                                    </div>
                                    <p className="text-slate-400 font-medium italic">"Every signal is dispatched with unique human-mimicry delays to protect your node integrity."</p>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-primary opacity-5 blur-3xl rounded-[60px]"></div>
                                <div className="relative bg-white p-4 rounded-[48px] border border-slate-100 shadow-2xl">
                                    <div className="bg-slate-50 rounded-[40px] aspect-[4/3] p-12 flex flex-col justify-between">
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm"></div>
                                            <div className="space-y-2">
                                                <div className="h-2 w-full bg-slate-200 rounded-full"></div>
                                                <div className="h-2 w-5/6 bg-slate-200 rounded-full"></div>
                                                <div className="h-2 w-4/6 bg-slate-200 rounded-full"></div>
                                            </div>
                                        </div>
                                        <button className="w-full py-5 bg-gradient-primary rounded-2xl text-white font-black text-xl shadow-xl shadow-indigo-200 flex items-center justify-center gap-3">
                                            INITIATE BLAST
                                            <Zap className="w-6 h-6 fill-white" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-dark-navy text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
                <div className="container-custom relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight italic">Ready to Amplify your <br /> <span className="text-indigo-400">Signal?</span></h2>
                    <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium">
                        Join the elite marketers using BulkWaMsg to dominate their channel.
                    </p>
                    <Link href="/signup" className="bg-white text-dark-navy px-12 py-6 rounded-3xl font-black text-2xl hover:bg-slate-100 transition-all shadow-2xl inline-flex items-center gap-4">
                        Get Started Free
                        <ArrowRight className="w-8 h-8" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
