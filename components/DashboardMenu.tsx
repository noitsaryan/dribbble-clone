'use client'
import { profilePageMenu } from '@/constants'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

function DashboardMenu() {
    const param = useSearchParams();
    const option = param.get("option")
    return (
        <div className="my-4  flex  items-center px-8  gap-4">
            {
                profilePageMenu.map((e, i) => (
                    <Link href={e.link} key={i} className={`${option === e.query ? "bg-gray-100 rounded-full " : null} px-5 py-2`} >
                        {e.label}
                    </Link>
                ))
            }
        </div>
    )
}

export default DashboardMenu