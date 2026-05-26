# RoboScoutAI Public

RoboScoutAI is a robotics scouting and match review interface built for teams that want a fast way to organize match video, watch streams, and inspect scouting workflows.

Live frontend: https://roboscoutai-web.vercel.app

## Overview

This public repository contains the project layout used for submission and review. It includes a lightweight static interface, frontend route examples, service contracts, worker stubs, video-processing documentation, and utility script entry points that demonstrate the RoboScoutAI product structure.

## Features Highlighted

- Match review workspace concept
- Watch room and stream wall presentation
- Autoscore workflow overview
- Responsive public-facing website layout
- Clean project documentation for judges and reviewers

## Project Structure

```text
.
├── index.html
├── packages/
│   ├── web/
│   └── server/
├── services/
│   ├── autoscore-worker/
│   └── video-processing/
├── scripts/
├── docs/
├── api/
└── assets/
```

## Run Locally

Open `index.html` in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Notes

The production app and supporting services are hosted separately. Model artifacts, private scoring internals, credentials, datasets, and deployment-only configuration are not stored in this public repository.

Codex helped with the making of this website.
