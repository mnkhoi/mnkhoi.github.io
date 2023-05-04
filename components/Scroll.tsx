import React, { FC, MouseEventHandler } from 'react'
import TriangleIcon from './icons/triangle'

interface ScrollIconProps {
    scrollTop: boolean;
}


const Scroll: FC<ScrollIconProps> = ({ scrollTop }) => {

    const scrollToTop: MouseEventHandler<HTMLDivElement> = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }

  return (
    <div className={
        `bg-primary w-10 h-10 rounded-lg 
        flex justify-center align-middle 
        pt-2 fixed bottom-5 right-5 ${ !scrollTop && 'translate-x-20' } cursor-pointer
        hover:bg-slate-800 duration-100 ease-in-out`
        }
        onClick={scrollToTop}
        >
        <TriangleIcon className='fill-white' width={20} height={20}/>
    </div>
  )
}

export default Scroll