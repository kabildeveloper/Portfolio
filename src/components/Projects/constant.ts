import {ProjectCardProps} from "@/components/ProjectCard";
import {FaChartSimple, FaGitAlt} from "react-icons/fa6";
import {SiBookstack} from "react-icons/si";

const Bridgeport: ProjectCardProps = {
    title: 'Bridgeport',
    content: 'Designed and implemented a Content Management System (CMS) for the entire website using React and Node.js.\n' +
        'Built a responsive website with 25+ pages using Next.js and Tailwind CSS.\n' +
        'Enabled Static-Site Generation (SSG), configured to update APIs once per day for improved efficiency.\n' +
        'Gained hands-on experience in deploying applications to Docker containers.',
    link: 'https://www.bridgeportmq.com/',
    Icon: FaGitAlt
}

const Norbloc: ProjectCardProps = {
    title: 'Norbloc',
    content: `Developed interactive dashboards using React-Charts to visualize key performance indicators (KPIs).
    Performed complex dynamic calculations based on user-selected filters and displayed results through charts.
    Implemented a caching mechanism to store pre-calculated values for improved performance.
    Developed a custom Server-Side Rendering (SSR) solution for React, reducing page load time significantly.`,
    link: 'https://norbloc.com/',
    Icon: FaGitAlt
}

const DTBuilder: ProjectCardProps = {
    title: 'TCS TwinX - DT Builder',
    content: `Successful implementation of automated data source connectors ensures the smooth integration of various data
sources into the Digital Twin. This process enables the Digital Twin to connect with various data sources with very less manual effort.`,
    link: '',
    Icon: FaGitAlt
}

const gitWind: ProjectCardProps = {
    title: 'Git Wind',
    content: 'GitWind is an Open-Source productivity application aimed at assisting developers in managing multiple Git accounts effortlessly. I have used Electron + React js and some other 3rd party libraries to complete this project.',
    link: 'https://github.com/kabildeveloper/GitWind',
    Icon: FaGitAlt
}

const dashBoard: ProjectCardProps = {
    title: 'Dashboard POC',
    content: ' I proudly feature a Proof of Concept (POC) showcasing my proficiency in building dynamic and interactive web applications using React.js and react-charts-js. This dashboard effectively visualizes data through responsive (All desktop sizes) and reusable components, seamlessly integrating a chosen charting library for compelling data representations',
    link: 'https://github.com/kabilrajendhiran/dashboard-app',
    viewLink: 'https://dashboard-colorful.netlify.app/',
    Icon: FaChartSimple
}

const examSeatingArrangement: ProjectCardProps = {
    title: 'Exam Seating Arrangement',
    content: 'A semi-automatic exam seating arrangement project aims to enhance the efficiency and fairness of exam logistics. By combining automated algorithms with manual intervention, the system can adapt to various constraints and ensure a smooth examination process.',
    link: 'https://github.com/kabilrajendhiran/examseatingarrangement',
    Icon: SiBookstack
}

export const PROFESSIONAL_PROJECTS: ProjectCardProps[] = [Bridgeport, Norbloc, DTBuilder]
export const PERSONAL_PROJECTS: ProjectCardProps[] = [gitWind, dashBoard, examSeatingArrangement]