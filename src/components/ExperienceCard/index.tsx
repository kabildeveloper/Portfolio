import {ExperienceInterface} from "@/components/Experience/interfaces";


const ExperienceCard = (props: ExperienceInterface) => {

    return (
        <div className='backdrop-blur-2xl border-neutral-500 border p-4 rounded-lg mx-4 my-4'>
            <h6 className='text-xl font-bold text-neutral-300'>{props.companyName}</h6>
            <p className='text-gradient'>
                {props.position}
            </p>
            <ul className='mt-2 text-neutral-300 text-sm ms-4 list-disc [&>li]:mb-2'>
                {
                    props.work.map((work, index) => (
                        <li key={index}>
                            {work}
                        </li>        
                    ))
                }
            </ul>
        </div>
    )


}

export default ExperienceCard;