import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary Colors
                'trust-blue': '#0066FF',
                'success-green': '#25D366',
                'premium-indigo': '#6366F1',

                // Secondary Colors
                'dark-navy': '#0F172A',
                'slate-gray': '#64748B',
                'soft-gray': '#F8FAFC',

                // Accent Colors
                'warning-amber': '#F59E0B',
                'error-red': '#EF4444',
                'info-cyan': '#06B6D4',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #0066FF 0%, #6366F1 100%)',
                'gradient-success': 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                'gradient-warm': 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
            },
            boxShadow: {
                'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
                'primary': '0 4px 6px rgba(0, 102, 255, 0.2)',
                'success': '0 4px 6px rgba(37, 211, 102, 0.2)',
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
                'slide-down': 'slideDown 0.3s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
