import express from "express";
import feedbackRoutes from "./routes/feedback";
import statsRoutes from "./routes/stats";

const app = express();

app.use(express.json());

app.use("/api/feedback", feedbackRoutes);
app.use("/api/stats", statsRoutes);

export default app;
