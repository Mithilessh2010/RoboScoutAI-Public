from services.autoscore_worker import app as worker_app


def test_health_shape():
    response = worker_app.health()
    assert response["ok"] is True
    assert response["service"] == "public-worker-scaffold"
