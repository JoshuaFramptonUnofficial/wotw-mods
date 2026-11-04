window.WOTW_MODS = {
  siteName: "Frampton’s WotW Mods",
  creator: "@framptonbtw",
  mods: [{
    id: "2005-tripod",
    name: "2005 Tripod",
    author: "@framptonbtw",
    summary: "Original 2005 tripod model, vfx and sounds. Mod by @framptonbtw. Model credit: EldeBH and Flipswitch Games from a previous game build.",
    categories: ["Tripods", "Visuals", "Audio"],
    releases: [{
      version: "1.1.1",
      gameBuild: "26369083",
      platform: "Windows x64",
      publishedAt: "2026-11-04",
      downloadUrl: "https://github.com/JoshuaFramptonUnofficial/wotw-mods/releases/download/2005-tripod-v1.1.1/2005-Tripod-v1.1.1.zip",
      changes: [
        "Fixed floating and misaligned Uberpod beams. The five spotlights align with their lamps in AI and pilot control, and standard Tripod beams stay hidden in Uber mode."
      ]
    }, {
      version: "1.1.0",
      gameBuild: "26369083",
      platform: "Windows x64",
      publishedAt: "2026-11-04",
      downloadUrl: "https://github.com/JoshuaFramptonUnofficial/wotw-mods/releases/download/2005-tripod-v1.1.0/2005-Tripod-v1.1.0.zip",
      changes: [
        "Restored the original 2005 standard head and expanded Uberpod head. Fixed duplicate Uber head rendering.",
        "Aligned the standard Tripod’s three lamps and the Uberpod’s five lamps with their beams. Corrected headlight and spotlight brightness and restored the head side lighting.",
        "Restored the original 2005 death-ray sounds and beam material texture. Death-ray bursts now follow the duration of the 2005 recordings.",
        "Gave the Uberpod a distinct continuous engine loop based on the 2005 recording and restored the original horn distance falloff.",
        "Removed the inherited rear exhaust trail from both variants.",
        "Restored the original left cage tilt and corrected its resting alignment."
      ]
    }, {
      version: "1.0.1",
      gameBuild: "26369083",
      platform: "Windows x64",
      publishedAt: "2026-11-03",
      downloadUrl: "https://github.com/JoshuaFramptonUnofficial/wotw-mods/releases/download/2005-tripod-v1.0.1/2005-Tripod-v1.0.1.zip",
      changes: [
        "Original 2005 tripod model, vfx and sounds.",
        "Regular and Uber presentation with native gameplay.",
        "Stock probe retained."
      ]
    }],
    patches: [],
    youtubeVideoId: "Lv1O5m8T-Kk",
    screenshots: [
      { src: "./assets/wotw_screenshot1.webp", alt: "A tripod silhouetted against the bright sky, viewed from below." },
      { src: "./assets/wotw_screenshot2.webp", alt: "Close-up view of a tripod against a blue sky." },
      { src: "./assets/wotw_screenshot3.webp", alt: "Two tripods looming over a landscape at dusk." }
    ],
    installation: [
      "Close the game and back up your saves and mod settings. Move any older copy of this mod outside Mods.",
      "Extract the ZIP into the main game directory. The included Mods folder goes beside War of the Worlds.exe.",
      "Start the game and enable {name} in the main-menu Mods screen."
    ],
    compatibility: [
      "Requires Windows x64 and game build 26369083. Multiplayer players need the same game build, exact mod files and matching selections.",
      "Model credit: EldeBH and Flipswitch Games from a previous game build.",
      "This mod is not officially endorsed by the game or Paramount."
    ],
    knownIssues: [
      "Occasional client-side errors may occur when joining multiplayer. No visible gameplay problems were reported during testing.",
      "The original 2005 probe model is not included; the game uses its stock probe."
    ],
    saveNotes: [
      "A save requiring an older mod version may need that version reinstalled. Back up your saves and keep your previous mod package before updating.",
      "To remove the mod, disable it while disconnected, quit, then move its folder outside Mods. Saves requiring the mod will not load without it. Fresh worlds use the game's default Tripods."
    ]
  }]
};
