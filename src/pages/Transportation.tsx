import Assessement from "@/components/Assessment";
import Footer from "@/components/Footer";
import Features from "@/components/services/transportation/Features";
import Services from "@/components/services/transportation/Services";
import TransportationHero from "@/components/services/transportation/TransportationHero";
import WhyChooseTransport from "@/components/services/transportation/WhyUs";

const Transportation = () => {
  return (
    <div>
      <TransportationHero />
      <Services />
      <Features />
      <WhyChooseTransport />
      <Assessement />
      <Footer />
    </div>
  );
};

export default Transportation;
