import Link from 'next/link';
import { Logo } from './svg/logo';





export default function Nav(){


    return(
        <div className={`text-sm uppercase w-[100vw] h-[100vh] fixed z-1 pointer-events-none overflow-hidden`}>
           <div className="w-full h-full grid grid-cols-12 items-center">
            <div className="col-span-3 col-start-2">
                <Logo fill={'#BB4E1F'} className="w-full h-[auto] mb-[40px]"/>
          
            </div>

           </div>
        </div>
    
    );
}