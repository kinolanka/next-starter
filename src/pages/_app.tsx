import type { AppProps } from 'next/app';

import GlobalMetaTags from '@/components/GlobalMetaTags';
import GoogleTagManagerHead from '@/components/GoogleTagManager/Head';
import BasicLayout from '@/components/layouts/BasicLayout';
import { publicConfig } from '@/utils/config';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalMetaTags />
      {publicConfig.googleTagManagerId ? (
        <GoogleTagManagerHead
          id={publicConfig.googleTagManagerId}
          env={publicConfig.googleTagManagerEnv}
        />
      ) : null}
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </>
  );
}
