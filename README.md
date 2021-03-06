This is a [Next.js](https://nextjs.org/) starter project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Demo

[https://next-starter.kinolanka.com](https://next-starter.kinolanka.com)

Tests

- [PageSpeed Insights](https://pagespeed.web.dev/report?url=https%3A%2F%2Fnext-starter.kinolanka.com)
- [WebPageTest](https://www.webpagetest.org/result/220118_BiDc83_8b84448fd51f14f7a8c7d115ec70f32d/)
- [GTmetrix](https://gtmetrix.com/reports/next-starter.kinolanka.com/KAOk74mF/)

## Getting Started

Run the commands:

```bash
npx create-next-app -e https://github.com/kinolanka/next-starter
cp .env.local.example .env.local
npm run prepare
git add .husky/pre-commit
```

## Features

- Core
  - [TypeScript](https://github.com/microsoft/TypeScript)
  - [MUI](https://github.com/mui-org/material-ui)
  - [Redux Toolkit](https://github.com/reduxjs/redux-toolkit)
- Setup
  - [Absolute imports](https://nextjs.org/docs/advanced-features/module-path-aliases)
  - ["src" Directory](https://nextjs.org/docs/advanced-features/src-directory)
  - [Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
  - [Custom error pages](https://nextjs.org/docs/advanced-features/custom-error-page)
  - [Security Headers](https://nextjs.org/docs/advanced-features/security-headers)
- SEO -[next-sitemap](https://github.com/iamvishnusankar/next-sitemap)
- Code quality tools
  - [husky](https://github.com/typicode/husky)
  - [lint-staged](https://github.com/okonet/lint-staged)
  - [ESlint](https://github.com/eslint/eslint)
  - [Prettier](https://github.com/prettier/prettier)
  - [import-sort](https://github.com/renke/import-sort)
- Tests
  - [Jest](https://github.com/facebook/jest)
  - [React Testing Library](https://github.com/testing-library/react-testing-library)
- Additional packages
  - [clsx](https://github.com/lukeed/clsx)
  - [lodash](https://github.com/lodash/lodash)

### Next features

- Redux Persist

- Mongoose
- migrate

- React Hook Form
- Gooogle Recaptcha
- emailing
- axios

- REST API
- joi

- css lint
- Lighthouse

- next-auth

- date-fns

- vercel: logs integration

- microdata
- Open Graph meta tags (Facebook, Twitter etc.)

- googleapis
- GTM
- Uptime

- storybook

## Environments

- Localhost
  - **production** - `next build`
  - **development** - `next dev`
- Vercel
  - **production** - production brunch
  - **preview** - not production branches

(!) Set all environment variables for Vercel in Vercel project settings and for localhost in env.local

### Docs

[Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

[Vercel System Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables#system-environment-variables)

## Deployment

This starter template is configured for Vercel.

### Setup

- Add custom domain for **production** branch
- Set SITE_URL variable for **production** environment
- Check that [system environment variables](https://vercel.com/kinolanka/next-starter/settings/environment-variables#:~:text=Automatically%20expose,System%20Environment%20Variables) are automatically exposed

## Learn More

To learn more about Next.js, take a look at the following resources:

- [https://nextjs.org/docs](https://nextjs.org/docs)
- [https://github.com/vercel/next.js/tree/canary/examples](https://github.com/vercel/next.js/tree/canary/examples)
- [https://vercel.com/docs](https://vercel.com/docs)
