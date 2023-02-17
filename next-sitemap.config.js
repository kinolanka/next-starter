/** @type {import('next-sitemap').IConfig} */

// https://github.com/iamvishnusankar/next-sitemap#configuration-options
// https://vercel.com/docs/concepts/deployments/environments#preview

const serverEnv = process.env.VERCEL_ENV || 'development';

// default config for vercel production deployment
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateIndexSitemap: false,
  sitemapBaseFileName: 'sitemap.static',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 100000,
  exclude: ['/500', '/400', '/sitemap.dynamic.xml'],
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
