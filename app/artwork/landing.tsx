'use client'
import { useEffect, useRef, useState } from "react";
import SmoothScrolling from "@/app/components/SmoothScrolling";

import Car from "@/app/components/car";
import { useWindowSize } from "@studio-freight/hamo";
import useResize from "../components/util/useResize";
import Hero from "./hero";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";


export default function Landing({art, home}:any) {
    const { winX, winY } = useResize();
    const elRef = useRef<HTMLInputElement>(null)
    const [fullPage, setPage] = useState(0);
    const [prog, setProg] = useState(0);
    const [scrollX, setScroll] = useState(0);
    const lenis = useLenis(({ progress, scroll }) => {
      setProg(progress)
      setScroll(scroll)
     })

   


    useEffect(() => {
    
        setPage(elRef.current!.offsetWidth);
        window.scrollTo(0,0)
    


    }, [elRef.current, winX, winY]);

    console.log('window', winX, winY)

  return (
 
      <SmoothScrolling>
      <div className={`w-[100vw] `}>
       

        <div className="w-full h-full overflow-hidden" style={{height:(winY && fullPage)?fullPage-winY:1000}}>
        <Car car={home.navIcon} index={30} prog={prog}/>
        <Hero  ref={elRef} art={art} width={winX} scrollX={scrollX}/>
        </div>

      
  
        
      
      </div>
      </SmoothScrolling>
 
   
  );
}
