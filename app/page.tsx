import { About } from "@/Pages/About/About";
import { Arrival } from "@/Pages/Arrival";
import { Collection } from "@/Pages/Collection";
import { Feature } from "@/Pages/Feature";
import { Footer } from "@/Pages/Footer";
import { HeroSection } from "@/Pages/Herosection";
// import Mobilenavbar from "@/Pages/mobilenavbar";
import { Newsletter } from "@/Pages/Newsletter";
import { Services } from "@/Pages/Shop/Services";
// import { Sidebar } from "@/Pages/Sidebar";
import { Topbar } from "@/Pages/Topbar";

export default function Home() {
  return (
    <div>
      <Topbar />
      <HeroSection />
      <About />
      <Feature />
      <Services />
      <Arrival />
      <Collection />
      <Newsletter />
      <Footer />
      {/* <Mobilenavbar /> */}
      {/* <Sidebar /> */}
    </div>
  );
}
