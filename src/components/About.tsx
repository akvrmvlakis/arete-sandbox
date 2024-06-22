import React from "react";
import localFont from "next/font/local";

const pragmaticaW01ExtendedBold = localFont({
  src: "../assets/fonts/pragmatica-w01-extended-bold.woff2",
});

type Props = {};

export default function About({}: Props) {
  return (
    <div className="grid md:grid-cols-2 pt-[112px] pb-[101px] md:pb-[119px] flex text-start">
      <div className={pragmaticaW01ExtendedBold.className}>
        <h1 className="md:text-xl font-bold text-white pb-[61px] md:pb-[0px]">
          OUR MISSION
        </h1>
      </div>
      <div className="text-2xl md:text-[32px] font-bold leading-[42px] uppercase text-zinc-100">
        <div className={pragmaticaW01ExtendedBold.className}>
          We combine our expertise in design and development to deliver
          exceptional online experiences that captivate and engage your
          audience.
        </div>
      </div>
    </div>
  );
}
