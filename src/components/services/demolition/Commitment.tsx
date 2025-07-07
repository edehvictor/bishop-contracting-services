export default function CommitmentSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 text-gray-900">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Our commitment to selective demolition
          </h2>
          <p className="text-base text-gray-600 mb-6 max-w-xl">
            Selective demolition demands precision and care. We specialize in
            removing specific structures or materials while preserving the
            integrity of the remaining environment.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-base md:text-lg mb-1">
                Precision & Control
              </h4>
              <p className="text-sm text-gray-600">
                Our team uses advanced tools and planning to target only
                designated areas, ensuring no disruption to surrounding
                structures.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-base md:text-lg mb-1">
                Safety & Clean Execution
              </h4>
              <p className="text-sm text-gray-600">
                We maintain strict safety standards and clean job sites,
                minimizing dust, noise, and impact on nearby operations or
                occupants.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="/images/demolition.webp"
            alt="Selective Demolition Project"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
