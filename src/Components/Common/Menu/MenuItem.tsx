import React from 'react';
import { DirectionLeft } from 'react-huge-icons/outline';
import { MenuItemProps } from '@Types/Common';

const MenuItem: React.FC<MenuItemProps> = ({ Icon, label, active = false, onClick }) => (
  <button
    className={`group/menuItem w-full flex items-center justify-between py-1.5 px-2 rounded-md text-gray-600  hover:bg-gray-100 duration-150 ${
      active ? 'bg-gray-100' : ''
    }`}
    onClick={onClick}>
    <div className='flex items-center text-lg gap-2'>
      {!Icon ? undefined : <Icon className='w-4 h-4 group-hover/menuItem:text-primary' />}
      {label}
    </div>
    <DirectionLeft className='w-5 h-5' />
  </button>
);

export default MenuItem;
