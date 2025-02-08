
import { getData } from "@/app/lib/util/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";


export default function NextArt({art,current}:any) {

 

  return (
    <div className="h-full w-auto flex items-center pb-[100px] bg-white px-[200px] relative">
     
     <Link href={`/collections`} className="ctaHold h-[auto] top-[10vh] right-[5vw] absolute">
              <div  className="ctaBut z-50 bgmustard rounded-full flex items-center w-[250px] h-[250px] animate-spin-slow ">
                        <h1 className="uppercase text-[--clay] w-full text-center">más</h1>
                </div>
          </Link>
        
        <div className="w-auto">
          <div className="projDetails pt-[100px] w-full ml-[100]">
                  <p className="text-big bold text-center">{`More from `}<span className="italic">{art.title}</span></p>
                  <p className="mb-[120px] text-center">{`${art.gallery.loc}, ${art.year}`}</p>
          </div>
          <div className="flex items-end w-[auto] relative z-10">
              {art.artworks.map((item:any,i:number)=>{
                    return(
                      current.current !== item.slug.current?(
                        <Link href={`/artwork/${item.slug.current}`} className="w-[25vw]">
                        <div className="nextArt w-full">
                        <Image alt="image" height={0}  width={0} sizes="100vw"  src={item.cover}  className="w-[100%] origin-bottom ctaArt" style={{scale:item.scale}}/>
                        </div>
                        <div className="projDetails text-center pt-[60px]">
                          <h2 className="projTitle mb-[10px]">{item.title}</h2>
                          <p>{item.details.mats.map((mats:any,m:number)=>{
                            return(
                              `${mats.title}${m!==item.details.mats.length-1?', ':""}`
                            )
                          })}</p>
                          <p>{item.details.size}</p>
                      </div>
                      </Link>
                      ):('')
                     
                    )
              })}
          </div>
        </div>

   
    </div>
  );
}
