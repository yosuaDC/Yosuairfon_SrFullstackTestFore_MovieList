
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import movieRoutes from "./routes/movie.routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/movies", movieRoutes);

export default app;
