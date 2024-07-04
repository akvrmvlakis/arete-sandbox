import Link from "next/link";
import React from "react";
import localFont from "next/font/local";

const helveticaNeueRegular = localFont({
  src: "../assets/fonts/helvetica_neue_regular.woff2",
});

const pragmaticaW01ExtendedBold = localFont({
  src: "../assets/fonts/pragmatica-w01-extended-bold.woff2",
});

const HelveticaNeueLight = localFont({
  src: "../assets/fonts/HelveticaNeueLight.woff2",
});

type Props = {};

const Services = (props: Props) => {
  return (
    <div className="flex flex-col PANTONE_5 px-16 pt-[112px] pb-[127px]">
      <div className="text-xl font-bold leading-7 text-white uppercase max-md:max-w-full">
        <div className={pragmaticaW01ExtendedBold.className}>OUR SERVICES</div>
      </div>
      <div className="mt-9 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-base text-white w-full">
              <div className="text-3xl font-bold leading-10 uppercase max-md:max-w-full">
                <div className={pragmaticaW01ExtendedBold.className}>
                  Web Design
                </div>
              </div>
              <div className="mt-6 leading-6 font-normal text-base max-md:max-w-full">
                <div className={HelveticaNeueLight.className}>
                  From concept to execution, we create stunning websites
                  tailored to your unique identity.
                </div>
              </div>
              <div className="flex gap-2 justify-center self-start mt-6 leading-[150%]">
                <Link href="#contact">
                  <div className={HelveticaNeueLight.className}>
                    Get in touch
                  </div>
                </Link>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/995873ce168effd516d1f061a4cc47794eaa9edb01fc3435ecc7fd08fd4d7411?apiKey=dbbb3cb1ff2242fd8586eb6e7699f3b4&"
                  className="shrink-0 w-6 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-base text-white max-md:mt-8 max-md:max-w-full">
              <div className="text-3xl font-bold leading-10 uppercase max-md:max-w-full">
                <div className={pragmaticaW01ExtendedBold.className}>
                  Web development
                </div>
              </div>
              <div className="mt-6 leading-6 font-normal max-md:max-w-full">
                <div className={HelveticaNeueLight.className}>
                  Our expert developers bring functionality to the forefront,
                  ensuring seamless user experiences.
                </div>
              </div>
              <div className="flex gap-2 justify-center self-start mt-6 leading-[150%]">
                <Link href="#contact">
                  <div className={HelveticaNeueLight.className}>
                    Get in touch
                  </div>
                </Link>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/995873ce168effd516d1f061a4cc47794eaa9edb01fc3435ecc7fd08fd4d7411?apiKey=dbbb3cb1ff2242fd8586eb6e7699f3b4&"
                  className="shrink-0 w-6 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-base text-white max-md:mt-8 max-md:max-w-full">
              <div className="text-3xl font-bold leading-10 uppercase max-md:max-w-full">
                <div className={pragmaticaW01ExtendedBold.className}>
                  responsive Design
                </div>
              </div>
              <div className="mt-6 leading-6 max-md:max-w-full">
                <div className={HelveticaNeueLight.className}>
                  Reach your audience wherever they are with websites optimized
                  for all devices.
                </div>
              </div>
              <div className="flex gap-2 justify-center self-start mt-6 leading-[150%]">
                <Link href="#contact">
                  <div className={HelveticaNeueLight.className}>
                    Get in touch
                  </div>
                </Link>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/995873ce168effd516d1f061a4cc47794eaa9edb01fc3435ecc7fd08fd4d7411?apiKey=dbbb3cb1ff2242fd8586eb6e7699f3b4&"
                  className="shrink-0 w-6 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
