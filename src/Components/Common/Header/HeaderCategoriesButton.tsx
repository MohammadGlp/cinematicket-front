'use client';
import React from 'react';
import Link from 'next/link';
import ButtonIcon from '@Common/Button/ButtonIcon';
import { Clapperboard, FilmstripCircle } from 'react-huge-icons/outline';
function HeaderCategoriesButton() {
  return (
    <React.Fragment>
      {/* <Link href=''>
        <ButtonIcon
          Icon={Clapperboard}
          responsive={true}
          text=' فیلم و تئاتر'
          color='#ff3543'
          backgroundColor='#ff35431a'
        />
      </Link> */}
      <Link href=''>
        <ButtonIcon
          Icon={FilmstripCircle}
          responsive={true}
          text=' سینما'
          color='#ff3543'
          backgroundColor='#ff35431a'
        />
      </Link>
    </React.Fragment>
  );
}

export default HeaderCategoriesButton;
