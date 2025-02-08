'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef} from 'react';
import { useScroll, useTransform, motion } from "framer-motion";

export default function ParallaxItem({scale, cover, speed, width, slug}:any){
  const parallax = useRef(null);

  const { scrollYProgress } = useScroll()
  console.log(scrollYProgress)

  const x = useTransform(scrollYProgress, [0, 1], [0, width * (speed)])

  useEffect(() => {
  
  })


    return(
    <motion.div  className={`relative featHold w-auto origin-bottom-left ${`h-[80vh]`} z-10`} style={{scale:scale, x}} ref={parallax}>
      <Link href={`/artwork/${slug.current}`}><Image alt="image" height={0}  width={0} sizes="100vw"  src={cover}  className="w-auto h-[100%] "/></Link>
    </motion.div>
    
    );
}