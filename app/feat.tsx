import Image from "next/image";
import { getData } from "./lib/util/sanity";
import ParallaxItem from "./components/parallax";
import ParallaxAd from "./components/parallaxAd";

export default function Feat({work, width}:any) {

  return (
    <div className="h-full pl-[35vw] w-auto flex items-end pb-[60px] ">
      {work.feat.map((item:any,i:number)=>{
        return(
          <ParallaxItem slug={item.slug} scale={item.scale} cover={item.cover} key={`paralaxx-${i}`} speed={-(i*.5)} width={width}/>
        )
      })}
      <ParallaxAd events={work.next[0]} cover={work.vip} scale={1.1} speed={-1.0} width={width}/>
    </div>
  );
}
