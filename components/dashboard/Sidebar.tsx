'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    MessageSquare,
    LayoutDashboard,
    Send,
    Users,
    BarChart3,
    Settings,
    LogOut,
    Zap,
    CreditCard
} from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import WhatsAppStatus from './WhatsAppStatus';

const navigation = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'New Campaign', href: '/dashboard/campaigns/new', icon: Send },
    { name: 'Contacts', href: '/dashboard/contacts', icon: Users },
    { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
    { name: 'Billing', href: '/pricing', icon: CreditCard },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const supabase = createClient();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/login');
    };

    return (
        <aside className="w-72 bg-dark-navy text-white flex flex-col h-screen fixed left-0 top-0 z-50 border-r border-slate-800/50 shadow-2xl">
            {/* Logo Section */}
            <div className="p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-primary opacity-5"></div>
                <Link href="/dashboard" className="flex items-center gap-3 relative z-10">
                    <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg shadow-trust-blue/20 rotate-3">
                        <MessageSquare className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-black tracking-tighter leading-none">BulkWaMsg</span>
                        <span className="text-[10px] font-black tracking-[0.2em] text-trust-blue uppercase mt-1">Enterprise</span>
                    </div>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto custom-scrollbar">
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] px-4 mb-4">Main Menu</div>
                {navigation.map((item) => {
                    const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${isActive
                                ? 'bg-gradient-primary text-white shadow-xl shadow-trust-blue/20'
                                : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                                }`}
                        >
                            <item.icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                            <span className="font-bold tracking-tight">{item.name}</span>
                            {item.name === 'New Campaign' && (
                                <div className="ml-auto w-2 h-2 rounded-full bg-error-red animate-pulse shadow-lg shadow-red-500/50"></div>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* WhatsApp Integration Quick View */}
            <div className="px-4 py-6 space-y-4">
                <div className="p-5 rounded-[24px] bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm relative overflow-hidden group">
                    <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-trust-blue opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity"></div>
                    <WhatsAppStatus />
                </div>
            </div>

            {/* User Footer */}
            <div className="p-6 border-t border-slate-800/50">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 w-full group"
                >
                    <div className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center group-hover:bg-red-500/20 transition-all">
                        <LogOut className="w-5 h-5" />
                    </div>
                    <span className="font-bold tracking-tight">Sign Out</span>
                </button>
            </div>
        </aside>
    );
}
