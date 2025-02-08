
import ParallaxNone from "@/app/components/parallaxNone";


export default function Cover({art, width}:any) {

  return (
    <div className="h-full pl-[45vw] w-auto flex items-end pb-[100px]">
     
          <ParallaxNone scale={art.scale} cover={art.cover} key={`paralaxx-${1}`} speed={-(2*.5)} width={width}/>
   
    </div>
  );
}
