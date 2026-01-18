'use client';
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon, VercelLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React, { useState } from 'react';

import { ModeToggle } from '@/components/page-ui/ModeToggle';
import { HoveredLink, Menu, MenuItem } from '@/components/ui/navbar-menu';
import { cn } from '@/lib/utils';

export function Navbar() {
    return (
        <div className="relative flex w-full items-center justify-center">
            <NavbarComponent className="top-2" />
        </div>
    );
}

function NavbarComponent({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <>
            {/* Mobile Menu */}
            <div className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 md:hidden', className)}>
                <Menu setActive={setActive}>
                    <MenuItem setActive={setActive} active={active} item="Navigation">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="#landing-page">Home</HoveredLink>
                            <HoveredLink href="#experience">Experience</HoveredLink>
                            <HoveredLink href="#skills">Skills</HoveredLink>
                            <HoveredLink href="#projects">Projects</HoveredLink>
                            <HoveredLink href="#contact-me">Contact Me</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Social">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="https://github.com/spojskic" rel="noopener noreferrer" target="_blank">
                                <GitHubLogoIcon className="mr-1" /> Github
                            </HoveredLink>
                            <HoveredLink href="https://www.linkedin.com/in/mrpojskic/" rel="noopener noreferrer" target="_blank">
                                <LinkedInLogoIcon className="mr-1" /> Linkedin
                            </HoveredLink>
                            <HoveredLink href="https://twitter.com/magicpojska" rel="noopener noreferrer" target="_blank">
                                <TwitterLogoIcon className="mr-1" />
                                X/Twitter
                            </HoveredLink>
                            <HoveredLink href="https://safetpojskic.netlify.app/" rel="noopener noreferrer" target="_blank">
                                <VercelLogoIcon className="mr-1" /> Old Portfolio
                            </HoveredLink>
                        </div>
                    </MenuItem>
                    <ModeToggle />
                </Menu>
            </div>

            {/* Desktop Full-Width Navbar */}
            <nav className={cn('fixed inset-x-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border hidden md:block', className)}>
                <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
                    {/* Navigation Links */}
                    <div className="flex items-center gap-8">
                        <Link href="#landing-page" className="text-sm hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link href="#experience" className="text-sm hover:text-primary transition-colors">
                            Experience
                        </Link>
                        <Link href="#skills" className="text-sm hover:text-primary transition-colors">
                            Skills
                        </Link>
                        <Link href="#projects" className="text-sm hover:text-primary transition-colors">
                            Projects
                        </Link>
                        <Link href="#contact-me" className="text-sm hover:text-primary transition-colors">
                            Contact Me
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <Link href="https://github.com/spojskic" rel="noopener noreferrer" target="_blank" className="hover:text-primary transition-colors">
                            <GitHubLogoIcon className="w-5 h-5" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/mrpojskic/" rel="noopener noreferrer" target="_blank" className="hover:text-primary transition-colors">
                            <LinkedInLogoIcon className="w-5 h-5" />
                        </Link>
                        <Link href="https://twitter.com/magicpojska" rel="noopener noreferrer" target="_blank" className="hover:text-primary transition-colors">
                            <TwitterLogoIcon className="w-5 h-5" />
                        </Link>
                        <Link href="https://safetpojskic.netlify.app/" rel="noopener noreferrer" target="_blank" className="hover:text-primary transition-colors">
                            <VercelLogoIcon className="w-5 h-5" />
                        </Link>
                        <ModeToggle />
                    </div>
                </div>
            </nav>
        </>
    );
}
