import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function HomePage() {

    return (
        <section className='mx-5 md:mx-10'>
            <div className='mt-20 md:mt-40'>
                <Home/>
            </div>
            <div className={`mt-20 md:mt-40 transition-all`}>
                <About fromHome/>
            </div>
            <div className={`mt-20 md:mt-40`}>
                <Skills/>
            </div>
            <div className='mt-20 md:mt-40'>
                <Projects/>
            </div>
            <div className='mt-20 mb-20 md:mt-40 md:mb-40'>
                <Contact/>
            </div>
        </section>
    )
}
