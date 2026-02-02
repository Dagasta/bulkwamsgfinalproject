import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { CheckCircle2, Zap, Shield, Server, Globe } from 'lucide-react';

export default function StatusPage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            <section className="pt-32 pb-24 bg-slate-50">
                <div className="container-custom text-center">
                    <div className="w-24 h-24 bg-emerald-50 rounded-[32px] flex items-center justify-center mx-auto mb-10 shadow-inner">
                        <CheckCircle2 className="w-12 h-12 text-success-green animate-pulse" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-dark-navy mb-6 tracking-tighter">
                        All Systems <br /> <span className="text-success-green">Operational.</span>
                    </h1>
                    <p className="text-xl text-slate-gray font-medium max-w-xl mx-auto">
                        Our global signal network is performing at peak efficiency. 0% downtime detected in the last 24 hours.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container-custom max-w-4xl">
                    <div className="grid gap-6">
                        {[
                            { name: 'Global Signal Gateway', status: 'Operational', latency: '42ms' },
                            { name: 'Identity Matrix (Auth)', status: 'Operational', latency: '12ms' },
                            { name: 'Bulk Injection Engine', status: 'Operational', latency: '65ms' },
                            { name: 'Secure Neural Link', status: 'Operational', latency: '28ms' },
                            { name: 'PayPal Transaction Flow', status: 'Operational', latency: '150ms' }
                        ].map((system, i) => (
                            <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex items-center justify-between group hover:shadow-xl transition-all">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-trust-blue group-hover:bg-trust-blue group-hover:text-white transition-all">
                                        <Server className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-dark-navy italic">{system.name}</h3>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Signal Latency: {system.latency}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-black text-success-green uppercase tracking-widest">{system.status}</span>
                                    <div className="w-3 h-3 bg-success-green rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
