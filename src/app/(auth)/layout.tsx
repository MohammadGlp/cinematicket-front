'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'react-huge-icons/outline';
import Button from '@Common/Button/Button';
import useTranslation from '@Hooks/useTranslation';
import { Images } from '@/Enum/Media';
import Footer from '@Common/Footer';

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const translation = useTranslation();
  return (
    <React.Fragment>
      <div className='flex items-center justify-between w-full sm:my-20 h-[100vh] sm:h-auto'>
        <div className='hidden sm:flex fixed inset-0 bg-auth bg-no-repeat bg-center -z-50'></div>
        <div className='container flex flex-col items-center justify-center gap-5 w-[47rem] h-[100%]'>
          <Image
            width='134'
            height='40'
            src={Images.LogoType}
            alt={translation.ci_logo}
            title={translation.ci_logo}
            className='hidden sm:flex'
          />
          <div className='w-full justify-between hidden sm:flex'>
            <Button
              className='bg-white text-gray-900 text-base'
              onClick={() => router.back()}>
              <ArrowRight className='w-4 h-4' />
              {translation.back}
            </Button>
          </div>
          <div className='w-full bg-white min-h-[50px] py-8 px-6 rounded-md'>{children}</div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default AuthLayout;
