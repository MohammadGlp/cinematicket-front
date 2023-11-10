'use client';
import React from 'react';
import Link from 'next/link';
import { Routes } from '@/Enum/Routes';
import AdminForm from '@/Components/auth/AdminForm';
import useTranslation from '@/Hooks/useTranslation';
import Button from '@/Components/Common/Button/Button';

export default function Page() {
  // Use Hooks
  const translation = useTranslation();

  return (
    <React.Fragment>
      <div className='flex flex-wrap gap-10 items-center justify-between border-b pb-10 mb-5'>
        <h3>{translation.entry_of_cinema_ticket_managers}</h3>
        <Link
          href={Routes.Login}
          className='w-full sm:w-auto'>
          <Button className='bg-primary text-white w-full'>
            {translation.if_you_are_not_administrator_click_here}
          </Button>
        </Link>
      </div>
      <div className='flex flex-wrap gap-10 items-center justify-between'>
        <AdminForm />
      </div>
    </React.Fragment>
  );
}
