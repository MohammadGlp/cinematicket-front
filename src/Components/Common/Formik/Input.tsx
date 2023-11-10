'use client';
import { useField } from 'formik';
import { InputHTMLAttributes } from 'react';

type InputProp = {
  label: string;
  placeholder: string;
  Icon: React.FC | null;
  className: string;
  type: string;
  name: string;
};

export default function Input({
  label,
  placeholder,
  Icon,
  className,

  type = 'text',
  ...props
}: InputProp) {
  const [field, meta] = useField(props);

  return (
    <div>
      <label
        htmlFor='inputUse'
        className='text-xl flex items-center gap-2 mb-2'>
        {!Icon ? null : <Icon />}
        {label}
      </label>
      <div
        className={`bg-gray-100 border-b px-3 ${
          !!meta.touched && meta.error ? 'border-red-500' : 'border-gray-100'
        } rounded-md w-full`}>
        <input
          type={type}
          id='inputUse'
          className={`h-full w-full ${className}`}
          placeholder={placeholder}
          {...props}
          {...field}
        />
      </div>
      <p className='text-red-500 text-xs font-semibold h-3'>{!!meta.touched && meta.error}</p>
    </div>
  );
}
