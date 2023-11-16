import {NextPage} from "next";
import Projects from "@/components/Projects";

const ProjectsPage: NextPage = () => {
    return (
        <section>
            <div className='my-20 md:my-40'>
                <Projects/>
            </div>
        </section>
    )
}

export default ProjectsPage;