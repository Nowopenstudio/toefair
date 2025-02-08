'use client'

import Image from "next/image";
import { useEffect, useRef} from 'react';
import { useScroll, useTransform, motion } from "framer-motion";

export default function ParallaxAd({events,scale, cover, speed, width}){
  const parallax = useRef(null);

  const { scrollYProgress } = useScroll()

  const x = useTransform(scrollYProgress, [0, 1], [0, width * (speed)])

  useEffect(() => {
  
    console.log(x.get())
  })


    return(
    <motion.div className={`relative featHold w-auto origin-bottom-left ${`h-[80vh] z-0`}`} style={{scale:scale, x}} ref={parallax}>
<a href={events.url} target="_blank">
        <Image alt="image" height={0}  width={0} sizes="100vw"  src={events.feat}  className="linkItem pointer-events-auto rounded-[5px] absolute w-[43%] h-[auto] left-[16%] top-[50%] drop-shadow-[0_6px_6px_rgba(0,0,0,0.9)]"/>
  
</a>      <Image alt="image" height={0}  width={0} sizes="100vw"  src={cover}  className="w-auto h-[100%] "/>
    </motion.div>
    
    );
}