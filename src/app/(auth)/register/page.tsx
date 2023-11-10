'use client';
import Link from 'next/link';
import React from 'react';
import Button from '@Common/Button/Button';
import { Routes } from '@/Enum/Routes';
import RegisterForm from '@/Components/auth/RegisterForm';

export default function Login() {
  return (
    <React.Fragment>
      <div className='flex flex-wrap gap-10 items-center justify-between border-b pb-5 mb-5'>
        <h3 className='font-semibold text-2xl'>ایجاد حساب کاربری</h3>
        <Link
          href={Routes.Login}
          className='w-full sm:w-auto'>
          <Button className='bg-primary text-white w-full'>حساب کاربری دارم</Button>
        </Link>
      </div>
      <div className='flex flex-wrap gap-10 items-center justify-between'>
        <RegisterForm />
      </div>
    </React.Fragment>
  );
}
