import Assessement from "@/components/Assessment";
import Footer from "@/components/Footer";
import EnvironmentCard from "@/components/services/environmental remediation/EnvironmentCard";
import EnvironmentHero from "@/components/services/environmental remediation/EnvironmentHero";
import CommitmentSection from "@/components/services/environmental remediation/CommitmentSection";
import Testimonials from "@/components/Testimonials";

const Environment = () => {
  return (
    <div>
      <EnvironmentHero />
      <EnvironmentCard />
      <CommitmentSection />
      <Testimonials />
      <Assessement />
      <Footer />
    </div>
  );
};

export default Environment;
