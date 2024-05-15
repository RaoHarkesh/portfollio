import React from "react";

interface NavProps {
    items: Array<string>
    aboutRef: any;
    contactRef: any;
    projectRef: any;
}

const Navbar = ({items, aboutRef, contactRef, projectRef}: NavProps) => {
    const handleClick = (item: string) => {
        switch(item) {
            case 'home':
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
                break;
            case 'about':
                aboutRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'project':
                projectRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'contact':
                contactRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                break
        }
    };
    
    return (
        <div className="sticky z-[100] top-0 bg-[#1b242f] px-[40px] py-[25px] xl:py-[15px] box-border border-b-[#04c2c9] border-b-[2px]">
            <div className="w-full flex justify-end items-center xl:hidden"><img src="/ham.png" className="h-[30px]" /></div>
            <div className="hidden gap-[50px] xl:flex">{items.map((item)=> <span onClick={()=>handleClick(item)} key={item} className="uppercase text-white hover:text-[#D20062] transition-all duration-500 cursor-pointer text-[26px] font-[300]">{item}</span>)}</div>
        </div>
    )
}

export default Navbar