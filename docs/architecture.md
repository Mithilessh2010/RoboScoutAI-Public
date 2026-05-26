# Architecture

RoboScoutAI is organized as a monorepo with separate areas for the frontend, API layer, worker services, video processing, scripts, and documentation.

## Public Components

- `packages/web` - frontend pages and UI components
- `packages/server` - public server contracts and data shapes
- `services/autoscore-worker` - worker API shape
- `services/video-processing` - video pipeline documentation and public stubs
- `scripts` - local utility entry points

## Hosted Components

Production services, model artifacts, database credentials, upload storage, and scoring internals are managed outside this public repository.
