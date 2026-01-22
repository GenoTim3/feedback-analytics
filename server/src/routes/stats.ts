import { Router } from "express";
import fs from "fs";
import path from "path";
import { query } from "../db/query";

const router = Router();

const sql = fs.readFileSync(
  path.join(__dirname, "../sql/getStats.sql"),
  "utf8"
);

router.get("/", async (_req, res) => {
  const [stats] = await query(sql);
  res.json(stats);
});

export default router;
