import About from "@/components/About/About";
import Arrival from "@/components/Arrival";
import Collection from "@/components/Collection";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Herosection";
// import Mobilenavbar from "@/Pages/mobilenavbar";
import Newsletter from "@/components/Newsletter";
import Services from "@/components/Shop/Services";
// import { Sidebar } from "@/Pages/Sidebar";
import Topbar from "@/components/Topbar";

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
