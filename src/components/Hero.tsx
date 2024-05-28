import React from "react";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <header className="relative w-full items-center flex flex-col pb-[100px]">
      <div className="relative w-full  z-10 flex flex-col items-center gap pt-[85px]  ">
        <Image
          src={"/images/logo.svg"}
          alt="Arete studio"
          width={266}
          height={40}
        />

        <h1 className="mt-[131px] max-w-[768px] text-[48px]  md:text-[90px] leading-none text-center font-bold">
          DESIGNS TAILORED FOR YOU
        </h1>
        <span className="rounded-text mt-[63px] cursor-pointer">
          <Image
            src={"/images/roundtext.svg"}
            alt="Arete studio"
            width={89}
            height={89}
            className=" md:w-[120px] md:h-[120px]"
          />
        </span>
      </div>
      <div className="absolute justify-center items-center w-full top-0 left-0   hidden xl:flex">
        <video className="w-full" autoPlay loop muted>
          <source src="/videos/background_header.mp4" type="video/mp4" />
        </video>
      </div>
    </header>
  );
};

export default Hero;
