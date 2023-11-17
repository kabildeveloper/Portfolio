import Img from 'next/image';
import Button from "@/components/Button";
import {onClickDownloadResume} from "@/util/helper";
import {useRef} from "react";
import {useInView, motion} from "framer-motion";

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
                    <div className='container flex flex-col md:flex-row'>
                        <div
                            className={`${props.fromHome ? 'hidden' : ''} mx-10 mb-20 md:mb-0 md:block md:w-1/2 md:px-16 dark:opacity-80`}>
                            <Img alt='Kabil' width={100} height={100} className='w-full' src='/kabil1.svg'/>
                        </div>
                        <div className='w-full px-5 md:w-1/2 md:px-16'>
                            <div className='h-full flex items-center'>
                                <div>
                                    <h6 className='font-bold text-4xl mb-8 border-violet-500 border-b-2 w-fit dark:text-gray-300'>ABOUT ME</h6>
                                    <p className='text-left dark:text-gray-300' style={{letterSpacing: '1px'}}>Highly skilled and
                                        results-driven React.js, Next.js, and Django developer with 2.5 years of
                                        experience in creating dynamic
                                        web applications and delivering top-notch solutions. Adept at leveraging
                                        cutting-edge technologies to build robust and
                                        responsive web interfaces. Proven ability to collaborate effectively in
                                        cross-functional teams and meet project deadlines.
                                        Seeking opportunities to contribute my expertise to innovative projects and help
                                        drive web development excellence.
                                    </p>
                                    <Button onClick={onClickDownloadResume} className='mt-8' size='lg'>Download
                                        CV</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default About;