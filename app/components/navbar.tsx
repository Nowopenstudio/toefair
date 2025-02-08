"use client"


import Link from 'next/link';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { LogoInline } from './svg/logo_inline';







export default function Navbar(){
    const page = usePathname();
    
    
    
    return(
    <div className="fixed top-0 left-0 w-[100vw] h-[40px] z-[90]">
      <div className="flex justify-between py-[15px] items-center border-b border-[--foreground]">
        <div className="logo pl-[20px]">
          <Link href={`/`} scroll={true}><div className="item uppercase">Christoper Suarez </div></Link>
        </div>
        <div className="buttons flex flex-end gap-[40px] pr-[40px] uppercase">
                <Link href='/collections' scroll={true}><div className="item">Collections </div></Link>
                <Link href='/artwork' scroll={true}><div className="item">Artwork</div></Link>
                <a href='mailto:ro@nowopen.studio' ><div className="item">Contact</div></a>
                <Link href='/#info' scroll={true}><div className="item">Info </div></Link>
        </div>
      </div>
    </div>
    
    );
}