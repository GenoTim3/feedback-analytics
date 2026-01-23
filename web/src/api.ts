export type StatsResponse = {
  total_feedback: number;
  average_rating: number;
  positive_percentage: number;
};

export type FeedbackRow = {
  id: number;
  user_email: string;
  rating: number;
  comment: string | null;
  created_at: string;
};

const API_BASE = "http://localhost:4000/api";

export async function fetchStats(): Promise<StatsResponse> {
  const res = await fetch(`${API_BASE}/stats`);
  if (!res.ok) throw new Error("Failed to fetch stats");
  return res.json();
}

export async function fetchFeedback(params: {
  limit: number;
  offset: number;
}): Promise<FeedbackRow[]> {
  const q = new URLSearchParams({
    limit: String(params.limit),
    offset: String(params.offset)
  });

  const res = await fetch(`${API_BASE}/feedback?${q.toString()}`);
  if (!res.ok) throw new Error("Failed to fetch feedback");
  return res.json();
}
