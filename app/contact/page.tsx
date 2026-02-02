import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { Mail, MessageCircle, Globe, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            <section className="pt-32 pb-20 bg-slate-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div className="space-y-12">
                            <div>
                                <h1 className="text-5xl md:text-7xl font-black text-dark-navy mb-6 tracking-tighter">
                                    Get In <br /> <span className="gradient-text">Touch.</span>
                                </h1>
                                <p className="text-xl text-slate-gray font-medium leading-relaxed max-w-md">
                                    Have questions? Our elite support team is ready to help you scale your signal reach.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-trust-blue group-hover:bg-trust-blue group-hover:text-white transition-all">
                                        <Mail className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email Support</p>
                                        <p className="text-xl font-black text-dark-navy">support@bulkwamsg.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-trust-blue group-hover:bg-trust-blue group-hover:text-white transition-all">
                                        <MessageCircle className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">WhatsApp Chat</p>
                                        <p className="text-xl font-black text-dark-navy">+1 (555) 012-3456</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-trust-blue group-hover:bg-trust-blue group-hover:text-white transition-all">
                                        <MapPin className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Global Headquarters</p>
                                        <p className="text-xl font-black text-dark-navy">Dubai, United Arab Emirates</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card p-12 rounded-[48px] border-none shadow-2xl bg-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            <form className="space-y-8 relative z-10">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 font-bold outline-none focus:border-trust-blue transition-all" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                                        <input type="email" placeholder="john@company.com" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 font-bold outline-none focus:border-trust-blue transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                                    <input type="text" placeholder="Enterprise Inquiry" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 font-bold outline-none focus:border-trust-blue transition-all" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                                    <textarea rows={6} placeholder="How can we help your business grow?" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 font-bold outline-none focus:border-trust-blue transition-all resize-none"></textarea>
                                </div>
                                <button className="w-full bg-gradient-primary text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1 transition-all">
                                    Send Signal
                                    <Send className="w-6 h-6" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
