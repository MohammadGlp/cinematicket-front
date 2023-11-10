'use client';
import React, { useState } from 'react';

const HeaderBtnViewer = () => {
  const [menu] = useState([
    { id: 1, name: 'فیلم ایرانی' },
    { id: 2, name: 'کودک و نوجوان' },
    { id: 3, name: 'تئاتر' },
    { id: 4, name: 'هنر و تجربه' },
    { id: 5, name: 'تئاتر کمدی' },
    { id: 6, name: 'فیلم خارجی' },
  ]);

  return (
    <div className='flex justify-start gap-4 text-[#818181] text-sm'>
      {menu.map(m => {
        return (
          <h2
            className='px-3 py-2 hover:bg-slate-100 cursor-pointer ease-in duration-300 rounded-lg'
            key={m.id}>
            {m.name}
          </h2>
        );
      })}
    </div>
  );
};

export default HeaderBtnViewer;
