import Assessement from "@/components/Assessment";
import Footer from "@/components/Footer";
import CommitmentSection from "@/components/services/demolition/Commitment";
import DemolitionBody from "@/components/services/demolition/DemolitionBody";
import DemolitionHero from "@/components/services/demolition/DemolitionHero";
import ProcessChain from "@/components/services/demolition/ProcessSteps";

const Demolition = () => {
  return (
    <div>
      <DemolitionHero />
      <DemolitionBody />
      <CommitmentSection />
      <ProcessChain />
      <Assessement />
      <Footer />
    </div>
  );
};

export default Demolition;
