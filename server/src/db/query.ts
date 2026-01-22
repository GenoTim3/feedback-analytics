import { pool } from "./pool";
import { QueryResultRow } from "pg";

export async function query<T extends QueryResultRow = any>(sql: string, params: any[] = []) {
  const result = await pool.query<T>(sql, params);
  return result.rows;
}
