export function success(res, data, message = "Success", status = 200) {
  return res.status(status).json({ success: true, message, data });
}

export function error(res, message = "Internal server error", status = 500, details) {
  return res.status(status).json({
    success: false,
    message,
    ...(details ? { details } : {})
  });
}