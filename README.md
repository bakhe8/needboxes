# NEEDSBOXES Theme

The official NEEDSBOXES storefront theme for the Salla platform. This project rebuilds the Raed baseline with the NeedsBoxes visual language captured in `deepseek.html`, while preserving every Twig block, include, and control-flow fragment supplied by Salla.

## Overview

- **Framework**: Salla Twilight + Tailwind CSS + SCSS utilities.
- **Baseline**: Raed (`base/raed-import`) remains the single source for Twig, logic, and component structure.
- **Brand Source**: `deepseek.html` defines the palette, typography, spacing, and elevation system used across the theme.
- **Locales**: Arabic (default) and English are supported. All strings must flow through `|trans` keys.

## Brand Identity

| Token | Value |
| --- | --- |
| Primary | `#0D2C6C` (navy) |
| Accent Coral | `#FF9E1B` |
| Accent Orange | `#F36C21` |
| Accent Gold | `#FCC61D` |
| Surface | `#F6F7FB` |
| Neutral Ink | `#111827` |
| Arabic Fonts | Tajawal (body), Almarai (headings) |
| English Font | Inter |

Typography and colors are exposed as CSS variables in `src/assets/styles/01-settings/_tokens.scss` and consumed through Tailwind (`tailwind.config.js`) for utility classes.

## Getting Started

```bash
# Clone the primary repository
git clone https://github.com/bakhe8/needboxes needsboxes-theme
cd needsboxes-theme

# Add Raed and the secondary repository for diffing logic/UI
git remote add secondary https://github.com/bakhe8/needboxes
git remote add raed https://github.com/SallaApp/theme-raed

# Install dependencies (npm is now supported)
npm install

# Local development watch mode
npm run watch

# Production bundle
npm run production

# Salla preview (requires authenticated CLI session)
salla theme preview
```

## Revised Directive

Clone the Salla “Raed” theme, reapply brand visuals from DeepSeek, and ship only after every gate passes.

1. **Baseline parity**  
   - Pull the latest `base/raed-import` branch or clone the official repo.  
   - Compare each Twig file. Restore blocks, includes, loops, filters, and variables whenever they diverge. No inline data or hard-coded asset paths.
2. **Repository alignment**  
   - Mirror updates between the primary (`NEEDSBOXES`) and secondary (`needboxes`) repositories.  
   - Resolve drift before applying visual changes.
3. **Brand application**  
   - Use `deepseek.html` as the single source of truth for palette, spacing, typography, and elevations.  
   - Modify only visual layers: Tailwind tokens, wrapper classes, and SCSS. Twig logic stays identical to Raed.
4. **Assets & scripts**  
   - Keep Salla components intact. Hook brand styling through utilities.  
   - Avoid custom data mutations or handcrafted product lists in JavaScript.
5. **Localization**  
   - All customer-facing copy funnels through `src/locales/ar.json` and `src/locales/en.json`.  
   - Remove Raed-specific references; add brand keys where needed.
6. **Documentation**  
   - Update tracker entries as you complete sections.  
   - Record findings in `/docs/NEEDSBOXES_THEME_REBRANDING_AUDIT.md` and `/docs/updates/`.

### Quality Gates Before Publishing

- ✅ Twig inheritance and component structure match Raed.
- ✅ No broken `{% include %}` or renamed blocks.
- ✅ Translations exist for every string (AR + EN).
- ✅ Salla preview passes RTL/LTR, desktop, tablet, and mobile checks.
- ✅ Accessibility: focus states, semantic headings, alt text (where configurable).
- ✅ Bundle compiled via `npm run production`; no build-time warnings.
- ✅ Tracker, audit, and verification checklist are updated the same day.

## Project Structure

```
src/
  assets/
    js/            # Vanilla JS utilities that extend Twilight widgets
    styles/        # Tailwind + SCSS layers (brand overrides live in 06-needsboxes)
  locales/         # Arabic / English translations
  views/           # Twig templates (mirrors Raed logic)
docs/
  updates/         # Daily / milestone logs
  ...              # Audit + verification artefacts
deepseek.html      # Visual design reference
```

## Scripts & Tooling

| Command | Description |
| --- | --- |
| `npm run watch` | Development build with file watcher |
| `npm run production` | Production build (minified assets) |
| `npm run prod` | Alias for `npm run production` |
| `npm test` | Placeholder (fails intentionally) |

## Contribution Workflow

1. Sync `base/raed-import` to capture the latest upstream logic.  
2. Create a feature branch. Keep commits scoped (logic fix vs. visual polish).  
3. Update docs: tracker, audit, verification checklist.  
4. Run build + Salla preview.  
5. Submit a PR summarising findings and linking tracker entries.

## Support

Questions or issues? Open a ticket in the primary repository or reach Bakheet A. AlZahrani directly. For Salla CLI or Twilight engine questions, refer to [docs.salla.dev](https://docs.salla.dev/).
