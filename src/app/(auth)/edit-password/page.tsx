'use client';
import React from 'react';
import EditPasswordForm from '@/Components/auth/EditPasswordForm';
import useTranslation from '@Hooks/useTranslation';

const Page = () => {
  // Use Hooks
  const translation = useTranslation();

  return (
    <React.Fragment>
      <div className='flex flex-wrap gap-3 items-center justify-between'>
        <h3 className='py-5'>{translation.password_recovery}</h3>
        <EditPasswordForm />
      </div>
    </React.Fragment>
  );
};

export default Page;
