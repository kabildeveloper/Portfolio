import {FaArrowRight} from 'react-icons/fa';
import {IconType} from "react-icons";

export interface ProjectCardProps {
    title: string,
    content: string,
    Icon: IconType
    link: string
}


export default function ProjectCard(props: ProjectCardProps) {

    const onClickLearnMore = () => {
        window.open(props.link, '_blank');
    }

    return (
        <div className='w-full rounded bg-[#f8faff]'>
            <div className='px-6 py-12'>
                <div className='flex flex-col items-center'>
                    <div className='bg-pink-500 rounded shadow-lg shadow-pink-300 p-2 text-white text-4xl'>
                        <props.Icon/>
                    </div>

                    <h5 className='font-bold mt-5 mb-4 text-xl group-hover:text-gray-50'>
                        {props.title}
                    </h5>
                </div>
                <div className='px-6'>
                    <p className='text-justify'>
                        {props.content}
                    </p>
                </div>
                <div className='flex items-center justify-center my-4 font-medium gap-2'>
                    <p onClick={onClickLearnMore}
                       style={{borderImage: 'linear-gradient(to right, #4f46e5, #db2777)', borderImageSlice: 1}}
                       className='w-fit border-b-2 cursor-pointer'>Learn more</p>
                    <FaArrowRight className='cursor-pointer' onClick={onClickLearnMore}/>
                </div>
            </div>

        </div>
    )
}