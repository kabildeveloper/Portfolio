import ReactParallaxTilt from "react-parallax-tilt";
import {SlSocialGithub, SlSocialGoogle, SlSocialLinkedin} from 'react-icons/sl';
import Button from "@/components/Button";
import {FaWhatsapp} from 'react-icons/fa6';
import Img from 'next/image'
import {onClickDownloadResume, onClickGithub, onClickGMail, onClickLinkedin, onClickWhatsApp} from "@/util/helper";
import SocialIcon from "@/components/Social";

export default function Home() {
    return (
        <section className=''>
            <div className='w-full flex flex-col items-center justify-center mt-20 md:mt-40'>
                <div className='container gap-10 md:gap-0 flex flex-col-reverse md:flex-row w-full'>
                    <div className="md:w-1/2 w-full px-8 md:px-0">
                        <div className='flex items-center justify-center'>
                            <ReactParallaxTilt trackOnWindow tiltReverse>
                                <Img width={500} height={500} className='drop-shadow-2xl dark:opacity-80'
                                     src='/kabil.svg'
                                     alt='Kabil'/>
                            </ReactParallaxTilt>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <div className='h-full flex flex-col justify-center'>
                            <p style={{letterSpacing: '2px'}}
                               className='text-md dark:text-neutral-400 text-gray-500'>Hi there </p>
                            <h3 className='font-normal text-5xl text-indigo-950 dark:text-neutral-300 mt-4 font-dancing'>
                                I&apos;m <span className='text-gradient'>Kabil</span>  Rajendhiran
                            </h3>
                            <p style={{letterSpacing: '2px'}}
                               className='mt-4 text-neutral-600 font-light dark:text-neutral-300 text-xl'>
                               Full Stack Developer
                            </p>
                            <div className='flex gap-4 text-gray-400 items-center text-2xl mt-8 w-full'>
                                <SocialIcon bgRequired onClick={onClickLinkedin} src={'/linkedin.png'} alt={''}/>
                                <SocialIcon bgRequired onClick={onClickGithub} className='pb-1' src={'/github.png'} alt={''}/>
                                <SocialIcon onClick={onClickGMail} src={'/google.png'} alt={''}/>
                                <SocialIcon onClick={onClickWhatsApp} src={'/whatsApp.png'} alt={''}/>
                            </div>

                            <Button onClick={onClickDownloadResume} className='mt-8' size='lg'>Download CV</Button>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}