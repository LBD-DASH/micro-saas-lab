# PLAYBOOK: add one page

Never fabricate. Every fact needs a source link and "last checked" date. No em dashes. No prices, no "passive income" or "guaranteed" claims. Partner links only via `src/data/partners.json` (empty `affiliateUrl` until approved).

1. Pick the first unticked page in the priority list below; tick it in the same commit.
2. Create `src/content/pages/<slug>.md` (URL becomes `/<slug>/`). Frontmatter (validated at build): `title` (10-70 chars), `description` (70-160), `lastUpdated` (YYYY-MM-DD), `lastChecked` ("20 Nov 2026" style), optional `faq` (q/a list, emits FAQPage JSON-LD), optional `sources` (label/url list).
3. Write the body in Markdown. State that the tool is in development and not yet available wherever the tool is mentioned.
4. `npm run build`. It must pass the schema. Then `grep -rl "—" dist src` must print nothing.
5. Link the page from the home page or footer if it is a main page. The sitemap updates itself.
6. Commit, push to `main`. The Actions workflow deploys. Verify with `curl -s -o /dev/null -w "%{http_code}" https://lbd-dash.github.io/micro-saas-lab/<slug>/` (expect 200).

## Priority list
- [ ] who-its-for-trades (sourced, no invented numbers)
- [ ] quote-checklist (what a clear quote should include; cite official small-business guidance)
- [ ] quote-vs-estimate (cite an official source)
- [ ] ai-quote-drafting-limits (honest limits and review steps)
- [ ] waitlist-thanks (only after a form endpoint is chosen)
- [ ] roadmap (only what is decided)
