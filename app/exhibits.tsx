import Link from "next/link";
import { Reveal } from "./lib/util/reveal";

export default function Exhibits({exhibits, bio, width}:any) {
  console.log(bio.press)

  return (
    <div className="h-full px-[10vw] w-[100vw] grid grid-cols-12 items-center bg-[--mustard] border border-[--mustard]">
      <div className="col-span-full grid grid-cols-12 ">
        <Reveal styleSet="grid grid-cols-12 col-span-full">
          <div className="w-full col-span-12 mb-[20px]"><p>Latest Exhibitions</p></div>
        </Reveal>
        <div className='col-span-12 grid grid-cols-12 items-top mb-[100px] relative'>
          {exhibits.map((item:any,i:any)=>{
            return(
              <Reveal count={i} styleSet="col-span-3 items-start" key={`exhibits-${i}`}>
                  <h2>{item.title}</h2>
                  <p>{item.gallery.title}</p>
                  <p className="mb-[20px]">{item.gallery.loc}</p>
                  <p>{`${item.gallery.start} -`}</p>
                  <p>{`${item.gallery.end}`}</p>
                
              </Reveal>
            )
          })}
                 
        </div>

        <Link href={`/collections`} className="ctaHold h-[auto] top-[10vh] right-[5vw] absolute">
              <Reveal  styleSet="ctaBut z-50 bgclay rounded-full flex items-center w-[250px] h-[250px] animate-spin-slow ">
                        <h1 className="uppercase text-[--mustard] w-full text-center">más</h1>
                </Reveal>
          </Link>
        <div className="w-full col-span-12 mb-[20px]"><p>Press</p></div>
        <div className="pressHold col-span-12 items-start grid gap-[20px] grid-cols-2">
            {bio.press.map((press:any,p:any)=>{
              return(
                <a href={press.link} target="blank" key={`press-${p}`} >
                  <Reveal count={p} styleSet="border-b border-black pb-[20px] col-span-1">
                    <p >{press.title}</p>
                    <p>{press.date}</p>
                  </Reveal>
                </a>
              )
            })}
          </div>
      </div>
      
    </div>
  );
}
