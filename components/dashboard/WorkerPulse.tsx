'use client';

import { useEffect } from 'react';

/**
 * WorkerPulse Component
 * A non-visual component that triggers the background worker process 
 * to handle scheduled messages every 60 seconds.
 */
export default function WorkerPulse() {
    useEffect(() => {
        const triggerWorker = async () => {
            try {
                // Ping the worker API to process any due scheduled messages
                const response = await fetch('/api/worker/process', { method: 'GET' });
                const data = await response.json();
                if (data.processed > 0) {
                    console.log(`[WorkerPulse] ✅ Successfully processed ${data.processed} scheduled messages!`);
                } else {
                    console.log('[WorkerPulse] 💤 Heartbeat check: No messages due.');
                }
            } catch (err) {
                console.error('[WorkerPulse] Error triggering worker:', err);
            }
        };

        // Initial trigger
        triggerWorker();

        // Set up interval (every 60 seconds)
        const interval = setInterval(triggerWorker, 60000);

        return () => clearInterval(interval);
    }, []);

    return null; // This component renders nothing
}
