import {SlSocialGithub, SlSocialGoogle, SlSocialLinkedin} from "react-icons/sl";
import {FaWhatsapp} from "react-icons/fa6";
import Button from "@/components/Button";
import {onClickDownloadResume, onClickGithub, onClickGMail, onClickLinkedin, onClickWhatsApp} from "@/util/helper";
import Link from "next/link";

export default function Footer() {

    return (
        <section className='w-full bg-gray-800 text-gray-100'>
            <div className='flex justify-center h-full'>
                <div className='container px-5 md:px-28 mt-16'>
                    <div className='flex gap-5 flex-col md:gap-10 md:flex-row items-center md:items-start'>
                        <div className='h-fit text-center md:text-left w-full'>
                            <h5 className='text-3xl text-pink-600 font-bold'>Portfolio</h5>
                            <p className='mt-2'>Kabil Rajendhiran</p>
                            <div
                                className='flex gap-1 text-white justify-center md:justify-start items-center text-2xl mt-2'>
                                <div
                                    className='flex w-[36px] h-[36px] bg-transparent items-center justify-center rounded hover:bg-pink-500'>
                                    <SlSocialLinkedin onClick={onClickLinkedin} className='cursor-pointer'/>
                                </div>
                                <div
                                    className='flex w-[36px] h-[36px] bg-transparent items-center justify-center rounded hover:bg-pink-500'>
                                    <SlSocialGithub onClick={onClickGithub} className='cursor-pointer'/>
                                </div>
                                <div
                                    className='flex w-[36px] h-[36px] bg-transparent items-center justify-center rounded hover:bg-pink-500'>
                                    <SlSocialGoogle onClick={onClickGMail} className='cursor-pointer'/>
                                </div>
                                <div
                                    className='flex w-[36px] h-[36px] bg-transparent items-center justify-center rounded hover:bg-pink-500'>
                                    <FaWhatsapp onClick={onClickWhatsApp} className='cursor-pointer'/>
                                </div>
                            </div>
                        </div>
                        <div className='w-full text-center md:text-left'>
                            <h6 className='text-lg font-medium text-pink-500 mb-2'>Quick Links</h6>
                            <ul className='hover:[&>*>a]:text-pink-500'>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/about'>About</Link></li>
                                <li><Link href='/skills'>Skills</Link></li>
                                <li><Link href='/projects'>Projects</Link></li>
                                <li><Link href='/contact'>Contact</Link></li>
                            </ul>
                        </div>
                        <div className='w-full text-center md:text-left'>
                            <h6 className='text-lg font-medium text-pink-500 mb-2'>Credits</h6>
                            <ul className='hover:[&>*>a]:text-pink-500'>
                                <li><Link target='_blank' href='https://react.dev/'>React</Link></li>
                                <li><Link target='_blank' href='https://tailwindcss.com/'>Tailwind</Link></li>
                                <li><Link target='_blank' href='https://nextjs.org/'>NextJs</Link></li>
                                <li><Link target='_blank' href='https://react-icons.github.io/react-icons/'>React
                                    icons</Link></li>
                                <li><Link target='_blank' href='https://fontawesome.com/'>Font Awesome</Link></li>
                                <li><Link target='_blank' href='https://thesabbir.github.io/simple-line-icons/'>Simple
                                    Line Icons</Link></li>
                                <li><Link target='_blank' href='https://simpleicons.org/'>Simple Icons</Link></li>
                            </ul>
                        </div>
                        <div className='w-full'>
                            <Button onClick={onClickDownloadResume} className='mt-4 h-fit w-full md:w-fit' size='lg'>Download
                                CV</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-8 text-center bg-gray-800'>
                <p><a href='mailto:kabildeveloper@gmail.com' className='text-pink-500'>Kabil Rajendhiran</a>©2023 All
                    rights reserved</p>
            </div>
        </section>
    )
}