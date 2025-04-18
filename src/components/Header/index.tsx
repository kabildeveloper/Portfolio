import Link from "next/link";
import {useRouter} from "next/router";
import styles from './Header.module.scss';
import {SlMenu} from 'react-icons/sl';
import {useEffect, useRef, useState} from "react";
import {useTheme} from "next-themes";
import {MENU_ITEMS} from "@/components/Header/Header.constants";

export default function Header() {

    const router = useRouter();
    const [isOpen, setOpen] = useState<boolean>(false);
    const [toggleSwitch, setToggleSwitch] = useState<boolean>(false);
    const {theme, setTheme} = useTheme();

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {

        function handleClick(event: MouseEvent) {
            if (isOpen && (event.target as Element).id !== 'hamburger') {
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

    const checkActive = (path: string) => {
        return router.pathname === path
    }

    const activeIndex = MENU_ITEMS.findIndex(item => checkActive(item.path));
    const highlighterLeft = activeIndex * 88;

    return (
        <section className={`mx-auto p-2 h-fit z-50 fixed left-0 right-0 top-4 bg-transparent shadow border-neutral-400 border w-fit dark:text-gray-300 dark:bg-opacity-100 rounded-[64px] backdrop-blur-2xl`}>
            <div className='flex justify-center items-center h-full w-full'>
                <div className='container w-full'>
                    <div className='flex items-center justify-between w-full'>
                        {/*<p className='text-2xl font-normal'>KR</p>*/}
                        <div className={`[&>*]:w-[80px] [&>*]:text-center [&>*]:rounded-[40px] gap-2 hidden md:flex ${styles.menu}`}>
                            <div
                                className={`${styles.activeHighlighter} backdrop-blur`}
                                style={{
                                    left: highlighterLeft,
                                }}
                            ></div>
                            {
                                MENU_ITEMS.map((item, i) => (
                                    <Link
                                        key={i}
                                        href={item.path}
                                        className={`py-1 px-2`}>
                                        {item.label}
                                    </Link>
                                ))
                            }
                        </div>
                        <div className='flex items-center justify-end gap-2'>
                            <div className='flex justify-end items-center md:gap-10'>
                                {/*<div className='flex gap-2 mr-10'><Switch onClickListener={switchTheme} state={toggleSwitch}/></div>*/}
                                {/*<Button className='hidden md:block' onClick={onClickDownloadResume} size='md'> Download
                                    CV
                                </Button>*/}
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
                 className={`
                 hover:[&>*]:dark:bg-gray-800 
                 bg-white 
                 dark:bg-gray-800 
                   flex flex-col 
                   shadow-lg 
                   ${isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-20'} 
                   overflow-hidden 
                   transition-all 
                   duration-300
                   ${styles.menu}
                   `}>
                <Link href='/' className={`${getActiveClass('/')} py-2 px-2 rounded hover:bg-indigo-100 text-gray-500`}>Home</Link>
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