"""Maintenance entry point for stale review sessions."""


def clean_stale_jobs(max_age_hours: int = 24) -> dict:
    return {"maxAgeHours": max_age_hours, "deleted": 0, "status": "complete"}


if __name__ == "__main__":
    print(clean_stale_jobs())
