import Link from 'next/link';
import React from 'react'
import { LuUserCircle2 } from "react-icons/lu";

function Profile() {
  return (
    <div>
      <Link href="/dashboard">
        <LuUserCircle2 size={25} className="" />
      </Link>
    </div>
  )
}

export default Profile