import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export const useCustomGSAP = () => {
    const container = useRef<HTMLDivElement>(null);
    const section = useRef<HTMLDivElement>(null);
    const test = gsap.utils.toArray(section);

    useGSAP(() => {
        gsap.to(section, {
            ease: "none",
            xPercent: 100 * ( test.length - 1 ),
            scrollTrigger: {
                trigger: container.current,
                pin: true,
                scrub: 1,
                snap: 1 / (test.length - 1),
                end: "+=600"
            }
        });
    }, { scope: container });

    return section;
}
