import type { StatsResponse } from "../api";

export default function StatsCards({ stats }: { stats: StatsResponse | null }) {
  const cardStyle: React.CSSProperties = {
    padding: 14,
    border: "1px solid #ddd",
    borderRadius: 12,
    minWidth: 180
  };

  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <div style={cardStyle}>
        <div style={{ fontSize: 12, opacity: 0.7 }}>Total feedback</div>
        <div style={{ fontSize: 24, fontWeight: 700 }}>
          {stats ? stats.total_feedback : "…"}
        </div>
      </div>

      <div style={cardStyle}>
        <div style={{ fontSize: 12, opacity: 0.7 }}>Average rating</div>
        <div style={{ fontSize: 24, fontWeight: 700 }}>
          {stats ? stats.average_rating : "…"}
        </div>
      </div>

      <div style={cardStyle}>
        <div style={{ fontSize: 12, opacity: 0.7 }}>Positive % (≥ 4)</div>
        <div style={{ fontSize: 24, fontWeight: 700 }}>
          {stats ? `${stats.positive_percentage}%` : "…"}
        </div>
      </div>
    </div>
  );
}
