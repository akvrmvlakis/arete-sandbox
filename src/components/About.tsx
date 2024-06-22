import React from "react";
import localFont from "next/font/local";

const pragmaticaW01ExtendedBold = localFont({
  src: "../assets/fonts/pragmatica-w01-extended-bold.woff2",
});

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex w-full flex-col justify-center px-16 py-[112px] pb-[101px] PANTONE_5 ">
      <div className="flex justify-between flex-wrap gap-8 max-md:mr-1 max-md:max-w-full">
        <div className="self-stretch text-xl font-bold leading-7 uppercase text-zinc-100 max-md:mt-10 max-md:max-w-full">
          <div className={pragmaticaW01ExtendedBold.className}>OUR MISSION</div>
        </div>
        <div className="self-stretch text-2xl font-bold leading-8 uppercase text-zinc-100">
          <div className={pragmaticaW01ExtendedBold.className}>
            We combine our expertise in design and development to deliver
            exceptional online experiences that captivate and engage your
            audience.
          </div>
        </div>
      </div>
    </div>
  );
}
