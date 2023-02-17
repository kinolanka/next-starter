import type { FC } from 'react';
import Script from 'next/script';

import type { PropTypes } from './types';

const Head: FC<PropTypes> = ({ id, env = '' }) => {
  return (
    <Script
      id="google-tag-manager-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl+'${env}';f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${id}');
          `,
      }}
    />
  );
};

export default Head;
