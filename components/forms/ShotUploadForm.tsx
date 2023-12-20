import React from 'react'

function ShotUploadForm({ link }: { link: string }) {
    return (
        link && <div><p>{link}</p></div>
    )
}

export default ShotUploadForm