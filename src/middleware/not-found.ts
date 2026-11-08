import type { RequestHandler } from "express";

export const notFound: RequestHandler = (req, res, next) => {
  res.status(404).json({
    error: "NOT_FOUND",
    method: req.method,
    path: req.path // возвращает путь запроса без query-параметров
  })
}