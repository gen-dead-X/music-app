'use client';

import Sidebar from './ui/sign-in/sidebar';
import { useEffect } from 'react';
import checkUserPreferredTheme from '@/helpers/themeHelpers';
import Loginform from './ui/sign-in/loginForm';

import './globals.scss';

export default function Home() {
  useEffect(() => {
    checkUserPreferredTheme();
  }, []);

  return (
    <main className='h-screen w-screen'>
      <div className='h-full w-full lg:flex'>
        <div className='page-container-main hidden lg:block lg:w-[60%]'>
          <Sidebar />
        </div>
        <div className='my-auto h-full lg:w-[40%]'>
          <Loginform />
        </div>
      </div>
    </main>
  );
}
