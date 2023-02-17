import type { FC } from 'react';
import { useRouter } from 'next/router';
import { DefaultSeo, OrganizationJsonLd } from 'next-seo';

const GlobalMetaTags: FC = () => {
  const { asPath } = useRouter();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const siteTitle = 'Next Starter Template';

  const currentUrl = `${siteUrl}${asPath}`;

  return (
    <>
      <DefaultSeo
        title={siteTitle}
        canonical={currentUrl}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: currentUrl,
          site_name: siteTitle,
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
        dangerouslySetAllPagesToNoIndex={process.env.VERCEL_ENV !== 'production'}
        dangerouslySetAllPagesToNoFollow={process.env.VERCEL_ENV !== 'production'}
      />
      <OrganizationJsonLd
        type="Organization"
        id={`${siteUrl}/#organization`}
        name={siteTitle}
        url={siteUrl || ''}
      />
    </>
  );
};

export default GlobalMetaTags;
