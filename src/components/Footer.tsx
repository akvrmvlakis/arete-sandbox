import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="px-1 md:px-8 z-30 w-full flex flex-col justify-center  bg-stone-500">
      <div className=" py-[80px]">
        <div className="flex gap-[68px] font-[Pragmatica W01 Extended Bold] text-zinc-900 items-center justify-between max-md:flex-col">
          <div className="flex flex-col gap-4 max-md:ml-0 max-md:w-full ">
            <div className="flex flex-col items-center">
              <div className="text-center md:text-left">
                <Link href="mailto:olia@aretestudio.co">
                  <div>olia@aretestudio.co</div>

                  <div>@_aretestudio</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[350px] md:w-auto flex items-center justify-center  text-center text-[48px] md:text-[90px] font-bold uppercase leading-[48px]">
            ARETE STUDIO
          </div>
          <div className="">
            <div className="flex flex-col grow items-center md:items-end font-[Helvetica Neue Regular]">
              <Link href="#services">
                <div>OUR SERVICES</div>
              </Link>
              <Link href="#about">
                <div>ABOUT</div>
              </Link>
              <Link href="#projects">
                <div>PROJECTS</div>
              </Link>
              <Link href="#t&c">
                <div>T & C</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
