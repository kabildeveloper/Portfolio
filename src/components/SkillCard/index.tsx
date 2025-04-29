"use client";
import {IconType} from "react-icons";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

type SkillColor =
    | 'react'
    | 'django'
    | 'postgres'
    | 'python'
    | 'javascript'
    | 'html'
    | 'css'
    | 'nextjs'
    | 'typescript'
    | 'bootstrap'
    | 'tailwind'
    | 'docker'
    | 'npm'
    | 'yarn'
    | 'webpack';


interface SkillCardProps {
    color: SkillColor,
    skill: string,
    Icon: IconType,
    content: string
}

export default function SkillCard(props: SkillCardProps) {

    const iconColor = new Map<string, string>();
    iconColor.set('react', 'text-sky-400');         // React
    iconColor.set('django', 'text-green-700');      // Django
    iconColor.set('postgres', 'text-blue-300');     // PostgreSQL
    iconColor.set('python', 'text-blue-500');       // Python (updated to blue)
    iconColor.set('javascript', 'text-yellow-400'); // JavaScript
    iconColor.set('html', 'text-orange-600');       // HTML
    iconColor.set('css', 'text-indigo-500');        // CSS
    iconColor.set('nextjs', 'text-black');       // Next.js
    iconColor.set('typescript', 'text-blue-600');   // TypeScript
    iconColor.set('bootstrap', 'text-purple-600');  // Bootstrap
    iconColor.set('tailwind', 'text-sky-500');      // Tailwind CSS
    iconColor.set('docker', 'text-blue-500');       // Docker
    iconColor.set('npm', 'text-red-600');           // npm
    iconColor.set('yarn', 'text-cyan-600');         // Yarn
    iconColor.set('webpack', 'text-sky-600');       // Webpack

    return (
        <div className='border-neutral-500 border px-4 py-2 rounded-full text-neutral-300 shadow-sm flex items-center bg-white/10 backdrop-blur-2xl'>
            <props.Icon className={`mr-2 ${iconColor.get(props.color)}`}/>
            <p>{props.skill}</p>
        </div>
    )
}