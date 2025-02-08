'use client'
import Cover from "./cover";
import { forwardRef, useState } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Content from "./content";
import NextArt from "./nextArt";

const Landing = forwardRef<HTMLInputElement, { art:any, width:any,scrollX:any}>((props , ref)=> {

  return (

      
      <div className="fixed w-auto h-[100vh] z-10 flex b" ref={ref} style={{left:-props.scrollX}}>
          <Cover art={props.art} width={props.width}/>
          <Content art={props.art} width={props.width}/>
          <NextArt current={props.art.slug} art={props.art.details.collection} width={props.width}/>
        
         
    </div>
  );
})

Landing.displayName = 'Landing';
export default Landing;
