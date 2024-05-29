import Link from "next/link";
import React from "react";

type Props = {};

const Services = (props: Props) => {
  return (
    <div className="flex flex-col px-16 py-20 PANTONE_5 max-md:px-5">
      <div className="mt-8 text-xl font-bold leading-7 text-white uppercase max-md:max-w-full">
        OUR SERVICES
      </div>
      <div className="mt-9 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-base text-white max-md:mt-8 max-md:max-w-full">
              <div className="text-3xl font-bold leading-10 uppercase max-md:max-w-full">
                Web Design
              </div>
              <div className="mt-6 leading-6 max-md:max-w-full">
                From concept to execution, we create stunning websites tailored
                to your unique identity.
              </div>
              <div className="flex gap-2 justify-center self-start mt-8 leading-[150%]">
                <Link href="#contact">
                  <div>Get in touch</div>
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
                Web development
              </div>
              <div className="mt-6 leading-6 max-md:max-w-full">
                Our expert developers bring functionality to the forefront,
                ensuring seamless user experiences.
              </div>
              <div className="flex gap-2 justify-center self-start mt-8 leading-[150%]">
                <Link href="#contact">
                  <div>Get in touch</div>
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
                responsive Design
              </div>
              <div className="mt-6 leading-6 max-md:max-w-full">
                Reach your audience wherever they are with websites optimized
                for all devices.
              </div>
              <div className="flex gap-2 justify-center self-start mt-8 leading-[150%]">
                <Link href="#contact">
                  <div>Get in touch</div>
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
