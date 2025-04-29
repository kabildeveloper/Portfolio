import {NextPage} from "next";
import Experience from "@/components/Experience";

const ExperiencePage: NextPage = () => {
    return (
        <section>
            <div className='gap-y-20 my-40'>
                <Experience/>
            </div>
        </section>
    )
}

export default ExperiencePage;