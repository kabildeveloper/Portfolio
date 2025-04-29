import {NextPage} from "next";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

const AboutPage: NextPage = () => {
    return (
        <section>
            <div className='my-20 md:my-40'>
                <About/>
                <div className='my-20'>
                    <Skills/>
                </div>
            </div>
        </section>
    )
}

export default AboutPage;