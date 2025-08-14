# Docker Setup Guide

This portfolio website is now containerized with Docker for easy development and deployment.

## 🐳 Prerequisites

- **Docker Desktop** installed on your machine
  - Download from: https://www.docker.com/products/docker-desktop/
- **Docker Compose** (usually included with Docker Desktop)

## 🚀 Quick Start

### Option 1: Production Build (Recommended)

1. **Build and run the production container**:
   ```bash
   docker-compose up --build
   ```

2. **Open your browser** to: http://localhost:3000

### Option 2: Development Mode (with hot reloading)

1. **Run in development mode**:
   ```bash
   docker-compose --profile dev up --build
   ```

2. **Open your browser** to: http://localhost:3001

## 📋 Available Commands

### Production Commands
```bash
# Build and start production container
docker-compose up --build

# Start in background
docker-compose up -d --build

# Stop containers
docker-compose down

# View logs
docker-compose logs -f

# Rebuild without cache
docker-compose build --no-cache
```

### Development Commands
```bash
# Start development environment
docker-compose --profile dev up --build

# Start development in background
docker-compose --profile dev up -d --build

# Stop development containers
docker-compose --profile dev down
```

### Docker Commands (without compose)
```bash
# Build production image
docker build -t portfolio-website .

# Run production container
docker run -p 3000:3000 portfolio-website

# Build development image
docker build -f Dockerfile.dev -t portfolio-website-dev .

# Run development container
docker run -p 3000:3000 -v $(pwd):/app portfolio-website-dev
```

## 🏗️ Docker Architecture

### Production Setup
- **Multi-stage build** for optimized image size
- **Standalone output** for better performance
- **Non-root user** for security
- **Health checks** for monitoring

### Development Setup
- **Volume mounting** for hot reloading
- **Development dependencies** included
- **Live code changes** without rebuilding

## 🔧 Configuration

### Environment Variables
You can customize the application by setting environment variables:

```bash
# In docker-compose.yml or as environment variables
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

### Port Configuration
- **Production**: http://localhost:3000
- **Development**: http://localhost:3001

To change ports, modify the `docker-compose.yml` file:
```yaml
ports:
  - "8080:3000"  # Change 8080 to your preferred port
```

## 🚀 Deployment

### Local Deployment
```bash
# Build and run locally
docker-compose up --build -d
```

### Cloud Deployment
The Docker setup is ready for deployment to:
- **AWS ECS/Fargate**
- **Google Cloud Run**
- **Azure Container Instances**
- **DigitalOcean App Platform**
- **Heroku Container Registry**

### Example: Deploy to AWS ECS
```bash
# Build and tag image
docker build -t your-registry/portfolio-website:latest .

# Push to registry
docker push your-registry/portfolio-website:latest

# Deploy to ECS (using AWS CLI or console)
```

## 🔍 Troubleshooting

### Common Issues

1. **Port already in use**:
   ```bash
   # Check what's using port 3000
   netstat -an | grep :3000
   
   # Change port in docker-compose.yml
   ports:
     - "3001:3000"
   ```

2. **Build fails**:
   ```bash
   # Clean build
   docker-compose build --no-cache
   
   # Check logs
   docker-compose logs
   ```

3. **Container won't start**:
   ```bash
   # Check container status
   docker-compose ps
   
   # View logs
   docker-compose logs portfolio
   ```

### Performance Optimization

1. **Use .dockerignore** to exclude unnecessary files
2. **Multi-stage builds** reduce final image size
3. **Alpine Linux** base image for smaller footprint
4. **Production-only dependencies** in final image

## 📊 Monitoring

### Health Checks
The application includes health checks at `/api/health`:
```bash
# Test health endpoint
curl http://localhost:3000/api/health
```

### Logs
```bash
# View application logs
docker-compose logs -f portfolio

# View development logs
docker-compose --profile dev logs -f portfolio-dev
```

## 🎯 Benefits of Docker Setup

✅ **Consistent Environment**: Same setup across all machines
✅ **Easy Deployment**: One command to deploy anywhere
✅ **Isolation**: No conflicts with local Node.js versions
✅ **Scalability**: Easy to scale horizontally
✅ **Version Control**: Exact environment reproduction
✅ **Development/Production Parity**: Same container for both

## 🆘 Need Help?

If you encounter issues:
1. Check the troubleshooting section above
2. Verify Docker Desktop is running
3. Ensure ports are not in use
4. Check the logs with `docker-compose logs`

The portfolio website is now fully containerized and ready for deployment! 🎉
