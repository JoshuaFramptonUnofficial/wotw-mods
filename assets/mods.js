(() => {
  // Flip to true to show the 2.0.0 release. The release workflow does this for you.
  const RELEASE_LIVE = false;

  const previous = {
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
  };

  const next = {
    name: "Project 05 Revive",
    summary: "A mod for bringing back the original 2005 tripods from previous versions, completely overhauled to include all the features requested and more! Mod by @framptonbtw. Model credit: EldeBH and Flipswitch Games from a previous game build.",
    release: {
      version: "2.0.0",
      gameBuild: "26748874",
      platform: "Windows x64",
      publishedAt: "2026-11-20",
      downloadUrl: "https://github.com/JoshuaFramptonUnofficial/wotw-mods/releases/download/project-05-revive-v2.0.0/Project-05-Revive-v2.0.0.wotwmod",
      changes: [
        "Lightning-storm arrival and ground-rise sequence.",
        "Original drain needle, cages and tentacles.",
        "Original 2005 aliens with hatch emergence and crawling.",
        "2005 probe visuals.",
        "Original blue heat rays.",
        "2005 horn options (H)."
      ]
    },
    // Filled from assets/media.js (built from assets/revive). The previous video and screenshots are used while it's empty.
    youtubeVideoId: (window.WOTW_MEDIA || {}).youtubeVideoId || null,
    screenshots: (window.WOTW_MEDIA || {}).screenshots || [],
    installation: [
      "Close the game and back up your saves. Move any older copy of this mod out of the Mods folder.",
      "Put the downloaded .wotwmod file in the Mods folder next to the game's .exe. Do not unzip it.",
      "Start the game and enable {name} in the main-menu Mods screen."
    ],
    compatibility: [
      "Requires Windows x64 and game build 26748874 or newer. Some future builds could break the mod, and support isn't guaranteed. Multiplayer players need the same game build and the same mod file.",
      "Model credit: EldeBH and Flipswitch Games from a previous game build.",
      "This mod is not officially endorsed by the game or Paramount."
    ],
    knownIssues: [
      "Saves from older versions of this mod are not guaranteed to load. Start a new save.",
      "The game can freeze or lag near tripods on some PCs, with or without this mod."
    ],
    saveNotes: previous.saveNotes
  };

  const mod = RELEASE_LIVE ? {
    ...previous,
    name: next.name,
    summary: next.summary,
    releases: [next.release, ...previous.releases],
    youtubeVideoId: next.youtubeVideoId || previous.youtubeVideoId,
    screenshots: next.screenshots.length ? next.screenshots : previous.screenshots,
    installation: next.installation,
    compatibility: next.compatibility,
    knownIssues: next.knownIssues,
    saveNotes: next.saveNotes
  } : previous;

  window.WOTW_MODS = {
    siteName: "Frampton’s WotW Mods",
    creator: "@framptonbtw",
    mods: [mod]
  };
})();
