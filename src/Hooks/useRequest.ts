'use client';
import { useMutation } from '@tanstack/react-query';
import { Routes } from '@/Enum/Routes';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { UseRequest } from '@Types/Hooks';
// @ts-ignore
import { MutationOptions } from '@tanstack/query-core/src/types';
// @ts-ignore
import { UseMutationResult } from '@tanstack/react-query/src/types';

function useRequest() {
  const router = useRouter();
  const Request = (
    props: UseRequest & MutationOptions
  ): UseMutationResult<unknown, unknown, void, unknown> => {
    const { mutationFn, redirectSuccess } = props;
    return useMutation({
      mutationFn,
      onSuccess: ({ message }: any) => {
        toast.success(message);
        if (redirectSuccess) {
          setTimeout(() => {
            router.push(redirectSuccess);
          }, 2000);
        }
      },
      onError: (err: ErrorResponse) => {
        toast.error(err?.response.data.errors[0].message);
      },
      ...props,
    });
  };
  return { Request };
}

export default useRequest;
