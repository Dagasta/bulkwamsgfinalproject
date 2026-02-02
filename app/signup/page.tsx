'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { MessageSquare, Mail, Lock, User, ArrowRight, CheckCircle2 } from 'lucide-react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { createClient } from '@/lib/supabase/client';

function SignupForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const plan = searchParams.get('plan');
    const supabase = createClient();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        setLoading(true);

        try {
            const { data, error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: {
                        name: formData.name,
                    },
                },
            });

            if (error) throw error;

            // Redirect to dashboard or show success message
            router.push('/dashboard');
        } catch (error: any) {
            setError(error.message || 'Failed to create account');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-soft-gray via-white to-blue-50 flex items-center justify-center p-4">
            <div className="w-full max-w-5xl">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Benefits */}
                    <div className="hidden lg:block">
                        <Link href="/" className="flex items-center gap-2 mb-8">
                            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                                <MessageSquare className="w-7 h-7 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-dark-navy">BulkWaMsg</span>
                        </Link>

                        <h2 className="text-4xl font-bold text-dark-navy mb-6">
                            Start Growing Your Business Today
                        </h2>
                        <p className="text-slate-gray mb-8">
                            Join 10,000+ businesses using BulkWaMsg to reach their customers on WhatsApp.
                        </p>

                        <div className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-success-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <CheckCircle2 className="w-4 h-4 text-success-green" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-dark-navy mb-1">{benefit.title}</h3>
                                        <p className="text-sm text-slate-gray">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Signup Form */}
                    <div className="card">
                        <div className="lg:hidden mb-6">
                            <Link href="/" className="flex items-center justify-center gap-2">
                                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                                    <MessageSquare className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xl font-bold text-dark-navy">BulkWaMsg</span>
                            </Link>
                        </div>

                        <h1 className="text-3xl font-bold text-dark-navy mb-2">Create Your Account</h1>
                        <p className="text-slate-gray mb-6">
                            {plan ? `Join the ${plan} community` : 'Unlock Enterprise-grade Messaging'}
                        </p>

                        {error && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSignup} className="space-y-4">
                            <Input
                                label="Full Name"
                                name="name"
                                type="text"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            <Input
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                            <Input
                                label="Password"
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />

                            <Input
                                label="Confirm Password"
                                name="confirmPassword"
                                type="password"
                                placeholder="••••••••"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />

                            <div className="text-xs text-slate-gray">
                                By creating an account, you agree to our{' '}
                                <Link href="/terms" className="text-trust-blue hover:underline">
                                    Terms of Service
                                </Link>{' '}
                                and{' '}
                                <Link href="/privacy" className="text-trust-blue hover:underline">
                                    Privacy Policy
                                </Link>
                            </div>

                            <Button type="submit" className="w-full" disabled={loading}>
                                {loading ? 'Creating account...' : 'Create Account'}
                                {!loading && <ArrowRight className="w-5 h-5" />}
                            </Button>
                        </form>

                        <div className="mt-6 text-center text-sm text-slate-gray">
                            Already have an account?{' '}
                            <Link href="/login" className="text-trust-blue font-semibold hover:underline">
                                Sign in
                            </Link>
                        </div>
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

export default function SignupPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gradient-to-br from-soft-gray via-white to-blue-50 flex items-center justify-center p-4">
                <div className="text-center">
                    <div className="w-12 h-12 bg-indigo-600 rounded-lg animate-pulse mx-auto mb-4"></div>
                    <p className="text-slate-gray font-medium">Loading signup...</p>
                </div>
            </div>
        }>
            <SignupForm />
        </Suspense>
    );
}

const benefits = [
    {
        title: 'Unlimited Access',
        description: 'Send messages without limits to your entire customer base.',
    },
    {
        title: 'Easy Setup',
        description: 'Connect your WhatsApp and start sending in under 5 minutes.',
    },
    {
        title: 'Enterprise Security',
        description: 'Your data is safe with our encrypted protocols and private nodes.',
    },
];
