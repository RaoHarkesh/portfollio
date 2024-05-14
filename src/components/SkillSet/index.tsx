import { useEffect, useRef, useState } from "react";

interface SkillProps {
    items: Array<
        {
            title: string;
            point: number;
        }>
}

const SkillSet = ({items}: SkillProps) => {
    const [animate, setAnimate] = useState<boolean>(false)
    const hexagonRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setAnimate(true)
                }
            });
        });

            observer.observe(hexagonRef.current);

        return () => observer.disconnect();
    }, []);
    return <div className="w-full flex flex-col gap-[20px]" ref={hexagonRef}>
        {items.map((item)=> {
            return <div className="w-full relative h-[30px] bg-[#eee]">
                {animate && <div className={`bg-[#00a1a7] h-full ${animate && `width-animate-${item.point}`}`} />}
                <div className="absolute bg-[#04c2c9] h-full px-[10px] top-0 left-0 text-white capitalize">{item.title}</div>
            </div>
        })}
    </div>
}

export default SkillSet