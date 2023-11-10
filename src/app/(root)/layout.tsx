import React from 'react';
import Header from '@Common/Header';
import Footer from '@Common/Footer';

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default RootLayout;
