import type { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof SyntaxError && "body" in err) {
    res.status(400).json({
      error: "INVALID_JSON"
    });
    return;
  }

  console.error(err);

  res.status(500).json({
    error: "INTERNAL_SERVER_ERROR",
    message: "Internal server error"
  });
};