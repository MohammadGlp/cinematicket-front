'use client';
import { useState } from 'react';
import { useField } from 'formik';
import { Eye, EyeDisable } from 'react-huge-icons/outline';

export default function InputHasIcon({
  label,
  placeholder,
  Icon,
  className,
  type = 'text',
  ...props
}) {
  const [field, meta] = useField(props);
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div
        className={`flex items-center justify-between gap-3 bg-gray-100 border-b ${
          !!meta.touched && meta.error ? 'border-red-500' : 'border-gray-100'
        } py-3.5 px-3.5 rounded-md w-full`}>
        <Icon
          className={`w-6 h-6 ${!!meta.touched && meta.error ? 'text-red-500' : 'text-gray-600'}`}
        />
        <input
          type={type === 'password' ? (isShowPassword ? 'text' : 'password') : type}
          name={label}
          className='bg-transparent h-full w-full'
          placeholder={placeholder}
          {...props}
          {...field}
        />
        {type === 'password' &&
          (isShowPassword ? (
            <Eye
              className='w-6 h-6 text-gray-600 cursor-pointer'
              onClick={() => setIsShowPassword(!isShowPassword)}
            />
          ) : (
            <EyeDisable
              className='w-6 h-6 text-gray-600 cursor-pointer'
              onClick={() => setIsShowPassword(!isShowPassword)}
            />
          ))}
      </div>
      <p className='text-red-500 text-xs font-semibold h-3'>
        {!!meta.touched && meta.error && meta.error}
      </p>
    </div>
  );
}
