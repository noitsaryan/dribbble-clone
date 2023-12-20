'use client'
import React, { useState } from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'

function Menu() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <HiMenuAlt2 size={30} className="cursor-pointer" onClick={() => setOpen(prev => !prev)} />
            <div className='absolute top-20 bg-white shadow-xl border-t  w-full left-0 '>
                {
                    open && <div className='flex flex-col px-10 gap-4 py-8 font-semibold'>
                        <span>Find Talent</span>
                        <span>Inspiration</span>
                        <span>Learn Design</span>
                        <span>Jobs</span>
                        <span>Go Pro</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Menu