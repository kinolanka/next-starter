import type { FC } from 'react';
import { useRouter } from 'next/router';
import { DefaultSeo, OrganizationJsonLd } from 'next-seo';

import { publicConfig } from '@/utils/config';

const GlobalMetaTags: FC = () => {
  const { asPath } = useRouter();

  const siteUrl = publicConfig.siteUrl;

  const currentUrl = `${siteUrl}${asPath}`;

  return (
    <>
      <DefaultSeo
        title={publicConfig.siteTitle}
        canonical={currentUrl}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: currentUrl,
          site_name: publicConfig.siteTitle,
        }}
        robotsProps={{
          maxSnippet: -1,
          maxImagePreview: 'large',
          maxVideoPreview: -1,
        }}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
        ]}
        dangerouslySetAllPagesToNoIndex={publicConfig.serverEnv !== 'production'}
        dangerouslySetAllPagesToNoFollow={publicConfig.serverEnv !== 'production'}
      />
      <OrganizationJsonLd
        type="Organization"
        id={`${siteUrl}/#organization`}
        name={publicConfig.siteTitle}
        url={siteUrl || ''}
      />
    </>
  );
};

export default GlobalMetaTags;
