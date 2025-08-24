# Mustafa's Portfolio Monorepo

This monorepo contains both the frontend (React) and backend (Express.js) code for Mustafa's portfolio website, with the frontend deployed to GitHub Pages and the backend to AWS.

## Architecture Overview

```
                          ┌─────────────────┐
                          │                 │
                          │  GitHub Pages   │
                          │   (Frontend)    │
                          │                 │
                          └────────┬────────┘
                                   │
                                   │ API Calls
                                   │
                            ┌──────▼─────────┐
                            │                │
                            │  AWS Backend   │
                            │                │
                            └────────────────┘
```

## Project Structure

```
.
├── packages/
│   ├── frontend/    # React frontend application
│   └── backend/     # Express.js backend server
├── package.json     # Root package.json for monorepo management
└── pnpm-workspace.yaml
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)

### Installation

1. Install dependencies:

   ```bash
   # Clean and install all dependencies
   pnpm clean && pnpm install:all
   ```

2. Set up environment variables:

   ```bash
   # Development (.env)
   # Frontend
   REACT_APP_API_URL=http://localhost:3001/api
   REACT_APP_ENV=development

   # Backend
   PORT=3001
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:3000
   ```

### Development

```bash
# Start both frontend and backend
pnpm dev

# Or run separately
pnpm frontend dev  # Frontend only
pnpm backend dev   # Backend only
```

## Available Scripts

- `pnpm clean` - Remove all node_modules
- `pnpm install:all` - Install all dependencies
- `pnpm dev` - Start development servers
- `pnpm build` - Build all packages
- `pnpm frontend <cmd>` - Run frontend command
- `pnpm backend <cmd>` - Run backend command
- `pnpm format` - Format code

## Deployment

### Frontend (GitHub Pages)

1. Set production environment:

   ```bash
   # packages/frontend/.env.production
   REACT_APP_API_URL=https://your-aws-domain.com/api
   REACT_APP_ENV=production
   ```

2. Deploy:
   ```bash
   pnpm frontend deploy
   ```

### Backend (AWS)

1. Set AWS environment:

   ```bash
   PORT=8081
   NODE_ENV=production
   ```

2. Create and upload deployment package:
   ```bash
   cd packages/backend
   zip -r ../deploy.zip .
   # Upload deploy.zip to AWS Elastic Beanstalk
   ```

### Deployment Workflow

1. Make changes:

   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```

2. Deploy:

   ```bash
   # Frontend
   pnpm frontend deploy

   # Backend
   cd packages/backend
   zip -r ../deploy.zip .
   # Upload to AWS
   ```

## Troubleshooting

### Development Issues

1. Dependency problems:

   ```bash
   pnpm clean
   pnpm install:all
   ```

2. CORS errors:
   - Check backend CORS settings
   - Verify API URLs in frontend
   - Check browser console

### Production Issues

1. SSL/HTTPS:
   - Ensure AWS SSL certificate is valid
   - Use https:// for all API calls

2. Monitoring:
   - AWS CloudWatch for backend
   - GitHub Pages status for frontend

## Testing

1. Development URLs:
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:3001/api`
   - Health check: `http://localhost:3001/api/health`

2. Production URLs:
   - Frontend: `https://mustafaasif1.github.io`
   - Backend: `https://your-aws-domain.com/api`
   - Health check: `https://your-aws-domain.com/api/health`
