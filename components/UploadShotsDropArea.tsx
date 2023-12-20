import { uploadLists } from '@/constants'
import React from 'react'
import ImageUploadButton from './ImageUploadButton'

function UploadShotsDropArea() {
    return (
        <div className='border-dashed border-2 p-6 rounded-xl space-y-3 flex flex-col items-center cursor-pointer py-16' >
            <ImageUploadButton/>
            <p> Drag & drop an image, or <span className='underline'>Browse</span> </p>
            <p className='text-sm'>Minimum 1600px width recommended. Max 10MB each (20MB for videos)</p>
            <ul className='flex flex-col items-start text-sm'> 
                {
                    uploadLists.map((e,i) => (
                        <li className='list-disc' key={i}> {e} </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UploadShotsDropArea