'use client'
import React from 'react'
import toast from 'react-hot-toast'

function GoogleSignIn() {
  return (
    <button onClick={() => toast.success("Experimental Feature")}  className='border-2 text-black  hover:border-black/50 px-6 py-3 rounded-full text-md transition-all text-center'>Sign in with Google</button>
  )
}

export default GoogleSignIn