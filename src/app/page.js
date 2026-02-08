// import Link from "next/link";

// import Navbar from "./Components/landingpage/Navbar";
// import MainPage from "./Components/landingpage/MainPage";
// import InTouch from "./Components/landingpage/InTouch";
// import Specilist from "./Components/landingpage/Specilist";
// import Chat from "./Components/landingpage/Chat";
// import FAQs from "./Components/landingpage/FAQs";
// import Professional from "./Components/landingpage/Professional";
// import OurLocation from "./Components/landingpage/OurLocation";
// import GetStarted from "./Components/landingpage/GetInTouch";
// import FooterSection from "./Components/landingpage/FooterSection";
// import BottomFooter from "./Components/landingpage/Bottomfooter";
// import WorkWithMe from "./Components/landingpage/WorkWithMe";

// export default function Home() {
//   return (
//     <main className="bg-[#f7f5f2] text-gray-900">
//       <Navbar/>
//       <MainPage/>
//       <InTouch/>
//       <Specilist/>
//       <WorkWithMe/>
//        <Chat/>
//        <FAQs/>
//        <Professional/>
//        <OurLocation/>
//        <GetStarted/>
//        <FooterSection/>
//       <BottomFooter/>
      
//     </main>
//   );
// }






import Link from "next/link";

import Navbar from "./Components/landingpage/Navbar";
import MainPage from "./Components/landingpage/MainPage";
import InTouch from "./Components/landingpage/InTouch";
import Specilist from "./Components/landingpage/Specilist";
import Chat from "./Components/landingpage/Chat";
import FAQs from "./Components/landingpage/FAQs";
import Professional from "./Components/landingpage/Professional";
import OurLocation from "./Components/landingpage/OurLocation";
import GetStarted from "./Components/landingpage/GetInTouch";
import FooterSection from "./Components/landingpage/FooterSection";
import BottomFooter from "./Components/landingpage/Bottomfooter";
import WorkWithMe from "./Components/landingpage/WorkWithMe";

export default function Home() {
  return (
    <main className="bg-[#f7f5f2] text-gray-900">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Page Section */}
      <MainPage />
      
      {/* Section: InTouch */}
      <div className="py-12">
        <InTouch />
      </div>

      {/* Section: Specialist */}
      <div className="py-12">
        <Specilist />
      </div>

      {/* Section: Work With Me */}
      <div className="py-12">
        <WorkWithMe />
      </div>

      {/* Section: Chat */}
      <div className="py-12">
        <Chat />
      </div>

      {/* Section: FAQs */}
      <div className="py-12">
        <FAQs />
      </div>

      {/* Section: Professional */}
      <div className="py-12">
        <Professional />
      </div>

      {/* Section: Our Location */}
      <div className="py-12">
        <OurLocation />
      </div>

      {/* Section: Get Started */}
      <div className="py-12">
        <GetStarted />
      </div>

      {/* Footer Section */}
      <FooterSection />

      {/* Bottom Footer */}
      <BottomFooter />
    </main>
  );
}
