# Video Processing

This folder documents the public shape of the video-processing service.

Production model weights, tuned inference code, datasets, calibration files, and scoring internals are not included in this repository.

## Public Pipeline Shape

1. Ingest match video metadata.
2. Prepare frames for review.
3. Generate a public summary object.
4. Return review-ready UI data.

The hosted RoboScoutAI frontend connects to production services separately.
