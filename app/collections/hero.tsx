'use client'
import { forwardRef, useState } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Single from "./single";

const Landing = forwardRef<HTMLInputElement, { collection:any, width:any, scrollX:any}>((props , ref)=> {

  return (

      
      <div className="fixed w-auto h-[100vh] z-10 flex" ref={ref} style={{left:-props.scrollX}}>
            {props.collection?(
              props.collection.map((item:any,i:any)=>{
                return(
                  <Single exhibit={item} key={i} width={props.width}/>
                )
              })
            ):('')
            }
        
         
    </div>
  );
})
Landing.displayName = 'Landing';
export default Landing;
