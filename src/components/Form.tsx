import React, { useState } from "react";
import localFont from "next/font/local";
import Link from "next/link";

const HelveticaNeueLight = localFont({
  src: "../assets/fonts/HelveticaNeueLight.woff2",
});

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    termsAccepted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <div className={HelveticaNeueLight.className}>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white mb-2"
          >
            Name
          </label>
        </div>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className=" block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div className="mb-6">
        <div className={HelveticaNeueLight.className}>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white mb-2"
          >
            Email
          </label>
        </div>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className=" block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div className="mb-6">
        <div className={HelveticaNeueLight.className}>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white mb-2"
          >
            Message
          </label>
        </div>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className=" block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none sm:text-sm min-h-[180px]"
          rows={4}
          required
        />
      </div>
      <div className="mb-6 flex items-start">
        <div className="flex items-center h-5">
          <input
            id="termsAccepted"
            name="termsAccepted"
            type="checkbox"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            required
          />
        </div>
        <div className="ml-2 text-sm">
          <div className={HelveticaNeueLight.className}>
            <label htmlFor="termsAccepted" className="font-medium text-white">
              I accept the{" "}
              <Link href="#" className="underline">
                Terms
              </Link>
            </label>
          </div>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-black bg-white focus:outline-none min-h-[48px] min-w-[99px]"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
