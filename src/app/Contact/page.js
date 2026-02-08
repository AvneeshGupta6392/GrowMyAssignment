import BottomFooter from "../Components/landingpage/Bottomfooter";
import FooterSection from "../Components/landingpage/FooterSection";
import Navbar from "../Components/landingpage/Navbar";
import Aboutlocation from "./about/page";
export default function OurOfficePage() {
  return (
    <main className="min-h-screen flex-col items-center justify-center">
      <Navbar/>
    <Aboutlocation/>
    <FooterSection/>
    <BottomFooter/>
    
    </main>
  );
}
