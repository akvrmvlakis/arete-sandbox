import React from "react";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import localFont from "next/font/local";

const pragmaticaW01ExtendedBold = localFont({
  src: "../assets/fonts/pragmatica-w01-extended-bold.woff2",
});

type Props = {};

const Hero = (props: Props) => {
  return (
    <header className=" relative w-full min-h-screen items-center flex flex-col md:pt-[34px] lg:pt-0">
      <div className="relative w-full z-10 flex flex-col items-center ">
        <div>
          <Link
            className="flex md:py-[51px] py-[12px] mt-[14px] mb-[58px] md:mb-[80px] md:mt-[34px]"
            href={"/"}
          >
            <Image
              src={"/images/logo.svg"}
              alt="Arete studio"
              width={266}
              height={40}
              className="w-[200px] h-[35.53] md:w-[266px] md:h-[40]"
            />
          </Link>
        </div>

        <div className="mx-[28px] md:mx-[372px] md:mb-[39px]">
          <h1 className="text-[48px] text-PANTONE_1  md:text-[90px] leading-none text-center font-bold">
            <div className={pragmaticaW01ExtendedBold.className}>
              DESIGNS TAILORED FOR YOU
            </div>
          </h1>
        </div>

        <span className="rounded-text mt-[44px] md:mb-[71px] mb-[87px] cursor-pointer">
          <Link href="#contact">
            <Image
              src={"/images/roundtext.svg"}
              alt="Arete studio"
              width={89}
              height={89}
              className=" w-[65.67px] h-[65.67px] md:w-[120px] md:h-[120px]"
            />
          </Link>
        </span>

        <Menu />
      </div>
      <div className="video-container px-1 md:px-8 absolute flex-col items-center justify-center flex">
        <video className="absolute  max-w-none" autoPlay loop muted>
          <source src="/videos/background_header.mp4" type="video/mp4" />
        </video>
      </div>
    </header>
  );
};

export default Hero;
