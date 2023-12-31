import Button from "@/components/Button";
import {onClickDownloadResume} from "@/util/helper";
import Link from "next/link";
import {useRouter} from "next/router";
import styles from './Header.module.css';
import {SlMenu} from 'react-icons/sl';
import {useEffect, useRef, useState} from "react";
import { useTheme } from "next-themes";
import Switch from "@/components/Switch";

export default function Header() {

    const router = useRouter();
    const [isOpen, setOpen] = useState<boolean>(false);
    const [toggleSwitch, setToggleSwitch] = useState<boolean>(false);
    const {theme, setTheme} = useTheme();

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {

        function handleClick(event: MouseEvent) {
            if (isOpen && (event.target as Element).id !== 'hamburger') {
                console.log('A');
                setOpen(false);
            }
        }



        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        }
    }, [])

    useEffect(()=>{
        setToggleSwitch(theme==="dark");
    }, [theme])

    const toggleNavbar = () => {
        setOpen(!isOpen);
        console.log('B');
    }

    const switchTheme = () => {
        if(theme) {
            setTheme(theme==="dark" ? "light":"dark")
        }
    }

    const getActiveClass = (path: string): string => {
        if (router.pathname === path) {
            return styles.active
        }
        return '';
    }

    return (
        <section className={`h-[64px] z-50 border sticky top-0 bg-white bg-opacity-95 dark:bg-gray-900 dark:border-gray-900 dark:text-gray-300 dark:bg-opacity-100 w-full`}>
            <div className='flex justify-center items-center h-full w-full'>
                <div className='container w-full mx-4'>
                    <div className='flex items-center justify-between w-full'>
                        <h5 className='text-3xl font-bold'>Portfolio</h5>

                        <div className='hover:[&>*]:dark:bg-gray-700 gap-5 hidden md:flex'>
                            <Link href='/'
                                  className={`${getActiveClass('/')} py-1 px-2 rounded hover:bg-indigo-100`}>Home</Link>
                            <Link href='/about'
                                  className={`${getActiveClass('/about')} py-1 px-2 rounded hover:bg-indigo-100`}>About</Link>
                            <Link href='/skills'
                                  className={`${getActiveClass('/skills')} py-1 px-2 rounded hover:bg-indigo-100`}>Skills</Link>
                            <Link href='/projects'
                                  className={`${getActiveClass('/projects')} py-1 px-2 rounded hover:bg-indigo-100`}>Projects</Link>
                            <Link href='/contact'
                                  className={`${getActiveClass('/contact')} py-1 px-2 rounded hover:bg-indigo-100`}>Contact</Link>
                        </div>
                        <div className='flex items-center justify-end gap-2'>
                            <div className='flex justify-end items-center md:gap-10'>
                                <div className='flex gap-2 mr-10'>{toggleSwitch ? 'Dark': 'Light'} <Switch onClickListener={switchTheme} state={toggleSwitch}/></div>
                                <Button className='hidden md:block' onClick={onClickDownloadResume} size='md'> Download
                                    CV
                                </Button>
                            </div>

                            <div id='hamburger' onClick={toggleNavbar}
                                 className='border rounded w-[42px] h-[42px] flex items-center justify-center visible md:hidden'>
                                <SlMenu className='pointer-events-none'/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div ref={ref}
                 className={`hover:[&>*]:dark:bg-gray-800 bg-white dark:bg-gray-800 flex flex-col shadow-lg ${isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-20'} overflow-hidden transition-all duration-300`}>
                <Link href='/' className={`${getActiveClass('/')} py-2 px-2 rounded hover:bg-indigo-100`}>Home</Link>
                <Link href='/about'
                      className={`${getActiveClass('/about')} py-2 px-2 rounded hover:bg-indigo-100`}>About</Link>
                <Link href='/skills'
                      className={`${getActiveClass('/skills')} py-2 px-2 rounded hover:bg-indigo-100`}>Skills</Link>
                <Link href='/projects'
                      className={`${getActiveClass('/projects')} py-2 px-2 rounded hover:bg-indigo-100`}>Projects</Link>
                <Link href='/contact'
                      className={`${getActiveClass('/contact')} py-2 px-2 rounded hover:bg-indigo-100`}>Contact</Link>
            </div>
        </section>
    )
}