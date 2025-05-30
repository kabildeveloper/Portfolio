import {useEffect, useRef} from "react";
import {motion, useInView} from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";
import {ExperienceDetails} from "@/components/Experience/interfaces";
import {EXPERIENCES} from "@/components/Experience/constants";



const Experience = function () {
    const experienceRef = useRef<HTMLDivElement>(null);
    const experienceInView = useInView(experienceRef, {
        once: true,
    });

    useEffect(() => {
        console.log(experienceInView);
    }, [experienceInView]);



    return (
        <motion.div
            ref={experienceRef}
            className='w-full'
            initial={{opacity: 0, y: 200}}
            animate={{opacity: experienceInView ? 1 : 0, y: experienceInView ? 0 : 200}}
            transition={{duration: 1}}
        >
            <section className='mx-auto px-5 container'>
                <h3 className='dark:text-gray-300 text-4xl font-bold w-full text-center mb-12 hidden md:block font-dancing'>
                    My <span className='text-gradient'>Experience</span>
                </h3>

                {
                    EXPERIENCES.map((experience: ExperienceDetails, i: number) => {
                        return(
                            <div key={experience.companyName} className='grid grid-cols-2'>
                                <div
                                    className={`border-r-2 col-span-1 border-violet-500 min-h-[100px] relative`}
                                >
                                    {i%2===1 && <ExperienceCard {...experience} />}
                                    <div className='absolute vertically-center-absolute right-[-11px] rounded-full border-2 border-violet-500 p-1 bg-black'>
                                        <div className='w-[12px] h-[12px]  bg-violet-500 rounded-full'></div>
                                        <p className={`absolute vertically-center-absolute ${i%2===0 ? 'right-[42px]' : 'left-[42px]'} text-4xl text-gradient font-dancing whitespace-nowrap`}>{experience.duration}</p>
                                    </div>

                                </div>
                                <div className={`col-span-1 min-h-[100px]`}>
                                    {i%2===0 && <ExperienceCard {...experience} />}
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </motion.div>
    )
}

export default Experience;