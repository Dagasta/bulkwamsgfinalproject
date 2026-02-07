import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wxjaqxjsuapznyljenxn.supabase.co';
const serviceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4amFxamlzdWFwem55bGplbnhuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDM2MjE2NSwiZXhwIjoyMDg1OTM4MTY1fQ.FyPRtxd0vn8fiLMiSja1lw2ahXtPRWaOlE_J_0LRGu4';

const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});

async function createOwner() {
    const email = 'owner@bulkwamsg.com';
    const password = 'AdminPassword123!';

    console.log(`Attempting to create owner: ${email}`);

    // 1. Create User
    const { data: authUser, error: authError } = await supabase.auth.admin.createUser({
        email,
        password,
        email_confirm: true
    });

    if (authError) {
        if (authError.message.includes('already registered')) {
            console.log('User already exists, fetching existing user...');
            const { data: users } = await supabase.auth.admin.listUsers();
            const existingUser = users.users.find(u => u.email === email);
            if (existingUser) {
                await updateProfile(existingUser.id, email);
            }
        } else {
            console.error('Error:', authError.message);
        }
    } else {
        console.log('User created successfully.');
        await updateProfile(authUser.user.id, email);
    }
}

async function updateProfile(id, email) {
    const { error } = await supabase
        .from('profiles')
        .upsert({ id, email, plan: 'pro', name: 'System Owner' });

    if (error) console.error('Profile Error:', error.message);
    else console.log('Successfully set as PRO.');
}

createOwner();
