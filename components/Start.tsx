import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Start = () => {
  return (
    <div className='w-full h-screen p-52'>
        <h4 className='text-2xl'>
            Hi, my name is
        </h4>
        <h1 className='text-6xl font-bold mt-6'>
            Khoi Nguyen.
        </h1>

        <h3 className='text-6xl font-bold text-slate-500 mt-6'>
            I design and develop webapps.
        </h3>

        <p className='mt-6 w-1/2 font-light'>
            I am a computer science student with working experience in full stack development. Currently, I&aposm focused on learning about computer systems and security.
        </p>

        <Button className='mt-6 text-lg py-7 px-10'>
            <Link href='/resume'>
                Check out my resume!    
            </Link> 
        </Button>
    </div>
  )
}

export default Start