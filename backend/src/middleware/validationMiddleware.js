export function validateBody(requiredFields = []) {
  return (req, res, next) => {
    const missing = requiredFields.filter(
      (field) => req.body?.[field] === undefined || req.body?.[field] === ""
    );

    if (missing.length) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        details: { missing }
      });
    }

    next();
  };
}