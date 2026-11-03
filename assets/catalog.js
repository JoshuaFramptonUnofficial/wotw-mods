"use strict";
window.WOTW_CATALOG = {
  filter(mods, query, category) {
    const text = String(query || "").trim().toLocaleLowerCase();
    return mods.filter(mod => {
      const categories = mod.categories || [];
      const searchable = [mod.name, mod.summary, ...categories].join(" ").toLocaleLowerCase();
      return (!text || searchable.includes(text)) && (!category || categories.includes(category));
    });
  },
  latest(mod) { return (mod.releases || [])[0] || null; },
  https(value) {
    if (!value) return null;
    try { const url = new URL(value); return url.protocol === "https:" ? url.href : null; }
    catch { return null; }
  },
  available(release) {
    return Boolean(release && this.https(release.downloadUrl) && release.publishedAt && Number.isFinite(Date.parse(release.publishedAt)));
  }
};
