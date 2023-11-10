import React from 'react';
import Link from 'next/link';
import Button from '@Common/Button/Button';
import { Routes } from '@/Enum/Routes';
import checkAuth from '@Utils/ServerFunction/CheckAuth';
import LoginForm from '@Components/auth/LoginForm';
import { redirect } from 'next/navigation';
import useTranslation from '../../../Hooks/useTranslation';

export default async function LoginPage() {
  
  // Use Hooks
  const translation = useTranslation();

  // Check Authentication User
  if (await checkAuth()) {
    redirect('/');
  }

  return (
    <React.Fragment>
      <div className='flex flex-wrap gap-10 items-center justify-between border-b pb-10 mb-5'>
        <h3>{translation.if_you_register_user_account}</h3>
        <Link
          href={Routes.Register}
          className='w-full sm:w-auto'>
          <Button className='bg-primary text-white w-full'>{translation.create_an_account}</Button>
        </Link>
      </div>
      <div className='flex flex-wrap gap-3 items-center justify-between'>
        <h3 className='py-5'>{translation.if_you_login_user_account}</h3>
        <LoginForm />
      </div>
    </React.Fragment>
  );
}
