// https://github.com/iamvishnusankar/next-sitemap#configuration-options
// https://vercel.com/docs/concepts/deployments/environments#preview

// default config for vercel production deployment
const config = {
  siteUrl: `https://${process.env.VERCEL_URL}`,
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
  config.robotsTxtOptions = {
    policies: [
      {
        userAgent: '*',
        disallow: '/'
      }
    ]
  };
}

// localhost
if (process.env.VERCEL !== '1') {
  config.siteUrl = `http://${process.env.VERCEL_URL}`;
}

module.exports = config;
