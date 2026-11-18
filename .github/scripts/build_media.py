import json, pathlib, re

root = pathlib.Path(__file__).resolve().parents[2]
folder = root / "assets" / "revive"
pattern = re.compile(r"screenshot-(\d{1,3})\.(webp|png|jpe?g)", re.I)

shots = []
if folder.is_dir():
    found = sorted((int(m.group(1)), p) for p in folder.iterdir() if (m := pattern.fullmatch(p.name)))
    for n, p in found[:12]:
        note = p.with_suffix(".txt")
        alt = note.read_text(encoding="utf-8").strip() if note.is_file() else ""
        shots.append({"src": f"./assets/revive/{p.name}", "alt": alt or f"Project 05 Revive screenshot {n}"})

video = None
vfile = folder / "video.txt"
if vfile.is_file():
    m = re.search(r"(?:v=|youtu\.be/|embed/|^)([A-Za-z0-9_-]{11})(?![A-Za-z0-9_-])", vfile.read_text(encoding="utf-8").strip())
    video = m.group(1) if m else None

out = root / "assets" / "media.js"
out.write_text("window.WOTW_MEDIA = " + json.dumps({"youtubeVideoId": video, "screenshots": shots}, indent=2, ensure_ascii=False) + ";\n", encoding="utf-8", newline="\n")
print(f"media: {len(shots)} screenshot(s), video={video}")
