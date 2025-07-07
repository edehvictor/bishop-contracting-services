import Hero from "@/components/Hero";
import About from "@/components/Features";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Assessment from "@/components/Assessment";
import HowWeWork from "@/components/HowWeWork";

const LandingPage = () => {
  return (
    <div className=" w-full">
      <Hero />
      <About />
      <Services />
      <HowWeWork />
      <Testimonials />
      <Assessment />
      <Footer />
    </div>
  );
};

export default LandingPage;
