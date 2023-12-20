import GoogleSignIn from '@/components/GoogleSignIn';
import SignIn from '@/components/forms/SignIn';
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <section className='flex flex-col items-center justify-center h-[80vh]'>
      <div className='= flex flex-col gap-6 w-full max-w-sm'>
        <h1 className='text-2xl font-semibold'>Sign in with Dribble</h1>
        <GoogleSignIn/>
        <div className='flex items-center'>
          <hr className='w-full' /> <p className='mx-4 text-gray-400'>or</p> <hr className='w-full' />
        </div>
        <SignIn/>
        <h1 className='text-sm text-center '>
          Don't have an account? <Link className='underline' href="/sign-up"> Sign Up </Link>
        </h1>
      </div>
    </section>
  )
}

export default page