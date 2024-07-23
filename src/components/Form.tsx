import { useState } from "react";
import axios from "axios";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");

    try {
      const response = await axios.post("api/send-email", {
        name,
        email,
        message,
        acceptTerms,
      });

      if (response.status === 200) {
        setStatus("Email sent successfully!");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error sending email.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block text-white text-sm mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="w-full py-3 px-3 bg-white text-black"
          id="name"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-sm mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full py-3 px-3 text-black bg-white"
          id="email"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-sm mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full py-3 px-3 text-black bg-white min-h-[100px]"
          id="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="flex items-center text-white text-sm"
          htmlFor="acceptTerms"
        >
          <input
            className="mr-2"
            id="acceptTerms"
            type="checkbox"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
          />
          I accept the terms
        </label>
      </div>
      <div className="mb-4">
        <button
          className=" text-black bg-white py-2 px-4"
          type="submit"
          disabled={!acceptTerms}
        >
          Send
        </button>
      </div>
      {status && <div className="mt-4 text-white">{status}</div>}
    </form>
  );
}
