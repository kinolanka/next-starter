import type { AppProps } from 'next/app';

import '@/styles/globals.css';

import GlobalMetaTags from '@/components/GlobalMetaTags';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalMetaTags />
      <Component {...pageProps} />
    </>
  );
}
