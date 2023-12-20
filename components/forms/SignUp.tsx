"use client"
import { createUser } from "@/actions/user.action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaChevronLeft } from "react-icons/fa6";

export const SignUp = () => {
    const router = useRouter();
    const createUserForm = async (e: FormData) => {
        const name = e.get("name")?.toString()!
        const username = e.get("username")?.toString()!
        const email = e.get("email")?.toString()!
        const password = e.get("password")?.toString()!
        const response = await createUser({ name, username, email, password })
        if (response.success) {
            toast.success(response.message);
            router.replace('/sign-in')
        } else {
            toast.error(response.message)
        }
    }
    return <div className="bg-white absolute w-screen h-screen top-0 left-0 flex items-center justify-center  ">
        <Link href="/sign-up">
            <FaChevronLeft size={20} className="text-gray-500 absolute left-8 top-14" />
        </Link>
        <div className="flex flex-col">
            <h1 className="text-2xl font-semibold"> Sign up to Dribbble </h1>
            <form action={createUserForm} className="flex flex-col gap-4" >
                <div className="pt-4">
                    <input type="text" name="name" className="px-2 py-2 rounded-xl border-2 mx-1" placeholder="Name" />
                    <input type="text" name="username" className="px-2 py-2 rounded-xl border-2 mx-1" placeholder="Username" />
                </div>
                <input type="text" name="email" className="px-2 py-2 rounded-xl border-2 mx-1" placeholder="Email" />
                <input type="text" name="password" className="px-2 py-2 rounded-xl border-2 mx-1" placeholder="Password 6+ Characters" />
                <button className="bg-black text-white rounded-full py-3  hover:opacity-80 transition-all" type="submit"> Create Account </button>
            </form>
            <p className="text-center my-4"> Already have an account? <Link href="/sign-in" className="underline "> Sign In </Link> </p>        </div>
    </div>;
};