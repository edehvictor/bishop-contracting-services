import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import DemolitionBody from "@/components/services/demolition/DemolitionBody";
import DemolitionHero from "@/components/services/demolition/DemolitionHero";
import ProcessChain from "@/components/services/demolition/ProcessSteps";
import Testimonials from "@/components/Testimonials";

const Demolition = () => {
  return (
    <div>
      <DemolitionHero />
      <DemolitionBody />
      <ProcessChain />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Demolition;
