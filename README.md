This is a [Next.js](https://nextjs.org/) starter project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Demo

[next-starter.kinolanka.com](next-starter.kinolanka.com)

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
- Setup
  - [Absolute imports](https://nextjs.org/docs/advanced-features/module-path-aliases)
  - ["src" Directory](https://nextjs.org/docs/advanced-features/src-directory)
- SEO -[next-sitemap](https://github.com/iamvishnusankar/next-sitemap)
- Code quality tools
  - [husky](https://github.com/typicode/husky)
  - [lint-staged](https://github.com/okonet/lint-staged)
  - [ESlint](https://github.com/eslint/eslint)
  - [Prettier](https://github.com/prettier/prettier)
  - [import-sort](https://github.com/renke/import-sort)
- Additional packages
  - [clsx](https://github.com/lukeed/clsx)

### Next features

- REST API
- css lint
- Redux Toolkit
- Redux Persist
- Mongoose
- React Hook Form
- next-auth
- googleapis
- Gooogle Recaptcha
- Jest + React Testing Library
- lodash
- axios
- date-fns
- joi
- env files
- Lighthouse
- vercel: logs integration

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [https://nextjs.org/docs](https://nextjs.org/docs)
- [https://github.com/vercel/next.js/tree/canary/examples](https://github.com/vercel/next.js/tree/canary/examples)
- [https://vercel.com/docs](https://vercel.com/docs)
