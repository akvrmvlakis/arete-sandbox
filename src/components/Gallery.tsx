// @ts-nocheck
"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Galleria } from "primereact/galleria";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import { classNames } from "primereact/utils";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./galery.css";
import localFont from "next/font/local";

const pragmaticaW01ExtendedBold = localFont({
  src: "../assets/fonts/pragmatica-w01-extended-bold.woff2",
});

export default function Gallery({ data }) {
  const [images, setImages] = useState(data);
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return <button></button>;
    },
  };

  const List = (item) => {
    return data.map((item, i) => {
      return (
        <div className="bg-red relative" key={i}>
          <Link href={item.link} target="blank">
            <Image
              src={item.itemImageSrc}
              className="!w-full object-cover h-[700px] md:h-[844px]"
              width={200}
              height={200}
              alt={item.alt}
            />
          </Link>

          <Link href={item.link} target="blank">
            <Image
              src={"/images/viewProject.svg"}
              alt="Arete studio"
              width={120}
              height={120}
              className="rounded-text absolute inset-x-0 bottom-0 mx-auto mb-[137px] md:mb-[101.54px] md:w-[120px] md:h-[120px]"
            />
          </Link>

          <div className={pragmaticaW01ExtendedBold.className}>
            <h2 className="text-white uppercase text-2xl absolute md:bottom-[82px] md:right-[31px] bottom-[61px] right-[23px] ">
              {item.title}
            </h2>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="w-full">
      <Slider {...settings}>{List()}</Slider>
    </div>
  );
}
