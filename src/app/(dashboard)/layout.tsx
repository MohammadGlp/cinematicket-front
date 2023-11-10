'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import MenuItem from '@/Components/Common/Menu/MenuItem';
import LogoutDialog from '@/Components/Common/LogoutDialog';
import { DirectionDown, MenuUser, OutRectangle } from 'react-huge-icons/outline';
import useMenus from '@Hooks/useMenus';
import Footer from '@/Components/Common/Footer';
import Header from '@/Components/Common/Header';

const DashboardLayout: React.FC<DashboardLayout> = ({ children, bgColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  const { userMenuItem } = useMenus();
  const pathName = usePathname();

  return (
    <>
      <Header />
      <div className={`flex flex-col lg:flex-row ${bgColor}`}>
        <div className='w-full lg:w-[20%] bg-white lg:fixed border border-gray-100 h-full p-2 lg:p-5 lg:overflow-hidden'>
          <div
            className={`py-2 px-4 lg:p-0 flex flex-col gap-5 rounded-lg border shadow lg:shadow-none lg:border-none ${
              mobileMenuShow ? '' : 'h-12 lg:h-auto'
            }`}>
            <div
              className='flex lg:hidden items-center justify-between text-gray-500'
              onClick={() => setMobileMenuShow(!mobileMenuShow)}>
              <MenuUser className='w-8 h-8' />

              <DirectionDown
                className={`w-6 h-6 duration-150${mobileMenuShow ? ' rotate-180' : ' '}`}
              />
            </div>
            <div className={` ${mobileMenuShow ? 'border-t pt-4' : 'hidden lg:flex flex-col'}`}>
              <nav className={`border-b pb-5 mb-5`}>
                <ul className='flex flex-col gap-3 pt-2'>
                  {userMenuItem &&
                    userMenuItem.map(({ id, href, label, Icon }) => (
                      <Link
                        key={id}
                        href={href}
                        title={label}>
                        <MenuItem
                          label={label}
                          Icon={Icon}
                          active={pathName === href}
                        />
                      </Link>
                    ))}
                </ul>
              </nav>
              <MenuItem
                label='خروج از حساب کاربری'
                Icon={OutRectangle}
                onClick={() => setIsOpen(true)}
              />
              <LogoutDialog
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
              />
            </div>
          </div>
        </div>
        <div className='w-full lg:w-[80%] lg:mr-[20%] mb-16 lg:mb-0'>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
