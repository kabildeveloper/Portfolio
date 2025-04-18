import Home from "@/components/Home";
import About1 from "@/components/About/index1";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function HomePage() {

    return (
        <section>
            <ParticlesBackground/>
            <div className="flex flex-col gap-y-20 md:gap-y-40 mb-20 md:mb-40 relative z-10">
                <Home />
                 {/*<About fromHome />*/}
                <About1 fromHome />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </section>
    )
}
