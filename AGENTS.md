# AGENTS.md

Repository operating rules for all humans and AI agents working in this repo.
These rules are strict and always in effect unless the repository owner explicitly overrides them.

## 1. Source Of Truth

- This file is the primary operational policy for changes in this repo.
- When in doubt, choose the safest interpretation that preserves production behavior.
- Do not make assumptions about deployment behavior; verify against current config files before changing anything.

## 2. Deployment Model (Hard Constraint)

- The public site is a static frontend deployed on GitHub Pages.
- The API is deployed separately on Vercel under `artifacts/api-server`.
- Never design a feature that requires server runtime inside GitHub Pages hosting.
- Any dynamic feature for the website must use external APIs (current pattern: Vercel endpoints).

## 3. Runtime Separation Rules

- Frontend app: `artifacts/ritabot-homepage`.
- API app: `artifacts/api-server`.
- Do not move backend logic into the homepage app.
- Do not introduce frontend features that depend on local server-only behavior.
- Treat `VITE_API_BASE_URL` as mandatory for any feature calling API routes from the static site.

## 4. Mobile Compatibility (Hard Constraint)

- Every new page and every UI change must include a functional mobile layout.
- Mobile is not optional and not a later follow-up task.
- Validate responsive behavior for common breakpoints before considering a change complete.
- Navigation, forms, tables, modals, and comparison layouts must remain usable on small screens.

## 5. Routing And GitHub Pages Constraints

- Preserve SPA routing compatibility with GitHub Pages fallback behavior.
- Do not remove or break static fallback behavior (`public/404.html` redirect flow).
- Do not introduce route handling that depends on server-side rewrites unavailable on GitHub Pages.

## 6. API Safety And Compatibility

- Preserve existing API contracts used by `/engines` unless explicitly planning a coordinated breaking change.
- Keep CORS behavior compatible with the static site origin(s).
- Keep input validation and rate limiting in place for translation endpoints.
- Never commit secrets or keys. Use environment variables only.

## 7. Change Management Rules

- Prefer minimal, targeted changes.
- Do not refactor unrelated areas while implementing a feature.
- Keep existing naming, file structure, and style unless there is a clear reason to change.
- Update docs/config when behavior changes.
- If docs conflict with code, update docs in the same change.

## 8. Quality Gates Before Merge

For any meaningful change:

- Run relevant type checks.
- Run/build the affected package(s).
- Verify desktop and mobile behavior for changed screens.
- Verify deployed-path assumptions (`BASE_PATH`, `BASE_URL`, `VITE_API_BASE_URL`) are still correct.
- For API-related changes, verify health and at least one translation path.

## 9. Forbidden Changes Without Explicit Approval

- Breaking deployment architecture (GitHub Pages static + Vercel API split).
- Removing mobile support or shipping desktop-only UI.
- Removing SPA fallback behavior.
- Introducing secrets into code or repository files.
- Silent breaking API contract changes.

## 10. Recommended Workflow For Agents

1. Confirm which app is affected (`ritabot-homepage` vs `api-server`).
2. List hosting limitations that apply to the task.
3. Implement minimal changes.
4. Validate type/build for touched package(s).
5. Verify mobile layout.
6. Summarize what changed, what was validated, and any residual risk.

## 11. Conflict Resolution

- If a requested change conflicts with these rules, pause and call out the conflict clearly.
- Offer a safe alternative that respects deployment and mobile constraints.
- Proceed only after explicit approval when a rule exception is required.

## 12. Tooling And Platform Rules

- Keep local developer workflows compatible with Windows and Unix-like environments.
- Do not use shell-specific install scripts that require `sh` unless an equivalent cross-platform path is present.
- Do not exclude required Windows native optional dependencies needed by local Vite/Tailwind/Rollup toolchains.
- Avoid introducing project scripts that require globally installed `pnpm`; prefer commands that work with Corepack when possible.
- Never commit accidental local tooling artifacts (for example `package-lock.json` in this pnpm workspace, or transient editor auto-config files) unless explicitly required.

## 13. API Implementation Consistency Rules

- `artifacts/api-server/api/**` (Vercel functions) and `artifacts/api-server/src/**` (Express routes) must remain behaviorally aligned.
- Any change to translation endpoint request payloads, validation, rate limiting, or response shape must be mirrored in both implementations unless an explicit exception is documented.
- Do not ship changes that update only one runtime path for shared endpoints (`/api/translate/*`, `/api/healthz`) without clear justification and approval.
