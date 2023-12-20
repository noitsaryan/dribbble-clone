import GoogleSignUp from '@/components/GoogleSignUp';
import { SignUp } from '@/components/forms/SignUp';
import Link from 'next/link'
import React from 'react'

function page({ searchParams }: { searchParams: { [key: string]: string } }) {
    const { emailMethod } = searchParams;
    return (
        <section className='flex flex-col items-center justify-center h-[80vh]'>
            <div className='= flex flex-col gap-6 w-full max-w-sm'>
                <h1 className='text-2xl font-semibold'>Sign up to Dribble</h1>
                <GoogleSignUp/>
                <div className='flex items-center'>
                    <hr className='w-full' /> <p className='mx-4 text-gray-400'>or</p> <hr className='w-full' />
                </div>
                <Link href="/sign-up?emailMethod=true" className='border-2 border-gray-400 rounded-full px-6 text-md hover:border-black text-center py-3 transition-all'>Continue with Email</Link>
                <h1 className='text-sm text-center '>
                    Already have an account? <Link className='underline' href="/sign-in"> Sign In </Link>
                </h1>
            </div>
            {
                emailMethod === "true" ? <SignUp /> : null
            }
        </section>
    )
}

export default page