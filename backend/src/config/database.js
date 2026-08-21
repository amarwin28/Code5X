const { PrismaClient } = require('@prisma/client');
const logger = require('../utils/logger');
const env = require('./env');

const prisma = new PrismaClient({
  log: env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error'],
});

const connectDatabase = async () => {
  try {
    await prisma.$connect();
    logger.info('Database connected successfully via Prisma');
  } catch (error) {
    logger.error('Failed to connect to database:', error);
    process.exit(1);
  }
};

const disconnectDatabase = async () => {
  try {
    await prisma.$disconnect();
    logger.info('Database disconnected successfully');
  } catch (error) {
    logger.error('Error disconnecting from database:', error);
  }
};

module.exports = {
  prisma,
  connectDatabase,
  disconnectDatabase,
};
