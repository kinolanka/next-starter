/** @type {import('next').NextConfig} */

// production, preview, development
const serverEnv = process.env.NEXT_PUBLIC_VERCEL_ENV || 'development';

const env = (config, def) => {
  return config[serverEnv] || def;
};

const nextConfig = {
  reactStrictMode: true,

  publicRuntimeConfig: {
    serverEnv,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    siteTitle: 'Next Starter Template',
    googleTagManagerId: '',
    googleTagManagerEnv: env(
      {
        // production should be empty
        production: '',
        preview: '&gtm_auth=****&gtm_cookies_win=x',
      },
      '&gtm_auth****&gtm_cookies_win=x'
    ),
  },

  serverRuntimeConfig: {},

  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/:path*',
        headers: [
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000',
          },
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
          {
            key: 'Content-Security-Policy',
            value: "default-src * 'unsafe-inline' 'unsafe-eval'",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
