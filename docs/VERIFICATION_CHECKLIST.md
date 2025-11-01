# NEEDSBOXES Theme Verification Checklist

Use this document before tagging a release or pushing to the live store.

## Twig Integrity
- [x] Compare `src/views` with `base/raed-import` (`git diff base/raed-import -- src/views`).
- [x] Confirm no `{% block %}`, `{% include %}`, `{% extends %}` statements are removed or renamed.
- [x] Ensure every loop/filter/variable matches Raed unless explicitly documented.

## Visual QA
- [x] Home page hero, featured products, banners, testimonials use DeepSeek palette and typography.
- [x] Header + footer render gradient/blur correctly on desktop and mobile.
- [x] Check shadows, radii, and button gradients against `deepseek.html` reference.
- [x] Verify responsive breakpoints: 1440px, 1024px, 768px, 480px.

## Functional QA
- [x] `salla theme preview` runs without console errors. _Preview link: https://salla.design/dev-mgtzxcqjxhzjvoan (auto-expires as per token)._
- [x] Cart flow: add item → cart → checkout → thank you (guest + logged-in if possible).
- [x] Account pages (orders, wallet, notifications) load in RTL and LTR.
- [x] Search, loyalty, gifting, and cart summary widgets respond with brand styling.

## Localization
- [x] AR/EN translations exist for any newly introduced keys.
- [x] No hard-coded text remains in Twig or JS; all user-facing copy uses `|trans`.

## Assets & Build
- [x] `npm run production` completes (warnings noted: Sass legacy imports, Tailwind line-clamp).
- [x] Generated CSS/JS bundles include brand layer (`06-needsboxes/_brand.scss`).
- [x] Image assets referenced via `|cdn` or store configuration (Google Fonts allowed).

## Documentation & Tracking
- [x] `/docs/NEEDSBOXES_THEME_REBRANDING_TRACKER.md` marked with final statuses.
- [x] `/docs/NEEDSBOXES_THEME_REBRANDING_AUDIT.md` updated with current date.
- [x] `/docs/updates/DEV_UPDATE_FINAL.md` summarises work and QA results.
- [x] `CHANGELOG.md` documents the release.

## Release
- [x] Tag created (`v1.0.0-NEEDSBOXES` or next semantic version).
- [x] `git push origin main --tags` executed after QA approval.
