import ProjectCard, {ProjectCardProps} from "@/components/ProjectCard";
import {SiBookstack} from 'react-icons/si';
import {FaChartSimple, FaGitAlt} from 'react-icons/fa6';
import {useInView, motion} from "framer-motion";
import {useRef} from "react";

export default function Projects() {

    const gitWind: ProjectCardProps = {
        title: 'Git Wind',
        content: 'GitWind is an Open-Source productivity application aimed at assisting developers in managing multiple Git accounts effortlessly. I have used Electron + React js and some other 3rd party libraries to complete this project.',
        link: 'https://github.com/kabildeveloper/GitWind',
        Icon: FaGitAlt
    }

    const dashBoard: ProjectCardProps = {
        title: 'Dashboard POC',
        content: ' I proudly feature a Proof of Concept (POC) showcasing my proficiency in building dynamic and interactive web applications using React.js and react-charts-js. This dashboard effectively visualizes data through responsive (All desktop sizes) and reusable components, seamlessly integrating a chosen charting library for compelling data representations',
        link: 'https://github.com/kabilrajendhiran/dashboard-app',
        viewLink: 'https://dashboard-colorful.netlify.app/',
        Icon: FaChartSimple
    }

    const examSeatingArrangement: ProjectCardProps = {
        title: 'Exam Seating Arrangement',
        content: 'A semi-automatic exam seating arrangement project aims to enhance the efficiency and fairness of exam logistics. By combining automated algorithms with manual intervention, the system can adapt to various constraints and ensure a smooth examination process.',
        link: 'https://github.com/kabilrajendhiran/examseatingarrangement',
        Icon: SiBookstack
    }

    const projectRef = useRef<HTMLDivElement>(null);
    const projectInView = useInView(projectRef, {
        once: true,
        amount: 0.1
    });


    return (
        <section className='w-full'>
            <div className='flex justify-center h-full'>
                <div className='px-5 md:px-28 container'>
                    <h3 className='dark:text-gray-300 text-4xl font-bold w-fit mb-16 hidden md:block font-dancing'>
                        My Personal <span className='text-gradient'>Projects</span>
                    </h3>
                    <h3 className='dark:text-gray-300 text-4xl font-bold w-fit mb-16 block md:hidden'>
                        Projects
                    </h3>

                    <div ref={projectRef} className='flex flex-col md:flex-row gap-5 md:gap-10'>
                        <motion.div
                            className='w-full'
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: projectInView ? 1 : 0, y: projectInView ? 0 : 100 }}
                            transition={{ duration: 1 }}
                        >
                            <ProjectCard {...gitWind}/>
                        </motion.div>
                        <motion.div
                            className='w-full'
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: projectInView ? 1 : 0, y: projectInView ? 0 : 100 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            <ProjectCard {...dashBoard}/>
                        </motion.div>
                        <motion.div
                            className='w-full'
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: projectInView ? 1 : 0, y: projectInView ? 0 : 100 }}
                            transition={{ duration: 1, delay: 1.6}}
                        >
                            <ProjectCard {...examSeatingArrangement}/>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}