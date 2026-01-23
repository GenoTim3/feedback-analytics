import { useEffect, useState } from "react";
import { fetchFeedback, fetchStats, type FeedbackRow, type StatsResponse } from "../api";
import StatsCards from "../components/StatsCards";
import FeedbackTable from "../components/FeedbackTable";

export default function Dashboard() {
  const [stats, setStats] = useState<StatsResponse | null>(null);
  const [rows, setRows] = useState<FeedbackRow[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [limit] = useState(20);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        setError(null);
        const [s, f] = await Promise.all([
          fetchStats(),
          fetchFeedback({ limit, offset })
        ]);

        if (!mounted) return;
        setStats(s);
        setRows(f);
      } catch (e: any) {
        setError(e?.message ?? "Something went wrong");
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, [limit, offset]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <header>
        <h1 style={{ margin: 0 }}>Feedback Analytics Dashboard</h1>
        <p style={{ margin: "6px 0 0", opacity: 0.8 }}>
          Raw feedback table + SQL-powered stats from PostgreSQL
        </p>
      </header>

      {error && (
        <div
          style={{
            padding: 12,
            border: "1px solid #e11d48",
            borderRadius: 8
          }}
        >
          <strong>Error:</strong> {error}
        </div>
      )}

      <StatsCards stats={stats} />

      <FeedbackTable
        rows={rows}
        limit={limit}
        offset={offset}
        onPrev={() => setOffset((o) => Math.max(0, o - limit))}
        onNext={() => setOffset((o) => o + limit)}
      />
    </div>
  );
}
