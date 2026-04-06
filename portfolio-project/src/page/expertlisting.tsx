import ExpertListingPage from "@/pageComponents/expertlistingpage"
import Footer from "@/pageComponents/footer"
import InnerProject from "@/pageComponents/innerProjectComp"
import MarqueeComp from "@/pageComponents/marquee"
export default function ExpertListing(){
    return(
        <>
        <ExpertListingPage/>
        <MarqueeComp/>
        <InnerProject/>
        <Footer/>
        </>
    )
}