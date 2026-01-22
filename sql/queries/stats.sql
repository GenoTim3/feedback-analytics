-- Overall feedback stats
SELECT
  COUNT(*)                    AS total_feedback,
  ROUND(AVG(rating), 2)       AS average_rating,
  ROUND(
    COUNT(*) FILTER (WHERE rating >= 4)::numeric
    / COUNT(*) * 100,
    2
  )                           AS positive_percentage
FROM feedback;
