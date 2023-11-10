import { useRouter } from 'next/router';
import React from 'react';
export const redirectReturnUrl = url => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  router.push(url ? '/' + url : '/');
};
