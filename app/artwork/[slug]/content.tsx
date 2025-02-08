import Image from "next/image";
import ParallaxItem from "@/app/components/parallax";


export default function Content({art, width}:any) {

  return (
    <div className="h-full w-auto flex items-center p-[60px]">
        {
        art.images?(
          art.images.map((item:any,i:any)=>{
            return(
              <div key={`portfolio-${i}`} className="ml-[60px] h-full border-[20px] border-white bg-white">
                <Image alt="image" height={0}  width={0} sizes="100vh"  src={item.url}  className="h-[100%] w-[auto]"/>
              </div>
            )
        })
        ):('')
       }

    </div>
  );
}
