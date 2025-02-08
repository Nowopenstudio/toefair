'use client'

import Image from "next/image";
import { useEffect, useRef} from 'react';
import { useScroll, useTransform, motion } from "framer-motion";

export default function ParallaxNone({scale, cover, speed, width}:any){
  const parallax = useRef(null);

  const { scrollYProgress } = useScroll()

  const x = useTransform(scrollYProgress, [0, 1], [0, width * (speed)])

  useEffect(() => {
  
  })


    return(
    <motion.div  className={`relative featHold w-auto origin-bottom-left ${`h-[80vh]`} z-10`} style={{scale:scale, x}} ref={parallax}>
      <Image alt="image" height={0}  width={0} sizes="100vw"  src={cover}  className="w-auto h-[100%]"/>
    </motion.div>
    
    );
}