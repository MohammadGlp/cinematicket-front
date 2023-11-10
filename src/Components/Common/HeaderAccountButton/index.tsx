'use client';
import { ReactElement, useState } from 'react';
import { OutRectangle, User } from 'react-huge-icons/outline';
import Link from 'next/link';
import DropDown from '@Common/DropDown/DropDown';
import MenuItem from '@Common/Menu/MenuItem';
import useMenus from '@Hooks/useMenus';
import useTranslation from '@Hooks/useTranslation';
import { Role } from '@/Enum/Role';
import LogoutDialog from '@Common/LogoutDialog';
import { Routes } from '@/Enum/Routes';
import { useQuery } from '@tanstack/react-query';
import UserProfile from '@Services/User/UserProfile';

const HeaderAccountButton = () => {
  const { notLoggedIn, adminLoggedIn, userMenuItem } = useMenus();
  const { data, isLoading, error } = useQuery({ queryKey: ['get-user'], queryFn: UserProfile });
  const translation = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const fullName =
    (data?.first_name && data?.first_name + ' ' + data?.last_name) || translation.login_register;
  if (data && !fullName) {
    return (
      <Link
        href={Routes.UserPanelEditProfile}
        className='text-xs py-1 px-3 rounded bg-primary/10 text-primary'>
        {translation.here_enter_your_name}
      </Link>
    );
  }
  const menuItem =
    data?.role === Role.USER || data?.role === undefined ? userMenuItem : adminLoggedIn;
  return isLoading ? (
    <div className='animate-pulse py-4 px-8 rounded-md duration-150 h-5 bg-gray-100 w-36'></div>
  ) : (
    <DropDown
      title={data ? fullName : translation.login_register}
      Icon={User}
      Image={data?.profile_pic_url || ''}>
      {!data ? (
        notLoggedIn.map(
          ({ id, href, label, Icon }: Menus): ReactElement => (
            <Link
              key={id}
              href={href}
              title={label}>
              {Icon && (
                <MenuItem
                  label={label}
                  Icon={Icon}
                />
              )}
            </Link>
          )
        )
      ) : (
        <>
          {menuItem.map(({ id, href, label, Icon }) => (
            <Link
              key={id}
              href={href}
              title={label}>
              {Icon && (
                <MenuItem
                  label={label}
                  Icon={Icon}
                />
              )}
            </Link>
          ))}
          <MenuItem
            label={translation.logout}
            Icon={OutRectangle}
            onClick={() => setIsOpen(true)}
          />
          <LogoutDialog
            isOpen={isOpen}
            closeModal={() => setIsOpen(false)}
          />
        </>
      )}
    </DropDown>
  );
};

export default HeaderAccountButton;
