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
import {motion, useInView} from "framer-motion";

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
                        <h3 className='dark:text-gray-300 text-4xl font-bold w-full text-center mb-12 hidden md:block font-dancing'>
                            <span className='text-gradient'>Skills</span> Where My Expertise Shines
                        </h3>
                        <h3 className='dark:text-gray-300 text-4xl font-bold uppercase border-b-2 border-violet-500 w-fit mb-12 block md:hidden'>
                            Skills
                        </h3>
                        <div>
                            <div className='mx-auto flex flex-col mb-5 md:mb-10 md:flex-row justify-center flex-wrap gap-5 max-w-[1200px]'>
                                <SkillCard content="Built dynamic web interfaces using React's component-based approach" skill="React" Icon={SiReact} color="react" />
                                <SkillCard content="Developed scalable back-end systems for web applications" skill="Django" Icon={SiDjango} color="django" />
                                <SkillCard content="Managed efficient relational databases for data storage" skill="Postgres" Icon={SiPostgresql} color="postgres" />
                                <SkillCard content="Utilized Python for versatile web applications" skill="Python" Icon={SiPython} color="python" />
                                <SkillCard content="Implemented interactive features for enhanced user experiences" skill="Javascript" Icon={SiJavascript} color="javascript" />
                                <SkillCard content="Structured and styled web applications with HTML and CSS" skill="HTML" Icon={SiHtml5} color="html" />
                                <SkillCard content="Structured and styled web applications with HTML and CSS" skill="CSS" Icon={SiCss3} color="css" />
                                <SkillCard content="Engineered performant web apps with Next.js" skill="Next js" Icon={SiVercel} color="nextjs" />
                                <SkillCard content="Improved code quality using TypeScript's static typing" skill="Typescript" Icon={SiTypescript} color="typescript" />
                                <SkillCard content="Designed responsive interfaces with Bootstrap" skill="Bootstrap" Icon={SiBootstrap} color="bootstrap" />
                                <SkillCard content="Created customizable UIs with Tailwind CSS" skill="Tailwind" Icon={SiTailwindcss} color="tailwind" />
                                <SkillCard content="Orchestrated containerized applications for deployment" skill="Docker" Icon={SiDocker} color="docker" />
                                <SkillCard content="Streamlined project workflows and managed dependencies" skill="npm" Icon={SiNpm} color="npm" />
                                <SkillCard content="Enhanced package management and build processes" skill="Yarn" Icon={SiYarn} color="yarn" />
                                <SkillCard content="Optimized JavaScript assets for faster web loading" skill="Webpack" Icon={SiWebpack} color="webpack" />
                            </div>
                        </div>

                    </div>
                </div >
            </motion.div>
    )
}

export default Skills;