import React from "react";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="flex flex-col justify-center px-16 py-20 font-bold uppercase PANTONE_5 text-zinc-100 max-md:px-5 w-full">
      <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap max-md:mr-1 max-md:max-w-full">
        <div className="self-start text-xl leading-7 max-md:max-w-full">
          Contact
        </div>
        <div className="text-3xl leading-10 max-md:max-w-full">
          Ready to take your digital presence to the next level?
        </div>
      </div>
    </div>
  );
}
