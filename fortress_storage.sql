-- Fortress Persistent Storage Upgrade
-- Moves WhatsApp session data to the database to survive cloud restarts
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS whatsapp_session JSONB;

-- Performance index
CREATE INDEX IF NOT EXISTS idx_profiles_whatsapp_session ON profiles USING GIN (whatsapp_session);
