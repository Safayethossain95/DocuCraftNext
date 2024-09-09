import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Logo() {
  return (
    <div className='lg-flex'>
    <Link href="/">
    <Image className='h-6 w-auto' src="/logo.svg" alt="logo" width={100} height={24} priority/>
    </Link>
    </div>
  )
}
