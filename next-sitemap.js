// https://github.com/iamvishnusankar/next-sitemap#configuration-options
// https://vercel.com/docs/concepts/deployments/environments#preview

// default config for vercel production deployment
const config = {
  siteUrl: process.env.SITE_URL, // vercel custom var
  exclude: ['/500', '/400'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  }
};

// vercel non production deployment
if (process.env.VERCEL_ENV !== 'production') {
  config.siteUrl = `https://${process.env.VERCEL_URL}`; // vercel system var
  config.robotsTxtOptions = {
    policies: [
      {
        userAgent: '*',
        disallow: '/'
      }
    ]
  };
}

module.exports = config;
