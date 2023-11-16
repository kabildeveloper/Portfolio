import {NextPage} from "next";
import About from "@/components/About";

const AboutPage: NextPage = () => {
    return (
        <section>
            <div className='my-20 md:my-40'>
                <About/>
            </div>
        </section>
    )
}

export default AboutPage;