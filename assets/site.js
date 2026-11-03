"use strict";
(() => {
  const data = window.WOTW_MODS;
  const catalog = window.WOTW_CATALOG;
  if (!data || !catalog || !Array.isArray(data.mods) || !data.mods.length) return;
  const grid = document.getElementById("mod-grid");
  const search = document.getElementById("mod-search");
  const category = document.getElementById("category");
  const clear = document.getElementById("clear-filters");
  const panel = document.getElementById("selected-mod");
  let selected = data.mods[0].id;
  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }
  function paragraphs(container, values) {
    container.replaceChildren();
    (values || []).forEach(text => container.append(element("p", "", text)));
  }
  function download(mod, release, label) {
    const link = element("a", "button", label || "Download ZIP");
    if (catalog.available(release)) {
      link.href = catalog.https(release.downloadUrl);
      link.setAttribute("aria-label", `Download ${mod.name} version ${release.version}`);
    } else { link.textContent = "Download coming soon"; link.setAttribute("aria-disabled", "true"); }
    return link;
  }
  [...new Set(data.mods.flatMap(mod => mod.categories || []))].sort().forEach(name => {
    const option = element("option", "", name);option.value = name;category.append(option);
  });
  function renderMod(mod) {
    const latest = catalog.latest(mod);
    panel.hidden = false;
    document.getElementById("mod-title").textContent = mod.name;
    document.getElementById("mod-category").textContent = (mod.categories || []).join(" / ");
    document.getElementById("mod-summary").textContent = mod.summary;
    document.getElementById("mod-author").textContent = mod.author || data.creator;
    document.getElementById("mod-version").textContent = latest ? latest.version : "Not released";
    document.getElementById("mod-requirements").textContent = latest ? `${latest.platform} · Game build ${latest.gameBuild}` : "Compatibility to be announced";
    const hero = download(mod, latest, latest ? `Download ${latest.version}` : "Download coming soon");
    hero.id = "hero-download";document.getElementById("hero-download").replaceWith(hero);
    const list = document.getElementById("release-list");
    const changes = document.getElementById("changelog");list.replaceChildren();changes.replaceChildren();
    (mod.releases || []).forEach(release => {
      const row = element("article", "release");const copy = element("div");
      copy.append(element("h3", "", `Version ${release.version}`), element("p", "", `Game build ${release.gameBuild} · ${release.platform}`));
      row.append(copy);
      if (catalog.available(release)) row.append(download(mod, release));
      else row.append(element("span", "status", "Not yet published"));
      list.append(row);
      const entry = element("div");entry.append(element("h3", "", `Version ${release.version}`));
      (release.changes || []).forEach(text => entry.append(element("p", "", text)));changes.append(entry);
    });
    if (!list.children.length) list.append(element("p", "small", "Downloads will appear here when published."));
    const patches = (mod.patches || []).filter(patch => catalog.available(patch));
    document.getElementById("patch-note").hidden = patches.length > 0;
    patches.forEach(patch => {
      const row = element("article", "release");const copy = element("div");
      copy.append(element("h3", "", `Patch ${patch.version}`), element("p", "", `Requires version ${patch.requiresVersion}`));
      row.append(copy, download(mod, patch, "Download patch"));list.append(row);
    });
    const video = document.getElementById("video-slot");video.replaceChildren();
    if (typeof mod.youtubeVideoId === "string" && /^[a-zA-Z0-9_-]{11}$/.test(mod.youtubeVideoId)) {
      const frame = element("iframe");frame.src = `https://www.youtube-nocookie.com/embed/${mod.youtubeVideoId}`;
      frame.title = `${mod.name} gameplay and installation`;frame.loading = "lazy";frame.allowFullscreen = true;
      frame.referrerPolicy = "strict-origin-when-cross-origin";frame.allow = "encrypted-media; picture-in-picture; fullscreen";video.append(frame);
    } else {
      const placeholder = element("div", "video-placeholder");const play = element("span", "play", "▶");play.setAttribute("aria-hidden", "true");
      placeholder.append(play, element("p", "", "Installation video coming soon"));video.append(placeholder);
    }
    const gallery = document.getElementById("gallery");gallery.replaceChildren();
    (mod.screenshots || []).forEach(item => {
      if (!item.src || !item.alt || !/^\.\/assets\/images\/[a-z0-9._-]+$/i.test(item.src)) return;
      const figure = element("figure");const img = element("img");img.src = item.src;img.alt = item.alt;img.loading = "lazy";figure.append(img);
      if (item.caption) figure.append(element("figcaption", "", item.caption));gallery.append(figure);
    });
    if (!gallery.children.length) for (let i = 0; i < 3; i++) {
      const space = element("div", "image-placeholder", "Screenshot");space.setAttribute("aria-label", "Space reserved for a gameplay screenshot");gallery.append(space);
    }
    const steps = document.getElementById("install-steps");steps.replaceChildren();
    (mod.installation || []).forEach(text => steps.append(element("li", "", text.replaceAll("{name}", mod.name))));
    paragraphs(document.getElementById("compatibility"), [...(mod.compatibility || []), ...(mod.knownIssues || [])]);
    paragraphs(document.getElementById("save-notes"), mod.saveNotes);
  }
  function select(id, navigate) {
    const mod = data.mods.find(item => item.id === id);
    if (!mod) return;
    selected = id;renderMod(mod);
    grid.querySelectorAll("[data-mod]").forEach(link => {
      if (link.dataset.mod === id) link.setAttribute("aria-current", "true");else link.removeAttribute("aria-current");
    });
    if (navigate) {
      history.replaceState(null, "", `#mod=${encodeURIComponent(id)}`);
      panel.scrollIntoView({block:"start",behavior:"auto"});
      document.getElementById("mod-title").focus({preventScroll:true});
    }
  }
  function renderCatalog() {
    const matches = catalog.filter(data.mods, search.value, category.value);
    grid.replaceChildren();
    document.getElementById("result-count").textContent = `${matches.length} ${matches.length === 1 ? "mod" : "mods"}`;
    document.getElementById("no-results").hidden = matches.length > 0;
    clear.hidden = !search.value && !category.value;
    matches.forEach(mod => {
      const release = catalog.latest(mod);const card = element("a", "mod-card");card.href = `#mod=${encodeURIComponent(mod.id)}`;card.dataset.mod = mod.id;
      card.append(element("h3", "", mod.name), element("p", "card-summary", mod.summary));
      const meta = element("div", "card-meta");meta.append(element("span", "", release ? `Version ${release.version}` : "Coming soon"), element("span", "card-view", "View mod →"));card.append(meta);
      card.addEventListener("click", event => { event.preventDefault();select(mod.id, true); });grid.append(card);
    });
    if (!matches.length) { panel.hidden = true; return; }
    if (!matches.some(mod => mod.id === selected)) selected = matches[0].id;
    select(selected, false);
  }
  search.addEventListener("input", renderCatalog);category.addEventListener("change", renderCatalog);
  clear.addEventListener("click", () => { search.value = "";category.value = "";renderCatalog();search.focus(); });
  document.querySelectorAll('nav a[href="#download"], nav a[href="#install"]').forEach(link => link.addEventListener("click", () => {
    if (panel.hidden) { search.value = "";category.value = "";renderCatalog(); }
  }));
  const route = /^#mod=([a-z0-9-]+)$/.exec(location.hash);
  if (route && data.mods.some(mod => mod.id === route[1])) selected = route[1];
  renderCatalog();
  window.addEventListener("hashchange", () => {
    const match = /^#mod=([a-z0-9-]+)$/.exec(location.hash);
    if (match && data.mods.some(mod => mod.id === match[1])) { search.value = "";category.value = "";renderCatalog();select(match[1], false); }
  });
})();
