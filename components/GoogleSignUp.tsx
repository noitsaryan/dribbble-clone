'use client'

import toast from "react-hot-toast"

function GoogleSignUp() {
    return (
        <button className='bg-black text-white px-6 py-3 rounded-full text-md transition-all text-center hover:opacity-80' onClick={() => {
            toast.success("Experimental Feature")
        }} >
            Sign up with Google
        </button>
    )
}

export default GoogleSignUp