'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Button = styled.div`
  &:hover {
    background-color: ${(props: any) => props.backgroundColor};
    color: ${props => props.color};
  }

  &:hover > svg {
    color: ${props => props.color};
  }
`;
const ButtonIcon: React.FC<ButtonIcon> = props => {
  const { Icon, Img, text, color, responsive, backgroundColor = '#DDDEEF66' } = props;
  const [image, setImage] = useState<string>('');
  useEffect(() => {
    Img && setImage(Img);
  }, [Img]);
  return (
    <Button
      className='group flex items-center justify-between gap-2 py-2 px-4 rounded-md duration-150 cursor-pointer'
      color={color}
      backgroundColor={backgroundColor}>
      {image ? (
        <Image
          width={30}
          height={30}
          src={'/img' + image}
          alt={`آواتار ${text}`}
          className='rounded-full'
        />
      ) : (
        !!Icon && <Icon className='w-4 h-4 text-gray-500' />
      )}
      <span className={`text-sm ${responsive ? 'hidden xl:flex' : ''}`}>{text}</span>
    </Button>
  );
};

export default ButtonIcon;
