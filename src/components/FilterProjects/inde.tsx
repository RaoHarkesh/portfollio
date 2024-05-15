import React, { useEffect, useState } from "react";

interface FilterProjectProps {
    filters: Array<string>;
    images: Array<{
        src: string;
        type: string;
        name: string;
        tech: string
    }>
}

const FilterMyProject = ({ filters, images }: FilterProjectProps) => {
    const [active, setActive] = useState<{type: string, id: number}>({type: 'All', id: 0})
    const [hover, setHover] = useState<{id: number, status: boolean}>({id: -1, status: false})
    return (
        <div className="w-full">
            <div className="flex justify-center items-center w-full">
                <div className={`flex xl:grid xl:grid-cols-5 gap-4 w-full xl:w-fit overflow-scroll`}>
                    {filters.map((filter,idx) => <div key={filter} onClick={()=>setActive({id: idx, type: filter})} className={`${active.id === idx ? 'text-white bg-[#D20062]' : 'text-black'} p-[10px] w-fit p-10px cursor-pointer transition-all duration-500 text-[22px] uppercase`}>{filter}</div>
                    )}
                </div>
            </div>
            <div className="w-full xl:px-[100px]">
                <div className={`grid grid-cols-2 xl:grid-cols-3 pt-[50px]`}>
                    {images.filter((ele)=>ele.type === active.type || active.type === 'All').map((image, idx)=><div key={image.name} onMouseLeave={()=>setHover({id: -1, status: false})} onMouseEnter={()=>setHover({status: true, id: idx})} className="w-full aspect-square relative">
                        <div className={`${hover.id === idx ? 'bg-white opacity-1' : 'bg-transparent opacity-0'} cursor-pointer transition-all duration-300 absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center`}>
                            <div className="flex flex-col gap-10 justify-center items-center">
                                <div className={`${hover.id !== idx ? 'translate-y-[-80px]' : 'translate-y-0'} transition-all duration-500 flex flex-col gap-2`}>
                                    <span className="text-black font-[500] text-[16px] xl:text-[20px]">{image.name}</span>
                                    <span className="text-[#e31b6d] text-[16px]">{image.tech}</span>
                                </div>
                                <div className={`py-[10px] px-[10px] xl:px-[50px] border-[2px] ${hover.id !== idx ? 'translate-y-[80px]' : 'translate-y-0'} w-fit border-[#e31b6d] uppercase transition-all duration-500 bg-white text-[#1b242f] hover:text-white hover:bg-[#e31b6d]`}>Learn More</div>
                            </div>
                        </div>
                        <img className="w-full h-full object-cover" src={image.src} alt="image" /></div>)}
                </div>
            </div>
        </div>
    )
}

export default FilterMyProject