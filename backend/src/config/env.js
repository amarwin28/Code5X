import "dotenv/config";

export const env = {
  port: Number(process.env.PORT || 5000),
  nodeEnv: process.env.NODE_ENV || "development",
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  frontendUrl: process.env.FRONTEND_URL || process.env.CORS_ORIGIN || "http://localhost:5173",
  corsOrigin: process.env.CORS_ORIGIN || process.env.FRONTEND_URL || "http://localhost:5173"
};

if (!env.databaseUrl) {
  console.warn("DATABASE_URL is not set.");
}

if (!env.jwtSecret) {
  console.warn("JWT_SECRET is not set.");
}