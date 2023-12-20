'use client'
import { login } from '@/actions/user.action'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

function SignIn() {
    const router = useRouter()
    const createUserForm = async (e: FormData) => {
        const identity = e.get("identity")?.toString() as string
        const password = e.get("password")?.toString() as string
        const response = await login(identity, password)
        if (response.success) {
            toast.success(response.message)
            router.replace("/dashboard")
        } else {
            toast.error(response.message)
        }
    }
    return (
        <form action={createUserForm} className="flex flex-col gap-4" >
            <input type="text" name="identity" className="px-2 py-2 rounded-xl border-2 mx-1" placeholder="Username or Email" />
            <input type="text" name="password" className="px-2 py-2 rounded-xl border-2 mx-1" placeholder="Password" />
            <button className="bg-black text-white rounded-full py-3  hover:opacity-80 transition-all" type="submit"> Sign in  </button>
        </form>
    )
}

export default SignIn