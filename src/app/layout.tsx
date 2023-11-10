'use client';
import React from 'react';
import Header from '@Common/Header';
import Progress from '@Common/Progress';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import useTranslation from '@Hooks/useTranslation';
import Providers from '@App/Providers';

const RootLayoutt: React.FC<PropsWithChildren> = ({ children }) => {
  const translation = useTranslation();
  return (
    <html
      lang={translation.meta.lang}
      dir={translation.meta.direction}>
      <body>
        <Progress showSpinner={true} />
        <Providers>
          <main>{children}</main>
        </Providers>
        <Toaster position='top-left' />
      </body>
    </html>
  );
};

export default RootLayoutt;
