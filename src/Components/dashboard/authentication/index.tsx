'use client';
import ButtonSubmit from '@Components/Common/Formik/Button';
import Input from '@Components/Common/Formik/Input';
import Link from 'next/link';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

function PanelAuthClient() {
  const initialValues = {
    creditCard: '',
    nationalId: '',
  };

  const validationSchema = yup.object({
    creditCard: yup.string().required('لطفا شماره کارت خود را وارد کنید'),
    nationalId: yup.string().required('لطفا شماره ملی خود را وارد کنید'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
      validationSchema={validationSchema}>
      <Form>
        <div className=' p-4 m-8 lg:m-14 lg:p-10 bg-white rounded-lg'>
          <p className='font-bold text-[#787878] text-lg'>احراز هویت</p>
          <p className='text-lg mt-4 mb-8'>
            درصورتی که مجموع تراکنش‌های شما از کیف پول بیشتر از ۸۰۰ هزار تومان شود، با توجه به{' '}
            <Link
              href='/'
              className='text-[#51a2ff]'>
              قوانین شفافیت مالی
            </Link>
            برای ادامه استفاده از کیف پول باید اطلاعات زیر را تکمیل کنید.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <Input
                type='text'
                label=' شماره کارت'
                name='creditCard'
                Icon={null}
                placeholder='---- ---- ---- ----'
                className='w-full bg-gray-100 rounded-[8px] py-3 px-4 text-xl'
              />
            </div>
            <div>
              <Input
                type='text'
                Icon={null}
                label='شماره ملی'
                name='nationalId'
                placeholder='*********'
                className='w-full bg-gray-100 rounded-[8px] py-3 px-4 text-xl'
              />
            </div>
            <ButtonSubmit text='ویرایش اطلاعات و درخواست بررسی' />
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default PanelAuthClient;
