import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { checkUser } from '../lib/checkUser'

const Header = async () => {
  const { userId } = await auth();
  await checkUser();

  return (
    <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50
    supports-[backdrop-filter]:bg-background/60'>
      <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
      <Link href='/'>
<Image src='/Designer.png' alt='Clerk' width={200} height={60}
className='h-20 py-1 w-auto object-contain'/>
</Link>
<div className='flex items-center space-x-2 md:space-x-4'>
  {userId ? (
    <>
    <Link href='/dashboard'>
    <Button variant="outline">
      <LayoutDashboard className='h-4 w-4'/>
      <span className='hidden md:block'>Industry Insights</span>
    </Button>
    </Link>


  <DropdownMenu>
  <DropdownMenuTrigger asChild>
  <Button>
      <StarsIcon className='h-4 w-4'/>
      <span className='hidden md:block'>Growth Tools</span>
      <ChevronDown className='h-4 w-4'/>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
   <DropdownMenuItem>
    <Link href={'/resume'} className='flex items-center gap-2'>
<FileText className='h-4 w-4'/>
<span>Build Resume</span>
    </Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Link href={'/ai-cover-letter'} className='flex items-center gap-2'>
      <PenBox className='h-4 w-4'/>
      <span>Cover letter</span>
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Link href={'/interview'} className='flex items-center gap-2'>
      <GraduationCap className='h-4 w-4'  />
      <span>Interview</span>
      </Link>
    </DropdownMenuItem>

  </DropdownMenuContent>
</DropdownMenu>
    </>
  ) : (
    <>
<Link href="/sign-in">
<Button variant="outline">Sign In</Button>
</Link>
<Link href="/sign-up">
                  <Button variant="outline">Sign Up</Button>
</Link>
    </>
  )}
            {userId && (
              <UserButton appearance={
                {
                  elements:{
                    avatarBox:'w-10 h-10',
                    userButtonPopoverCard: "shadow-xl",
                    userPreviewMainIdentifier: 'font-semibold'
                  }
                }
              }
              afterSignOutUrl='/'
              />
            )}
</div>
</nav>
    </header>
  )
}

export default Header
