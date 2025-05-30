import Img from 'next/image';
import Button from "@/components/Button";
import {onClickDownloadResume} from "@/util/helper";
import {useRef} from "react";
import {motion, useInView} from "framer-motion";

interface AboutProps {
    fromHome?: boolean
}

const About = function (props: AboutProps) {

    const aboutRef = useRef<HTMLDivElement>(null);
    const aboutInView = useInView(aboutRef, {
        once: true,
    });

    return (
        <motion.section
            ref={aboutRef}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 100 }}
            transition={{ duration: 1 }}
        >
            <div className='w-full'>
                <div className='flex justify-center'>
                    <div className='container my-20 flex flex-col md:flex-row-reverse'>
                        <div className='w-full px-5 md:w-1/2 '>
                            <div className='h-full flex items-center'>
                                <div className='border p-6 border-neutral-400 shadow-md backdrop-blur-2xl rounded-xl relative'>
                                    <h6 className='font-dancing font-bold text-4xl mb-6 mt-2 text-center  text-neutral-300'>
                                        <span className='text-gradient'>About</span> Me</h6>
                                    <p className='text-left tracking-wider text-lg text-neutral-300'>Highly skilled and
                                        results-driven React.js, Next.js, and Django developer with 2.5 years of
                                        experience in creating dynamic
                                        web applications and delivering top-notch solutions. Adept at leveraging
                                        cutting-edge technologies to build robust and
                                        responsive web interfaces. Proven ability to collaborate effectively in
                                        cross-functional teams and meet project deadlines.
                                        Seeking opportunities to contribute my expertise to innovative projects and help
                                        drive web development excellence.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`${props.fromHome ? 'hidden' : ''} mx-10 mb-20 md:mb-0 md:block md:w-1/2 dark:opacity-80`}>
                            <Img alt='Kabil' width={100} height={100} className='w-[80%]' src='/kabil1.svg'/>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default About;