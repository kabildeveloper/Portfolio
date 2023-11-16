import {IconType} from "react-icons";

interface SkillCardProps {
    color: 'sky' | 'green' | 'blue' | 'orange' | 'pink' | 'yellow' | 'violet' | 'indigo',
    skill: string,
    Icon: IconType,
    content: string
}

export default function SkillCard(props: SkillCardProps) {

    let colorVariants = new Map<string, string>();
    colorVariants.set('sky', 'shadow-sky-300 border-sky-500 bg-gradient-to-br from-sky-400 to-sky-500');
    colorVariants.set('green', 'shadow-green-400 border-green-600 bg-gradient-to-br from-green-500 to-green-600');
    colorVariants.set('blue', 'shadow-blue-400 border-blue-600 bg-gradient-to-br from-blue-500 to-blue-600');
    colorVariants.set('orange', 'shadow-orange-300 border-orange-500 bg-gradient-to-br from-orange-400 to-orange-500');
    colorVariants.set('pink', 'shadow-pink-300 border-pink-500 bg-gradient-to-br from-pink-400 to-pink-500');
    colorVariants.set('indigo', 'shadow-indigo-300 border-indigo-500 bg-gradient-to-br from-indigo-400 to-indigo-500');
    colorVariants.set('yellow', 'shadow-yellow-200 border-yellow-400 bg-gradient-to-br from-yellow-300 to-yellow-400');
    colorVariants.set('violet', 'shadow-violet-300 border-violet-500 bg-gradient-to-br from-violet-400 to-violet-500');


    let className = '' + colorVariants.get(props.color);

    return (
        <div className='bg-white border-gray-100 border rounded-lg shadow-lg w-full px-6 py-6 flex gap-4 items-center'>
            <div
                className={className + ' rounded-full shadow-lg border min-w-[60px] w-[60px] h-[60px] flex flex-col items-center justify-center'}>
                <div className='drop-shadow'>
                    <props.Icon className='text-3xl text-white'/>
                </div>
            </div>

            <div style={{borderLeft: '1px solid #cbcbcb'}} className='h-full ps-6 flex flex-col justify-center'>
                <h6 className='font-bold'>{props.skill}</h6>
                <p>{props.content}</p>
            </div>
        </div>

    )
}