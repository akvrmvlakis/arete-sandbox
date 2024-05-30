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
        <div className="bg-red " key={i}>
          <Link href={item.link} target="blank">
            <Image
              src={item.itemImageSrc}
              className="!w-full object-cover h-auto md:h-[90vh]"
              width={200}
              height={200}
              alt={item.alt}
            />
          </Link>
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
