import { useState } from "react";
import { Mail, Phone, ExternalLink, MapPin } from "lucide-react";
import supabase from "@/lib/supabaseClient";
import toast from "react-hot-toast";

const Assessement = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("assessments").insert([
      {
        name: form.name,
        email: form.email,
        project_type: form.projectType,
        address: form.address,
        message: form.message,
      },
    ]);

    if (error) {
      toast.error("Error submitting request");
    } else {
      toast.success("Request submitted successfully!");
      setForm({
        name: "",
        email: "",
        projectType: "",
        address: "",
        message: "",
      });
    }

    setLoading(false);
  };

  return (
    <section className="bg-white py-10">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-10 w-full pb-10"
        id="assessment-form"
      >
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

        <div
          className="flex flex-col md:flex-row gap-10 w-full"
          id="assessment-form"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-2xl shadow p-6 md:p-8 space-y-5 w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-green-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-green-500"
            />

            <select
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-200 text-zinc-500 focus:outline-green-500"
            >
              <option disabled value="">
                Select project type
              </option>
              <option>Environmental Remediation</option>
              <option>Selective Demolition</option>
              <option>Transportation / Hazmat</option>
              <option>Other</option>
            </select>

            <input
              type="text"
              name="address"
              placeholder="Project address or general location"
              value={form.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-green-500"
            />

            <textarea
              name="message"
              placeholder="Briefly describe your needs or project details"
              rows={3}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-green-500"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-br from-green-500 to-green-600 text-white py-3 rounded-md font-semibold cursor-pointer hover:shadow-lg"
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </form>

          <div className="space-y-6 w-full">
            {[
              {
                icon: <Mail className="w-5 h-5" />,
                title: "You can email us here",
                action: (
                  <a
                    href="mailto:sales@BCS.com"
                    className="text-gray-500 hover:underline"
                  >
                    sales@BCS.com
                  </a>
                ),
              },
              {
                icon: <Phone className="w-5 h-5" />,
                title: "Make inquiry about your project",
                action: (
                  <a
                    href="tel:+1234567890"
                    className="text-gray-500 hover:underline"
                  >
                    +1 (234) 567-890
                  </a>
                ),
              },
              {
                icon: <MapPin className="w-5 h-5" />,
                title: "Need a specialist onsite?",
                action: (
                  <a
                    href="tel:+1234567890"
                    className="text-gray-500 hover:underline"
                  >
                    Request a site visit
                  </a>
                ),
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

export default Assessement;
