import {
    SiBootstrap,
    SiCss3,
    SiDjango,
    SiDocker,
    SiHtml5,
    SiJavascript,
    SiNpm,
    SiPostgresql,
    SiPython,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
    SiWebpack,
    SiYarn
} from "react-icons/si";
import SkillCard from "@/components/SkillCard";
import {useEffect, useRef} from "react";
import {useInView, motion} from "framer-motion";

const Skills = function () {

    const skillsRef = useRef<HTMLDivElement>(null);
    const skillsInView = useInView(skillsRef, {
        once: true,
    });

    useEffect(()=>{
        console.log(skillsInView);
    },[skillsInView])

    return (
            <motion.div
                ref={skillsRef}
                className='w-full'
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: skillsInView ? 1 : 0, y: skillsInView ? 0 : 200 }}
                transition={{ duration: 1 }}
            >
                <div className='flex justify-center h-full items-center'>
                    <div className='px-5 md:px-28 container'>
                        <h3 className='text-4xl font-bold uppercase border-b-2 border-violet-500 w-fit mb-12 hidden md:block'>
                            Skills where my expertise shines
                        </h3>
                        <h3 className='text-4xl font-bold uppercase border-b-2 border-violet-500 w-fit mb-12 block md:hidden'>
                            Skills
                        </h3>
                        <div>
                            <div className='flex flex-col mb-5 md:mb-10 md:flex-row justify-center gap-5 md:gap-10'>
                                <SkillCard content='2 years and 6 months of experience' skill='React' Icon={SiReact} color='pink'/>
                                <SkillCard content='2 years and 6 months of experience'  skill='Django' Icon={SiDjango} color='pink'/>
                                <SkillCard content='2 years and 6 months of experience'  skill='Postgres' Icon={SiPostgresql} color='pink'/>
                            </div>
                            <div className='flex flex-col mb-5 md:mb-10 md:flex-row justify-center gap-5 md:gap-10'>
                                <SkillCard content='2 years and 6 months of experience'  skill='Python' Icon={SiPython} color='pink'/>
                                <SkillCard content='2 years and 6 months of experience'  skill='Javascript' Icon={SiJavascript} color='pink'/>
                                <SkillCard content='2 years and 6 months of experience'  skill='HTML' Icon={SiHtml5} color='pink'/>
                            </div>
                            <div className='flex flex-col mb-5 md:mb-10 md:flex-row justify-center gap-5 md:gap-10'>
                                <SkillCard content='2 years and 6 months of experience'  skill='CSS' Icon={SiCss3} color='pink'/>
                                <SkillCard content='2 years and 6 months of experience' skill='Next js' Icon={SiVercel} color='pink'/>
                                <SkillCard content='2 years and 6 months of experience' skill='Typescript' Icon={SiTypescript} color='pink'/>
                            </div>
                            <div className='flex flex-col mb-5 md:mb-10 md:flex-row justify-center gap-5 md:gap-10'>
                                <SkillCard content='2 years and 6 months of experience' skill='Bootstrap' Icon={SiBootstrap} color='pink'/>
                                <SkillCard content='1 year of experience' skill='Tailwind' Icon={SiTailwindcss} color='pink'/>
                                <SkillCard content='1 year of experience' skill='Docker' Icon={SiDocker} color='pink'/>
                            </div>
                            <div className='flex flex-col mb-5 md:mb-10 md:flex-row justify-center gap-5 md:gap-10'>
                                <SkillCard content='2 years and 6 months of experience' skill='npm' Icon={SiNpm} color='pink'/>
                                <SkillCard content='1 year of experience' skill='Yarn' Icon={SiYarn} color='pink'/>
                                <SkillCard content='2 years and 6 months of experience' skill='Webpack' Icon={SiWebpack} color='pink'/>
                            </div>
                        </div>

                    </div>
                </div >
            </motion.div>
    )
}

export default Skills;