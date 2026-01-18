'use client';

import Link from 'next/link';

import { BackgroundBeams } from '@/components/ui/background-beams';
import { Button } from '@/components/ui/button';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

const words = [
    {
        text: 'React/Next.js'
    },
    {
        text: 'and'
    },
    {
        text: 'Python'
    },
    {
        text: 'developer',
        className: 'text-blue-500 dark:text-blue-500'
    }
];

export function LandingPage() {
    return (
        <div
            id="landing-page"
            className="bg- relative flex  h-screen w-full flex-col items-center justify-center bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]"
        >
            <div className="container grid grid-cols-12 gap-4 ">
                <div className="col-span-12 flex flex-col justify-center sm:col-span-8">
                    {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black" /> */}
                    <p className="text-center text-xs text-neutral-600 dark:text-neutral-200 sm:text-left sm:text-4xl  ">
                        {' '}
                        Hello, I&apos;m <span className="text-red-500">Raymond Jefferson.</span>
                        <br /> A passionate Full-Stack Engineer.
                    </p>
                    <TypewriterEffectSmooth words={words} />
                    <div className="z-30 flex flex-col items-center space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                        <Link href="https://drive.google.com/file/d/1ZbmcZSCH25ZaFt68TvKl4LYRTOAyD11D/view?usp=sharing">
                            <Button>Download CV</Button>
                        </Link>
                        <Link href="#contact-me">
                            <Button variant="secondary">Contact Me</Button>
                        </Link>
                    </div>
                    <BackgroundBeams />
                </div>
                <div className="col-span-12 sm:col-span-4">
                    <img src="/me.png" alt="Raymond Jefferson" className="mt-10 h-auto w-full" />
                </div>
            </div>
        </div>
    );
}
