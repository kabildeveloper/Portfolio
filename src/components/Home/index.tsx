import ReactParallaxTilt from "react-parallax-tilt";
import {SlSocialGithub, SlSocialGoogle, SlSocialLinkedin} from 'react-icons/sl';
import Button from "@/components/Button";
import StatCard from "@/components/StatCard";
import {SiDjango, SiPostgresql, SiReact} from 'react-icons/si';
import {FaWhatsapp} from 'react-icons/fa6';
import Img from 'next/image'
import {onClickDownloadResume, onClickGithub, onClickGMail, onClickLinkedin, onClickWhatsApp} from "@/util/helper";

export default function Home() {
    return (
        <section>
            <div className='w-full flex flex-col items-center justify-center'>
                <div className='container gap-10 md:gap-0 flex flex-col-reverse md:flex-row w-full'>
                    <div className="md:w-1/2 w-full">
                        <div className='h-full flex flex-col justify-center'>
                            <p style={{letterSpacing: '2px'}} className='text-md text-gray-500'>HEY THERE !</p>
                            <h3 className='font-bold text-5xl text-blue-950 mt-4'>
                                I AM KABIL RAJENDHIRAN
                            </h3>
                            <p style={{letterSpacing: '2px'}} className='mt-4 text-black font-light text-2xl'>WEB
                                DEVELOPER</p>
                            <div className='flex gap-2 text-gray-400 items-center text-2xl mt-8 w-full'>
                                <SlSocialLinkedin onClick={onClickLinkedin}
                                                  className='hover:text-indigo-500 cursor-pointer'/>
                                <SlSocialGithub onClick={onClickGithub}
                                                className='hover:text-indigo-500 cursor-pointer'/>
                                <SlSocialGoogle onClick={onClickGMail}
                                                className='hover:text-indigo-500 cursor-pointer'/>
                                <FaWhatsapp onClick={onClickWhatsApp} className='hover:text-indigo-500 cursor-pointer'/>
                            </div>

                            <Button onClick={onClickDownloadResume} className='mt-8' size='lg'>Download CV</Button>
                            <p style={{letterSpacing: '2px'}} className='mt-16 font-bold text-lg'>KEY SKILLS</p>
                            <div className='flex gap-4 md:gap-10 justify-between mt-2 w-full'>
                                <StatCard Icon={SiReact} text='React'/>
                                <StatCard Icon={SiDjango} text='Django'/>
                                <StatCard Icon={SiPostgresql} text='Postgres'/>
                            </div>
                        </div>

                    </div>
                    <div className="md:w-1/2 w-full px-8 md:px-0">
                        <div className='flex items-center justify-center'>
                            <ReactParallaxTilt trackOnWindow tiltReverse>
                                <Img width={500} height={500} className='drop-shadow-2xl' src='/kabil.svg'
                                     alt='Kabil'/>
                            </ReactParallaxTilt>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}