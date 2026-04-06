import JunogPage from "@/pageComponents/junopage"
import Footer from "@/pageComponents/footer"
import InnerProject from "@/pageComponents/innerProjectComp"
import MarqueeComp from "@/pageComponents/marquee"
export default function Juno(){
    return(
        <>
        <JunogPage/>
        <MarqueeComp/>
        <InnerProject/>
        <Footer/>
        </>
    )
}