import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="w-full flex flex-col justify-center px-16 py-20 bg-stone-500 max-md:px-5">
      <div className="mt-2.5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center py-9 text-base leading-6 whitespace-nowrap text-zinc-900 max-md:mt-10">
              <div>info@aretestudio.co</div>
              <div>@_aretestudio</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
            <div className="self-stretch my-auto text-8xl font-bold text-center uppercase leading-[108px] text-zinc-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              ARETE STUDIO
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[18%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center py-6 text-base leading-6 text-right text-zinc-900 max-md:mt-10">
              <div>OUR SERVICES</div>
              <div>ABOUT</div>
              <div>PROJECTS</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
