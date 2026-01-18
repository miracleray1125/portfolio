'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { TracingBeam } from '@/components/ui/tracing-beams';

export function ExperienceSection() {
    return (
        <>
            <h1 id="experience" className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                Experience
            </h1>
            <TracingBeam className="px-6">
                <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
                    {experience.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
                            <h2 className={twMerge('text-xl text-black dark:text-white')}>{item.title}</h2>
                            <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">{item.badge}</span>
                            <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">{item.description}</div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </>
    );
}

const experience = [
    {
        title: 'UPlineSoft',
        description: (
            <ul className="list-disc">
                <li>Worked in a distributed Agile/Scrum team with 20 members.</li>
                <li>Created scripts and microservices using Node.js to be used by core products.</li>
                <li>Led the development and successful deployment of a scalable, high-traffic e-commerce platform using React and Next.js, efficiently integrating AWS services to seamlessly handle over 50,000 active users monthly.</li>
                <li>Integrated Stripe API for mobile application payment system.</li>
                <li>Set up a new architecture and moved 100% of the codebase to clear the technical debt.</li>
                <li>Developed unit tests using Jest and React testing library for React components and integration tests using Cypress to test the functionality's end-to-end (E2E) flow.</li>
                <li>Created the front-end elements using Headless UI for a chatbot application.</li>
                <li>Implemented and deployed several algorithms (classification, clustering, NLP, and computer vision) for different use cases.</li>
            </ul>
        ),
        badge: 'Senior Full-Stack Engineer/Jan 2025 - Present'
    },
    {
        title: 'WebFX',
        description: (
            <ul className="list-disc">
                <li>Redesigned existing design system components following the design team guidelines (Next.js).</li>
                <li>Collaborated with startups on establishing their data infrastructure, discipline, and teams.</li>
                <li>Integrated Firebase with Python-based serverless functions for data processing, validation, and background tasks.</li>
                <li>Rebuilt key business pages from scratch using Tailwind CSS for layout and interactions.</li>
                <li>Built dynamic data filters (dropdowns, checkboxes, inputs, sliders) to analyze and pivot market data charts.</li>
                <li>Consulted with customers and cross-functional teams on project status, proposals, and system design issues.</li>
                <li>Analyzed user needs and software requirements to determine the feasibility of design within time and cost constraints.</li>
                <li>Wrote unit and end-to-end tests using Jest to ensure that the APIs are working as expected.</li>
                <li>Collaborated with the design team to build new React components and define requirements.</li>
            </ul>
        ),
        badge: 'Full Stack Developer/Feb 2024 – Dec 2024'
    },
    {
        title: 'CivicPlus',
        description: (
            <ul className="list-disc">
                <li>Managed complex application states and facilitated centralized data flow, ensuring consistent and efficient state management across the application, resulting in a 15% decrease in reported bugs.</li>
                <li>Improved SEO and performance (~8.5%) of the official website and other public pages using Next.js, resulting in a 35% increase in conversion rate which is +30 seconds in average session duration.</li>
                <li>Collaborated cross-functionally to ensure efficient communication channels between users and support staff, resulting in a 25% reduction in response times for customer inquiries.</li>
                <li>Developed complex nested components for reuse, improving code maintainability and scalability by 22%.</li>
                <li>Utilized TypeScript's strong typing system to enhance code reliability and maintainability, reducing runtime errors by 35%.</li>
                <li>Initiated and led the integration of React Testing Library in the development process, reducing bugs at deployment by 40%.</li>
                <li>Refactored the website to boost SEO performance, ensuring better discoverability and increased organic traffic.</li>
            </ul>
        ),
        badge: 'Senior Next.js Developer/Api 2022 - Jan 2024'
    },
    {
        title: 'SevOne',
        description: (
            <ul className="list-disc">
                <li>Developed web components for a life science platform using HTML5, CSS3, Bootstrap, JavaScript, and jQuery, contributing to a 20% increase in user engagement.</li>
                <li>Collaborated with designers and backend developers to implement user interfaces for web applications, leading to the successful deployment of 6 new features.</li>
                <li>Responsible for creating efficient designs and developing user interaction screens using HTML5, CSS3, FLEXBOX, JavaScript, jQuery, and JSON, resulting in a 15% improvement in user satisfaction.</li>
                <li>Worked on UI/UX design implementations using Figma and React, ensuring high fidelity to design prototypes and improved user experience.</li>
                <li>Implemented video popups and playlists in web pages using HTML5 features, enhancing the user experience and increasing video engagement by 18%.</li>
                <li>Created multiple reusable components and services using Angular 13 built-in and custom directives, reducing development time by 30% on subsequent projects.</li>
            </ul>
        ),
        badge: 'Junior Frontend Developer/Jun 2020 - May 2022'
    },
    {
        title: 'Athennian',
        description: (
            <ul className="list-disc">
                <li>Contributed to building an education platform using Laravel and JavaScript, featuring user registration, forums, and progress tracking.</li>
                <li>Fixed UI bugs and optimized CSS for improved cross-browser compatibility and responsiveness.</li>
                <li>Integrated REST APIs for user authentication and data retrieval.</li>
                <li>Assisted in creating reusable UI components to streamline development.</li>
                <li>Enhanced page load times by identifying and fixing performance bottlenecks.</li>
                <li>Collaborated with backend developers to ensure seamless data flow.</li>
                <li>Conducted basic testing to verify functionality and identify bugs.</li>
                <li>Gained experience in JavaScript frameworks and debugging tools.</li>
            </ul>
        ),
        badge: 'Web Developer/Sep 2018 - Mar 2020'
    }
];
