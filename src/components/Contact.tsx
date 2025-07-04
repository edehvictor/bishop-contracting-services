import { Mail, Phone, ExternalLink, FormInput } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-10 w-full pb-10">
        <div className="text-center flex flex-col justify-center items-center mb-10">
          <p className="flex justify-center items-center gap-3 w-fit mx-auto md:mx-0 px-3 py-1 text-center border border-green-300 rounded-2xl bg-white text-zinc-500 mb-5 text-sm md:text-base">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
            Contact Us
          </p>
          <h2 className="text-xl md:text-3xl my-3 font-bold text-gray-900 text-center">
            Connect With Our Experts
          </h2>
          <p className="text-gray-500 mt-2">
            Our team is here to support your environmental remediation,
            demolition, or logistics needs — from assessments to executions
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 w-full">
          <form className="bg-gray-50 rounded-2xl shadow p-6 md:p-8 space-y-5 w-full">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-green-500"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-green-500"
            />
            <textarea
              placeholder="Enter your message"
              rows={5}
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-green-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-br  from-green-500 to-green-600  text-white py-3 rounded-md font-semibold cursor-pointer"
            >
              Submit
            </button>
          </form>

          <div className="space-y-6 w-full">
            {[
              {
                icon: <Mail className="w-5 h-5" />,
                title: "You can email us here",
                action: "sales@BCS.com",
              },
              {
                icon: <Phone className="w-5 h-5" />,
                title: "Make inquiry about your project",
                action: "Quick inquiries",
              },
              {
                icon: <FormInput className="w-5 h-5" />,
                title: "Get free asseement",
                action: "Forms for assessment",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl shadow px-5 py-4"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-100 rounded-full text-green-500">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.title}</p>
                    <p className="font-semibold text-gray-600">{item.action}</p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
