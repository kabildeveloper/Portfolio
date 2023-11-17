import {IconType} from "react-icons";

interface StatCardProps {
    Icon: IconType,
    text: string
}

export default function StatCard(props: StatCardProps) {
    return (
        <div
            className='bg-[#f8faff] dark:bg-gray-700 dark:text-gray-200 w-full h-[150px] flex flex-col items-center justify-center rounded-lg transition-all duration-400 hover:bg-indigo-500 hover:text-gray-50'>
            <div className='drop-shadow'>
                <props.Icon className='text-6xl '/>
            </div>
            <p className='mt-2'>{props.text}</p>
        </div>
    )
}