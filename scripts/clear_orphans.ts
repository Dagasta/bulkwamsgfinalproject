import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function clearOrphans() {
    console.log('--- Clearing Orphaned Campaigns ---');
    const { data: orphans, error } = await supabase
        .from('campaigns')
        .update({ status: 'failed' })
        .eq('status', 'sending');

    if (error) {
        console.error('Failed to clear orphans:', error.message);
    } else {
        console.log('Successfully neutralized orphaned signals.');
    }
}

clearOrphans();
