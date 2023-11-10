'use client';
import { useRef } from 'react';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import 'react-multi-date-picker/styles/colors/red.css';
import { convertDate } from '@Utils/Date/DatePicker';

export default function DateInputHasIcon({ formik, name, Icon, className }) {
  const datePickerInput = useRef(null);
  const dateNow = Date.parse(formik.values[name]);

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div
        className={`flex items-center justify-between gap-3 bg-gray-100 border-b ${
          !!formik.errors[name] && formik.touched[name] ? 'border-red-500' : 'border-gray-100'
        } py-3.5 px-3.5 rounded-md w-full`}>
        <Icon
          className={`w-6 h-6 ${
            !!formik.errors[name] && formik.touched[name] ? 'text-red-500' : 'text-gray-600'
          }`}
        />
        <DatePicker
          placeholder={convertDate.persian.fa(dateNow)}
          className='red'
          inputClass='DateInputHasIcon'
          calendar={persian}
          locale={persian_fa}
          format={'YYYY/MM/DD'}
          calendarPosition='bottom-right'
          onChange={date => formik.setFieldValue(name, convertDate.gregorian.en(date))}
          value={dateNow}
          name={name}
          ref={datePickerInput}
        />
        <button
          type='button'
          className='text-xs py-1 px-2 hover:bg-primary/10 hover:text-primary rounded duration-150'
          onClick={() => datePickerInput.current.openCalendar()}>
          انتخاب تاریخ
        </button>
      </div>

      <p className='text-red-500 text-xs font-semibold h-3'>
        {!!formik.errors[name] && formik.touched[name] && formik.errors[name]}
      </p>
    </div>
  );
}
