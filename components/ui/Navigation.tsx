'use client';

import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname();
    const isDashboard = pathname?.startsWith('/dashboard') || pathname?.startsWith('/campaigns') || pathname?.startsWith('/contacts') || pathname?.startsWith('/analytics') || pathname?.startsWith('/settings');

    // Don't show marketing nav on dashboard pages
    if (isDashboard) return null;

    return (
        <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container-custom">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                            <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-dark-navy">BulkWaMsg</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/features" className="text-slate-gray hover:text-trust-blue font-medium transition-colors">
                            Features
                        </Link>
                        <Link href="/use-cases" className="text-slate-gray hover:text-trust-blue font-medium transition-colors">
                            Use Cases
                        </Link>
                        <Link href="/pricing" className="text-slate-gray hover:text-trust-blue font-medium transition-colors">
                            Pricing
                        </Link>
                        <Link href="/help" className="text-slate-gray hover:text-trust-blue font-medium transition-colors">
                            Help
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/login" className="text-trust-blue font-semibold hover:text-premium-indigo transition-colors">
                            Sign In
                        </Link>
                        <Link href="/signup" className="btn-primary">
                            Start Free Trial
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
