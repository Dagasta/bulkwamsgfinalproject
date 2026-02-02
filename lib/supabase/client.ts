import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

// Temporary fallback values to prevent errors when Supabase is not configured
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTI4MDAsImV4cCI6MTk2MDc2ODgwMH0.placeholder';

// Final fallback to prevent initialization crash
if (typeof process !== 'undefined') {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) process.env.NEXT_PUBLIC_SUPABASE_URL = supabaseUrl;
    if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = supabaseKey;
}

export const createClient = () => createClientComponentClient();
