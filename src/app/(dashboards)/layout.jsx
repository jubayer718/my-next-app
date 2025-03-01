import React from 'react';

const Layout = ({children}) => {
  return (
    <div>
      <div className='grid grid-cols-12 w-full'>
      <div className='col-span-3'> 
        <ul>
          <li>file list</li>
        </ul>
      </div>
      <div className='col-span-9'>
        {children}
      </div>
      
    </div>
    </div>
  );
};

export default Layout;