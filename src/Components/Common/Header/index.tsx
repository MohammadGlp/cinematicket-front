import Image from 'next/image';
import { LocationAdd, MenuLineHorizontal, Search, Ticket } from 'react-huge-icons/outline';
import Link from 'next/link';
import HeaderAccountButton from '@Common/HeaderAccountButton';
import Button from '@Common/Button/Button';
import HeaderCategoriesButton from '@Common/Header/HeaderCategoriesButton';
import HeaderBtnViewer from './HeaderBtnViewer';

const Header = async () => {
  return (
    <section className='bg-white border-b sticky top-0 z-[999] text-xs'>
      <div className=' py-3 px-2 lg:px-9 flex items-center justify-between gap-3'>
        <div className='flex items-center gap-3'>
          <MenuLineHorizontal className='flex w-10 h-10 lg:hidden' />
          <Link href='/'>
            <div className='flex gap-1 items-center'>
              <Image
                width={24}
                height={24}
                src='/images/logo.svg'
                alt='لوگو سینما تیکت'
              />
              <Image
                width={83}
                height={20}
                src='/images/typo-single-logo.svg'
                alt='لوگو سینما تیکت'
                className='w-auto h-auto'
              />
            </div>
          </Link>
          <div className='hidden lg:flex items-center justify-between gap-1'>
            <HeaderCategoriesButton />
          </div>
          <div className='hidden lg:flex items-center gap-3 bg-gray-100 rounded-md p-2 xl:w-96'>
            <Search className='w-5 h-5 text-gray-400' />
            <input
              type='text'
              name='search'
              placeholder='جست‌وجوی فیلم، سینما، کارگردان، بازیگر و ...'
              className='bg-transparent placeholder:text-xs w-full'
            />
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <Button className='group flex items-center justify-between gap-2 py-1 px-3 rounded-md duration-150 cursor-pointer hover:bg-[#DDDEEF66]'>
            <LocationAdd className='w-5 h-5 lg:w-4 lg:h-4 lg:text-gray-500' />
            <span className='text-sm hidden xl:flex'>شهر خود را انتخاب کنید</span>
          </Button>
          <Link href=''>
            <Button className='group flex items-center justify-between gap-2 px-1 py-1 rounded-md duration-150 cursor-pointer hover:bg-[#DDDEEF66]'>
              <Ticket className='w-5 h-5 lg:w-4 lg:h-4 lg:text-gray-500' />
              <span className='text-sm lg:text-sm'>بلیت های من</span>
            </Button>
          </Link>
          <div className='hidden lg:flex'>
            <HeaderAccountButton />
          </div>
        </div>
      </div>
      <div className=' border-t border-gray-200 px-2 lg:px-9 py-2'>
        <HeaderBtnViewer />
      </div>
    </section>
  );
};

export default Header;
