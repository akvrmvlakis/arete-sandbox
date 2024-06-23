import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  link: string;
};

function Menu() {
  const MenuItem = ({ name, link }: Props) => (
    <Link
      className="w-full items-center text-center text-PANTONE_1  p-4 border-b-[4px] border-b-[#ffffff45] uppercase  hover:border-b-white"
      href={link}
    >
      {name}
    </Link>
  );

  return (
    <nav className="w-full gap-4 flex-1 flex flex-col px-[30px] md:mb-[80px] items-center justify-between md:flex-row md:max-w-[1024px]">
      <MenuItem link="#services" name="Services" />
      <MenuItem link="#about" name="About" />
      <MenuItem link="#projects" name="Projects" />
      <MenuItem link="#contact" name="Contact" />
    </nav>
  );
}

export default Menu;
