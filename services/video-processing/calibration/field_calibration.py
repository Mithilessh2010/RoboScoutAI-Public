"""Public calibration helpers."""


def normalize_point(point: dict) -> dict:
    return {
        "x": max(0.0, min(1.0, float(point.get("x", 0)))),
        "y": max(0.0, min(1.0, float(point.get("y", 0)))),
    }


def suggest_field_zones(*_args, **_kwargs):
    raise RuntimeError("Automatic field-zone suggestions require hosted model assets.")
