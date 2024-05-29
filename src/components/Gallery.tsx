// @ts-nocheck
"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Galleria } from "primereact/galleria";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import { classNames } from "primereact/utils";
import Link from "next/link";

export default function Gallery({ data }) {
  const [images, setImages] = useState(data);
  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];

  const itemTemplate = (item) => {
    return (
      <Link href={item.link} target="blank">
        <Image
          src={item.itemImageSrc}
          className="w-full object-cover h-[80vh]  md:h-[90vh]"
          width={200}
          height={200}
          alt={item.alt}
        />
      </Link>
    );
  };

  const thumbnailTemplate = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} />;
  };

  return (
    <Galleria
      pt={Tailwind.galleria}
      value={data}
      responsiveOptions={responsiveOptions}
      numVisible={5}
      // style={{ maxWidth: "640px" }}
      item={itemTemplate}
      showIndicators={true}
      showThumbnails={false}
    />
  );
}

const Tailwind = {
  galleria: {
    root: "flex flex-col w-full",
    content: "flex flex-col",
    itemwrapper: "flex flex-col relative",
    itemcontainer: "relative flex h-full",
    item: "flex justify-center items-center h-full w-full",
    thumbnailwrapper: "flex flex-col overflow-auto shrink-0",
    thumbnailcontainer: {
      className: classNames("flex flex-row", "bg-black/90"),
    },
    previousthumbnailbutton: {
      className: classNames(
        "self-center flex shrink-0 justify-center items-center overflow-hidden relative",
        "m-2 bg-transparent text-white w-8 h-8 transition duration-200 ease-in-out rounded-full",
        "hover:bg-white/10 hover:text-white",
        "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]"
      ),
    },
    thumbnailitemscontainer: "overflow-hidden w-full",
    thumbnailitems: "flex",
    thumbnailitem: {
      className: classNames(
        "overflow-auto flex items-center justify-center cursor-pointer opacity-50",
        "flex-1 grow-0 shrink-0 w-20",
        "hover:opacity-100 hover:transition-opacity hover:duration-300"
      ),
    },
    nextthumbnailbutton: {
      className: classNames(
        "self-center flex shrink-0 justify-center items-center overflow-hidden relative",
        "m-2 bg-transparent text-white w-8 h-8 transition duration-200 ease-in-out rounded-full",
        "hover:bg-white/10 hover:text-white",
        "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]"
      ),
    },
    indicators: {
      className: classNames(
        "flex absolute bottom-0 right-0 gap-2 items-between z-10 justify-end",
        "p-4"
      ),
    },
    // : "mr-2 bg-white w-4 h-4 rounded-full",
    indicator: ({ context }) => ({
      className: classNames(
        "z-1 w-4 h-4 transition duration-200 rounded-full ",
        "focus:outline-none focus:outline-offset-0",
        {
          "bg-PANTONE_5": !context?.highlighted,
          "bg-white": context?.highlighted,
        }
      ),
    }),
    mask: {
      className: classNames(
        "fixed top-0 left-0 w-full h-full",
        "flex items-center justify-center",
        "bg-black bg-opacity-90"
      ),
    },
    closebutton: {
      className: classNames(
        "absolute top-0 right-0 flex justify-center items-center overflow-hidden m-2",
        "text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out",
        "hover:text-white hover:bg-white/10",
        "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]"
      ),
    },
    closeicon: "w-6 h-6",
    previousitembutton: {
      className: classNames(
        "inline-flex justify-center items-center overflow-hidden",
        "bg-transparent text-white w-16 h-16 transition duration-200 ease-in-out rounded-md mx-2",
        "fixed top-1/2 mt-[-0.5rem]",
        "left-0",
        "hover:bg-white/10 hover:text-white",
        "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]"
      ),
    },
    nextitembutton: {
      className: classNames(
        "inline-flex justify-center items-center overflow-hidden",
        "bg-transparent text-white w-16 h-16 transition duration-200 ease-in-out rounded-md mx-2",
        "fixed top-1/2 mt-[-0.5rem]",
        "right-0",
        "hover:bg-white/10 hover:text-white",
        "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]"
      ),
    },
    caption: {
      className: classNames(
        "absolute bottom-0 left-0 w-full",
        "bg-black/50 text-white p-4"
      ),
    },
    transition: {
      enterFromClass: "opacity-0 scale-75",
      enterActiveClass: "transition-all duration-150 ease-in-out",
      leaveActiveClass: "transition-all duration-150 ease-in",
      leaveToClass: "opacity-0 scale-75",
    },
  },
};
