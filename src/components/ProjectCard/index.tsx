import {FaArrowRight} from 'react-icons/fa';
import {IconType} from "react-icons";

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
        <div className='w-full rounded bg-[#f8faff] dark:bg-gray-700'>
            <div className='px-6 py-12'>
                <div className='flex flex-col items-center'>
                    <div className='bg-pink-500 dark:bg-opacity-70 dark:shadow-none dark:text-gray-200 rounded shadow-lg shadow-pink-300 p-2 text-white text-4xl'>
                        <props.Icon/>
                    </div>

                    <h5 className='font-bold mt-5 mb-4 text-xl dark:text-gray-100'>
                        {props.title}
                    </h5>
                </div>
                <div className='px-6'>
                    <p className='text-left dark:text-gray-300'>
                        {props.content}
                    </p>
                </div>
                <div className='flex justify-center gap-4'>
                    <div className='flex items-center justify-center my-4 font-medium gap-2'>
                        <p onClick={onClickLearnMore}
                           style={{borderImage: 'linear-gradient(to right, #4f46e5, #db2777)', borderImageSlice: 1}}
                           className='w-fit border-b-2 cursor-pointer'>Learn more</p>
                        <FaArrowRight className='cursor-pointer' onClick={onClickLearnMore}/>
                    </div>

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