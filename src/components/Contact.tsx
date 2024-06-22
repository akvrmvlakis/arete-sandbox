import React from "react";
import localFont from "next/font/local";

const pragmaticaW01ExtendedBold = localFont({
  src: "../assets/fonts/pragmatica-w01-extended-bold.woff2",
});

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="grid md:grid-cols-2 pt-[112px] md:pb-[245px] flex text-start">
      <div className={pragmaticaW01ExtendedBold.className}>
        <h1 className="text-xl font-bold uppercase text-white pb-[36px] md:pb-[0px]">
          contact
        </h1>
      </div>
      <div className="text-2xl md:text-[32px] font-bold leading-[42px] pb-[125px] md:pb-0 uppercase text-zinc-100">
        <div className={pragmaticaW01ExtendedBold.className}>
          Ready to take your digital presence to the next level?
        </div>
      </div>
    </div>
  );
}
