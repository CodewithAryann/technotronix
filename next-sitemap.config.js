/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.technotronix.ai', // ← replace with your actual domain
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404', '/500'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', '/admin/'] },
    ],
    additionalSitemaps: [
      'https://www.technotronix.ai/sitemap.xml', // you can add others if needed
    ],
  },
};
