import Link from 'next/link';
import { MessageSquare } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-dark-navy text-white py-12">
            <div className="container-custom">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                                <MessageSquare className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-lg font-bold">BulkWaMsg</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            The #1 bulk WhatsApp messaging platform for businesses.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                            <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="/use-cases" className="hover:text-white transition-colors">Use Cases</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/tools" className="hover:text-white transition-colors">Free Tools</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                            <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="/use-cases" className="hover:text-white transition-colors">Use Cases</Link></li>
                            <li><Link href="/demo" className="hover:text-white transition-colors">Demo</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; 2026 BulkWaMsg. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
