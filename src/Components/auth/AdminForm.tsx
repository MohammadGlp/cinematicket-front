'use client';
import React from 'react';
import AdminLogin from '@/Services/Admin/AdminLogin';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import InputHasIcon from '@Common/Formik/InputHasIcon';
import { LockDash, User } from 'react-huge-icons/outline';
import ButtonSubmit from '@Common/Formik/Button';
import useRequest from '@Hooks/useRequest';
import { Routes } from '@/Enum/Routes';
import useTranslation from '../../Hooks/useTranslation';

function AdminForm() {
  // Use Hooks
  const { Request } = useRequest();
  const translation = useTranslation();
  const { mutateAsync } = Request({ mutationFn: AdminLogin, redirectSuccess: Routes.Root });

  // Initial Formik
  const initialValues = {
    tel: '',
    password: '',
  };

  const validationSchema = yup.object({
    tel: yup
      .string()
      .min(11, 'شماره موبایل معتبر نیست')
      .max(11, 'شماره موبایل معتبر نیست')
      .matches(
        /^(\+98|0|98|0098)?([ ]|-|[()]){0,2}9[0-9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gm,
        'شماره موبایل معتبر نیست'
      )
      .required('لطفا شماره موبایل خود را وارد کنید'),
    password: yup
      .string()
      .min(8, 'رمز عبور حداقل باید شامل 6 کارکتر باشد')
      .required('لطفا رمزعبور خود را وارد کنید'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async values => await mutateAsync(values)}
      validationSchema={validationSchema}>
      <Form className='w-full pt-5'>
        <div className='relative w-full flex flex-wrap items-center justify-end gap-5'>
          <div className='w-full flex flex-wrap items-center justify-between'>
            <InputHasIcon
              label='tel'
              name='tel'
              placeholder={translation.mobile_number}
              Icon={User}
              className='w-full sm:w-[49%]'
            />
            <InputHasIcon
              type='password'
              label='password'
              name='password'
              placeholder={translation.password}
              Icon={LockDash}
              className='w-full sm:w-[49%]'
            />
          </div>
          <ButtonSubmit text={translation.login} />
        </div>
      </Form>
    </Formik>
  );
}

export default AdminForm;
