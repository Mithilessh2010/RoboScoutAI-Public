# API

## Autoscore Jobs

`GET /api/autoscore/jobs`

Returns a list of match review jobs.

```json
{
  "jobs": [
    {
      "id": "public-demo",
      "matchName": "Public Demo Match",
      "status": "review-ready",
      "progress": 100
    }
  ]
}
```

## Worker Health

`GET /health`

Returns worker readiness and public artifact status.
