import {ExperienceInterface} from "@/components/Experience/interfaces";
import {motion, useInView} from "framer-motion";
import {useRef} from "react";
import BorderLightEffect from "@/components/BorderLightEffect";


const ExperienceCard = (props: ExperienceInterface) => {

    const experienceRef = useRef<HTMLDivElement>(null);
    const experienceInView = useInView(experienceRef, {
        once: true,
    });

    return (
        <motion.div
            ref={experienceRef}
            className='w-full'
            initial={{opacity: 0, y: 200}}
            animate={{opacity: experienceInView ? 1 : 0, y: experienceInView ? 0 : 200}}
            transition={{duration: 1}}
        >
        <div className='backdrop-blur-2xl border-neutral-500 border p-4 rounded-lg mx-6 my-4 relative'>
            <BorderLightEffect/>
            <h6 className='text-xl font-bold text-neutral-300'>{props.companyName}</h6>
            <p className='text-gradient'>
                {props.position}
            </p>
            <ul className='mt-2 text-neutral-300 text-sm ms-4 list-disc [&>li]:mb-2'>
                {
                    props.work.map((work, index) => (
                        <li key={index}>
                            {work}
                        </li>        
                    ))
                }
            </ul>
        </div>
        </motion.div>
    )


}

export default ExperienceCard;