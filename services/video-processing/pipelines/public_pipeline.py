def summarize_video(video_name: str) -> dict:
    """Return a public demo summary for project presentation."""
    return {
        "videoName": video_name,
        "status": "review-ready",
        "detections": [],
        "note": "Production inference is not included in the public repository.",
    }
