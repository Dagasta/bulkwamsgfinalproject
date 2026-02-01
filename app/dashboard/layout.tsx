import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Sidebar from '@/components/dashboard/Sidebar';

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const supabase = createClient();
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
        redirect('/login');
    }

    return (
        <div className="min-h-screen bg-soft-gray">
            <Sidebar />
            <div className="ml-64">
                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
