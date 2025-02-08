
import Parallax from "@/app/components/parallax";
import { PortableText } from "next-sanity";
import Image from "next/image";


export default function Single({exhibit, width}:any) {

  return (
    <div className={`h-full w-auto items-end flex border-l border-[--foreground] bg-white`}>
     
      <div className=" h-full w-[45vw] grid grid-cols-6 sticky left-[0] pr-[100px] ">
          {/* <div className="w-[25vw] absolute y-center right-0">
                <Image alt="image" height={0}  width={0} sizes="100vh"  src={exhibit.cover}  className="h-[auto] w-[100%]"/>
            </div> */}
        <div className="col-span-4 col-start-1 h-full flex items-start pt-[150px] pl-[100px]">
          <div className="deets ">
            <h1 className="mb-[20px]">{exhibit.title}</h1>
            <div className="text-big mb-[60px]"><PortableText value={exhibit.summary}/></div>
            <div className="projDetails pt-[20px]">
              <p className="text-big bold">{`${exhibit.gallery.title}`}</p>
              <p className="mb-[20px] text-big">{`${exhibit.gallery.loc}`}</p>
              <p>{`${exhibit.gallery.start}-`}</p>
              <p>{`${exhibit.gallery.end}`}</p>
            </div>
            
          </div>
        </div>
       
      </div>
      
      <div className="h-full w-auto flex items-end pb-[100px]">
        {exhibit.artworks?(
            exhibit.artworks.map((item:any,i:number)=>{
              return(
                <Parallax slug={item.slug} scale={item.scale} cover={item.cover} key={`paralaxx-${i}`} speed={-(i*.5)} width={width}/>
              )
            })
        ):('')}
      </div>
         
   
    </div>
  );
}
