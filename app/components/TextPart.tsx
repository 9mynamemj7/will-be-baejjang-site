'use client';

import React from 'react';
import { Typography } from '@material-tailwind/react';
import { IInfo } from "@/types";

interface ITextPart {
    info: IInfo
}

const TextPart = ({ info }: ITextPart) => {
    return (
        <div className="flex flex-col text-center">
            <Typography placeholder className='font-bold leading-10'>{info.nickName}</Typography>
            <Typography placeholder className='leading-10'>{info.position}</Typography>
            <Typography placeholder>{info.email}</Typography>
        </div>
    )
}

export default TextPart