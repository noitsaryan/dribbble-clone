import React from 'react'
import UploadShotsDropArea from './UploadShotsDropArea'

function UploadShots() {
  return (
    <section className='p-8 text-center space-y-6'>
      <h1 className='text-xl font-semibold'> What have you been working on? </h1>
      <UploadShotsDropArea/>
    </section>
  )
}

export default UploadShots