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

function EditPasswordForm() {
  // Use Hooks
  const { Request } = useRequest();
  const translation = useTranslation();
  const { mutateAsync } = Request({ mutationFn: AuthLogin, redirectSuccess: Routes.Root });

  // Initial Formik
  const initialValues = {
    oldPass: '',
    newPass: '',
    repeatNewPass: '',
  };
  const validationSchema = yup.object({
    oldPass: yup
      .string()
      .min(6, ' حداقل باید شامل 6 کارکتر باشد')
      .required('لطفا رمز عبور قدیمی خود را وارد کنید'),
    newPass: yup
      .string()
      .min(6, ' حداقل باید شامل 6 کارکتر باشد')
      .required('لطفا رمز عبور جدید خود را وارد کنید'),
    repeatNewPass: yup
      .string()
      .required('لطفا تکرار رمزعبور جدید خود را وارد کنید')
      .oneOf([yup.ref('newPass')], 'رمز عبور وارد شده با رمز عبور قبلی هم خوانی ندارد'),
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
              placeholder={translation.old_password}
              Icon={User}
              className='w-full'
            />
            <InputHasIcon
              type='password'
              label='password'
              name='password'
              placeholder={translation.new_password}
              Icon={LockDash}
              className='w-full sm:w-[49%]'
            />
            <InputHasIcon
              type='password'
              label='password'
              name='password'
              placeholder={translation.new_repeat_password}
              Icon={LockDash}
              className='w-full sm:w-[49%]'
            />
          </div>
          <ButtonSubmit text={translation.save_changes} />
        </div>
      </Form>
    </Formik>
  );
}

export default EditPasswordForm;
