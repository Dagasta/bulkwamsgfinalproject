'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MessageSquare, Mail, Lock, ArrowRight } from 'lucide-react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { createClient } from '@/lib/supabase/client';

export default function LoginPage() {
    const router = useRouter();
    const supabase = createClient();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            router.push('/dashboard');
        } catch (error: any) {
            setError(error.message || 'Failed to login');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-soft-gray via-white to-blue-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <Link href="/" className="flex items-center justify-center gap-2 mb-8">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-dark-navy">BulkWaMsg</span>
                </Link>

                {/* Login Card */}
                <div className="card">
                    <h1 className="text-3xl font-bold text-dark-navy mb-2">Welcome Back</h1>
                    <p className="text-slate-gray mb-8">Sign in to your account to continue</p>

                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4">
                        <Input
                            label="Email"
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <Input
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="rounded border-gray-300 text-trust-blue focus:ring-trust-blue" />
                                <span className="text-slate-gray">Remember me</span>
                            </label>
                            <Link href="/forgot-password" className="text-trust-blue hover:underline">
                                Forgot password?
                            </Link>
                        </div>

                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? 'Signing in...' : 'Sign In'}
                            {!loading && <ArrowRight className="w-5 h-5" />}
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm text-slate-gray">
                        Don't have an account?{' '}
                        <Link href="/signup" className="text-trust-blue font-semibold hover:underline">
                            Sign up for free
                        </Link>
                    </div>
                </div>

                {/* Back to Home */}
                <div className="text-center mt-6">
                    <Link href="/" className="text-slate-gray hover:text-trust-blue text-sm">
                        ← Back to home
                    </Link>
                </div>
            </div>
        </main>
    );
}
