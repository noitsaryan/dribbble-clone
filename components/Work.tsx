import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Work() {
    return (
        <div className=" border-dashed border-2  rounded-md flex flex-col items-center max-w-sm mx-auto p-8">
            <Image src="/upload.png" alt="upload-icon" width={80} height={80} />
            <h1 className="text-xl font-semibold my-2">Upload your first shot</h1>
            <p className="text-center max-w-">
                Show off your best work. Get feedback, likes and be a part of a growing community.
            </p>
            <Link href="/dashboard/upload-shot" className="py-2 px-5 my-2 rounded-full bg-black text-white hover:opacity-70 transition-all text-sm"> Upload your first shot </Link>
        </div>
    )
}

export default Work