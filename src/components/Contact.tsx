import React from "react";
import localFont from "next/font/local";

const pragmaticaW01ExtendedBold = localFont({
  src: "../assets/fonts/pragmatica-w01-extended-bold.woff2",
});

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="flex flex-col justify-center px-9 py-28 font-bold uppercase PANTONE_5 text-zinc-100  w-full">
      <div className="flex justify-between mt-8 flex-wrap max-md:mr-1 gap-8">
        <div className="self-start text-xl leading-7 max-md:max-w-full">
          <div className={pragmaticaW01ExtendedBold.className}>Contact</div>
        </div>
        <div className="text-[32px] flex items-end justify-end leading-10 max-w-[484px]">
          <div className={pragmaticaW01ExtendedBold.className}>
            Ready to take your digital presence to the next level?
          </div>
        </div>
      </div>
    </div>
  );
}
