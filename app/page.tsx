'use client';

import React, { useRef, useLayoutEffect } from 'react';
import Image from "next/image";
import Profile from '@/app/Profile/page';
import Project from '@/app/Projects/page';
import Info from '@/app/Info/page';
import backgroundImage from "@/public/images/bg.jpg";
import trebleClef from "@/public/images/treble-clef.svg";
import musicScore from "@/public/images/music_score.svg";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const component = useRef<HTMLDivElement>(null);
    const slider = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray(".panel");
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: true,
                    invalidateOnRefresh: true,
                }
            });
        }, component);
        return () => ctx.revert();
    });
    // bg-[url('/images/bg.jpg')]
    return (
        <main className="min-h-screen">
            <div ref={component}>
                <div>
                    <div ref={slider} className="flex w-[400vw] h-[100vh] ">
                        <div className="panel w-[200vw] h-[200vh] bg-[url('/images/bg.jpg')]">
                            <Profile />
                        </div>
                        <div className='panel w-[200vw] bg-gradient-to-r from-[rgb(223,227,226)] to-blue-500'>
                        </div>
                    </div>
                    <div>
                        finish
                    </div>
                </div>
            </div>
        </main>
    );
}
