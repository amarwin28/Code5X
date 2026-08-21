const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const env = require('./config/env');

const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
const institutionRoutes = require('./routes/institutionRoutes');
const recruiterRoutes = require('./routes/recruiterRoutes');
const opportunityRoutes = require('./routes/opportunityRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const placementRoutes = require('./routes/placementRoutes');

const { errorHandler, notFoundHandler } = require('./middleware/errorMiddleware');
const { sendSuccess } = require('./utils/response');

const app = express();

// Security HTTP headers
app.use(helmet());

// CORS configuration
app.use(
  cors({
    origin: env.CORS_ORIGIN,
    credentials: true,
  })
);

// Logging
if (env.NODE_ENV !== 'test') {
  app.use(morgan(env.NODE_ENV === 'development' ? 'dev' : 'combined'));
}

// Body parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting for API
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: env.NODE_ENV === 'test' ? 10000 : 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again after 15 minutes',
  },
});

app.use('/api', apiLimiter);

// Root & Health check routes
app.get('/', (req, res) => {
  return sendSuccess(
    res,
    {
      name: 'Placement & Recruitment Management API',
      version: '1.0.0',
      status: 'active',
      endpoints: {
        health: '/health',
        auth: '/api/v1/auth',
        students: '/api/v1/students',
        institutions: '/api/v1/institutions',
        recruiters: '/api/v1/recruiters',
        opportunities: '/api/v1/opportunities',
        applications: '/api/v1/applications',
        placements: '/api/v1/placements',
      },
    },
    'Welcome to the Placement API'
  );
});

app.get('/health', (req, res) => {
  return sendSuccess(
    res,
    {
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      status: 'OK',
    },
    'Server is healthy'
  );
});

// API Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/institutions', institutionRoutes);
app.use('/api/v1/recruiters', recruiterRoutes);
app.use('/api/v1/opportunities', opportunityRoutes);
app.use('/api/v1/applications', applicationRoutes);
app.use('/api/v1/placements', placementRoutes);

// Catch 404
app.use(notFoundHandler);

// Global Error Handler
app.use(errorHandler);

module.exports = app;
