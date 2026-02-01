'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function WhatsAppLinkGenerator() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [generatedLink, setGeneratedLink] = useState('');
    const [copied, setCopied] = useState(false);

    const generateLink = () => {
        if (!phoneNumber) return;

        // Remove all non-numeric characters
        const cleanNumber = phoneNumber.replace(/\D/g, '');

        // Encode the message
        const encodedMessage = encodeURIComponent(message);

        // Generate WhatsApp link
        const link = `https://wa.me/${cleanNumber}${message ? `?text=${encodedMessage}` : ''}`;
        setGeneratedLink(link);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="card max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-dark-navy mb-6">
                WhatsApp Link Generator
            </h2>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-dark-navy mb-2">
                        Phone Number (with country code)
                    </label>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+1 234 567 8900"
                        className="input-field"
                    />
                    <p className="text-xs text-slate-gray mt-1">
                        Include country code without + or spaces (e.g., 12345678900)
                    </p>
                </div>

                <div>
                    <label className="block text-sm font-medium text-dark-navy mb-2">
                        Pre-filled Message (Optional)
                    </label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Hello! I'm interested in..."
                        rows={4}
                        className="input-field resize-none"
                    />
                </div>

                <button
                    onClick={generateLink}
                    className="btn-primary w-full"
                >
                    Generate Link
                </button>

                {generatedLink && (
                    <div className="bg-soft-gray rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-dark-navy">Generated Link:</span>
                            <button
                                onClick={copyToClipboard}
                                className="flex items-center gap-2 text-trust-blue hover:text-premium-indigo transition-colors"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-4 h-4" />
                                        <span className="text-sm">Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-4 h-4" />
                                        <span className="text-sm">Copy</span>
                                    </>
                                )}
                            </button>
                        </div>
                        <div className="bg-white rounded p-3 break-all text-sm font-mono text-slate-gray">
                            {generatedLink}
                        </div>

                        <div className="mt-4">
                            <a
                                href={generatedLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-success w-full text-center"
                            >
                                Test Link
                            </a>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-dark-navy mb-3">How to use:</h3>
                <ol className="space-y-2 text-sm text-slate-gray list-decimal list-inside">
                    <li>Enter the phone number with country code (no + or spaces)</li>
                    <li>Optionally add a pre-filled message</li>
                    <li>Click "Generate Link" to create your WhatsApp link</li>
                    <li>Copy and share the link anywhere</li>
                    <li>When clicked, it opens WhatsApp with your number and message</li>
                </ol>
            </div>
        </div>
    );
}
