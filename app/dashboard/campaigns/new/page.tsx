'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect, useMemo } from 'react';
import {
    Send,
    Upload,
    X,
    AlertCircle,
    CheckCircle2,
    Loader2,
    Crown,
    ShieldCheck,
    Clock,
    Sparkles,
    ArrowRight,
    Users
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

interface CampaignFormData {
    name: string;
    message: string;
    numbers: string;
    attachments: File[];
    scheduledAt: string;
    timezone: string;
}

export default function NewCampaignPage() {
    const router = useRouter();
    const supabase = useMemo(() => createClient(), []);

    // Status States
    const [isWhatsAppConnected, setIsWhatsAppConnected] = useState(false);
    const [isCheckingConnection, setIsCheckingConnection] = useState(true);
    const [userPlan, setUserPlan] = useState<string | null>(null);
    const [isLoadingPlan, setIsLoadingPlan] = useState(true);

    // Form States
    const [isSending, setIsSending] = useState(false);
    const [sendProgress, setSendProgress] = useState({ sent: 0, total: 0 });
    const [formData, setFormData] = useState<CampaignFormData>({
        name: '',
        message: '',
        numbers: '',
        attachments: [] as File[],
        scheduledAt: '',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });

    const [errors, setErrors] = useState<string[]>([]);
    const [success, setSuccess] = useState(false);

    // 1. Check Auth & Plan
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const { data: { user } } = await supabase.auth.getUser();
                if (!user) {
                    router.push('/login');
                    return;
                }

                const { data: profile } = await supabase
                    .from('profiles')
                    .select('plan, expires_at')
                    .eq('id', user.id)
                    .single();

                const now = new Date();
                const expiryDate = profile?.expires_at ? new Date(profile.expires_at) : null;
                const isPro = profile?.plan === 'pro' && (!expiryDate || expiryDate > now);

                // ADMIN BYPASS: Automatically grant PRO to internal accounts
                const adminEmails = ['owner@bulkwamsg.com', 'ghassanadil@gmail.com', 'dagasta@gmail.com'];
                if (adminEmails.includes(user.email || '')) {
                    setUserPlan('pro');
                } else if (isPro) {
                    setUserPlan('pro');
                } else {
                    setUserPlan('free');
                }

                // Redirect to pricing if they are on free plan
                if (!isPro && user.email !== 'owner@bulkwamsg.com') {
                    // router.push('/pricing'); // We will show a nice overlay instead of instant redirect
                }
            } catch (err) {
                console.error('Error fetching plan:', err);
            } finally {
                setIsLoadingPlan(false);
            }
        };

        fetchUserData();
    }, [supabase, router]);

    // 2. Check WhatsApp Status
    useEffect(() => {
        const checkConnection = async () => {
            try {
                const response = await fetch('/api/whatsapp/status');
                const data = await response.json();
                setIsWhatsAppConnected(data.ready);
            } catch (error) {
                setIsWhatsAppConnected(false);
            } finally {
                setIsCheckingConnection(false);
            }
        };

        checkConnection();
        const interval = setInterval(checkConnection, 1000); // 1s polling for instant status updates
        return () => clearInterval(interval);
    }, []);

    const parseNumbers = (text: string): string[] => {
        const parts = text.split(/[\n,;]/);
        const resolvedNumbers: string[] = [];
        parts.forEach(part => {
            const cleaned = part.replace(/[^\d+]/g, '');
            if (cleaned.length >= 10) resolvedNumbers.push(cleaned);
            else {
                const matches = part.match(/\+?\d{10,}/g);
                if (matches) matches.forEach(m => resolvedNumbers.push(m));
            }
        });
        return Array.from(new Set(resolvedNumbers.map(n => n.trim()).filter(n => n.length > 0)));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (userPlan !== 'pro') {
            setErrors(['Payment Required: Please upgrade to a Pro plan to send bulk campaigns.']);
            return;
        }

        setErrors([]);
        setSuccess(false);

        // Validation
        const newErrors: string[] = [];
        if (!formData.name.trim()) newErrors.push('Campaign name is required');
        if (!formData.message.trim()) newErrors.push('Message is required');
        if (!formData.numbers.trim()) newErrors.push('At least one phone number is required');

        if (newErrors.length > 0) {
            setErrors(newErrors);
            return;
        }

        const numbers = parseNumbers(formData.numbers);
        if (numbers.length === 0) {
            setErrors(['No valid phone numbers found.']);
            return;
        }

        const convertToUTC = (localISODate: string, targetTimezone: string) => {
            const date = new Date(localISODate);
            const browserTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;

            if (browserTZ === targetTimezone) {
                return date.toISOString();
            }

            // Calculate offset difference
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: targetTimezone,
                year: 'numeric', month: 'numeric', day: 'numeric',
                hour: 'numeric', minute: 'numeric', second: 'numeric',
                hour12: false
            });
            const parts = formatter.formatToParts(date);
            const getPart = (type: string) => parts.find(p => p.type === type)?.value;

            const targetISO = `${getPart('year')}-${getPart('month')}-${getPart('day')}T${getPart('hour')}:${getPart('minute')}:${getPart('second')}`;
            const targetDate = new Date(targetISO);

            const diff = targetDate.getTime() - date.getTime();
            return new Date(date.getTime() - diff).toISOString();
        };

        setIsSending(true);
        setSendProgress({ sent: 0, total: numbers.length });
        setErrors([]);
        setSuccess(false);

        try {
            console.log('[Broadcast] Initializing mission...');

            // 1. Process Media
            const mediaList = [];
            if (formData.attachments.length > 0) {
                console.log(`[Broadcast] Processing ${formData.attachments.length} attachments...`);
                for (const file of formData.attachments) {
                    const reader = new FileReader();
                    const filePromise = new Promise<{ data: string; mimetype: string; filename: string }>((resolve, reject) => {
                        reader.onload = () => {
                            const result = reader.result as string;
                            const base64 = result.includes(',') ? result.split(',')[1] : result;
                            resolve({ data: base64, mimetype: file.type, filename: file.name });
                        };
                        reader.onerror = () => reject(new Error(`Failed to read ${file.name}`));
                    });
                    reader.readAsDataURL(file);
                    mediaList.push(await filePromise);
                    console.log(`[Broadcast] File ready: ${file.name}`);
                }
            }

            // 2. Submit to API
            console.log('[Broadcast] Engaging API via /api/whatsapp/send...');
            setSendProgress({ sent: numbers.length, total: numbers.length });

            const payload = {
                type: 'bulk',
                name: formData.name,
                contacts: numbers.map(phone => ({ phone, message: formData.message })),
                mediaList,
                scheduledAt: formData.scheduledAt ? convertToUTC(formData.scheduledAt, formData.timezone) : null,
                timezone: formData.timezone
            };

            const response = await fetch('/api/whatsapp/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            console.log(`[Broadcast] API Response Status: ${response.status}`);

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || `Server Error (HTTP ${response.status})`);
            }

            const result = await response.json();
            console.log('[Broadcast] API Result:', result);

            if (result.success) {
                setSuccess(true);
                // Reset form instead of redirecting
                setTimeout(() => {
                    setFormData({
                        name: '',
                        message: '',
                        numbers: '',
                        attachments: [],
                        scheduledAt: '',
                        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    });
                    setSuccess(false);
                    setIsSending(false);
                }, 3000);
            } else {
                throw new Error(result.error || 'Failed to initialize broadcast protocol');
            }
        } catch (error: any) {
            console.error('[CRITICAL BROADCAST ERROR]:', error);
            setErrors([error.message || 'An unexpected failure occurred. Please try again.']);
        } finally {
            console.log('[Broadcast] Interaction cycle complete.');
            setIsSending(false);
        }
    };

    if (isLoadingPlan || isCheckingConnection) {
        return (
            <div className="flex flex-col items-center justify-center py-20 animate-fade-in text-center">
                <div className="relative w-20 h-20 mb-6">
                    <div className="absolute inset-0 border-4 border-indigo-100 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-t-trust-blue rounded-full animate-spin"></div>
                    <Crown className="absolute inset-0 m-auto w-8 h-8 text-trust-blue opacity-20" />
                </div>
                <h2 className="text-2xl font-black text-dark-navy italic mb-2 tracking-tight">Syncing Powerhouse...</h2>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Preparing your elite workspace</p>
            </div>
        );
    }

    return (
        <div className="space-y-12 animate-fade-in relative">
            {/* Paywall Overlay if not Pro */}
            {userPlan !== 'pro' && (
                <div className="absolute inset-0 z-[100] backdrop-blur-md bg-white/40 flex items-center justify-center p-6 rounded-[48px] border-4 border-white shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-trust-blue/5 to-transparent"></div>
                    <div className="card max-w-lg w-full p-12 text-center border-none shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] relative z-10 bg-white/90">
                        <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl rotate-3">
                            <Crown className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-4xl font-black text-dark-navy mb-4 tracking-tight">Access Locked</h2>
                        <p className="text-slate-gray mb-8 font-medium leading-relaxed italic">
                            Bulk sending is an enterprise-grade feature. Upgrade to Pro to unlock unlimited reach and HD media support.
                        </p>
                        <Link
                            href="/pricing"
                            className="w-full bg-dark-navy text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-black hover:-translate-y-1 transition-all shadow-xl shadow-slate-200"
                        >
                            View Pro Plans
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                        <p className="mt-6 text-xs text-slate-400 font-black uppercase tracking-widest">Pay once, dominate forever.</p>
                    </div>
                </div>
            )}

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-black text-dark-navy tracking-tighter mb-2">
                        Global <span className="gradient-text">Broadcast</span>
                    </h1>
                    <p className="text-lg text-slate-400 font-bold uppercase tracking-widest text-[10px]">Target up to 100k leads instantly</p>
                </div>

                <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-3xl shadow-sm border border-slate-100">
                    <div className={`w-3 h-3 rounded-full ${isWhatsAppConnected ? 'bg-success-green animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.5)]' : 'bg-error-red shadow-[0_0_12px_rgba(239,68,68,0.5)]'}`} />
                    <span className="text-xs font-black text-dark-navy uppercase tracking-widest">
                        {isWhatsAppConnected ? 'Neural Link Active' : 'Neural Link Severed'}
                    </span>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="grid lg:grid-cols-5 gap-10">
                {/* Left Side: Campaign Prep */}
                <div className="lg:col-span-3 space-y-10">
                    <div className="card p-10 rounded-[40px] border-none shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-full -mr-16 -mt-16 blur-2xl"></div>

                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-trust-blue">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-black text-dark-navy uppercase tracking-tight">Campaign Blueprint</h2>
                        </div>

                        <div className="space-y-8">
                            <div className="group">
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-1 group-focus-within:text-trust-blue transition-colors">Internal Reference Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g., Q1 FLASH PROMO - MAR 2025"
                                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 font-bold text-dark-navy focus:bg-white focus:border-trust-blue outline-none transition-all placeholder:text-slate-300"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="group">
                                <div className="flex items-center justify-between mb-3 ml-1">
                                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] group-focus-within:text-trust-blue transition-colors">Broadcast Master Message</label>
                                    <span className="text-[10px] font-black text-success-green bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1.5">
                                        <CheckCircle2 className="w-3 h-3" /> Safety-First Engine
                                    </span>
                                </div>
                                <textarea
                                    rows={8}
                                    placeholder="Write your broadcast content here... {Hi|Hello|Hey} supports personalization tags."
                                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-[32px] px-8 py-6 font-bold text-dark-navy focus:bg-white focus:border-trust-blue outline-none transition-all placeholder:text-slate-300 resize-none leading-relaxed"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                                <p className="mt-4 text-[10px] font-bold text-slate-400 italic px-2">
                                    💡 Tip: Use Spintax like {"{Hi|Hello}"} to vary your messages and avoid automated detection.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card p-10 rounded-[40px] border-none shadow-xl bg-gradient-to-br from-white to-slate-50">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-trust-blue">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-black text-dark-navy uppercase tracking-tight">Elite Scheduling</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="group">
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-1">Dispatch Time (Optional)</label>
                                <input
                                    type="datetime-local"
                                    className="w-full bg-white border-2 border-slate-100 rounded-2xl px-6 py-4 font-bold text-dark-navy focus:border-trust-blue outline-none transition-all"
                                    value={formData.scheduledAt}
                                    onChange={(e) => setFormData({ ...formData, scheduledAt: e.target.value })}
                                />
                            </div>

                            <div className="group">
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-1">Global Timezone</label>
                                <select
                                    className="w-full bg-white border-2 border-slate-100 rounded-2xl px-6 py-4 font-bold text-dark-navy focus:border-trust-blue outline-none transition-all appearance-none cursor-pointer"
                                    value={formData.timezone}
                                    onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                                >
                                    {Intl.supportedValuesOf('timeZone').map(tz => (
                                        <option key={tz} value={tz}>{tz.replace(/_/g, ' ')}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <p className="mt-6 text-[10px] font-bold text-slate-400 italic px-2">
                            💡 {formData.scheduledAt ? `System will execute this mission at your local ${formData.timezone.replace(/_/g, ' ')} time.` : 'Leave empty to initiate an immediate broadcast blast.'}
                        </p>
                    </div>

                    <div className="card p-10 rounded-[40px] border-none shadow-xl">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-warning-amber">
                                <Upload className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-black text-dark-navy uppercase tracking-tight">Media Arsenal</h2>
                        </div>

                        <div className="space-y-4">
                            <div className="relative">
                                <div className="border-4 border-dashed border-slate-100 rounded-[32px] p-10 text-center hover:border-trust-blue hover:bg-slate-50 transition-all group cursor-pointer relative overflow-hidden">
                                    <input
                                        type="file"
                                        multiple
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                        onChange={(e) => {
                                            if (e.target.files) {
                                                const newFiles = Array.from(e.target.files);
                                                setFormData(prev => ({
                                                    ...prev,
                                                    attachments: [...prev.attachments, ...newFiles]
                                                }));
                                            }
                                        }}
                                    />
                                    <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-trust-blue group-hover:text-white transition-all shadow-sm">
                                        <Upload className="w-8 h-8" />
                                    </div>
                                    <p className="text-lg font-black text-dark-navy mb-1 italic">Add HD Assets</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Multiple files supported</p>
                                </div>
                            </div>

                            {formData.attachments.length > 0 && (
                                <div className="grid gap-4 mt-6">
                                    {formData.attachments.map((file, index) => (
                                        <div key={index} className="flex items-center justify-between p-4 bg-slate-50 border-2 border-slate-100 rounded-3xl group animate-scale-up">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-trust-blue font-black border border-slate-100 text-xs">
                                                    {file.name.split('.').pop()?.toUpperCase()}
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="font-black text-dark-navy max-w-[150px] md:max-w-[300px] truncate mb-0.5 text-sm italic">{file.name}</p>
                                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    const newAttachments = [...formData.attachments];
                                                    newAttachments.splice(index, 1);
                                                    setFormData({ ...formData, attachments: newAttachments });
                                                }}
                                                className="w-10 h-10 flex items-center justify-center bg-white hover:bg-red-50 text-slate-300 hover:text-red-500 rounded-xl transition-all shadow-sm border border-slate-100"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Side: Audience & Action */}
                <div className="lg:col-span-2 space-y-10">
                    <div className="card p-10 rounded-[40px] border-none shadow-xl bg-dark-navy text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-trust-blue opacity-20 rounded-full blur-3xl -mr-20 -mt-20"></div>

                        <div className="flex items-center gap-4 mb-10 relative z-10">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-trust-blue border border-white/10">
                                <Users className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-black uppercase tracking-tight italic">Elite Audience</h2>
                        </div>

                        <div className="space-y-6 relative z-10">
                            <textarea
                                rows={10}
                                placeholder="PASTE RAW NUMBERS...&#10;+91 98765 43210&#10;+1(123)456-7890"
                                className="w-full bg-white/5 border-2 border-white/10 rounded-[32px] px-8 py-8 font-black text-white focus:bg-white/10 focus:border-trust-blue outline-none transition-all placeholder:text-white/20 resize-none leading-relaxed text-sm"
                                value={formData.numbers}
                                onChange={(e) => setFormData({ ...formData, numbers: e.target.value })}
                            />

                            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Live Contact Scan</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-trust-blue animate-pulse"></div>
                                        <span className="text-[10px] font-black text-trust-blue uppercase tracking-widest">Active</span>
                                    </div>
                                </div>
                                <div className="text-4xl font-black tabular-nums tracking-tighter">
                                    {parseNumbers(formData.numbers).length} <span className="text-sm font-bold text-white/40 tracking-normal uppercase ml-1 tracking-[0.2em]">Verified</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {errors.map((error, i) => (
                            <div key={i} className="p-6 bg-red-500/10 border border-red-500/20 rounded-3xl flex items-center gap-4 text-red-400 animate-shake">
                                <AlertCircle className="w-6 h-6 shrink-0" />
                                <p className="text-sm font-black italic uppercase tracking-tight">{error}</p>
                            </div>
                        ))}

                        <button
                            type="submit"
                            disabled={isSending || !isWhatsAppConnected || userPlan !== 'pro'}
                            className={`w-full group relative py-8 rounded-[38px] font-black text-2xl flex flex-col items-center justify-center gap-2 transition-all overflow-hidden ${isSending || !isWhatsAppConnected || userPlan !== 'pro'
                                ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
                                : 'bg-gradient-primary text-white shadow-[0_20px_40px_-10px_rgba(79,70,229,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(79,70,229,0.5)] hover:-translate-y-1 active:scale-[0.98]'
                                }`}
                        >
                            {isSending ? (
                                <>
                                    <Loader2 className="w-8 h-8 animate-spin" />
                                    <span className="text-sm font-bold uppercase tracking-[0.2em]">{sendProgress.sent} / {sendProgress.total} Dispatched</span>
                                </>
                            ) : (
                                <>
                                    <div className="flex items-center gap-4">
                                        <Send className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                        <span>{formData.scheduledAt ? 'SCHEDULE BROADCAST' : 'INITIATE BLAST'}</span>
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">Enterprise Protocol 5.2</span>
                                </>
                            )}
                        </button>

                        {success && (
                            <div className="p-8 bg-white border-2 border-emerald-100 rounded-[40px] shadow-2xl animate-scale-up overflow-hidden relative group mt-4">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-5 mb-6">
                                        <div className="w-14 h-14 bg-success-green/10 rounded-2xl flex items-center justify-center text-success-green">
                                            <ShieldCheck className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black text-dark-navy italic leading-none mb-1">Verified Flight Plan</h3>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mission Locked & Logged</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Strategy</span>
                                            <span className="text-xs font-black text-dark-navy italic">{formData.name || 'Bulk Dispatch'}</span>
                                        </div>
                                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Dispatch Time</span>
                                            <span className="text-xs font-black text-trust-blue italic">
                                                {formData.scheduledAt ? new Date(formData.scheduledAt).toLocaleString() : 'Immediate Blast'}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Target Leads</span>
                                            <span className="text-xs font-black text-dark-navy">{parseNumbers(formData.numbers).length} Verified</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </form>

            <style jsx global>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-4px); }
                    75% { transform: translateX(4px); }
                }
                .animate-shake { animation: shake 0.4s ease-in-out; }
            `}</style>
        </div>
    );
}
