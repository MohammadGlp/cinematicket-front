'use client';
import React, { useEffect } from 'react';
import NProgress, { NProgressOptions } from 'nprogress';
type PushStateInput = [data: unknown, unused: string, url?: string | URL | null | undefined];
import '@Styles/nprogress.css';

const ProgressBar: React.FC<Partial<NProgressOptions>> = nProgressProps => {
  useEffect(() => {
    NProgress.configure(nProgressProps);

    const handleAnchorClick = (event: MouseEvent) => {
      const targetUrl = (event.currentTarget as HTMLAnchorElement).href;
      const currentUrl = window.location.href;
      if (targetUrl !== currentUrl) {
        NProgress.start();
      }
    };

    const handleMutation: MutationCallback = () => {
      const anchorElements: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a[href]');

      anchorElements.forEach(anchor => anchor.addEventListener('click', handleAnchorClick));
    };

    const mutationObserver = new MutationObserver(handleMutation);

    mutationObserver.observe(document, { childList: true, subtree: true });

    window.history.pushState = new Proxy(window.history.pushState, {
      apply: (target, thisArg, argArray: PushStateInput) => {
        NProgress.done();
        return target.apply(thisArg, argArray);
      },
    });
  });

  return <React.Fragment />;
};

export default React.memo(ProgressBar);
