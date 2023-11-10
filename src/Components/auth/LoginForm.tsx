'use client';
import React from 'react';
import AuthLogin from '@Services/Auth/AuthLogin';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import InputHasIcon from '@Common/Formik/InputHasIcon';
import { LockDash, User } from 'react-huge-icons/outline';
import ButtonSubmit from '@Common/Formik/Button';
import useRequest from '@Hooks/useRequest';
import { Routes } from '@/Enum/Routes';
import useTranslation from '../../Hooks/useTranslation';

function LoginForm() {
  // Use Hooks
  const { Request } = useRequest();
  const translation = useTranslation();
  const { mutateAsync } = Request({ mutationFn: AuthLogin, redirectSuccess: Routes.Root });

  // Initial Formik
  const initialValues = {
    login: '',
    password: '',
  };
  const validationSchema = yup.object({
    login: yup.string().required('لطفا نام کاربری خود را وارد کنید'),
    password: yup.string().required('لطفا پسورد خود را وارد کنید'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async values => await mutateAsync(values)}
      validationSchema={validationSchema}>
      <Form className='w-full'>
        <div className='relative w-full flex flex-wrap items-center justify-end gap-5'>
          <div className='w-full flex flex-wrap items-center justify-between'>
            <InputHasIcon
              label='login'
              name='login'
              placeholder={translation.username}
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

export default LoginForm;
