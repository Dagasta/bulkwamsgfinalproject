-- Global Cluster Lock for Vercel Multi-Instance Stability
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS whatsapp_lock_id TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS whatsapp_lock_at TIMESTAMP WITH TIME ZONE;

-- Performance index for lock checking
CREATE INDEX IF NOT EXISTS idx_profiles_whatsapp_lock ON profiles(whatsapp_lock_id);
