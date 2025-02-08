'use client'
import Feat from "./feat";
import { forwardRef, useState } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import FeatIndex from "./featIndex";
import Bio from "./bio";
import Exhibits from "./exhibits";




const Landing = forwardRef<HTMLInputElement, { home: object, width:number, featProj:object, exhibits:object, scrollX:any}>((props , ref)=> {

  return (

      
      <div className="fixed w-auto h-[100vh] z-10 flex" ref={ref} style={{left:-props.scrollX}}>
          <Feat work={props.home} width={props.width}/>
          <FeatIndex work={props.featProj} width={props.width}/>
          <Bio bio={props.home} width={props.width}/>
          <Exhibits bio={props.home} exhibits={props.exhibits} width={props.width}/>
    </div>
  );
})

export default Landing;
