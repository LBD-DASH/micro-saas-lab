import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { absUrl } from '../lib/url';
export const GET: APIRoute = async ({ site }) => {
  const pages = await getCollection('pages');
  const day = (d: Date) => d.toISOString().slice(0, 10);
  const latest = pages.reduce((m, p) => (p.data.lastUpdated > m ? p.data.lastUpdated : m), new Date(0));
  const urls = [{ loc: absUrl('', site), lastmod: day(latest) }, ...pages.map((p) => ({ loc: absUrl(`${p.id}/`, site), lastmod: day(p.data.lastUpdated) }))];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join('\n') + `\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
