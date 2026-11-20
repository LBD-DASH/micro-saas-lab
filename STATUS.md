# STATUS (20 Nov 2026)

- Live URL: https://lbd-dash.github.io/micro-saas-lab/
- Repo: https://github.com/LBD-DASH/micro-saas-lab
- Pages shipped: home, how-it-works, faq (FAQPage JSON-LD), about, privacy, disclosure, 404, sitemap.xml, robots.txt
- Workflow chosen: quote generation (job description or enquiry into itemised draft, user reviews and sends). No product, no pricing, no payments.
- Form: markup present, submit DISABLED with an on-page note. No existing free form pattern or Kevin-owned enquiry address was found in /workspace/ai-income-sites or /workspace/mogul. Nothing is collected.

## Decisions for Kevin
1. Form endpoint: pick one (a Kevin-owned mailto address, or a free form service account). Set `endpoint` in `src/components/Waitlist.astro`, then update privacy page.
2. Domain: none bought. Stays on github.io until you decide (then set SITE_URL/BASE_PATH in the workflow).
3. Keep quote generation as the workflow? Chosen over invoice reminders because PaidUp may overlap; confirm or switch.
4. Accounts: none created. A form service would need one.
