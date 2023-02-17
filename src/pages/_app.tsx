import type { AppProps } from 'next/app';

import '@/styles/globals.css';

import GlobalMetaTags from '@/components/GlobalMetaTags';
import BasicLayout from '@/components/layouts/BasicLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalMetaTags />
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </>
  );
}
