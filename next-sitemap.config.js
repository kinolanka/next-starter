/** @type {import('next-sitemap').IConfig} */

// https://github.com/iamvishnusankar/next-sitemap#configuration-options
// https://vercel.com/docs/concepts/deployments/environments#preview

// default config for vercel production deployment
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateIndexSitemap: false,
  sitemapBaseFileName: 'sitemap.static',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 100000,
  exclude: ['/500', '/400'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};

// vercel non production deployment
if (serverEnv !== 'production') {
  config.robotsTxtOptions = {
    policies: [
      {
        userAgent: '*',
        disallow: '/',
      },
    ],
  };
}

module.exports = config;
