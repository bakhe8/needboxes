# DEV UPDATE — 2025-11-05

## Summary
- Updated JavaScript logging to reference the NeedsBoxes theme and pruned the legacy `src/views_backup_2025-11-03` folder.
- Removed the deprecated Tailwind line-clamp plugin, refreshed dependencies, and recorded the upcoming Sass `@use` migration.
- Attempted to rerun `salla theme preview`; CLI halted because the working tree contains uncommitted changes. Re-run after committing or stashing.

## Outstanding QA Actions
- **Salla preview**: Requires a clean git state and valid store credentials/token before the CLI completes the request.
- **Accessibility sweep**: Run Lighthouse/Axe against the refreshed preview once available.
- **Staging validation**: Deploy to the staging store and repeat the end-to-end flows (product, cart, checkout, account) in RTL/LTR.
