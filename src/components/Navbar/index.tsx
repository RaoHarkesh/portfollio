import React from "react";

interface NavProps {
    items: Array<string>
}

const Navbar = ({items}: NavProps) => {
    return (
        <div className="sticky z-[100] top-0 bg-[#1b242f] flex gap-[50px] px-[40px] py-[15px] box-border border-b-[#04c2c9] border-b-[2px]">
            {items.map((item)=> <span key={item} className="uppercase text-white hover:text-[#D20062] transition-all duration-500 cursor-pointer text-[26px] font-[300]">{item}</span>)}
        </div>
    )
}

export default Navbar