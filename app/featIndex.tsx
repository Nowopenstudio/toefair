import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./lib/util/reveal";

export default function FeatIndex({work, width}:any) {
  

  return (
   <div className="w-[auto] h-full flex items-center  bg-white relative">
      <div className="relative z-0">
      <div className="projDetails pt-[60px] w-full ml-[100] mb-[20px]">
                  <p className="bold text-center"><span>Recent Work</span></p>
                 
          </div>
        <div className=" px-[15vw] w-auto flex items-end relative">
        <Link href={`/artwork`} className="ctaHold h-[auto] bottom-[10vh] right-[5vw] absolute">
              <div  className="ctaBut z-50 bg-[--mustard] rounded-full flex items-center w-[250px] h-[250px] animate-spin-slow ">
                        <h1 className="uppercase text-[--clay] w-full text-center">más</h1>
                </div>
          </Link>
          {work.map((item:any,i:number)=>{
            return(
              <Link scroll={true} href={`/artwork/${item.slug.current}`} className="w-[33vw] h-[auto] px-[20px] pb-[10vh]" key={`item+${i}`} >
                <div className="singleArt">
                  <Image alt="image" height={0}  width={0} sizes="100vw"  src={item.cover}  className="w-[100%] origin-bottom ctaArt" style={{scale:item.scale}}/>
                </div>
                <Reveal styleSet="projDetails text-center pt-[20px]">
                    <h2 className="projTitle">{item.title}</h2>
                    <p className="mb-[20px]">{`${item.details.collection.title}, ${item.details.collection.gallery.loc}`}</p>
                    
                    <p>{item.details.mats.map((mats:any,m:number)=>{
                      return(
                        `${mats.title}${m!==item.details.mats.length-1?', ':""}`
                      )
                    })}</p>
                    <p className="mb-[20px]">{item.details.size}</p>
                    <p>{item.year}</p>
                </Reveal>
              </Link>
            )
    
          })}
             
    
    
        
        </div>
        
      </div>
     
   </div>
  );
}
