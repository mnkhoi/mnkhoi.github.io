import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Start from '@/components/Start'
import About from '@/components/About'
import Work from '@/components/Work'
import Footer from '@/components/Footer'
import Scroll from '@/components/Scroll'
import { useState, ReactNode, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [scrollTop, setScrollTop] = useState(false)

  const handleScroll = () => {
    setScrollTop(window.scrollY > 0)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between py-24 px-60 ${inter.className}`}
    >
      <Scroll scrollTop={scrollTop}/>
      <NavBar/> 
      <Start /> 
      <About />
      <Work />
      <Footer />
    </main>
  )
}