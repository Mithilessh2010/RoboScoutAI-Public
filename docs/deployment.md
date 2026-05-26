# Deployment

RoboScoutAI is split across a web frontend and a worker service.

## Web

The web package is shaped for Vercel-style deployments.

```bash
npm run build -w packages/web
```

## Worker

The worker service can be containerized for Fly-style deployment.

```bash
docker build -f services/autoscore-worker/Dockerfile .
```

Runtime credentials, storage buckets, databases, and model artifact locations are configured in the hosted environment.
