'use client';

import Loginform from './ui/sign-in/loginForm';

import './globals.scss';
import SignInUpLayout from './ui/signInUpLayout/signInUpLayout';

export default function Home() {
  return (
    <SignInUpLayout>
      <Loginform />
    </SignInUpLayout>
  );
}
