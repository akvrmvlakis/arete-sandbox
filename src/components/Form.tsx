"use client";

import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { sendEmail } from "@/app/utils/send-email";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    try {
      await sendEmail(data);
      setSubmitStatus("Email sent successfully!");
    } catch (error) {
      setSubmitStatus("Failed to send email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label htmlFor="name" className="mb-2 block text-sm text-white">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Full Name"
          className={`w-full border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md`}
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="mb-2 block text-sm text-white">
          Email Address
        </label>
        <input
          type="email"
          placeholder="example@domain.com"
          className={`w-full border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md`}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-5">
        <label htmlFor="message" className="mb-2 block text-sm text-white">
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Type your message"
          className={`w-full resize-none border ${
            errors.message ? "border-red-500" : "border-gray-300"
          } bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md`}
          {...register("message", { required: "Message is required" })}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="hover:shadow-form  bg-white py-3 px-8 text-base font-semibold text-black outline-none"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Submit"}
        </button>
      </div>
      {submitStatus && <p className="mt-3 text-sm">{submitStatus}</p>}
    </form>
  );
};

export default Form;
