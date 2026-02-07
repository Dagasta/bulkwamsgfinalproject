-- Upgrade profiles for Global-Sync (Cluster-Ready)
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS whatsapp_status TEXT DEFAULT 'idle';
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS whatsapp_qr TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS whatsapp_last_scan TIMESTAMP WITH TIME ZONE;

-- Index for high-speed status polling
CREATE INDEX IF NOT EXISTS idx_profiles_whatsapp_status ON profiles(whatsapp_status);
