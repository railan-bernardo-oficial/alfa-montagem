import { NextResponse } from 'next/server';

// Exemplo de dados para incluir no XML
const siteUrls = [
  { loc: 'https://alfamontagem.com.br/', lastmod: '2024-09-25', changefreq: 'daily', priority: 1.0 },
  // Adicione outras URLs aqui
];

const generateSitemapXML = () => {
  const urlsXml = siteUrls.map((url) => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
    </url>
  `).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urlsXml}
    </urlset>
  `;
};

export async function GET() {
  const xml = generateSitemapXML();
  const response = new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
  return response;
}
