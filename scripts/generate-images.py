#!/usr/bin/env python3
"""Generate lesson illustrations using the Google Gemini Imagen API.

Usage:
    export GEMINI_API_KEY="AIza..."
    python3 scripts/generate-images.py --module 1
    python3 scripts/generate-images.py --all
"""

import argparse
import base64
import json
import os
import sys
import time
import urllib.request
import urllib.error
from pathlib import Path

MODEL = "imagen-4.0-fast-generate-001"
API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:predict"
OUTPUT_DIR = Path(__file__).resolve().parent.parent / "public" / "images"

# Each entry: (module, lesson, filename_stem, prompt)
IMAGES = [
    # Module 1 — The Migration Challenge & Setting Up the Spec Pipeline
    (1, 1, "why-migrations-fail",
     "A dramatic illustration showing a bridge being built from two sides that don't meet in the middle, representing failed migration. One side is a dark legacy server room, the other is bright cloud icons. Gap between them glows red. Clean flat design, blue and red accents, no text."),
    (1, 2, "spec-driven-pipeline",
     "A horizontal pipeline diagram showing two parallel document streams converging: one labeled-style stream from a legacy server and another from a cloud icon, both feeding into a central specification bridge. Clean arrows, blue gradient background, modern flat design, no text."),
    (1, 3, "migration-strategies",
     "A minimalist illustration showing a spectrum bar from simple to complex, with icons above it: a trash can (retire), a forklift (rehost), a wrench (replatform), a blueprint (refactor), and a construction crane (rebuild). Clean geometric style, blue tones, no text."),
    (1, 4, "cold-start",
     "An illustration of a person opening a dusty old file cabinet labeled with cobwebs, discovering tangled wires and scattered documents inside. A glowing specification template floats nearby ready to bring order. Dark to light transition, blue accents, no text."),

    # Module 2 — AI-Powered Code Analysis & Reverse Engineering
    (2, 1, "analyzing-legacy-code",
     "An illustration of an AI assistant robot using a magnifying glass to examine lines of legacy code displayed on floating screens, with extracted business rules appearing as glowing cards. Blue and silver palette, modern flat tech style, no text."),
    (2, 2, "systematic-analysis",
     "A clean illustration of a structured inventory grid being filled in systematically, with a legacy codebase on one side and organized behavior cards appearing on the other. Each card has a confidence meter. Blue tones, flat design, no text."),
    (2, 3, "dependency-mapping",
     "An isometric network diagram showing interconnected systems: databases, APIs, message queues, file shares, and authentication services all connected by glowing lines of different colors indicating risk levels. Clean tech style, blue palette, no text."),
    (2, 4, "reverse-engineer-spec",
     "An illustration showing scattered code fragments and documents flowing into a funnel that produces a single, clean, glowing specification document. The transformation from chaos to order. Blue gradient, modern flat design, no text."),

    # Module 3 — From Legacy Spec to Cloud Target Spec
    (3, 1, "respecification-process",
     "A split illustration showing a legacy document on the left transforming into a cloud-native document on the right through a prism of light. Same content structure but different architectural representation. Blue to teal gradient, clean modern style, no text."),
    (3, 2, "cloud-target-spec",
     "An illustration of two specification documents side by side with connecting lines between matching items, some green (unchanged), some amber (modified), some blue (new). A cross-check overlay confirms alignment. Clean flat design, no text."),
    (3, 3, "architecture-review",
     "A pentagon diagram representing the Well-Architected Framework five pillars, with a cloud architecture blueprint in the center being evaluated. Each pillar section glows green or amber. Clean professional style, blue tones, no text."),
    (3, 4, "migration-plan",
     "An illustration of stacked wave layers, each wave containing organized task cards, flowing from a specification document at the top. The waves cascade downward showing phased execution. Blue gradient, modern flat design, no text."),

    # Module 4 — Data & Integration Specification
    (4, 1, "data-migration",
     "An illustration showing database tables on one side connected by transformation arrows to cloud database tables on the other side. Some arrows pass through a validation checkpoint with green checkmarks. Clean tech diagram style, blue tones, no text."),
    (4, 2, "data-migration-spec",
     "A detailed illustration of a schema mapping document with source tables on the left, target tables on the right, and color-coded mapping lines between them. Some lines are straight (direct), some curved (transformed). Blue palette, flat design, no text."),
    (4, 3, "integration-rewiring",
     "An illustration showing external systems (represented as buildings) connected to a central system by pipes and wires. During migration, an Anti-Corruption Layer adapter box sits between old and new connections. Blue and amber tones, clean flat style, no text."),
    (4, 4, "integration-contracts",
     "An illustration of formal contract documents connected to interface diagrams showing input/output schemas, SLA meters, and error handling flowcharts. All organized in a contracts folder structure. Professional blue design, no text."),

    # Module 5 — Task Generation, Implementation & The Surprise
    (5, 1, "generating-tasks",
     "An illustration of a specification document and a wave plan converging to produce an ordered sequence of task cards, each with a rollback arrow and a validation checkpoint. Clean cascade layout, blue accents, flat design, no text."),
    (5, 2, "tasks-implementation",
     "An illustration showing task cards transforming into actual infrastructure and code: a cloud environment being assembled piece by piece, with data migration scripts running on one side. Construction and assembly theme, blue tones, no text."),
    (5, 3, "the-surprise",
     "A dramatic illustration of a sealed red envelope being opened, revealing a hidden integration diagram that connects to the existing migration plan. Surprise and discovery theme, with red envelope contrasting against an otherwise orderly blue workspace. No text."),
    (5, 4, "validation-parity",
     "An illustration showing two systems side by side — legacy on the left, cloud on the right — with identical inputs going into both and comparison operators checking that outputs match. Green checkmarks indicate parity. Clean split design, blue and green, no text."),

    # Module 6 — Scaling the Process & Programme Governance
    (6, 1, "portfolio-scale",
     "An illustration showing a single application migration blueprint being replicated into a factory assembly line that produces migration plans for many applications. One-to-many scaling concept. Blue gradient, modern flat design, no text."),
    (6, 2, "anti-patterns",
     "A split illustration: left side showing migration chaos with a big-bang explosion, scattered documents, and tangled dependencies in red. Right side showing organized spec-driven waves, clean documents, and orderly progress in blue. Contrast theme, no text."),
    (6, 3, "final-review",
     "An illustration of a complete set of migration artifacts arranged like a final portfolio: constitution, AS-IS spec, TO-BE spec, plan, data migration, contracts, tasks, and validation — all connected by traceability lines and glowing with completion. Blue and gold, no text."),
    (6, 4, "adoption-roadmap",
     "A clean road map illustration showing four milestone stages along an ascending path: Pilot (single building), Templatize (building with blueprint), Scale (small cluster), Factory (full campus). Progressive growth theme, blue gradient, flat design, no text."),
]


def generate_image(prompt: str, output_path: Path, api_key: str) -> bool:
    """Generate an image from a text prompt using Gemini Imagen."""
    url = f"{API_URL}?key={api_key}"
    payload = json.dumps({
        "instances": [{"prompt": prompt}],
        "parameters": {"sampleCount": 1, "aspectRatio": "16:9"},
    }).encode()

    req = urllib.request.Request(
        url,
        data=payload,
        headers={"Content-Type": "application/json"},
    )

    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            data = json.loads(resp.read())
        img_b64 = data["predictions"][0]["bytesBase64Encoded"]
        img_bytes = base64.b64decode(img_b64)
        output_path.write_bytes(img_bytes)
        size_kb = len(img_bytes) / 1024
        print(f"  OK: {output_path.name} ({size_kb:.0f} KB)")
        return True
    except urllib.error.HTTPError as e:
        body = e.read().decode(errors="replace")
        print(f"  FAIL ({e.code}): {output_path.stem} — {body[:200]}")
        return False
    except Exception as e:
        print(f"  FAIL: {output_path.stem} — {e}")
        return False


def main():
    parser = argparse.ArgumentParser(description="Generate lesson illustrations via Gemini Imagen")
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--module", type=int, help="Generate images for a specific module (1-6)")
    group.add_argument("--all", action="store_true", help="Generate images for all modules")
    args = parser.parse_args()

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("Error: GEMINI_API_KEY environment variable is not set.")
        sys.exit(1)

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    targets = [(m, l, stem, prompt) for m, l, stem, prompt in IMAGES
               if args.all or m == args.module]

    if not targets:
        print(f"No images found for module {args.module}")
        sys.exit(1)

    print(f"Generating {len(targets)} images...")
    ok, fail = 0, 0

    for mod, les, stem, prompt in targets:
        output_path = OUTPUT_DIR / f"m{mod}-{stem}.png"
        if output_path.exists():
            print(f"  EXISTS: {output_path.name} (skipping)")
            ok += 1
            continue

        print(f"  Module {mod}, Lesson {les}: {stem}")
        if generate_image(prompt, output_path, api_key):
            ok += 1
        else:
            fail += 1

        time.sleep(1)

    print(f"\nDone: {ok} succeeded, {fail} failed")


if __name__ == "__main__":
    main()
