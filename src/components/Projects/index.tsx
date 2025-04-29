import ProjectCard from "@/components/ProjectCard";
import {motion, useInView} from "framer-motion";
import {useRef, useState} from "react";
import {PERSONAL_PROJECTS, PROFESSIONAL_PROJECTS} from "@/components/Projects/constant";
import BorderLightEffect from "../BorderLightEffect";


enum PROJECT_TYPE {
    PERSONAL = 'personal',
    PROFESSIONAL = 'professional'
}

export default function Projects() {

    const projectRef = useRef<HTMLDivElement>(null);
    const projectInView = useInView(projectRef, {
        once: true,
        amount: 0.1
    });

    const [projectType, setProjectType] = useState<PROJECT_TYPE>(PROJECT_TYPE.PROFESSIONAL);

    const onClickProjectSwitch = (type: PROJECT_TYPE) => {
        setProjectType(type);
    }

    const LEFT = projectType === PROJECT_TYPE.PROFESSIONAL ? 'left-0' : 'left-[120px]';
    const PROJECTS = projectType === PROJECT_TYPE.PERSONAL ? PERSONAL_PROJECTS : PROFESSIONAL_PROJECTS;

    return (
        <section className='w-full'>
            <div className='flex justify-center h-full'>
                <div className='px-5 md:px-28 container'>
                    <h3 className='dark:text-gray-300 text-4xl font-bold w-fit mb-16 hidden md:block font-dancing'>
                        My <span className='text-gradient'>Projects</span>
                    </h3>
                    <h3 className='dark:text-gray-300 text-4xl font-bold w-fit mb-16 block md:hidden'>
                        Professional Projects
                    </h3>

                    <div className='w-fit mx-auto mb-10 border rounded-full p-1'>
                        <div className='flex relative'>
                            <button onClick={()=>setProjectType(PROJECT_TYPE.PROFESSIONAL)} className='px-4 py-2 w-[120px] z-20'>Professional</button>
                            <button onClick={()=>setProjectType(PROJECT_TYPE.PERSONAL)} className='px-4 py-2 w-[120px] rounded-full z-20'>Personal</button>
                            <div className={`transition-all duration-300 bg-linear-to-r from-0% from-violet-500 to-100% to-pink-700 h-full rounded-full w-[120px] absolute top-0 z-10 ${LEFT}`}></div>
                        </div>
                    </div>

                    <div ref={projectRef} className='grid grid-cols-3 gap-5'>
                        {
                            PROJECTS.map((project, i) => {
                                return (
                                    <motion.div
                                        key={project.title}
                                        className='w-full col-span-1'
                                        initial={{ opacity: 0, y: 200 }}
                                        animate={{ opacity: projectInView ? 1 : 0, y: projectInView ? 0 : 100 }}
                                        transition={{ duration: 1, delay: i * 0.8 }}
                                    >
                                        <ProjectCard {...project}/>
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}