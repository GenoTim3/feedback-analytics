SELECT
  id,
  user_email,
  rating,
  comment,
  created_at
FROM feedback
ORDER BY created_at DESC
LIMIT $1 OFFSET $2;
