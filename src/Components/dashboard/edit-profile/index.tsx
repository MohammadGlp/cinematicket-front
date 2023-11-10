'use client';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { Mail, Mobile, User, LockDash, DirectionLeft, CalendarDot } from 'react-huge-icons/outline';
import ButtonSubmit from '@/Components/Common/Formik/Button';
import Input from '@/Components/Common/Formik/Input';
import Link from 'next/link';
import Button from '@/Components/Common/Button/Button';

function EditClientProfile() {
  const initialValues = {
    first_name: '',
    last_name: '',
    tel: '',
    email: '',
    birthday: '',
  };

  const validationSchema = yup.object({
    tel: yup.string().required('لطفا شماره تماس خود را وارد کنید'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {}}
      validationSchema={validationSchema}>
      <Form>
        <div className=' p-4 m-8 lg:m-14 lg:p-10 bg-white rounded-lg'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <Input
                Icon={User}
                type='text'
                label='نام'
                name='first_name'
                placeholder='اصغر'
                className='w-full bg-gray-100 rounded-[8px] py-3 px-4 text-xl'
              />
            </div>
            <div>
              <Input
                type='text'
                Icon={User}
                label='نام خانوادگی'
                name='last_name'
                placeholder='فرهادی'
                className='w-full bg-gray-100 rounded-[8px] py-3 px-4 text-xl'
              />
            </div>
            <div>
              <Input
                type='text'
                Icon={Mobile}
                label='شماره موبایل'
                name='tel'
                placeholder='09112223333'
                className='w-full bg-gray-100 rounded-[8px] py-3 px-4 text-xl'
              />
            </div>
            <div>
              <Input
                type='text'
                Icon={CalendarDot}
                label='تاریخ تولد'
                name='birthday'
                placeholder='1375/09/01'
                className='w-full bg-gray-100 rounded-[8px] py-3 px-4 text-xl'
              />
            </div>
            <div>
              <Input
                type='email'
                Icon={Mail}
                label='ایمیل'
                name='email'
                placeholder='asghar@farhadi.com'
                className='w-full bg-gray-100 rounded-[8px] py-3 px-4 text-xl'
              />
            </div>
          </div>
          <hr className='mt-12 mb-7' />
          <Link href='/auth/EditPassword'>
            <Button className='hover:bg-gray-100 text-xl'>
              <LockDash className='ml-2' /> تغییر رمز عبور <DirectionLeft className='mr-2' />
            </Button>
          </Link>

          <hr className='mt-7 mb-6' />
          <ButtonSubmit text='ثبت تغییرات' />
        </div>
      </Form>
    </Formik>
  );
}

export default EditClientProfile;
