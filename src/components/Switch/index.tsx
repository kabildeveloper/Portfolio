import React from "react";
import {FaMoon, FaSun} from 'react-icons/fa6';

interface SwitchProps {
    state: boolean,
    onClickListener: React.MouseEventHandler<HTMLDivElement>
}

export default function Switch({state, onClickListener}: SwitchProps) {
    return(
        <div onClick={onClickListener} className='text-2xl w-fit h-fit cursor-pointer'>
            {state ? <FaSun/> : <FaMoon/>}
        </div>
    )
}