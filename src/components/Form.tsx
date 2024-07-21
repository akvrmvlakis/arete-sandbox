// components/Form.tsx
import React from "react";
import localFont from "next/font/local";

const pragmaticaW01ExtendedBold = localFont({
  src: "../assets/fonts/pragmatica-w01-extended-bold.woff2",
});

const Form: React.FC = () => {
  return (
    <form>
      <div>
        <label htmlFor="name" className="text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="block w-full mt-1 p-2 mb-6"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="block w-full mt-1 p-2 mb-6"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="block w-full mt-1 p-2 min-h-[150px]"
        ></textarea>
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="bg-white text-black font-semibold px-4 py-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
