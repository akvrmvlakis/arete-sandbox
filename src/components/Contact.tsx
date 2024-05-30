import React from "react";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="flex flex-col justify-center py-20 font-bold uppercase PANTONE_5 text-zinc-100  w-full">
      <div className="flex justify-between mt-8 flex-wrap max-md:mr-1 gap-8">
        <div className="self-start text-xl leading-7 max-md:max-w-full">
          Contact
        </div>
        <div className="text-3xl flex items-end justify-end leading-10 max-w-[484px]">
          Ready to take your digital presence to the next level?
        </div>
      </div>
    </div>
  );
}
