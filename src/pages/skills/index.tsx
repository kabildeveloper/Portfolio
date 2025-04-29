import {NextPage} from "next";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const SkillsPage: NextPage = () => {
    return (
        <section>
            <div className='gap-y-20 mt-40'>
                <Skills/>
            </div>
        </section>
    )
}

export default SkillsPage;