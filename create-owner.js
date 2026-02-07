const { createClient } = require('@supabase/supabase-js');

// Use the credentials you provided
const supabaseUrl = 'https://wxjaqxjsuapznyljenxn.supabase.co';
const serviceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4amFxamlzdWFwem55bGplbnhuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDM2MjE2NSwiZXhwIjoyMDg1OTM4MTY1fQ.FyPRtxd0vn8fiLMiSja1lw2ahXtPRWaOlE_J_0LRGu4';

const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});

async function createOwner() {
    console.log('--- Creating Owner Account ---');

    const email = 'owner@bulkwamsg.com';
    const password = 'AdminPassword123!'; // You can change this later

    // 1. Create the user in Auth
    const { data: authUser, error: authError } = await supabase.auth.admin.createUser({
        email: email,
        password: password,
        email_confirm: true
    });

    if (authError) {
        if (authError.message.includes('already registered')) {
            console.log('✅ Owner account already exists in Auth.');
        } else {
            console.error('❌ Error creating auth user:', authError.message);
            return;
        }
    } else {
        console.log('✅ Owner auth account created successfully.');
    }

    // 2. Ensure profile exists and is PRO
    // The ID might be from the new user or we might need to fetch it if they already existed
    const userId = authUser?.user?.id;

    if (userId) {
        const { error: profileError } = await supabase
            .from('profiles')
            .upsert({
                id: userId,
                email: email,
                plan: 'pro',
                name: 'System Owner'
            });

        if (profileError) {
            console.error('❌ Error creating profile:', profileError.message);
        } else {
            console.log('✅ Owner profile initialized as PRO.');
        }
    }

    console.log('\n--- Account Details ---');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log('------------------------');
    console.log('You can now log in at http://localhost:3006/login');
}

createOwner();
