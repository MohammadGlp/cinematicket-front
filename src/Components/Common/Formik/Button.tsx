'use client';
import { LoadingDashed } from 'react-huge-icons/outline';

import Button from '../Button/Button';
import { useFormikContext } from 'formik';

export default function ButtonSubmit({ text }: any) {
  const formik = useFormikContext();
  return (
    <Button
      type='submit'
      className={`${
        formik.isValid ? 'bg-primary' : 'bg-gray-300 cursor-no-drop'
      } text-white text-xl`}
      disabled={!formik.isValid || formik.isSubmitting}>
      {formik.isSubmitting ? <LoadingDashed className='w-6 h-6 animate-spin' /> : text}
    </Button>
  );
}
