from services.video_processing.pipelines.public_pipeline import summarize_video


def test_public_summary_has_status():
    summary = summarize_video("demo.mp4")
    assert summary["status"] == "review-ready"
