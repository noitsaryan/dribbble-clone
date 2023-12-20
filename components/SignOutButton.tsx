'use client'
import { signOut } from '@/actions/user.action'
import React from 'react'

function SignOutButton() {
  return (
    <button onClick={async () => await signOut()}> Signout </button>
  )
}

export default SignOutButton