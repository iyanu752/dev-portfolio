import Hero from "@/pageComponents/hero"
import Project from "@/pageComponents/projects"
import Stack from "@/pageComponents/stackHero"
import Stacks from "@/pageComponents/stacks"
import Experience from "@/pageComponents/experience"
import Footer from "@/pageComponents/footer"
export default function LandingPage() {
    return (
        <div>
            <Hero/>
            <Project/>
            <Stack/>
            <Stacks/>
            <Experience/>
            <Footer/>
        </div>
    )
}