export function notFound(req, res) {
  res.status(404).json({ success: false, message: `Route not found: ${req.method} ${req.path}` });
}

export function errorHandler(err, req, res, next) {
  const statusCode = err.status || err.statusCode || 500;
  if (statusCode >= 500 && process.env.NODE_ENV !== "test") {
    console.error(err);
  }

  if (err.code === "P2025") {
    return res.status(404).json({
      success: false,
      message: "Resource not found"
    });
  }

  if (err.code === "P2002") {
    return res.status(409).json({
      success: false,
      message: "A resource with this unique field already exists",
      details: { target: err.meta?.target }
    });
  }

  if (err.code === "P2003") {
    return res.status(400).json({
      success: false,
      message: "Foreign key constraint failed",
      details: { field: err.meta?.field_name }
    });
  }

  return res.status(statusCode).json({
    success: false,
    message: err.message || "Internal server error",
    ...(err.details ? { details: err.details } : {})
  });
}