import React from "react";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

type Props = {};

const Hero = (props: Props) => {
  return (
    <header className="container relative w-full items-center flex flex-col pb-[80px] md:pb-[80px] md:pt-[34px]">
      <div className="relative w-full  z-10 flex flex-col items-center">
        <Link
          className="flex p-4 md:p-[51px] mb-[58px] md:mb-[80px]"
          href={"/"}
        >
          <Image
            src={"/images/logo.svg"}
            alt="Arete studio"
            width={266}
            height={40}
            className="w-[236px] h-[35.53] md:w-[266px] md:h-[40]"
          />
        </Link>
        <h1 className=" max-w-[340px]  md:max-w-2xl text-[48px]  md:text-[90px] leading-none text-center font-bold">
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

        <Menu />
      </div>
      <div className="absolute  h-[920px] justify-center items-center w-full top-0 left-0   hidden xl:flex">
        <video className="w-full" autoPlay loop muted>
          <source src="/videos/background_header.mp4" type="video/mp4" />
        </video>
      </div>
    </header>
  );
};

export default Hero;
