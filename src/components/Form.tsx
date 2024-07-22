import React, { useState } from "react";
import Link from "next/link";

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!acceptTerms) {
      setError("You must accept the terms.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setAcceptTerms(false);
      } else {
        const data = await response.json();
        setError(data.error || "An error occurred while sending your message.");
      }
    } catch (error) {
      setError("An error occurred while sending your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-white mb-1">
          Name
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 bg-white text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-3 py-2 bg-white text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-white mb-1">
          Message
        </label>
        <textarea
          id="message"
          className="w-full px-3 py-2 bg-white text-black min-h-[150px]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
          />
          <span className="ml-2 text-white">
            I accept the <Link href="#">terms</Link>
          </span>
        </label>
      </div>
      <button
        type="submit"
        className="px-3 py-2 bg-white text-black"
        disabled={loading}
      >
        {loading ? "Sending..." : "Submit"}
      </button>
      {success && (
        <p className="text-green-500 mt-4">Message sent successfully!</p>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </form>
  );
};

export default Form;
