import type { FC, ReactNode } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

type PropTypes = {
  children: ReactNode;
};

const BasicLayout: FC<PropTypes> = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Header />
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BasicLayout;
