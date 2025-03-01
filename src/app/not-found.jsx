import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className='flex items-center justify-center'>
        <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
    </div>
  );
};

export default NotFoundPage;