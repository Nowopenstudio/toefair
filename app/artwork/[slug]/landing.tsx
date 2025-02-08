'use client'
import { useEffect, useRef, useState } from "react";
import SmoothScrolling from "@/app/components/SmoothScrolling";
import { usePathname } from "next/navigation";
import Hero from "./hero";
import Car from "@/app/components/car";
import { useWindowSize } from "@studio-freight/hamo";
import { PortableText } from "next-sanity";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Sticker from "@/app/components/sticker";
import useResize from "@/app/components/util/useResize";


export default function Landing({home, art}:any) {
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


  return (
    <SmoothScrolling>
     <div className={`w-[100vw] bg-white`}>
    <div className="w-full h-full overflow-hidden" style={{height:(winY && fullPage)?fullPage-winY:1000}}>
     

      <Car car={home.walkIcon} index={30} prog={prog}/>
      <Hero  ref={elRef} art={art} width={winX} scrollX={scrollX}/>
      <div className={`text-sm w-[100vw] h-[100vh] fixed z-1 pointer-events-none overflow-hidden pb-[100px] bg-[--white]`}>
           <div className="w-full h-full grid grid-cols-12 items-center relative">
            <div className="col-span-4 col-start-2 relative">
            {art.sell?(
                <Sticker styleSet={`top-0 right-0 rotate-12 bgclay shadow-sm`} text={art.price}/>
              ):('')}
                {art.sold?(
                <Sticker styleSet={`top-[-60px] right-0 rotate-12 bgolive shadow-sm`} text={"Sold"}/>
              ):('')}
                <h1 className="mb-[20px]">{art.title}</h1>
                <div className="text-big mb-[60px]"><PortableText value={art.summary}/></div>
                <div className="projDetails pt-[20px]">
                <p className="text-big bold">{`${art.details.collection.title}`}</p>
                <p className="mb-[20px]">{`${art.details.collection.gallery.loc}, ${art.year}`}</p>
                <p>{art.details.mats.map((mats:any,m:number)=>{
                  return(
                    `${mats.title}${m!==art.details.mats.length-1?', ':""}`
                  )
                })}</p>
                <p>{art.details.size}</p>
            </div>
            </div>

           </div>
    </div>
    </div>
    </div>
    </SmoothScrolling>
  );
}
