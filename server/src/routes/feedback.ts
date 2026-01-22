import { Router } from "express";
import fs from "fs";
import path from "path";
import { query } from "../db/query";

const router = Router();

const sql = fs.readFileSync(
  path.join(__dirname, "../sql/getFeedback.sql"),
  "utf8"
);

router.get("/", async (req, res) => {
  const limit = Number(req.query.limit ?? 20);
  const offset = Number(req.query.offset ?? 0);

  const rows = await query(sql, [limit, offset]);
  res.json(rows);
});

export default router;
