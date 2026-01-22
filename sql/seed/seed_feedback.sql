INSERT INTO feedback (user_email, rating, comment, created_at)
SELECT
  'user' || gs || '@example.com',
  (random() * 4 + 1)::int,
  CASE
    WHEN random() > 0.7 THEN 'Great product'
    WHEN random() > 0.4 THEN 'It works fine'
    ELSE 'Needs improvement'
  END,
  NOW() - (random() * interval '30 days')
FROM generate_series(1, 200) gs;
