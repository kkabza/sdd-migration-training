#!/usr/bin/env python3
"""Generate audio files from narration scripts using the ElevenLabs TTS API.

Usage:
    export ELEVEN_LABS_API_KEY="sk_..."
    python3 scripts/generate-audio.py --module 1
    python3 scripts/generate-audio.py --all
"""

import argparse
import os
import sys
import time
from pathlib import Path
import urllib.request
import urllib.error
import json

VOICE_ID = "21m00Tcm4TlvDq8ikWAM"  # Rachel — clear, professional
MODEL_ID = "eleven_multilingual_v2"
API_URL = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"

SCRIPT_DIR = Path(__file__).resolve().parent / "narration"
OUTPUT_DIR = Path(__file__).resolve().parent.parent / "public" / "media"

# Map: (module, lesson) -> script filename stem
LESSONS = {
    (1, 1): "module1-lesson1-why-migrations-fail",
    (1, 2): "module1-lesson2-spec-driven-pipeline",
    (1, 3): "module1-lesson3-migration-strategies",
    (1, 4): "module1-lesson4-cold-start",
    (1, 5): "module1-lesson5-speckit-for-migration",
    (1, 6): "module1-lesson6-optional-labs",
    (2, 1): "module2-lesson1-analyzing-legacy-code",
    (2, 2): "module2-lesson2-systematic-analysis",
    (2, 3): "module2-lesson3-dependency-mapping",
    (2, 4): "module2-lesson4-reverse-engineer-spec",
    (3, 1): "module3-lesson1-respecification-process",
    (3, 2): "module3-lesson2-cloud-target-spec",
    (3, 3): "module3-lesson3-architecture-review",
    (3, 4): "module3-lesson4-migration-plan",
    (4, 1): "module4-lesson1-specifying-data-migration",
    (4, 2): "module4-lesson2-data-migration-spec",
    (4, 3): "module4-lesson3-integration-rewiring",
    (4, 4): "module4-lesson4-integration-contracts",
    (5, 1): "module5-lesson1-generating-tasks",
    (5, 2): "module5-lesson2-tasks-implementation",
    (5, 3): "module5-lesson3-the-surprise",
    (5, 4): "module5-lesson4-validation-parity",
    (6, 1): "module6-lesson1-portfolio-scale",
    (6, 2): "module6-lesson2-anti-patterns",
    (6, 3): "module6-lesson3-final-review",
    (6, 4): "module6-lesson4-adoption-roadmap",
}


def generate_audio(script_path: Path, output_path: Path, api_key: str) -> bool:
    """Send text to ElevenLabs TTS and save the MP3 result."""
    text = script_path.read_text().strip()
    if not text:
        print(f"  SKIP (empty): {script_path.name}")
        return False

    payload = json.dumps({
        "text": text,
        "model_id": MODEL_ID,
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.75,
            "style": 0.0,
            "use_speaker_boost": True,
        },
    }).encode()

    req = urllib.request.Request(
        API_URL,
        data=payload,
        headers={
            "xi-api-key": api_key,
            "Content-Type": "application/json",
            "Accept": "audio/mpeg",
        },
    )

    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            audio = resp.read()
        output_path.write_bytes(audio)
        size_kb = len(audio) / 1024
        print(f"  OK: {output_path.name} ({size_kb:.0f} KB)")
        return True
    except urllib.error.HTTPError as e:
        body = e.read().decode(errors="replace")
        print(f"  FAIL ({e.code}): {script_path.name} — {body[:200]}")
        return False
    except Exception as e:
        print(f"  FAIL: {script_path.name} — {e}")
        return False


def main():
    parser = argparse.ArgumentParser(description="Generate TTS audio from narration scripts")
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--module", type=int, help="Generate audio for a specific module (1-6)")
    group.add_argument("--all", action="store_true", help="Generate audio for all modules")
    parser.add_argument("--force", action="store_true", help="Overwrite existing MP3 files instead of skipping them")
    args = parser.parse_args()

    api_key = os.environ.get("ELEVEN_LABS_API_KEY")
    if not api_key:
        print("Error: ELEVEN_LABS_API_KEY environment variable is not set.")
        sys.exit(1)

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    targets = []
    for (mod, les), stem in sorted(LESSONS.items()):
        if args.all or mod == args.module:
            targets.append((mod, les, stem))

    if not targets:
        print(f"No lessons found for module {args.module}")
        sys.exit(1)

    print(f"Generating audio for {len(targets)} lessons...")
    ok, fail = 0, 0

    for mod, les, stem in targets:
        script_path = SCRIPT_DIR / f"{stem}.txt"
        output_path = OUTPUT_DIR / f"{stem}.mp3"

        if not script_path.exists():
            print(f"  MISSING: {script_path}")
            fail += 1
            continue

        if output_path.exists() and not args.force:
            print(f"  EXISTS: {output_path.name} (skipping)")
            ok += 1
            continue

        if output_path.exists() and args.force:
            print(f"  OVERWRITE: {output_path.name}")

        print(f"  Module {mod}, Lesson {les}: {stem}")
        if generate_audio(script_path, output_path, api_key):
            ok += 1
        else:
            fail += 1

        # Rate limit: ~2 seconds between calls
        time.sleep(2)

    print(f"\nDone: {ok} succeeded, {fail} failed")


if __name__ == "__main__":
    main()
