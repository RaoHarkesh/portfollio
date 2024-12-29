"use client"
import FilterMyProject from "@/components/FilterProjects/inde";
import Hexagon from "@/components/Hexagon";
import Navbar from "@/components/Navbar";
import SkillSet from "@/components/SkillSet";
import ContactMe from "@/components/ContactMe"
import { useEffect, useRef, useState } from "react";
import { ResumeButton } from "@/components/Buttons/button";

export default function Home() {
  const [workHover, setWorkHover] = useState<boolean>(false)
  const [animate, setAnimate] = useState<boolean>(false)
  const [contactAnimate, setContactAnimate] = useState<boolean>(false)
  const [skillAnimate, setSkillAnimate] = useState<boolean>(false)
  const [aboutAnimate, setAboutAnimate] = useState<boolean>(false)
  const projectHead = useRef(null);
  const skillRef = useRef<any>(null)
  const skillHead = useRef<any>(null)
  const contactHead = useRef(null);
  const aboutHead = useRef<any>(null)
  const aboutRef = useRef<any>(null)
  const projectRef = useRef<any>(null)
  const contactRef = useRef<any>(null)
  useEffect(() => {

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimate(true)
        }
      });
    });
    const contactObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setContactAnimate(true)
        }
      });
    });
    const skillObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setSkillAnimate(true)
        }
      });
    });
    const aboutObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAboutAnimate(true)
        }
      });
    });
    projectHead.current && observer.observe(projectHead.current);
    contactHead.current && contactObserver.observe(contactHead.current);
    skillHead.current && skillObserver.observe(skillHead.current);
    aboutHead.current && aboutObserver.observe(aboutHead.current);



    return () => {
      observer.disconnect();
      contactObserver.disconnect();
      skillObserver.disconnect();
      aboutObserver.disconnect();
    }
  }, []);
  return (
    <div>
      <ResumeButton label="View Resume" />
      <div className="w-full h-[100dvh] relative bg-[#222831] flex flex-col justify-center items-center">
        <video className="w-full object-cover h-full opacity-20 pointer-events-none z-[1] absolute top-0 left-0" autoPlay loop muted>
          <source src="/home-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="px-[10px] xl:px-0 text-[28px] xl:text-[50px]">
          <span className="text-white">{`Hello, I'm`} </span><span className="text-[#D20062]">Harkesh Yadav,</span>
          <br />
          <p className="text-white">{`I'm a Software Engineer`}</p>
        </div>
        <div onClick={() => {
          if (aboutRef.current)
            aboutRef.current.scrollIntoView({ behavior: 'smooth' })
        }} onMouseEnter={() => setWorkHover(true)} onMouseLeave={() => setWorkHover(false)} className="flex gap-[20px] border-white transition-all duration-500 hover:bg-[#0E8388] cursor-pointer hover:border-[#0E8388] border-[2px] py-[10px] px-[15px] xl:px-[20px] mt-[40px] text-white text-[28px] xl:text-[32px]">
          {'View my work '}<div className={`transition-all duration-500 ${workHover && 'rotate-z-90'}`}>{'->'}</div>
        </div>
      </div>
      <Navbar skillRef={skillRef} aboutRef={aboutRef} contactRef={contactRef} projectRef={projectRef} items={['home', 'about', 'skillset', 'project', 'contact']} />
      
      <div className="mb-[100px]" ref={aboutRef} />
      <div className="h-1" ref={aboutHead} />
      {aboutAnimate && <div className="flex flex-col items-center ">
        <h1 className={`w-fit uppercase text-[35px] xl:text-[50px] text-center font-[600] ${aboutAnimate && 'right-to-left-animate'}`}>About</h1>
        <div className={`w-[100px] h-[6px] bg-black mx-auto rounded-full ${aboutAnimate && 'right-to-left-animate-delay'} `}></div>
      </div>}
      <div className="px-[10px] xl:px-[0] grid gap-14 grid-cols-2 xl:grid-cols-4 pt-[100px]">
        <div className="flex px-[10px] justify-center items-center"><Hexagon headline="fast" subheadline="Fast load times and lag free interaction, my highest priority."><img src="/speed.png" /></Hexagon></div>
        <div className="flex px-[10px] justify-center items-center"><Hexagon headline="responsive" subheadline="My layouts will work on any device, big or small."><img src="/responsive.png" /></Hexagon></div>
        <div className="flex px-[10px] justify-center items-center"><Hexagon headline="intuitive" subheadline="Strong preference for easy to use, intuitive UX/UI."><img src="/bulb.png" /></Hexagon></div>
        <div className="flex px-[10px] justify-center items-center"><Hexagon headline="dynamic" subheadline="Strong preference for easy to use, intuitive UX/UI."><img src="/rocket.png" /></Hexagon></div>
      </div>
      <div className="mb-[100px]" ref={skillRef} />
      {skillAnimate && <div className="flex flex-col items-center ">
        <h1 className={`w-fit uppercase text-[35px] xl:text-[50px] text-center font-[600] ${skillAnimate && 'right-to-left-animate'}`}>Skillset</h1>
        <div className={`w-[100px] h-[6px] bg-black mx-auto rounded-full ${skillAnimate && 'right-to-left-animate-delay'} `}></div>
      </div>}
      <div ref={skillHead} className="h-1 mt-[50px]" />
      <div className="grid grid-cols-1 xl:grid-cols-2 pb-[100px]">
        <div className="flex justify-center items-center px-[100px]">
          <div className="flex justify-center items-center flex-col">
            <img className="max-w-[300px] object-cover mb-[30px] rounded-[12px]" src="/profile-pic.jpg" />
            <h3 className="text-[#616161] font-[600] text-center text-[24px] mb-[20px]">{`Who's this guy?`}</h3>
            <p className="text-[#616161] text-[18px] text-center leading-loose">{`I'm a Software Engineer for Gamemano Pvt. Ltd. in Noida, India.
              I have serious passion for Software development, problem solving and creating intuitive, dynamic user experiences.`}</p>
            <br />
            <p className="text-[#009ada] text-[18px] cursor-pointer hover:underline">{`Let's make something technical and special`}</p>
          </div>
        </div>
        <div className="pt-[50px] xl:pt-0 xl:pr-[100px]">
          <SkillSet items={[{ title: 'Javascript', point: 90 }, { title: 'Typescript', point: 90 }, { title: 'Java', point: 80 }, { title: 'ReactJs', point: 90 }, { title: 'NextJS', point: 80 }, { title: 'NodeJs', point: 80 }, { title: 'Redux', point: 80 }, { title: 'HTML', point: 80 }, { title: 'CSS', point: 80 }, { title: 'Ant Design', point: 80 }, { title: 'Tailwind CSS', point: 80 }, { title: 'Data Structures and Algorithms', point: 80 }]} />
        </div>
      </div>
      <div ref={projectRef} className="w-full pt-[50px]  xl:pt-[100px] bg-[#f5f5f5] pb-[100px]">
        {animate && <div className="flex flex-col items-center ">
          <h1 className={`w-fit uppercase text-[35px] xl:text-[50px] text-center font-[600] ${animate && 'right-to-left-animate'}`}>Projects</h1>
          <div className={`w-[100px] h-[6px] bg-black mx-auto rounded-full ${animate && 'right-to-left-animate-delay'} `}></div>
          <div className="pt-[50px] xl:pt-[100px] w-full">
            <FilterMyProject images={[{ src: '/p-excel.jpeg', type: 'Javascript', name: "Excel clone", tech: 'Javascript' }, { src: '/p-auto.avif', type: 'Automation', name: 'Gmail Automation', tech: 'Puppeteer / Javascript' }, { src: '/p-webapp.png', type: 'React', name: 'Web Apps and Dashboards', tech: 'ReactJs / HTML / CSS' }, { src: '/p-nextjs.png', type: 'Nextjs', name: 'Next Applications', tech: 'NextJs Framework' }]} filters={['All', 'React', 'Nextjs', 'Javascript', 'Automation']} />
          </div>
        </div>}

        <div ref={projectHead} className="h-1" />
        <div ref={contactRef} />
      </div>

      <div className='w-full  py-[50px] xl:py-[100px] bg-[#252934]'>
        {contactAnimate && <div className="flex flex-col items-center ">
          <h1 className={`w-fit uppercase text-[35px] xl:text-[50px] text-center text-white font-[600] ${contactAnimate && 'right-to-left-animate'}`}>Contact</h1>
          <div className={`w-[100px] h-[6px] bg-white mx-auto rounded-full ${contactAnimate && 'right-to-left-animate-delay'} `}></div>
        </div>}
        <div ref={contactHead} className="h-1" />
        <div className="flex justify-center flex-col items-center">
          <ContactMe />
        </div>
      </div>
    </div>
  );
}
