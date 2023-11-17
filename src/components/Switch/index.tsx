import React, {useState} from "react";
import { FaSun, FaMoon } from 'react-icons/fa6';
import {BsSunFill, BsSunrise} from 'react-icons/bs';
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