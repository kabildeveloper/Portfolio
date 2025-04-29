import Button from "@/components/Button";
import {onClickDownloadResume, onClickGithub, onClickGMail, onClickLinkedin, onClickWhatsApp} from "@/util/helper";
import {SlSocialGithub, SlSocialGoogle, SlSocialLinkedin} from "react-icons/sl";
import {FaWhatsapp} from "react-icons/fa6";
import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import styles from './Contact.module.scss';
import BorderLightEffect from "@/components/BorderLightEffect";
import Img from "next/image";
import SocialIcon from "@/components/Social";

const Contact = function () {

    const contactRef = useRef<HTMLDivElement>(null);
    const contactInView = useInView(contactRef, {
        once: true
    })

    return (
        <motion.div
            ref={contactRef}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: contactInView ? 1 : 0, y: contactInView ? 0 : 100 }}
            transition={{ duration: 1 }}
        >
            <div className={`w-full ${styles.contactParallaxSection}`}>
                <div className='flex justify-center'>
                    <div className='container flex'>
                        <div className='w-full px-16'>
                            <div className='h-full flex items-center'>
                                <h6 className='font-bold text-8xl my-12 text-shadow-md w-1/2'>
                                    Let&apos;s work together
                                </h6>
                                <div className='w-1/2'>
                                    <div className='backdrop-blur-2xl shadow-sm shadow-violet-950 rounded-xl grid grid-cols-2 gap-4 p-4 text-neutral-300'>
                                        <div className='flex items-center h-fit gap-4'>
                                            <SocialIcon bgRequired onClick={onClickLinkedin} src={'/linkedin.png'} alt={''}/>
                                            <p>https://www.linkedin.com/in/kabil-r/</p>
                                        </div>
                                        <div className='flex items-center h-fit gap-4'>
                                            <SocialIcon bgRequired onClick={onClickGithub} className='pb-1' src={'/github.png'} alt={''}/>
                                            <p>https://github.com/kabilrajendhiran</p>
                                        </div>
                                        <div className='flex items-center h-fit gap-4'>
                                            <SocialIcon onClick={onClickGMail} src={'/google.png'} alt={''}/>
                                            <p>kabildeveloper@gmail.com</p>
                                        </div>
                                        <div className='flex items-center h-fit gap-4'>
                                            <SocialIcon onClick={onClickWhatsApp} src={'/whatsApp.png'} alt={''}/>
                                            <p>https://wa.me/917904178527</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {/*<ul className='dark:text-gray-300'>
                                        <li className='flex items-center gap-4 mb-5'>
                                            <div
                                                className={`bg-pink-500 rounded shadow-lg shadow-pink-300 p-2 text-white 
                                                text-3xl cursor-pointer transition-all duration-200 hover:bg-indigo-500 
                                                hover:shadow-indigo-300 dark:bg-opacity-80 dark:shadow-none`}>
                                                <SlSocialLinkedin onClick={onClickLinkedin}/>
                                            </div>
                                            <p>
                                                Linkedin
                                            </p>
                                        </li>
                                        <li className='flex items-center gap-4 mb-5'>
                                            <div
                                                className={`bg-pink-500 rounded shadow-lg shadow-pink-300 p-2 text-white 
                                                text-3xl cursor-pointer transition-all duration-200 hover:bg-indigo-500 
                                                hover:shadow-indigo-300 dark:bg-opacity-80 dark:shadow-none`}>
                                                <SlSocialGithub onClick={onClickGithub}/>
                                            </div>
                                            <p>
                                                Github
                                            </p>
                                        </li>
                                        <li className='flex items-center gap-4 mb-5'>
                                            <div
                                                className={`bg-pink-500 rounded shadow-lg shadow-pink-300 p-2 text-white 
                                                text-3xl cursor-pointer transition-all duration-200 hover:bg-indigo-500 
                                                hover:shadow-indigo-300 dark:bg-opacity-80 dark:shadow-none`}>
                                                <SlSocialGoogle onClick={onClickGMail}/>
                                            </div>
                                            <p>
                                                Google
                                            </p>
                                        </li>
                                        <li className='flex items-center gap-4 mb-5'>
                                            <div
                                                className={`bg-pink-500 rounded shadow-lg shadow-pink-300 p-2 text-white 
                                                text-3xl cursor-pointer transition-all duration-200 hover:bg-indigo-500 
                                                hover:shadow-indigo-300 dark:bg-opacity-80 dark:shadow-none`}>
                                                <FaWhatsapp onClick={onClickWhatsApp}/>
                                            </div>
                                            <p>
                                                WhatsApp
                                            </p>
                                        </li>

                                    </ul>*/}
                                    {/*<Button onClick={onClickDownloadResume} className='mt-8' size='lg'>Download
                                        CV</Button>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact;