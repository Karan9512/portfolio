export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Experience',
        href: '#experience',
    },
    // {
    //     id: 5,
    //     name: 'Clients',
    //     href: '#clients',
    // },
    {
        id: 6,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [

    {
        title: 'School Management System',
        desc: 'The School Management Dashboard is a modern, feature-rich web application designed to simplify and enhance school operations by offering distinct functionalities tailored for four user roles: Admin, Teacher, Student, and Parent. 🎓',
        subdesc:
        'Implemented Role-Based Access Control (RBAC) with middleware for seamless user redirection, ensuring secure and efficient access for four user roles (Admin, Student, Teacher, Parent).\n' +
            'Designed a scalable architecture supporting 500+ active users daily while maintaining an uptime of 99.8%.\n' +
            'Enhanced user experience with responsive UI, achieving compatibility across 100% of devices and reducing page load time by 30%.\n' +
            'Successfully deployed the project on Vercel, enabling real-time updates and efficient online collaboration.',
        href: 'https://school-rbac.vercel.app/',
        texture: '/textures/project/school.mp4',
        logo: '/assets/school.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },

        ],
    },
    {
        title: 'BioBell - Health Management System',
        desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
        subdesc:
            'With a focus on efficiency, biobell integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
        href: 'https://biobells.vercel.app/',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [3, -7.6, 0] : isMobile ? [5, -7.1, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [1, 2, 0] : isMobile ? [3.5, 2.4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 8, 0] : isTablet ? [-12, 10, 0] : [-27, 10, 0],
        targetPosition: isSmall ? [-5, -12.5, -10] : isMobile ? [-9, -12, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Delta System',
        pos: 'Full Stack Developer (Intern)',
        duration: 'July 2024 - September 2024',
        title: "Contributed to the full-stack development of high-performance web applications using Django for the back-end and ReactJS for the front-end, collaborating with cross-functional teams, including senior developers, product managers, and designers.",
        icon: '/assets/Delta_System.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Freelancer',
        pos: 'Full Stack Developer ',
        duration: 'July 2024 - June 2024',
        title: "Delivered interactive, responsive web applications with a strong focus on UI/UX and ReactJS for seamless user experiences. Worked closely with clients to gather UI requirements, provided technical solutions, and ensured timely project delivery with a focus on user satisfaction.",
        icon: '/assets/Logo.png',
        animation: 'salute',
    },


];
