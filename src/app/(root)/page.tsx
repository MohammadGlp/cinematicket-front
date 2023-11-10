import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='container py-3'>
      <Link href='/login'>Home</Link>
    </div>
  );
};

export default Home;
