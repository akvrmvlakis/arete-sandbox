import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col justify-center px-16 py-20 PANTONE_5 max-md:px-5">
      <div className="mt-8 max-md:mr-1 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="self-stretch text-xl font-bold leading-7 uppercase text-zinc-100 max-md:mt-10 max-md:max-w-full">
              OUR MISSION
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="self-stretch text-3xl font-bold leading-10 uppercase text-zinc-100 max-md:mt-10 max-md:max-w-full">
              We combine our expertise in design and development to deliver
              exceptional online experiences that captivate and engage your
              audience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
