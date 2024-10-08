/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://nextjs.org/docs/api-reference/next.config.js/redirects
  //   async redirects() {
  //     return [
  //         {
  //           source: '/source-page',
  //           destination: '/target-page',
  //           permanent: true,
  //         },
  //     ];
  //   },

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

export default nextConfig;
