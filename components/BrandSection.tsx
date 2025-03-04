import React from "react";
import Image, { StaticImageData } from "next/image";
import orange_crew from "@/public/orange_crew.png";
import design_mingle_logo from "@/public/design_mingle_logo.png";
import sofol_it from "@/public/sofol_it.png";
import genxsolutions_logo from "@/public/genxsolutions_logo.png";

type Brands = {
  title: string;
  image: StaticImageData;
};

const services: Brands[] = [
  {
    title: "Design Mingle",
    image: design_mingle_logo,
  },
  {
    title: "GenX",
    image: genxsolutions_logo,
  },
  {
    title: "Sofol IT",
    image: sofol_it,
  },
  {
    title: "Orange Crew",
    image: orange_crew,
  },
];

export const BrandSection = () => {
  return (
    <div className="">
      <h1 className="text-2xl mb-6 text-center">Trusted by industry leaders</h1>

      {/*  */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-10">
        {services.map((service, index) => (
        //   <div key={index} className="border border-slate-50/10 rounded-md p-4 w-auto">
          <div key={index} className="border border-slate-50/5 bg-slate-50/2 rounded-md p-4 w-auto">
            <div className="flex gap-4 items-center justify-center ">
              <Image src={service.image} alt={service.title} height={40} className=" rounded-full"/>
              <p className=" text-gray-100/60">{service.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
