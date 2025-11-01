# Changelog

All notable changes to the NEEDSBOXES theme will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and the project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0-NEEDSBOXES] - 2025-11-03

### Added
- Brand token system (`_tokens.scss`, Tailwind config) mapping DeepSeek colors, typography, and elevations.
- Dedicated brand override layer (`06-needsboxes/_brand.scss`) to restyle Raed components without touching Twig logic.
- Documentation set: rebranding tracker reset, audit log, verification checklist, and final DEV update template.

### Changed
- Updated project metadata (`package.json`, `README.md`, `twilight.json`) to reflect NEEDSBOXES ownership and workflow.
- Refreshed Tailwind configuration with brand fonts and utility aliases.
- Reworked global styling to consume the new CSS variables and enforce Tajawal/Inter typography per locale.

### Removed
- Legacy Raed-specific narrative from README and scripts that enforced pnpm-only installs.

---

Historic Raed release notes are retained upstream in the original repository: <https://github.com/SallaApp/theme-raed>.
