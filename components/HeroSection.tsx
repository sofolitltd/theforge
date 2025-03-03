import { PhoneCall, Star } from "lucide-react";
import React from "react";
import Image from "next/image";
import reyad from "@/public/reyad.png";
import sabbir from "@/public/sabbir.png";
import sabbir_hassan from "@/public/sabbir_hassan.jpeg";

export const HeroSection = () => {
  return (
    <div className=" space-y-6 max-w-2xl pt-16">
      {/*  */}
      <h1 className=" text-4xl font-bold">
        Build a Brand That Commands Attention, Converts & Scales
      </h1>

      {/*  */}
      <h3 className="">
        We help Founders, Business owners, Startups, and Real estate agents
        dominate LinkedIn, craft high-converting websites, and scale with
        powerful content and branding
      </h3>

      {/*  */}
      <div className=" flex item-center justify-items-center gap-3 border-2 border-gray-200 rounded-md bg-white text-black px-6 py-2 w-fit">
        {/*  */}

        <PhoneCall width={20} height={20} />
        {/*  */}
        <p>Book a Discovery Call</p>
      </div>

      {/*  */}

      <div className=" flex gap-6 items-end">
        {/*  */}
        <div className=" flex">
          <Image
            src={sabbir}
            alt="1"
            className="z-0 rounded-full size-10"
          ></Image>
          <Image
            src={reyad}
            alt="2"
            className="z-10 -ml-2 rounded-full size-10"
          ></Image>
          <Image
            src={sabbir_hassan}
            alt="3"
            className="z-20 -ml-2 rounded-full size-10"
          ></Image>
        </div>

        {/*  */}
        <div className="">
          
          <div className=" flex">
            <Star size={16} fill="#fff" stroke="0" />
            <Star size={16} fill="#fff" stroke="0" />
            <Star size={16} fill="#fff" stroke="0" />
            <Star size={16} fill="#fff" stroke="0" />
            <Star size={16} fill="#fff" stroke="0" />
    
          </div>
          <p className=" text-xs font-extralight mt-1">Trusted by industry leaders</p>
        </div>
      </div>
    </div>
  );
};
