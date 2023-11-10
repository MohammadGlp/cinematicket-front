'use client';
import { ClockCircle, DirectionLeft } from 'react-huge-icons/outline';

function TransactionsClient() {
  const transactions = [
    { id: 1, title: 'ملاقات خصوصی', price: '20000', status: 'موفق' },
    { id: 2, title: 'صحنه زنی', price: '40000', status: 'موفق' },
    { id: 3, title: 'جنگ جهانی سوم', price: '50000', status: 'موفق' },
  ];

  return (
    <>
      {transactions.map(transaction => (
        <div className='md:hidden'>
          <div className='m-4 shadow-custum rounded-md py-2'>
            <div className='flex items-center justify-between px-4 py-2'>
              <span className='text-sm flex items-center'>
                {transaction.title} <DirectionLeft className='mr-2 mb-[1px] text-xl' />
              </span>
              <span className='text-sm'>
                <span className='font-black'>{transaction.price}</span> تومان{' '}
              </span>
            </div>
            <div className='flex items-center justify-between px-4 py-2'>
              <span className='text-sm flex items-center text-gray-500'>
                <ClockCircle className='ml-2 text-lg mb-[5px]' /> <span>1401/02/01</span>
              </span>
              <span className='text-sm'>
                <span className='bg-[#00b78d14] text-[#00b78d] px-3 py-1 rounded-lg'>
                  {transaction.status}
                </span>
              </span>
            </div>
          </div>
        </div>
      ))}
      <div className='hidden md:flex items-center justify-center my-10 '>
        <div className='relative overflow-x-auto min-w-[600px] rounded-md'>
          <table className='w-full text-sm text-gray-500'>
            <thead className='text-xs text-[#818181] bg-[#f8f8f8]'>
              <tr className='text-right'>
                <th
                  scope='col'
                  className='px-6 py-3 border-l-2 border-gray-200'>
                  توضیح
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 border-l-2 border-gray-200'>
                  تاریخ
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 border-l-2 border-gray-200'>
                  وضعیت
                </th>
                <th
                  scope='col'
                  className='px-6 py-3'>
                  مبلغ
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr
                  className={`bg-white ${
                    index !== transactions.length - 1 ? 'border-b-2 border-[#F5F5F5]' : ''
                  }`}>
                  <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-l-2 border-[#F5F5F5 ]'>
                    <div className='flex items-center'>
                      {transaction.title} <DirectionLeft className='mr-2 mb-[1px] text-xl' />
                    </div>
                  </td>
                  <td className='px-6 py-4 border-l-2 border-[#F5F5F5 ]'>
                    <div className='flex items-center'>
                      <ClockCircle className='ml-2 text-lg mb-[5px]' /> <span>1401/02/01</span>
                    </div>
                  </td>
                  <td className='px-6 py-4 border-l-2 border-[#F5F5F5 ]'>
                    <span className='bg-[#00b78d14] text-[#00b78d] px-3 py-1 rounded-lg'>
                      {transaction.status}
                    </span>
                  </td>
                  <td className='px-6 py-4'>
                    <span className='font-black'>{transaction.price}</span> تومان{' '}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TransactionsClient;
