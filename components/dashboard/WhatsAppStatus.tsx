'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Loader2, Wifi, WifiOff, LogOut } from 'lucide-react';

export default function WhatsAppStatus() {
    const [isConnected, setIsConnected] = useState(false);
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        const checkStatus = async () => {
            try {
                const response = await fetch('/api/whatsapp/status');
                const data = await response.json();
                setIsConnected(data.ready);
            } catch (error) {
                setIsConnected(false);
            } finally {
                setIsChecking(false);
            }
        };

        checkStatus();
        const interval = setInterval(checkStatus, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleDisconnect = async () => {
        if (!confirm('Are you sure you want to disconnect WhatsApp? This will end the current session.')) return;
        try {
            const response = await fetch('/api/whatsapp/reset', { method: 'POST' });
            if (response.ok) {
                window.location.reload();
            }
        } catch (error) {
            console.error('Failed to disconnect:', error);
        }
    };

    if (isChecking) {
        return (
            <div className="flex items-center gap-2 px-3 py-2 bg-slate-800/20 rounded-xl">
                <Loader2 className="w-4 h-4 text-slate-400 animate-spin" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Syncing...</span>
            </div>
        );
    }

    if (isConnected) {
        return (
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 px-3 py-2 bg-success-green/10 rounded-xl border border-success-green/20">
                    <Wifi className="w-4 h-4 text-success-green animate-pulse" />
                    <span className="text-xs font-black text-success-green uppercase tracking-widest">Neural Link Active</span>
                </div>
                <button
                    onClick={handleDisconnect}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-red-500/10 hover:bg-red-500/20 rounded-xl border border-red-500/20 text-red-500 transition-all group"
                >
                    <LogOut className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Disconnect</span>
                </button>
            </div>
        );
    }

    return (
        <Link
            href="/dashboard/whatsapp-connect"
            className="flex items-center gap-2 px-3 py-2 bg-trust-blue/10 rounded-xl border border-trust-blue/20 hover:bg-trust-blue/20 transition-all group"
        >
            <WifiOff className="w-4 h-4 text-trust-blue" />
            <span className="text-xs font-black text-trust-blue uppercase tracking-widest group-hover:translate-x-0.5 transition-transform">Link Signal</span>
        </Link>
    );
}
