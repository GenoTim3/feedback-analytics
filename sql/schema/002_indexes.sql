BEGIN;

-- Speed up date-based queries
CREATE INDEX IF NOT EXISTS idx_feedback_created_at
ON feedback (created_at DESC);

-- Speed up rating filters
CREATE INDEX IF NOT EXISTS idx_feedback_rating
ON feedback (rating);

-- Common admin query pattern
CREATE INDEX IF NOT EXISTS idx_feedback_rating_created_at
ON feedback (rating, created_at DESC);

COMMIT;
