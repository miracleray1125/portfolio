import React from 'react';

import { HeroParallax } from '@/components/ui/hero-paralax';

export function ProjectsSection() {
    return <HeroParallax products={products} />;
}

const products = [
    {
        title: 'UPlineSoft',
        link: 'https://UPlineSoft.com',
        thumbnail: '/projects/UPlineSoft.png'
    },
    {
        title: 'WebFX',
        link: 'https://WebFX.com',
        thumbnail: '/projects/WebFX.png'
    },
    {
        title: 'CivicPlus',
        link: 'https://CivicPlus.com',
        thumbnail: '/projects/CivicPlus.png'
    },

    {
        title: 'SevOne',
        link: 'https://SevOne.com',
        thumbnail: '/projects/SevOne.png'
    },
    {
        title: 'Athennian',
        link: 'https://Athennian.com',
        thumbnail: '/projects/Athennian.png'
    },
    {
        title: 'Global Boost',
        link: 'https://globalboo.st',
        thumbnail: '/projects/Global Boost.png'
    },

];
