import Assessement from "@/components/Assessment";
import Footer from "@/components/Footer";
import EnvironmentCard from "@/components/services/environmental remediation/EnvironmentCard";
import EnvironmentHero from "@/components/services/environmental remediation/EnvironmentHero";
import CommitmentSection from "@/components/services/environmental remediation/CommitmentSection";

const Environment = () => {
  return (
    <div>
      <EnvironmentHero />
      <EnvironmentCard />
      <CommitmentSection />
      <Assessement />
      <Footer />
    </div>
  );
};

export default Environment;
