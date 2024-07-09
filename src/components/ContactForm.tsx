"use client";

import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import Form from "@/components/Form";

const pragmaticaW01ExtendedBold = localFont({
  src: "../assets/fonts/pragmatica-w01-extended-bold.woff2",
});

const HelveticaNeueLight = localFont({
  src: "../assets/fonts/HelveticaNeueLight.woff2",
});

type Props = {};

export default function ContactForm({}: Props) {
  return (
    <div className="h-screen w-full bg-[#1C1C1C] md:bg-current">
      <div className="flex items-center justify-between p-4 md:hidden bg-[#1C1C1C]">
        <Image
          className="md:w-[32px] md:h-[38px]"
          src="/images/mobile-form-logo.svg"
          alt="Arete Logo"
          width={32}
          height={38}
          quality={100}
        />
        <Image
          className="w-[24px] h-[24px]"
          src="/images/close.svg"
          alt="Menu Close Button"
          width={24}
          height={24}
          quality={100}
        />
      </div>
      <div className="grid md:grid-cols-3 w-full md:h-screen">
        <div className="md:block col-span-2 bg-[#7B736B] hidden">
          <div className="md:flex min-h-[72px] items-center bg-[#7B736B] hidden">
            <div className="my-3 ms-[38.5px] bg-[#7B736B] w-full flex justify-start">
              <Image
                className="md:w-[32px] md:h-[38px]"
                src="/images/arete-logo.svg"
                alt="Arete Logo"
                width={32}
                height={38}
                quality={100}
              />
            </div>
          </div>
          <div className="md:flex items-center md:my-[54.5px] md:ms-16 bg-[#7B736B] md:max-w-[616px] hidden">
            <div className="md:h-screen">
              <div className={pragmaticaW01ExtendedBold.className}>
                <h1 className="uppercase text-xl">about</h1>
              </div>
              <div className={pragmaticaW01ExtendedBold.className}>
                <p className="uppercase md:text-[32px] md:mt-6 md:leading-[41.6px]">
                  At Arete Studio, we are architects of digital excellence.
                  Nestled in the historic city of Athens, Greece, our passion
                  for innovation and creativity drives everything we do.
                </p>
              </div>
              <div className="md:mt-10">
                <div className={HelveticaNeueLight.className}>
                  <div className="flex text-base items-center leading-6">
                    <Image
                      className="w-[18px] h-[18px] me-4"
                      src="/images/email.svg"
                      alt="Menu Close Button"
                      width={18}
                      height={18}
                      quality={100}
                    />
                    <Link href="mailto:olia@aretestudio.co">
                      info@aretestudio.co
                    </Link>
                  </div>
                  <div className="flex text-base items-center leading-6 my-4">
                    <Image
                      className="w-[18px] h-[18px] me-4"
                      src="/images/phone.svg"
                      alt="Menu Close Button"
                      width={18}
                      height={18}
                      quality={100}
                    />
                    <Link href="#">
                      <div>You tell me</div>
                    </Link>
                  </div>
                  <div className="flex text-base items-center leading-6">
                    <Image
                      className="w-[18px] h-[18px] me-4"
                      src="/images/pin.svg"
                      alt="Menu Close Button"
                      width={18}
                      height={18}
                      quality={100}
                    />
                    <Link href="#">
                      <div>Somewhere in Athens</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-[#1C1C1C]">
          <div className="md:flex min-h-[72px] flex items-center bg-[#1C1C1C] hidden">
            <div className="my-3 me-[38.5px] bg-[#1C1C1C] w-full flex items-center justify-end">
              <Image
                className="w-[24px] h-[24px]"
                src="/images/close.svg"
                alt="Menu Close Button"
                width={24}
                height={24}
                quality={100}
              />
            </div>
          </div>
          <div className="flex items-center md:my-[54.5px] md:ms-10 md:me-10 bg-[#1C1C1C]">
            <div className="w-full px-4 py-12 md:px-0 md:py-0">
              <div className={pragmaticaW01ExtendedBold.className}>
                <h1 className="uppercase text-2xl leading-[33.6px] text-white">
                  get in touch
                </h1>
              </div>
              <div className={HelveticaNeueLight.className}>
                <p className="text-white mt-4">
                  Discover what sets Arete Studio apart and experience the
                  difference for yourself.
                </p>
              </div>
              <div className="mt-8">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
