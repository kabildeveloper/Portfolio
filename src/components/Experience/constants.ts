import {ExperienceDetails} from "@/components/Experience/interfaces";

export const EXPERIENCES: ExperienceDetails[] = [];

export const DOODLEBLUE: ExperienceDetails = {
    companyName: 'Doodleblue Innovations',
    position: 'Software Engineer',
    work: ['Contributed to five projects across diverse domains, including E-Commerce and Finance.',
        'Acquired extensive experience in SEO optimization and web accessibility implementation, ensuring compliance with industry standards.',
        'Successfully integrated Google Analytics and Microsoft Vision APIs for advanced data analytics and insights.',
        'Proficient in deploying applications to Amazon EC2 instances, ensuring seamless and efficient deployment processes.'
    ],
    duration: '2024 - Present',
}

export const TCS = {
    companyName: 'Tata Consultancy Services',
    position: 'Product Engineer',
    work: [
        "Developed UI for various digital twin projects, integrating dynamic inputs from users and data sources which reduces 90% of time and manual effort.",
        "Created UI Dashboards for digital twin to show its output, based on the KPI's and filters.",
        "Gained expertise in Webpack and Babel.",
        "Implemented Server Side Rendering (SSR) in React.",
        "Implemented authentication and authorization mechanisms, including token-based authentication and OAuth, which reduces 90% of security risk."
    ],
    duration: '2022 - 2023',
}

export const ZOHO = {
    companyName: 'Zoho',
    position: 'Software Engineer Trainee',
    work: [
        "Contributed to research and development of an Elasticsearch-based plugin for custom cross-cluster replication.",
    ],
    duration: '2021',
}

export const FREELANCER = {
    companyName: 'Freelancer',
    position: 'Web Developer',
    work: [
        "Developed and maintained responsive web applications using React.js",
        "Collaborated with clients to gather requirements and define technical specifications.",
        "Utilized React.js libraries and frameworks like Redux or Redux Toolkit and Next.js for enhanced functionality and performance."
    ],
    duration: '2020',
}

EXPERIENCES.push(DOODLEBLUE);
EXPERIENCES.push(TCS);
EXPERIENCES.push(ZOHO);
EXPERIENCES.push(FREELANCER);
