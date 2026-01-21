-- =====================================================
-- 001_create_tables.sql
-- Feedback Analytics Dashboard
-- =====================================================

BEGIN;

-- -----------------------------
-- Feedback table
-- -----------------------------
CREATE TABLE IF NOT EXISTS feedback (
    id            BIGSERIAL PRIMARY KEY,

    user_email    TEXT NOT NULL,
    rating        INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment       TEXT,

    created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- -----------------------------
-- Optional: constrain obvious bad data
-- -----------------------------
ALTER TABLE feedback
ADD CONSTRAINT feedback_email_format
CHECK (position('@' IN user_email) > 1);

COMMIT;
