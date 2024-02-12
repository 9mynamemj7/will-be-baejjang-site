import Image from 'next/image'
import React from 'react'
import html from '@/public/icons/html5_gray.svg';
import css from '@/public/icons/css_gray.svg';
import js from '@/public/icons/js_gray.svg';
import ts from '@/public/icons/ts_gray.svg';
import react from '@/public/icons/react_gray.svg';
import next from '@/public/icons/nextjs_gray.svg';

const Stack = () => {
    return (
        <div className="flex flex-col justify-center items-center w-[100%] h-[100%]">
            <p className='font-bold'>stacks</p>
            <Image className="py-2" src={html} alt="html" />
            <Image className="py-2" src={css} alt="css" />
            <Image className="py-2" src={js} alt="js" />
            <Image className="py-2" src={ts} alt="ts" />
            <Image className="py-2" src={react} alt="react" />
            <Image className="py-2" src={next} alt="next" />
        </div>
    )
}

export default Stack