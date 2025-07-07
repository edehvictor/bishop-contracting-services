export default function CommitmentSection() {
  return (
    <section className="bg-[#F9F7F6] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <img
            src="/images/Environmental-Remediation.jpeg"
            alt="Environmental Remediation Project"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

        <div className="w-full lg:w-1/2 text-gray-900">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Our commitment to environmental remediation
          </h2>
          <p className="text-base text-gray-600 mb-6 max-w-xl">
            We understand the urgency of contamination concerns. That’s why our
            remediation process focuses on safety, sustainability, and long-term
            protection for your property and the environment.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-base md:text-lg mb-1">
                Health & Environmental Safety
              </h4>
              <p className="text-sm text-gray-600">
                We follow strict industry standards to ensure the removal of
                hazardous materials like asbestos, lead, and mold without risk
                to people or ecosystems.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-base md:text-lg mb-1">
                Community-Centered Approach
              </h4>
              <p className="text-sm text-gray-600">
                Our work improves air and soil quality for communities. We treat
                each project with care, keeping residents informed every step of
                the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
