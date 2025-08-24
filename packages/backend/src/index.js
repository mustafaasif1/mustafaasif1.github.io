require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
// For AWS Elastic Beanstalk, use process.env.PORT
const port = process.env.PORT || 8000;

// Production security configurations
if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          connectSrc: ["'self'", 'https://mustafaasif1.github.io'],
          imgSrc: ["'self'", 'data:', 'https:'],
          scriptSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
        },
      },
    }),
  );
}

// Middleware
app.use(helmet()); // Security headers
app.use(morgan('dev')); // Logging
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// CORS configuration for direct access from GitHub Pages
const corsOptions = {
  origin: ['https://mustafaasif1.github.io', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Import routes
const chatRoutes = require('./routes/chat');

// Create base router for /api
const apiRouter = express.Router();

// Health check endpoint
apiRouter.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Welcome endpoint
apiRouter.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// Mount chat routes
apiRouter.use('/chat', chatRoutes);

// Mount all routes under /api
app.use('/api', apiRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
