const app = require('./app');
const env = require('./config/env');
const { connectDatabase, disconnectDatabase } = require('./config/database');
const logger = require('./utils/logger');

let server;

const startServer = async () => {
  await connectDatabase();

  server = app.listen(env.PORT, () => {
    logger.info(`🚀 Server running in ${env.NODE_ENV} mode on port ${env.PORT}`);
    logger.info(`🔗 API Root: http://localhost:${env.PORT}`);
    logger.info(`🩺 Health Check: http://localhost:${env.PORT}/health`);
  });

  const handleShutdown = async (signal) => {
    logger.info(`${signal} received. Shutting down gracefully...`);
    if (server) {
      server.close(async () => {
        logger.info('HTTP server closed.');
        await disconnectDatabase();
        process.exit(0);
      });
    } else {
      await disconnectDatabase();
      process.exit(0);
    }
  };

  process.on('SIGTERM', () => handleShutdown('SIGTERM'));
  process.on('SIGINT', () => handleShutdown('SIGINT'));
};

startServer().catch((err) => {
  logger.error('Failed to start server:', err);
  process.exit(1);
});
