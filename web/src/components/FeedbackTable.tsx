import type { FeedbackRow } from "../api";

export default function FeedbackTable(props: {
  rows: FeedbackRow[];
  limit: number;
  offset: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  const { rows, limit, offset, onPrev, onNext } = props;

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 12, overflow: "hidden" }}>
      <div style={{ padding: 12, display: "flex", justifyContent: "space-between" }}>
        <strong>Feedback</strong>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button onClick={onPrev} disabled={offset === 0}>
            Prev
          </button>
          <button onClick={onNext} disabled={rows.length < limit}>
            Next
          </button>
        </div>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f6f6f6" }}>
            <Th>ID</Th>
            <Th>Email</Th>
            <Th>Rating</Th>
            <Th>Comment</Th>
            <Th>Created</Th>
          </tr>
        </thead>

        <tbody>
          {rows.map((r) => (
            <tr key={r.id}>
              <Td>{r.id}</Td>
              <Td>{r.user_email}</Td>
              <Td>{r.rating}</Td>
              <Td>{r.comment ?? ""}</Td>
              <Td>{new Date(r.created_at).toLocaleString()}</Td>
            </tr>
          ))}

          {rows.length === 0 && (
            <tr>
              <Td colSpan={5}>No rows found.</Td>
            </tr>
          )}
        </tbody>
      </table>

      <div style={{ padding: 12, fontSize: 12, opacity: 0.7 }}>
        Showing {offset + 1} – {offset + rows.length}
      </div>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th style={{ textAlign: "left", padding: 10, borderBottom: "1px solid #ddd" }}>
      {children}
    </th>
  );
}

function Td({
  children,
  colSpan
}: {
  children: React.ReactNode;
  colSpan?: number;
}) {
  return (
    <td
      colSpan={colSpan}
      style={{
        padding: 10,
        borderBottom: "1px solid #eee",
        verticalAlign: "top"
      }}
    >
      {children}
    </td>
  );
}
