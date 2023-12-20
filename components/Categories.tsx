import { footerMenu } from '@/constants'
import Link from 'next/link'
import React from 'react'

function Categories({ params }: { params: { [key: string]: string } }) {
  return (
    <div className='overflow-x-scroll flex items-center gap-6 whitespace-nowrap px-4 py-2'>
      {
        footerMenu.map((e, i) => (
          <Link key={i} href={`/?topic=${e.toLowerCase()}`} className={`transition-all px-2 py-2 hover:opacity-80 ${params.topic === e.toLowerCase() ? "bg-slate-100 rounded-xl" : '' } `}> {e} </Link>
        ))
      }
    </div>
  )
}

export default Categories