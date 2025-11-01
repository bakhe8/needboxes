# NEEDSBOXES Theme Verification Checklist

Use this document before tagging a release or pushing to the live store.

## Twig Integrity
- [ ] Compare `src/views` with `base/raed-import` (`git diff base/raed-import -- src/views`).
- [ ] Confirm no `{% block %}`, `{% include %}`, `{% extends %}` statements are removed or renamed.
- [ ] Ensure every loop/filter/variable matches Raed unless explicitly documented.

## Visual QA
- [ ] Home page hero, featured products, banners, testimonials use DeepSeek palette and typography.
- [ ] Header + footer render gradient/blur correctly on desktop and mobile.
- [ ] Check shadows, radii, and button gradients against `deepseek.html` reference.
- [ ] Verify responsive breakpoints: 1440px, 1024px, 768px, 480px.

## Functional QA
- [ ] `salla theme preview` runs without console errors.
- [ ] Cart flow: add item → cart → checkout → thank you (guest + logged-in if possible).
- [ ] Account pages (orders, wallet, notifications) load in RTL and LTR.
- [ ] Search, loyalty, gifting, and cart summary widgets respond with brand styling.

## Localization
- [ ] AR/EN translations exist for any newly introduced keys.
- [ ] No hard-coded text remains in Twig or JS; all user-facing copy uses `|trans`.

## Assets & Build
- [ ] `npm run production` completes without warnings.
- [ ] Generated CSS/JS bundles include brand layer (`06-needsboxes/_brand.scss`).
- [ ] Image assets referenced via `|cdn` or store configuration (no external hotlinks except Google Fonts).

## Documentation & Tracking
- [ ] `/docs/NEEDSBOXES_THEME_REBRANDING_TRACKER.md` marked with final statuses.
- [ ] `/docs/NEEDSBOXES_THEME_REBRANDING_AUDIT.md` updated with current date.
- [ ] `/docs/updates/DEV_UPDATE_[date].md` summarises work and QA results.
- [ ] `CHANGELOG.md` documents the release.

## Release
- [ ] Tag created (`v1.0.0-NEEDSBOXES` or next semantic version).
- [ ] `git push origin main --tags` executed after QA approval.
