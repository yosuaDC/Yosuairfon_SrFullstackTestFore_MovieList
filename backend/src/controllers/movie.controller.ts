import { Request, Response } from "express";
import {
  fetchPopular,
  fetchSearch,
  fetchDetail
} from "../services/tmdb.service";

export const getPopular = async (
  req: Request<{}, {}, {}, { page?: string }>,
  res: Response
) => {
  const page = Number(req.query.page || 1);
  const data = await fetchPopular(page);
  res.json(data);
};

export const searchMovies = async (
  req: Request<{}, {}, {}, { q?: string; page?: string }>,
  res: Response
) => {
  const { q, page } = req.query;

  if (!q) {
    return res.status(400).json({
      error: "Query parameter 'q' is required"
    });
  }

  const data = await fetchSearch(q, Number(page || 1));
  res.json(data);
};

export const getMovieDetail = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;
  const data = await fetchDetail(id);
  res.json(data);
};
