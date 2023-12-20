import { session } from '@/actions/user.action'
import Link from 'next/link'
import React from 'react'
import Profile from './Profile'

async function User() {
  const isSession = await session()
  return (
    <div>
      {
        isSession.session ? <Profile/> : <Link href="/sign-up" className='bg-black text-white px-4 py-2 rounded-full hover:opacity-80 transition-all'> Sign Up </Link>
      }
    </div>
  )
}

export default User