import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { data, error } = await supabase
            .from('contacts')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false });

        if (error) throw error;
        return NextResponse.json({ success: true, contacts: data });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await req.json();
        const { contacts } = body; // Array of { name, phone, tags }

        if (!contacts || !Array.isArray(contacts)) {
            return NextResponse.json({ error: 'Contacts array required' }, { status: 400 });
        }

        const contactsToInsert = contacts.map(c => ({
            user_id: user.id,
            name: c.name,
            phone: c.phone,
            tags: c.tags || [],
            status: 'active'
        }));

        const { data, error } = await supabase
            .from('contacts')
            .insert(contactsToInsert)
            .select();

        if (error) throw error;
        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
