import CorePrinciples from "@/components/company/Principles";
import CertificationsSection from "@/components/company/Certifications";
import CompanyHero from "@/components/company/CompanyHero";
import Solution from "@/components/company/Solution";
import Footer from "@/components/Footer";
import Assessement from "@/components/Assessment";

const Company = () => {
  return (
    <div>
      <CompanyHero />
      <CorePrinciples />
      <Solution />
      <CertificationsSection />
      <Assessement />
      <Footer />
    </div>
  );
};

export default Company;
