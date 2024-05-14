import { ReactElement, ReactNode, useEffect, useRef, useState } from "react"


interface HexProps {
    children: ReactNode,
    headline: string,
    subheadline: string
}

const Hexagon = ({ children, headline, subheadline }: HexProps) => {
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

            hexagonRef.current && observer.observe(hexagonRef.current);

        return () => observer.disconnect();
    }, []);
    return (
        <div className="flex flex-col items-center">
            {animate && <div className={`relative h-[150px] w-[150px] ${animate && 'popout-animate'}`}>
                <div className="relative z-[10] flex justify-center items-center top-[-10px]">{children}</div>
                <div className="h-[57.735%] w-[100%] bg-[#04c2c9] absolute top-0 left-0  rotate-[60deg]" />
                <div className="h-[57.735%] w-[100%] bg-[#04c2c9] absolute top-0 left-0  -rotate-[60deg]" />
                <div className="h-[57.735%] w-[100%] bg-[#04c2c9] absolute top-0 left-0 rotate-180" />
                {/* <div className="h-[150px] w-[60px] bg-[#04c2c9] absolute top-0 left-0" /> */}
            </div>}
            <div ref={hexagonRef} className={`${animate && 'opacity-animate'} flex flex-col justify-center`}>
            <h2 className="text-[#616161] capitalize text-[24px] font-[800] text-center">{headline}</h2>
            <p className="text-[#616161] text-[20px] text-center">{subheadline}</p>
        </div>
        </div>
    )
}

export default Hexagon