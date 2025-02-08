import Image from "next/image";
import { getData } from "./lib/util/sanity";
import { PortableText } from "next-sanity";
import { Logo } from "./components/svg/logo";

export default function Bio({bio, width}:any) {
  

  return (
    <div id="info" className="h-full px-[10vw] w-[100vw] grid grid-cols-12 gap-[20px] items-center bg-[--mustard] ">
          <div className="col-span-4">
            <Image alt="image" height={0}  width={0} sizes="100vw"  src={bio.bioIcon}  className="w-[100%] origin-bottom"/>
          </div>
          <div className="col-span-7">
            <Logo fill={'#BB4E1F'} className="w-full h-[auto] mb-[40px]"/>
            <div className="text-big">
              <PortableText value={bio.bio}/>
            </div>
            </div>

    
    </div>
  );
}
