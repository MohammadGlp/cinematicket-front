import React from 'react';

const Button: React.FC<PropsWithChildren & Button> = ({ children, className, ...other }) => {
  return (
    <button
      className={`flex items-center justify-center gap-1 text-sm rounded-md py-2 px-5 ${className}`}
      {...other}>
      {children}
    </button>
  );
};
export default Button;
