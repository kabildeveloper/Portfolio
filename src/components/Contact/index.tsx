import Img from 'next/image';
import Button from "@/components/Button";
import {onClickDownloadResume, onClickGithub, onClickGMail, onClickLinkedin, onClickWhatsApp} from "@/util/helper";
import {SlSocialGithub, SlSocialGoogle, SlSocialLinkedin} from "react-icons/sl";
import {FaWhatsapp} from "react-icons/fa6";
import {useRef} from "react";
import {useInView, motion} from "framer-motion";

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
            <div className='w-full'>
                <div className='flex justify-center'>
                    <div className='container flex'>
                        <div className='hidden w-0 md:block md:w-1/2 md:px-16'>
                            <Img alt='Kabil' width={100} height={100} className='w-full' src='/vector1.svg'/>
                        </div>
                        <div className='w-full md:w-1/2 px-16'>
                            <div className='h-full flex items-center'>
                                <div>
                                    <h6 className='font-bold text-4xl mb-12 border-violet-500 border-b-2 w-fit'>CONTACT
                                        ME</h6>
                                    <ul>
                                        <li className='flex items-center gap-4 mb-5'>
                                            <div
                                                className='bg-pink-500 rounded shadow-lg shadow-pink-300 p-2 text-white text-3xl cursor-pointer transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-300'>
                                                <SlSocialLinkedin onClick={onClickLinkedin}/>
                                            </div>
                                            <p>
                                                Linkedin
                                            </p>
                                        </li>
                                        <li className='flex items-center gap-4 mb-5'>
                                            <div
                                                className='bg-pink-500 rounded shadow-lg shadow-pink-300 p-2 text-white text-3xl cursor-pointer transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-300'>
                                                <SlSocialGithub onClick={onClickGithub}/>
                                            </div>
                                            <p>
                                                Github
                                            </p>
                                        </li>
                                        <li className='flex items-center gap-4 mb-5'>
                                            <div
                                                className='bg-pink-500 rounded shadow-lg shadow-pink-300 p-2 text-white text-3xl cursor-pointer transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-300'>
                                                <SlSocialGoogle onClick={onClickGMail}/>
                                            </div>
                                            <p>
                                                Google
                                            </p>
                                        </li>
                                        <li className='flex items-center gap-4 mb-5'>
                                            <div
                                                className='bg-pink-500 rounded shadow-lg shadow-pink-300 p-2 text-white text-3xl cursor-pointer transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-300'>
                                                <FaWhatsapp onClick={onClickWhatsApp}/>
                                            </div>
                                            <p>
                                                WhatsApp
                                            </p>
                                        </li>

                                    </ul>
                                    <Button onClick={onClickDownloadResume} className='mt-8' size='lg'>Download
                                        CV</Button>
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