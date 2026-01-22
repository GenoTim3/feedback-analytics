import { Pool } from "pg";

export const pool = new Pool({
  database: "feedback_analytics"
});
