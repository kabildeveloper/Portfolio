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
                                <SkillCard content="Built dynamic web interfaces using React's component-based approach" skill='React' Icon={SiReact} color='pink'/>
                                <SkillCard content='Developed scalable back-end systems for web applications'  skill='Django' Icon={SiDjango} color='pink'/>
                                <SkillCard content='Managed efficient relational databases for data storage'  skill='Postgres' Icon={SiPostgresql} color='pink'/>
                            </div>
                            <div className='flex flex-col mb-5 md:mb-10 md:flex-row justify-center gap-5 md:gap-10'>
                                <SkillCard content='Utilized Python for versatile web applications'  skill='Python' Icon={SiPython} color='pink'/>
                                <SkillCard content='Implemented interactive features for enhanced user experiences'  skill='Javascript' Icon={SiJavascript} color='pink'/>
                                <SkillCard content='Structured and styled web applications with HTML and CSS'  skill='HTML' Icon={SiHtml5} color='pink'/>
                            </div>
                            <div className='flex flex-col mb-5 md:mb-10 md:flex-row justify-center gap-5 md:gap-10'>
                                <SkillCard content='Structured and styled web applications with HTML and CSS'  skill='CSS' Icon={SiCss3} color='pink'/>
                                <SkillCard content='Engineered performant web apps with Next.js' skill='Next js' Icon={SiVercel} color='pink'/>
                                <SkillCard content="Improved code quality using TypeScript's static typing" skill='Typescript' Icon={SiTypescript} color='pink'/>
                            </div>
                            <div className='flex flex-col mb-5 md:mb-10 md:flex-row justify-center gap-5 md:gap-10'>
                                <SkillCard content='Designed responsive interfaces with Bootstrap' skill='Bootstrap' Icon={SiBootstrap} color='pink'/>
                                <SkillCard content='Created customizable UIs with Tailwind CSS' skill='Tailwind' Icon={SiTailwindcss} color='pink'/>
                                <SkillCard content='Orchestrated containerized applications for deployment' skill='Docker' Icon={SiDocker} color='pink'/>
                            </div>
                            <div className='flex flex-col mb-5 md:mb-10 md:flex-row justify-center gap-5 md:gap-10'>
                                <SkillCard content='Streamlined project workflows and managed dependencies' skill='npm' Icon={SiNpm} color='pink'/>
                                <SkillCard content='Enhanced package management and build processes' skill='Yarn' Icon={SiYarn} color='pink'/>
                                <SkillCard content='Optimized JavaScript assets for faster web loading' skill='Webpack' Icon={SiWebpack} color='pink'/>
                            </div>
                        </div>

                    </div>
                </div >
            </motion.div>
    )
}

export default Skills;