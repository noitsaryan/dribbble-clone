import Image from 'next/image';
import React from 'react'
import User from './User';
import Link from 'next/link';
import Menu from './Menu';
import { RiSearch2Line } from "react-icons/ri";


function Header() {
    return (
        <nav className='flex items-center justify-between px-4 py-8'>
            <div className='flex items-center gap-5'>
                <Menu />
                <Link href="/">
                    <Image src="/dribbble-logo.png" alt='dribbble-logo' width={85} height={85} />
                </Link>
            </div>
            <div className='flex items-center gap-5'>
                <Link href="/search">
                    <RiSearch2Line size={25} />
                </Link>
                <User />
            </div>
        </nav>
    )
}

export default Header