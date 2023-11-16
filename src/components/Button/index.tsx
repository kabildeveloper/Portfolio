import React, {PropsWithChildren} from "react";
import styles from './Button.module.css';

interface ButtonProps extends PropsWithChildren {
    size: 'sm' | 'md' | 'lg'
    fluid?: boolean
    className?: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button(props: ButtonProps) {

    let classNames = '';

    if (!props.size || props.size === 'md') {
        classNames += 'py-2 px-4'
    }

    if (props.size === 'lg') {
        classNames += 'py-3 px-6'
    }

    if (!props.fluid) {
        classNames += ' w-fit';
    }

    if (props.className) {
        classNames += ` ${props.className}`
    }

    return (
        <button onClick={props.onClick} className={`rounded-md text-white font-medium ${classNames} ${styles.button}`}>
            {props.children}
        </button>
    )
}