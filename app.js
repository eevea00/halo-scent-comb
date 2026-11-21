/* ==========================================================================
   HALO Scent Comb — True Multi-Page Router & Le Labo Botanical Storefront
   Routes: #/ (Home), #/comb (PDP & DIY), #/scents, #/about, #/popup
   ========================================================================== */

(function () {
  "use strict";

  const I18N = window.HALO_I18N;
  const VALID_ROUTES = ["/", "/comb", "/scents", "/about", "/popup"];

  const SCENT_PRODUCTS = {
    matchaCedar: {
      main: "./assets/prod-matcha-cedar-main.jpg",
      box: "./assets/prod-matcha-cedar-box.jpg",
      detail: "./assets/prod-matcha-cedar-detail.jpg"
    },
    hinokiRain: {
      main: "./assets/prod-hinoki-rain-main.jpg",
      box: "./assets/prod-hinoki-rain-box.jpg",
      detail: "./assets/prod-hinoki-rain-detail.jpg"
    },
    whiteLinen: {
      main: "./assets/prod-white-linen-main.jpg",
      box: "./assets/prod-white-linen-box.jpg",
      detail: "./assets/prod-white-linen-detail.jpg"
    },
    yuzuVetiver: {
      main: "./assets/prod-yuzu-vetiver-main.jpg",
      box: "./assets/prod-yuzu-vetiver-box.jpg",
      detail: "./assets/prod-yuzu-vetiver-detail.jpg"
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
  const SCENT_KEYS = ["matchaCedar", "hinokiRain", "whiteLinen", "yuzuVetiver"];

  /* ---------- State ---------- */
  const state = {
    lang: "zh", // Default to Chinese before clicking LANGUAGE
    route: "/",
    activeScentDetail: "matchaCedar",
    heroActiveIdx: 0,
    heroBackdrop: "default", // 'default' (4-comb architectural hero) | '0' | '1' | '2' | '3' (oil paintings)
    activeThumb: "main", // 'main' | 'box' | 'detail' | 'clip'
    diy: {
      edition: "single",
      scent: "matchaCedar",
      secondScent: "hinokiRain",
      previewKey: null, // null -> show diy.scent; set to diy.secondScent when previewing 2nd comb in duo
      qty: 1
    },
    bag: loadStored("halo_bag", []).filter((i) => i && EDITION_KEYS.includes(i.edition) && SCENT_KEYS.includes(i.scent)),
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

  let cancelActiveHeroBurn = null;
  let emitBurnRingFx = null;
  let activeBurnTargetRoute = null;

  function renderActiveRoute(route) {
    if (cancelActiveHeroBurn && activeBurnTargetRoute !== route) {
      cancelActiveHeroBurn();
    }
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

    // Reset homepage hero cleanly to architectural 4-comb hero when returning to #/
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

  /* ---------- Hero Architectural 4-Comb Backdrop + Mist Oil-Painting Hover ---------- */
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

    // Brief mist pulse -> reveal new botanical oil painting (or architectural hero) -> dissolve mist cleanly
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

  /* ---------- Product Detail & Scent-Bound Fixed Finish Selector ---------- */
  function getActiveStageScentKey() {
    if (state.diy.edition === "duo" && state.diy.previewKey && SCENT_KEYS.includes(state.diy.previewKey)) {
      return state.diy.previewKey;
    }
    return state.diy.scent;
  }

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
    const scKey = getActiveStageScentKey();
    const prod = SCENT_PRODUCTS[scKey] || SCENT_PRODUCTS.matchaCedar;
    const sc = t(`pdp.scents.${scKey}`);

    thumbsEl.innerHTML = `
      <button type="button" class="pdp-thumb ${state.activeThumb === "main" ? "is-active" : ""}" data-thumb="main" title="${t("pdp.thumbs.main")}">
        <img src="${prod.main}" alt="${sc.name} — ${t("pdp.thumbs.main")}" />
      </button>
      <button type="button" class="pdp-thumb ${state.activeThumb === "box" ? "is-active" : ""}" data-thumb="box" title="${t("pdp.thumbs.box")}">
        <img src="${prod.box}" alt="${sc.name} — ${t("pdp.thumbs.box")}" />
      </button>
      <button type="button" class="pdp-thumb ${state.activeThumb === "detail" ? "is-active" : ""}" data-thumb="detail" title="${t("pdp.thumbs.detail")}">
        <img src="${prod.detail}" alt="${sc.name} — ${t("pdp.thumbs.detail")}" />
      </button>
      <button type="button" class="pdp-thumb ${state.activeThumb === "clip" ? "is-active" : ""}" data-thumb="clip" title="${t("pdp.thumbs.clip")}">
        <img src="./assets/concept-clip.jpg" alt="${t("pdp.thumbs.clip")}" />
      </button>
    `;
  }

  function renderPdpStage() {
    const stageEl = document.getElementById("pdpMainStage");
    if (!stageEl) return;
    const scKey = getActiveStageScentKey();
    const prod = SCENT_PRODUCTS[scKey] || SCENT_PRODUCTS.matchaCedar;
    const sc = t(`pdp.scents.${scKey}`);

    if (state.activeThumb === "main") {
      stageEl.innerHTML = `<img src="${prod.main}" alt="HALO Scent Comb — ${sc.name} (${sc.finish})" />`;
    } else if (state.activeThumb === "box") {
      stageEl.innerHTML = `<img src="${prod.box}" alt="HALO Gift Box — ${sc.name}" />`;
    } else if (state.activeThumb === "detail") {
      stageEl.innerHTML = `<img src="${prod.detail}" alt="HALO Engraved Craft Detail — ${sc.finish}" />`;
    } else {
      stageEl.innerHTML = `<img src="./assets/concept-clip.jpg" class="is-contain" alt="HALO Spring-loaded Clip Mechanism" />`;
    }

    const mainBtn = document.getElementById("viewMainBtn");
    const boxBtn = document.getElementById("viewBoxBtn");
    const detailBtn = document.getElementById("viewDetailBtn");
    const clipBtn = document.getElementById("viewClipBtn");
    if (mainBtn) mainBtn.classList.toggle("is-active", state.activeThumb === "main");
    if (boxBtn) boxBtn.classList.toggle("is-active", state.activeThumb === "box");
    if (detailBtn) detailBtn.classList.toggle("is-active", state.activeThumb === "detail");
    if (clipBtn) clipBtn.classList.toggle("is-active", state.activeThumb === "clip");
  }

  function renderPdpForm() {
    const activeSc = t(`pdp.scents.${state.diy.scent}`);
    const stageSc = t(`pdp.scents.${getActiveStageScentKey()}`);

    const subEl = document.getElementById("pdpActiveEditionSub");
    if (subEl && stageSc) {
      subEl.textContent = `NO. ${stageSc.code} · ${stageSc.name} · ${stageSc.finish}`;
    }

    const scentGrid = document.getElementById("scentEditionGrid");
    const finishHint = document.getElementById("scentFinishHint");
    if (scentGrid) {
      scentGrid.innerHTML = SCENT_KEYS.map((k) => {
        const sc = t(`pdp.scents.${k}`);
        const prod = SCENT_PRODUCTS[k];
        const selected = state.diy.scent === k;
        return `
          <button type="button" class="scent-ed-btn ${selected ? "is-selected" : ""}" data-scent-pick="${k}" role="radio" aria-checked="${selected}">
            <span class="scent-ed-thumb">
              <img src="${prod.detail}" alt="${sc.name} ${sc.finish}" />
            </span>
            <span class="scent-ed-text">
              <span class="scent-ed-name">${sc.code} · ${sc.name}</span>
              <span class="scent-ed-finish">${sc.finish}</span>
            </span>
          </button>
        `;
      }).join("");
    }
    if (finishHint && activeSc) {
      finishHint.textContent = `${activeSc.finishDesc}`;
    }

    const edSelect = document.getElementById("editionSelect");
    const edHint = document.getElementById("editionHint");
    if (edSelect) {
      edSelect.innerHTML = EDITION_KEYS.map((k) => {
        const ed = t(`pdp.editions.${k}`);
        return `<option value="${k}" ${state.diy.edition === k ? "selected" : ""}>${ed.name} (${ed.short}) — ${formatPrice(ed.price)}</option>`;
      }).join("");
      syncCustomSelect(edSelect);
    }
    if (edHint) edHint.textContent = t(`pdp.editions.${state.diy.edition}.note`);

    const duoRow = document.getElementById("duoSecondRow");
    const duoSelect = document.getElementById("duoSecondSelect");
    const duoPreview = document.getElementById("duoSecondPreview");
    if (duoRow && duoSelect) {
      const isDuo = state.diy.edition === "duo";
      duoRow.style.display = isDuo ? "grid" : "none";
      duoSelect.innerHTML = SCENT_KEYS.map((k) => {
        const sc = t(`pdp.scents.${k}`);
        return `<option value="${k}" ${state.diy.secondScent === k ? "selected" : ""}>${sc.code} · ${sc.name} · ${sc.finish}</option>`;
      }).join("");
      syncCustomSelect(duoSelect);

      if (duoPreview && isDuo) {
        const sc2 = t(`pdp.scents.${state.diy.secondScent}`);
        const prod2 = SCENT_PRODUCTS[state.diy.secondScent] || SCENT_PRODUCTS.hinokiRain;
        const showingSecond = state.diy.previewKey === state.diy.secondScent;
        duoPreview.innerHTML = `
          <div class="duo-preview-left">
            <img class="duo-preview-thumb" src="${prod2.main}" alt="${sc2.name}" />
            <span class="duo-preview-label">${sc2.code} · ${sc2.name}（${sc2.finish}）</span>
          </div>
          <button type="button" class="under-link ${showingSecond ? "is-active" : ""}" id="toggleSecondPreviewBtn">
            ${showingSecond ? t("pdp.previewingSecond") : t("pdp.previewSecond")}
          </button>
        `;
      }
    }

    const total = getDiyUnitPrice() * state.diy.qty;
    document.getElementById("pdpQtyVal").textContent = String(state.diy.qty);
    document.getElementById("pdpTotalPrice").textContent = formatPrice(total);
    document.getElementById("ctaPriceEcho").textContent = formatPrice(total);

    const notesLine = document.getElementById("pdpNotesLine");
    if (notesLine && stageSc) {
      notesLine.textContent = `${t("pdp.notesPrefix")} ${t("pdp.notesTop")} ${stageSc.top} / ${t("pdp.notesHeart")} ${stageSc.heart} / ${t("pdp.notesBase")} ${stageSc.base}`;
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
          <div class="specimen-frame">
            <div class="specimen-art">
              <img class="specimen-painting" src="${painting}" alt="${sc.en} — ${sc.name}" loading="lazy" />
              <div class="specimen-rabbet-shadow" aria-hidden="true"></div>
              ${buildSignatureSvg(k)}
            </div>
            <img class="specimen-frame-gilt" src="./assets/frame-gilt.png" alt="" aria-hidden="true" draggable="false" />
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
      const sc = t(`pdp.scents.${item.scent}`);
      const prod = SCENT_PRODUCTS[item.scent] || SCENT_PRODUCTS.matchaCedar;
      const meta = [`${sc.code} · ${sc.name}（${sc.finish}）`];
      if (item.edition === "duo" && item.secondScent && SCENT_KEYS.includes(item.secondScent)) {
        const sc2 = t(`pdp.scents.${item.secondScent}`);
        meta.push(`+ ${sc2.code} · ${sc2.name}（${sc2.finish}）`);
      }

      return `
        <div class="bag-item">
          <div class="bag-item-swatch">
            <img src="${prod.main}" alt="${sc.name}" />
          </div>
          <div class="bag-item-info">
            <div class="bag-item-title">HALO · ${ed.name}</div>
            <div class="bag-item-meta">${meta.join("<br />")}</div>
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
        scent: state.diy.scent,
        secondScent: state.diy.edition === "duo" ? state.diy.secondScent : null,
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
      syncCustomSelect(slotSel);
    }
    if (scentSel) {
      scentSel.innerHTML = SCENT_KEYS.map((k) => {
        const sc = t(`pdp.scents.${k}`);
        return `<option value="${k}">${sc.code} · ${sc.name}</option>`;
      }).join("");
      syncCustomSelect(scentSel);
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
        if (state.isBurning) return;

        const idx = Number(col.dataset.heroIdx);
        const targetRoute = col.dataset.heroRoute;
        const navOpts = {};

        // Determine click origin (fallback to column center if triggered via keyboard Enter)
        const rect = col.getBoundingClientRect();
        const hasPointerCoords = e.clientX > 0 || e.clientY > 0;
        const clickX = hasPointerCoords ? e.clientX : rect.left + rect.width * 0.35;
        const clickY = hasPointerCoords ? e.clientY : rect.top + rect.height * 0.45;

        // Grab currently visible hero painting (or default 4-comb hero if clicked without hover)
        const media = document.getElementById("heroMedia");
        const activeImg =
          (media && media.querySelector(`.hero-bg-layer[data-hero-bg="${idx}"]`)) ||
          (media && media.querySelector(".hero-bg-layer.is-visible")) ||
          (media && media.querySelector(".hero-bg-default"));
        const isPainting = Boolean(activeImg && activeImg.classList.contains("hero-bg-paint"));

        triggerHeroBurn({
          imgEl: activeImg,
          isPainting,
          clientX: clickX,
          clientY: clickY,
          targetRoute,
          navOpts,
        });
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
    document.getElementById("viewMainBtn").addEventListener("click", () => {
      state.activeThumb = "main";
      renderPdpThumbs();
      renderPdpStage();
    });

    document.getElementById("viewBoxBtn").addEventListener("click", () => {
      state.activeThumb = "box";
      renderPdpThumbs();
      renderPdpStage();
    });

    document.getElementById("viewDetailBtn").addEventListener("click", () => {
      state.activeThumb = "detail";
      renderPdpThumbs();
      renderPdpStage();
    });

    document.getElementById("viewClipBtn").addEventListener("click", () => {
      state.activeThumb = "clip";
      renderPdpThumbs();
      renderPdpStage();
    });

    // PDP Scent-Bound Fixed Finish Visual Selector
    document.getElementById("scentEditionGrid").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-scent-pick]");
      if (!btn) return;
      state.diy.scent = btn.dataset.scentPick;
      state.diy.previewKey = null;
      if (state.activeThumb === "clip") state.activeThumb = "main";
      renderPdp();
    });

    // PDP Edition & Second Scent Controls
    document.getElementById("editionSelect").addEventListener("change", (e) => {
      state.diy.edition = e.target.value;
      if (state.diy.edition !== "duo") state.diy.previewKey = null;
      renderPdp();
    });

    document.getElementById("duoSecondSelect").addEventListener("change", (e) => {
      const prevSecond = state.diy.secondScent;
      state.diy.secondScent = e.target.value;
      if (state.diy.previewKey === prevSecond) {
        state.diy.previewKey = state.diy.secondScent;
      }
      renderPdp();
    });

    document.getElementById("duoSecondPreview").addEventListener("click", (e) => {
      if (!e.target.closest("#toggleSecondPreviewBtn")) return;
      state.diy.previewKey = state.diy.previewKey === state.diy.secondScent ? null : state.diy.secondScent;
      if (state.activeThumb === "clip") state.activeThumb = "main";
      renderPdp();
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
        state.diy.previewKey = null;
        renderPdp();
        navigateTo("/comb", { thumb: "main" });
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

  /* ---------- Custom In-DOM Hairline Dropdowns (Zero Native OS Select Popup) ---------- */
  const customSelectRegistry = new Map();

  function closeAllCustomSelects(exceptWrap) {
    customSelectRegistry.forEach(({ wrap, trigger }) => {
      if (wrap !== exceptWrap) {
        wrap.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
      }
    });
  }

  function ensureCustomSelect(selectEl) {
    if (!selectEl) return null;
    if (customSelectRegistry.has(selectEl)) return customSelectRegistry.get(selectEl);

    const isBoxed = selectEl.classList.contains("form-select");
    selectEl.classList.add("halo-select-native");
    selectEl.tabIndex = -1;
    selectEl.setAttribute("aria-hidden", "true");

    const wrap = document.createElement("div");
    wrap.className = isBoxed ? "halo-select halo-select--boxed" : "halo-select";

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "halo-select-trigger";
    trigger.setAttribute("role", "combobox");
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");
    trigger.innerHTML = `
      <span class="halo-select-label"></span>
      <svg class="halo-select-chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="square" aria-hidden="true">
        <polyline points="2.5,4.25 6,7.75 9.5,4.25"></polyline>
      </svg>
    `;

    const menu = document.createElement("div");
    menu.className = "halo-select-menu";
    menu.setAttribute("role", "listbox");

    wrap.appendChild(trigger);
    wrap.appendChild(menu);
    selectEl.parentNode.insertBefore(wrap, selectEl.nextSibling);

    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const willOpen = !wrap.classList.contains("is-open");
      closeAllCustomSelects(willOpen ? wrap : null);
      wrap.classList.toggle("is-open", willOpen);
      trigger.setAttribute("aria-expanded", String(willOpen));
    });

    menu.addEventListener("click", (e) => {
      const optBtn = e.target.closest(".halo-select-option");
      if (!optBtn) return;
      e.stopPropagation();
      const val = optBtn.dataset.value;
      if (selectEl.value !== val) {
        selectEl.value = val;
        selectEl.dispatchEvent(new Event("change", { bubbles: true }));
      }
      syncCustomSelect(selectEl);
      closeAllCustomSelects(null);
      trigger.focus();
    });

    // Redirect associated <label for="..."> clicks to open our custom dropdown instead of native OS popup
    if (selectEl.id) {
      const assocLabel = document.querySelector(`label[for="${selectEl.id}"]`);
      if (assocLabel) {
        assocLabel.addEventListener("click", (e) => {
          e.preventDefault();
          trigger.click();
        });
      }
    }

    const entry = { wrap, trigger, menu, labelEl: trigger.querySelector(".halo-select-label") };
    customSelectRegistry.set(selectEl, entry);
    return entry;
  }

  function syncCustomSelect(selectEl) {
    const entry = ensureCustomSelect(selectEl);
    if (!entry) return;
    const options = Array.from(selectEl.options);
    const activeOpt = options[selectEl.selectedIndex] || options[0];
    entry.labelEl.textContent = activeOpt ? activeOpt.textContent : "";

    entry.menu.innerHTML = options
      .map((opt) => {
        const isSel = opt.value === selectEl.value;
        return `
          <button type="button" class="halo-select-option ${isSel ? "is-selected" : ""}" role="option" aria-selected="${isSel}" data-value="${opt.value.replace(/"/g, "&quot;")}">
            <span>${opt.textContent}</span>
            <span class="halo-select-check" aria-hidden="true">✓</span>
          </button>
        `;
      })
      .join("");
  }

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".halo-select")) closeAllCustomSelects(null);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllCustomSelects(null);
  });

  /* ---------- Custom Brand Cursor: Comic Hand Cigarette + Live Smoke & Stub-Out ---------- */
  function initHaloCursor() {
    const cursorEl = document.getElementById("haloCursor");
    const canvas = document.getElementById("haloSmokeCanvas");
    if (!cursorEl || !canvas || !window.matchMedia) return;

    const finePointerMQ = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointerMQ.matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.classList.add("has-halo-cursor");
    document.body.classList.add("has-halo-cursor");

    const INTERACTIVE_SELECTOR = [
      "a",
      "button",
      "select",
      "input",
      "textarea",
      "label",
      "summary",
      '[role="button"]',
      '[role="option"]',
      '[role="radio"]',
      '[role="tab"]',
      '[role="combobox"]',
      ".curtain-col",
      ".specimen-plate",
      ".pdp-main-stage",
      ".scent-banner",
      ".bag-item",
      ".choice-pill",
      ".accordion-trigger",
      ".halo-select-trigger",
      ".halo-select-option",
    ].join(", ");

    let vw = window.innerWidth;
    let vh = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resizeCanvas() {
      vw = window.innerWidth;
      vh = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(vw * dpr);
      canvas.height = Math.round(vh * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });

    let isVisible = false;
    let isInteractive = false;
    let snuffedUntil = 0;

    let cx = -200;
    let cy = -200;
    let lastEmitX = -200;
    let lastEmitY = -200;
    let lastMoveTime = 0;
    let lastIdleEmit = 0;
    let moveClearTimer = 0;
    let stubTimer = 0;
    let snuffTimer = 0;
    let rafId = 0;

    const particles = [];
    const MAX_PARTICLES = 150;

    function addParticle(p) {
      if (particles.length >= MAX_PARTICLES) particles.shift();
      particles.push(p);
      ensureLoop();
    }

    function emitSmokePuff(x, y, vxBase, vyBase, options) {
      if (reducedMotion) return;
      const opts = options || {};
      addParticle({
        kind: "smoke",
        x: x + (Math.random() - 0.5) * (opts.jitter || 2.2),
        y: y + (Math.random() - 0.5) * (opts.jitter || 2.2),
        vx: vxBase + (Math.random() - 0.5) * 0.24,
        vy: vyBase - Math.random() * 0.35,
        r: opts.r0 || (2.4 + Math.random() * 1.6),
        rEnd: opts.rEnd || (15 + Math.random() * 9),
        alpha: opts.alpha || (0.36 + Math.random() * 0.14),
        age: 0,
        life: opts.life || (980 + Math.random() * 520),
        phase: Math.random() * Math.PI * 2,
        freq: 0.0042 + Math.random() * 0.0024,
        sway: 0.22 + Math.random() * 0.24,
      });
    }

    function emitStubOutFx(x, y) {
      if (reducedMotion) return;

      addParticle({
        kind: "smudge",
        x,
        y,
        r: 2.5,
        rEnd: 10,
        alpha: 0.30,
        age: 0,
        life: 580,
      });

      const sparkCount = 5;
      for (let i = 0; i < sparkCount; i += 1) {
        const ang = (Math.PI * 2 * i) / sparkCount + (Math.random() - 0.5) * 0.65;
        const spd = 1.0 + Math.random() * 1.6;
        addParticle({
          kind: "spark",
          x: x + (Math.random() - 0.5) * 1.5,
          y: y + (Math.random() - 0.5) * 1.5,
          vx: Math.cos(ang) * spd,
          vy: Math.sin(ang) * spd - 0.7,
          r: 0.9 + Math.random() * 0.8,
          alpha: 0.92,
          age: 0,
          life: 210 + Math.random() * 140,
        });
      }

      const ashCount = 8;
      for (let i = 0; i < ashCount; i += 1) {
        const ang = Math.random() * Math.PI * 2;
        const spd = 0.6 + Math.random() * 1.4;
        addParticle({
          kind: "ash",
          x: x + (Math.random() - 0.5) * 2,
          y: y + (Math.random() - 0.5) * 2,
          vx: Math.cos(ang) * spd,
          vy: Math.sin(ang) * spd - 0.3,
          r: 0.7 + Math.random() * 1.0,
          shade: Math.random() > 0.4 ? 54 : 112,
          alpha: 0.75,
          age: 0,
          life: 340 + Math.random() * 200,
        });
      }

      for (let i = 0; i < 4; i += 1) {
        emitSmokePuff(
          x + (Math.random() - 0.5) * 3,
          y - 1,
          (Math.random() - 0.5) * 0.38,
          -0.62 - Math.random() * 0.4,
          { r0: 3.0, rEnd: 19 + Math.random() * 7, alpha: 0.42, life: 880 + Math.random() * 320, jitter: 2.5 }
        );
      }
    }

    let lastFrameTime = performance.now();

    function tick(now) {
      const rawDt = now - lastFrameTime;
      const dt = Math.max(0, Math.min(Number.isFinite(rawDt) ? rawDt : 16.67, 48));
      lastFrameTime = now;

      if (isVisible && !reducedMotion && now >= snuffedUntil) {
        const idleInterval = isInteractive ? 72 : 98;
        if (now - lastIdleEmit >= idleInterval) {
          lastIdleEmit = now;
          emitSmokePuff(cx + 1, cy + 1, 0.04, isInteractive ? -0.62 : -0.50, {
            r0: isInteractive ? 2.8 : 2.3,
            rEnd: isInteractive ? 19 : 16,
            alpha: isInteractive ? 0.46 : 0.38,
          });
        }
      }

      ctx.clearRect(0, 0, vw, vh);

      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const p = particles[i];
        p.age += dt;
        if (p.age >= p.life) {
          particles.splice(i, 1);
          continue;
        }
        const t = Math.max(0, Math.min(1, p.age / p.life));
        const k = dt / 16.67;

        if (p.kind === "smoke") {
          p.x += (p.vx + Math.sin(p.age * p.freq + p.phase) * p.sway) * k;
          p.y += p.vy * k;
          p.vx *= 0.985;
          const r = Math.max(0.5, p.r + (p.rEnd - p.r) * Math.pow(t, 0.72));
          if (!Number.isFinite(p.x) || !Number.isFinite(p.y) || !Number.isFinite(r)) continue;
          const fadeIn = Math.min(1, t / 0.14);
          const fadeOut = Math.pow(1 - t, 1.38);
          const a = p.alpha * fadeIn * fadeOut;

          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
          grad.addColorStop(0, `rgba(246, 248, 244, ${(a * 0.86).toFixed(3)})`);
          grad.addColorStop(0.45, `rgba(155, 165, 158, ${(a * 0.62).toFixed(3)})`);
          grad.addColorStop(1, "rgba(120, 130, 122, 0)");

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.kind === "spark") {
          p.x += p.vx * k;
          p.y += p.vy * k;
          p.vy += 0.11 * k;
          p.vx *= 0.95;
          const a = p.alpha * (1 - t);
          ctx.fillStyle = `rgba(255, ${Math.round(165 - 90 * t)}, 42, ${a.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(0.4, p.r * (1 - t * 0.45)), 0, Math.PI * 2);
          ctx.fill();
        } else if (p.kind === "ash") {
          p.x += p.vx * k;
          p.y += p.vy * k;
          p.vy += 0.06 * k;
          p.vx *= 0.92;
          const a = p.alpha * Math.pow(1 - t, 1.15);
          ctx.fillStyle = `rgba(${p.shade}, ${p.shade + 2}, ${p.shade}, ${a.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.kind === "smudge") {
          const r = Math.max(0.5, p.r + (p.rEnd - p.r) * Math.pow(t, 0.45));
          if (!Number.isFinite(p.x) || !Number.isFinite(p.y) || !Number.isFinite(r)) continue;
          const a = p.alpha * Math.pow(1 - t, 1.35);
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
          grad.addColorStop(0, `rgba(46, 52, 48, ${(a * 0.85).toFixed(3)})`);
          grad.addColorStop(0.55, `rgba(82, 88, 84, ${(a * 0.4).toFixed(3)})`);
          grad.addColorStop(1, "rgba(82, 88, 84, 0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (particles.length > 0 || (isVisible && !reducedMotion)) {
        rafId = window.requestAnimationFrame(tick);
      } else {
        rafId = 0;
      }
    }

    function ensureLoop() {
      if (!rafId) {
        lastFrameTime = performance.now();
        rafId = window.requestAnimationFrame(tick);
      }
    }

    function updateCursorState(target) {
      if (!target || !(target instanceof Element)) {
        isInteractive = false;
        cursorEl.classList.remove("is-interactive");
        return;
      }
      isInteractive = Boolean(target.closest(INTERACTIVE_SELECTOR));
      cursorEl.classList.toggle("is-interactive", isInteractive);
    }

    window.addEventListener(
      "pointermove",
      (e) => {
        if (e.pointerType === "touch") return;
        const now = performance.now();
        const prevX = cx;
        const prevY = cy;
        cx = e.clientX;
        cy = e.clientY;
        cursorEl.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;

        if (!isVisible) {
          isVisible = true;
          lastEmitX = cx;
          lastEmitY = cy;
          cursorEl.classList.add("is-visible");
          ensureLoop();
        }

        updateCursorState(e.target);

        if (now >= snuffedUntil) {
          const dist = Math.hypot(cx - lastEmitX, cy - lastEmitY);
          if (dist >= 7) {
            const dx = (cx - prevX) * 0.035;
            const dy = (cy - prevY) * 0.025;
            emitSmokePuff(cx + 1, cy + 1, Math.max(-0.6, Math.min(0.6, -dx)), -0.42 + Math.max(-0.3, Math.min(0.25, -dy)), {
              r0: 2.2 + Math.min(2.0, dist * 0.045),
              rEnd: 15 + Math.random() * 8,
              alpha: 0.30,
              life: 820 + Math.random() * 380,
            });
            lastEmitX = cx;
            lastEmitY = cy;
          }
        }

        if (now - lastMoveTime < 120) {
          cursorEl.classList.add("is-moving");
          window.clearTimeout(moveClearTimer);
          moveClearTimer = window.setTimeout(() => {
            cursorEl.classList.remove("is-moving");
          }, 140);
        }
        lastMoveTime = now;
      },
      { passive: true }
    );

    window.addEventListener(
      "scroll",
      () => {
        if (!isVisible) return;
        const el = document.elementFromPoint(cx, cy);
        if (el) updateCursorState(el);
      },
      { passive: true }
    );

    // Prevent native image/link ghost drag cursor from interrupting our custom cursor
    document.addEventListener("dragstart", (e) => {
      if (e.target instanceof Element && e.target.closest("img, a, button")) {
        e.preventDefault();
      }
    });

    let isPointerDown = false;
    let downTimestamp = 0;

    window.addEventListener(
      "pointerdown",
      (e) => {
        if (e.pointerType === "touch") return;
        cx = e.clientX;
        cy = e.clientY;
        cursorEl.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
        if (!isVisible) {
          isVisible = true;
          cursorEl.classList.add("is-visible");
          ensureLoop();
        }
        updateCursorState(e.target);

        isPointerDown = true;
        downTimestamp = performance.now();

        window.clearTimeout(stubTimer);
        cursorEl.classList.add("is-stubbing", "is-snuffed");

        snuffedUntil = downTimestamp + 480;
        emitStubOutFx(cx + 1, cy + 1);

        window.clearTimeout(snuffTimer);
        snuffTimer = window.setTimeout(() => {
          cursorEl.classList.remove("is-snuffed");
        }, 500);
      },
      { passive: true }
    );

    window.addEventListener(
      "pointerup",
      () => {
        if (!isPointerDown) return;
        isPointerDown = false;
        const elapsed = performance.now() - downTimestamp;
        const minHold = Math.max(0, 220 - elapsed);
        window.clearTimeout(stubTimer);
        stubTimer = window.setTimeout(() => {
          cursorEl.classList.remove("is-stubbing");
        }, minHold);
      },
      { passive: true }
    );

    document.addEventListener("mouseout", (e) => {
      if (!e.relatedTarget) {
        isVisible = false;
        isPointerDown = false;
        cursorEl.classList.remove("is-visible", "is-moving", "is-stubbing");
      }
    });

    window.addEventListener("blur", () => {
      isVisible = false;
      isPointerDown = false;
      cursorEl.classList.remove("is-visible", "is-moving", "is-stubbing");
    });

    // Expose particle bridge so the expanding homepage burn front showers embers & charred ash flakes
    emitBurnRingFx = (originX, originY, radiusPx, intensity) => {
      if (reducedMotion || radiusPx < 6) return;
      const count = Math.max(2, Math.round(5 * intensity));
      for (let i = 0; i < count; i += 1) {
        const ang = Math.random() * Math.PI * 2;
        const px = originX + Math.cos(ang) * radiusPx;
        const py = originY + Math.sin(ang) * radiusPx;
        if (px < -16 || px > vw + 16 || py < 96 || py > vh + 16) continue;

        const roll = Math.random();
        if (roll < 0.48) {
          // Glowing rising fire ember
          addParticle({
            kind: "spark",
            x: px + (Math.random() - 0.5) * 6,
            y: py + (Math.random() - 0.5) * 6,
            vx: Math.cos(ang) * (0.4 + Math.random() * 0.9) + (Math.random() - 0.5) * 0.6,
            vy: -1.1 - Math.random() * 1.6,
            r: 1.1 + Math.random() * 1.35,
            alpha: 0.96,
            age: 0,
            life: 360 + Math.random() * 340,
          });
        } else if (roll < 0.80) {
          // Curled black charred canvas flake floating upward
          addParticle({
            kind: "ash",
            x: px + (Math.random() - 0.5) * 8,
            y: py + (Math.random() - 0.5) * 8,
            vx: (Math.random() - 0.5) * 1.1,
            vy: -0.7 - Math.random() * 1.1,
            r: 1.0 + Math.random() * 1.5,
            shade: 28 + Math.round(Math.random() * 34),
            alpha: 0.82,
            age: 0,
            life: 480 + Math.random() * 380,
          });
        } else {
          // Billowing warm scorch smoke curling off the fire line
          emitSmokePuff(px, py, (Math.random() - 0.5) * 0.45, -0.78 - Math.random() * 0.55, {
            r0: 6.0 + Math.random() * 4.0,
            rEnd: 38 + Math.random() * 22,
            alpha: 0.42,
            life: 1150 + Math.random() * 520,
            jitter: 6,
          });
        }
      }
    };
  }

  /* ---------- Homepage Cigarette-Ignited Oil-Canvas Burn Transition (WebGL FBM + 2D Fallback) ---------- */
  const heroBurnState = {
    gl: null,
    program: null,
    tex: null,
    posBuf: null,
    uniforms: null,
    webglFailed: false,
    rafId: 0,
  };

  function initBurnWebGL(canvas) {
    if (heroBurnState.webglFailed) return false;
    if (heroBurnState.gl && heroBurnState.program) return true;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: true,
      antialias: true,
      preserveDrawingBuffer: false,
    });
    if (!gl) {
      heroBurnState.webglFailed = true;
      return false;
    }

    const vsSrc = `
      attribute vec2 aPos;
      varying vec2 vUv;
      void main() {
        vUv = vec2(aPos.x * 0.5 + 0.5, 0.5 - aPos.y * 0.5);
        gl_Position = vec4(aPos, 0.0, 1.0);
      }
    `;

    const fsSrc = `
      precision highp float;
      varying vec2 vUv;

      uniform sampler2D uTex;
      uniform vec2 uOrigin;
      uniform float uRadius;
      uniform float uTime;
      uniform float uSmokeClear;
      uniform float uCanvasAspect;
      uniform float uImgAspect;
      uniform float uObjPosY;
      uniform float uBrightness;
      uniform float uScrimStrength;
      uniform float uUseScrim;
      uniform float uSeed;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
          mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
          u.y
        );
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        mat2 rot = mat2(0.80, 0.60, -0.60, 0.80);
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p = rot * p * 2.02;
          a *= 0.5;
        }
        return v;
      }

      vec2 coverUv(vec2 uv) {
        if (uCanvasAspect > uImgAspect) {
          float scaleY = uImgAspect / uCanvasAspect;
          return vec2(uv.x, (uv.y - uObjPosY) * scaleY + uObjPosY);
        } else {
          float scaleX = uCanvasAspect / uImgAspect;
          return vec2((uv.x - 0.5) * scaleX + 0.5, uv.y);
        }
      }

      void main() {
        vec2 uvImg = clamp(coverUv(vUv), 0.0, 1.0);
        vec3 baseCol = texture2D(uTex, uvImg).rgb * uBrightness;

        // Match homepage .hero-scrim dark olive bottom vignette when uUseScrim > 0.5 (disabled for gallery paintings)
        if (uUseScrim > 0.5) {
          float scrimT = smoothstep(0.46, 1.0, vUv.y);
          float topScrim = mix(0.06, 0.14, uScrimStrength);
          float botScrim = mix(0.72, 0.78, uScrimStrength);
          float scrimA = mix(topScrim, botScrim, scrimT);
          baseCol = mix(baseCol, vec3(0.06, 0.10, 0.08), scrimA);
        }

        // Aspect-corrected radial distance from exact cigarette click point
        vec2 delta = vec2((vUv.x - uOrigin.x) * uCanvasAspect, vUv.y - uOrigin.y);
        float dist = length(delta);

        // Multi-octave organic jagged canvas burn shape + live upward-licking flame turbulence
        vec2 nCoord = vec2(vUv.x * uCanvasAspect, vUv.y);
        float nShape = fbm(nCoord * 4.8 + vec2(uSeed, uSeed * 0.63));
        float nFine  = fbm(nCoord * 13.5 - vec2(0.0, uTime * 1.15) + vec2(uSeed * 1.3, 2.7));
        float nTongue = fbm(nCoord * 22.0 - vec2(0.0, uTime * 2.65) + vec2(4.1, uSeed));

        float shapeAmp = 0.24 * smoothstep(0.0, 0.12, uRadius);
        float burnEdge = dist - uRadius + (nShape - 0.5) * shapeAmp + (nFine - 0.5) * 0.055;

        // --- Billowing Post-Burn Smoke Veil (trails behind the flame, then gently drifts up & clears) ---
        float burnedMask = 1.0 - smoothstep(-0.012, 0.024, burnEdge);
        float smokeAlpha = 0.0;
        vec3 smokeCol = vec3(0.0);

        if (burnedMask > 0.001 && uSmokeClear < 0.999) {
          // Domain-warped upward-curling smoke wisps
          vec2 sCoord = nCoord * 2.5 + vec2(-uTime * 0.10, uTime * 0.34);
          float sWarp = fbm(sCoord * 1.35 + vec2(uSeed * 0.45, 2.1));
          float sBillow = fbm(sCoord + vec2(sWarp * 0.90, -uTime * 0.12));
          float sWisp   = fbm(nCoord * 5.2 + vec2(sWarp * 0.55 - uTime * 0.06, uTime * 0.52) + uSeed);
          float sField  = mix(sBillow, sWisp, 0.36);

          // Denser smoke close behind the burning flame, softer wispy mist across the opened interior
          float trailProx = exp(min(0.0, burnEdge) * 1.65);
          float densityProfile = mix(0.62, 1.0, trailProx);

          // Uneven wisp-by-wisp clearing as uSmokeClear progresses 0 -> 1
          float clearCut = uSmokeClear * 1.12;
          float smokeShape = smoothstep(clearCut - 0.24, clearCut + 0.52, sField * densityProfile);
          float globalFade = 1.0 - smoothstep(0.55, 0.96, uSmokeClear);
          smokeAlpha = burnedMask * smokeShape * globalFade * 0.84;

          // Atmospheric smoke palette: deep charcoal-moss core -> misty pearl-ivory wisps
          vec3 darkSmoke  = vec3(0.16, 0.19, 0.17);
          vec3 lightSmoke = vec3(0.84, 0.87, 0.83);
          smokeCol = mix(darkSmoke, lightSmoke, smoothstep(0.28, 0.78, sWisp));

          // Warm orange firelight scattering through smoke immediately behind the flame front
          float fireScatter = exp(min(0.0, burnEdge) * 8.5) * (1.0 - uSmokeClear * 0.85);
          smokeCol += vec3(1.0, 0.42, 0.08) * fireScatter * (0.45 + 0.35 * sWisp);
        }

        // Fully burned-through interior: render lingering drifting smoke only (fades cleanly to 0)
        if (burnEdge < -0.032) {
          gl_FragColor = vec4(smokeCol * smokeAlpha, smokeAlpha);
          return;
        }

        // Zone 1: Radiant heat-scorched oil canvas ahead of the flame (toasted umber/espresso)
        float heatZone = 1.0 - smoothstep(0.028, 0.135, burnEdge);
        vec3 scorchedCol = baseCol * vec3(0.58, 0.36, 0.20) - vec3(0.06, 0.04, 0.02);
        vec3 col = mix(baseCol, max(scorchedCol, 0.0), heatZone * (0.68 + 0.25 * nFine));

        // Zone 2: Carbonized crinkled black soot rim along the burning frontier
        float charMask = 1.0 - smoothstep(0.012, 0.044, burnEdge);
        vec3 charCol = vec3(0.055, 0.040, 0.032) * (0.75 + 0.5 * nFine);
        col = mix(col, charCol, charMask);

        // Zone 3: Living flickering incandescent flame & glowing ember frontier
        float flameWidth = 0.026 + 0.016 * nTongue;
        float flameBand = smoothstep(-0.022, 0.004, burnEdge) * (1.0 - smoothstep(0.006, flameWidth, burnEdge));
        float hotCore = smoothstep(-0.006, 0.004, burnEdge) * (1.0 - smoothstep(0.004, 0.016 + 0.008 * nTongue, burnEdge));
        float flicker = 0.78 + 0.42 * nTongue;

        vec3 emberRed   = vec3(0.82, 0.14, 0.02);
        vec3 fireOrange = vec3(1.00, 0.42, 0.06);
        vec3 fireGold   = vec3(1.00, 0.90, 0.56);

        vec3 flameCol = mix(emberRed, fireOrange, smoothstep(0.15, 0.75, flameBand * flicker));
        flameCol = mix(flameCol, fireGold, clamp(hotCore * flicker * 1.15, 0.0, 1.0));

        // Blend canvas opacity cleanly across the flame front, then composite smoke veil behind/over
        float canvasAlpha = smoothstep(-0.004, 0.012, burnEdge);
        float glowAlpha = smoothstep(-0.032, 0.002, burnEdge) * (1.0 - canvasAlpha) * (0.55 + 0.45 * nTongue);

        vec3 finalRgb = mix(col, flameCol * (1.15 + 0.35 * hotCore), clamp(flameBand * 1.15, 0.0, 1.0));
        float baseAlpha = clamp(canvasAlpha + glowAlpha * 0.78, 0.0, 1.0);
        vec3 basePremul = finalRgb * canvasAlpha + flameCol * glowAlpha * 1.1;

        // Porter-Duff "over" composite of smoke veil with active flame/canvas
        vec3 outPremul = basePremul + smokeCol * smokeAlpha * (1.0 - baseAlpha);
        float outAlpha = clamp(baseAlpha + smokeAlpha * (1.0 - baseAlpha), 0.0, 1.0);
        gl_FragColor = vec4(outPremul, outAlpha);
      }
    `;

    function compile(type, src) {
      const sh = gl.createShader(type);
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        gl.deleteShader(sh);
        return null;
      }
      return sh;
    }

    const vs = compile(gl.VERTEX_SHADER, vsSrc);
    const fs = compile(gl.FRAGMENT_SHADER, fsSrc);
    if (!vs || !fs) {
      heroBurnState.webglFailed = true;
      return false;
    }

    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      heroBurnState.webglFailed = true;
      return false;
    }

    const posBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const aPos = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    heroBurnState.gl = gl;
    heroBurnState.program = prog;
    heroBurnState.tex = tex;
    heroBurnState.posBuf = posBuf;
    heroBurnState.uniforms = {
      uTex: gl.getUniformLocation(prog, "uTex"),
      uOrigin: gl.getUniformLocation(prog, "uOrigin"),
      uRadius: gl.getUniformLocation(prog, "uRadius"),
      uTime: gl.getUniformLocation(prog, "uTime"),
      uSmokeClear: gl.getUniformLocation(prog, "uSmokeClear"),
      uCanvasAspect: gl.getUniformLocation(prog, "uCanvasAspect"),
      uImgAspect: gl.getUniformLocation(prog, "uImgAspect"),
      uObjPosY: gl.getUniformLocation(prog, "uObjPosY"),
      uBrightness: gl.getUniformLocation(prog, "uBrightness"),
      uScrimStrength: gl.getUniformLocation(prog, "uScrimStrength"),
      uUseScrim: gl.getUniformLocation(prog, "uUseScrim"),
      uSeed: gl.getUniformLocation(prog, "uSeed"),
    };
    return true;
  }

  function runBurnCanvas2DFallback(canvas, originX, originY, cw, ch, durationMs, onDone) {
    // Graceful fallback if WebGL or file:// texture upload is blocked: smooth organic fiery ring burn-through
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(cw * dpr);
    canvas.height = Math.round(ch * dpr);
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      onDone();
      return;
    }
    const maxR = Math.max(
      Math.hypot(originX, originY),
      Math.hypot(cw - originX, originY),
      Math.hypot(originX, ch - originY),
      Math.hypot(cw - originX, ch - originY)
    ) + 48;

    const startTime = performance.now();
    function frame(now) {
      const u = Math.min(1, Math.max(0, (now - startTime) / durationMs));
      const r = u < 0.16
        ? 18 * (u / 0.16)
        : 18 + (maxR - 18) * (0.18 * ((u - 0.16) / 0.84) + 0.82 * Math.pow((u - 0.16) / 0.84, 1.55));

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, cw, ch);
      ctx.fillStyle = "rgba(30, 44, 34, 0.94)";
      ctx.fillRect(0, 0, cw, ch);

      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(originX, originY, Math.max(1, r), 0, Math.PI * 2);
      ctx.fill();

      ctx.globalCompositeOperation = "source-over";
      const ring = ctx.createRadialGradient(originX, originY, Math.max(0, r - 14), originX, originY, r + 26);
      ring.addColorStop(0, "rgba(255, 220, 120, 0)");
      ring.addColorStop(0.45, "rgba(255, 118, 22, 0.85)");
      ring.addColorStop(0.75, "rgba(42, 22, 12, 0.72)");
      ring.addColorStop(1, "rgba(42, 22, 12, 0)");
      ctx.fillStyle = ring;
      ctx.beginPath();
      ctx.arc(originX, originY, r + 26, 0, Math.PI * 2);
      ctx.fill();

      if (emitBurnRingFx && u > 0.04 && u < 0.90) {
        emitBurnRingFx(originX, originY + canvas.getBoundingClientRect().top, r, 1.0);
      }

      if (u < 1) {
        heroBurnState.rafId = window.requestAnimationFrame(frame);
      } else {
        onDone();
      }
    }
    heroBurnState.rafId = window.requestAnimationFrame(frame);
  }

  function triggerHeroBurn({ imgEl, isPainting, clientX, clientY, targetRoute, navOpts }) {
    const reducedMotion =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const burnCanvas = document.getElementById("heroBurnCanvas");

    if (reducedMotion || !burnCanvas || !imgEl || !imgEl.complete || !imgEl.naturalWidth) {
      navigateTo(targetRoute, navOpts);
      return;
    }

    const headerEl = document.getElementById("siteHeader");
    const headerOffset = headerEl ? Math.max(0, Math.round(headerEl.getBoundingClientRect().bottom)) : 112;
    const cw = window.innerWidth;
    const ch = Math.max(240, window.innerHeight - headerOffset);
    burnCanvas.style.left = "0px";
    burnCanvas.style.top = `${headerOffset}px`;
    burnCanvas.style.width = `${cw}px`;
    burnCanvas.style.height = `${ch}px`;
    const localX = Math.max(0, Math.min(cw, clientX));
    const localY = Math.max(0, Math.min(ch, clientY - headerOffset));

    // Slow-motion ceremonial burn (~1.50s) + billowing smoke gently clearing (~0.85s) = 2.35s total
    const BURN_MS = 1500;
    const SMOKE_CLEAR_START_MS = 1280;
    const TOTAL_DURATION_MS = 2350;

    state.isBurning = true;
    activeBurnTargetRoute = targetRoute;

    const cleanup = () => {
      if (heroBurnState.rafId) {
        window.cancelAnimationFrame(heroBurnState.rafId);
        heroBurnState.rafId = 0;
      }
      if (heroBurnState.gl) {
        heroBurnState.gl.clearColor(0, 0, 0, 0);
        heroBurnState.gl.clear(heroBurnState.gl.COLOR_BUFFER_BIT);
      }
      burnCanvas.classList.remove("is-active");
      state.isBurning = false;
      activeBurnTargetRoute = null;
      cancelActiveHeroBurn = null;
    };
    cancelActiveHeroBurn = cleanup;

    // Try GPU WebGL organic FBM canvas burn shader first
    let useWebGL = initBurnWebGL(burnCanvas);
    if (useWebGL) {
      try {
        const gl = heroBurnState.gl;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        burnCanvas.width = Math.round(cw * dpr);
        burnCanvas.height = Math.round(ch * dpr);
        gl.viewport(0, 0, burnCanvas.width, burnCanvas.height);

        gl.useProgram(heroBurnState.program);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, heroBurnState.tex);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imgEl);
      } catch (_secErr) {
        // file:// SecurityError fallback
        useWebGL = false;
      }
    }

    burnCanvas.classList.add("is-active");

    if (!useWebGL) {
      navigateTo(targetRoute, navOpts);
      runBurnCanvas2DFallback(burnCanvas, localX, localY, cw, ch, BURN_MS, cleanup);
      return;
    }

    const gl = heroBurnState.gl;
    const u = heroBurnState.uniforms;
    const canvasAspect = cw / ch;
    const imgAspect = imgEl.naturalWidth / imgEl.naturalHeight;
    const ox = localX / cw;
    const oy = localY / ch;

    const maxCornerDist = Math.max(
      Math.hypot(ox * canvasAspect, oy),
      Math.hypot((1 - ox) * canvasAspect, oy),
      Math.hypot(ox * canvasAspect, 1 - oy),
      Math.hypot((1 - ox) * canvasAspect, 1 - oy)
    );
    const maxRadius = maxCornerDist + 0.28;
    const seed = Math.random() * 40.0 + 3.0;

    gl.useProgram(heroBurnState.program);
    gl.uniform1i(u.uTex, 0);
    gl.uniform2f(u.uOrigin, ox, oy);
    gl.uniform1f(u.uCanvasAspect, canvasAspect);
    gl.uniform1f(u.uImgAspect, imgAspect);
    gl.uniform1f(u.uObjPosY, isPainting ? 0.50 : 0.42);
    gl.uniform1f(u.uBrightness, isPainting ? 0.89 : 0.96);
    gl.uniform1f(u.uScrimStrength, isPainting ? 1.0 : 0.0);
    gl.uniform1f(u.uUseScrim, 1.0);
    gl.uniform1f(u.uSeed, seed);

    function drawFrame(radius, timeSec, smokeClear) {
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(u.uRadius, radius);
      gl.uniform1f(u.uTime, timeSec);
      gl.uniform1f(u.uSmokeClear, smokeClear);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    // Paint Frame 0 (intact oil painting + first ignition spark) BEFORE swapping page underneath -> ZERO white flash!
    drawFrame(0.002, 0.0, 0.0);
    navigateTo(targetRoute, navOpts);

    const startTime = performance.now();
    let lastParticleTime = 0;

    function tickBurn(now) {
      if (!state.isBurning) return;
      const elapsed = Math.max(0, now - startTime);
      const tBurn = Math.min(1, elapsed / BURN_MS);
      const tTotal = Math.min(1, elapsed / TOTAL_DURATION_MS);

      // Slow-motion flame curve (0..1500ms):
      // 0..0.18 (~270ms): Cigarette tip catches & chars small glowing hole right at click point
      // 0.18..1.00 (~1230ms): Majestic accelerating jagged flame sweeps the whole canvas, leaving billowing smoke behind
      let radius;
      if (tBurn < 0.18) {
        const p0 = tBurn / 0.18;
        radius = 0.002 + 0.068 * (p0 * p0 * (3 - 2 * p0));
      } else {
        const p1 = Math.min(1, (tBurn - 0.18) / 0.82);
        const eased = 0.18 * p1 + 0.82 * Math.pow(p1, 1.52);
        radius = 0.070 + (maxRadius - 0.070) * eased;
      }

      // Billowing smoke clears organically wisp-by-wisp from 1280ms -> 2350ms, unveiling the destination page!
      let smokeClear = 0.0;
      if (elapsed > SMOKE_CLEAR_START_MS) {
        const sc = Math.min(1, (elapsed - SMOKE_CLEAR_START_MS) / (TOTAL_DURATION_MS - SMOKE_CLEAR_START_MS));
        // Gentle ease-in-out dissipation
        smokeClear = sc * sc * (3 - 2 * sc);
      }

      drawFrame(radius, elapsed * 0.001, smokeClear);

      // Emit drifting embers, black char flakes & billowing scorch smoke along the expanding fire front
      if (emitBurnRingFx && tBurn > 0.03 && tBurn < 0.94 && now - lastParticleTime >= 24) {
        lastParticleTime = now;
        emitBurnRingFx(clientX, clientY, radius * ch, tBurn < 0.2 ? 0.75 : 1.25);
      }

      if (tTotal < 1) {
        heroBurnState.rafId = window.requestAnimationFrame(tickBurn);
      } else {
        cleanup();
      }
    }

    heroBurnState.rafId = window.requestAnimationFrame(tickBurn);
  }

  /* ---------- Init ---------- */
  applyTranslations();
  bindEvents();
  renderActiveRoute(parseRouteFromHash());
  initHaloCursor();
})();
