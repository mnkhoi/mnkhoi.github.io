import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between py-24 px-60 ${inter.className}`}
    >
      <NavBar logo='/public/vercel.svg'/> 
      <div id='about'></div>
    </main>
  )
}