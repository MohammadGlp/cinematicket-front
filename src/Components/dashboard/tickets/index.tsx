'use client';
import Button from '@Components/Common/Button/Button';
import Image from 'next/image';
import { Ticket, TimeClock, Location, DirectionLeft } from 'react-huge-icons/outline';

function TicketPanelClient() {
  return (
    <div className='mt-40'>
      <h2 className='text-right'>بلیت های منقضی شده</h2>
      <div className='w-fit relative flex flex-wrap bg-white rounded-md p-6 mx-auto mb-96'>
        <Image
          src='/assets/meta/Inception.jpg'
          alt='Inception'
          className='rounded-md'
          width={90}
          height={40}
        />
        <div className='flex flex-col gap-y-2 mr-4'>
          <div className='flex justify-between items-center'>
            <h2>ملاقات عمومی</h2>
            <div className='w-fit p-1 bg-gray-300 rounded-lg text-sm flex gap-x-1'>
              <Ticket className='text-xl pt-0.5' /> <span>4 بلیت</span>
            </div>
          </div>
          <div className='flex gap-x-2'>
            <Location className='self-center' />
            <h2 className='text-base'>سینما سغوندی کلا چهاردانگه</h2>
          </div>
          <div className='flex gap-x-2'>
            <TimeClock className='self-center' />
            <p className='text-sm text-gray-500'>سه شنبه 4 بهمن - سانس 18:20</p>
          </div>

          <Button className='text-red-600 self-start'>
            مشاهده بلیت <DirectionLeft />
          </Button>
        </div>
        <div className='p-4 absolute top-[74px] -right-4 rounded-full bg-[#f5f5f5]' />
        <div className='p-4 absolute top-[74px] -left-4 rounded-full bg-[#f5f5f5]' />
      </div>
    </div>
  );
}

export default TicketPanelClient;
