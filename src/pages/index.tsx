import Home from "@/components/Home";
import About1 from "@/components/About/index1";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ParticlesBackground from "@/components/ParticlesBackground";
import Experience from "@/components/Experience";
import {PERSONAL_PROJECTS, PROFESSIONAL_PROJECTS} from "@/components/Projects/constant";
import Achievement from "@/components/Achievement";

export default function HomePage() {

    return (
        <section>
            <ParticlesBackground/>
            <div className="flex flex-col gap-y-20 md:gap-y-40 relative z-10">
                <Home />
                 {/*<About fromHome />*/}
                <About1 fromHome />
                <Achievement/>
                <Experience/>
                <Skills />
                <Projects/>
                <Contact />
            </div>
        </section>
    )
}
