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
                <div className='mx-auto max-w-[800px] shadow-violet-600 shadow border-neutral-500 border p-8 rounded-2xl flex items-center'>
                    <div>
                        <h6 className='font-dancing font-bold text-4xl mb-4 dark:text-gray-300 whitespace-nowrap text-center'>About Me</h6>
                        <p className='text-left dark:text-gray-300 text-neutral-600 font-light' style={{letterSpacing: '1px'}}>Highly skilled and
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
        </motion.section>
    )
}

export default About;