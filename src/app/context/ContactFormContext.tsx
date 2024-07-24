// context/ContactFormContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ContactFormContextProps {
  isOpen: boolean;
  openContactForm: () => void;
  closeContactForm: () => void;
}

const ContactFormContext = createContext<ContactFormContextProps | undefined>(
  undefined
);

export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error("useContactForm must be used within a ContactFormProvider");
  }
  return context;
};

export const ContactFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openContactForm = () => setIsOpen(true);
  const closeContactForm = () => setIsOpen(false);

  return (
    <ContactFormContext.Provider
      value={{ isOpen, openContactForm, closeContactForm }}
    >
      {children}
    </ContactFormContext.Provider>
  );
};
