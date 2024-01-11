'use client';

import { useEffect } from 'react';
import Sidebar from '../sign-in/sidebar';
import checkUserPreferredTheme from '@/helpers/themeHelpers';

export default function SignInUpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    checkUserPreferredTheme();
  }, []);

  return (
    <main className='h-screen w-screen'>
      <div className={'h-full w-full lg:flex'}>
        <div className='page-container-main hidden lg:block lg:w-[60%]'>
          <Sidebar />
        </div>
        <div className='my-auto h-full lg:w-[40%]'>{children}</div>
      </div>
    </main>
  );
}
