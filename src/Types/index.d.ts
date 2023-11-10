import React from 'react';

declare global {
  // Node Js Environment
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASEURL_API: string | undefined;
    }
  }
  // Children Component
  type PropsWithChildren = React.PropsWithChildren;

  // React Huge Icons
  type HugeIcons = React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;

  // Errors
  type ErrorResponse = {
    response: {
      data: {
        errors: {
          message;
        }[];
      };
    };
  };
}

export {};
