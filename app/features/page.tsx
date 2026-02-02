import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { Send, Shield, BarChart3, Users, Zap, Globe, MessageSquare, Headphones, Layers } from 'lucide-react';

export default function FeaturesPage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            {/* Header */}
            <section className="pt-32 pb-20 bg-dark-navy text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                <div className="container-custom text-center relative z-10">
                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
                        The Master <br /> <span className="text-indigo-400">Toolkit.</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
                        Everything you need to dominate WhatsApp marketing at scale. Built for peak performance.
                    </p>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-32 bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {[
                            {
                                icon: Send,
                                title: 'Sonic Bulk Sender',
                                desc: 'Dispatch thousands of high-definition signals in minutes. Our engine is optimized for zero-delay operations.'
                            },
                            {
                                icon: Shield,
                                title: 'Ghost-Mode Safety',
                                desc: 'Proprietary anti-scan technology. Advanced content rotation and variable delays keep your node protected.'
                            },
                            {
                                icon: BarChart3,
                                title: 'Live Telemetry',
                                desc: 'Visual analytics dashboard showing delivery heath, interaction rates, and engagement DNA in real-time.'
                            },
                            {
                                icon: Users,
                                title: 'Contact Vault',
                                desc: 'Enterprise-grade lead management. Import 100k+ leads, apply matrix segments, and manage with precision.'
                            },
                            {
                                icon: MessageSquare,
                                title: 'Smart Templates',
                                desc: 'Create and save complex broadcasts with personalization support. Never write the same message twice.'
                            },
                            {
                                icon: Layers,
                                title: 'Multi-Media Arsenal',
                                desc: 'Native support for 4K images, PDF whitepapers, and high-fidelity video attachments.'
                            },
                            {
                                icon: Zap,
                                title: 'Instant Neural Link',
                                desc: 'Connect your device via our secure QR protocol in 5 seconds. No complex API approvals required.'
                            },
                            {
                                icon: Globe,
                                title: 'Global Handshake',
                                desc: 'Send signals anywhere in the world. Fully compatible with international number protocols.'
                            },
                            {
                                icon: Headphones,
                                title: 'Elite Support',
                                desc: '24/7 technical monitoring. Access our team of communication experts whenever you need assistance.'
                            }
                        ].map((feature, i) => (
                            <div key={i} className="group space-y-6">
                                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-trust-blue shadow-inner group-hover:bg-gradient-primary group-hover:text-white group-hover:scale-110 transition-all">
                                    <feature.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-black text-dark-navy tracking-tight">{feature.title}</h3>
                                <p className="text-lg text-slate-gray font-medium leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Depth Section */}
            <section className="py-32 bg-slate-50">
                <div className="container-custom">
                    <div className="bg-white rounded-[60px] p-12 md:p-24 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-trust-blue opacity-5 rounded-full blur-3xl"></div>
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-10">
                                <h2 className="text-4xl md:text-6xl font-black text-dark-navy tracking-tight italic">Precision <br /> <span className="gradient-text">Engineering.</span></h2>
                                <p className="text-xl text-slate-gray font-medium leading-relaxed">
                                    Unlike basic tools, BulkWaMsg uses a tactical approach to signal dispatch. We mimic human behavior pattern to ensure your marketing message isn't just sent, but actually received and read.
                                </p>
                                <ul className="space-y-4">
                                    {['Zero API Fees', 'End-to-End Encryption', 'Real-time Monitoring', 'No Lead Limit'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-dark-navy font-bold">
                                            <div className="w-6 h-6 bg-success-green/10 rounded-lg flex items-center justify-center text-success-green">
                                                <Zap className="w-4 h-4 fill-success-green" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="aspect-square bg-slate-50 rounded-[48px] shadow-inner flex items-center justify-center relative group">
                                <div className="absolute inset-20 bg-gradient-primary rounded-full blur-3xl opacity-20 group-hover:scale-150 transition-all duration-1000"></div>
                                <BarChart3 className="w-32 h-32 text-trust-blue relative z-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
