const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Basic env parser
const envContent = fs.readFileSync(path.join(__dirname, '.env.local'), 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
    const [key, ...rest] = line.split('=');
    if (key && rest.length > 0) env[key.trim()] = rest.join('=').trim();
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('Testing connection to:', supabaseUrl);

const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
    console.log('--- 🛡️ Supabase Diagnostic ---');

    // 1. Core Connection Check
    const { data: authTest, error: authError } = await supabase.auth.getUser();
    if (authError && authError.message !== 'Auth session missing!') {
        console.error('❌ Connection Rejected by Supabase:', authError.message);
        return;
    }
    console.log('✅ Network: Connected to Supabase API.');

    // 2. Data Check
    const { data: profiles, error: profileError, count } = await supabase
        .from('profiles')
        .select('*', { count: 'exact' });

    if (profileError) {
        console.error('⚠️ Database Error:', profileError.message);
        console.log('💡 Note: This might mean the tables haven\'t been created yet.');
    } else {
        console.log('✅ Database: Tables are readable.');
        console.log('📊 Total Users Found:', count);

        if (profiles && profiles.length > 0) {
            console.log('📨 Registered Users:');
            profiles.forEach(p => console.log(` - ${p.email} | Plan: ${p.plan}`));
        } else {
            console.log('⚠️ No users found in the "profiles" table.');
        }
    }
}

test();
