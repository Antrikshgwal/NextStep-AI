'use client'
import React from 'react'
import Link from 'next/link'

import { Button } from './ui/button'



const HeroSection = () => {
  return (
    <section className='w-full pt-36 md:pt-48 pb-10 '>
        <div className='space-y-6 text-center'>
            <div className='space-y-6 mx-auto' >
<h1 className=' text-5xl  font-bold md:text-6xl lg:text-7xl xl:text-8xl' >Your AI career coach for
<br />
Professional Success </h1>
<p className='text-muted-foreground md:text-xl mx-auto max-w-[600] '>Advance your carrer with personalised guidance, interview prep, and AI-powered tools for job success </p>
            </div>
            <div className='flex justify-center space-x-4'>
                <Link href="/dashboard">
                <Button size="lg" className="p-8" variant="outline">
                    Get Started
                </Button>
                </Link>

            </div>
        </div>
    </section>
  )
}

export default HeroSection
