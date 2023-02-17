import { NextPage } from 'next';

import CustomErrorModule from '@/modules/500';

const CustomErrorPage: NextPage = () => {
  return <CustomErrorModule />;
};

export default CustomErrorPage;
