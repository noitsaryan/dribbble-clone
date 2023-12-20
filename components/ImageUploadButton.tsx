'use client'
import { UploadButton } from '@/utils/uploadthing'
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';

function ImageUploadButton() {
    const router = useRouter();
    return (
        <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(response: any) => {
                console.log(response)
                toast.success("Upload completed");
                router.replace(`/dashboard/upload-shot?imageUrl=${response[0]?.url}`)
            }}
            appearance={
                {
                    allowedContent: 'hidden',
                }
            }
            onUploadError={(error: Error) => {
                toast.error("An error occured while uploading image")
            }}
        />
    )
}

export default ImageUploadButton