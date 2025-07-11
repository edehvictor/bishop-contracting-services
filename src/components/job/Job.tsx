"use client";

import { useState, useRef, type ChangeEvent, type FormEvent } from "react";
import supabase from "@/lib/supabaseClient";
import Navbar from "../Header";
import { Upload } from "lucide-react";
import toast from "react-hot-toast";

interface FormData {
  full_name: string;
  email: string;
  phone_number: string;
  message: string;
  resume_file: File | null;
}

export default function JobApplication() {
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    email: "",
    phone_number: "",
    message: "",
    resume_file: null,
  });

  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (name === "resume_file" && files?.[0]) {
      setFormData((prev) => ({
        ...prev,
        resume_file: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let resume_url = null;

      if (formData.resume_file) {
        const { data, error } = await supabase.storage
          .from("resumes")
          .upload(
            `applicants/${Date.now()}_${formData.resume_file.name}`,
            formData.resume_file
          );

        if (error) throw error;

        const { data: publicUrlData } = supabase.storage
          .from("resumes")
          .getPublicUrl(data.path);

        resume_url = publicUrlData.publicUrl;
      }

      const { error: insertError } = await supabase
        .from("job_applications")
        .insert([
          {
            full_name: formData.full_name,
            email: formData.email,
            phone_number: formData.phone_number,
            message: formData.message,
            resume_url: resume_url,
          },
        ]);

      if (insertError) throw insertError;

      toast.success("Application submitted successfully!");

      setFormData({
        full_name: "",
        email: "",
        phone_number: "",
        message: "",
        resume_file: null,
      });

      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(`Error: ${err.message}`);
        console.error(err.message);
      } else {
        toast.error("An unknown error occurred.");
        console.error(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[url('/images/bg.svg')] min-h-screen bg-gray-50  px-4">
      <Navbar />
      <div className="pt-32">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Apply for Job Roles
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="full_name"
              required
              placeholder="Full Name"
              value={formData.full_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />

            <input
              type="tel"
              name="phone_number"
              required
              placeholder="Phone"
              value={formData.phone_number}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />
            <div>
              <label
                htmlFor="resume_file"
                className="flex items-center gap-2 w-full px-4 py-2 border rounded-md text-gray-600 bg-white cursor-pointer text-sm hover:bg-gray-100 transition"
              >
                <Upload className="w-4 h-4 text-gray-500" />
                {formData.resume_file
                  ? formData.resume_file.name
                  : "Upload Resume/CV"}
              </label>
              <input
                ref={fileInputRef}
                type="file"
                id="resume_file"
                name="resume_file"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="hidden"
              />
            </div>

            <textarea
              name="message"
              rows={3}
              placeholder="Tell us briefly about yourself"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
