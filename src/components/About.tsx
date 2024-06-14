import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex w-full flex-col justify-center px-9 py-[112px] PANTONE_5 ">
      <div className="flex justify-between flex-wrap gap-8 max-md:mr-1 max-md:max-w-full">
        <div className="self-stretch text-xl font-bold leading-7 uppercase text-zinc-100 max-md:mt-10 max-md:max-w-full">
          OUR MISSION
        </div>
        <div className="self-stretch text-3xl font-bold leading-10 uppercase text-zinc-100 max-w-[484px]">
          We combine our expertise in design and development to deliver
          exceptional online experiences that captivate and engage your
          audience.
        </div>
      </div>
    </div>
  );
}
