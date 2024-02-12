'use client';

import React from 'react'
import Link from 'next/link';
import { Button, Typography } from '@material-tailwind/react';
import { globalMenus } from '@/constants';

const Navbar = () => {
    const bold = () => {
        
    }
    return (
        <div className='bg-white w-[100%] h-[100%] rounded-xl'>
            <div className='flex flex-row h-[100%] items-center justify-around'>
                <div><Typography placeholder variant="lead" className='font-bold'>Portfolio</Typography></div>
                <div className='flex flex-row'>
                    {globalMenus.map(
                        (menu, index) => (
                            <div className='px-3'>
                                <Link href={`/${menu}`} key={index}>
                                    <Typography placeholder className={ index === 0 ? 'font-bold' : ''}>
                                        {menu}
                                    </Typography>
                                </Link>
                            </div>
                            )
                    )}
                </div>
                <div><Button placeholder>연락하기</Button></div>
            </div>
            
        </div>
    )
}

export default Navbar