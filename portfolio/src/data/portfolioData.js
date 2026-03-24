// Portfolio Data - Customize this file with your information

export const personalInfo = {
    name: "Mugilvannan R",
    role: "Junior Web Developer",
    tagline: "Passionate about creating beautiful, functional, and user-centered digital experiences",
    email: "mugilvannan1129@gmail.com",
    phone: "+91 9500942911",
    location: "145/5, Ratchana Illam, Rana Nagar, Mettur Road, Bhavani, Tamil Nadu – 638301",

    // Social Links
    social: {
        github: "https://github.com/Mugilvannan2911/",
        linkedin: "https://www.linkedin.com/in/mugilvannan-r-developer",
        email: "mugilvannan1129@gmail.com",
        portfolio: "https://yourportfolio.com"
    },

    // About Section
    about: {
        intro: "I'm a passionate Full Stack Developer with a keen eye for design and a love for creating seamless digital experiences.",
        description: "My journey in web development started with a curiosity about how things work on the internet. Today, I specialize in building modern web applications using cutting-edge technologies like React, Node.js, and cloud platforms.",
        passion: "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
        yearsExperience: "2+",
        // projectsCompleted: "5+",
        // happyClients: "30+"
    }
};

export const skills = {
    frontend: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 95 },
        { name: 'JavaScript', level: 95 },
        { name: 'jQuery', level: 95 },
        { name: 'React', level: 90 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Bootstrap', level: 90 },
        { name: 'TypeScript', level: 85 }
    ],
    tools: [
        { name: 'Git', level: 92 },
        { name: 'GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
    ]
};

export const projects = [
    {
        title: 'i-Neer – Water Management Panel',
        category: 'Front end',
        description: 'i-Neer is a centralized water management panel designed to monitor and control water-related operations across State, District, Union, and Panchayat levels. The system enables efficient complaint management, water tank monitoring, and tracking of cleaning and maintenance activities. With hierarchical filtering and a structured dashboard, i-Neer improves transparency, operational efficiency, and faster issue resolution in public water management.',
        image: '/ineer-water-panel.png',
        tags: ['Html', 'Css', 'Bootstrap', 'jQuery', 'Java Script'],
        liveLink: 'http://devftp.itank.io/water/ineer/',
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'i-Tank',
        category: 'Front end',
        description: 'A smart IoT-based water tank management system with real-time water level monitoring, device connectivity, consumption analytics, and an intuitive admin dashboard.',
        image: '/itank-water-management.png',
        tags: ['Html', 'Css', 'Tailwind Css', 'React js'],
        liveLink: 'https://web.itank.io/login',
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'S-Tank',
        category: 'Front end',
        description: 'S-Tank is an IoT-based smart water tank monitoring and control system designed for homes and small businesses. The system allows users to remotely turn the motor ON/OFF using an IoT device. It provides real-time monitoring of water level, tank capacity, and motor status through graphs and charts on a digital dashboard. S-Tank helps prevent water overflow, dry running of motors, and ensures efficient water usage through smart automation and monitoring.',
        image: '/stank-iot-monitor.png',
        tags: ['Html', 'Css', 'Tailwind Css', 'React js'],
        // liveLink: 'https://web.itank.io/login',
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'G-Cam',
        category: 'Front end',
        description: 'G-Cam is an IoT-based garbage management system integrated with a web camera for real-time monitoring. The system helps track whether garbage collection areas are cleaned properly and provides live video streaming for verification. It includes role-based access with Admin and User panels. The Admin can create and manage devices, monitor all users and devices, while Users can access and monitor only their assigned devices. G-Cam improves transparency, accountability, and operational efficiency in waste management.',
        image: '/gcam-garbage-system.jpg',
        tags: ['Html', 'Css', 'Tailwind Css', 'React js'],
        liveLink: 'https://gcam-web.rtsiot.com/login',
        gradient: 'from-blue-500 to-cyan-500'
    },
];

export const experience = [
    {
        type: 'work',
        title: 'Junior Web Developer',
        company: 'Real Tech Systems',
        location: 'Erode Road, No.5/B, Cross Street 1, Vengamedu, Perundurai, Tamil Nadu 638052',
        period: '2024 - Present',
        description: 'Developing and maintaining scalable web applications using React.js, JavaScript, and REST APIs. Collaborating with cross-functional teams to build responsive, performance-optimized, and user-friendly solutions for client-based projects.',
        achievements: [
            'Improved application performance by 40% through code optimization and efficient state management',
            'Designed and developed end-to-end client web applications from requirement analysis to deployment',
            'Integrated secure RESTful APIs and implemented role-based authentication systems',
            'Built reusable components to reduce development time by 30%',
            'Enhanced UI/UX responsiveness across mobile, tablet, and desktop devices',
            'Resolved critical production bugs and improved system stability'
        ]
    },
    {
        type: 'education',
        title: 'Bachelor of Computer Science and Engineering',
        company: 'Mahendra Engineering College',
        location: 'Salem-Tiruchengode Highway, Mahendhirapuri, Mallasamudram West, Namakkal, Tamil Nadu 637503',
        period: '2018 - 2021',
        description: 'Completed Bachelor’s degree with strong focus on Software Engineering, Web Development, Actively engaged in practical project development and real-world application design.',
        achievements: [
            'Graduated with GPA: 8.86 / 10',
            'Developed academic projects using Java, JavaScript, and MySQL',
            'Completed mini and major projects focused on full-stack web development',
            'Participated in technical seminars and coding workshops',
            'Built strong foundation in algorithms, OOP concepts, and system design'
        ]
    },
    {
        type: "education",
        title: "Diploma in Computer Science and Engineering",
        institution: "The Kongu Polytechnic College",
        location: "NH 7, Trichy Main Road, Mallur, Salem – 636203",
        period: "2015 – 2018",
        description:
        "Completed a Diploma in Computer Science with a strong focus on Software Engineering and Web Development. Actively participated in practical project development and real-world application design.",
        achievements: [
        "Graduated with 80% overall",
        "Developed academic projects using Java and MySQL",
        "Successfully completed both mini and major projects"
        ]
    },
    {
        type: "education",
        title: "SSLC",
        institution: "Bharathi Vidhyalaya Higher Secondary School",
        location: "Court Road, Maravaneri, Salem, Tamil Nadu – 636007",
        period: "2014 – 2015",
        description:
        "Successfully completed SSLC with a strong academic foundation."
    }

];
