import {NextPage} from "next";
import Projects from "@/components/Projects";
import {PROFESSIONAL_PROJECTS} from "@/components/Projects/constant";

const ProjectsPage: NextPage = () => {
    return (
        <section>
            <div className='my-20'>
                <Projects/>
            </div>
        </section>
    )
}

export default ProjectsPage;