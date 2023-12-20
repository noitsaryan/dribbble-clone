import UploadShots from '@/components/UploadShots';
import ShotUploadForm from '@/components/forms/ShotUploadForm';
import React from 'react'

function page(props: { params: { [key: string]: string }, searchParams: { [key: string]: string } }) {
  const { params, searchParams } = props
  return (
    params.page === 'upload-shot' ? (searchParams.imageUrl ? <ShotUploadForm link={searchParams.imageUrl} /> : <UploadShots /> ) : null
  )
}

export default page;