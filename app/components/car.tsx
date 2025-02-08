import Image from "next/image";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useState } from "react";

export default function Car({car, index, prog}){
    
    

    return(
        <div className={`w-[100vw] h-[100vh] fixed z-30 pointer-events-none`}>
           <div className="absolute bottom-[20px]" style={{left: `${prog*100}%`}}><Image alt="image" height={0}  width={0} sizes="100vw"  src={car}  className="w-auto h-[100px]"/></div>
        </div>
    
    );
}