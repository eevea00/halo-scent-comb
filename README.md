# HALO Scent Comb — Official Brand Showcase Website

A zero-dependency, static single-page web application (HTML5 / CSS3 / Vanilla JavaScript / WebGL) for **HALO Scent Comb** — a pocket-sized, friction-activated botanical hair & fabric refresh comb with adjustable spring-loaded side grips.

- **Live Website (GitHub Pages)**: https://eevea00.github.io/halo-scent-comb/
- **GitHub Repository**: https://github.com/eevea00/halo-scent-comb

---

## Quick Start / 本地运行方式（推荐本地 HTTP 服务）

Running over a local HTTP server enables the full interactive experience, including the homepage WebGL oil-canvas burn transition shader (without browser `file://` CORS restrictions).

### Option 1 — One-Click Preview Script / 一键双击启动
- **Windows**: Double-click `start-preview.bat`
- **macOS**: Double-click `start-preview.command`

The script automatically starts a local static server on `http://127.0.0.1:8000/` and opens it in your default browser. Press `Ctrl + C` in the terminal window to stop.

### Option 2 — Command Line / 命令行手动启动
```bash
# macOS / Linux
python3 -m http.server 8000 --bind 127.0.0.1

# Windows (PowerShell / CMD)
python -m http.server 8000 --bind 127.0.0.1
```
Then open **http://127.0.0.1:8000/** in Chrome, Edge, or Safari.

> **Offline / Zero-Build Design**: No `npm install`, bundler, or backend server is required. All 34 visual assets are bundled locally under `assets/` using relative paths.

---

## Site Architecture & Key Features / 页面结构与核心功能

The site uses a lightweight hash-based SPA router with **4 primary navigation destinations** plus homepage and scent detail views:

| Route | Section | Highlights |
| :--- | :--- | :--- |
| `#/` | **Homepage / 首页** | 2.5K four-edition architectural still-life hero, 4-column Le Labo-style navigation curtain with oil-painting mist hover, homepage-only 2-frame vintage comic cigarette cursor (`hold ⇄ stub-out`) + live smoke, and full-screen WebGL FBM burn-through transition |
| `#/comb` | **Product Studio / 产品定制** | 4 fixed scent-to-CMF editions (`01 青茶雪松`, `02 雨后桧木`, `03 晒后棉麻`, `04 柚子香根草`), vertical 4-view thumbnail rail (`main / box / detail / clip`), Single (`¥78`) & Duo (`¥128`, free shipping) configurator, simulated shopping bag & checkout receipt, and a collapsed-by-default **Technical Principle** row (`assets/tech-principle.jpg` + click-to-zoom lightbox) |
| `#/scents` & `#/scents/:id` | **Botanical Scents / 植物香调** | Staggered gallery of 4 botanical oil paintings mounted in 19th-century antique gilded frames (`assets/frame-gilt.png`) with animated Copperplate painter signatures on hover; dedicated scent detail pages with overhead botanical banners, fragrance pyramid ledger, and quick 01–04 switcher |
| `#/about` | **Manifesto / 品牌宣言** | Brand philosophy statement + 3 `Everyday Moments` lifestyle photography plates (`scene-commute.jpg`, `scene-social.jpg`, `scene-lunch.jpg`) showcasing the pure-solid palm-sized comb and phone-back clip usage |
| `#/popup` | **Shenzhen Pop-up / 深圳快闪** | Shenzhen Nanshan Weekend Lab concept store visual (`assets/popup-store.jpg`), event ledger (location, schedule, launch pricing), and interactive 10-second scent trial RSVP modal |

### Additional Highlights
- **4-Language Parity (`ZH / EN / JA / KO`)**: Complete live localization switcher (`i18n.js`) covering all views, form options, accordions, cart drawer, checkout modal, and RSVP flow.
- **Responsive Design**: Tested across desktop (`1440×900`) and mobile (`390×844`) viewports with dedicated mobile navigation drawer and touch-safe fallbacks.
- **Custom Hairline UI Controls**: Unified Morandi dry-sage (`#DFE5DC`) + deep moss (`#1E3026`) palette with custom-styled dropdown menus, slide-over shopping bag drawer, toast notifications, and accessible `prefers-reduced-motion` support.

---

## Project File Structure / 工程目录结构

```text
SD5114_Group5_HALO_Website/
├── index.html                        # Multi-view SPA markup, modals, drawers & semantic structure
├── styles.css                        # Morandi sage palette, responsive layouts & animations
├── app.js                            # Hash router, WebGL burn shader, cursor smoke, PDP & cart logic
├── i18n.js                           # Complete ZH / EN / JA / KO translation dictionary
├── start-preview.bat                 # Windows one-click local HTTP preview launcher
├── start-preview.command             # macOS one-click local HTTP preview launcher
├── README.md                         # Project documentation & quick-start guide
└── assets/                           # 34 self-contained local media assets (~10.2 MB)
    ├── hero-comb.jpg                 # 2.5K 4-edition architectural hero still-life
    ├── hero-paint-*.jpg (×4)         # Widescreen botanical oil paintings for homepage hover curtain
    ├── cursor-cig.png / -stub.png    # Homepage 2-frame vintage comic hand cursor sprites
    ├── prod-*-main/box/detail.jpg (×12)  # 4 editions × 3 studio product/packaging/detail views
    ├── concept-clip.jpg              # Adjustable spring-loaded side-grip mechanism diagram
    ├── tech-principle.jpg            # Pure-solid friction-activated microcapsule principle board
    ├── frame-gilt.png                # 1024×1024 transparent antique French gilt picture frame
    ├── paint-*.jpg (×4)              # Square botanical oil paintings for #/scents gallery
    ├── scent-*.jpg (×4)              # Overhead botanical flat-lay banners for #/scents/:id
    ├── scene-commute/social/lunch.jpg (×3) # Everyday Moments lifestyle scenes for #/about
    └── popup-store.jpg               # Shenzhen Nanshan pop-up concept render for #/popup
```

---

## Browser Compatibility / 浏览器兼容性
- Recommended: **Google Chrome**, **Microsoft Edge**, **Safari**, or **Firefox** (latest versions).
- Web fonts load from a China-accessible Google Fonts mirror (`fonts.loli.net`) with clean local system serif/sans fallbacks when offline.
