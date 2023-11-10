import { useState, useRef, useCallback, useEffect } from 'react';
import React from 'react';
import { LoadingDashed, RemoveThin } from 'react-huge-icons/outline';
import Image from 'next/image';
import toast from 'react-hot-toast';
import process from 'next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss';

function SingleImageUploader({ formik, defaultImage, removeImageHandler, name = 'img' }) {
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState();
  const uploaderInput = useRef(null);
  const allowedFileType = ['jpg', 'jpeg', 'png', 'webp'];

  useEffect(() => {
    if (defaultImage) {
      setImage(process.env.NEXT_PUBLIC_BASEURL_API + '/img' + defaultImage);
    }
  }, [defaultImage]);

  const renderImage = files => {
    if (files == null || !allowedFileType.includes(files.type.replace('image/', ''))) {
      toast.error('فرمت تصویر غیرمجاز است.');
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(files);
      reader.onload = () => {
        formik.setFieldValue(name, files);
        setImage(reader.result);
      };
    }
  };

  const removeImage = async () => {
    if (defaultImage) {
      setIsLoading(true);
      await removeImageHandler()
        .then(res => {
          setIsLoading(false);
          toast.success('عکس با موفقیت حذف شد.');
          setImage(null);
          formik.setFieldValue(name, null);
        })
        .catch(err => {
          setIsLoading(false);
          toast.error(err?.response?.data?.errors[0]?.message);
        });
    }
  };

  const inputUploader = e => {
    const files = e.currentTarget.files[0];
    files && renderImage(files);
    e.target.value = null;
  };

  const handleDragEnter = e => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = e => {
    e.preventDefault();
    if (e.currentTarget.contains(e.relatedTarget)) return;
    setIsDragging(false);
  };

  const handleDragOver = e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = e => {
    e.preventDefault();
    setIsDragging(false);
    renderImage(e.dataTransfer.files[0] || null);
  };

  return (
    <div className='w-full py-4 h-full'>
      <input
        type='file'
        name={name}
        className='hidden'
        accept={`/${allowedFileType.join(',images/')}`}
        onChange={inputUploader}
        ref={uploaderInput}
      />
      <div
        className={`relative w-full flex items-center justify-between border-2 border-dashed h-40 rounded-md border-primary text-primary mb-3 text-2xl font-bold cursor-pointer ${
          isDragging && 'bg-primary/10'
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
        {isLoading && (
          <div className='absolute inset-0 flex items-center justify-center bg-gray-100/10 z-50 backdrop-blur'>
            <LoadingDashed className='w-10 h-10 animate-spin' />
          </div>
        )}

        <p
          className={`flex items-center justify-center ${
            !isDragging && image ? 'w-1/2' : 'w-full'
          }`}
          onClick={() => uploaderInput.current?.click()}>
          {isDragging
            ? 'تصویر خود را اینجا رها کنید'
            : image
            ? 'آپدیت عکس جدید'
            : 'افزودن عکس جدید'}
        </p>
        {!isDragging && image && (
          <div className='flex items-center justify-center w-1/2'>
            <div className='relative w-32 rounded-lg border-2 border-primary/30'>
              <div
                className='absolute -top-3 -left-3 flex gap-1 items-center justify-between bg-red-500 text-white rounded-full p-0.5 select-none cursor-pointer'
                onClick={removeImage}>
                <RemoveThin className='w-5 h-5' />
              </div>
              <Image
                width={100}
                height={100}
                alt=''
                src={image}
                className='w-full h-full'
              />
            </div>
          </div>
        )}
      </div>

      <div className='flex flex-col justify-between gap-3'>
        <p className='text-xs font-semibold text-gray-600'>
          برای افزودن عکس روی کادر بالا کلیک کنید و یا عکس خود را داخل کادر بالا به صورت Drag & Drop
          رها کنید.
        </p>
        <p className='text-xs font-semibold text-gray-600'>
          تصویر خود را داخل کادر بکشید یا روی کادر کلیک کنید. فرمت های قابل قبول:{' '}
          <span className='text-primary'>{allowedFileType.join(', ')}</span>
        </p>
      </div>
    </div>
  );
}

export default React.memo(SingleImageUploader);
