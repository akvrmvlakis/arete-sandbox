// components/OpenContactFormButton.tsx
import React from "react";
import { useContactForm } from "@/app/context/ContactFormContext";

const OpenContactFormButton: React.FC = () => {
  const { openContactForm } = useContactForm();

  return (
    <button onClick={openContactForm} className="btn-class">
      Get in touch
    </button>
  );
};

export default OpenContactFormButton;
