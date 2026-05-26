"""Public object detector interface.

The production detector loads private model artifacts outside this repository.
"""


class ObjectDetector:
    def __init__(self, model_name: str) -> None:
        self.model_name = model_name

    def predict(self, frame_path: str) -> list[dict]:
        raise RuntimeError(
            f"Model '{self.model_name}' is provided by private deployment storage, not this public package."
        )
