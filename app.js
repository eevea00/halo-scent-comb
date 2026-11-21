/* ==========================================================================
   HALO Scent Comb — True Multi-Page Router & Le Labo Botanical Storefront
   Routes: #/ (Home), #/comb (PDP & DIY), #/scents, #/about, #/popup
   ========================================================================== */

(function () {
  "use strict";

  const I18N = window.HALO_I18N;
  const VALID_ROUTES = ["/", "/comb", "/scents", "/about", "/popup"];

  const COLORWAYS = {
    ivoryMatcha: {
      photo: "./assets/comb-ivory-matcha.jpg",
      swatchGrad: "linear-gradient(135deg, #EAE2D3 48%, #B4D384 52%)"
    },
    oatSage: {
      photo: "./assets/comb-oat-sage.jpg",
      swatchGrad: "linear-gradient(135deg, #D6C9B2 48%, #8AA584 52%)"
    },
    mistPine: {
      photo: "./assets/comb-mist-pine.jpg",
      swatchGrad: "linear-gradient(135deg, #C3CBC6 48%, #5F826F 52%)"
    },
    blushTea: {
      photo: "./assets/comb-blush-tea.jpg",
      swatchGrad: "linear-gradient(135deg, #E4CFC5 48%, #C7D2B3 52%)"
    }
  };

  const SCENT_PAINTINGS = {
    matchaCedar: "./assets/paint-matcha-cedar.jpg",
    hinokiRain: "./assets/paint-hinoki-rain.jpg",
    whiteLinen: "./assets/paint-white-linen.jpg",
    yuzuVetiver: "./assets/paint-yuzu-vetiver.jpg"
  };

  /* Copperplate (Pinyon Script, 56px) cursive stroke-order SVG masks calibrated to 100% glyph coverage */
  const SCENT_SIGNATURES = {
    matchaCedar: {
      label: "Matcha Cedar",
      dark: false,
      vw: 350,
      strokes: [
        { sw: 17, dur: "0.46s", delay: "0.02s", d: "M32 68 L46 64 L62 48 L80 27 L66 48 L52 70 L72 48 L94 27 L80 50 L68 70 L86 66 L104 50 L88 68 L106 52 L98 68 L114 56 L132 31 L112 68 L136 52 L122 68 L142 56 L164 25 L138 68 L156 52 L152 68 L182 50 L166 68 L186 52 L178 68 L192 58" },
        { sw: 10, dur: "0.08s", delay: "0.48s", d: "M112 48 L140 46" },
        { sw: 17, dur: "0.44s", delay: "0.56s", d: "M240 34 L228 42 L222 28 L206 42 L208 74 L228 68 L236 56 L220 44 L212 62 L216 80 L232 64 L250 51 L234 68 L254 60 L274 50 L254 68 L274 52 L293 24 L266 68 L296 50 L278 68 L300 52 L292 68 L314 50 L304 68 L324 58" }
      ]
    },
    hinokiRain: {
      label: "Hinoki Rain",
      dark: false,
      vw: 336,
      strokes: [
        { sw: 17, dur: "0.46s", delay: "0.02s", d: "M48 34 L58 34 L46 56 L34 70 L54 54 L72 30 L54 52 L76 48 L92 28 L72 54 L62 70 L86 52 L80 68 L104 50 L92 68 L118 50 L110 68 L140 52 L124 68 L142 52 L152 48 L170 24 L142 68 L164 52 L156 68 L174 52 L168 68 L180 58" },
        { sw: 11, dur: "0.05s", delay: "0.48s", d: "M94 40 L96 43" },
        { sw: 11, dur: "0.05s", delay: "0.53s", d: "M179 40 L181 43" },
        { sw: 17, dur: "0.38s", delay: "0.57s", d: "M200 48 L204 38 L224 30 L242 34 L234 48 L216 52 L228 32 L212 54 L202 70 L194 68 L216 52 L234 54 L228 68 L246 62 L262 50 L242 68 L264 52 L256 68 L274 52 L266 68 L286 50 L276 68 L302 50 L294 68 L308 58" },
        { sw: 11, dur: "0.05s", delay: "0.95s", d: "M276 40 L278 43" }
      ]
    },
    whiteLinen: {
      label: "White Linen",
      dark: true,
      vw: 320,
      strokes: [
        { sw: 18, dur: "0.42s", delay: "0.02s", d: "M30 44 L44 36 L60 36 L42 70 L66 46 L78 30 L58 70 L82 46 L98 28 L108 36 L104 44 L104 26 L78 68 L98 52 L92 68 L112 52 L104 68 L122 52 L136 31 L116 68 L144 52 L128 68 L148 58" },
        { sw: 11, dur: "0.05s", delay: "0.44s", d: "M115 40 L117 43" },
        { sw: 10, dur: "0.08s", delay: "0.49s", d: "M116 48 L142 46" },
        { sw: 18, dur: "0.40s", delay: "0.57s", d: "M176 44 L194 30 L214 30 L202 48 L184 50 L170 70 L158 68 L178 70 L200 66 L212 52 L204 68 L226 50 L216 68 L242 50 L234 68 L258 52 L244 68 L272 50 L262 68 L288 50 L280 68 L294 58" },
        { sw: 11, dur: "0.05s", delay: "0.97s", d: "M215 40 L217 43" }
      ]
    },
    yuzuVetiver: {
      label: "Yuzu Vetiver",
      dark: false,
      vw: 310,
      strokes: [
        { sw: 17, dur: "0.42s", delay: "0.02s", d: "M40 36 L54 28 L46 42 L42 58 L62 46 L78 32 L74 28 L56 56 L42 74 L30 70 L68 52 L62 68 L84 52 L76 68 L98 52 L88 68 L96 72 L84 96 L74 92 L94 74 L114 52 L106 68 L130 52 L122 68 L136 58" },
        { sw: 17, dur: "0.46s", delay: "0.48s", d: "M152 36 L164 32 L156 54 L148 70 L170 50 L194 25 L186 44 L172 54 L192 52 L176 68 L202 52 L214 31 L194 68 L216 52 L206 68 L228 52 L220 68 L240 52 L256 52 L240 68 L266 50 L258 68 L280 58" },
        { sw: 10, dur: "0.08s", delay: "0.94s", d: "M194 48 L220 46" },
        { sw: 11, dur: "0.05s", delay: "1.02s", d: "M219 40 L221 43" }
      ]
    }
  };

  const SCENT_BANNERS = {
    matchaCedar: "./assets/scent-matcha-cedar.jpg",
    hinokiRain: "./assets/scent-hinoki-rain.jpg",
    whiteLinen: "./assets/scent-white-linen.jpg",
    yuzuVetiver: "./assets/scent-yuzu-vetiver.jpg"
  };

  const MOMENT_IMAGES = [
    "./assets/scene-commute.jpg",
    "./assets/scene-social.jpg",
    "./assets/scene-lunch.jpg"
  ];

  const EDITION_KEYS = ["single", "duo"];
  const COLOR_KEYS = ["ivoryMatcha", "oatSage", "mistPine", "blushTea"];
  const SCENT_KEYS = ["matchaCedar", "hinokiRain", "whiteLinen", "yuzuVetiver"];

  /* ---------- State ---------- */
  const state = {
    lang: "zh", // Default to Chinese before clicking LANGUAGE
    route: "/",
    activeScentDetail: "matchaCedar",
    heroActiveIdx: 0,
    heroBackdrop: "default", // 'default' | '0' | '1' | '2' | '3'
    activeThumb: "diy", // 'diy' | 'studio' | 'clip' | 'fabric'
    diy: {
      edition: "single",
      color: "ivoryMatcha",
      scent: "matchaCedar",
      secondScent: "hinokiRain",
      qty: 1,
      flipped: false
    },
    bag: loadStored("halo_bag", []).filter((i) => i && EDITION_KEYS.includes(i.edition)),
    checkout: {
      delivery: "ship",
      payment: "wechat"
    }
  };

  if (!I18N[state.lang]) state.lang = "zh";

  /* ---------- Helpers ---------- */
  function loadStored(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_) {
      return fallback;
    }
  }

  function saveStored(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (_) {}
  }

  function getNested(obj, path) {
    return path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
  }

  function t(path) {
    const val = getNested(I18N[state.lang], path);
    return val !== undefined ? val : path;
  }

  function formatPrice(amount) {
    return `¥${amount}`;
  }

  let toastTimer = null;
  function showToast(msg) {
    const el = document.getElementById("toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("is-visible"), 2400);
  }

  /* ---------- Hash Router (True Multi-Page Switching) ---------- */
  function isValidRoute(route) {
    if (VALID_ROUTES.includes(route)) return true;
    if (route.startsWith("/scents/")) {
      const key = route.slice("/scents/".length);
      return SCENT_KEYS.includes(key);
    }
    return false;
  }

  function parseRouteFromHash() {
    const raw = window.location.hash.replace(/^#/, "") || "/";
    const normalized = raw.startsWith("/") ? raw : `/${raw}`;
    return isValidRoute(normalized) ? normalized : "/";
  }

  function navigateTo(route, opts = {}) {
    const target = isValidRoute(route) ? route : "/";
    const targetHash = `#${target}`;
    renderActiveRoute(target);
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    }
    if (opts.openSafety) {
      const item = document.getElementById("accSafetyItem");
      if (item) {
        item.classList.add("is-open");
        syncAccordionLabels();
      }
    }
    if (opts.thumb) {
      state.activeThumb = opts.thumb;
      renderPdpThumbs();
      renderPdpStage();
    }
    // Close mobile menu if open
    const mobileNav = document.getElementById("mobileNav");
    const mobileBtn = document.getElementById("mobileMenuBtn");
    if (mobileNav && mobileBtn) {
      mobileNav.classList.remove("is-open");
      mobileBtn.setAttribute("aria-expanded", "false");
    }
  }

  function renderActiveRoute(route) {
    state.route = route;
    const isScentDetail = route.startsWith("/scents/");
    let activeViewKey = route;
    let activeNavKey = route;

    if (isScentDetail) {
      const scentKey = route.slice("/scents/".length);
      state.activeScentDetail = SCENT_KEYS.includes(scentKey) ? scentKey : "matchaCedar";
      activeViewKey = "/scents-detail";
      activeNavKey = "/scents";
      renderScentDetail(state.activeScentDetail);
    }

    // Reset homepage hero backdrop cleanly to product photo when returning to #/
    if (route === "/") {
      setHeroBackdrop("default", true);
    }

    document.querySelectorAll(".page-view").forEach((view) => {
      view.classList.toggle("is-active", view.dataset.page === activeViewKey);
    });
    document.querySelectorAll(".header-nav-row a[data-route]").forEach((a) => {
      a.classList.toggle("is-current", a.dataset.route === activeNavKey);
    });
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  /* ---------- Apply Translations ---------- */
  function applyTranslations() {
    document.documentElement.lang = state.lang;
    document.title = t("meta.title");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (typeof val === "string") el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = t(key);
      if (typeof val === "string") el.setAttribute("placeholder", val);
    });

    document.querySelectorAll(".lang-option").forEach((btn) => {
      const isCurrent = btn.dataset.lang === state.lang;
      btn.classList.toggle("is-active", isCurrent);
      btn.setAttribute("aria-selected", String(isCurrent));
    });

    renderHeroCurtain();
    renderPdp();
    renderSpecimenGrid();
    renderScentDetail(state.activeScentDetail);
    renderManifesto();
    renderMoments();
    renderSafetyList();
    renderBag();
    renderRsvpOptions();
    syncAccordionLabels();
  }

  /* ---------- Hero 4-Column Curtain & Mist-Dissolve Oil Painting Backdrop ---------- */
  let heroMistSwapTimer = null;
  let heroMistClearTimer = null;

  function setHeroBackdrop(targetKey, immediate = false) {
    const key = String(targetKey);
    if (state.heroBackdrop === key && !immediate) return;
    state.heroBackdrop = key;

    const media = document.getElementById("heroMedia");
    const veil = document.getElementById("heroMistVeil");
    if (!media) return;

    const layers = media.querySelectorAll(".hero-bg-layer");
    clearTimeout(heroMistSwapTimer);
    clearTimeout(heroMistClearTimer);

    const applyTarget = () => {
      layers.forEach((img) => {
        img.classList.toggle("is-visible", img.dataset.heroBg === key);
      });
      media.classList.toggle("is-painting-active", key !== "default");
    };

    if (immediate || !veil) {
      if (veil) veil.classList.remove("is-misting");
      applyTarget();
      return;
    }

    // Brief mist pulse -> reveal new botanical oil painting -> dissolve mist cleanly
    veil.classList.add("is-misting");
    heroMistSwapTimer = setTimeout(() => {
      applyTarget();
    }, 130);
    heroMistClearTimer = setTimeout(() => {
      veil.classList.remove("is-misting");
    }, 260);
  }

  function renderHeroCurtain() {
    const container = document.getElementById("heroCurtain");
    const cols = t("hero.cols");
    if (!container || !Array.isArray(cols)) return;

    container.innerHTML = cols.map((col, idx) => `
      <a href="#${col.route}" class="curtain-col ${idx === state.heroActiveIdx ? "is-active" : ""}" data-hero-idx="${idx}" data-hero-route="${col.route}">
        <h2 class="curtain-title">${col.title}</h2>
        <p class="curtain-sub">${col.sub}</p>
        <span class="curtain-link">${col.cta}</span>
      </a>
    `).join("");
  }

  /* ---------- Product Detail & DIY Customizer ---------- */
  function getDiyUnitPrice() {
    const ed = t(`pdp.editions.${state.diy.edition}`);
    return ed ? ed.price : 78;
  }

  function renderPdp() {
    renderPdpThumbs();
    renderPdpStage();
    renderPdpForm();
  }

  function renderPdpThumbs() {
    const thumbsEl = document.getElementById("pdpThumbs");
    if (!thumbsEl) return;
    const vis = COLORWAYS[state.diy.color] || COLORWAYS.ivoryMatcha;

    thumbsEl.innerHTML = `
      <button type="button" class="pdp-thumb ${state.activeThumb === "diy" ? "is-active" : ""}" data-thumb="diy" title="${t("pdp.thumbs.diy")}">
        <img src="${vis.photo}" alt="${t(`pdp.colors.${state.diy.color}.name`)}" />
      </button>
      <button type="button" class="pdp-thumb ${state.activeThumb === "studio" ? "is-active" : ""}" data-thumb="studio" title="${t("pdp.thumbs.studio")}">
        <img src="./assets/hero-comb.jpg" alt="Studio view" />
      </button>
      <button type="button" class="pdp-thumb ${state.activeThumb === "clip" ? "is-active" : ""}" data-thumb="clip" title="${t("pdp.thumbs.clip")}">
        <img src="./assets/concept-clip.jpg" alt="Clip mechanism" />
      </button>
      <button type="button" class="pdp-thumb ${state.activeThumb === "fabric" ? "is-active" : ""}" data-thumb="fabric" title="${t("pdp.thumbs.fabric")}">
        <img src="./assets/scene-social.jpg" alt="On fabric" />
      </button>
    `;
  }

  function renderPdpStage() {
    const stageEl = document.getElementById("pdpMainStage");
    if (!stageEl) return;
    const vis = COLORWAYS[state.diy.color] || COLORWAYS.ivoryMatcha;
    const colorName = t(`pdp.colors.${state.diy.color}.name`);

    if (state.activeThumb === "diy") {
      stageEl.innerHTML = `<img src="${vis.photo}" alt="HALO Scent Comb — ${colorName}" />`;
    } else if (state.activeThumb === "studio") {
      stageEl.innerHTML = `<img src="./assets/hero-comb.jpg" alt="HALO Scent Comb Studio" />`;
    } else if (state.activeThumb === "clip") {
      stageEl.innerHTML = `<img src="./assets/concept-clip.jpg" class="is-contain" alt="HALO Spring-loaded Clip Mechanism" />`;
    } else {
      stageEl.innerHTML = `<img src="./assets/scene-social.jpg" alt="HALO Flip to Rub Fabric" />`;
    }

    const frontBtn = document.getElementById("viewFrontBtn");
    const clipBtn = document.getElementById("viewClipBtn");
    const fabricBtn = document.getElementById("viewFabricBtn");
    if (frontBtn) frontBtn.classList.toggle("is-active", state.activeThumb === "diy");
    if (clipBtn) clipBtn.classList.toggle("is-active", state.activeThumb === "clip");
    if (fabricBtn) fabricBtn.classList.toggle("is-active", state.activeThumb === "fabric");
  }

  function renderPdpForm() {
    const edSelect = document.getElementById("editionSelect");
    const edHint = document.getElementById("editionHint");
    if (edSelect) {
      edSelect.innerHTML = EDITION_KEYS.map((k) => {
        const ed = t(`pdp.editions.${k}`);
        return `<option value="${k}" ${state.diy.edition === k ? "selected" : ""}>${ed.name} (${ed.short}) — ${formatPrice(ed.price)}</option>`;
      }).join("");
    }
    if (edHint) edHint.textContent = t(`pdp.editions.${state.diy.edition}.note`);

    const swatchRow = document.getElementById("colorSwatchRow");
    const colorNameEl = document.getElementById("activeColorName");
    if (swatchRow) {
      swatchRow.innerHTML = COLOR_KEYS.map((k) => {
        const vis = COLORWAYS[k];
        const col = t(`pdp.colors.${k}`);
        return `<button type="button" class="ledger-swatch-btn ${state.diy.color === k ? "is-selected" : ""}" data-color="${k}" style="background: ${vis.swatchGrad};" aria-label="${col.name}" title="${col.name}"></button>`;
      }).join("");
    }
    if (colorNameEl) colorNameEl.textContent = t(`pdp.colors.${state.diy.color}.name`);

    const scSelect = document.getElementById("scentSelect");
    const scMoodEl = document.getElementById("scentMoodHint");
    if (scSelect) {
      scSelect.innerHTML = SCENT_KEYS.map((k) => {
        const sc = t(`pdp.scents.${k}`);
        return `<option value="${k}" ${state.diy.scent === k ? "selected" : ""}>${sc.code} · ${sc.name} (${sc.en})</option>`;
      }).join("");
    }
    const activeSc = t(`pdp.scents.${state.diy.scent}`);
    if (scMoodEl) scMoodEl.textContent = activeSc.mood;

    const duoRow = document.getElementById("duoSecondRow");
    const duoSelect = document.getElementById("duoSecondSelect");
    if (duoRow && duoSelect) {
      duoRow.style.display = state.diy.edition === "duo" ? "grid" : "none";
      duoSelect.innerHTML = SCENT_KEYS.map((k) => {
        const sc = t(`pdp.scents.${k}`);
        return `<option value="${k}" ${state.diy.secondScent === k ? "selected" : ""}>${sc.code} · ${sc.name} (${sc.en})</option>`;
      }).join("");
    }

    const total = getDiyUnitPrice() * state.diy.qty;
    document.getElementById("pdpQtyVal").textContent = String(state.diy.qty);
    document.getElementById("pdpTotalPrice").textContent = formatPrice(total);
    document.getElementById("ctaPriceEcho").textContent = formatPrice(total);

    const notesLine = document.getElementById("pdpNotesLine");
    if (notesLine) {
      notesLine.textContent = `${t("pdp.notesPrefix")} ${t("pdp.notesTop")} ${activeSc.top} / ${t("pdp.notesHeart")} ${activeSc.heart} / ${t("pdp.notesBase")} ${activeSc.base}`;
    }
  }

  /* ---------- Scents Page Specimen Index (#/scents — BAUM-Style Staggered Square Oil Gallery) ---------- */
  function buildSignatureSvg(key) {
    const sig = SCENT_SIGNATURES[key];
    if (!sig) return "";
    const maskId = `sigMask-${key}`;
    const maskPaths = sig.strokes.map((st) => `
      <path class="sig-mask-stroke" d="${st.d}" pathLength="100" stroke-width="${st.sw}" style="--dur: ${st.dur}; --delay: ${st.delay};" />
    `).join("");

    return `
      <div class="specimen-signature ${sig.dark ? "specimen-signature--dark" : ""}" aria-hidden="true">
        <svg viewBox="0 0 ${sig.vw} 110" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <mask id="${maskId}" maskUnits="userSpaceOnUse">
              <rect x="0" y="0" width="${sig.vw}" height="110" fill="#000000" />
              ${maskPaths}
            </mask>
          </defs>
          <text class="specimen-sig-text" x="30" y="72" mask="url(#${maskId})">${sig.label}</text>
        </svg>
      </div>
    `;
  }

  function renderSpecimenGrid() {
    const grid = document.getElementById("specimenGrid");
    if (!grid) return;
    grid.innerHTML = SCENT_KEYS.map((k) => {
      const sc = t(`pdp.scents.${k}`);
      const painting = SCENT_PAINTINGS[k];
      return `
        <article class="specimen-plate" data-open-scent="${k}" role="button" tabindex="0" aria-label="${sc.code} ${sc.name}">
          <div class="specimen-art">
            <img src="${painting}" alt="${sc.en} — ${sc.name}" loading="lazy" />
            ${buildSignatureSvg(k)}
          </div>
          <div class="specimen-caption-head">
            <span class="specimen-en">${sc.en}</span>
            <svg class="specimen-arrow" viewBox="0 0 26 9" fill="none" aria-hidden="true">
              <path d="M0 7.5H24L18.5 2" stroke="currentColor" stroke-width="1" />
            </svg>
          </div>
          <div class="specimen-local">NO. ${sc.code} · ${sc.name}</div>
          <p class="specimen-mood">${sc.mood}</p>
        </article>
      `;
    }).join("");
  }

  /* ---------- Scent Detail Page (#/scents/:id — Overhead Botanical Banner + Ledger) ---------- */
  function renderScentDetail(scentKey) {
    const key = SCENT_KEYS.includes(scentKey) ? scentKey : "matchaCedar";
    const sc = t(`pdp.scents.${key}`);
    const bannerImg = SCENT_BANNERS[key] || SCENT_BANNERS.matchaCedar;

    const banner = document.getElementById("scentDetailBanner");
    if (banner) {
      banner.innerHTML = `
        <img class="scent-banner-img" src="${bannerImg}" alt="${sc.en} — ${sc.name}" />
        <div class="scent-banner-scrim" aria-hidden="true"></div>
        <div class="scent-banner-overlay">
          <h1 class="scent-banner-en">${sc.en}</h1>
          <div class="scent-banner-local">NO. ${sc.code} · ${sc.name}</div>
        </div>
      `;
    }

    const crumb = document.getElementById("scentDetailCrumb");
    if (crumb) crumb.textContent = `${sc.code} · ${sc.name}`;

    const root = document.getElementById("scentDetailRoot");
    if (root) {
      root.innerHTML = `
        <div class="scent-detail-intro">
          <header class="scent-detail-head">
            <div class="scent-detail-code">NO. ${sc.code} · ${sc.family}</div>
            <h2 class="scent-detail-title">${sc.name}</h2>
            <div class="scent-detail-sub">${sc.mood}</div>
          </header>

          <p class="scent-detail-story">${sc.story}</p>

          <div class="scent-detail-actions">
            <button type="button" class="pdp-cta pdp-cta--inline" data-customize-scent="${key}">
              ${t("scentDetail.customizeBtn")}
            </button>
            <a href="#/scents" data-route="/scents" class="under-link">${t("scentDetail.backToAll")}</a>
          </div>
        </div>

        <div class="scent-spec-ledger">
          <div class="scent-spec-row">
            <div class="scent-spec-key">${t("scentDetail.rowTop")}</div>
            <div>
              <div class="scent-spec-main">${sc.top}</div>
              <div class="scent-spec-desc">${sc.topDesc}</div>
            </div>
          </div>

          <div class="scent-spec-row">
            <div class="scent-spec-key">${t("scentDetail.rowHeart")}</div>
            <div>
              <div class="scent-spec-main">${sc.heart}</div>
              <div class="scent-spec-desc">${sc.heartDesc}</div>
            </div>
          </div>

          <div class="scent-spec-row">
            <div class="scent-spec-key">${t("scentDetail.rowBase")}</div>
            <div>
              <div class="scent-spec-main">${sc.base}</div>
              <div class="scent-spec-desc">${sc.baseDesc}</div>
            </div>
          </div>

          <div class="scent-spec-row">
            <div class="scent-spec-key">${t("scentDetail.rowHarmony")}</div>
            <div>
              <div class="scent-spec-main">${sc.harmonyTitle}</div>
              <div class="scent-spec-desc">${sc.harmonyDesc}</div>
            </div>
          </div>

          <div class="scent-spec-row">
            <div class="scent-spec-key">${t("scentDetail.rowProfile")}</div>
            <div>
              <div class="scent-spec-main">${sc.family}</div>
              <div class="scent-spec-desc">${sc.profileDesc}</div>
            </div>
          </div>

          <div class="scent-spec-row">
            <div class="scent-spec-key">${t("scentDetail.rowOccasion")}</div>
            <div>
              <div class="scent-spec-desc">${sc.occasion}</div>
            </div>
          </div>
        </div>
      `;
    }

    const pager = document.getElementById("scentPager");
    if (pager) {
      pager.innerHTML = `
        <a href="#/scents" data-route="/scents" class="under-link">${t("scentDetail.backToAll")}</a>
        <div class="scent-pager-links">
          ${SCENT_KEYS.map((k) => {
            const item = t(`pdp.scents.${k}`);
            return `<button type="button" class="scent-pager-btn ${k === key ? "is-active" : ""}" data-open-scent="${k}">${item.code} · ${item.name}</button>`;
          }).join("")}
        </div>
      `;
    }
  }

  /* ---------- Manifesto & Moments Page ---------- */
  function renderManifesto() {
    const el = document.getElementById("manifestoLines");
    const lines = t("manifesto.lines");
    if (!el || !Array.isArray(lines)) return;
    el.innerHTML = lines.map((line) => `<p>${line}</p>`).join("");
  }

  function renderMoments() {
    const grid = document.getElementById("momentsGrid");
    const cards = t("moments.cards");
    if (!grid || !Array.isArray(cards)) return;
    grid.innerHTML = cards.map((card, i) => `
      <article class="moment-tile">
        <img src="${MOMENT_IMAGES[i]}" alt="${card.title}" loading="lazy" />
        <h3 class="moment-title">${card.title}</h3>
        <p class="moment-desc">${card.desc}</p>
      </article>
    `).join("");
  }

  /* ---------- Safety / Transparency List ---------- */
  function renderSafetyList() {
    const el = document.getElementById("accSafetyList");
    const items = t("pdp.accSafetyItems");
    if (!el || !Array.isArray(items)) return;
    el.innerHTML = items.map((line) => `<p>${line}</p>`).join("");
  }

  function syncAccordionLabels() {
    const craftOpen = document.getElementById("accCraftItem").classList.contains("is-open");
    document.getElementById("accCraftBtn").textContent = craftOpen ? t("pdp.accCraftClose") : t("pdp.accCraftAction");
    const safetyOpen = document.getElementById("accSafetyItem").classList.contains("is-open");
    document.getElementById("accSafetyBtn").textContent = safetyOpen ? t("pdp.accSafetyClose") : t("pdp.accSafetyAction");
  }

  /* ---------- Bag & Checkout ---------- */
  function getBagCalculations() {
    let totalCount = 0;
    let subtotal = 0;
    state.bag.forEach((item) => {
      totalCount += item.qty;
      subtotal += item.unitPrice * item.qty;
    });
    const freeShipping = subtotal === 0 || subtotal >= 128 || state.checkout.delivery === "pickup";
    const shippingCost = subtotal === 0 ? 0 : (freeShipping ? 0 : 8);
    return { totalCount, subtotal, shippingCost, grandTotal: subtotal + shippingCost };
  }

  function renderBag() {
    const badge = document.getElementById("bagCountBadge");
    const body = document.getElementById("bagBody");
    const footer = document.getElementById("bagFooter");
    const calc = getBagCalculations();

    if (badge) badge.textContent = String(calc.totalCount);
    if (!body || !footer) return;

    if (state.bag.length === 0) {
      footer.style.display = "none";
      body.innerHTML = `
        <div class="bag-empty">
          <h4>${t("bag.emptyTitle")}</h4>
          <p>${t("bag.emptyDesc")}</p>
          <a href="#/comb" class="under-link under-link--prominent" id="bagGoStudioBtn">${t("bag.emptyBtn")}</a>
        </div>
      `;
      const goBtn = document.getElementById("bagGoStudioBtn");
      if (goBtn) {
        goBtn.addEventListener("click", (e) => {
          e.preventDefault();
          closeAllOverlays();
          navigateTo("/comb");
        });
      }
      return;
    }

    footer.style.display = "block";
    body.innerHTML = state.bag.map((item, idx) => {
      const ed = t(`pdp.editions.${item.edition}`);
      const col = t(`pdp.colors.${item.color}`);
      const sc = t(`pdp.scents.${item.scent}`);
      const vis = COLORWAYS[item.color] || COLORWAYS.ivoryMatcha;
      const meta = [col.name, sc.name];
      if (item.edition === "duo" && item.secondScent) {
        meta.push(`+ ${t(`pdp.scents.${item.secondScent}.name`)}`);
      }
      const addonNames = (item.addons || []).map((k) => t(`pdp.addons.${k}.name`));
      const addonLine = addonNames.length ? `<br />${t("bag.addonPrefix")}${addonNames.join(" / ")}` : "";

      return `
        <div class="bag-item">
          <div class="bag-item-swatch" style="background: ${vis.swatchGrad};"></div>
          <div class="bag-item-info">
            <div class="bag-item-title">HALO · ${ed.name}</div>
            <div class="bag-item-meta">${meta.join(" · ")}${addonLine}</div>
            <div class="bag-item-controls">
              <div class="mini-qty">
                <button type="button" data-bag-delta="-1" data-bag-idx="${idx}" aria-label="Decrease">−</button>
                <span>${item.qty}</span>
                <button type="button" data-bag-delta="1" data-bag-idx="${idx}" aria-label="Increase">+</button>
              </div>
              <button type="button" class="bag-remove-btn" data-bag-remove="${idx}">${t("bag.remove")}</button>
            </div>
          </div>
          <div class="bag-item-price">${formatPrice(item.unitPrice * item.qty)}</div>
        </div>
      `;
    }).join("");

    document.getElementById("bagSubtotal").textContent = formatPrice(calc.subtotal);
    document.getElementById("bagShipping").textContent = calc.shippingCost === 0 ? t("bag.shippingFree") : t("bag.shippingFee");
    document.getElementById("bagGrandTotal").textContent = formatPrice(calc.grandTotal);
    const checkoutTotal = document.getElementById("checkoutTotalDisplay");
    if (checkoutTotal) checkoutTotal.textContent = formatPrice(calc.grandTotal);
  }

  function addCurrentDiyToBag() {
    const signature = [
      state.diy.edition,
      state.diy.color,
      state.diy.scent,
      state.diy.edition === "duo" ? state.diy.secondScent : ""
    ].join("|");

    const unitPrice = getDiyUnitPrice();
    const existing = state.bag.find((i) => i.signature === signature);
    if (existing) {
      existing.qty += state.diy.qty;
    } else {
      state.bag.push({
        signature,
        edition: state.diy.edition,
        color: state.diy.color,
        scent: state.diy.scent,
        secondScent: state.diy.edition === "duo" ? state.diy.secondScent : null,
        addons: [],
        unitPrice,
        qty: state.diy.qty
      });
    }

    saveStored("halo_bag", state.bag);
    renderBag();
    showToast(t("pdp.addedToast"));
  }

  /* ---------- RSVP Select Options ---------- */
  function renderRsvpOptions() {
    const slotSel = document.getElementById("rsvpSlot");
    const scentSel = document.getElementById("rsvpScent");
    if (slotSel) {
      slotSel.innerHTML = [t("rsvp.slot1"), t("rsvp.slot2"), t("rsvp.slot3")]
        .map((label) => `<option value="${label}">${label}</option>`)
        .join("");
    }
    if (scentSel) {
      scentSel.innerHTML = SCENT_KEYS.map((k) => {
        const sc = t(`pdp.scents.${k}`);
        return `<option value="${k}">${sc.code} · ${sc.name}</option>`;
      }).join("");
    }
  }

  /* ---------- Overlays ---------- */
  const backdrop = document.getElementById("overlayBackdrop");
  const bagDrawer = document.getElementById("bagDrawer");
  const checkoutModal = document.getElementById("checkoutModal");
  const rsvpModal = document.getElementById("rsvpModal");

  function openBag() {
    closeAllOverlays();
    backdrop.classList.add("is-open");
    bagDrawer.classList.add("is-open");
    bagDrawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function openModal(modalEl) {
    closeAllOverlays();
    backdrop.classList.add("is-open");
    modalEl.classList.add("is-open");
    modalEl.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeAllOverlays() {
    backdrop.classList.remove("is-open");
    bagDrawer.classList.remove("is-open");
    bagDrawer.setAttribute("aria-hidden", "true");
    [checkoutModal, rsvpModal].forEach((m) => {
      if (m) {
        m.classList.remove("is-open");
        m.setAttribute("aria-hidden", "true");
      }
    });
    document.body.style.overflow = "";
  }

  /* ---------- Event Listeners ---------- */
  function bindEvents() {
    // Route changes (Back/Forward + Hash clicks)
    window.addEventListener("hashchange", () => {
      renderActiveRoute(parseRouteFromHash());
    });

    document.addEventListener("click", (e) => {
      const routeEl = e.target.closest("[data-route]");
      if (routeEl) {
        e.preventDefault();
        navigateTo(routeEl.dataset.route);
      }
    });

    // Mobile Menu
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const mobileNav = document.getElementById("mobileNav");
    if (mobileBtn && mobileNav) {
      mobileBtn.addEventListener("click", () => {
        const open = mobileNav.classList.toggle("is-open");
        mobileBtn.setAttribute("aria-expanded", String(open));
      });
    }

    // Language Dropdown Menu (Default Chinese; Click LANGUAGE to choose ZH / EN / JA / KO)
    const langWrap = document.getElementById("langMenuWrap");
    const langTrigger = document.getElementById("langTriggerBtn");
    const closeLangMenu = () => {
      if (!langWrap || !langTrigger) return;
      langWrap.classList.remove("is-open");
      langTrigger.setAttribute("aria-expanded", "false");
    };

    if (langWrap && langTrigger) {
      langTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = langWrap.classList.toggle("is-open");
        langTrigger.setAttribute("aria-expanded", String(isOpen));
      });

      langWrap.querySelectorAll(".lang-option").forEach((btn) => {
        btn.addEventListener("click", () => {
          const nextLang = btn.dataset.lang;
          if (I18N[nextLang]) {
            state.lang = nextLang;
            applyTranslations();
          }
          closeLangMenu();
        });
      });

      document.addEventListener("click", (e) => {
        if (!langWrap.contains(e.target)) closeLangMenu();
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeLangMenu();
      });
    }

    // Hero 4-Column Curtain Hover (Brief Mist Dissolve -> 4 Botanical Oil Paintings) & Click Routing
    const curtain = document.getElementById("heroCurtain");
    if (curtain) {
      const activateCol = (col) => {
        const idx = Number(col.dataset.heroIdx);
        state.heroActiveIdx = idx;
        curtain.querySelectorAll(".curtain-col").forEach((el, i) => {
          el.classList.toggle("is-active", i === idx);
        });
        setHeroBackdrop(String(idx));
      };

      curtain.addEventListener("mouseover", (e) => {
        const col = e.target.closest("[data-hero-idx]");
        if (!col) return;
        activateCol(col);
      });

      curtain.addEventListener("focusin", (e) => {
        const col = e.target.closest("[data-hero-idx]");
        if (!col) return;
        activateCol(col);
      });

      curtain.addEventListener("mouseleave", () => {
        setHeroBackdrop("default");
      });

      curtain.addEventListener("focusout", (e) => {
        if (!curtain.contains(e.relatedTarget)) {
          setHeroBackdrop("default");
        }
      });

      curtain.addEventListener("click", (e) => {
        const col = e.target.closest("[data-hero-idx]");
        if (!col) return;
        e.preventDefault();
        const idx = Number(col.dataset.heroIdx);
        const targetRoute = col.dataset.heroRoute;
        if (idx === 2) {
          navigateTo("/comb", { thumb: "clip" });
        } else {
          navigateTo(targetRoute);
        }
      });
    }

    // PDP Thumbnail Rail
    document.getElementById("pdpThumbs").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-thumb]");
      if (!btn) return;
      state.activeThumb = btn.dataset.thumb;
      renderPdpThumbs();
      renderPdpStage();
    });

    // PDP Under-image Physical View Links
    document.getElementById("viewFrontBtn").addEventListener("click", () => {
      state.activeThumb = "diy";
      renderPdpThumbs();
      renderPdpStage();
    });

    document.getElementById("viewClipBtn").addEventListener("click", () => {
      state.activeThumb = "clip";
      renderPdpThumbs();
      renderPdpStage();
    });

    document.getElementById("viewFabricBtn").addEventListener("click", () => {
      state.activeThumb = "fabric";
      renderPdpThumbs();
      renderPdpStage();
    });

    // PDP Ledger Controls
    document.getElementById("editionSelect").addEventListener("change", (e) => {
      state.diy.edition = e.target.value;
      renderPdp();
    });

    document.getElementById("colorSwatchRow").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-color]");
      if (!btn) return;
      state.diy.color = btn.dataset.color;
      state.activeThumb = "diy";
      renderPdp();
    });

    document.getElementById("scentSelect").addEventListener("change", (e) => {
      state.diy.scent = e.target.value;
      renderPdpForm();
    });

    document.getElementById("duoSecondSelect").addEventListener("change", (e) => {
      state.diy.secondScent = e.target.value;
    });

    document.getElementById("pdpQtyMinus").addEventListener("click", () => {
      if (state.diy.qty > 1) {
        state.diy.qty -= 1;
        renderPdpForm();
      }
    });

    document.getElementById("pdpQtyPlus").addEventListener("click", () => {
      if (state.diy.qty < 10) {
        state.diy.qty += 1;
        renderPdpForm();
      }
    });

    document.getElementById("addToBagBtn").addEventListener("click", addCurrentDiyToBag);

    // Inline Accordions inside PDP
    document.querySelectorAll("[data-acc-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-acc-toggle");
        const item = document.getElementById(targetId);
        if (item) {
          item.classList.toggle("is-open");
          syncAccordionLabels();
        }
      });
    });

    // Scents Index -> Hover Copperplate Painter Signature + Open Scent Detail Page (#/scents/:id)
    const specimenGrid = document.getElementById("specimenGrid");
    if (specimenGrid) {
      const sigTimers = new WeakMap();

      const startSign = (plate) => {
        if (!plate) return;
        clearTimeout(sigTimers.get(plate));
        const sigEl = plate.querySelector(".specimen-signature");
        if (sigEl) sigEl.style.opacity = "";
        if (!plate.classList.contains("is-signing")) {
          // Force fresh stroke draw from start
          plate.classList.remove("is-signing");
          void plate.offsetWidth;
          plate.classList.add("is-signing");
        }
      };

      const stopSign = (plate) => {
        if (!plate) return;
        const sigEl = plate.querySelector(".specimen-signature");
        if (sigEl) sigEl.style.opacity = "0";
        clearTimeout(sigTimers.get(plate));
        sigTimers.set(plate, setTimeout(() => {
          plate.classList.remove("is-signing");
          if (sigEl) sigEl.style.opacity = "";
        }, 380));
      };

      specimenGrid.addEventListener("mouseover", (e) => {
        const plate = e.target.closest(".specimen-plate");
        if (!plate || plate.contains(e.relatedTarget)) return;
        startSign(plate);
      });

      specimenGrid.addEventListener("mouseout", (e) => {
        const plate = e.target.closest(".specimen-plate");
        if (!plate || plate.contains(e.relatedTarget)) return;
        stopSign(plate);
      });

      specimenGrid.addEventListener("focusin", (e) => {
        const plate = e.target.closest(".specimen-plate");
        if (plate) startSign(plate);
      });

      specimenGrid.addEventListener("focusout", (e) => {
        const plate = e.target.closest(".specimen-plate");
        if (plate && !plate.contains(e.relatedTarget)) stopSign(plate);
      });

      specimenGrid.addEventListener("click", (e) => {
        const el = e.target.closest("[data-open-scent]");
        if (!el) return;
        navigateTo(`/scents/${el.dataset.openScent}`);
      });
      specimenGrid.addEventListener("keydown", (e) => {
        if (e.key !== "Enter" && e.key !== " ") return;
        const el = e.target.closest("[data-open-scent]");
        if (!el) return;
        e.preventDefault();
        navigateTo(`/scents/${el.dataset.openScent}`);
      });
    }

    // Scent Detail Page -> Optional Customize CTA or Switch Scent via Pager
    const scentDetailRoot = document.getElementById("scentDetailRoot");
    if (scentDetailRoot) {
      scentDetailRoot.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-customize-scent]");
        if (!btn) return;
        state.diy.scent = btn.dataset.customizeScent;
        renderPdpForm();
        navigateTo("/comb", { thumb: "diy" });
      });
    }

    const scentPager = document.getElementById("scentPager");
    if (scentPager) {
      scentPager.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-open-scent]");
        if (!btn) return;
        navigateTo(`/scents/${btn.dataset.openScent}`);
      });
    }

    // Footer Safety Shortcut -> navigate to #/comb and expand Safety accordion
    document.getElementById("footerSafetyLink").addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo("/comb", { openSafety: true });
    });

    // RSVP Triggers
    const triggerRsvp = (e) => {
      if (e) e.preventDefault();
      openModal(rsvpModal);
    };
    document.getElementById("pdpRsvpTrigger").addEventListener("click", triggerRsvp);
    document.getElementById("openRsvpBtn").addEventListener("click", triggerRsvp);
    document.getElementById("footerRsvpLink").addEventListener("click", triggerRsvp);

    document.getElementById("rsvpForm").addEventListener("submit", (e) => {
      e.preventDefault();
      closeAllOverlays();
      showToast(t("rsvp.successMsg"));
    });

    // Bag Drawer
    document.getElementById("openBagBtn").addEventListener("click", openBag);
    document.getElementById("closeBagBtn").addEventListener("click", closeAllOverlays);
    backdrop.addEventListener("click", closeAllOverlays);

    document.getElementById("bagBody").addEventListener("click", (e) => {
      const deltaBtn = e.target.closest("[data-bag-delta]");
      if (deltaBtn) {
        const idx = Number(deltaBtn.dataset.bagIdx);
        const delta = Number(deltaBtn.dataset.bagDelta);
        if (state.bag[idx]) {
          state.bag[idx].qty += delta;
          if (state.bag[idx].qty <= 0) state.bag.splice(idx, 1);
          saveStored("halo_bag", state.bag);
          renderBag();
        }
        return;
      }
      const remBtn = e.target.closest("[data-bag-remove]");
      if (remBtn) {
        const idx = Number(remBtn.dataset.bagRemove);
        state.bag.splice(idx, 1);
        saveStored("halo_bag", state.bag);
        renderBag();
      }
    });

    // Checkout Modal
    document.getElementById("openCheckoutBtn").addEventListener("click", () => {
      document.getElementById("checkoutFormView").style.display = "block";
      document.getElementById("checkoutSuccessView").style.display = "none";
      renderBag();
      openModal(checkoutModal);
    });

    checkoutModal.addEventListener("click", (e) => {
      const delBtn = e.target.closest("[data-delivery]");
      if (delBtn) {
        state.checkout.delivery = delBtn.dataset.delivery;
        checkoutModal.querySelectorAll("[data-delivery]").forEach((b) => b.classList.toggle("is-selected", b === delBtn));
        renderBag();
      }
      const payBtn = e.target.closest("[data-pay]");
      if (payBtn) {
        state.checkout.payment = payBtn.dataset.pay;
        checkoutModal.querySelectorAll("[data-pay]").forEach((b) => b.classList.toggle("is-selected", b === payBtn));
      }
    });

    document.getElementById("checkoutForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const code = Math.floor(1000 + Math.random() * 9000);
      document.getElementById("generatedOrderCode").textContent = `HALO-2026-${code}`;
      document.getElementById("checkoutFormView").style.display = "none";
      document.getElementById("checkoutSuccessView").style.display = "block";
      state.bag = [];
      saveStored("halo_bag", state.bag);
      renderBag();
    });

    document.querySelectorAll("[data-close-modal]").forEach((btn) => {
      btn.addEventListener("click", closeAllOverlays);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeAllOverlays();
    });

    // Newsletter
    document.getElementById("newsletterForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("newsletterInput");
      const fb = document.getElementById("newsletterFeedback");
      if (input.value.trim()) {
        fb.textContent = t("footer.newsSuccess");
        input.value = "";
      }
    });
  }

  /* ---------- Init ---------- */
  applyTranslations();
  bindEvents();
  renderActiveRoute(parseRouteFromHash());
})();
