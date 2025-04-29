import {FaArrowRight} from 'react-icons/fa';
import {IconType} from "react-icons";
import BorderLightEffect from "@/components/BorderLightEffect";

export interface ProjectCardProps {
    title: string,
    content: string,
    Icon: IconType
    link: string
    viewLink?: string
}


export default function ProjectCard(props: ProjectCardProps) {

    const onClickLearnMore = () => {
        window.open(props.link, '_blank');
    }

    const onClickView = () => {
        window.open(props.viewLink, '_blank');
    }

    return (
        <div className='w-full rounded-xl border-neutral-500 shadow-md border h-full relative'>
            <BorderLightEffect/>
            <div className='px-6 py-12'>
                <div className='flex flex-col items-center'>
                    {/*<div className='bg-pink-500  dark:text-gray-200 rounded-sm shadow-sm shadow-pink-500 p-2 text-white text-4xl'>
                        <props.Icon/>
                    </div>*/}

                    <h5 className='font-bold mt-5 mb-4 text-xl dark:text-gray-100'>
                        {props.title}
                    </h5>
                </div>
                <div>
                    <p className='dark:text-gray-300 text-justify'>
                        {props.content}
                    </p>
                </div>
                <div className='flex justify-center gap-4'>
                    {props.link && <div className='flex items-center justify-center my-4 font-medium gap-2'>
                        <p onClick={onClickLearnMore}
                           style={{borderImage: 'linear-gradient(to right, #4f46e5, #db2777)', borderImageSlice: 1}}
                           className='w-fit border-b-2 cursor-pointer'>Learn more</p>
                        <FaArrowRight className='cursor-pointer' onClick={onClickLearnMore}/>
                    </div>}

                    {props.viewLink && <div className='flex items-center justify-center my-4 font-medium gap-2'>
                        <p onClick={onClickView}
                           style={{borderImage: 'linear-gradient(to right, #4f46e5, #db2777)', borderImageSlice: 1}}
                           className='w-fit border-b-2 cursor-pointer'>View</p>
                        <FaArrowRight className='cursor-pointer' onClick={onClickView}/>
                    </div>}
                </div>

            </div>

        </div>
    )
}