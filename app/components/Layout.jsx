"use client";

import React from "react";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";
import HeroImage from "./HeroImage";

const Layout = ({ children }) => {
  const para = usePathname();
  console.log(para, "sudev");
  return (
    <div className=" relative">
      <Navbar />
      {para === "/" && <HeroImage />}
      <div className=" w-full py-20 px-20">{children}</div>
    </div>
  );
};

export default Layout;
