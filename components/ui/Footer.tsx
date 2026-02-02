import Link from 'next/link';
import { MessageSquare } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 py-20">
            <div className="container-custom">
                <div className="grid md:grid-cols-4 gap-16 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                                <MessageSquare className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-black text-dark-navy">BulkWaMsg</span>
                        </div>
                        <p className="text-slate-400 font-medium leading-relaxed">
                            Empowering businesses to master WhatsApp at scale. Built for creators, market-leaders, and innovators.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-dark-navy mb-6">Solution</h4>
                        <ul className="space-y-4">
                            <li><Link href="/features" className="text-slate-400 font-bold hover:text-trust-blue transition-colors">Bulk Sender</Link></li>
                            <li><Link href="/features" className="text-slate-400 font-bold hover:text-trust-blue transition-colors">Automation</Link></li>
                            <li><Link href="/features" className="text-slate-400 font-bold hover:text-trust-blue transition-colors">Enterprise API</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-dark-navy mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li><Link href="/help" className="text-slate-400 font-bold hover:text-trust-blue transition-colors">Documentation</Link></li>
                            <li><Link href="/help" className="text-slate-400 font-bold hover:text-trust-blue transition-colors">Help Center</Link></li>
                            <li><Link href="/help" className="text-slate-400 font-bold hover:text-trust-blue transition-colors">Community</Link></li>
                            <li><Link href="/status" className="text-slate-400 font-bold hover:text-trust-blue transition-colors">Status</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-dark-navy mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-slate-400 font-bold hover:text-trust-blue transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="text-slate-400 font-bold hover:text-trust-blue transition-colors">Contact</Link></li>
                            <li><Link href="/privacy" className="text-slate-400 font-bold hover:text-trust-blue transition-colors">Privacy</Link></li>
                            <li><Link href="/terms" className="text-slate-400 font-bold hover:text-trust-blue transition-colors">Legal</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-16 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400 font-bold text-sm">
                    <p>© 2026 BulkWaMsg. All rights reserved.</p>
                    <div className="flex gap-10">
                        <Link href="/terms" className="hover:text-dark-navy">Terms of Service</Link>
                        <Link href="/privacy" className="hover:text-dark-navy">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
