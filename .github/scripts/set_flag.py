import pathlib, re, sys

value = sys.argv[1]
assert value in ("true", "false")
path = pathlib.Path(__file__).resolve().parents[2] / "assets" / "mods.js"
text = path.read_text(encoding="utf-8")
new, count = re.subn(r"const RELEASE_LIVE = (?:true|false);", f"const RELEASE_LIVE = {value};", text)
assert count == 1, "RELEASE_LIVE flag not found exactly once"
path.write_text(new, encoding="utf-8", newline="\n")
print("RELEASE_LIVE =", value)
