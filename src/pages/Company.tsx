import CorePrinciples from "@/components/company/Principles";
import CertificationsSection from "@/components/company/Certifications";
import CompanyHero from "@/components/company/CompanyHero";
import Solution from "@/components/company/Solution";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";

const Company = () => {
  return (
    <div>
      <CompanyHero />
      <CorePrinciples />
      <Solution />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Company;
