import { Head, Html, Main, NextScript } from 'next/document';

import GoogleTagManagerBody from '@/components/GoogleTagManager/Body';
import { publicConfig } from '@/utils/config';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        {publicConfig.googleTagManagerId ? (
          <GoogleTagManagerBody
            id={publicConfig.googleTagManagerId}
            env={publicConfig.googleTagManagerEnv}
          />
        ) : null}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
