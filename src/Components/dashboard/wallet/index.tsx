'use client';
import { useState } from 'react';
import Link from 'next/link';
import Button from '@Components/Common/Button/Button';
import { ShieldWarning, Wallet, LoadingDashed } from 'react-huge-icons/outline';

function WalletPanelClient() {
  const [balance, setBalance] = useState<number>(0);
  const WalletBalance = 0;

  const handleIncreaseBalance = (value: number) => {
    setBalance(value);
  };

  return (
    <>
      <div className='m-3 lg:m-10 py-8 px-4 md:px-8 bg-white rounded-lg flex gap-4 lg:hidden items-center'>
        <ShieldWarning className='w-14 h-14 sm:w-10 sm:h-10 md:h-8 md:w-8 text-gray-400' />
        <p className='text-base'>
          <span>
            موجودی کیف پول شما {WalletBalance} تومان است. برای انتقال مبالغ بالاتر از 800 هزار تومان
            از کیف پول به حساب بانکی‌، ابتدا باید{' '}
            <Link
              href='/'
              className='text-[#551A8B]'>
              احراز هویت
            </Link>
            کنید.
          </span>
        </p>
      </div>
      <div className='lg:flex items-center gap-4 lg:m-10 hidden'>
        <ShieldWarning className=' w-5 h-5 text-gray-500' />
        <p className='text-base'>
          <span>
            موجودی کیف پول شما {WalletBalance} تومان است. برای انتقال مبالغ بالاتر از 800 هزار تومان
            از کیف پول به حساب بانکی‌، ابتدا باید احراز هویت کنید.
          </span>
        </p>
      </div>
      <div className='m-3 lg:m-10 p-4 xl:p-10 bg-white rounded-lg flex flex-col justify-between gap-5'>
        <p className='font-bold text-[#787878] text-xl'>برداشت از کیف پول</p>
        <p className='text-lg'>
          در صورتی که هنگام خرید با مشکل بانکی روبرو شوید یا پس از خرید بلیت خود را لغو کنید، مبلغ
          آن به کیف پول شما در سینماتیکت واریز می‌شود. از طریق دکمه زیر می‌توانید مبلغ موجود در کیف
          پول را به حساب بانکی خود انتقال دهید.
        </p>
        <div className='grid grid-cols-1 sm:flex sm:justify-between gap-4 mt-2 '>
          <div className='bg-gray-100 flex items-center justify-between gap-6 rounded-[30px] px-3 py-2'>
            <span className='text-lg flex items-center gap-2'>
              <Wallet className='text-xl' /> موجودی کیف شما
            </span>
            <span className='text-xs bg-[#d6e5ff] text-[#73a2fb] rounded-[30px] font-bold p-2'>{`${WalletBalance} تومان`}</span>
          </div>
          <Button
            className={`text-base font-bold ${
              WalletBalance ? 'bg-primary text-white' : 'bg-gray-300 text-gray-500 cursor-no-drop'
            }`}>
            درخواست برداشت از کیف پول
          </Button>
        </div>
      </div>
      <div className='m-3 lg:m-10 p-4 xl:p-10 bg-white rounded-lg flex flex-col justify-between gap-5'>
        <p className='font-bold text-[#787878] text-lg md:text-xl'>افزایش موجودی کیف پول</p>
        <p className='text-sm md:text-lg'>
          برای افزایش موجودی کیف پول، مبلغ مورد نظر خود را انتخاب کنید.
        </p>

        <div className='grid grid-cols-1 xl:grid-cols-3 gap-5'>
          <div className='flex items-center gap-2'>
            <Button
              onClick={() => handleIncreaseBalance(20000)}
              className={`w-full rounded-md text-xs border border-gray-300 text-gray-600 hover:bg-gray-200 transition ease-in-out duration-300 ${
                balance === 20000 && 'bg-gray-200'
              }`}>
              20,000 تومان
            </Button>
            <Button
              onClick={() => handleIncreaseBalance(40000)}
              className={`w-full rounded-md text-xs border border-gray-300 text-gray-600 hover:bg-gray-200 transition ease-in-out duration-300 ${
                balance === 40000 && 'bg-gray-200'
              }`}>
              40,000 تومان
            </Button>
            <Button
              onClick={() => handleIncreaseBalance(60000)}
              className={`w-full rounded-md text-xs border border-gray-300 text-gray-600 hover:bg-gray-200 transition ease-in-out duration-300 ${
                balance === 60000 && 'bg-gray-200'
              }`}>
              60,000 تومان
            </Button>
          </div>

          <div className='flex flex-col lg:flex-row lg:items-center gap-4'>
            <p className='text-sm md:text-lg'>
              یا <span className='lg:hidden'>مبلغ دلخواه خود را بنویسید:</span>
            </p>
            <div className='w-full flex gap-4 items-center'>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleIncreaseBalance(parseInt(e.target.value))
                }
                name='price'
                placeholder='مبلغ دلخواه شما ...'
                className='w-full bg-gray-100 rounded-[8px] py-2 px-4 text-xl'
              />
              <span className='text-sm font-bold'>تومان</span>
            </div>
          </div>
          <div className='flex justify-end'>
            <Button
              className={`w-full xl:w-60 text-base font-bold py-2 border rounded-xl ${
                false && 'bg-primary-active'
              } ${
                balance
                  ? 'text-primary border-primary hover:bg-primary-hover active:bg-primary-active'
                  : 'text-gray-400 border-gray-300 cursor-no-drop'
              }`}>
              {false ? <LoadingDashed className='w-6 h-6 animate-spin' /> : 'افزایش اعتبار'}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WalletPanelClient;
