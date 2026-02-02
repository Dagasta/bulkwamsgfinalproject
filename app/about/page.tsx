import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { MessageSquare, Shield, Zap, Users, Globe, Rocket } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            {/* Mission Hero */}
            <section className="pt-32 pb-20 bg-slate-50">
                <div className="container-custom text-center">
                    <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-trust-blue px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8">
                        Our Mission
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-dark-navy mb-8 tracking-tighter">
                        Empowering Global <br /> <span className="gradient-text">Communication.</span>
                    </h1>
                    <p className="text-xl text-slate-gray max-w-2xl mx-auto font-medium leading-relaxed">
                        BulkWaMsg was founded in 2025 with a single goal: to democratize large-scale WhatsApp marketing for small and medium businesses worldwide.
                    </p>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: Shield,
                                title: 'Privacy First',
                                desc: 'We never store your customer data. Your messages are sent directly from your device to theirs.'
                            },
                            {
                                icon: Zap,
                                title: 'Hyper-Speed',
                                desc: 'Built on high-performance architecture to ensure your messages reach their destination instantly.'
                            },
                            {
                                icon: Users,
                                title: 'User Centric',
                                desc: 'Every feature is designed to solve real marketing problems and drive actual growth.'
                            }
                        ].map((item, i) => (
                            <div key={i} className="space-y-6 text-center">
                                <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center mx-auto text-trust-blue">
                                    <item.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-black text-dark-navy">{item.title}</h3>
                                <p className="text-slate-gray font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Numbers */}
            <section className="py-24 bg-dark-navy text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {[
                            { label: 'Messages Sent', val: '142M+' },
                            { label: 'Active Users', val: '50k+' },
                            { label: 'Countries', val: '180+' },
                            { label: 'Success Rate', val: '99.9%' }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-2">
                                <h4 className="text-4xl md:text-5xl font-black italic">{stat.val}</h4>
                                <p className="text-xs font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="py-24">
                <div className="container-custom max-w-4xl">
                    <div className="space-y-10">
                        <h2 className="text-4xl font-black text-dark-navy">Our Story</h2>
                        <div className="space-y-6 text-lg text-slate-gray leading-relaxed">
                            <p>
                                What started as a small tool for local businesses to notify their customers has grown into a global powerhouse for WhatsApp marketing. We realized that traditional SMS marketing was dying and businesses needed a more personal, high-engagement way to reach their audience.
                            </p>
                            <p>
                                Today, BulkWaMsg serves thousands of customers, from small e-commerce shops to large enterprise teams, helping them dispatch millions of messages every month without the complexity or cost of traditional API solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
