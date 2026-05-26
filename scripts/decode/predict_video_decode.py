"""Public command shape for video prediction.

Production inference code and model loading are hosted separately.
"""

import argparse


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("video", help="Path to a match video")
    args = parser.parse_args()
    print({"video": args.video, "status": "public-demo"})


if __name__ == "__main__":
    main()
