import type { FC } from 'react';

import type { PropTypes } from './types';

const Body: FC<PropTypes> = ({ id, env = '' }) => {
  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}${env}"
  height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    ></noscript>
  );
};

export default Body;
