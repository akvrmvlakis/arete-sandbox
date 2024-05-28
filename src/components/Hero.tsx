import React from "react";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <header className="relative w-full items-center flex flex-col mb-[110px]">
      <div className="w-full z-10 flex flex-col items-center gap pt-[85px]  ">
        <Image
          src={"/images/logo.svg"}
          alt="Arete studio"
          width={266}
          height={40}
        />

        <h1 className="mt-[131px] max-w-[768px] sm:text-[48px] md:text-[90px] leading-none text-center font-bold">
          DESIGNS TAILORED FOR YOU
        </h1>
        <span className="rounded-text mt-[63px] cursor-pointer">
          <Image
            src={"/images/roundtext.svg"}
            alt="Arete studio"
            width={120}
            height={120}
          />
        </span>
      </div>
      <div className="fixed z-1  justify-center items-center w-full left-0 bottom-0 min-h-full hidden md:flex">
        <video className={"sm:hidden md:block max-w-auto"} autoPlay loop muted>
          <source src="/videos/background_header.mp4" type="video/mp4" />
        </video>
      </div>
    </header>
  );
};

export default Hero;
