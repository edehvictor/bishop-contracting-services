import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import ContactSection from "@/components/Contact";
// import CorePrinciples from "@/components/company/AboutUs";

const LandingPage = () => {
  return (
    <div className=" w-full">
      <Hero />
      {/* <CorePrinciples /> */}
      <Services />
      <About />
      <Testimonials />
      <ContactSection />
      {/* <CorePrinciples /> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
