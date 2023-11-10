'use client';
import React from 'react';
import AuthRegister from '@/Services/Auth/AuthRegister';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import InputHasIcon from '@Common/Formik/InputHasIcon';
import { LockDash, Mobile } from 'react-huge-icons/outline';
import ButtonSubmit from '@Common/Formik/Button';
import useRequest from '@Hooks/useRequest';
import { Routes } from '@/Enum/Routes';
import useTranslation from '@/Hooks/useTranslation';

function RegisterForm() {
  // Use Hooks
  const { Request } = useRequest();
  const translation = useTranslation();
  const { mutateAsync } = Request({ mutationFn: AuthRegister, redirectSuccess: Routes.Root });

  // Initial Formik
  const initialValues = {
    tel: '',
    password: '',
    repeatPass: '',
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
      .min(6, 'رمز عبور حداقل باید شامل 6 کارکتر باشد')
      .required('لطفا رمزعبور خود را وارد کنید'),
    repeatPass: yup
      .string()
      .required('لطفا تکرار رمزعبور خود را وارد کنید')
      .oneOf([yup.ref('password')], 'رمز عبور وارد شده با رمز عبور قبلی هم خوانی ندارد'),
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
              Icon={Mobile}
              className='w-full'
            />
            <InputHasIcon
              type='password'
              label='password'
              name='password'
              placeholder={translation.password}
              Icon={LockDash}
              className='w-full sm:w-[49%]'
            />
            <InputHasIcon
              type='password'
              label='repeatPass'
              name='repeatPass'
              placeholder={translation.repeat_password}
              Icon={LockDash}
              className='w-full sm:w-[49%]'
            />
          </div>
          <ButtonSubmit text={translation.continue} />
        </div>
      </Form>
    </Formik>
  );
}

export default RegisterForm;
