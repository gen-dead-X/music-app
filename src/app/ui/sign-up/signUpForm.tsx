'use client';

import { signUpValidationSchema } from '@/validators/user/auth';
import AnimatedInputLabel from '../global/Inputs/AnimatedInputLabel';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import apiCall from '@/helpers/apiCall';
import { LoginResponse, SignUpType } from '@/Types/User';
import SubmitButton from '../global/Buttons/SubmitButton';
import Link from 'next/link';

export default function SignUpForm() {
  const form = useForm<SignUpType>({
    resolver: yupResolver(signUpValidationSchema),
  });

  const handleSignIn = async (formValue: SignUpType) => {
    try {
      const response = await apiCall<LoginResponse, SignUpType>(
        '/login',
        'POST',
        formValue
      );

      if (response.data) {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.accessToken);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return (
    <section className='flex h-full w-full flex-col items-center justify-between overflow-auto pt-5'>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(handleSignIn)}
          className=' xs:max-w-[30rem] mb-10 flex w-full flex-col gap-10 rounded-xl p-5 dark:bg-[rgb(29,29,29)] sm:px-20 md:px-44 lg:px-5 xl:px-20 2xl:px-32'
        >
          <div className='p-5 text-center'>
            <h1 className='bg-radial-red text-5xl text-[#333] dark:text-gray-200'>
              Sign up
            </h1>
            <p className='mt-5 text-[#666]'>To create your account</p>
          </div>
          <AnimatedInputLabel
            name='email'
            label='Email'
            className='w-full border-[2px]'
            type='text'
          />
          <AnimatedInputLabel
            name='phoneNumber'
            label='Phone Number'
            type='number'
            className='w-full border-[2px]'
          />
          <AnimatedInputLabel
            name='password'
            label='Password'
            type='password'
            className='w-full border-[2px]'
          />
          <AnimatedInputLabel
            name='confirmPassword'
            label='Confirm Password'
            type='password'
            className='w-full border-[2px]'
          />

          <button type='submit'>
            <SubmitButton className='relative rounded-full'>
              Sign Up
            </SubmitButton>
          </button>
        </form>
      </FormProvider>
      <footer className='flex w-full flex-col items-center gap-5 bg-gray-200 py-20 dark:bg-[#2f2f2f]'>
        <h4>Already Have an Account?</h4>
        <Link href={'/'}>
          <SubmitButton className='rounded-full'>Log In</SubmitButton>
        </Link>
      </footer>
    </section>
  );
}
