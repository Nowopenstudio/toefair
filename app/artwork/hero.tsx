'use client'
import { forwardRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Sticker from "../components/sticker";

const Landing = forwardRef<HTMLInputElement, { art:any, width:any, scrollX:any}>((props , ref)=> {

  return (

      
      <div className="bg-white fixed w-auto min-w-[100vw] px-[200px] pb-[200px] h-[100vh] z-10 flex items-end justify-center" ref={ref} style={{left:-props.scrollX}}>
            {props.art?(
              props.art.map((item:any,i:any)=>{
                return(
                  <Link scroll={true} href={`/artwork/${item.slug.current}`} className="w-[25vw] px-[20px] relative" key={`item+${i}`}> 

                  <div className="singleIndex relative">
                    <Image alt="image" height={0}  width={0} sizes="100vw"  src={item.cover}  className="w-[100%] origin-bottom ctaArt h-[auto]" style={{scale:item.scale}}/>
                  </div>
                  <div className="projDetails text-center pt-[20px] relative">
                
                  <div className="inline-block relative mx-auto">
                  {item.sell?(
                      <div className={`absolute top-[0] left-[-30px] w-[15px] h-[15px] rounded-full bgclay shadow-sm`}/>
                    ):('')}
                      {item.sold?(
                      <div className={`absolute top-[0] left-[-30px] w-[15px] h-[15px] rounded-full bgolive shadow-sm`}/>
                    ):('')}
                    <p className="uppercase inline-block">{item.title}</p></div>
                      <p className="mb-[20px]">{item.year}</p>
                      
                      <p>{item.details.mats.map((mats:any,m:any)=>{
                        return(
                          `${mats.title}${m!==item.details.mats.length-1?', ':""}`
                        )
                      })}</p>
                      <p className="mb-[20px]">{item.details.size}</p>
                      
                  </div>
                </Link>
                )
              })
            ):('')
            }
        
         
    </div>
  );
})

export default Landing;
