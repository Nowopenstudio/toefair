'use client'

import Feat from "./feat";
import Nav from "./components/nav";
import Hero from "./hero";
import { useEffect, useRef, useState } from "react";
import SmoothScrolling from "./components/SmoothScrolling";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import Car from "./components/car";
import useResize from "./lib/hooks/useResize";


export default function Landing({home, featProj, exhibits}:any) {
    const pageID = usePathname();
    const { winX, winY } = useResize();
    const elRef = useRef<HTMLElement>(null)
    const [fullPage, setPage] = useState(0);
    const [prog, setProg] = useState(0);
    const [scrollX, setScroll] = useState(0);
    const lenis = useLenis(({ progress, scroll }) => {
      setProg(progress)
      setScroll(scroll)
     })

   


     useEffect(() => {
    if()
      setPage(elRef.current!.offsetWidth);
     window.scrollTo(0,0)

    }, [elRef.current, winX, winY]);


  return (
    <SmoothScrolling>
     <div className={`w-[100vw] bg-[var(--white)] ${pageID=="/"?"":"h-[100vh] overflow-hidden z-0"}`}>
    <div className="w-full h-full overflow-hidden" style={{height:(winY && fullPage)?fullPage-winY-40:1000}}>
      <Nav/>
      <Car car={home.navIcon} index={30} prog={prog}/>
      <Hero home={home} ref={elRef} width={winX} featProj={featProj} exhibits={exhibits} scrollX={scrollX}/>
    </div>
    </div>
    </SmoothScrolling>
  );
}
