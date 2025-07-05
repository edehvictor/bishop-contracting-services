import Hero from "@/components/Hero";
import About from "@/components/Features";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import ContactSection from "@/components/Contact";

const LandingPage = () => {
  return (
    <div className=" w-full">
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
