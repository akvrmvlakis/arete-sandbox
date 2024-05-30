import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  link: string;
};

function Menu() {
  const MenuItem = ({ name, link }: Props) => (
    <Link
      className="min-w-[244px] w-full items-center text-center text-[Helvetica Neue Regular] p-4 border-b-[4px] border-b-[#ffffff45] uppercase  hover:border-b-white"
      href={link}
    >
      {name}
    </Link>
  );

  return (
    <nav className="mt-[45px] w-full gap-4 flex-1 flex flex-col items-center justify-between md:flex-row md:max-w-[1024px]">
      <MenuItem link="#services" name="Services" />
      <MenuItem link="#about" name="About" />
      <MenuItem link="#projects" name="Projects" />
      <MenuItem link="#contact" name="Contact" />
    </nav>
  );
}

export default Menu;
