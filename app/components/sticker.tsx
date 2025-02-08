

export default function Sticker({text, styleSet}:any){
    
    

    return(
        <div className={`min-w-[120px] h-[70px] p-[10px] absolute flex items-end z-30 pointer-events-none scale-75 ${styleSet}`}>
            <div className="h-[auto] uppercase inline-block"><p className="text-center text-price">{text}</p></div>
        </div>
    
    );
}