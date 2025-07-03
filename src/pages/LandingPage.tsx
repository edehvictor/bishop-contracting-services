import Hero from "@/components/Hero";
import Solution from "@/components/Solution";
import About from "@/components/About";
import Footer from "@/components/Footer";
import OverviewTab from "@/components/OverviewTab";
import Testimonials from "@/components/Testimonials";

const LandingPage = () => {
  return (
    <div className=" w-full">
      <Hero />
      <OverviewTab />
      <About />
      <Testimonials />
      <Solution />
      <Footer />
    </div>
  );
};

export default LandingPage;
