"use client"

import { useRouter } from "next/navigation"

interface ResumeButton {
    label: string,
}

export const ResumeButton = ({ label }: ResumeButton) => {
    const route = useRouter()
    return (
        <>
            <div className="h-[200px] flex justify-center items-center w-[300px] rounded-full z-[101] fixed top-[-50px] left-0  lg:left-[calc(100%-250px)] bg-resume_gradient_radial">
            </div>
            <div onClick={() =>route.push("/resume")} className="z-[102] fixed top-2 right-[calc(100%-140px)] lg:right-4 hover:scale-110 transition-all duration-300 cursor-pointer flex rounded-lg justify-center items-center bg-resume_gradient outline-none w-max p-[2px]">
                <div className="pointer-events-none w-full h-max bg-[#1b242f] p-3 text-white rounded-lg">{label}</div>
            </div>
        </>
    )

}