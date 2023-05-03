import Link from 'next/link';
import React, { FC } from 'react'
import ConsoleIcon from './icons/console';

interface LogoProps {    
    name: string;
    [otherProps: string]: any;
} 


const Logo: FC<LogoProps> = ( { name, otherProps } ) => {
  return (
    <Link href='/' className='flex items-center justify-normal gap-3' {...otherProps}>
        <ConsoleIcon />
        <div className='text-3xl font-bold '>
            {name}
        </div>
    </Link>
  )
}

export default Logo