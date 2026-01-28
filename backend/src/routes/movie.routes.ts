import { Router } from "express";
import {
  getPopular,
  searchMovies,
  getMovieDetail
} from "../controllers/movie.controller";

const router = Router();

router.get("/", getPopular);
router.get("/search", searchMovies);
router.get("/:id", getMovieDetail);

export default router;
