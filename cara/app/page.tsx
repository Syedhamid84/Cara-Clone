import { About } from "@/Pages/About";
import { Arrival } from "@/Pages/Arrival";
import { Collection } from "@/Pages/Collection";
import { Feature } from "@/Pages/Feature";
import { Footer } from "@/Pages/Footer";
import { HeroSection } from "@/Pages/Herosection";
import { Newsletter } from "@/Pages/Newsletter";
import { Services } from "@/Pages/Services";
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
    </div>
  );
}
