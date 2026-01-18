'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const HeroParallax = ({
    products
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
}) => {
    const ImgRow = products.slice(0, 9);
    // const secondRow = products.slice(3, 6);
    // const thirdRow = products.slice(6, 9);
    const ref = React.useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: ref,
    //     offset: ['start start', 'end start']
    // });

    // const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 600]), springConfig);
    // const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -600]), springConfig);
    // const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    // const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
    // const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
    // const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
    return (
        <div
            id="projects"
            ref={ref}
            className="container relative mx-auto flex flex-col self-auto overflow-hidden antialiased [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div>
                <motion.div className="mb-20 grid grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:grid-cols-3">
                    {ImgRow.map((product) => (
                        <ProductCard product={product} key={product.title} />
                    ))}
                </motion.div>
                {/* <motion.div className="mb-20 flex  flex-row space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard product={product}  key={product.title} />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse">
                    {thirdRow.map((product) => (
                        <ProductCard product={product}  key={product.title} />
                    ))}
                </motion.div> */}
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="relative left-0 top-0 mx-auto w-full max-w-5xl px-4 py-10  pt-20">
            <h1 className="text-2xl font-bold dark:text-white md:text-7xl">Projects</h1>
        </div>
    );
};

export const ProductCard = ({
    product
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
    };
}) => {
    return (
        <motion.div
            whileHover={{
                y: -20
            }}
            key={product.title}
            className="group/product h-120 relative shrink-0"
        >
            <Link href={product.link} className="block group-hover/product:shadow-2xl">
                <Image src={product.thumbnail} className="mt-10 h-auto w-full" alt={product.title} width={400} height={300} />
            </Link>
            <div className="pointer-events-none absolute inset-0 size-full bg-black opacity-0 group-hover/product:opacity-80"></div>
            <h2 className="absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100">{product.title}</h2>
        </motion.div>
    );
};
