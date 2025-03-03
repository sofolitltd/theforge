import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full container mx-auto p-4">
      <div className=" flex items-center justify-between">
        {/*  */}

        <Image
          src={logo}
          alt="The Forge Logo"
          height={42}
          width={180}
          className=""
        ></Image>

        {/*  */}
        <Menu color=" white" />
      </div>
    </div>
  );
}
