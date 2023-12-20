import { footerMenu, footerMenuBottom } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiFacebookBoxFill, RiInstagramLine, RiPinterestFill, RiTwitterFill } from 'react-icons/ri'

function Footer() {
    return (
        <footer className='flex flex-col items-center gap-8 border-t py-8'>
            <div className='flex items-center flex-col gap-5'>
                <Link href="/">
                    <Image src="/dribbble-logo.png" alt='footer-logo' width={85} height={85} />
                </Link>
                <div className='flex items-center flex-wrap justify-center gap-3 max-w-[25rem]'>
                    {
                        footerMenu.map((e, i) => (
                            <span key={i} className='font-semibold'>
                                {e}
                            </span>
                        ))
                    }
                </div>
                <div className='flex items-center gap-2'>
                    <RiTwitterFill size={20} />
                    <RiFacebookBoxFill size={20} />
                    <RiInstagramLine size={20} />
                    <RiPinterestFill size={20} />
                </div>
            </div>
            <div className='flex items-center gap-3 max-w-sm flex-wrap justify-center'>
                {
                    footerMenuBottom.map((e, i) => (
                        <span key={i} className=''>
                            {e}
                        </span>
                    ))
                }
            </div>
        </footer>
    )
}

export default Footer